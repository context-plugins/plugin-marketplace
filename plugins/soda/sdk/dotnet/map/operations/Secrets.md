<!-- Generated file — do not edit; regenerated with the SDK. -->

# Secrets — operations

Accessor: `client.Secrets` · Source: `src/Soda/Api/Secrets.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1SecretsSecretId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1SecretsSecretId(DeleteApiV1SecretsSecretIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SecretId`
- **Returns**: `PublicApiDeleteSecretResponse`
- **Error**: `ApiException<DeleteApiV1SecretsSecretIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1SecretsSecretIdRequest` | `src/Soda/Requests/Secrets/DeleteApiV1SecretsSecretIdRequest.cs` |
| `PublicApiDeleteSecretResponse` | `src/Soda/Models/PublicApiDeleteSecretResponse.cs` |
| `DeleteApiV1SecretsSecretIdError` | `src/Soda/Errors/DeleteApiV1SecretsSecretIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Secrets

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Secrets(GetApiV1SecretsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `search` ← `Search`, `size` ← `Size`
- **Returns**: `PublicApiListSecretsResponse`
- **Error**: `ApiException<GetApiV1SecretsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1SecretsRequest` | `src/Soda/Requests/Secrets/GetApiV1SecretsRequest.cs` |
| `PublicApiListSecretsResponse` | `src/Soda/Models/PublicApiListSecretsResponse.cs` |
| `GetApiV1SecretsError` | `src/Soda/Errors/GetApiV1SecretsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1SecretsPublicKey

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1SecretsPublicKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PublicApiGetEncryptionKeyResponse`
- **Error**: `ApiException<GetApiV1SecretsPublicKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublicApiGetEncryptionKeyResponse` | `src/Soda/Models/PublicApiGetEncryptionKeyResponse.cs` |
| `GetApiV1SecretsPublicKeyError` | `src/Soda/Errors/GetApiV1SecretsPublicKeyError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Secrets

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Secrets(PostApiV1SecretsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiCreateSecretResponse`
- **Error**: `ApiException<PostApiV1SecretsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1SecretsRequest` | `src/Soda/Requests/Secrets/PostApiV1SecretsRequest.cs` |
| `PublicApiCreateSecretRequestDto` | `src/Soda/Models/PublicApiCreateSecretRequestDto.cs` |
| `PublicApiCreateSecretResponse` | `src/Soda/Models/PublicApiCreateSecretResponse.cs` |
| `PostApiV1SecretsError` | `src/Soda/Errors/PostApiV1SecretsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1SecretsSecretId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1SecretsSecretId(PostApiV1SecretsSecretIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SecretId`, `Body`
- **Returns**: `PublicApiUpdateSecretResponse`
- **Error**: `ApiException<PostApiV1SecretsSecretIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1SecretsSecretIdRequest` | `src/Soda/Requests/Secrets/PostApiV1SecretsSecretIdRequest.cs` |
| `PublicApiUpdateSecretRequestDto` | `src/Soda/Models/PublicApiUpdateSecretRequestDto.cs` |
| `PublicApiUpdateSecretResponse` | `src/Soda/Models/PublicApiUpdateSecretResponse.cs` |
| `PostApiV1SecretsSecretIdError` | `src/Soda/Errors/PostApiV1SecretsSecretIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

