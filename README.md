# deanslist.app

The public website for **DeansList** — a native iOS app for NCAA Men's college basketball.

Hand-built static HTML/CSS/JS. No build step. Deployed on Cloudflare Pages.

## Structure

```
/                  Home — hero, features, Pro, coverage, screenshots, about-maker, contact
/support/          Support — email + FAQ
/privacy/          Privacy Policy — App-Store-required disclosures

assets/css/        Design tokens + component styles (sibling of romellbolton.com + theboltonfoundation.org)
assets/js/         Mobile-nav toggle + footer year stamp
assets/img/        DeansList mark, OG card, screenshot exports
```

## Design language

Sibling of [romellbolton.com](https://www.romellbolton.com) and
[theboltonfoundation.org](https://theboltonfoundation.org) — same section/callout/impact-grid vocabulary,
with the accent switched to **NCAA blue (`#009CDE`)** to match the iOS app icon. Dark mode is automatic
via `prefers-color-scheme`.

## Local preview

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080`.

## Assets in place

- Favicons + brand mark all derived from the actual iOS app icon (DeansList/DeansListWidgets/Assets.xcassets/AppIcon.appiconset/AppIcon.png)
- 12 screenshots (6 iPhone + 6 iPad) from ~/Desktop/DeansList/

## Deploying

See [DEPLOY.md](./DEPLOY.md). Cloudflare Pages, same pattern as the sister sites.

## License

MIT — see [LICENSE](./LICENSE). Covers the site's code and design.
