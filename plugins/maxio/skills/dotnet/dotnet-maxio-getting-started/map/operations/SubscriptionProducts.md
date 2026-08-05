# SubscriptionProducts — operations

Accessor: `client.SubscriptionProducts` · Source: `Api/SubscriptionProducts.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MigrateSubscriptionProduct
- **HTTP**: `POST /subscriptions/{subscription_id}/migrations.json` (Production)
- **Notes**: Migrates a subscription to a different product. In order to create a migration, you must pass the `product_id` or `product_handle` in the object when you send a POST request. You may also pass either a `product_price_point_id` or `product_price_point_handle` to choose which price point the subscription is moved to. If no price point identifier is passed the subscription will be moved to the products default price point. The response will be the updated subscription. Valid Subscriptions Subscriptions should be in the `active` or `trialing` state in order to be migrated. (For backwards compatibility reasons, it is possible to migrate a subscription that is in the `trial_ended` state via the API, however this is not recommended. Since `trial_ended` is an end-of-life state, the subscription should be canceled, the product changed, and then the subscription can be reactivated.) Migrations Documentation Full documentation on how to record Migrations in the Advanced Billing UI can be located here . Failed Migrations Important note: One of the most common ways that a migration can fail is when the attempt is made to migrate a subscription to its current product. 3D Secure (3DS) Authentication post-authentication flow When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. See the 3D Secure Post-Authentication Flow article in the product documentation to learn how to manage the redirect flow.
- **Signature**: `MigrateSubscriptionProduct(int subscriptionId, SubscriptionProductMigrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<MigrateSubscriptionProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PreviewSubscriptionProductMigration
- **HTTP**: `POST /subscriptions/{subscription_id}/migrations/preview.json` (Production)
- **Notes**: Previews the charges resulting from migrating a subscription to a different product. Previewing a future date It is also possible to preview the migration for a date in the future, as long as it's still within the subscription's current billing period, by passing a `proration_date` along with the request (e.g., `"proration_date": "2020-12-18T18:25:43.511Z"`). This will calculate the prorated adjustment, charge, payment and credit applied values assuming the migration is done at that date in the future as opposed to right now.
- **Signature**: `PreviewSubscriptionProductMigration(int subscriptionId, SubscriptionMigrationPreviewRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionMigrationPreviewResponse`
- **Error**: `SdkException<PreviewSubscriptionProductMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
