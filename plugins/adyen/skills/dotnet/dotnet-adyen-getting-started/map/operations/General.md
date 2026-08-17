# General — operations

Accessor: `client.General` · Source: `Api/General.cs` · 41 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostAcceptDispute
- **HTTP**: `POST /acceptDispute` (Default22 (ca-test))
- **Notes**: Accepts a specific dispute.
- **Signature**: `PostAcceptDispute(AcceptDisputeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AcceptDisputeResponse`
- **Error**: `SdkException<PostAcceptDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAccountHolderBalance
- **HTTP**: `POST /accountHolderBalance` (Default16 (cal-test))
- **Notes**: Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.
- **Signature**: `PostAccountHolderBalance(CloseAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountHolderBalanceResponse`
- **Error**: `SdkException<PostAccountHolderBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAccountHolderTransactionList
- **HTTP**: `POST /accountHolderTransactionList` (Default16 (cal-test))
- **Notes**: Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.
- **Signature**: `PostAccountHolderTransactionList(AccountHolderTransactionListRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountHolderTransactionListResponse`
- **Error**: `SdkException<PostAccountHolderTransactionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAssignTerminals
- **HTTP**: `POST /assignTerminals` (Default28 (postfmapi-test))
- **Notes**: Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory. &gt;From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our Management API .
- **Signature**: `PostAssignTerminals(AssignTerminalsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssignTerminalsResponse`
- **Error**: `SdkException<PostAssignTerminalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostChangeStatus
- **HTTP**: `POST /changeStatus` (Default5 (pal-test))
- **Notes**: Changes the status of the provided payment method to the specified status.
- **Signature**: `PostChangeStatus(StoredValueStatusChangeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredValueStatusChangeResponse`
- **Error**: `SdkException<PostChangeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCheckBalance
- **HTTP**: `POST /checkBalance` (Default5 (pal-test))
- **Notes**: Checks the balance of the provided payment method.
- **Signature**: `PostCheckBalance(StoredValueBalanceCheckRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredValueBalanceCheckResponse`
- **Error**: `SdkException<PostCheckBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCreateNotificationConfiguration
- **HTTP**: `POST /createNotificationConfiguration` (Default12 (cal-test))
- **Notes**: Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
- **Signature**: `PostCreateNotificationConfiguration(CreateNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `SdkException<PostCreateNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCreatePermit
- **HTTP**: `POST /createPermit` (Default2 (pal-test))
- **Notes**: Create permits for a recurring contract, including support for defining restrictions.
- **Signature**: `PostCreatePermit(CreatePermitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreatePermitResult`
- **Error**: `SdkException<PostCreatePermitError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCreateTestCardRanges
- **HTTP**: `POST /createTestCardRanges` (Default8 (pal-test))
- **Notes**: Creates one or more test card ranges.
- **Signature**: `PostCreateTestCardRanges(CreateTestCardRangesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateTestCardRangesResult`
- **Error**: `SdkException<PostCreateTestCardRangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDebitAccountHolder
- **HTTP**: `POST /debitAccountHolder` (Default16 (cal-test))
- **Notes**: Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a `DIRECT_DEBIT_INITIATED` notification webhook. To learn more about direct debits, see Top up accounts .
- **Signature**: `PostDebitAccountHolder(DebitAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DebitAccountHolderResponse`
- **Error**: `SdkException<PostDebitAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDefendDispute
- **HTTP**: `POST /defendDispute` (Default22 (ca-test))
- **Notes**: Defends a specific dispute.
- **Signature**: `PostDefendDispute(DefendDisputeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DefendDisputeResponse`
- **Error**: `SdkException<PostDefendDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeleteDisputeDefenseDocument
- **HTTP**: `POST /deleteDisputeDefenseDocument` (Default22 (ca-test))
- **Notes**: Deletes a specific dispute defense document that was supplied earlier.
- **Signature**: `PostDeleteDisputeDefenseDocument(DeleteDefenseDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DeleteDefenseDocumentResponse`
- **Error**: `SdkException<PostDeleteDisputeDefenseDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeleteNotificationConfigurations
- **HTTP**: `POST /deleteNotificationConfigurations` (Default12 (cal-test))
- **Notes**: Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.
- **Signature**: `PostDeleteNotificationConfigurations(DeleteNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteNotificationConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDisable
- **HTTP**: `POST /disable` (Default2 (pal-test))
- **Notes**: Disables stored payment details to stop charging a shopper with this particular recurring detail ID. For more information, refer to Disable stored details .
- **Signature**: `PostDisable(DisableRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DisableResult`
- **Error**: `SdkException<PostDisableError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDisablePermit
- **HTTP**: `POST /disablePermit` (Default2 (pal-test))
- **Notes**: Disable a permit that was previously linked to a recurringDetailReference.
- **Signature**: `PostDisablePermit(DisablePermitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DisablePermitResult`
- **Error**: `SdkException<PostDisablePermitError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostFindTerminal
- **HTTP**: `POST /findTerminal` (Default28 (postfmapi-test))
- **Notes**: Returns the company account, merchant account, or store that a payment terminal is assigned to. &gt;From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our Management API .
- **Signature**: `PostFindTerminal(FindTerminalRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FindTerminalResponse`
- **Error**: `SdkException<PostFindTerminalError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGet3DsAvailability
- **HTTP**: `POST /get3dsAvailability` (Default4 (pal-test))
- **Notes**: Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys. For more information, refer to 3D Secure 2 .
- **Signature**: `PostGet3DsAvailability(ThreeDsAvailabilityRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ThreeDsAvailabilityResponse`
- **Error**: `SdkException<PostGet3DsAvailabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetCostEstimate
- **HTTP**: `POST /getCostEstimate` (Default4 (pal-test))
- **Notes**: &gt;This API is available only for merchants operating in Australia, the EU, and the UK. Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary. To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations). &gt; Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.
- **Signature**: `PostGetCostEstimate(CostEstimateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CostEstimateResponse`
- **Error**: `SdkException<PostGetCostEstimateError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetNotificationConfiguration
- **HTTP**: `POST /getNotificationConfiguration` (Default12 (cal-test))
- **Notes**: Returns the details of the configuration of a notification subscription.
- **Signature**: `PostGetNotificationConfiguration(GetNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `SdkException<PostGetNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetNotificationConfigurationList
- **HTTP**: `POST /getNotificationConfigurationList` (Default12 (cal-test))
- **Notes**: Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.
- **Signature**: `PostGetNotificationConfigurationList(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetNotificationConfigurationListResponse`
- **Error**: `SdkException<PostGetNotificationConfigurationListError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetStoresUnderAccount
- **HTTP**: `POST /getStoresUnderAccount` (Default28 (postfmapi-test))
- **Notes**: Returns a list of stores associated with a company account or a merchant account, including the status of each store. &gt;From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our Management API .
- **Signature**: `PostGetStoresUnderAccount(GetStoresUnderAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetStoresUnderAccountResponse`
- **Error**: `SdkException<PostGetStoresUnderAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetTerminalDetails
- **HTTP**: `POST /getTerminalDetails` (Default28 (postfmapi-test))
- **Notes**: Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report. &gt;From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our Management API .
- **Signature**: `PostGetTerminalDetails(GetTerminalDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetTerminalDetailsResponse`
- **Error**: `SdkException<PostGetTerminalDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetTerminalsUnderAccount
- **HTTP**: `POST /getTerminalsUnderAccount` (Default28 (postfmapi-test))
- **Notes**: Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded). &gt;From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our Management API .
- **Signature**: `PostGetTerminalsUnderAccount(GetTerminalsUnderAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetTerminalsUnderAccountResponse`
- **Error**: `SdkException<PostGetTerminalsUnderAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostIssue
- **HTTP**: `POST /issue` (Default5 (pal-test))
- **Notes**: Issues a new card of the given payment method.
- **Signature**: `PostIssue(StoredValueIssueRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredValueIssueResponse`
- **Error**: `SdkException<PostIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostListRecurringDetails
- **HTTP**: `POST /listRecurringDetails` (Default2 (pal-test))
- **Notes**: Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper. For more information, refer to Retrieve stored details .
- **Signature**: `PostListRecurringDetails(RecurringDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RecurringDetailsResult`
- **Error**: `SdkException<PostListRecurringDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLoad
- **HTTP**: `POST /load` (Default5 (pal-test))
- **Notes**: Loads the payment method with the specified funds.
- **Signature**: `PostLoad(StoredValueLoadRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredValueLoadResponse`
- **Error**: `SdkException<PostLoadError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMergeBalance
- **HTTP**: `POST /mergeBalance` (Default5 (pal-test))
- **Notes**: Increases the balance of the paymentmethod by the full amount left on the source paymentmethod
- **Signature**: `PostMergeBalance(StoredValueBalanceMergeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredValueBalanceMergeResponse`
- **Error**: `SdkException<PostMergeBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostNotifyShopper
- **HTTP**: `POST /notifyShopper` (Default2 (pal-test))
- **Notes**: Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to Recurring card payments in India .
- **Signature**: `PostNotifyShopper(NotifyShopperRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NotifyShopperResult`
- **Error**: `SdkException<PostNotifyShopperError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPayoutAccountHolder
- **HTTP**: `POST /payoutAccountHolder` (Default16 (cal-test))
- **Notes**: Pays out a specified amount from an account to the bank account of account holder.
- **Signature**: `PostPayoutAccountHolder(PayoutAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayoutAccountHolderResponse`
- **Error**: `SdkException<PostPayoutAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRefundFundsTransfer
- **HTTP**: `POST /refundFundsTransfer` (Default16 (cal-test))
- **Notes**: Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders.
- **Signature**: `PostRefundFundsTransfer(RefundFundsTransferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RefundFundsTransferResponse`
- **Error**: `SdkException<PostRefundFundsTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRefundNotPaidOutTransfers
- **HTTP**: `POST /refundNotPaidOutTransfers` (Default16 (cal-test))
- **Notes**: Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.
- **Signature**: `PostRefundNotPaidOutTransfers(RefundNotPaidOutTransfersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostRefundNotPaidOutTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRequestSubjectErasure
- **HTTP**: `POST /requestSubjectErasure` (Default6 (ca-test))
- **Notes**: Sends the PSP reference containing the shopper data that should be deleted.
- **Signature**: `PostRequestSubjectErasure(SubjectErasureByPspReferenceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubjectErasureResponse`
- **Error**: `SdkException<PostRequestSubjectErasureError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRetrieveApplicableDefenseReasons
- **HTTP**: `POST /retrieveApplicableDefenseReasons` (Default22 (ca-test))
- **Notes**: Returns a list of all applicable defense reasons to defend a specific dispute.
- **Signature**: `PostRetrieveApplicableDefenseReasons(DefenseReasonsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DefenseReasonsResponse`
- **Error**: `SdkException<PostRetrieveApplicableDefenseReasonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostScheduleAccountUpdater
- **HTTP**: `POST /scheduleAccountUpdater` (Default2 (pal-test))
- **Notes**: When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference: * If the card information is provided, all the sub-fields for `card` are mandatory. * If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.
- **Signature**: `PostScheduleAccountUpdater(ScheduleAccountUpdaterRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScheduleAccountUpdaterResult`
- **Error**: `SdkException<PostScheduleAccountUpdaterError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostSessions3
- **HTTP**: `POST /sessions` (Default27 (checkout-test))
- **Notes**: Establishes a secure communications session between the POS Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform. &gt;This request applies to mobile in-person transactions. You cannot use this request to create online payments sessions.
- **Signature**: `PostSessions3(CreateSessionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CertificateLoadingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostSetupBeneficiary
- **HTTP**: `POST /setupBeneficiary` (Default16 (cal-test))
- **Notes**: Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.
- **Signature**: `PostSetupBeneficiary(SetupBeneficiaryRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostSetupBeneficiaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostSupplyDefenseDocument
- **HTTP**: `POST /supplyDefenseDocument` (Default22 (ca-test))
- **Notes**: Supplies a specific dispute defense document.
- **Signature**: `PostSupplyDefenseDocument(SupplyDefenseDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SupplyDefenseDocumentResponse`
- **Error**: `SdkException<PostSupplyDefenseDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTestNotificationConfiguration
- **HTTP**: `POST /testNotificationConfiguration` (Default12 (cal-test))
- **Notes**: Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
- **Signature**: `PostTestNotificationConfiguration(TestNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TestNotificationConfigurationResponse`
- **Error**: `SdkException<PostTestNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransferFunds
- **HTTP**: `POST /transferFunds` (Default16 (cal-test))
- **Notes**: Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.
- **Signature**: `PostTransferFunds(TransferFundsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferFundsResponse`
- **Error**: `SdkException<PostTransferFundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUpdateNotificationConfiguration
- **HTTP**: `POST /updateNotificationConfiguration` (Default12 (cal-test))
- **Notes**: Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.
- **Signature**: `PostUpdateNotificationConfiguration(UpdateNotificationConfigurationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `SdkException<PostUpdateNotificationConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostVoidTransaction
- **HTTP**: `POST /voidTransaction` (Default5 (pal-test))
- **Notes**: Voids the referenced stored value transaction.
- **Signature**: `PostVoidTransaction(StoredValueVoidRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredValueVoidResponse`
- **Error**: `SdkException<PostVoidTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
