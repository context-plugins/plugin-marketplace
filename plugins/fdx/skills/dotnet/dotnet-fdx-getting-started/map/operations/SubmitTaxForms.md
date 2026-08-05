# SubmitTaxForms — operations

Accessor: `client.SubmitTaxForms` · Source: `Api/SubmitTaxForms.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTaxForm
- **HTTP**: `POST /tax-forms` (Ustax (financialdataexchange-prod))
- **Notes**: Submit the data for a specific tax document
- **Signature**: `CreateTaxForm(string authorization, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, TaxStatement1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TaxStatement2`
- **Error**: `SdkException<CreateTaxFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTaxForm
- **HTTP**: `PUT /tax-forms/{taxFormId}` (Ustax (financialdataexchange-prod))
- **Notes**: Update tax document. Allows you to upload and replace binaries or json document
- **Signature**: `UpdateTaxForm(string taxFormId, string authorization, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, TaxStatement6? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TaxStatement7`
- **Error**: `SdkException<UpdateTaxFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [415] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
