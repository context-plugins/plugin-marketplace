# TaxForms — operations

Accessor: `client.TaxForms` · Source: `Api/TaxForms.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTaxForm
- **HTTP**: `GET /tax-forms/{taxFormId}` (Ustax (financialdataexchange-prod))
- **Notes**: Get the form image or TaxStatement as json for a single tax document for the customer. Use HTTP Accept request-header to specify desired content types. See `AcceptHeader` definition for typical values
- **Signature**: `GetTaxForm(string taxFormId, TypeDataType? taxDataType, string authorization, Guid xFapiInteractionId, string accept, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taxDataType` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `taxDataType` ← `taxDataType`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetTaxFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 406, 409, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForTaxForms
- **HTTP**: `GET /tax-forms` (Ustax (financialdataexchange-prod))
- **Notes**: Get the full lists of tax document data and tax form images available for a specific year for the current authorized customer
- **Signature**: `SearchForTaxForms(string? accountId, int? taxYear, IReadOnlyList<TypeFormType>? taxForms, TypeDataType? taxDataType, ResultType? resultType, string authorization, Guid xFapiInteractionId, string accept, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`accountId` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountId` ← `accountId`, `taxYear` ← `taxYear`, `taxForms` ← `taxForms`, `taxDataType` ← `taxDataType`, `resultType` ← `resultType`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SearchForTaxFormsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 406, 409, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
