<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantsApi — operations

Accessor: `client.MerchantsApi` · Source: `src/FinixApiReference/Api/MerchantsApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMerchant

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateMerchant(CreateMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdentityId`, `Body`
- **Returns**: `MerchantSchema`
- **Error**: `ApiException<CreateMerchantError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantRequest` | `src/FinixApiReference/Requests/MerchantsApi/CreateMerchantRequest.cs` |
| `IdentitiesMerchantsRequest` | `src/FinixApiReference/Models/AnyOf/IdentitiesMerchantsRequest.cs` |
| `MerchantSchema` | `src/FinixApiReference/Models/MerchantSchema.cs` |
| `CreateMerchantError` | `src/FinixApiReference/Errors/CreateMerchantError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateMerchantVerification

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateMerchantVerification(CreateMerchantVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MerchantId`, `Body`
- **Returns**: `MerchantVerification`
- **Error**: `ApiException<CreateMerchantVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantVerificationRequest` | `src/FinixApiReference/Requests/MerchantsApi/CreateMerchantVerificationRequest.cs` |
| `MerchantVerification` | `src/FinixApiReference/Models/MerchantVerification.cs` |
| `CreateMerchantVerificationError` | `src/FinixApiReference/Errors/CreateMerchantVerificationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetMerchant

- **Auth**: `options.BasicAuth`
- **Signature**: `GetMerchant(GetMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MerchantId`
- **Returns**: `MerchantSchema`
- **Error**: `ApiException<GetMerchantError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMerchantRequest` | `src/FinixApiReference/Requests/MerchantsApi/GetMerchantRequest.cs` |
| `MerchantSchema` | `src/FinixApiReference/Models/MerchantSchema.cs` |
| `GetMerchantError` | `src/FinixApiReference/Errors/GetMerchantError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListMerchants

- **Auth**: `options.BasicAuth`
- **Signature**: `ListMerchants(ListMerchantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `application_id` ← `ApplicationId`, `country` ← `Country`, `currency` ← `Currency`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `id` ← `Id`, `identity_business_name` ← `IdentityBusinessName`, `identity_business_name.like` ← `IdentityBusinessNameLike`, `identity_doing_business_as` ← `IdentityDoingBusinessAs`, `identity_doing_business_as.like` ← `IdentityDoingBusinessAsLike`, `identity_first_name` ← `IdentityFirstName`, `identity_first_name.like` ← `IdentityFirstNameLike`, `identity_id` ← `IdentityId`, `identity_last_name` ← `IdentityLastName`, `identity_last_name.like` ← `IdentityLastNameLike`, `identity_role` ← `IdentityRole`, `mcc` ← `Mcc`, `merchant_name` ← `MerchantName`, `merchant_name.like` ← `MerchantNameLike`, `processing_enabled` ← `ProcessingEnabled`, `processor_type` ← `ProcessorType`, `settlement_enabled` ← `SettlementEnabled`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`, `verification_id` ← `VerificationId`
- **Returns**: `ListMerchants`
- **Error**: `ApiException<ListMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMerchantsRequest` | `src/FinixApiReference/Requests/MerchantsApi/ListMerchantsRequest.cs` |
| `Country2` | `src/FinixApiReference/Models/Enums/Country2.cs` |
| `Currency14` | `src/FinixApiReference/Models/Enums/Currency14.cs` |
| `IdentityRole9` | `src/FinixApiReference/Models/Enums/IdentityRole9.cs` |
| `ProcessorType` | `src/FinixApiReference/Models/Enums/ProcessorType.cs` |
| `ListMerchants` | `src/FinixApiReference/Models/ListMerchants.cs` |
| `ListMerchantsError` | `src/FinixApiReference/Errors/ListMerchantsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateMerchant

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateMerchant(UpdateMerchantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MerchantId`, `Body`
- **Returns**: `MerchantSchema`
- **Error**: `ApiException<UpdateMerchantError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMerchantRequest` | `src/FinixApiReference/Requests/MerchantsApi/UpdateMerchantRequest.cs` |
| `MerchantsRequest` | `src/FinixApiReference/Models/AnyOf/MerchantsRequest.cs` |
| `MerchantSchema` | `src/FinixApiReference/Models/MerchantSchema.cs` |
| `UpdateMerchantError` | `src/FinixApiReference/Errors/UpdateMerchantError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

