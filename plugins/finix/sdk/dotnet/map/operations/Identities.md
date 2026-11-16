<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.Identities` · Source: `src/FinixApiReference/Api/Identities.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAssociatedIdentity

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateAssociatedIdentity(CreateAssociatedIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`, `Body`
- **Returns**: `Identity`
- **Error**: `ApiException<CreateAssociatedIdentityError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAssociatedIdentityRequest` | `src/FinixApiReference/Requests/Identities/CreateAssociatedIdentityRequest.cs` |
| `CreateAssociatedIdentity` | `src/FinixApiReference/Models/CreateAssociatedIdentity.cs` |
| `Identity` | `src/FinixApiReference/Models/Identity.cs` |
| `CreateAssociatedIdentityError` | `src/FinixApiReference/Errors/CreateAssociatedIdentityError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateIdentity

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateIdentity(CreateIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Identity`
- **Error**: `ApiException<CreateIdentityError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateIdentityRequest` | `src/FinixApiReference/Requests/Identities/CreateIdentityRequest.cs` |
| `IdentitiesRequest` | `src/FinixApiReference/Models/AnyOf/IdentitiesRequest.cs` |
| `Identity` | `src/FinixApiReference/Models/Identity.cs` |
| `CreateIdentityError` | `src/FinixApiReference/Errors/CreateIdentityError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetIdentity

- **Auth**: `options.BasicAuth`
- **Signature**: `GetIdentity(GetIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`
- **Returns**: `Identity`
- **Error**: `ApiException<GetIdentityError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentityRequest` | `src/FinixApiReference/Requests/Identities/GetIdentityRequest.cs` |
| `Identity` | `src/FinixApiReference/Models/Identity.cs` |
| `GetIdentityError` | `src/FinixApiReference/Errors/GetIdentityError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetIdentityMerchant

- **Auth**: `options.BasicAuth`
- **Signature**: `GetIdentityMerchant(GetIdentityMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`
- **Returns**: `ListMerchants`
- **Error**: `ApiException<GetIdentityMerchantError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentityMerchantRequest` | `src/FinixApiReference/Requests/Identities/GetIdentityMerchantRequest.cs` |
| `ListMerchants` | `src/FinixApiReference/Models/ListMerchants.cs` |
| `GetIdentityMerchantError` | `src/FinixApiReference/Errors/GetIdentityMerchantError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListIdentities

- **Auth**: `options.BasicAuth`
- **Signature**: `ListIdentities(ListIdentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `business_name` ← `BusinessName`, `business_type` ← `BusinessType`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `default_statement_descriptor` ← `DefaultStatementDescriptor`, `email` ← `Email`, `first_name` ← `FirstName`, `id` ← `Id`, `identity_role` ← `IdentityRole`, `last_name` ← `LastName`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `title` ← `Title`, `type` ← `Type`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListIdentities`
- **Error**: `ApiException<ListIdentitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIdentitiesRequest` | `src/FinixApiReference/Requests/Identities/ListIdentitiesRequest.cs` |
| `BusinessType5` | `src/FinixApiReference/Models/Enums/BusinessType5.cs` |
| `IdentityRole` | `src/FinixApiReference/Models/Enums/IdentityRole.cs` |
| `Type51` | `src/FinixApiReference/Models/Enums/Type51.cs` |
| `ListIdentities` | `src/FinixApiReference/Models/ListIdentities.cs` |
| `ListIdentitiesError` | `src/FinixApiReference/Errors/ListIdentitiesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListIdentityAssociatedIdentities

- **Auth**: `options.BasicAuth`
- **Signature**: `ListIdentityAssociatedIdentities(ListIdentityAssociatedIdentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`
- **Returns**: `ListIdentities`
- **Error**: `ApiException<ListIdentityAssociatedIdentitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIdentityAssociatedIdentitiesRequest` | `src/FinixApiReference/Requests/Identities/ListIdentityAssociatedIdentitiesRequest.cs` |
| `ListIdentities` | `src/FinixApiReference/Models/ListIdentities.cs` |
| `ListIdentityAssociatedIdentitiesError` | `src/FinixApiReference/Errors/ListIdentityAssociatedIdentitiesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateIdentity

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateIdentity(UpdateIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`, `Body`
- **Returns**: `Identity`
- **Error**: `ApiException<UpdateIdentityError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateIdentityRequest` | `src/FinixApiReference/Requests/Identities/UpdateIdentityRequest.cs` |
| `UpdateIdentity` | `src/FinixApiReference/Models/UpdateIdentity.cs` |
| `Identity` | `src/FinixApiReference/Models/Identity.cs` |
| `UpdateIdentityError` | `src/FinixApiReference/Errors/UpdateIdentityError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

