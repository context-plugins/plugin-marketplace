# Customers — operations

Accessor: `client.Customers` · Source: `Api/Customers.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomer
- **HTTP**: `POST /customers.json` (Production)
- **Notes**: Creates a new customer; can also be created alongside a new subscription. The only validation restriction is that you may only create one customer for a given reference value. If provided, the `reference` value must be unique. It represents a unique identifier for the customer from your own app, i.e. the customer’s ID. This allows you to retrieve a given customer via a piece of shared information. Alternatively, you may choose to leave `reference` blank, and store Advanced Billing’s unique ID for the customer, which is in the `id` attribute. Full documentation on how to locate, create and edit Customers in the Advanced Billing UI can be located here . Required Country Format Advanced Billing requires that you use the ISO Standard Country codes when formatting country attribute of the customer. Countries should be formatted as 2 characters. For more information, see the following wikipedia article on ISO_3166-1. Required State Format Advanced Billing requires that you use the ISO Standard State codes when formatting state attribute of the customer. US States (2 characters): ISO_3166-2 States Outside the US (2-3 characters): To find the correct state codes outside of the US, go to ISO_3166-1 and click on the link in the “ISO 3166-2 codes” column next to country you wish to populate. Locale Advanced Billing allows you to attribute a language/region to your customer to deliver invoices in any required language. For more: Customer Locale
- **Signature**: `CreateCustomer(CreateCustomerRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CustomerResponse`
- **Error**: `SdkException<CreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetCustomerErrorResponse1(out CustomerErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomer
- **HTTP**: `DELETE /customers/{id}.json` (Production)
- **Notes**: Deletes the customer.
- **Signature**: `DeleteCustomer(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerSubscriptions
- **HTTP**: `GET /customers/{customer_id}/subscriptions.json` (Production)
- **Notes**: Lists all subscriptions that belong to a customer. If you have the new Catalog experience enabled, subscriptions no longer require an associated product. For subscriptions without an associated product, 'product', 'product_price_point_id', and 'product_price_point_type' are returned as 'null'.
- **Signature**: `ListCustomerSubscriptions(int customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SubscriptionResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomers
- **HTTP**: `GET /customers.json` (Production)
- **Notes**: Lists all customers associated with your site, or filters results using the search parameter. Find Customer Use the search feature with the `q` query parameter to retrieve an array of customers that matches the search query. Common use cases are: Search by an email Search by an Advanced Billing ID Search by an organization Search by a reference value from your application Search by a first or last name To retrieve a single, exact match by reference, use the lookup endpoint .
- **Signature**: `ListCustomers(SortingDirection? direction, BasicDateField? dateField, string? startDate, string? endDate, string? startDatetime, string? endDatetime, string? q, int? page = 1, int? perPage = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `q`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `date_field` ← `dateField`, `start_date` ← `startDate`, `end_date` ← `endDate`, `start_datetime` ← `startDatetime`, `end_datetime` ← `endDatetime`, `q` ← `q`
- **Returns**: `IReadOnlyList<CustomerResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadCustomer
- **HTTP**: `GET /customers/{id}.json` (Production)
- **Notes**: Retrieves the Customer properties by Advanced Billing-generated Customer ID.
- **Signature**: `ReadCustomer(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReadCustomerByReference
- **HTTP**: `GET /customers/lookup.json` (Production)
- **Notes**: Returns a customer by their unique reference ID. It will return a single match.
- **Signature**: `ReadCustomerByReference(string reference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `reference` ← `reference`
- **Returns**: `CustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCustomer
- **HTTP**: `PUT /customers/{id}.json` (Production)
- **Notes**: Updates the customer.
- **Signature**: `UpdateCustomer(int id, UpdateCustomerRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CustomerResponse`
- **Error**: `SdkException<UpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetCustomerErrorResponse1(out CustomerErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
