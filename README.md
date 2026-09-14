# ShopFast

Order processing and checkout backend for ShopFast. Handles cart,
payment intent creation, and order fulfillment webhooks.

## Local development

```bash
npm install
npm run migrate
npm start
```

## Database

Postgres. See `migrations/` for schema history. The `legacy_orders`
table (pre-v2 schema) is still referenced by a few reporting jobs —
confirm with the backend lead before dropping it.
