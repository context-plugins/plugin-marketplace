# Records (`DeleteCustomerBulkRequestBodyJson` … `PutVerifyIntegrationTokenRequestBodyJson`)

**Exact coverage: `DeleteCustomerBulkRequestBodyJson` through `PutVerifyIntegrationTokenRequestBodyJson`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `StaxFattMerchantApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `DeleteCustomerBulkRequestBodyJson` | — | `Ids (ids): IReadOnlyList<Guid>?` | `Models/DeleteCustomerBulkRequestBodyJson.cs` |
| `DeleteItemBulkRequestBodyJson` | — | `Ids (ids): IReadOnlyList<Guid>?` | `Models/DeleteItemBulkRequestBodyJson.cs` |
| `GetEphemeralTokenResponse200Json` | — | `Token (token): string?` | `Models/GetEphemeralTokenResponse200Json.cs` |
| `GetEphemeralTokenRootResponse200Json` | — | `Token (token): string?` | `Models/GetEphemeralTokenRootResponse200Json.cs` |
| `MergeCustomerRequestBodyJson` | — | `Duplicates (duplicates): IReadOnlyList<Guid>?` | `Models/MergeCustomerRequestBodyJson.cs` |
| `PostCacheTestRequestBodyJson` | — | `Key (key): string?` | `Models/PostCacheTestRequestBodyJson.cs` |
| `PostCaptureRequestBodyJson` | — | `Total (total): double?` | `Models/PostCaptureRequestBodyJson.cs` |
| `PostCreditRequestBodyJson` | — | `PaymentMethodId (payment_method_id): Guid?`, `Total (total): double?`, `Meta (meta): object?` | `Models/PostCreditRequestBodyJson.cs` |
| `PostDisputeFileRequestBody` | — | `File (file): BinaryContent?` | `Models/PostDisputeFileRequestBody.cs` |
| `PostEmailReceiptRequestBodyJson` | — | `Email (email): string?` | `Models/PostEmailReceiptRequestBodyJson.cs` |
| `PostFileRequestBody` | — | `File (file): BinaryContent?`, `Tag (tag): string?` | `Models/PostFileRequestBody.cs` |
| `PostInvoiceManualPaymentRequestBodyJson` | — | `Total (total): double?` | `Models/PostInvoiceManualPaymentRequestBodyJson.cs` |
| `PostInvoicePaymentRequestBodyJson` | — | `PaymentMethodId (payment_method_id): Guid?`, `ApplyBalance (apply_balance): bool?` | `Models/PostInvoicePaymentRequestBodyJson.cs` |
| `PostItemThumbnailRequestBody` | — | `File (file): BinaryContent?` | `Models/PostItemThumbnailRequestBody.cs` |
| `PostPaymentMethodTokenRequestBodyJson` | — | `Token (token): string?`, `CustomerId (customer_id): Guid?` | `Models/PostPaymentMethodTokenRequestBodyJson.cs` |
| `PostRefundRequestBodyJson` | — | `Total (total): double?` | `Models/PostRefundRequestBodyJson.cs` |
| `PostSendLaterRequestBodyJson` | — | `SendAt (send_at): DateTimeOffset?` | `Models/PostSendLaterRequestBodyJson.cs` |
| `PostSmsReceiptRequestBodyJson` | — | `Phone (phone): string?` | `Models/PostSmsReceiptRequestBodyJson.cs` |
| `PostTeamBrandingRequestBody` | — | `File (file): BinaryContent?` | `Models/PostTeamBrandingRequestBody.cs` |
| `PostTeamFundingAccountFileRequestBody` | — | `File (file): BinaryContent?` | `Models/PostTeamFundingAccountFileRequestBody.cs` |
| `PostTeamRegistrationFileRequestBody` | — | `File (file): BinaryContent?` | `Models/PostTeamRegistrationFileRequestBody.cs` |
| `PostTerminalSignatureRequestBodyJson` | — | `Signature (signature): string?`, `TransactionId (transaction_id): Guid?` | `Models/PostTerminalSignatureRequestBodyJson.cs` |
| `PostVerificationRequestBodyJson` | — | `PaymentMethodId (payment_method_id): Guid?` | `Models/PostVerificationRequestBodyJson.cs` |
| `PostVoidOrRefundRequestBodyJson` | — | `Total (total): double?` | `Models/PostVoidOrRefundRequestBodyJson.cs` |
| `PutEmailReceiptRequestBodyJson` | — | `Email (email): string?` | `Models/PutEmailReceiptRequestBodyJson.cs` |
| `PutNotifyEmailRequestBodyJson` | — | `Email (email): string?` | `Models/PutNotifyEmailRequestBodyJson.cs` |
| `PutPublishBulkRequestBodyJson` | — | `Ids (ids): IReadOnlyList<Guid>?` | `Models/PutPublishBulkRequestBodyJson.cs` |
| `PutReceiptBulkMethodRequestBodyJson` | — | `TransactionIds (transaction_ids): IReadOnlyList<Guid>?` | `Models/PutReceiptBulkMethodRequestBodyJson.cs` |
| `PutReceiptBulkRequestBodyJson` | — | `TransactionIds (transaction_ids): IReadOnlyList<Guid>?` | `Models/PutReceiptBulkRequestBodyJson.cs` |
| `PutReceiptRequestBodyJson` | — | `Email (email): string?`, `Phone (phone): string?` | `Models/PutReceiptRequestBodyJson.cs` |
| `PutRegistrationSignRequestBodyJson` | — | `Signature (signature): string?` | `Models/PutRegistrationSignRequestBodyJson.cs` |
| `PutRestoreCustomerBulkRequestBodyJson` | — | `Ids (ids): IReadOnlyList<Guid>?` | `Models/PutRestoreCustomerBulkRequestBodyJson.cs` |
| `PutSendInvoiceBulkRequestBodyJson` | — | `InvoiceIds (invoice_ids): IReadOnlyList<Guid>?` | `Models/PutSendInvoiceBulkRequestBodyJson.cs` |
| `PutSetDefaultMerchantRequestBodyJson` | — | `MerchantId (merchant_id): Guid?` | `Models/PutSetDefaultMerchantRequestBodyJson.cs` |
| `PutSetPlanRequestBodyJson` | — | `Plan (plan): string?` | `Models/PutSetPlanRequestBodyJson.cs` |
| `PutSmsReceiptRequestBodyJson` | — | `Phone (phone): string?` | `Models/PutSmsReceiptRequestBodyJson.cs` |
| `PutTeamRegistrationFileRequestBody` | — | `File (file): BinaryContent?` | `Models/PutTeamRegistrationFileRequestBody.cs` |
| `PutTerminalSignatureRequestBodyJson` | — | `Signature (signature): string?` | `Models/PutTerminalSignatureRequestBodyJson.cs` |
| `PutTransactionRequestBodyJson` | — | `Meta (meta): object?` | `Models/PutTransactionRequestBodyJson.cs` |
| `PutUnpublishBulkRequestBodyJson` | — | `Ids (ids): IReadOnlyList<Guid>?` | `Models/PutUnpublishBulkRequestBodyJson.cs` |
| `PutVerifyIntegrationTokenRequestBodyJson` | — | `Token (token): string?` | `Models/PutVerifyIntegrationTokenRequestBodyJson.cs` |
