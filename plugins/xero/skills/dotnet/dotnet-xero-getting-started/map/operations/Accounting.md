# Accounting — operations

Accessor: `client.Accounting` · Source: `Api/Accounting.cs` · 235 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAccount
- **HTTP**: `PUT /Accounts` (Default (api))
- **Signature**: `CreateAccount(string xeroTenantId, string? idempotencyKey, Account body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Accounts`
- **Error**: `SdkException<CreateAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAccountAttachmentByFileName
- **HTTP**: `PUT /Accounts/{AccountID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateAccountAttachmentByFileName(Guid accountId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateAccountAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBankTransactionAttachmentByFileName
- **HTTP**: `PUT /BankTransactions/{BankTransactionID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateBankTransactionAttachmentByFileName(Guid bankTransactionId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateBankTransactionAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBankTransactionHistoryRecord
- **HTTP**: `PUT /BankTransactions/{BankTransactionID}/History` (Default (api))
- **Signature**: `CreateBankTransactionHistoryRecord(Guid bankTransactionId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateBankTransactionHistoryRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBankTransactions
- **HTTP**: `PUT /BankTransactions` (Default (api))
- **Signature**: `CreateBankTransactions(int? unitdp, string xeroTenantId, string? idempotencyKey, BankTransactions body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `BankTransactions`
- **Error**: `SdkException<CreateBankTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBankTransfer
- **HTTP**: `PUT /BankTransfers` (Default (api))
- **Signature**: `CreateBankTransfer(string xeroTenantId, string? idempotencyKey, BankTransfers body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BankTransfers`
- **Error**: `SdkException<CreateBankTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBankTransferAttachmentByFileName
- **HTTP**: `PUT /BankTransfers/{BankTransferID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateBankTransferAttachmentByFileName(Guid bankTransferId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateBankTransferAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBankTransferHistoryRecord
- **HTTP**: `PUT /BankTransfers/{BankTransferID}/History` (Default (api))
- **Signature**: `CreateBankTransferHistoryRecord(Guid bankTransferId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateBankTransferHistoryRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBatchPayment
- **HTTP**: `PUT /BatchPayments` (Default (api))
- **Notes**: Batch payments allow you to bundle multiple bills or invoices into one payment transaction. This means a single payment in Xero can be reconciled with a single transaction on the bank statement making for a much simpler bank reconciliation experience.
- **Signature**: `CreateBatchPayment(string xeroTenantId, string? idempotencyKey, BatchPayments body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `BatchPayments`
- **Error**: `SdkException<CreateBatchPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBatchPaymentHistoryRecord
- **HTTP**: `PUT /BatchPayments/{BatchPaymentID}/History` (Default (api))
- **Signature**: `CreateBatchPaymentHistoryRecord(Guid batchPaymentId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateBatchPaymentHistoryRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBrandingThemePaymentServices
- **HTTP**: `POST /BrandingThemes/{BrandingThemeID}/PaymentServices` (Default (api))
- **Signature**: `CreateBrandingThemePaymentServices(Guid brandingThemeId, string xeroTenantId, string? idempotencyKey, PaymentServices body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentServices`
- **Error**: `SdkException<CreateBrandingThemePaymentServicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateContactAttachmentByFileName
- **HTTP**: `PUT /Contacts/{ContactID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateContactAttachmentByFileName(Guid contactId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateContactAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateContactGroup
- **HTTP**: `PUT /ContactGroups` (Default (api))
- **Signature**: `CreateContactGroup(string xeroTenantId, string? idempotencyKey, ContactGroups body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ContactGroups`
- **Error**: `SdkException<CreateContactGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateContactGroupContacts
- **HTTP**: `PUT /ContactGroups/{ContactGroupID}/Contacts` (Default (api))
- **Signature**: `CreateContactGroupContacts(Guid contactGroupId, string xeroTenantId, string? idempotencyKey, Contacts body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Contacts`
- **Error**: `SdkException<CreateContactGroupContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateContactHistory
- **HTTP**: `PUT /Contacts/{ContactID}/History` (Default (api))
- **Signature**: `CreateContactHistory(Guid contactId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateContactHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateContacts
- **HTTP**: `PUT /Contacts` (Default (api))
- **Signature**: `CreateContacts(string xeroTenantId, string? idempotencyKey, Contacts body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Contacts`
- **Error**: `SdkException<CreateContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCreditNoteAllocation
- **HTTP**: `PUT /CreditNotes/{CreditNoteID}/Allocations` (Default (api))
- **Signature**: `CreateCreditNoteAllocation(Guid creditNoteId, string xeroTenantId, string? idempotencyKey, Allocations body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Allocations`
- **Error**: `SdkException<CreateCreditNoteAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCreditNoteAttachmentByFileName
- **HTTP**: `PUT /CreditNotes/{CreditNoteID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateCreditNoteAttachmentByFileName(Guid creditNoteId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, bool? includeOnline = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `includeOnline` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `IncludeOnline` ← `includeOnline`
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateCreditNoteAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCreditNoteHistory
- **HTTP**: `PUT /CreditNotes/{CreditNoteID}/History` (Default (api))
- **Signature**: `CreateCreditNoteHistory(Guid creditNoteId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateCreditNoteHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCreditNotes
- **HTTP**: `PUT /CreditNotes` (Default (api))
- **Signature**: `CreateCreditNotes(int? unitdp, string xeroTenantId, string? idempotencyKey, CreditNotes body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `CreditNotes`
- **Error**: `SdkException<CreateCreditNotesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCurrency
- **HTTP**: `PUT /Currencies` (Default (api))
- **Signature**: `CreateCurrency(string xeroTenantId, string? idempotencyKey, Currency body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Currencies`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateExpenseClaimHistory
- **HTTP**: `PUT /ExpenseClaims/{ExpenseClaimID}/History` (Default (api))
- **Signature**: `CreateExpenseClaimHistory(Guid expenseClaimId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateExpenseClaims
- **HTTP**: `PUT /ExpenseClaims` (Default (api))
- **Signature**: `CreateExpenseClaims(string xeroTenantId, string? idempotencyKey, ExpenseClaims body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ExpenseClaims`
- **Error**: `SdkException<CreateExpenseClaimsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateInvoiceAttachmentByFileName
- **HTTP**: `PUT /Invoices/{InvoiceID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateInvoiceAttachmentByFileName(Guid invoiceId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, bool? includeOnline = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `includeOnline` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `IncludeOnline` ← `includeOnline`
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateInvoiceAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateInvoiceHistory
- **HTTP**: `PUT /Invoices/{InvoiceID}/History` (Default (api))
- **Signature**: `CreateInvoiceHistory(Guid invoiceId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateInvoiceHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateInvoices
- **HTTP**: `PUT /Invoices` (Default (api))
- **Signature**: `CreateInvoices(int? unitdp, string xeroTenantId, string? idempotencyKey, Invoices body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `Invoices`
- **Error**: `SdkException<CreateInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateItemHistory
- **HTTP**: `PUT /Items/{ItemID}/History` (Default (api))
- **Signature**: `CreateItemHistory(Guid itemId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateItems
- **HTTP**: `PUT /Items` (Default (api))
- **Signature**: `CreateItems(int? unitdp, string xeroTenantId, string? idempotencyKey, Items body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `Items`
- **Error**: `SdkException<CreateItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLinkedTransaction
- **HTTP**: `PUT /LinkedTransactions` (Default (api))
- **Signature**: `CreateLinkedTransaction(string xeroTenantId, string? idempotencyKey, LinkedTransaction body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkedTransactions`
- **Error**: `SdkException<CreateLinkedTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateManualJournalAttachmentByFileName
- **HTTP**: `PUT /ManualJournals/{ManualJournalID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateManualJournalAttachmentByFileName(Guid manualJournalId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateManualJournalAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateManualJournalHistoryRecord
- **HTTP**: `PUT /ManualJournals/{ManualJournalID}/History` (Default (api))
- **Signature**: `CreateManualJournalHistoryRecord(Guid manualJournalId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateManualJournalHistoryRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateManualJournals
- **HTTP**: `PUT /ManualJournals` (Default (api))
- **Signature**: `CreateManualJournals(string xeroTenantId, string? idempotencyKey, ManualJournals body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `ManualJournals`
- **Error**: `SdkException<CreateManualJournalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOverpaymentAllocations
- **HTTP**: `PUT /Overpayments/{OverpaymentID}/Allocations` (Default (api))
- **Signature**: `CreateOverpaymentAllocations(Guid overpaymentId, string xeroTenantId, string? idempotencyKey, Allocations body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Allocations`
- **Error**: `SdkException<CreateOverpaymentAllocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOverpaymentHistory
- **HTTP**: `PUT /Overpayments/{OverpaymentID}/History` (Default (api))
- **Signature**: `CreateOverpaymentHistory(Guid overpaymentId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateOverpaymentHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayment
- **HTTP**: `POST /Payments` (Default (api))
- **Signature**: `CreatePayment(string xeroTenantId, string? idempotencyKey, Payment body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Payments`
- **Error**: `SdkException<CreatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePaymentHistory
- **HTTP**: `PUT /Payments/{PaymentID}/History` (Default (api))
- **Signature**: `CreatePaymentHistory(Guid paymentId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreatePaymentHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePaymentService
- **HTTP**: `PUT /PaymentServices` (Default (api))
- **Signature**: `CreatePaymentService(string xeroTenantId, string? idempotencyKey, PaymentServices body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentServices`
- **Error**: `SdkException<CreatePaymentServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayments
- **HTTP**: `PUT /Payments` (Default (api))
- **Signature**: `CreatePayments(string xeroTenantId, string? idempotencyKey, Payments body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Payments`
- **Error**: `SdkException<CreatePaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePrepaymentAllocations
- **HTTP**: `PUT /Prepayments/{PrepaymentID}/Allocations` (Default (api))
- **Signature**: `CreatePrepaymentAllocations(Guid prepaymentId, string xeroTenantId, string? idempotencyKey, Allocations body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Allocations`
- **Error**: `SdkException<CreatePrepaymentAllocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePrepaymentHistory
- **HTTP**: `PUT /Prepayments/{PrepaymentID}/History` (Default (api))
- **Signature**: `CreatePrepaymentHistory(Guid prepaymentId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreatePrepaymentHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePurchaseOrderAttachmentByFileName
- **HTTP**: `PUT /PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreatePurchaseOrderAttachmentByFileName(Guid purchaseOrderId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreatePurchaseOrderAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePurchaseOrderHistory
- **HTTP**: `PUT /PurchaseOrders/{PurchaseOrderID}/History` (Default (api))
- **Signature**: `CreatePurchaseOrderHistory(Guid purchaseOrderId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreatePurchaseOrderHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePurchaseOrders
- **HTTP**: `PUT /PurchaseOrders` (Default (api))
- **Signature**: `CreatePurchaseOrders(string xeroTenantId, string? idempotencyKey, PurchaseOrders body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `PurchaseOrders`
- **Error**: `SdkException<CreatePurchaseOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateQuoteAttachmentByFileName
- **HTTP**: `PUT /Quotes/{QuoteID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateQuoteAttachmentByFileName(Guid quoteId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateQuoteAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateQuoteHistory
- **HTTP**: `PUT /Quotes/{QuoteID}/History` (Default (api))
- **Signature**: `CreateQuoteHistory(Guid quoteId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateQuoteHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateQuotes
- **HTTP**: `PUT /Quotes` (Default (api))
- **Signature**: `CreateQuotes(string xeroTenantId, string? idempotencyKey, Quotes body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Quotes`
- **Error**: `SdkException<CreateQuotesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateReceipt
- **HTTP**: `PUT /Receipts` (Default (api))
- **Signature**: `CreateReceipt(int? unitdp, string xeroTenantId, string? idempotencyKey, Receipts body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Receipts`
- **Error**: `SdkException<CreateReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateReceiptAttachmentByFileName
- **HTTP**: `PUT /Receipts/{ReceiptID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateReceiptAttachmentByFileName(Guid receiptId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateReceiptAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateReceiptHistory
- **HTTP**: `PUT /Receipts/{ReceiptID}/History` (Default (api))
- **Signature**: `CreateReceiptHistory(Guid receiptId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateReceiptHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateRepeatingInvoiceAttachmentByFileName
- **HTTP**: `PUT /RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}` (Default (api))
- **Signature**: `CreateRepeatingInvoiceAttachmentByFileName(Guid repeatingInvoiceId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<CreateRepeatingInvoiceAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateRepeatingInvoiceHistory
- **HTTP**: `PUT /RepeatingInvoices/{RepeatingInvoiceID}/History` (Default (api))
- **Signature**: `CreateRepeatingInvoiceHistory(Guid repeatingInvoiceId, string xeroTenantId, string? idempotencyKey, HistoryRecords body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<CreateRepeatingInvoiceHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateRepeatingInvoices
- **HTTP**: `PUT /RepeatingInvoices` (Default (api))
- **Signature**: `CreateRepeatingInvoices(string xeroTenantId, string? idempotencyKey, RepeatingInvoices body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `RepeatingInvoices`
- **Error**: `SdkException<CreateRepeatingInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTaxRates
- **HTTP**: `PUT /TaxRates` (Default (api))
- **Signature**: `CreateTaxRates(string xeroTenantId, string? idempotencyKey, TaxRates body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TaxRates`
- **Error**: `SdkException<CreateTaxRatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTrackingCategory
- **HTTP**: `PUT /TrackingCategories` (Default (api))
- **Signature**: `CreateTrackingCategory(string xeroTenantId, string? idempotencyKey, TrackingCategory body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TrackingCategories`
- **Error**: `SdkException<CreateTrackingCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTrackingOptions
- **HTTP**: `PUT /TrackingCategories/{TrackingCategoryID}/Options` (Default (api))
- **Signature**: `CreateTrackingOptions(Guid trackingCategoryId, string xeroTenantId, string? idempotencyKey, TrackingOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TrackingOptions`
- **Error**: `SdkException<CreateTrackingOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAccount
- **HTTP**: `DELETE /Accounts/{AccountID}` (Default (api))
- **Signature**: `DeleteAccount(Guid accountId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Accounts`
- **Error**: `SdkException<DeleteAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBankTransfer
- **HTTP**: `POST /BankTransfers/{BankTransferID}` (Default (api))
- **Signature**: `DeleteBankTransfer(Guid bankTransferId, string xeroTenantId, string? idempotencyKey, BankTransferDeleteByUrlParam body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BankTransfers`
- **Error**: `SdkException<DeleteBankTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBankTransfers
- **HTTP**: `POST /BankTransfers` (Default (api))
- **Signature**: `DeleteBankTransfers(string xeroTenantId, string? idempotencyKey, BankTransfersDelete body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `BankTransfers`
- **Error**: `SdkException<DeleteBankTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBatchPayment
- **HTTP**: `POST /BatchPayments` (Default (api))
- **Notes**: Batch payments allow you to bundle multiple bills or invoices into one payment transaction. This means a single payment in Xero can be reconciled with a single transaction on the bank statement making for a much simpler bank reconciliation experience.
- **Signature**: `DeleteBatchPayment(string xeroTenantId, string? idempotencyKey, BatchPaymentDelete body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BatchPayments`
- **Error**: `SdkException<DeleteBatchPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBatchPaymentByUrlParam
- **HTTP**: `POST /BatchPayments/{BatchPaymentID}` (Default (api))
- **Signature**: `DeleteBatchPaymentByUrlParam(Guid batchPaymentId, string xeroTenantId, string? idempotencyKey, BatchPaymentDeleteByUrlParam body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BatchPayments`
- **Error**: `SdkException<DeleteBatchPaymentByUrlParamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteContactGroupContact
- **HTTP**: `DELETE /ContactGroups/{ContactGroupID}/Contacts/{ContactID}` (Default (api))
- **Signature**: `DeleteContactGroupContact(Guid contactGroupId, Guid contactId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteContactGroupContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteContactGroupContacts
- **HTTP**: `DELETE /ContactGroups/{ContactGroupID}/Contacts` (Default (api))
- **Signature**: `DeleteContactGroupContacts(Guid contactGroupId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCreditNoteAllocations
- **HTTP**: `DELETE /CreditNotes/{CreditNoteID}/Allocations/{AllocationID}` (Default (api))
- **Signature**: `DeleteCreditNoteAllocations(Guid creditNoteId, Guid allocationId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Allocation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteItem
- **HTTP**: `DELETE /Items/{ItemID}` (Default (api))
- **Signature**: `DeleteItem(Guid itemId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLinkedTransaction
- **HTTP**: `DELETE /LinkedTransactions/{LinkedTransactionID}` (Default (api))
- **Signature**: `DeleteLinkedTransaction(Guid linkedTransactionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLinkedTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOverpaymentAllocations
- **HTTP**: `DELETE /Overpayments/{OverpaymentID}/Allocations/{AllocationID}` (Default (api))
- **Signature**: `DeleteOverpaymentAllocations(Guid overpaymentId, Guid allocationId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Allocation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePayment
- **HTTP**: `POST /Payments/{PaymentID}` (Default (api))
- **Signature**: `DeletePayment(Guid paymentId, string xeroTenantId, string? idempotencyKey, PaymentDelete body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Payments`
- **Error**: `SdkException<DeletePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeletePrepaymentAllocations
- **HTTP**: `DELETE /Prepayments/{PrepaymentID}/Allocations/{AllocationID}` (Default (api))
- **Signature**: `DeletePrepaymentAllocations(Guid prepaymentId, Guid allocationId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Allocation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrackingCategory
- **HTTP**: `DELETE /TrackingCategories/{TrackingCategoryID}` (Default (api))
- **Signature**: `DeleteTrackingCategory(Guid trackingCategoryId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrackingCategories`
- **Error**: `SdkException<DeleteTrackingCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrackingOptions
- **HTTP**: `DELETE /TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}` (Default (api))
- **Signature**: `DeleteTrackingOptions(Guid trackingCategoryId, Guid trackingOptionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrackingOptions`
- **Error**: `SdkException<DeleteTrackingOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EmailInvoice
- **HTTP**: `POST /Invoices/{InvoiceID}/Email` (Default (api))
- **Signature**: `EmailInvoice(Guid invoiceId, string xeroTenantId, string? idempotencyKey, RequestEmpty body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EmailInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccount
- **HTTP**: `GET /Accounts/{AccountID}` (Default (api))
- **Signature**: `GetAccount(Guid accountId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Accounts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountAttachmentByFileName
- **HTTP**: `GET /Accounts/{AccountID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetAccountAttachmentByFileName(Guid accountId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountAttachmentById
- **HTTP**: `GET /Accounts/{AccountID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetAccountAttachmentById(Guid accountId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountAttachments
- **HTTP**: `GET /Accounts/{AccountID}/Attachments` (Default (api))
- **Signature**: `GetAccountAttachments(Guid accountId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccounts
- **HTTP**: `GET /Accounts` (Default (api))
- **Signature**: `GetAccounts(string? where, string? order, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - `ifModifiedSince` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `Accounts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransaction
- **HTTP**: `GET /BankTransactions/{BankTransactionID}` (Default (api))
- **Signature**: `GetBankTransaction(Guid bankTransactionId, int? unitdp, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `BankTransactions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransactionAttachmentByFileName
- **HTTP**: `GET /BankTransactions/{BankTransactionID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetBankTransactionAttachmentByFileName(Guid bankTransactionId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransactionAttachmentById
- **HTTP**: `GET /BankTransactions/{BankTransactionID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetBankTransactionAttachmentById(Guid bankTransactionId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransactionAttachments
- **HTTP**: `GET /BankTransactions/{BankTransactionID}/Attachments` (Default (api))
- **Signature**: `GetBankTransactionAttachments(Guid bankTransactionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransactions
- **HTTP**: `GET /BankTransactions` (Default (api))
- **Signature**: `GetBankTransactions(string? where, string? order, int? page, int? unitdp, int? pageSize, IReadOnlyList<string>? references, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`, `unitdp` ← `unitdp`, `pageSize` ← `pageSize`, `References` ← `references`
- **Returns**: `BankTransactions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetBankTransactionsHistory
- **HTTP**: `GET /BankTransactions/{BankTransactionID}/History` (Default (api))
- **Signature**: `GetBankTransactionsHistory(Guid bankTransactionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransfer
- **HTTP**: `GET /BankTransfers/{BankTransferID}` (Default (api))
- **Signature**: `GetBankTransfer(Guid bankTransferId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BankTransfers`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransferAttachmentByFileName
- **HTTP**: `GET /BankTransfers/{BankTransferID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetBankTransferAttachmentByFileName(Guid bankTransferId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransferAttachmentById
- **HTTP**: `GET /BankTransfers/{BankTransferID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetBankTransferAttachmentById(Guid bankTransferId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransferAttachments
- **HTTP**: `GET /BankTransfers/{BankTransferID}/Attachments` (Default (api))
- **Signature**: `GetBankTransferAttachments(Guid bankTransferId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransferHistory
- **HTTP**: `GET /BankTransfers/{BankTransferID}/History` (Default (api))
- **Signature**: `GetBankTransferHistory(Guid bankTransferId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankTransfers
- **HTTP**: `GET /BankTransfers` (Default (api))
- **Signature**: `GetBankTransfers(string? where, string? order, bool? includeDeleted, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `includeDeleted` ← `includeDeleted`
- **Returns**: `BankTransfers`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBatchPayment
- **HTTP**: `GET /BatchPayments/{BatchPaymentID}` (Default (api))
- **Signature**: `GetBatchPayment(Guid batchPaymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchPayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBatchPaymentHistory
- **HTTP**: `GET /BatchPayments/{BatchPaymentID}/History` (Default (api))
- **Signature**: `GetBatchPaymentHistory(Guid batchPaymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBatchPayments
- **HTTP**: `GET /BatchPayments` (Default (api))
- **Notes**: Batch payments allow you to bundle multiple bills or invoices into one payment transaction. This means a single payment in Xero can be reconciled with a single transaction on the bank statement making for a much simpler bank reconciliation experience.
- **Signature**: `GetBatchPayments(string? where, string? order, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - `ifModifiedSince` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `BatchPayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBrandingTheme
- **HTTP**: `GET /BrandingThemes/{BrandingThemeID}` (Default (api))
- **Signature**: `GetBrandingTheme(Guid brandingThemeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BrandingThemes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBrandingThemePaymentServices
- **HTTP**: `GET /BrandingThemes/{BrandingThemeID}/PaymentServices` (Default (api))
- **Signature**: `GetBrandingThemePaymentServices(Guid brandingThemeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentServices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBrandingThemes
- **HTTP**: `GET /BrandingThemes` (Default (api))
- **Signature**: `GetBrandingThemes(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BrandingThemes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBudget
- **HTTP**: `GET /Budgets/{BudgetID}` (Default (api))
- **Signature**: `GetBudget(Guid budgetId, DateTimeOffset? dateTo, DateTimeOffset? dateFrom, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dateTo` — nullable, no default → **must pass explicitly**
  - `dateFrom` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateTo` ← `dateTo`, `DateFrom` ← `dateFrom`
- **Returns**: `Budgets`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBudgets
- **HTTP**: `GET /Budgets` (Default (api))
- **Signature**: `GetBudgets(IReadOnlyList<Guid>? ids, DateTimeOffset? dateTo, DateTimeOffset? dateFrom, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ids` — nullable, no default → **must pass explicitly**
  - `dateTo` — nullable, no default → **must pass explicitly**
  - `dateFrom` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IDs` ← `ids`, `DateTo` ← `dateTo`, `DateFrom` ← `dateFrom`
- **Returns**: `Budgets`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContact
- **HTTP**: `GET /Contacts/{ContactID}` (Default (api))
- **Signature**: `GetContact(Guid contactId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Contacts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactAttachmentByFileName
- **HTTP**: `GET /Contacts/{ContactID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetContactAttachmentByFileName(Guid contactId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactAttachmentById
- **HTTP**: `GET /Contacts/{ContactID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetContactAttachmentById(Guid contactId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactAttachments
- **HTTP**: `GET /Contacts/{ContactID}/Attachments` (Default (api))
- **Signature**: `GetContactAttachments(Guid contactId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactByContactNumber
- **HTTP**: `GET /Contacts/{ContactNumber}` (Default (api))
- **Signature**: `GetContactByContactNumber(string contactNumber, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Contacts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactCissettings
- **HTTP**: `GET /Contacts/{ContactID}/CISSettings` (Default (api))
- **Signature**: `GetContactCissettings(Guid contactId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Cissettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactGroup
- **HTTP**: `GET /ContactGroups/{ContactGroupID}` (Default (api))
- **Signature**: `GetContactGroup(Guid contactGroupId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ContactGroups`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactGroups
- **HTTP**: `GET /ContactGroups` (Default (api))
- **Signature**: `GetContactGroups(string? where, string? order, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `ContactGroups`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContactHistory
- **HTTP**: `GET /Contacts/{ContactID}/History` (Default (api))
- **Signature**: `GetContactHistory(Guid contactId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetContacts
- **HTTP**: `GET /Contacts` (Default (api))
- **Signature**: `GetContacts(string? where, string? order, IReadOnlyList<Guid>? ids, int? page, bool? includeArchived, string? searchTerm, int? pageSize, string xeroTenantId, DateTimeOffset? ifModifiedSince, bool? summaryOnly = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `summaryOnly` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `IDs` ← `ids`, `page` ← `page`, `includeArchived` ← `includeArchived`, `summaryOnly` ← `summaryOnly`, `searchTerm` ← `searchTerm`, `pageSize` ← `pageSize`
- **Returns**: `Contacts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetCreditNote
- **HTTP**: `GET /CreditNotes/{CreditNoteID}` (Default (api))
- **Signature**: `GetCreditNote(Guid creditNoteId, int? unitdp, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `CreditNotes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCreditNoteAsPdf
- **HTTP**: `GET /CreditNotes/{CreditNoteID}/pdf` (Default (api))
- **Signature**: `GetCreditNoteAsPdf(Guid creditNoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCreditNoteAttachmentByFileName
- **HTTP**: `GET /CreditNotes/{CreditNoteID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetCreditNoteAttachmentByFileName(Guid creditNoteId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCreditNoteAttachmentById
- **HTTP**: `GET /CreditNotes/{CreditNoteID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetCreditNoteAttachmentById(Guid creditNoteId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCreditNoteAttachments
- **HTTP**: `GET /CreditNotes/{CreditNoteID}/Attachments` (Default (api))
- **Signature**: `GetCreditNoteAttachments(Guid creditNoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCreditNoteHistory
- **HTTP**: `GET /CreditNotes/{CreditNoteID}/History` (Default (api))
- **Signature**: `GetCreditNoteHistory(Guid creditNoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCreditNotes
- **HTTP**: `GET /CreditNotes` (Default (api))
- **Signature**: `GetCreditNotes(string? where, string? order, int? page, int? unitdp, int? pageSize, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`, `unitdp` ← `unitdp`, `pageSize` ← `pageSize`
- **Returns**: `CreditNotes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetCurrencies
- **HTTP**: `GET /Currencies` (Default (api))
- **Signature**: `GetCurrencies(string? where, string? order, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `Currencies`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetExpenseClaim
- **HTTP**: `GET /ExpenseClaims/{ExpenseClaimID}` (Default (api))
- **Signature**: `GetExpenseClaim(Guid expenseClaimId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExpenseClaims`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetExpenseClaimHistory
- **HTTP**: `GET /ExpenseClaims/{ExpenseClaimID}/History` (Default (api))
- **Signature**: `GetExpenseClaimHistory(Guid expenseClaimId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetExpenseClaims
- **HTTP**: `GET /ExpenseClaims` (Default (api))
- **Signature**: `GetExpenseClaims(string? where, string? order, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - `ifModifiedSince` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `ExpenseClaims`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoice
- **HTTP**: `GET /Invoices/{InvoiceID}` (Default (api))
- **Signature**: `GetInvoice(Guid invoiceId, int? unitdp, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Invoices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoiceAsPdf
- **HTTP**: `GET /Invoices/{InvoiceID}/pdf` (Default (api))
- **Signature**: `GetInvoiceAsPdf(Guid invoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoiceAttachmentByFileName
- **HTTP**: `GET /Invoices/{InvoiceID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetInvoiceAttachmentByFileName(Guid invoiceId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoiceAttachmentById
- **HTTP**: `GET /Invoices/{InvoiceID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetInvoiceAttachmentById(Guid invoiceId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoiceAttachments
- **HTTP**: `GET /Invoices/{InvoiceID}/Attachments` (Default (api))
- **Signature**: `GetInvoiceAttachments(Guid invoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoiceHistory
- **HTTP**: `GET /Invoices/{InvoiceID}/History` (Default (api))
- **Signature**: `GetInvoiceHistory(Guid invoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoiceReminders
- **HTTP**: `GET /InvoiceReminders/Settings` (Default (api))
- **Signature**: `GetInvoiceReminders(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InvoiceReminders`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoices
- **HTTP**: `GET /Invoices` (Default (api))
- **Signature**: `GetInvoices(string? where, string? order, IReadOnlyList<Guid>? ids, IReadOnlyList<string>? invoiceNumbers, IReadOnlyList<Guid>? contactIds, IReadOnlyList<string>? statuses, int? page, bool? includeArchived, bool? createdByMyApp, int? unitdp, int? pageSize, string? searchTerm, string xeroTenantId, DateTimeOffset? ifModifiedSince, bool? summaryOnly = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `summaryOnly` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `IDs` ← `ids`, `InvoiceNumbers` ← `invoiceNumbers`, `ContactIDs` ← `contactIds`, `Statuses` ← `statuses`, `page` ← `page`, `includeArchived` ← `includeArchived`, `createdByMyApp` ← `createdByMyApp`, `unitdp` ← `unitdp`, `summaryOnly` ← `summaryOnly`, `pageSize` ← `pageSize`, `searchTerm` ← `searchTerm`
- **Returns**: `Invoices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetItem
- **HTTP**: `GET /Items/{ItemID}` (Default (api))
- **Signature**: `GetItem(Guid itemId, int? unitdp, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Items`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetItemHistory
- **HTTP**: `GET /Items/{ItemID}/History` (Default (api))
- **Signature**: `GetItemHistory(Guid itemId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetItems
- **HTTP**: `GET /Items` (Default (api))
- **Signature**: `GetItems(string? where, string? order, int? unitdp, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `unitdp` ← `unitdp`
- **Returns**: `Items`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJournal
- **HTTP**: `GET /Journals/{JournalID}` (Default (api))
- **Signature**: `GetJournal(Guid journalId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Journals`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJournalByNumber
- **HTTP**: `GET /Journals/{JournalNumber}` (Default (api))
- **Signature**: `GetJournalByNumber(int journalNumber, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Journals`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJournals
- **HTTP**: `GET /Journals` (Default (api))
- **Signature**: `GetJournals(int? offset, bool? paymentsOnly, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `paymentsOnly` — nullable, no default → **must pass explicitly**
  - `ifModifiedSince` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `paymentsOnly` ← `paymentsOnly`
- **Returns**: `Journals`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLinkedTransaction
- **HTTP**: `GET /LinkedTransactions/{LinkedTransactionID}` (Default (api))
- **Signature**: `GetLinkedTransaction(Guid linkedTransactionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkedTransactions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLinkedTransactions
- **HTTP**: `GET /LinkedTransactions` (Default (api))
- **Signature**: `GetLinkedTransactions(int? page, Guid? linkedTransactionId, Guid? sourceTransactionId, Guid? contactId, string? status, Guid? targetTransactionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`page` … `targetTransactionId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `LinkedTransactionID` ← `linkedTransactionId`, `SourceTransactionID` ← `sourceTransactionId`, `ContactID` ← `contactId`, `Status` ← `status`, `TargetTransactionID` ← `targetTransactionId`
- **Returns**: `LinkedTransactions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetManualJournal
- **HTTP**: `GET /ManualJournals/{ManualJournalID}` (Default (api))
- **Signature**: `GetManualJournal(Guid manualJournalId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManualJournals`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetManualJournalAttachmentByFileName
- **HTTP**: `GET /ManualJournals/{ManualJournalID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetManualJournalAttachmentByFileName(Guid manualJournalId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetManualJournalAttachmentById
- **HTTP**: `GET /ManualJournals/{ManualJournalID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetManualJournalAttachmentById(Guid manualJournalId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetManualJournalAttachments
- **HTTP**: `GET /ManualJournals/{ManualJournalID}/Attachments` (Default (api))
- **Signature**: `GetManualJournalAttachments(Guid manualJournalId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetManualJournals
- **HTTP**: `GET /ManualJournals` (Default (api))
- **Signature**: `GetManualJournals(string? where, string? order, int? page, int? pageSize, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `ManualJournals`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetManualJournalsHistory
- **HTTP**: `GET /ManualJournals/{ManualJournalID}/History` (Default (api))
- **Signature**: `GetManualJournalsHistory(Guid manualJournalId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOnlineInvoice
- **HTTP**: `GET /Invoices/{InvoiceID}/OnlineInvoice` (Default (api))
- **Signature**: `GetOnlineInvoice(Guid invoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnlineInvoices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrganisationActions
- **HTTP**: `GET /Organisation/Actions` (Default (api))
- **Signature**: `GetOrganisationActions(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Actions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrganisationCissettings
- **HTTP**: `GET /Organisation/{OrganisationID}/CISSettings` (Default (api))
- **Signature**: `GetOrganisationCissettings(Guid organisationId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CisorgSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrganisations
- **HTTP**: `GET /Organisation` (Default (api))
- **Signature**: `GetOrganisations(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Organisations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOverpayment
- **HTTP**: `GET /Overpayments/{OverpaymentID}` (Default (api))
- **Signature**: `GetOverpayment(Guid overpaymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Overpayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOverpaymentHistory
- **HTTP**: `GET /Overpayments/{OverpaymentID}/History` (Default (api))
- **Signature**: `GetOverpaymentHistory(Guid overpaymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOverpayments
- **HTTP**: `GET /Overpayments` (Default (api))
- **Signature**: `GetOverpayments(string? where, string? order, int? page, int? unitdp, int? pageSize, IReadOnlyList<string>? references, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`, `unitdp` ← `unitdp`, `pageSize` ← `pageSize`, `References` ← `references`
- **Returns**: `Overpayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayment
- **HTTP**: `GET /Payments/{PaymentID}` (Default (api))
- **Signature**: `GetPayment(Guid paymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Payments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentHistory
- **HTTP**: `GET /Payments/{PaymentID}/History` (Default (api))
- **Signature**: `GetPaymentHistory(Guid paymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentServices
- **HTTP**: `GET /PaymentServices` (Default (api))
- **Signature**: `GetPaymentServices(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentServices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayments
- **HTTP**: `GET /Payments` (Default (api))
- **Signature**: `GetPayments(string? where, string? order, int? page, int? pageSize, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `Payments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPrepayment
- **HTTP**: `GET /Prepayments/{PrepaymentID}` (Default (api))
- **Signature**: `GetPrepayment(Guid prepaymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Prepayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPrepaymentHistory
- **HTTP**: `GET /Prepayments/{PrepaymentID}/History` (Default (api))
- **Signature**: `GetPrepaymentHistory(Guid prepaymentId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPrepayments
- **HTTP**: `GET /Prepayments` (Default (api))
- **Signature**: `GetPrepayments(string? where, string? order, int? page, int? unitdp, int? pageSize, IReadOnlyList<string>? invoiceNumbers, IReadOnlyList<string>? references, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`, `unitdp` ← `unitdp`, `pageSize` ← `pageSize`, `InvoiceNumbers` ← `invoiceNumbers`, `References` ← `references`
- **Returns**: `Prepayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPurchaseOrder
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderID}` (Default (api))
- **Signature**: `GetPurchaseOrder(Guid purchaseOrderId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PurchaseOrders`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrderAsPdf
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderID}/pdf` (Default (api))
- **Signature**: `GetPurchaseOrderAsPdf(Guid purchaseOrderId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrderAttachmentByFileName
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetPurchaseOrderAttachmentByFileName(Guid purchaseOrderId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrderAttachmentById
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetPurchaseOrderAttachmentById(Guid purchaseOrderId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrderAttachments
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderID}/Attachments` (Default (api))
- **Signature**: `GetPurchaseOrderAttachments(Guid purchaseOrderId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrderByNumber
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderNumber}` (Default (api))
- **Signature**: `GetPurchaseOrderByNumber(string purchaseOrderNumber, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PurchaseOrders`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrderHistory
- **HTTP**: `GET /PurchaseOrders/{PurchaseOrderID}/History` (Default (api))
- **Signature**: `GetPurchaseOrderHistory(Guid purchaseOrderId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPurchaseOrders
- **HTTP**: `GET /PurchaseOrders` (Default (api))
- **Signature**: `GetPurchaseOrders(Status21? status, string? dateFrom, string? dateTo, string? order, int? page, int? pageSize, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `DateFrom` ← `dateFrom`, `DateTo` ← `dateTo`, `order` ← `order`, `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `PurchaseOrders`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetQuote
- **HTTP**: `GET /Quotes/{QuoteID}` (Default (api))
- **Signature**: `GetQuote(Guid quoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Quotes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQuoteAsPdf
- **HTTP**: `GET /Quotes/{QuoteID}/pdf` (Default (api))
- **Signature**: `GetQuoteAsPdf(Guid quoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQuoteAttachmentByFileName
- **HTTP**: `GET /Quotes/{QuoteID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetQuoteAttachmentByFileName(Guid quoteId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQuoteAttachmentById
- **HTTP**: `GET /Quotes/{QuoteID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetQuoteAttachmentById(Guid quoteId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQuoteAttachments
- **HTTP**: `GET /Quotes/{QuoteID}/Attachments` (Default (api))
- **Signature**: `GetQuoteAttachments(Guid quoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQuoteHistory
- **HTTP**: `GET /Quotes/{QuoteID}/History` (Default (api))
- **Signature**: `GetQuoteHistory(Guid quoteId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetQuotes
- **HTTP**: `GET /Quotes` (Default (api))
- **Signature**: `GetQuotes(DateTimeOffset? dateFrom, DateTimeOffset? dateTo, DateTimeOffset? expiryDateFrom, DateTimeOffset? expiryDateTo, Guid? contactId, string? status, int? page, string? order, string? quoteNumber, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`dateFrom` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateFrom` ← `dateFrom`, `DateTo` ← `dateTo`, `ExpiryDateFrom` ← `expiryDateFrom`, `ExpiryDateTo` ← `expiryDateTo`, `ContactID` ← `contactId`, `Status` ← `status`, `page` ← `page`, `order` ← `order`, `QuoteNumber` ← `quoteNumber`
- **Returns**: `Quotes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetReceipt
- **HTTP**: `GET /Receipts/{ReceiptID}` (Default (api))
- **Signature**: `GetReceipt(Guid receiptId, int? unitdp, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Receipts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReceiptAttachmentByFileName
- **HTTP**: `GET /Receipts/{ReceiptID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetReceiptAttachmentByFileName(Guid receiptId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReceiptAttachmentById
- **HTTP**: `GET /Receipts/{ReceiptID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetReceiptAttachmentById(Guid receiptId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReceiptAttachments
- **HTTP**: `GET /Receipts/{ReceiptID}/Attachments` (Default (api))
- **Signature**: `GetReceiptAttachments(Guid receiptId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReceiptHistory
- **HTTP**: `GET /Receipts/{ReceiptID}/History` (Default (api))
- **Signature**: `GetReceiptHistory(Guid receiptId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReceipts
- **HTTP**: `GET /Receipts` (Default (api))
- **Signature**: `GetReceipts(string? where, string? order, int? unitdp, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `unitdp` ← `unitdp`
- **Returns**: `Receipts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRepeatingInvoice
- **HTTP**: `GET /RepeatingInvoices/{RepeatingInvoiceID}` (Default (api))
- **Signature**: `GetRepeatingInvoice(Guid repeatingInvoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RepeatingInvoices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRepeatingInvoiceAttachmentByFileName
- **HTTP**: `GET /RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}` (Default (api))
- **Signature**: `GetRepeatingInvoiceAttachmentByFileName(Guid repeatingInvoiceId, string fileName, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRepeatingInvoiceAttachmentById
- **HTTP**: `GET /RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{AttachmentID}` (Default (api))
- **Signature**: `GetRepeatingInvoiceAttachmentById(Guid repeatingInvoiceId, Guid attachmentId, string xeroTenantId, string contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRepeatingInvoiceAttachments
- **HTTP**: `GET /RepeatingInvoices/{RepeatingInvoiceID}/Attachments` (Default (api))
- **Signature**: `GetRepeatingInvoiceAttachments(Guid repeatingInvoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRepeatingInvoiceHistory
- **HTTP**: `GET /RepeatingInvoices/{RepeatingInvoiceID}/History` (Default (api))
- **Signature**: `GetRepeatingInvoiceHistory(Guid repeatingInvoiceId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HistoryRecords`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRepeatingInvoices
- **HTTP**: `GET /RepeatingInvoices` (Default (api))
- **Signature**: `GetRepeatingInvoices(string? where, string? order, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `RepeatingInvoices`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportAgedPayablesByContact
- **HTTP**: `GET /Reports/AgedPayablesByContact` (Default (api))
- **Signature**: `GetReportAgedPayablesByContact(Guid contactId, DateTimeOffset? date, DateTimeOffset? fromDate, DateTimeOffset? toDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `fromDate` — nullable, no default → **must pass explicitly**
  - `toDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `contactId` ← `contactId`, `date` ← `date`, `fromDate` ← `fromDate`, `toDate` ← `toDate`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportAgedReceivablesByContact
- **HTTP**: `GET /Reports/AgedReceivablesByContact` (Default (api))
- **Signature**: `GetReportAgedReceivablesByContact(Guid contactId, DateTimeOffset? date, DateTimeOffset? fromDate, DateTimeOffset? toDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `fromDate` — nullable, no default → **must pass explicitly**
  - `toDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `contactId` ← `contactId`, `date` ← `date`, `fromDate` ← `fromDate`, `toDate` ← `toDate`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportBalanceSheet
- **HTTP**: `GET /Reports/BalanceSheet` (Default (api))
- **Signature**: `GetReportBalanceSheet(DateTimeOffset? date, int? periods, Timeframe? timeframe, string? trackingOptionId1, string? trackingOptionId2, bool? standardLayout, bool? paymentsOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`date` … `paymentsOnly`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `periods` ← `periods`, `timeframe` ← `timeframe`, `trackingOptionID1` ← `trackingOptionId1`, `trackingOptionID2` ← `trackingOptionId2`, `standardLayout` ← `standardLayout`, `paymentsOnly` ← `paymentsOnly`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportBankSummary
- **HTTP**: `GET /Reports/BankSummary` (Default (api))
- **Signature**: `GetReportBankSummary(DateTimeOffset? fromDate, DateTimeOffset? toDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fromDate` — nullable, no default → **must pass explicitly**
  - `toDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromDate` ← `fromDate`, `toDate` ← `toDate`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportBudgetSummary
- **HTTP**: `GET /Reports/BudgetSummary` (Default (api))
- **Signature**: `GetReportBudgetSummary(DateTimeOffset? date, int? periods, int? timeframe, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `periods` — nullable, no default → **must pass explicitly**
  - `timeframe` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `periods` ← `periods`, `timeframe` ← `timeframe`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportExecutiveSummary
- **HTTP**: `GET /Reports/ExecutiveSummary` (Default (api))
- **Signature**: `GetReportExecutiveSummary(DateTimeOffset? date, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportFromId
- **HTTP**: `GET /Reports/{ReportID}` (Default (api))
- **Signature**: `GetReportFromId(string reportId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportProfitAndLoss
- **HTTP**: `GET /Reports/ProfitAndLoss` (Default (api))
- **Signature**: `GetReportProfitAndLoss(DateTimeOffset? fromDate, DateTimeOffset? toDate, int? periods, Timeframe? timeframe, string? trackingCategoryId, string? trackingCategoryId2, string? trackingOptionId, string? trackingOptionId2, bool? standardLayout, bool? paymentsOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`fromDate` … `paymentsOnly`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromDate` ← `fromDate`, `toDate` ← `toDate`, `periods` ← `periods`, `timeframe` ← `timeframe`, `trackingCategoryID` ← `trackingCategoryId`, `trackingCategoryID2` ← `trackingCategoryId2`, `trackingOptionID` ← `trackingOptionId`, `trackingOptionID2` ← `trackingOptionId2`, `standardLayout` ← `standardLayout`, `paymentsOnly` ← `paymentsOnly`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportTenNinetyNine
- **HTTP**: `GET /Reports/TenNinetyNine` (Default (api))
- **Signature**: `GetReportTenNinetyNine(string? reportYear, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `reportYear` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `reportYear` ← `reportYear`
- **Returns**: `Reports`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportTrialBalance
- **HTTP**: `GET /Reports/TrialBalance` (Default (api))
- **Signature**: `GetReportTrialBalance(DateTimeOffset? date, bool? paymentsOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `paymentsOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `paymentsOnly` ← `paymentsOnly`
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReportsList
- **HTTP**: `GET /Reports` (Default (api))
- **Signature**: `GetReportsList(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReportWithRows`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTaxRateByTaxType
- **HTTP**: `GET /TaxRates/{TaxType}` (Default (api))
- **Signature**: `GetTaxRateByTaxType(string taxType, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaxRates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTaxRates
- **HTTP**: `GET /TaxRates` (Default (api))
- **Signature**: `GetTaxRates(string? where, string? order, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `TaxRates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTrackingCategories
- **HTTP**: `GET /TrackingCategories` (Default (api))
- **Signature**: `GetTrackingCategories(string? where, string? order, bool? includeArchived, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - `includeArchived` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `includeArchived` ← `includeArchived`
- **Returns**: `TrackingCategories`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTrackingCategory
- **HTTP**: `GET /TrackingCategories/{TrackingCategoryID}` (Default (api))
- **Signature**: `GetTrackingCategory(Guid trackingCategoryId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrackingCategories`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUser
- **HTTP**: `GET /Users/{UserID}` (Default (api))
- **Signature**: `GetUser(Guid userId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Users`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsers
- **HTTP**: `GET /Users` (Default (api))
- **Signature**: `GetUsers(string? where, string? order, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `where` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - `ifModifiedSince` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`
- **Returns**: `Users`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostSetup
- **HTTP**: `POST /Setup` (Default (api))
- **Signature**: `PostSetup(string xeroTenantId, string? idempotencyKey, Setup body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ImportSummaryObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAccount
- **HTTP**: `POST /Accounts/{AccountID}` (Default (api))
- **Signature**: `UpdateAccount(Guid accountId, string xeroTenantId, string? idempotencyKey, Accounts body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Accounts`
- **Error**: `SdkException<UpdateAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAccountAttachmentByFileName
- **HTTP**: `POST /Accounts/{AccountID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateAccountAttachmentByFileName(Guid accountId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateAccountAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBankTransaction
- **HTTP**: `POST /BankTransactions/{BankTransactionID}` (Default (api))
- **Signature**: `UpdateBankTransaction(Guid bankTransactionId, int? unitdp, string xeroTenantId, string? idempotencyKey, BankTransactions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `BankTransactions`
- **Error**: `SdkException<UpdateBankTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBankTransactionAttachmentByFileName
- **HTTP**: `POST /BankTransactions/{BankTransactionID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateBankTransactionAttachmentByFileName(Guid bankTransactionId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateBankTransactionAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBankTransferAttachmentByFileName
- **HTTP**: `POST /BankTransfers/{BankTransferID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateBankTransferAttachmentByFileName(Guid bankTransferId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateBankTransferAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateContact
- **HTTP**: `POST /Contacts/{ContactID}` (Default (api))
- **Signature**: `UpdateContact(Guid contactId, string xeroTenantId, string? idempotencyKey, Contacts body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Contacts`
- **Error**: `SdkException<UpdateContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateContactAttachmentByFileName
- **HTTP**: `POST /Contacts/{ContactID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateContactAttachmentByFileName(Guid contactId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateContactAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateContactGroup
- **HTTP**: `POST /ContactGroups/{ContactGroupID}` (Default (api))
- **Signature**: `UpdateContactGroup(Guid contactGroupId, string xeroTenantId, string? idempotencyKey, ContactGroups body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ContactGroups`
- **Error**: `SdkException<UpdateContactGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCreditNote
- **HTTP**: `POST /CreditNotes/{CreditNoteID}` (Default (api))
- **Signature**: `UpdateCreditNote(Guid creditNoteId, int? unitdp, string xeroTenantId, string? idempotencyKey, CreditNotes body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `CreditNotes`
- **Error**: `SdkException<UpdateCreditNoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCreditNoteAttachmentByFileName
- **HTTP**: `POST /CreditNotes/{CreditNoteID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateCreditNoteAttachmentByFileName(Guid creditNoteId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateCreditNoteAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateExpenseClaim
- **HTTP**: `POST /ExpenseClaims/{ExpenseClaimID}` (Default (api))
- **Signature**: `UpdateExpenseClaim(Guid expenseClaimId, string xeroTenantId, string? idempotencyKey, ExpenseClaims body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ExpenseClaims`
- **Error**: `SdkException<UpdateExpenseClaimError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInvoice
- **HTTP**: `POST /Invoices/{InvoiceID}` (Default (api))
- **Signature**: `UpdateInvoice(Guid invoiceId, int? unitdp, string xeroTenantId, string? idempotencyKey, Invoices body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Invoices`
- **Error**: `SdkException<UpdateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInvoiceAttachmentByFileName
- **HTTP**: `POST /Invoices/{InvoiceID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateInvoiceAttachmentByFileName(Guid invoiceId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateInvoiceAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateItem
- **HTTP**: `POST /Items/{ItemID}` (Default (api))
- **Signature**: `UpdateItem(Guid itemId, int? unitdp, string xeroTenantId, string? idempotencyKey, Items body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Items`
- **Error**: `SdkException<UpdateItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLinkedTransaction
- **HTTP**: `POST /LinkedTransactions/{LinkedTransactionID}` (Default (api))
- **Signature**: `UpdateLinkedTransaction(Guid linkedTransactionId, string xeroTenantId, string? idempotencyKey, LinkedTransactions body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkedTransactions`
- **Error**: `SdkException<UpdateLinkedTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateManualJournal
- **HTTP**: `POST /ManualJournals/{ManualJournalID}` (Default (api))
- **Signature**: `UpdateManualJournal(Guid manualJournalId, string xeroTenantId, string? idempotencyKey, ManualJournals body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ManualJournals`
- **Error**: `SdkException<UpdateManualJournalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateManualJournalAttachmentByFileName
- **HTTP**: `POST /ManualJournals/{ManualJournalID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateManualJournalAttachmentByFileName(Guid manualJournalId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateManualJournalAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateBankTransactions
- **HTTP**: `POST /BankTransactions` (Default (api))
- **Signature**: `UpdateOrCreateBankTransactions(int? unitdp, string xeroTenantId, string? idempotencyKey, BankTransactions body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `BankTransactions`
- **Error**: `SdkException<UpdateOrCreateBankTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateContacts
- **HTTP**: `POST /Contacts` (Default (api))
- **Signature**: `UpdateOrCreateContacts(string xeroTenantId, string? idempotencyKey, Contacts body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Contacts`
- **Error**: `SdkException<UpdateOrCreateContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateCreditNotes
- **HTTP**: `POST /CreditNotes` (Default (api))
- **Signature**: `UpdateOrCreateCreditNotes(int? unitdp, string xeroTenantId, string? idempotencyKey, CreditNotes body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `CreditNotes`
- **Error**: `SdkException<UpdateOrCreateCreditNotesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateInvoices
- **HTTP**: `POST /Invoices` (Default (api))
- **Signature**: `UpdateOrCreateInvoices(int? unitdp, string xeroTenantId, string? idempotencyKey, Invoices body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `Invoices`
- **Error**: `SdkException<UpdateOrCreateInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateItems
- **HTTP**: `POST /Items` (Default (api))
- **Signature**: `UpdateOrCreateItems(int? unitdp, string xeroTenantId, string? idempotencyKey, Items body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`, `unitdp` ← `unitdp`
- **Returns**: `Items`
- **Error**: `SdkException<UpdateOrCreateItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateManualJournals
- **HTTP**: `POST /ManualJournals` (Default (api))
- **Signature**: `UpdateOrCreateManualJournals(string xeroTenantId, string? idempotencyKey, ManualJournals body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `ManualJournals`
- **Error**: `SdkException<UpdateOrCreateManualJournalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreatePurchaseOrders
- **HTTP**: `POST /PurchaseOrders` (Default (api))
- **Signature**: `UpdateOrCreatePurchaseOrders(string xeroTenantId, string? idempotencyKey, PurchaseOrders body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `PurchaseOrders`
- **Error**: `SdkException<UpdateOrCreatePurchaseOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateQuotes
- **HTTP**: `POST /Quotes` (Default (api))
- **Signature**: `UpdateOrCreateQuotes(string xeroTenantId, string? idempotencyKey, Quotes body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `Quotes`
- **Error**: `SdkException<UpdateOrCreateQuotesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrCreateRepeatingInvoices
- **HTTP**: `POST /RepeatingInvoices` (Default (api))
- **Signature**: `UpdateOrCreateRepeatingInvoices(string xeroTenantId, string? idempotencyKey, RepeatingInvoices body, bool? summarizeErrors = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `summarizeErrors` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `summarizeErrors` ← `summarizeErrors`
- **Returns**: `RepeatingInvoices`
- **Error**: `SdkException<UpdateOrCreateRepeatingInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePurchaseOrder
- **HTTP**: `POST /PurchaseOrders/{PurchaseOrderID}` (Default (api))
- **Signature**: `UpdatePurchaseOrder(Guid purchaseOrderId, string xeroTenantId, string? idempotencyKey, PurchaseOrders body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PurchaseOrders`
- **Error**: `SdkException<UpdatePurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePurchaseOrderAttachmentByFileName
- **HTTP**: `POST /PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdatePurchaseOrderAttachmentByFileName(Guid purchaseOrderId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdatePurchaseOrderAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateQuote
- **HTTP**: `POST /Quotes/{QuoteID}` (Default (api))
- **Signature**: `UpdateQuote(Guid quoteId, string xeroTenantId, string? idempotencyKey, Quotes body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Quotes`
- **Error**: `SdkException<UpdateQuoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateQuoteAttachmentByFileName
- **HTTP**: `POST /Quotes/{QuoteID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateQuoteAttachmentByFileName(Guid quoteId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateQuoteAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateReceipt
- **HTTP**: `POST /Receipts/{ReceiptID}` (Default (api))
- **Signature**: `UpdateReceipt(Guid receiptId, int? unitdp, string xeroTenantId, string? idempotencyKey, Receipts body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `unitdp` — nullable, no default → **must pass explicitly**
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `unitdp` ← `unitdp`
- **Returns**: `Receipts`
- **Error**: `SdkException<UpdateReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateReceiptAttachmentByFileName
- **HTTP**: `POST /Receipts/{ReceiptID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateReceiptAttachmentByFileName(Guid receiptId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateReceiptAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRepeatingInvoice
- **HTTP**: `POST /RepeatingInvoices/{RepeatingInvoiceID}` (Default (api))
- **Signature**: `UpdateRepeatingInvoice(Guid repeatingInvoiceId, string xeroTenantId, string? idempotencyKey, RepeatingInvoices body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RepeatingInvoices`
- **Error**: `SdkException<UpdateRepeatingInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRepeatingInvoiceAttachmentByFileName
- **HTTP**: `POST /RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}` (Default (api))
- **Signature**: `UpdateRepeatingInvoiceAttachmentByFileName(Guid repeatingInvoiceId, string fileName, string xeroTenantId, string? idempotencyKey, BinaryContent body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachments`
- **Error**: `SdkException<UpdateRepeatingInvoiceAttachmentByFileNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTaxRate
- **HTTP**: `POST /TaxRates` (Default (api))
- **Signature**: `UpdateTaxRate(string xeroTenantId, string? idempotencyKey, TaxRates body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TaxRates`
- **Error**: `SdkException<UpdateTaxRateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTrackingCategory
- **HTTP**: `POST /TrackingCategories/{TrackingCategoryID}` (Default (api))
- **Signature**: `UpdateTrackingCategory(Guid trackingCategoryId, string xeroTenantId, string? idempotencyKey, TrackingCategory body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TrackingCategories`
- **Error**: `SdkException<UpdateTrackingCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTrackingOptions
- **HTTP**: `POST /TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}` (Default (api))
- **Signature**: `UpdateTrackingOptions(Guid trackingCategoryId, Guid trackingOptionId, string xeroTenantId, string? idempotencyKey, TrackingOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TrackingOptions`
- **Error**: `SdkException<UpdateTrackingOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
