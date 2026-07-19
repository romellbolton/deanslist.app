# Deploying statline.app

Same stack as [romellbolton.com](https://www.romellbolton.com) and
[theboltonfoundation.org](https://theboltonfoundation.org): **Cloudflare Pages** for hosting,
**Cloudflare DNS** for the domain, **Cloudflare Email Routing** for `hi@statline.app`.

## First-time setup

1. **Register the domain** at any registrar (Cloudflare Registrar recommended — no markup, ~$14/yr for `.app`).
2. **Move DNS to Cloudflare**:
   - Cloudflare dashboard → **Add a site** → `statline.app` → Free plan.
   - Update nameservers at the registrar with the two Cloudflare provides.
   - Wait for propagation (minutes to 24h).
3. **Create the Pages project**:
   - Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
   - Project name: `statline`.
   - Drag the zip built via the instructions below.
4. **Attach the custom domain**:
   - In the Pages project → **Custom domains** → **Set up a custom domain** → `statline.app`.
5. **Enable Email Routing** for `hi@statline.app`:
   - Cloudflare dashboard → the `statline.app` zone → **Email** → **Email Routing** → **Enable**.
   - Destination: your normal inbox; verify via confirmation email.
   - Custom address → `hi@statline.app` → forward to your inbox.
6. **Gmail "Send as"** (optional): Gmail → Settings → Accounts and Import → Send mail as → Add `hi@statline.app`.

## Publishing a new version

```bash
cd ~/Developer/personal/statline.app
zip -r ../statline-site.zip . -x "*.DS_Store" "*.git*" ".claude/*"
```

Cloudflare dashboard → **Workers & Pages** → **statline** → **Create deployment** → drag zip → **Deploy**.

## Rolling back

Cloudflare Pages keeps every previous deployment. Dashboard → project → **Deployments** → **⋯** → **Rollback**.

## Editing content

Everything is inline HTML in each page. Search for the section heading and edit. Design tokens
(colors, spacing, type scale) live at the top of `assets/css/styles.css` under `:root`.
