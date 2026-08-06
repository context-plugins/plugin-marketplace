# Transaction — operations

Accessor: `client.Transaction` · Source: `Api/Transaction.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CardUsageSummary
- **HTTP**: `POST /transaction-data/v1/cardusagesummary` (OauthServer (api-test))
- **Notes**: This operation is to provide the expenditure analysis for a card for the past 7 months. The response contains a daily summary of the transactions (billed &amp; unbilled) from 1st of the last 7 months for the requested card grouped by card, site-group and product.
- **Signature**: `CardUsageSummary(string requestId, CardUsageSummaryReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CardUsageSummaryRes`
- **Error**: `SdkException<CardUsageSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FeeSummaryResponse
- **HTTP**: `POST /transaction-data/v1/feessummary` (OauthServer (api-test))
- **Notes**: This API returns the summary data of the fee/charges levied from a customer's account in a billing period or date range. The API returns both billed and unbilled fee items. The endpoint supports the exact same search criteria as the endpoint *transaction/feessummary*. Supported operations * Get fees by invoice status * Get fees by date period * Get fees by account * Get fees by card Id or PAN * Get fees by fee type charges * Get fees including cancelled items * Get fees by line item description * Get fees by product
- **Signature**: `FeeSummaryResponse(string requestId, TransactionFeesSummaryReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FeeSummaryResponse`
- **Error**: `SdkException<FeeSummaryResponseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Fees
- **HTTP**: `POST /transaction-data/v1/fees` (OauthServer (api-test))
- **Notes**: This API returns the fee/charges levied from a customer's account in a billing period or date range. The API returns both billed and unbilled fee items. To get the summary of charges, the endpoint *transaction/feessummary* should be called with the same input criteria. Supported operations * Get fees by invoice status * Get fees by date period * Get fees by account * Get fees by card Id or PAN * Get fees by fee type charges * Get fees including cancelled items * Get fees by line item description * Get fees by product
- **Signature**: `Fees(string requestId, TransactionFeesReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransactionFeesRes`
- **Error**: `SdkException<FeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FuelConsumption
- **HTTP**: `POST /transaction-data/v1/fuelconsumption` (OauthServer (api-test))
- **Notes**: This API returns the customer an overview of how many transactions, how much fuel volume used over a given period and the total volume used by a card This operation response will contains card &amp; transaction details for given period aggregated by payer, account, cardGroup, PAN, DriverName and VRN
- **Signature**: `FuelConsumption(string requestId, FuelConsumptionReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FuelConsumptionResponse`
- **Error**: `SdkException<FuelConsumptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MultipricedTransactions
- **HTTP**: `POST /transaction-data/v1/multipayerspricedtransactions` (OauthServer (api-test))
- **Notes**: This API allows querying transaction data (i.e. Priced, Billed and Unbilled sales items) for multiple payers. It provides a flexible search criteria and supports paging. Transactions that are posted but not yet priced, billed or that are in error will not be returned by this API. The API also supports returning Fee Items. At least one payer should be provided. Multiple payers must belong to the same payer group. Supported operations * Get sales items and fee transactions for multiple payers * Search by invoice status * Search by fixed date period * Search by date range * Get sales items only for multiple payers * Search by transaction location * Search by transaction posting date * Search by invoice number or date * Search by fuel only transactions This API fetches transactions for a period based on the below parameters and priority order: 1. InvoiceNumber 2. InvoiceDate 3. FromDate, ToDate 4. PostingFromDate, PostingToDate (Can be used only when IncludeFees = false) 5. InvoiceDateFrom, InvoiceDateTo 6. Period This API considers only one of the above set of parameters at a time. For example, if InvoiceNumber and Period are provided in the input then Period is ignored and transactions associated to the given invoice number are returned. If none of the above parameters are provided then last 7 days transactions will be fetched.
- **Signature**: `MultipricedTransactions(string requestId, MultiPricedTransactionReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MultiPricedTransactionRes`
- **Error**: `SdkException<MultipricedTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PricedTransactions
- **HTTP**: `POST /transaction-data/v1/pricedtransaction` (OauthServer (api-test))
- **Notes**: This API allows querying transaction data (i.e. Priced, Billed and Unbilled sales items). It provides a flexible search criteria and supports paging. Transactions that are posted but not yet priced, billed or that are in error will not be returned by this API. The API also supports returning Fee Items. Supported operations * Get sales items and fee transactions * Search by invoice status * Search by fixed date period * Search by date range * Search by account * Search by card * Get sales items only * Search by transaction Id or location * Search by transaction posting date * Search by invoice number or date * Search by driver name or vehicle registration number * Search by card group * Search by fuel only transactions * Search by product This API fetches transactions for a period based on the below parameters and priority order: 1. InvoiceNumber 2. InvoiceDate 3. FromDate, ToDate 4. PostingFromDate, PostingToDate (Can be used only when IncludeFees = false) 5. InvoiceDateFrom, InvoiceDateTo 6. Period This API considers only one of the above set of parameters at a time. For example, if InvoiceNumber and Period are provided in the input then Period is ignored and transactions associated to the given invoice number are returned. If none of the above parameters are provided then last 7 days transactions will be fetched. This operation can fetch transactions that are old up to 24 (configurable) months. However, the date range between any of the ‘From’ and ‘To’ dates in the above combination cannot be more than 210 (configurable) days.
- **Signature**: `PricedTransactions(string requestId, PriceTransactionReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PricedTransactionRes`
- **Error**: `SdkException<PricedTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PricedTransactionsSummary
- **HTTP**: `POST /transaction-data/v1/pricedtransactionssummary` (OauthServer (api-test))
- **Notes**: This API returns the transaction summary data (i.e. Priced, Billed and Unbilled sales items). It provides a flexible search criteria. The API also supports returning Fee Items. Transactions posted for fee items that are in error are not included in the summary. The endpoint supports the exact same search criteria as the endpoint *transaction/prciedtransactions*. Supported operations * Get sales items and fee transactions * Search by invoice status * Search by fixed date period * Search by date range * Search by account * Search by card * Get sales items only * Search by transaction Id or location * Search by transaction posting date * Search by invoice number or date * Search by driver name or vehicle registration number * Search by card group * Search by fuel only transactions * Search by product This API fetches transactions for a period based on the below parameters and priority order: 1. InvoiceNumber 2. InvoiceDate 3. FromDate, ToDate 4. PostingFromDate, PostingToDate (Can be used only when IncludeFees = false) 5. InvoiceDateFrom, InvoiceDateTo 6. Period This API considers only one of the above set of parameters at a time. For example, if InvoiceNumber and Period are provided in the input then Period is ignored and transactions associated to the given invoice number are returned. If none of the above parameters are provided then last 7 days transactions will be fetched.
- **Signature**: `PricedTransactionsSummary(string requestId, PriceTransSummaryReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PricedTransSummaryResp`
- **Error**: `SdkException<PricedTransactionsSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PricedTransactionsV2
- **HTTP**: `POST /transaction-data/v1/priced` (OauthServer (api-test))
- **Notes**: This API allows querying transaction data (i.e. Priced, Billed and Unbilled sales items). It provides a flexible search criteria and supports paging. The version 2 is an enhancement to the version 1 where EV transactions and their details are added in the response. Transactions that are posted but not yet priced, billed or that are in error will not be returned by this API. The API also supports returning Fee Items. Supported operations * Get sales items and fee transactions * Search by invoice status * Search by fixed date period * Search by date range * Search by account * Search by card * Get sales items only * Search by transaction Id or location * Search by transaction posting date * Search by invoice number or date * Search by driver name or vehicle registration number * Search by card group * Search by fuel only transactions * Search by product * EV transaction details - Below are EV specific parameters * EVOperator * EVSerialId * EVChargePointSerial * EVChargePointConnectorType * EVChargePointConnectorTypeDescription * EVChargeDuration * EVChargeStartDate * EVChargeStartTime * EVChargeEndDate * EVChargeEndTime
- **Signature**: `PricedTransactionsV2(string requestId, PricedTransactionRequestV2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PricedTransactionResponseV2`
- **Error**: `SdkException<PricedTransactionsV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RecentTransactionsNew
- **HTTP**: `POST /transaction-data/v1/recent` (OauthServer (api-test))
- **Notes**: This endpoint allows querying last 48 hours of transaction data of Shell Card (i.e. Priced, Billed, Unbilled etc. sales items). It provides a flexible search criteria and supports pagination. E.g., if the request is made at 08:30 AM on 18 Aug 2022 then transactions until 16 Aug 2022 08:30 AM (including) can be retrieved. Supported operations Search by Date and Time range (within the last 48 hours only) Search by Payer and/or Account number Search by Card Search by Purchased Country Search by Transaction posting date Search by Driver Name or Vehicle registration number Search by Fuel only transactions Search by Product and/or Product group
- **Signature**: `RecentTransactionsNew(string requestId, RecentTransactionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RecentTransactionsResponse`
- **Error**: `SdkException<RecentTransactionsNewError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionExceptions
- **HTTP**: `POST /transaction-data/v1/exceptions` (OauthServer (api-test))
- **Notes**: This API provides the details of the Cards or Transaction related exceptions based on the given conditions for the Requested period. This API will return the Transactions related exceptions when the OutputType input parameter is passed as ‘Transaction’ else will return the Cards related exceptions.
- **Signature**: `TransactionExceptions(string requestId, TransactionExceptionsReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransactionExceptionsRes`
- **Error**: `SdkException<TransactionExceptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOdometer
- **HTTP**: `POST /transaction-data/v1/updateodometer` (OauthServer (api-test))
- **Notes**: This API allows the users to update the odometer readings on the sales items (transaction data) This is an asynchronous operation. If opted, the user will be notified on completion of processing.
- **Signature**: `UpdateOdometer(string requestId, UpdateOdometerRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateOdometerResp`
- **Error**: `SdkException<UpdateOdometerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VolumeBasedBonus
- **HTTP**: `POST /transaction-data/v1/volumebasedbonuss` (OauthServer (api-test))
- **Notes**: This API provides the details of the bonus and/or association bonus rules setup for the given payer and that are active on the current date. This API also returns the details of the monthly breakup of current period consumption as well as the details of the previously calculated bonus and consumption of the applicable payers.
- **Signature**: `VolumeBasedBonus(string requestId, VolumeBasedBonusReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `VolumeBasedBonusRes`
- **Error**: `SdkException<VolumeBasedBonusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VolumeBasedPricing
- **HTTP**: `POST /transaction-data/v1/volumebasedpricing` (OauthServer (api-test))
- **Notes**: This API will return the details of the in arrear fee rule applied to the payer along with details of locations, products, tiers as applied. It will also show historical and current volume consumption and related tier applied for the following month.
- **Signature**: `VolumeBasedPricing(string requestId, VolumeBasedPricingReq? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `VolumeBasedPricingRes`
- **Error**: `SdkException<VolumeBasedPricingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
