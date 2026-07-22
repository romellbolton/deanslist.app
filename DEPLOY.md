# Deploying deanslist.app

Same stack as [romellbolton.com](https://www.romellbolton.com) and
[theboltonfoundation.org](https://theboltonfoundation.org): **Cloudflare Pages** for hosting,
**Cloudflare DNS** for the domain, **Cloudflare Email Routing** for `hi@deanslist.app`.

## First-time setup

1. **Register the domain** at any registrar (Cloudflare Registrar recommended — no markup, ~$14/yr for `.app`).
2. **Move DNS to Cloudflare**:
   - Cloudflare dashboard → **Add a site** → `deanslist.app` → Free plan.
   - Update nameservers at the registrar with the two Cloudflare provides.
   - Wait for propagation (minutes to 24h).
3. **Create the Pages project**:
   - Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
   - Project name: `deanslist`.
   - Drag the zip built via the instructions below.
4. **Attach the custom domain**:
   - In the Pages project → **Custom domains** → **Set up a custom domain** → `deanslist.app`.
5. **Enable Email Routing** for `hi@deanslist.app`:
   - Cloudflare dashboard → the `deanslist.app` zone → **Email** → **Email Routing** → **Enable**.
   - Destination: your normal inbox; verify via confirmation email.
   - Custom address → `hi@deanslist.app` → forward to your inbox.
6. **Gmail "Send as"** (optional): Gmail → Settings → Accounts and Import → Send mail as → Add `hi@deanslist.app`.

## Publishing a new version

```bash
cd ~/Developer/personal/deanslist.app
zip -r ../deanslist-site.zip . -x "*.DS_Store" "*.git*" ".claude/*"
```

Cloudflare dashboard → **Workers & Pages** → **deanslist** → **Create deployment** → drag zip → **Deploy**.

## Rolling back

Cloudflare Pages keeps every previous deployment. Dashboard → project → **Deployments** → **⋯** → **Rollback**.

## Editing content

Everything is inline HTML in each page. Search for the section heading and edit. Design tokens
(colors, spacing, type scale) live at the top of `assets/css/styles.css` under `:root`.
