<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerStakeholders — operations

Accessor: `client.PartnerStakeholders` · Source: `src/Curlec/Api/PartnerStakeholders.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStakeholder2

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateStakeholder2(CreateStakeholder2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `StakeholderRazorpayPartnerStakeholdersApi`
- **Error**: `ApiException<CreateStakeholder2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStakeholder2Request` | `src/Curlec/Requests/PartnerStakeholders/CreateStakeholder2Request.cs` |
| `V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi` | `src/Curlec/Models/V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi.cs` |
| `StakeholderRazorpayPartnerStakeholdersApi` | `src/Curlec/Models/StakeholderRazorpayPartnerStakeholdersApi.cs` |
| `CreateStakeholder2Error` | `src/Curlec/Errors/CreateStakeholder2Error.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllStakeholders

- **Auth**: `options.BasicAuth`
- **Signature**: `FetchAllStakeholders(FetchAllStakeholdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `V2AccountsStakeholdersResponse`
- **Error**: `ApiException<FetchAllStakeholdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllStakeholdersRequest` | `src/Curlec/Requests/PartnerStakeholders/FetchAllStakeholdersRequest.cs` |
| `V2AccountsStakeholdersResponse` | `src/Curlec/Models/V2AccountsStakeholdersResponse.cs` |
| `FetchAllStakeholdersError` | `src/Curlec/Errors/FetchAllStakeholdersError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateStakeholder2

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateStakeholder2(UpdateStakeholder2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `StakeholderId`, `Body`
- **Returns**: `StakeholderRazorpayPartnerStakeholdersApi`
- **Error**: `ApiException<UpdateStakeholder2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStakeholder2Request` | `src/Curlec/Requests/PartnerStakeholders/UpdateStakeholder2Request.cs` |
| `V2AccountsStakeholdersRequest1` | `src/Curlec/Models/V2AccountsStakeholdersRequest1.cs` |
| `StakeholderRazorpayPartnerStakeholdersApi` | `src/Curlec/Models/StakeholderRazorpayPartnerStakeholdersApi.cs` |
| `UpdateStakeholder2Error` | `src/Curlec/Errors/UpdateStakeholder2Error.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

