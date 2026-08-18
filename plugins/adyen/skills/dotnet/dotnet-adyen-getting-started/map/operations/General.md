<!-- Generated file — do not edit; regenerated with the SDK. -->

# General — operations

Accessor: `client.General` · Source: `Api/General.cs` · 41 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostAcceptDispute
- **Server group**: `Default22`
- **Signature**: `PostAcceptDispute(AcceptDisputeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AcceptDisputeResponse`
- **Error**: `SdkException<PostAcceptDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptDisputeRequest` | `Models/AcceptDisputeRequest.cs` |
| `AcceptDisputeResponse` | `Models/AcceptDisputeResponse.cs` |
| `PostAcceptDisputeError` | `Errors/PostAcceptDisputeError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostAccountHolderBalance
- **Server group**: `Default16`
- **Signature**: `PostAccountHolderBalance(CloseAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AccountHolderBalanceResponse`
- **Error**: `SdkException<PostAccountHolderBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CloseAccountHolderRequest` | `Models/CloseAccountHolderRequest.cs` |
| `AccountHolderBalanceResponse` | `Models/AccountHolderBalanceResponse.cs` |
| `PostAccountHolderBalanceError` | `Errors/PostAccountHolderBalanceError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostAccountHolderTransactionList
- **Server group**: `Default16`
- **Signature**: `PostAccountHolderTransactionList(AccountHolderTransactionListRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AccountHolderTransactionListResponse`
- **Error**: `SdkException<PostAccountHolderTransactionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccountHolderTransactionListRequest` | `Models/AccountHolderTransactionListRequest.cs` |
| `AccountHolderTransactionListResponse` | `Models/AccountHolderTransactionListResponse.cs` |
| `PostAccountHolderTransactionListError` | `Errors/PostAccountHolderTransactionListError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostAssignTerminals
- **Server group**: `Default28`
- **Signature**: `PostAssignTerminals(AssignTerminalsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AssignTerminalsResponse`
- **Error**: `SdkException<PostAssignTerminalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AssignTerminalsRequest` | `Models/AssignTerminalsRequest.cs` |
| `AssignTerminalsResponse` | `Models/AssignTerminalsResponse.cs` |
| `PostAssignTerminalsError` | `Errors/PostAssignTerminalsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostChangeStatus
- **Server group**: `Default5`
- **Signature**: `PostChangeStatus(StoredValueStatusChangeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueStatusChangeResponse`
- **Error**: `SdkException<PostChangeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoredValueStatusChangeRequest` | `Models/StoredValueStatusChangeRequest.cs` |
| `StoredValueStatusChangeResponse` | `Models/StoredValueStatusChangeResponse.cs` |
| `PostChangeStatusError` | `Errors/PostChangeStatusError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCheckBalance
- **Server group**: `Default5`
- **Signature**: `PostCheckBalance(StoredValueBalanceCheckRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueBalanceCheckResponse`
- **Error**: `SdkException<PostCheckBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoredValueBalanceCheckRequest` | `Models/StoredValueBalanceCheckRequest.cs` |
| `StoredValueBalanceCheckResponse` | `Models/StoredValueBalanceCheckResponse.cs` |
| `PostCheckBalanceError` | `Errors/PostCheckBalanceError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCreateNotificationConfiguration
- **Server group**: `Default12`
- **Signature**: `PostCreateNotificationConfiguration(CreateNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `SdkException<PostCreateNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateNotificationConfigurationRequest` | `Models/CreateNotificationConfigurationRequest.cs` |
| `GetNotificationConfigurationResponse` | `Models/GetNotificationConfigurationResponse.cs` |
| `PostCreateNotificationConfigurationError` | `Errors/PostCreateNotificationConfigurationError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostCreatePermit
- **Server group**: `Default2`
- **Signature**: `PostCreatePermit(CreatePermitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreatePermitResult`
- **Error**: `SdkException<PostCreatePermitError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePermitRequest` | `Models/CreatePermitRequest.cs` |
| `CreatePermitResult` | `Models/CreatePermitResult.cs` |
| `PostCreatePermitError` | `Errors/PostCreatePermitError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCreateTestCardRanges
- **Server group**: `Default8`
- **Signature**: `PostCreateTestCardRanges(CreateTestCardRangesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateTestCardRangesResult`
- **Error**: `SdkException<PostCreateTestCardRangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTestCardRangesRequest` | `Models/CreateTestCardRangesRequest.cs` |
| `CreateTestCardRangesResult` | `Models/CreateTestCardRangesResult.cs` |
| `PostCreateTestCardRangesError` | `Errors/PostCreateTestCardRangesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDebitAccountHolder
- **Server group**: `Default16`
- **Signature**: `PostDebitAccountHolder(DebitAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DebitAccountHolderResponse`
- **Error**: `SdkException<PostDebitAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DebitAccountHolderRequest` | `Models/DebitAccountHolderRequest.cs` |
| `DebitAccountHolderResponse` | `Models/DebitAccountHolderResponse.cs` |
| `PostDebitAccountHolderError` | `Errors/PostDebitAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDefendDispute
- **Server group**: `Default22`
- **Signature**: `PostDefendDispute(DefendDisputeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DefendDisputeResponse`
- **Error**: `SdkException<PostDefendDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DefendDisputeRequest` | `Models/DefendDisputeRequest.cs` |
| `DefendDisputeResponse` | `Models/DefendDisputeResponse.cs` |
| `PostDefendDisputeError` | `Errors/PostDefendDisputeError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeleteDisputeDefenseDocument
- **Server group**: `Default22`
- **Signature**: `PostDeleteDisputeDefenseDocument(DeleteDefenseDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DeleteDefenseDocumentResponse`
- **Error**: `SdkException<PostDeleteDisputeDefenseDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDefenseDocumentRequest` | `Models/DeleteDefenseDocumentRequest.cs` |
| `DeleteDefenseDocumentResponse` | `Models/DeleteDefenseDocumentResponse.cs` |
| `PostDeleteDisputeDefenseDocumentError` | `Errors/PostDeleteDisputeDefenseDocumentError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeleteNotificationConfigurations
- **Server group**: `Default12`
- **Signature**: `PostDeleteNotificationConfigurations(DeleteNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteNotificationConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteNotificationConfigurationRequest` | `Models/DeleteNotificationConfigurationRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostDeleteNotificationConfigurationsError` | `Errors/PostDeleteNotificationConfigurationsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDisable
- **Server group**: `Default2`
- **Signature**: `PostDisable(DisableRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DisableResult`
- **Error**: `SdkException<PostDisableError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisableRequest` | `Models/DisableRequest.cs` |
| `DisableResult` | `Models/DisableResult.cs` |
| `PostDisableError` | `Errors/PostDisableError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostDisablePermit
- **Server group**: `Default2`
- **Signature**: `PostDisablePermit(DisablePermitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DisablePermitResult`
- **Error**: `SdkException<PostDisablePermitError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisablePermitRequest` | `Models/DisablePermitRequest.cs` |
| `DisablePermitResult` | `Models/DisablePermitResult.cs` |
| `PostDisablePermitError` | `Errors/PostDisablePermitError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostFindTerminal
- **Server group**: `Default28`
- **Signature**: `PostFindTerminal(FindTerminalRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `FindTerminalResponse`
- **Error**: `SdkException<PostFindTerminalError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `FindTerminalRequest` | `Models/FindTerminalRequest.cs` |
| `FindTerminalResponse` | `Models/FindTerminalResponse.cs` |
| `PostFindTerminalError` | `Errors/PostFindTerminalError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGet3DsAvailability
- **Server group**: `Default4`
- **Signature**: `PostGet3DsAvailability(ThreeDsAvailabilityRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ThreeDsAvailabilityResponse`
- **Error**: `SdkException<PostGet3DsAvailabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ThreeDsAvailabilityRequest` | `Models/ThreeDsAvailabilityRequest.cs` |
| `ThreeDsAvailabilityResponse` | `Models/ThreeDsAvailabilityResponse.cs` |
| `PostGet3DsAvailabilityError` | `Errors/PostGet3DsAvailabilityError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostGetCostEstimate
- **Server group**: `Default4`
- **Signature**: `PostGetCostEstimate(CostEstimateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CostEstimateResponse`
- **Error**: `SdkException<PostGetCostEstimateError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CostEstimateRequest` | `Models/CostEstimateRequest.cs` |
| `CostEstimateResponse` | `Models/CostEstimateResponse.cs` |
| `PostGetCostEstimateError` | `Errors/PostGetCostEstimateError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostGetNotificationConfiguration
- **Server group**: `Default12`
- **Signature**: `PostGetNotificationConfiguration(GetNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `SdkException<PostGetNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetNotificationConfigurationRequest` | `Models/GetNotificationConfigurationRequest.cs` |
| `GetNotificationConfigurationResponse` | `Models/GetNotificationConfigurationResponse.cs` |
| `PostGetNotificationConfigurationError` | `Errors/PostGetNotificationConfigurationError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetNotificationConfigurationList
- **Server group**: `Default12`
- **Signature**: `PostGetNotificationConfigurationList(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetNotificationConfigurationListResponse`
- **Error**: `SdkException<PostGetNotificationConfigurationListError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetNotificationConfigurationListResponse` | `Models/GetNotificationConfigurationListResponse.cs` |
| `PostGetNotificationConfigurationListError` | `Errors/PostGetNotificationConfigurationListError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetStoresUnderAccount
- **Server group**: `Default28`
- **Signature**: `PostGetStoresUnderAccount(GetStoresUnderAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetStoresUnderAccountResponse`
- **Error**: `SdkException<PostGetStoresUnderAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoresUnderAccountRequest` | `Models/GetStoresUnderAccountRequest.cs` |
| `GetStoresUnderAccountResponse` | `Models/GetStoresUnderAccountResponse.cs` |
| `PostGetStoresUnderAccountError` | `Errors/PostGetStoresUnderAccountError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetTerminalDetails
- **Server group**: `Default28`
- **Signature**: `PostGetTerminalDetails(GetTerminalDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetTerminalDetailsResponse`
- **Error**: `SdkException<PostGetTerminalDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTerminalDetailsRequest` | `Models/GetTerminalDetailsRequest.cs` |
| `GetTerminalDetailsResponse` | `Models/GetTerminalDetailsResponse.cs` |
| `PostGetTerminalDetailsError` | `Errors/PostGetTerminalDetailsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetTerminalsUnderAccount
- **Server group**: `Default28`
- **Signature**: `PostGetTerminalsUnderAccount(GetTerminalsUnderAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetTerminalsUnderAccountResponse`
- **Error**: `SdkException<PostGetTerminalsUnderAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTerminalsUnderAccountRequest` | `Models/GetTerminalsUnderAccountRequest.cs` |
| `GetTerminalsUnderAccountResponse` | `Models/GetTerminalsUnderAccountResponse.cs` |
| `PostGetTerminalsUnderAccountError` | `Errors/PostGetTerminalsUnderAccountError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostIssue
- **Server group**: `Default5`
- **Signature**: `PostIssue(StoredValueIssueRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueIssueResponse`
- **Error**: `SdkException<PostIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoredValueIssueRequest` | `Models/StoredValueIssueRequest.cs` |
| `StoredValueIssueResponse` | `Models/StoredValueIssueResponse.cs` |
| `PostIssueError` | `Errors/PostIssueError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostListRecurringDetails
- **Server group**: `Default2`
- **Signature**: `PostListRecurringDetails(RecurringDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `RecurringDetailsResult`
- **Error**: `SdkException<PostListRecurringDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RecurringDetailsRequest` | `Models/RecurringDetailsRequest.cs` |
| `RecurringDetailsResult` | `Models/RecurringDetailsResult.cs` |
| `PostListRecurringDetailsError` | `Errors/PostListRecurringDetailsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostLoad
- **Server group**: `Default5`
- **Signature**: `PostLoad(StoredValueLoadRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueLoadResponse`
- **Error**: `SdkException<PostLoadError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoredValueLoadRequest` | `Models/StoredValueLoadRequest.cs` |
| `StoredValueLoadResponse` | `Models/StoredValueLoadResponse.cs` |
| `PostLoadError` | `Errors/PostLoadError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostMergeBalance
- **Server group**: `Default5`
- **Signature**: `PostMergeBalance(StoredValueBalanceMergeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueBalanceMergeResponse`
- **Error**: `SdkException<PostMergeBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoredValueBalanceMergeRequest` | `Models/StoredValueBalanceMergeRequest.cs` |
| `StoredValueBalanceMergeResponse` | `Models/StoredValueBalanceMergeResponse.cs` |
| `PostMergeBalanceError` | `Errors/PostMergeBalanceError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostNotifyShopper
- **Server group**: `Default2`
- **Signature**: `PostNotifyShopper(NotifyShopperRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `NotifyShopperResult`
- **Error**: `SdkException<PostNotifyShopperError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `NotifyShopperRequest` | `Models/NotifyShopperRequest.cs` |
| `NotifyShopperResult` | `Models/NotifyShopperResult.cs` |
| `PostNotifyShopperError` | `Errors/PostNotifyShopperError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPayoutAccountHolder
- **Server group**: `Default16`
- **Signature**: `PostPayoutAccountHolder(PayoutAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PayoutAccountHolderResponse`
- **Error**: `SdkException<PostPayoutAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutAccountHolderRequest` | `Models/PayoutAccountHolderRequest.cs` |
| `PayoutAccountHolderResponse` | `Models/PayoutAccountHolderResponse.cs` |
| `PostPayoutAccountHolderError` | `Errors/PostPayoutAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostRefundFundsTransfer
- **Server group**: `Default16`
- **Signature**: `PostRefundFundsTransfer(RefundFundsTransferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `RefundFundsTransferResponse`
- **Error**: `SdkException<PostRefundFundsTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RefundFundsTransferRequest` | `Models/RefundFundsTransferRequest.cs` |
| `RefundFundsTransferResponse` | `Models/RefundFundsTransferResponse.cs` |
| `PostRefundFundsTransferError` | `Errors/PostRefundFundsTransferError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostRefundNotPaidOutTransfers
- **Server group**: `Default16`
- **Signature**: `PostRefundNotPaidOutTransfers(RefundNotPaidOutTransfersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostRefundNotPaidOutTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RefundNotPaidOutTransfersRequest` | `Models/RefundNotPaidOutTransfersRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostRefundNotPaidOutTransfersError` | `Errors/PostRefundNotPaidOutTransfersError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostRequestSubjectErasure
- **Server group**: `Default6`
- **Signature**: `PostRequestSubjectErasure(SubjectErasureByPspReferenceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SubjectErasureResponse`
- **Error**: `SdkException<PostRequestSubjectErasureError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SubjectErasureByPspReferenceRequest` | `Models/SubjectErasureByPspReferenceRequest.cs` |
| `SubjectErasureResponse` | `Models/SubjectErasureResponse.cs` |
| `PostRequestSubjectErasureError` | `Errors/PostRequestSubjectErasureError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostRetrieveApplicableDefenseReasons
- **Server group**: `Default22`
- **Signature**: `PostRetrieveApplicableDefenseReasons(DefenseReasonsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DefenseReasonsResponse`
- **Error**: `SdkException<PostRetrieveApplicableDefenseReasonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DefenseReasonsRequest` | `Models/DefenseReasonsRequest.cs` |
| `DefenseReasonsResponse` | `Models/DefenseReasonsResponse.cs` |
| `PostRetrieveApplicableDefenseReasonsError` | `Errors/PostRetrieveApplicableDefenseReasonsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostScheduleAccountUpdater
- **Server group**: `Default2`
- **Signature**: `PostScheduleAccountUpdater(ScheduleAccountUpdaterRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ScheduleAccountUpdaterResult`
- **Error**: `SdkException<PostScheduleAccountUpdaterError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ScheduleAccountUpdaterRequest` | `Models/ScheduleAccountUpdaterRequest.cs` |
| `ScheduleAccountUpdaterResult` | `Models/ScheduleAccountUpdaterResult.cs` |
| `PostScheduleAccountUpdaterError` | `Errors/PostScheduleAccountUpdaterError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostSessions3
- **Server group**: `Default27`
- **Signature**: `PostSessions3(CreateSessionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CertificateLoadingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateSessionRequest` | `Models/CreateSessionRequest.cs` |
| `CertificateLoadingResponse` | `Models/CertificateLoadingResponse.cs` |

### PostSetupBeneficiary
- **Server group**: `Default16`
- **Signature**: `PostSetupBeneficiary(SetupBeneficiaryRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostSetupBeneficiaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SetupBeneficiaryRequest` | `Models/SetupBeneficiaryRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostSetupBeneficiaryError` | `Errors/PostSetupBeneficiaryError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostSupplyDefenseDocument
- **Server group**: `Default22`
- **Signature**: `PostSupplyDefenseDocument(SupplyDefenseDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SupplyDefenseDocumentResponse`
- **Error**: `SdkException<PostSupplyDefenseDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SupplyDefenseDocumentRequest` | `Models/SupplyDefenseDocumentRequest.cs` |
| `SupplyDefenseDocumentResponse` | `Models/SupplyDefenseDocumentResponse.cs` |
| `PostSupplyDefenseDocumentError` | `Errors/PostSupplyDefenseDocumentError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostTestNotificationConfiguration
- **Server group**: `Default12`
- **Signature**: `PostTestNotificationConfiguration(TestNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TestNotificationConfigurationResponse`
- **Error**: `SdkException<PostTestNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TestNotificationConfigurationRequest` | `Models/TestNotificationConfigurationRequest.cs` |
| `TestNotificationConfigurationResponse` | `Models/TestNotificationConfigurationResponse.cs` |
| `PostTestNotificationConfigurationError` | `Errors/PostTestNotificationConfigurationError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostTransferFunds
- **Server group**: `Default16`
- **Signature**: `PostTransferFunds(TransferFundsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransferFundsResponse`
- **Error**: `SdkException<PostTransferFundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferFundsRequest` | `Models/TransferFundsRequest.cs` |
| `TransferFundsResponse` | `Models/TransferFundsResponse.cs` |
| `PostTransferFundsError` | `Errors/PostTransferFundsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostUpdateNotificationConfiguration
- **Server group**: `Default12`
- **Signature**: `PostUpdateNotificationConfiguration(UpdateNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `SdkException<PostUpdateNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateNotificationConfigurationRequest` | `Models/UpdateNotificationConfigurationRequest.cs` |
| `GetNotificationConfigurationResponse` | `Models/GetNotificationConfigurationResponse.cs` |
| `PostUpdateNotificationConfigurationError` | `Errors/PostUpdateNotificationConfigurationError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostVoidTransaction
- **Server group**: `Default5`
- **Signature**: `PostVoidTransaction(StoredValueVoidRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredValueVoidResponse`
- **Error**: `SdkException<PostVoidTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoredValueVoidRequest` | `Models/StoredValueVoidRequest.cs` |
| `StoredValueVoidResponse` | `Models/StoredValueVoidResponse.cs` |
| `PostVoidTransactionError` | `Errors/PostVoidTransactionError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

