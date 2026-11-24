<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostCsv — operations

Accessor: `client.PostCsv` · Source: `src/BundleSocial/Api/PostCsv.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCsvCreate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostCsvCreate(PostCsvCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PostCsvImportResponse`
- **Error**: `ApiException<PostCsvCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostCsvImport400Error1([NotNullWhen(true)] out ApiV1PostCsvImport400Error1? value)` [400] · `TryGetApiV1PostCsvImport401Error1([NotNullWhen(true)] out ApiV1PostCsvImport401Error1? value)` [401] · `TryGetApiV1PostCsvImport403Error1([NotNullWhen(true)] out ApiV1PostCsvImport403Error1? value)` [403] · `TryGetApiV1PostCsvImport404Error1([NotNullWhen(true)] out ApiV1PostCsvImport404Error1? value)` [404] · `TryGetApiV1PostCsvImport429Error1([NotNullWhen(true)] out ApiV1PostCsvImport429Error1? value)` [429] · `TryGetApiV1PostCsvImport500Error1([NotNullWhen(true)] out ApiV1PostCsvImport500Error1? value)` [500] · `TryGetApiV1PostCsvImport502Error1([NotNullWhen(true)] out ApiV1PostCsvImport502Error1? value)` [502] · `TryGetApiV1PostCsvImport503Error1([NotNullWhen(true)] out ApiV1PostCsvImport503Error1? value)` [503] · `TryGetApiV1PostCsvImport504Error1([NotNullWhen(true)] out ApiV1PostCsvImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCsvCreateRequest` | `src/BundleSocial/Requests/PostCsv/PostCsvCreateRequest.cs` |
| `ApiV1PostCsvImportResponse` | `src/BundleSocial/Models/ApiV1PostCsvImportResponse.cs` |
| `PostCsvCreateError` | `src/BundleSocial/Errors/PostCsvCreateError.cs` |
| `ApiV1PostCsvImport400Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport400Error1.cs` |
| `ApiV1PostCsvImport401Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport401Error1.cs` |
| `ApiV1PostCsvImport403Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport403Error1.cs` |
| `ApiV1PostCsvImport404Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport404Error1.cs` |
| `ApiV1PostCsvImport429Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport429Error1.cs` |
| `ApiV1PostCsvImport500Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport500Error1.cs` |
| `ApiV1PostCsvImport502Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport502Error1.cs` |
| `ApiV1PostCsvImport503Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport503Error1.cs` |
| `ApiV1PostCsvImport504Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport504Error1.cs` |

### PostCsvGetById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostCsvGetById(PostCsvGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1PostCsvImportResponse`
- **Error**: `ApiException<PostCsvGetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostCsvImport400Error1([NotNullWhen(true)] out ApiV1PostCsvImport400Error1? value)` [400] · `TryGetApiV1PostCsvImport401Error1([NotNullWhen(true)] out ApiV1PostCsvImport401Error1? value)` [401] · `TryGetApiV1PostCsvImport403Error1([NotNullWhen(true)] out ApiV1PostCsvImport403Error1? value)` [403] · `TryGetApiV1PostCsvImport404Error1([NotNullWhen(true)] out ApiV1PostCsvImport404Error1? value)` [404] · `TryGetApiV1PostCsvImport429Error1([NotNullWhen(true)] out ApiV1PostCsvImport429Error1? value)` [429] · `TryGetApiV1PostCsvImport500Error1([NotNullWhen(true)] out ApiV1PostCsvImport500Error1? value)` [500] · `TryGetApiV1PostCsvImport502Error1([NotNullWhen(true)] out ApiV1PostCsvImport502Error1? value)` [502] · `TryGetApiV1PostCsvImport503Error1([NotNullWhen(true)] out ApiV1PostCsvImport503Error1? value)` [503] · `TryGetApiV1PostCsvImport504Error1([NotNullWhen(true)] out ApiV1PostCsvImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCsvGetByIdRequest` | `src/BundleSocial/Requests/PostCsv/PostCsvGetByIdRequest.cs` |
| `ApiV1PostCsvImportResponse` | `src/BundleSocial/Models/ApiV1PostCsvImportResponse.cs` |
| `PostCsvGetByIdError` | `src/BundleSocial/Errors/PostCsvGetByIdError.cs` |
| `ApiV1PostCsvImport400Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport400Error1.cs` |
| `ApiV1PostCsvImport401Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport401Error1.cs` |
| `ApiV1PostCsvImport403Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport403Error1.cs` |
| `ApiV1PostCsvImport404Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport404Error1.cs` |
| `ApiV1PostCsvImport429Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport429Error1.cs` |
| `ApiV1PostCsvImport500Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport500Error1.cs` |
| `ApiV1PostCsvImport502Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport502Error1.cs` |
| `ApiV1PostCsvImport503Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport503Error1.cs` |
| `ApiV1PostCsvImport504Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport504Error1.cs` |

### PostCsvGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostCsvGetList(PostCsvGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1PostCsvImportResponse1`
- **Error**: `ApiException<PostCsvGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostCsvImport400Error1([NotNullWhen(true)] out ApiV1PostCsvImport400Error1? value)` [400] · `TryGetApiV1PostCsvImport401Error1([NotNullWhen(true)] out ApiV1PostCsvImport401Error1? value)` [401] · `TryGetApiV1PostCsvImport403Error1([NotNullWhen(true)] out ApiV1PostCsvImport403Error1? value)` [403] · `TryGetApiV1PostCsvImport404Error1([NotNullWhen(true)] out ApiV1PostCsvImport404Error1? value)` [404] · `TryGetApiV1PostCsvImport429Error1([NotNullWhen(true)] out ApiV1PostCsvImport429Error1? value)` [429] · `TryGetApiV1PostCsvImport500Error1([NotNullWhen(true)] out ApiV1PostCsvImport500Error1? value)` [500] · `TryGetApiV1PostCsvImport502Error1([NotNullWhen(true)] out ApiV1PostCsvImport502Error1? value)` [502] · `TryGetApiV1PostCsvImport503Error1([NotNullWhen(true)] out ApiV1PostCsvImport503Error1? value)` [503] · `TryGetApiV1PostCsvImport504Error1([NotNullWhen(true)] out ApiV1PostCsvImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCsvGetListRequest` | `src/BundleSocial/Requests/PostCsv/PostCsvGetListRequest.cs` |
| `ApiV1PostCsvImportResponse1` | `src/BundleSocial/Models/ApiV1PostCsvImportResponse1.cs` |
| `PostCsvGetListError` | `src/BundleSocial/Errors/PostCsvGetListError.cs` |
| `ApiV1PostCsvImport400Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport400Error1.cs` |
| `ApiV1PostCsvImport401Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport401Error1.cs` |
| `ApiV1PostCsvImport403Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport403Error1.cs` |
| `ApiV1PostCsvImport404Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport404Error1.cs` |
| `ApiV1PostCsvImport429Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport429Error1.cs` |
| `ApiV1PostCsvImport500Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport500Error1.cs` |
| `ApiV1PostCsvImport502Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport502Error1.cs` |
| `ApiV1PostCsvImport503Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport503Error1.cs` |
| `ApiV1PostCsvImport504Error1` | `src/BundleSocial/Models/ApiV1PostCsvImport504Error1.cs` |

