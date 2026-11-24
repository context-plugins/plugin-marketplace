<!-- Generated file — do not edit; regenerated with the SDK. -->

# SmsApi — operations

Accessor: `client.SmsApi` · Source: `src/DidLogic/Api/SmsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SmsCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `SmsCreate(SmsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SmsResponse1`
- **Error**: `ApiException<SmsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetApiV1Sms403Error1([NotNullWhen(true)] out ApiV1Sms403Error1? value)` [403] · `TryGetApiV1SmsResponse21([NotNullWhen(true)] out ApiV1SmsResponse21? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SmsCreateRequest` | `src/DidLogic/Requests/SmsApi/SmsCreateRequest.cs` |
| `ApiV1SmsRequest` | `src/DidLogic/Models/ApiV1SmsRequest.cs` |
| `ApiV1SmsResponse1` | `src/DidLogic/Models/ApiV1SmsResponse1.cs` |
| `SmsCreateError` | `src/DidLogic/Errors/SmsCreateError.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |
| `ApiV1Sms403Error1` | `src/DidLogic/Models/ApiV1Sms403Error1.cs` |
| `ApiV1SmsResponse21` | `src/DidLogic/Models/AnyOf/ApiV1SmsResponse21.cs` |

### SmsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `SmsIndex(SmsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV1SmsResponse`
- **Error**: `ApiException<SmsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Sms403Error1([NotNullWhen(true)] out ApiV1Sms403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SmsIndexRequest` | `src/DidLogic/Requests/SmsApi/SmsIndexRequest.cs` |
| `ApiV1SmsResponse` | `src/DidLogic/Models/ApiV1SmsResponse.cs` |
| `SmsIndexError` | `src/DidLogic/Errors/SmsIndexError.cs` |
| `ApiV1Sms403Error1` | `src/DidLogic/Models/ApiV1Sms403Error1.cs` |

### SmsShow

- **Auth**: `options.BearerAuth`
- **Signature**: `SmsShow(SmsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1SmsResponse3`
- **Error**: `ApiException<SmsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Sms403Error1([NotNullWhen(true)] out ApiV1Sms403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SmsShowRequest` | `src/DidLogic/Requests/SmsApi/SmsShowRequest.cs` |
| `ApiV1SmsResponse3` | `src/DidLogic/Models/ApiV1SmsResponse3.cs` |
| `SmsShowError` | `src/DidLogic/Errors/SmsShowError.cs` |
| `ApiV1Sms403Error1` | `src/DidLogic/Models/ApiV1Sms403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

