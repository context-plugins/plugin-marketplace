<!-- Generated file — do not edit; regenerated with the SDK. -->

# AttributesApi — operations

Accessor: `client.AttributesApi` · Source: `src/Soda/Api/AttributesApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1AttributesAttributeId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1AttributesAttributeId(DeleteApiV1AttributesAttributeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttributeId`
- **Returns**: `PublicApiDeleteAttributeResponse`
- **Error**: `ApiException<DeleteApiV1AttributesAttributeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1AttributesAttributeIdRequest` | `src/Soda/Requests/AttributesApi/DeleteApiV1AttributesAttributeIdRequest.cs` |
| `PublicApiDeleteAttributeResponse` | `src/Soda/Models/PublicApiDeleteAttributeResponse.cs` |
| `DeleteApiV1AttributesAttributeIdError` | `src/Soda/Errors/DeleteApiV1AttributesAttributeIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Attributes

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Attributes(GetApiV1AttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `resourceType` ← `ResourceType`, `size` ← `Size`
- **Returns**: `PublicApiListAttributesResponse`
- **Error**: `ApiException<GetApiV1AttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1AttributesRequest` | `src/Soda/Requests/AttributesApi/GetApiV1AttributesRequest.cs` |
| `AttributeResourceTypeDto` | `src/Soda/Models/Enums/AttributeResourceTypeDto.cs` |
| `PublicApiListAttributesResponse` | `src/Soda/Models/PublicApiListAttributesResponse.cs` |
| `GetApiV1AttributesError` | `src/Soda/Errors/GetApiV1AttributesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Attributes

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Attributes(PostApiV1AttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiCreateAttributeResponse`
- **Error**: `ApiException<PostApiV1AttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1AttributesRequest` | `src/Soda/Requests/AttributesApi/PostApiV1AttributesRequest.cs` |
| `PublicApiCreateAttributeRequestDto` | `src/Soda/Models/PublicApiCreateAttributeRequestDto.cs` |
| `PublicApiCreateAttributeResponse` | `src/Soda/Models/PublicApiCreateAttributeResponse.cs` |
| `PostApiV1AttributesError` | `src/Soda/Errors/PostApiV1AttributesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1AttributesAttributeId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1AttributesAttributeId(PostApiV1AttributesAttributeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttributeId`, `Body`
- **Returns**: `PublicApiUpdateAttributeResponse`
- **Error**: `ApiException<PostApiV1AttributesAttributeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1AttributesAttributeIdRequest` | `src/Soda/Requests/AttributesApi/PostApiV1AttributesAttributeIdRequest.cs` |
| `PublicApiUpdateAttributeRequestDto` | `src/Soda/Models/PublicApiUpdateAttributeRequestDto.cs` |
| `PublicApiUpdateAttributeResponse` | `src/Soda/Models/PublicApiUpdateAttributeResponse.cs` |
| `PostApiV1AttributesAttributeIdError` | `src/Soda/Errors/PostApiV1AttributesAttributeIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

