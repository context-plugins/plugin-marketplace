<!-- Generated file — do not edit; regenerated with the SDK. -->

# PhoneNumbers — operations

Accessor: `client.PhoneNumbers` · Source: `src/CallNode/Api/PhoneNumbers.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetNumber

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetNumber(GetNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1NumbersResponse1`
- **Error**: `ApiException<GetNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetNumberRequest` | `src/CallNode/Requests/PhoneNumbers/GetNumberRequest.cs` |
| `ApiV1NumbersResponse1` | `src/CallNode/Models/ApiV1NumbersResponse1.cs` |
| `GetNumberError` | `src/CallNode/Errors/GetNumberError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListNumbers

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListNumbers(ListNumbersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `type` ← `Type`, `purchaseSource` ← `PurchaseSource`, `tag` ← `Tag`, `q` ← `Q`
- **Returns**: `ApiV1NumbersResponse`
- **Error**: `ApiException<ListNumbersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListNumbersRequest` | `src/CallNode/Requests/PhoneNumbers/ListNumbersRequest.cs` |
| `Type3` | `src/CallNode/Models/Enums/Type3.cs` |
| `PurchaseSource1` | `src/CallNode/Models/Enums/PurchaseSource1.cs` |
| `ApiV1NumbersResponse` | `src/CallNode/Models/ApiV1NumbersResponse.cs` |
| `ListNumbersError` | `src/CallNode/Errors/ListNumbersError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### PurchaseNumber

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `PurchaseNumber(PurchaseNumberOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PurchaseNumberResponse`
- **Error**: `ApiException<PurchaseNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 409, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchaseNumberOperationRequest` | `src/CallNode/Requests/PhoneNumbers/PurchaseNumberOperationRequest.cs` |
| `PurchaseNumberRequest` | `src/CallNode/Models/PurchaseNumberRequest.cs` |
| `PurchaseNumberResponse` | `src/CallNode/Models/PurchaseNumberResponse.cs` |
| `PurchaseNumberError` | `src/CallNode/Errors/PurchaseNumberError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ReleaseNumber

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ReleaseNumber(ReleaseNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1NumbersResponse3`
- **Error**: `ApiException<ReleaseNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReleaseNumberRequest` | `src/CallNode/Requests/PhoneNumbers/ReleaseNumberRequest.cs` |
| `ApiV1NumbersResponse3` | `src/CallNode/Models/ApiV1NumbersResponse3.cs` |
| `ReleaseNumberError` | `src/CallNode/Errors/ReleaseNumberError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### SearchAvailableNumbers

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `SearchAvailableNumbers(SearchAvailableNumbersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `areaCode` ← `AreaCode`, `prefix` ← `Prefix`, `vanity` ← `Vanity`, `quantity` ← `Quantity`
- **Returns**: `ApiV1NumbersAvailableResponse`
- **Error**: `ApiException<SearchAvailableNumbersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchAvailableNumbersRequest` | `src/CallNode/Requests/PhoneNumbers/SearchAvailableNumbersRequest.cs` |
| `Type3` | `src/CallNode/Models/Enums/Type3.cs` |
| `Prefix` | `src/CallNode/Models/Enums/Prefix.cs` |
| `ApiV1NumbersAvailableResponse` | `src/CallNode/Models/ApiV1NumbersAvailableResponse.cs` |
| `SearchAvailableNumbersError` | `src/CallNode/Errors/SearchAvailableNumbersError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### UpdateNumber

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `UpdateNumber(UpdateNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1NumbersResponse1`
- **Error**: `ApiException<UpdateNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateNumberRequest` | `src/CallNode/Requests/PhoneNumbers/UpdateNumberRequest.cs` |
| `ApiV1NumbersRequest` | `src/CallNode/Models/ApiV1NumbersRequest.cs` |
| `ApiV1NumbersResponse1` | `src/CallNode/Models/ApiV1NumbersResponse1.cs` |
| `UpdateNumberError` | `src/CallNode/Errors/UpdateNumberError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

