<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputesApi — operations

Accessor: `client.DisputesApi` · Source: `src/FinixApiReference/Api/DisputesApi.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcceptDispute

- **Auth**: `options.BasicAuth`
- **Signature**: `AcceptDispute(AcceptDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `Body`
- **Returns**: `Dispute`
- **Error**: `ApiException<AcceptDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptDisputeRequest` | `src/FinixApiReference/Requests/DisputesApi/AcceptDisputeRequest.cs` |
| `AcceptDispute` | `src/FinixApiReference/Models/AcceptDispute.cs` |
| `Dispute` | `src/FinixApiReference/Models/Dispute.cs` |
| `AcceptDisputeError` | `src/FinixApiReference/Errors/AcceptDisputeError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateDisputeEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateDisputeEvidence(CreateDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`
- **Returns**: `DisputeEvidence`
- **Error**: `ApiException<CreateDisputeEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDisputeEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/CreateDisputeEvidenceRequest.cs` |
| `DisputeEvidence` | `src/FinixApiReference/Models/DisputeEvidence.cs` |
| `CreateDisputeEvidenceError` | `src/FinixApiReference/Errors/CreateDisputeEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### DeleteDisputeEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteDisputeEvidence(DeleteDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `EvidenceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDisputeEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDisputeEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/DeleteDisputeEvidenceRequest.cs` |
| `DeleteDisputeEvidenceError` | `src/FinixApiReference/Errors/DeleteDisputeEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### DownloadDisputeEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `DownloadDisputeEvidence(DownloadDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `EvidenceId`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadDisputeEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadDisputeEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/DownloadDisputeEvidenceRequest.cs` |
| `DownloadDisputeEvidenceError` | `src/FinixApiReference/Errors/DownloadDisputeEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetDispute

- **Auth**: `options.BasicAuth`
- **Signature**: `GetDispute(GetDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`
- **Returns**: `Dispute`
- **Error**: `ApiException<GetDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDisputeRequest` | `src/FinixApiReference/Requests/DisputesApi/GetDisputeRequest.cs` |
| `Dispute` | `src/FinixApiReference/Models/Dispute.cs` |
| `GetDisputeError` | `src/FinixApiReference/Errors/GetDisputeError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetDisputeEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `GetDisputeEvidence(GetDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `EvidenceId`
- **Returns**: `DisputeEvidence`
- **Error**: `ApiException<GetDisputeEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDisputeEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/GetDisputeEvidenceRequest.cs` |
| `DisputeEvidence` | `src/FinixApiReference/Models/DisputeEvidence.cs` |
| `GetDisputeEvidenceError` | `src/FinixApiReference/Errors/GetDisputeEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListDisputes

- **Auth**: `options.BasicAuth`
- **Signature**: `ListDisputes(ListDisputesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `adjustment_transfer_id` ← `AdjustmentTransferId`, `application_id` ← `ApplicationId`, `amount` ← `Amount`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `buyer_identity_first_name` ← `BuyerIdentityFirstName`, `buyer_identity_last_name` ← `BuyerIdentityLastName`, `buyer_business_name` ← `BuyerBusinessName`, `buyer_doing_business_as` ← `BuyerDoingBusinessAs`, `instrument_bin` ← `InstrumentBin`, `instrument_brand_type` ← `InstrumentBrandType`, `instrument_card_last4` ← `InstrumentCardLast4`, `instrument_card_type` ← `InstrumentCardType`, `instrument_fingerprint` ← `InstrumentFingerprint`, `instrument_name` ← `InstrumentName`, `instrument_type` ← `InstrumentType`, `limit` ← `Limit`, `merchant_identity_id` ← `MerchantIdentityId`, `merchant_identity_name` ← `MerchantIdentityName`, `merchant_identity_name.like` ← `MerchantIdentityNameLike`, `merchant_id` ← `MerchantId`, `merchant_mid` ← `MerchantMid`, `names` ← `Names`, `names.like` ← `NamesLike`, `response_state` ← `ResponseState`, `respond_by.lte` ← `RespondByLte`, `respond_by.gte` ← `RespondByGte`, `tags` ← `Tags`, `tags.like` ← `TagsLike`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `transfer_id` ← `TransferId`, `state` ← `State`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListDisputes`
- **Error**: `ApiException<ListDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDisputesRequest` | `src/FinixApiReference/Requests/DisputesApi/ListDisputesRequest.cs` |
| `ListDisputes` | `src/FinixApiReference/Models/ListDisputes.cs` |
| `ListDisputesError` | `src/FinixApiReference/Errors/ListDisputesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListDisputesAdjustments

- **Auth**: `options.BasicAuth`
- **Signature**: `ListDisputesAdjustments(ListDisputesAdjustmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListDisputeAdjustmentTransfers`
- **Error**: `ApiException<ListDisputesAdjustmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetDisputesAdjustmentTransfersResponse([NotNullWhen(true)] out DisputesAdjustmentTransfersResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDisputesAdjustmentsRequest` | `src/FinixApiReference/Requests/DisputesApi/ListDisputesAdjustmentsRequest.cs` |
| `ListDisputeAdjustmentTransfers` | `src/FinixApiReference/Models/ListDisputeAdjustmentTransfers.cs` |
| `ListDisputesAdjustmentsError` | `src/FinixApiReference/Errors/ListDisputesAdjustmentsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |
| `DisputesAdjustmentTransfersResponse` | `src/FinixApiReference/Models/DisputesAdjustmentTransfersResponse.cs` |

### ListDisputesEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `ListDisputesEvidence(ListDisputesEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListDisputeEvidence`
- **Error**: `ApiException<ListDisputesEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDisputesEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/ListDisputesEvidenceRequest.cs` |
| `ListDisputeEvidence` | `src/FinixApiReference/Models/ListDisputeEvidence.cs` |
| `ListDisputesEvidenceError` | `src/FinixApiReference/Errors/ListDisputesEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### SubmitDisputeEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `SubmitDisputeEvidence(SubmitDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `Body`
- **Returns**: `DisputeEvidence`
- **Error**: `ApiException<SubmitDisputeEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitDisputeEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/SubmitDisputeEvidenceRequest.cs` |
| `SubmitDisputeEvidence` | `src/FinixApiReference/Models/SubmitDisputeEvidence.cs` |
| `DisputeEvidence` | `src/FinixApiReference/Models/DisputeEvidence.cs` |
| `SubmitDisputeEvidenceError` | `src/FinixApiReference/Errors/SubmitDisputeEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateDispute

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateDispute(UpdateDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `Body`
- **Returns**: `Dispute`
- **Error**: `ApiException<UpdateDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDisputeRequest` | `src/FinixApiReference/Requests/DisputesApi/UpdateDisputeRequest.cs` |
| `UpdateDispute` | `src/FinixApiReference/Models/UpdateDispute.cs` |
| `Dispute` | `src/FinixApiReference/Models/Dispute.cs` |
| `UpdateDisputeError` | `src/FinixApiReference/Errors/UpdateDisputeError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateDisputeEvidence

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateDisputeEvidence(UpdateDisputeEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisputeId`, `EvidenceId`, `Body`
- **Returns**: `DisputeEvidence`
- **Error**: `ApiException<UpdateDisputeEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDisputeEvidenceRequest` | `src/FinixApiReference/Requests/DisputesApi/UpdateDisputeEvidenceRequest.cs` |
| `UpdateDisputeEvidence` | `src/FinixApiReference/Models/UpdateDisputeEvidence.cs` |
| `DisputeEvidence` | `src/FinixApiReference/Models/DisputeEvidence.cs` |
| `UpdateDisputeEvidenceError` | `src/FinixApiReference/Errors/UpdateDisputeEvidenceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

