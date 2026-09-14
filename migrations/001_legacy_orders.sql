-- Original order schema, pre-v2. Superseded by orders_v2 (see
-- 004_orders_v2.sql).
CREATE TABLE legacy_orders (
    id SERIAL PRIMARY KEY,
    customer_email TEXT NOT NULL,
    total_cents INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT now()
);
"-- reviewed" 
