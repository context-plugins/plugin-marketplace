# BillingPortal — operations

Accessor: `client.BillingPortal` · Source: `Api/BillingPortal.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EnableBillingPortalForCustomer
- **HTTP**: `POST /portal/customers/{customer_id}/enable.json` (Production)
- **Notes**: Enables Billing Portal access for a customer, with an option to send an invitation email at the same time. Billing Portal Documentation Full documentation on how the Billing Portal operates within the Advanced Billing UI can be located here . This documentation is focused on how to configure the Billing Portal Settings, as well as Subscriber Interaction and Merchant Management of the Billing Portal. You can use this endpoint to enable Billing Portal access for a Customer, with the option of sending the Customer an Invitation email at the same time. Billing Portal Security If your customer has been invited to the Billing Portal, then they will receive a link to manage their subscription (the “Management URL”) automatically at the bottom of their statements, invoices, and receipts. This link changes periodically for security and is only valid for 65 days. If you need to provide your customer their Management URL through other means, you can retrieve it via the API. Because the URL is cryptographically signed with a timestamp, it is not possible for merchants to generate the URL without requesting it from Advanced Billing. In order to prevent abuse &amp; overuse, we ask that you request a new URL only when absolutely necessary. Management URLs are good for 65 days, so you should re-use a previously generated one as much as possible. If you use the URL frequently (such as to display on your website), do not make an API request to Advanced Billing every time.
- **Signature**: `EnableBillingPortalForCustomer(int customerId, AutoInvite? autoInvite, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `autoInvite` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `auto_invite` ← `autoInvite`
- **Returns**: `CustomerResponse`
- **Error**: `SdkException<EnableBillingPortalForCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadBillingPortalLink
- **HTTP**: `GET /portal/customers/{customer_id}/management_link.json` (Production)
- **Notes**: Returns the exact URL required for a subscriber to access the Billing Portal. Rules for Management Link API When retrieving a management URL, multiple requests for the same customer in a short period will return the same URL We will not generate a new URL for 15 days You must cache and remember this URL if you are going to need it again within 15 days Only request a new URL after the `new_link_available_at` date You are limited to 15 requests for the same URL. If you make more than 15 requests before `new_link_available_at`, you will be blocked from further Management URL requests (with a response code `429`).
- **Signature**: `ReadBillingPortalLink(int customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PortalManagementLink`
- **Error**: `SdkException<ReadBillingPortalLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetTooManyManagementLinkRequestsError(out TooManyManagementLinkRequestsError)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResendBillingPortalInvitation
- **HTTP**: `POST /portal/customers/{customer_id}/invitations/invite.json` (Production)
- **Notes**: Resends a customer's Billing Portal invitation. If you attempt to resend an invitation 5 times within 30 minutes, you will receive a `422` response with an `error` message in the body. If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer, you will receive a `422` error response. If you attempt to resend an invitation when the Customer does not exist, you will receive a `404` error response. Limitations This endpoint will only return a JSON response.
- **Signature**: `ResendBillingPortalInvitation(int customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResentInvitation`
- **Error**: `SdkException<ResendBillingPortalInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RevokeBillingPortalAccess
- **HTTP**: `DELETE /portal/customers/{customer_id}/invitations/revoke.json` (Production)
- **Notes**: Revokes a customer's Billing Portal invitation. If you attempt to revoke an invitation when the Billing Portal is already disabled for a Customer, you will receive a 422 error response. Limitations This endpoint will only return a JSON response.
- **Signature**: `RevokeBillingPortalAccess(int customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RevokedInvitation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