### PostCsvGetRows

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostCsvGetRows(PostCsvGetRowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Query params (wire ← C#)**: `status` ← `Status`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1PostCsvImportRowsResponse`
- **Error**: `ApiException<PostCsvGetRowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostCsvImportRows400Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows400Error1? value)` [400] · `TryGetApiV1PostCsvImportRows401Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows401Error1? value)` [401] · `TryGetApiV1PostCsvImportRows403Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows403Error1? value)` [403] · `TryGetApiV1PostCsvImportRows404Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows404Error1? value)` [404] · `TryGetApiV1PostCsvImportRows429Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows429Error1? value)` [429] · `TryGetApiV1PostCsvImportRows500Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows500Error1? value)` [500] · `TryGetApiV1PostCsvImportRows502Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows502Error1? value)` [502] · `TryGetApiV1PostCsvImportRows503Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows503Error1? value)` [503] · `TryGetApiV1PostCsvImportRows504Error1([NotNullWhen(true)] out ApiV1PostCsvImportRows504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCsvGetRowsRequest` | `src/BundleSocial/Requests/PostCsv/PostCsvGetRowsRequest.cs` |
| `Status4BundleSocialPostCsvApi` | `src/BundleSocial/Models/Enums/Status4BundleSocialPostCsvApi.cs` |
| `ApiV1PostCsvImportRowsResponse` | `src/BundleSocial/Models/ApiV1PostCsvImportRowsResponse.cs` |
| `PostCsvGetRowsError` | `src/BundleSocial/Errors/PostCsvGetRowsError.cs` |
| `ApiV1PostCsvImportRows400Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows400Error1.cs` |
| `ApiV1PostCsvImportRows401Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows401Error1.cs` |
| `ApiV1PostCsvImportRows403Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows403Error1.cs` |
| `ApiV1PostCsvImportRows404Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows404Error1.cs` |
| `ApiV1PostCsvImportRows429Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows429Error1.cs` |
| `ApiV1PostCsvImportRows500Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows500Error1.cs` |
| `ApiV1PostCsvImportRows502Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows502Error1.cs` |
| `ApiV1PostCsvImportRows503Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows503Error1.cs` |
| `ApiV1PostCsvImportRows504Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportRows504Error1.cs` |

### PostCsvGetStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostCsvGetStatus(PostCsvGetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1PostCsvImportStatusResponse`
- **Error**: `ApiException<PostCsvGetStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostCsvImportStatus400Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus400Error1? value)` [400] · `TryGetApiV1PostCsvImportStatus401Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus401Error1? value)` [401] · `TryGetApiV1PostCsvImportStatus403Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus403Error1? value)` [403] · `TryGetApiV1PostCsvImportStatus404Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus404Error1? value)` [404] · `TryGetApiV1PostCsvImportStatus429Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus429Error1? value)` [429] · `TryGetApiV1PostCsvImportStatus500Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus500Error1? value)` [500] · `TryGetApiV1PostCsvImportStatus502Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus502Error1? value)` [502] · `TryGetApiV1PostCsvImportStatus503Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus503Error1? value)` [503] · `TryGetApiV1PostCsvImportStatus504Error1([NotNullWhen(true)] out ApiV1PostCsvImportStatus504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCsvGetStatusRequest` | `src/BundleSocial/Requests/PostCsv/PostCsvGetStatusRequest.cs` |
| `ApiV1PostCsvImportStatusResponse` | `src/BundleSocial/Models/ApiV1PostCsvImportStatusResponse.cs` |
| `PostCsvGetStatusError` | `src/BundleSocial/Errors/PostCsvGetStatusError.cs` |
| `ApiV1PostCsvImportStatus400Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus400Error1.cs` |
| `ApiV1PostCsvImportStatus401Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus401Error1.cs` |
| `ApiV1PostCsvImportStatus403Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus403Error1.cs` |
| `ApiV1PostCsvImportStatus404Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus404Error1.cs` |
| `ApiV1PostCsvImportStatus429Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus429Error1.cs` |
| `ApiV1PostCsvImportStatus500Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus500Error1.cs` |
| `ApiV1PostCsvImportStatus502Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus502Error1.cs` |
| `ApiV1PostCsvImportStatus503Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus503Error1.cs` |
| `ApiV1PostCsvImportStatus504Error1` | `src/BundleSocial/Models/ApiV1PostCsvImportStatus504Error1.cs` |

