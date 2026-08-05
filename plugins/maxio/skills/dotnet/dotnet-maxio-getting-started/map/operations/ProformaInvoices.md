# ProformaInvoices — operations

Accessor: `client.ProformaInvoices` · Source: `Api/ProformaInvoices.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConsolidatedProformaInvoice
- **HTTP**: `POST /subscription_groups/{uid}/proforma_invoices.json` (Production)
- **Notes**: Creates a consolidated proforma invoice asynchronously. It will return a 201 with no message, or a 422 with any errors. To find and view the new consolidated proforma invoice, you may poll the subscription group listing for proforma invoices; only one consolidated proforma invoice may be created per group at a time. If the information becomes outdated, simply void the old consolidated proforma invoice and generate a new one. Restrictions Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice, the subscription must not be prepaid, and must be in a live state.
- **Signature**: `CreateConsolidatedProformaInvoice(string uid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateConsolidatedProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateProformaInvoice
- **HTTP**: `POST /subscriptions/{subscription_id}/proforma_invoices.json` (Production)
- **Notes**: Creates a proforma invoice and returns it as a response. If the information becomes outdated, simply void the old proforma invoice and generate a new one. If you would like to preview the next billing amounts without generating a full proforma invoice, use the renewal preview endpoint. Restrictions Proforma invoices are only available on Relationship Invoicing sites. To create a proforma invoice, the subscription must not be in a group, must not be prepaid, and must be in a live state.
- **Signature**: `CreateProformaInvoice(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProformaInvoice`
- **Error**: `SdkException<CreateProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSignupProformaInvoice
- **HTTP**: `POST /subscriptions/proforma_invoices.json` (Production)
- **Notes**: Creates a proforma invoice to preview costs before a subscription's signup. This endpoint is only available for Relationship Invoicing sites and cannot be used to create consolidated proforma invoices or preview prepaid subscriptions. Like other proforma invoices, it can be emailed to the customer, voided, and publicly viewed on the chargifypay domain. Pass a payload that resembles a subscription create or signup preview request. For example, you can specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment profile to populate a shipping or billing address. A product and customer first name, last name, and email are the minimum requirements. We recommend associating the proforma invoice with a customer_id to easily find their proforma invoices, since the subscription_id will always be blank.
- **Signature**: `CreateSignupProformaInvoice(CreateSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProformaInvoice`
- **Error**: `SdkException<CreateSignupProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetProformaBadRequestErrorResponse1(out ProformaBadRequestErrorResponse1)` [400] · `TryGetErrorArrayMapResponse1(out ErrorArrayMapResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeliverProformaInvoice
- **HTTP**: `POST /proforma_invoices/{proforma_invoice_uid}/deliveries.json` (Production)
- **Notes**: Delivers a proforma invoice programmatically via email. Supports email delivery to direct recipients, carbon-copy (cc) recipients, and blind carbon-copy (bcc) recipients. If `recipient_emails` is omitted, the system will fall back to the primary recipient derived from the invoice or subscription. At least one recipient must be present, either via the request body or via this default behavior, so an empty body may still succeed when defaults are available.
- **Signature**: `DeliverProformaInvoice(string proformaInvoiceUid, DeliverProformaInvoiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProformaInvoice`
- **Error**: `SdkException<DeliverProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListProformaInvoices
- **HTTP**: `GET /subscriptions/{subscription_id}/proforma_invoices.json` (Production)
- **Notes**: Lists proforma invoices for a subscription. By default, results only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, or `custom_fields`. To include breakdowns, pass the specific field as a key in the query with a value set to `true`.
- **Signature**: `ListProformaInvoices(int subscriptionId, string? startDate, string? endDate, ProformaInvoiceStatus? status, Direction? direction, int? page = 1, int? perPage = 20, bool? lineItems = false, bool? discounts = false, bool? taxes = false, bool? credits = false, bool? payments = false, bool? customFields = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startDate` … `direction`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `lineItems` = false, `discounts` = false, `taxes` = false, `credits` = false, `payments` = false, `customFields` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `start_date` ← `startDate`, `end_date` ← `endDate`, `status` ← `status`, `page` ← `page`, `per_page` ← `perPage`, `direction` ← `direction`, `line_items` ← `lineItems`, `discounts` ← `discounts`, `taxes` ← `taxes`, `credits` ← `credits`, `payments` ← `payments`, `custom_fields` ← `customFields`
- **Returns**: `ListProformaInvoicesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListSubscriptionGroupProformaInvoices
- **HTTP**: `GET /subscription_groups/{uid}/proforma_invoices.json` (Production)
- **Notes**: Lists proforma invoices with a `consolidation_level` of parent for the subscription group. By default, proforma invoices returned on the index will only include totals, not detailed breakdowns for `line_items`, `discounts`, `taxes`, `credits`, `payments`, `custom_fields`. To include breakdowns, pass the specific field as a key in the query with a value set to true.
- **Signature**: `ListSubscriptionGroupProformaInvoices(string uid, bool? lineItems = false, bool? discounts = false, bool? taxes = false, bool? credits = false, bool? payments = false, bool? customFields = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `lineItems` = false, `discounts` = false, `taxes` = false, `credits` = false, `payments` = false, `customFields` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `line_items` ← `lineItems`, `discounts` ← `discounts`, `taxes` ← `taxes`, `credits` ← `credits`, `payments` ← `payments`, `custom_fields` ← `customFields`
- **Returns**: `ListProformaInvoicesResponse`
- **Error**: `SdkException<ListSubscriptionGroupProformaInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PreviewProformaInvoice
- **HTTP**: `POST /subscriptions/{subscription_id}/proforma_invoices/preview.json` (Production)
- **Notes**: Previews the data that will be included on a given subscription's proforma invoice if one were to be generated. It will have similar line items and totals as a renewal preview, but the response will be presented in the format of a proforma invoice. Consequently it will include additional information such as the name and addresses that will appear on the proforma invoice. The preview endpoint is subject to all the same conditions as the proforma invoice endpoint. For example, previews are only available on the Relationship Invoicing architecture, and previews cannot be made for end-of-life subscriptions. If all the data returned in the preview is as expected, you may then create a static proforma invoice and send it to your customer. The data within a preview will not be saved and will not be accessible after the call is made. Alternatively, if you have some proforma invoices already, you may make a preview call to determine whether any billing information for the subscription's upcoming renewal has changed.
- **Signature**: `PreviewProformaInvoice(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProformaInvoice`
- **Error**: `SdkException<PreviewProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PreviewSignupProformaInvoice
- **HTTP**: `POST /subscriptions/proforma_invoices/preview.json` (Production)
- **Notes**: Creates a signup preview in the format of a proforma invoice to preview costs before a subscription's signup. This endpoint is only available for Relationship Invoicing sites and cannot be used to create consolidated proforma invoice previews or preview prepaid subscriptions. You have the option of previewing the first renewal's costs as well. The proforma invoice preview will not be persisted. Pass a payload that resembles a subscription create or signup preview request. For example, you can specify components, coupons/a referral, offers, custom pricing, and an existing customer or payment profile to populate a shipping or billing address. A product and customer first name, last name, and email are the minimum requirements.
- **Signature**: `PreviewSignupProformaInvoice(CreateSignupProformaPreviewInclude? include, CreateSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `SignupProformaPreviewResponse`
- **Error**: `SdkException<PreviewSignupProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetProformaBadRequestErrorResponse1(out ProformaBadRequestErrorResponse1)` [400] · `TryGetErrorArrayMapResponse1(out ErrorArrayMapResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadProformaInvoice
- **HTTP**: `GET /proforma_invoices/{proforma_invoice_uid}.json` (Production)
- **Notes**: Returns the details of an existing proforma invoice. Restrictions Proforma invoices are only available on Relationship Invoicing sites.
- **Signature**: `ReadProformaInvoice(string proformaInvoiceUid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProformaInvoice`
- **Error**: `SdkException<ReadProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VoidProformaInvoice
- **HTTP**: `POST /proforma_invoices/{proforma_invoice_uid}/void.json` (Production)
- **Notes**: Voids a proforma invoice that has the status "draft". Restrictions Proforma invoices are only available on Relationship Invoicing sites. Only proforma invoices that have the appropriate status may be reopened. If the invoice identified by {uid} does not have the appropriate status, the response will have HTTP status code 422 and an error message. A reason for the void operation is required to be included in the request body. If one is not provided, the response will have HTTP status code 422 and an error message.
- **Signature**: `VoidProformaInvoice(string proformaInvoiceUid, VoidInvoiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProformaInvoice`
- **Error**: `SdkException<VoidProformaInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
