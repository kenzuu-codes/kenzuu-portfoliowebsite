# Manual Hero Section Adjustment Guide

I'll give you a safe, step-by-step guide to adjust the hero animation size without breaking anything.

---

## 📁 Files You'll Edit

1. **`src/app/page.tsx`** - Main hero component (animation sizing)
2. **`src/app/globals.css`** - Responsive breakpoints (optional)

---

## 🎯 Safe Parameters to Adjust

### **Option A: Quick Fix (Single Change)**

**File:** `src/app/page.tsx`

**Find this section** (around line 200-220):

```tsx
<div
  className="heroAnimation"
  style={{
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: 'clamp(600px, 105vh, 1200px)',  // ← CHANGE THIS
    overflow: 'visible',
  }}
>
```

**What to change:**
```tsx
// Current (character extends far below)
minHeight: 'clamp(600px, 105vh, 1200px)',

// Option 1: Slightly smaller (character touches footer)
minHeight: 'clamp(550px, 100vh, 1100px)',

// Option 2: Much smaller (character stays above footer)
minHeight: 'clamp(500px, 95vh, 1000px)',

// Option 3: Larger (character extends more behind footer)
minHeight: 'clamp(650px, 110vh, 1300px)',
```

**How `clamp()` works:**
- First value (`600px`): Minimum size on tiny screens
- Second value (`105vh`): Preferred size (105% of viewport height)
- Third value (`1200px`): Maximum size on huge screens

---

### **Option B: Precise Control (Multiple Changes)**

#### **1. Adjust Container Height**

**File:** `src/app/page.tsx`

**Location:** `.heroAnimation` div style (around line 210)

```tsx
minHeight: 'clamp(600px, 105vh, 1200px)',
```

**Adjust to:**
```tsx
minHeight: 'clamp(550px, 100vh, 1100px)',  // Reduces overall height
```

---

#### **2. Adjust Video Element Size**

**File:** `src/app/page.tsx`

**Find the `<video>` tag** (around line 235):

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/hero home page/hero page fallback.png"
  aria-hidden="true"
  style={{
    width: 'clamp(140%, 160% + 3vw, 180%)',
    height: '100%',
    minHeight: 'clamp(600px, 105vh, 1100px)',  // ← CHANGE THIS
    maxHeight: 'calc(100vh - var(--header-height) - 1rem)',
    objectFit: 'contain',
    objectPosition: 'center bottom',
    transform: 'translateX(clamp(-5%, -2% + 1vw, 2%)) scale(1.15)',
    transformOrigin: 'bottom center',
  }}
>
```

**Parameters you can safely adjust:**

| Parameter | Current Value | What It Does | Safe Range |
|-----------|---------------|--------------|------------|
| `minHeight` | `clamp(600px, 105vh, 1100px)` | Character height | `90vh - 110vh` |
| `scale(1.15)` | `1.15` | Overall size multiplier | `1.0 - 1.25` |
| `objectPosition` | `center bottom` | Where character anchors | `center bottom`, `center center`, `left bottom` |
| `width` | `clamp(140%, 160% + 3vw, 180%)` | Horizontal size | `120% - 200%` |

---

### **Example Adjustments**

#### **Make Character Smaller (Above Footer):**

```tsx
// Container
minHeight: 'clamp(500px, 95vh, 1000px)',

// Video
style={{
  minHeight: 'clamp(500px, 95vh, 1000px)',
  transform: 'translateX(clamp(-5%, -2% + 1vw, 2%)) scale(1.1)',  // Changed from 1.15
  // ... rest stays same
}}
```

#### **Make Character Larger (Extend Behind Footer):**

```tsx
// Container
minHeight: 'clamp(650px, 110vh, 1300px)',

// Video
style={{
  minHeight: 'clamp(650px, 110vh, 1200px)',
  transform: 'translateX(clamp(-5%, -2% + 1vw, 2%)) scale(1.2)',  // Changed from 1.15
  // ... rest stays same
}}
```

---

## 🎨 Advanced: Adjust Bottom Margin (Footer Overlap)

**File:** `src/app/page.tsx`

**Find:** `.heroAnimation` container style

**Add or modify:**

```tsx
<div
  className="heroAnimation"
  style={{
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: 'clamp(600px, 105vh, 1200px)',
    overflow: 'visible',
    marginBottom: 'clamp(-8rem, -12vh, -10rem)',  // ← ADD/CHANGE THIS
  }}
