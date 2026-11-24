<!-- Generated file — do not edit; regenerated with the SDK. -->

# Compliance — operations

Accessor: `client.Compliance` · Source: `src/Postscript/Api/Compliance.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Redact

- **Auth**: `options.Sec0`
- **Signature**: `Redact(RedactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2ComplianceRedactResponse`
- **Error**: `ApiException<RedactError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2ComplianceRedact403Error1([NotNullWhen(true)] out ApiV2ComplianceRedact403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RedactRequest` | `src/Postscript/Requests/Compliance/RedactRequest.cs` |
| `ApiV2ComplianceRedactRequest` | `src/Postscript/Models/ApiV2ComplianceRedactRequest.cs` |
| `ApiV2ComplianceRedactResponse` | `src/Postscript/Models/ApiV2ComplianceRedactResponse.cs` |
| `RedactError` | `src/Postscript/Errors/RedactError.cs` |
| `ApiV2ComplianceRedact403Error1` | `src/Postscript/Models/ApiV2ComplianceRedact403Error1.cs` |

### Unsubscribe

- **Auth**: `options.Sec0`
- **Signature**: `Unsubscribe(UnsubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2ComplianceUnsubscribeResponse`
- **Error**: `ApiException<UnsubscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2ComplianceUnsubscribe403Error1([NotNullWhen(true)] out ApiV2ComplianceUnsubscribe403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnsubscribeRequest` | `src/Postscript/Requests/Compliance/UnsubscribeRequest.cs` |
| `ApiV2ComplianceUnsubscribeRequest` | `src/Postscript/Models/ApiV2ComplianceUnsubscribeRequest.cs` |
| `ApiV2ComplianceUnsubscribeResponse` | `src/Postscript/Models/ApiV2ComplianceUnsubscribeResponse.cs` |
| `UnsubscribeError` | `src/Postscript/Errors/UnsubscribeError.cs` |
| `ApiV2ComplianceUnsubscribe403Error1` | `src/Postscript/Models/ApiV2ComplianceUnsubscribe403Error1.cs` |

