# Labelling — operations

Accessor: `client.Labelling` · Source: `Api/Labelling.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GenerateLabel
- **HTTP**: `POST /shipment/v2_2/label` (Postnl (api))
- **Signature**: `GenerateLabel(LabellingRequest body, bool? confirm = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `confirm` = true, `requestOptions` = null
- **Query params (wire ← C#)**: `confirm` ← `confirm`
- **Returns**: `LabellingResponse`
- **Error**: `SdkException<GenerateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLabellingResponseInvalid(out LabellingResponseInvalid)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyPost(out MethodNotAllowedOnlyPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