>
```

**Negative margin options:**

| Value | Effect |
|-------|--------|
| `0` | No overlap, character stops at footer |
| `-5vh` | Slight overlap (5% of viewport height) |
| `-10vh` | Moderate overlap (current) |
| `-15vh` | Strong overlap, extends far behind footer |
| `clamp(-5rem, -10vh, -8rem)` | Responsive overlap |

---

## 📱 Responsive Breakpoints (Optional)

If you want different sizes on mobile/tablet/desktop, edit `src/app/globals.css`:

**Find these sections** (around line 400-600):

### **Desktop (>1200px)**
```css
@media (min-width: 1200px) {
  .heroAnimation {
    min-height: clamp(650px, 105vh, 1200px); /* Adjust here */
  }
  
  .heroAnimation video {
    min-height: clamp(650px, 105vh, 1100px); /* Adjust here */
  }
}
```

### **Tablet (860px - 1199px)**
```css
@media (min-width: 860px) and (max-width: 1199px) {
  .heroAnimation {
    min-height: clamp(600px, 102vh, 1000px); /* Adjust here */
  }
}
```

### **Mobile (<860px)**
```css
@media (max-width: 859px) {
  .heroAnimation {
    min-height: 50vh; /* Adjust here */
    margin-bottom: -6vh; /* Adjust overlap here */
  }
}
```

---

## ✅ Testing Checklist After Changes

After making changes, test:

1. **Desktop (1920x1080):**
   - [ ] Character visible and properly sized
   - [ ] Pants reach footer (or don't, if that's your goal)
   - [ ] No weird cropping at top

2. **Tablet (768px - 1024px):**
   - [ ] Character still looks good
   - [ ] Layout doesn't break

3. **Mobile (375px - 640px):**
   - [ ] Character centered below text
   - [ ] No horizontal scrolling
   - [ ] Text remains readable

4. **Browser Resize:**
   - [ ] Smoothly adjusts as you drag window smaller/larger
   - [ ] No sudden jumps or breaks

---

## 🚨 What NOT to Change (Will Break Layout)

**Don't touch these unless you know what you're doing:**

- `display: 'flex'` on containers
- `gridTemplateColumns` values
- `zIndex` values
- `position: 'relative'` or `'absolute'`
- Header/footer components
- `useEffect` hook for toggle alignment

---

## 💾 Recommended Safe Workflow

1. **Backup your file first:**
   ```bash
   cp src/app/page.tsx src/app/page.tsx.backup
   ```

2. **Make ONE change at a time**

3. **Save and check browser** (it auto-refreshes with Next.js)

4. **If it breaks:** Undo (Ctrl+Z) or restore backup

5. **Once happy:** Commit changes to git

---

## 🎯 Quick Recommendations

**For your current issue (pants not touching footer):**

**Change this in `src/app/page.tsx`:**

```tsx
// Find the heroAnimation container (around line 210)
<div
  className="heroAnimation"
  style={{
    // ... other properties
    minHeight: 'clamp(600px, 108vh, 1250px)',  // Changed from 105vh to 108vh
    marginBottom: 'clamp(-10rem, -14vh, -12rem)',  // Changed from -12vh
  }}
>
```

**And the video element (around line 235):**

```tsx
<video
  // ... attributes
  style={{
    // ... other properties
    minHeight: 'clamp(600px, 108vh, 1150px)',  // Changed from 105vh
    transform: 'translateX(clamp(-5%, -2% + 1vw, 2%)) scale(1.18)',  // Changed from 1.15
  }}
>
```

This will make the character about **3% taller** and extend **2vh more** behind the footer.

---

## 📝 Notes

- All changes are CSS-only, no logic modifications needed
- Changes are responsive by design using `clamp()` functions
- Test across multiple screen sizes after adjusting
- Keep backups before making changes
- Commit working changes to version control

---

**Last Updated:** November 21, 2025  
**Related Files:** `src/app/page.tsx`, `src/app/globals.css`, `.hero-refactor-qa-checklist.md`
