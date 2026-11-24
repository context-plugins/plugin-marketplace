# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [UpstoxClient](upstox/client.py)

## Charge

> Source: [Charge](upstox/apis/charge.py)

<details>
<summary><code>def get_brokerage(instrument_token: str, quantity: int, product: str, transaction_type: str, price: float, *, request_options: RequestOptionsOrDict | None = None) -> GetBrokerageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute Brokerage Charges

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.charge.get_brokerage("NSE_EQ|INE848E01016", 10, "I", "BUY", 123.1)
    # TODO: Handle 'response' of type GetBrokerageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBrokerageErrorBody
```

**Async**

```python
try:
    response = await async_client.charge.get_brokerage("NSE_EQ|INE848E01016", 10, "I", "BUY", 123.1)
    # TODO: Handle 'response' of type GetBrokerageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBrokerageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_token</code> | <code>str</code> | Key of the instrument |
| <code>quantity</code> | <code>int</code> | Quantity with which the order is to be placed |
| <code>product</code> | <code>str</code> | Product with which the order is to be placed |
| <code>transaction_type</code> | <code>str</code> | Indicates whether its a BUY or SELL order |
| <code>price</code> | <code>float</code> | Price with which the order is to be placed |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBrokerageResponse](upstox/models/get_brokerage_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetBrokerageErrorBody](upstox/errors/get_brokerage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_margin(body: MarginRequest | MarginRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PostMarginResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute Margin

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.charge.post_margin(
        MarginRequest(
            instruments=[
                Instrument(
                    instrument_key="some example string",
                    quantity=1,
                    product="some example string",
                    transaction_type="some example string",
                ),
            ],
        ),
    )
    # TODO: Handle 'response' of type PostMarginResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostMarginErrorBody
```

**Async**

```python
try:
    response = await async_client.charge.post_margin(
        MarginRequest(
            instruments=[
                Instrument(
                    instrument_key="some example string",
                    quantity=1,
                    product="some example string",
                    transaction_type="some example string",
                ),
            ],
        ),
    )
    # TODO: Handle 'response' of type PostMarginResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostMarginErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MarginRequest](upstox/models/margin_request.py) \| [MarginRequestDict](upstox/models/margin_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostMarginResponse](upstox/models/post_margin_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[PostMarginErrorBody](upstox/errors/post_margin_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExpiredInstrument

> Source: [ExpiredInstrument](upstox/apis/expired_instrument.py)

<details>
<summary><code>def get_expired_future_contracts(instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetExpiredFuturesContractResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve expired future contracts for a given instrument key and expiry date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.expired_instrument.get_expired_future_contracts("NSE_EQ|INE848E01016", "2023-10-05")
    # TODO: Handle 'response' of type GetExpiredFuturesContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiredFutureContractsErrorBody
```

**Async**

```python
try:
    response = await async_client.expired_instrument.get_expired_future_contracts("NSE_EQ|INE848E01016", "2023-10-05")
    # TODO: Handle 'response' of type GetExpiredFuturesContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiredFutureContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Instrument Key of asset |
| <code>expiry_date</code> | <code>str</code> | Expiry date of the instrument |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExpiredFuturesContractResponse](upstox/models/get_expired_futures_contract_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetExpiredFutureContractsErrorBody](upstox/errors/get_expired_future_contracts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_expired_historical_candle_data(expired_instrument_key: str, interval: str, to_date: str, from_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHistoricalCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.expired_instrument.get_expired_historical_candle_data(
        "NSE_EQ|INE848E01016|24-04-2025", "day", "2025-01-01", "2024-01-01"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiredHistoricalCandleDataErrorBody
```

**Async**

```python
try:
    response = await async_client.expired_instrument.get_expired_historical_candle_data(
        "NSE_EQ|INE848E01016|24-04-2025", "day", "2025-01-01", "2024-01-01"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiredHistoricalCandleDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>expired_instrument_key</code> | <code>str</code> | Expired Instrument Key of asset |
| <code>interval</code> | <code>str</code> | Interval to get expired ohlc data |
| <code>to_date</code> | <code>str</code> | to date |
| <code>from_date</code> | <code>str</code> | from date |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](upstox/models/get_historical_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetExpiredHistoricalCandleDataErrorBody](upstox/errors/get_expired_historical_candle_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_expired_option_contracts(instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetOptionContractResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the expired option contracts

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.expired_instrument.get_expired_option_contracts("NSE_INDEX|Nifty 50", "2024-02-01")
    # TODO: Handle 'response' of type GetOptionContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiredOptionContractsErrorBody
```

**Async**

```python
try:
    response = await async_client.expired_instrument.get_expired_option_contracts("NSE_INDEX|Nifty 50", "2024-02-01")
    # TODO: Handle 'response' of type GetOptionContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiredOptionContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Instrument key for an underlying symbol |
| <code>expiry_date</code> | <code>str</code> | Expiry date in format: YYYY-mm-dd |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOptionContractResponse](upstox/models/get_option_contract_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetExpiredOptionContractsErrorBody](upstox/errors/get_expired_option_contracts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_expiries_response(instrument_key: str, *, request_options: RequestOptionsOrDict | None = None) -> GetExpiriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve expiry dates for a given instrument key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.expired_instrument.get_expiries_response("NSE_EQ|INE848E01016")
    # TODO: Handle 'response' of type GetExpiriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiriesResponseErrorBody
```

**Async**

```python
try:
    response = await async_client.expired_instrument.get_expiries_response("NSE_EQ|INE848E01016")
    # TODO: Handle 'response' of type GetExpiriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExpiriesResponseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Instrument Key of asset |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExpiriesResponse](upstox/models/get_expiries_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetExpiriesResponseErrorBody](upstox/errors/get_expiries_response_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Fundamentals

> Source: [Fundamentals](upstox/apis/fundamentals.py)

<details>
<summary><code>def get_balance_sheet(isin: str, *, type_: str | None = "consolidated", fs: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> BalanceSheetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches balance sheet data for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_balance_sheet("INE002A01018", type_="consolidated", fs=False)
    # TODO: Handle 'response' of type BalanceSheetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBalanceSheetErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_balance_sheet("INE002A01018", type_="consolidated", fs=False)
    # TODO: Handle 'response' of type BalanceSheetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBalanceSheetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>type_</code> | <code>str \| None</code> | Report type. Allowed values: consolidated or standalone<br>**Default**: <code>"consolidated"</code> |
| <code>fs</code> | <code>bool \| None</code> | Whether to include the full financial statement<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceSheetResponse](upstox/models/balance_sheet_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetBalanceSheetErrorBody](upstox/errors/get_balance_sheet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_cash_flow(isin: str, *, type_: str | None = "consolidated", fs: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> CashFlowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches cash flow data for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_cash_flow("INE002A01018", type_="consolidated", fs=False)
    # TODO: Handle 'response' of type CashFlowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCashFlowErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_cash_flow("INE002A01018", type_="consolidated", fs=False)
    # TODO: Handle 'response' of type CashFlowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCashFlowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>type_</code> | <code>str \| None</code> | Report type. Allowed values: consolidated, standalone<br>**Default**: <code>"consolidated"</code> |
| <code>fs</code> | <code>bool \| None</code> | Whether to include the full financial statement<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CashFlowResponse](upstox/models/cash_flow_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetCashFlowErrorBody](upstox/errors/get_cash_flow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_profile(isin: str, *, request_options: RequestOptionsOrDict | None = None) -> CompanyProfileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches company profile information for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_company_profile("INE002A01018")
    # TODO: Handle 'response' of type CompanyProfileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyProfileErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_company_profile("INE002A01018")
    # TODO: Handle 'response' of type CompanyProfileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyProfileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyProfileResponse](upstox/models/company_profile_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetCompanyProfileErrorBody](upstox/errors/get_company_profile_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_competitors(instrument_key: str, *, request_options: RequestOptionsOrDict | None = None) -> CompetitorsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the list of competitors for the given instrument_key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_competitors("NSE_EQ|INE002A01018")
    # TODO: Handle 'response' of type CompetitorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompetitorsErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_competitors("NSE_EQ|INE002A01018")
    # TODO: Handle 'response' of type CompetitorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompetitorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Instrument key of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompetitorsResponse](upstox/models/competitors_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetCompetitorsErrorBody](upstox/errors/get_competitors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_corporate_actions(isin: str, *, request_options: RequestOptionsOrDict | None = None) -> CorporateActionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches corporate actions for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_corporate_actions("INE002A01018")
    # TODO: Handle 'response' of type CorporateActionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCorporateActionsErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_corporate_actions("INE002A01018")
    # TODO: Handle 'response' of type CorporateActionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCorporateActionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CorporateActionsResponse](upstox/models/corporate_actions_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetCorporateActionsErrorBody](upstox/errors/get_corporate_actions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_income_statement(isin: str, *, type_: str | None = "consolidated", time_period: str | None = "yearly", fs: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> IncomeStatementResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches income statement data for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_income_statement(
        "INE002A01018", type_="consolidated", time_period="yearly", fs=False
    )
    # TODO: Handle 'response' of type IncomeStatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIncomeStatementErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_income_statement(
        "INE002A01018", type_="consolidated", time_period="yearly", fs=False
    )
    # TODO: Handle 'response' of type IncomeStatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIncomeStatementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>type_</code> | <code>str \| None</code> | Report type. Allowed values: consolidated or standalone<br>**Default**: <code>"consolidated"</code> |
| <code>time_period</code> | <code>str \| None</code> | Time period. Allowed values: yearly, quarterly<br>**Default**: <code>"yearly"</code> |
| <code>fs</code> | <code>bool \| None</code> | Whether to include the full financial statement<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeStatementResponse](upstox/models/income_statement_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIncomeStatementErrorBody](upstox/errors/get_income_statement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_key_ratios(isin: str, *, request_options: RequestOptionsOrDict | None = None) -> KeyRatiosResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches key financial ratios for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_key_ratios("INE002A01018")
    # TODO: Handle 'response' of type KeyRatiosResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeyRatiosErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_key_ratios("INE002A01018")
    # TODO: Handle 'response' of type KeyRatiosResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeyRatiosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KeyRatiosResponse](upstox/models/key_ratios_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetKeyRatiosErrorBody](upstox/errors/get_key_ratios_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_share_holdings(isin: str, *, request_options: RequestOptionsOrDict | None = None) -> ShareHoldingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches shareholding pattern for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.fundamentals.get_share_holdings("INE002A01018")
    # TODO: Handle 'response' of type ShareHoldingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetShareHoldingsErrorBody
```

**Async**

```python
try:
    response = await async_client.fundamentals.get_share_holdings("INE002A01018")
    # TODO: Handle 'response' of type ShareHoldingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetShareHoldingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isin</code> | <code>str</code> | ISIN of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShareHoldingsResponse](upstox/models/share_holdings_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetShareHoldingsErrorBody](upstox/errors/get_share_holdings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](upstox/apis/history.py)

<details>
<summary><code>def get_historical_candle_data_2(instrument_key: str, interval: str, to_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHistoricalCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history.get_historical_candle_data_2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleData2ErrorBody
```

**Async**

```python
try:
    response = await async_client.history.get_historical_candle_data_2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleData2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Value sent with the request. |
| <code>interval</code> | <code>str</code> | Value sent with the request. |
| <code>to_date</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](upstox/models/get_historical_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHistoricalCandleData2ErrorBody](upstox/errors/get_historical_candle_data2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_historical_candle_data_3(instrument_key: str, interval: str, to_date: str, from_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHistoricalCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history.get_historical_candle_data_3(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleData3ErrorBody
```

**Async**

```python
try:
    response = await async_client.history.get_historical_candle_data_3(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleData3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Value sent with the request. |
| <code>interval</code> | <code>str</code> | Value sent with the request. |
| <code>to_date</code> | <code>str</code> | Value sent with the request. |
| <code>from_date</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](upstox/models/get_historical_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHistoricalCandleData3ErrorBody](upstox/errors/get_historical_candle_data3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intra_day_candle_data_1(instrument_key: str, interval: str, *, request_options: RequestOptionsOrDict | None = None) -> GetIntraDayCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history.get_intra_day_candle_data_1("some example string", "some example string")
    # TODO: Handle 'response' of type GetIntraDayCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntraDayCandleData1ErrorBody
```

**Async**

```python
try:
    response = await async_client.history.get_intra_day_candle_data_1("some example string", "some example string")
    # TODO: Handle 'response' of type GetIntraDayCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntraDayCandleData1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Value sent with the request. |
| <code>interval</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntraDayCandleResponse](upstox/models/get_intra_day_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIntraDayCandleData1ErrorBody](upstox/errors/get_intra_day_candle_data1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## HistoryV3

> Source: [HistoryV3](upstox/apis/history_v3.py)

<details>
<summary><code>def get_historical_candle_data(instrument_key: str, unit: str, interval: int, to_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHistoricalCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day with expanded interval options.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history_v3.get_historical_candle_data(
        "some example string", "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleDataErrorBody
```

**Async**

```python
try:
    response = await async_client.history_v3.get_historical_candle_data(
        "some example string", "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Value sent with the request. |
| <code>unit</code> | <code>str</code> | Value sent with the request. |
| <code>interval</code> | <code>int</code> | Value sent with the request. |
| <code>to_date</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](upstox/models/get_historical_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHistoricalCandleDataErrorBody](upstox/errors/get_historical_candle_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_historical_candle_data_1(instrument_key: str, unit: str, interval: int, to_date: str, from_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHistoricalCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day with expanded interval options

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history_v3.get_historical_candle_data_1(
        "some example string", "some example string", 1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleData1ErrorBody
```

**Async**

```python
try:
    response = await async_client.history_v3.get_historical_candle_data_1(
        "some example string", "some example string", 1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetHistoricalCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHistoricalCandleData1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Value sent with the request. |
| <code>unit</code> | <code>str</code> | Value sent with the request. |
| <code>interval</code> | <code>int</code> | Value sent with the request. |
| <code>to_date</code> | <code>str</code> | Value sent with the request. |
| <code>from_date</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](upstox/models/get_historical_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHistoricalCandleData1ErrorBody](upstox/errors/get_historical_candle_data1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intra_day_candle_data(instrument_key: str, unit: str, interval: int, *, request_options: RequestOptionsOrDict | None = None) -> GetIntraDayCandleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history_v3.get_intra_day_candle_data("some example string", "some example string", 1)
    # TODO: Handle 'response' of type GetIntraDayCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntraDayCandleDataErrorBody
```

**Async**

```python
try:
    response = await async_client.history_v3.get_intra_day_candle_data("some example string", "some example string", 1)
    # TODO: Handle 'response' of type GetIntraDayCandleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntraDayCandleDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Value sent with the request. |
| <code>unit</code> | <code>str</code> | Value sent with the request. |
| <code>interval</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntraDayCandleResponse](upstox/models/get_intra_day_candle_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIntraDayCandleDataErrorBody](upstox/errors/get_intra_day_candle_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Ipo

> Source: [Ipo](upstox/apis/ipo.py)

<details>
<summary><code>def apply_for_ipo(body: IpoApplyRequest | IpoApplyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> IpoApplyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places an IPO application for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ipo.apply_for_ipo(
        IpoApplyRequest(
            id="some example string",
            upi="some example string",
            category=Category.IND,
            bids=[IpoBidRequest(quantity=1, price=1.5)],
        ),
    )
    # TODO: Handle 'response' of type IpoApplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApplyForIpoErrorBody
```

**Async**

```python
try:
    response = await async_client.ipo.apply_for_ipo(
        IpoApplyRequest(
            id="some example string",
            upi="some example string",
            category=Category.IND,
            bids=[IpoBidRequest(quantity=1, price=1.5)],
        ),
    )
    # TODO: Handle 'response' of type IpoApplyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApplyForIpoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IpoApplyRequest](upstox/models/ipo_apply_request.py) \| [IpoApplyRequestDict](upstox/models/ipo_apply_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoApplyResponse](upstox/models/ipo_apply_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ApplyForIpoErrorBody](upstox/errors/apply_for_ipo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_ipo_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IpoCancelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels/deletes an IPO order of the authenticated user by order id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ipo.cancel_ipo_order("UPROYAL00000003")
    # TODO: Handle 'response' of type IpoCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelIpoOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.ipo.cancel_ipo_order("UPROYAL00000003")
    # TODO: Handle 'response' of type IpoCancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelIpoOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | IPO application id, as returned in `order_id` by the apply and orders APIs |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoCancelResponse](upstox/models/ipo_cancel_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[CancelIpoOrderErrorBody](upstox/errors/cancel_ipo_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ipo_details(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> IpoDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches detailed information for an IPO by its slug ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ipo.get_ipo_details("mandb-engineering-limited-ipo")
    # TODO: Handle 'response' of type IpoDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoDetailsErrorBody
```

**Async**

```python
try:
    response = await async_client.ipo.get_ipo_details("mandb-engineering-limited-ipo")
    # TODO: Handle 'response' of type IpoDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoDetailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | IPO id (slug), as returned in `id` by the IPO listing API |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoDetailsResponse](upstox/models/ipo_details_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIpoDetailsErrorBody](upstox/errors/get_ipo_details_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ipo_listing(*, status: Status9OrStr | None = None, issue_type: IssueType3OrStr | None = None, page_number: str | None = None, records: str | None = None, request_options: RequestOptionsOrDict | None = None) -> IpoListingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches list of IPOs filtered by status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ipo.get_ipo_listing(
        status=Status9.OPEN, issue_type=IssueType3.REGULAR, page_number="1", records="20"
    )
    # TODO: Handle 'response' of type IpoListingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoListingErrorBody
```

**Async**

```python
try:
    response = await async_client.ipo.get_ipo_listing(
        status=Status9.OPEN, issue_type=IssueType3.REGULAR, page_number="1", records="20"
    )
    # TODO: Handle 'response' of type IpoListingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoListingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[Status9OrStr](upstox/models/enums/status9.py) \| None</code> | IPO status to filter by<br>**Default**: <code>None</code> |
| <code>issue_type</code> | <code>[IssueType3OrStr](upstox/models/enums/issue_type3.py) \| None</code> | Issue type filter. `regular` is a mainboard issue. Returns both when omitted<br>**Default**: <code>None</code> |
| <code>page_number</code> | <code>str \| None</code> | Page number, starting at 1<br>**Default**: <code>None</code> |
| <code>records</code> | <code>str \| None</code> | Number of records per page<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoListingResponse](upstox/models/ipo_listing_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIpoListingErrorBody](upstox/errors/get_ipo_listing_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ipo_order_by_id(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IpoOrderDetailResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single IPO order of the authenticated user by order id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ipo.get_ipo_order_by_id("UPROYAL00000003")
    # TODO: Handle 'response' of type IpoOrderDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoOrderByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.ipo.get_ipo_order_by_id("UPROYAL00000003")
    # TODO: Handle 'response' of type IpoOrderDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoOrderByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | IPO application id, as returned in `order_id` by the apply and orders APIs |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoOrderDetailResponse](upstox/models/ipo_order_detail_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIpoOrderByIdErrorBody](upstox/errors/get_ipo_order_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ipo_orders(*, page_number: str | None = None, records: str | None = None, request_options: RequestOptionsOrDict | None = None) -> IpoOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the authenticated user's IPO orders/applications.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ipo.get_ipo_orders(page_number="1", records="10")
    # TODO: Handle 'response' of type IpoOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoOrdersErrorBody
```

**Async**

```python
try:
    response = await async_client.ipo.get_ipo_orders(page_number="1", records="10")
    # TODO: Handle 'response' of type IpoOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIpoOrdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_number</code> | <code>str \| None</code> | Page number, starting at 1<br>**Default**: <code>None</code> |
| <code>records</code> | <code>str \| None</code> | Number of records per page<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoOrderResponse](upstox/models/ipo_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetIpoOrdersErrorBody](upstox/errors/get_ipo_orders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Instruments

> Source: [Instruments](upstox/apis/instruments.py)

<details>
<summary><code>def search_instrument(query: str, *, exchanges: str | None = None, segments: str | None = None, instrument_types: str | None = None, expiry: str | None = None, atm_offset: int | None = None, page_number: int | None = 1, records: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> SearchInstrumentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the instrument details for searched query

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.instruments.search_instrument(
        "RELIANCE 1500 PE",
        exchanges="NSE,BSE,MCX",
        segments="EQ,FO,CURR,COMM",
        instrument_types="CE,PE",
        expiry="2025-12-28",
        atm_offset=2,
        page_number=1,
        records=20,
    )
    # TODO: Handle 'response' of type SearchInstrumentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchInstrumentErrorBody
```

**Async**

```python
try:
    response = await async_client.instruments.search_instrument(
        "RELIANCE 1500 PE",
        exchanges="NSE,BSE,MCX",
        segments="EQ,FO,CURR,COMM",
        instrument_types="CE,PE",
        expiry="2025-12-28",
        atm_offset=2,
        page_number=1,
        records=20,
    )
    # TODO: Handle 'response' of type SearchInstrumentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchInstrumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | natural language query |
| <code>exchanges</code> | <code>str \| None</code> | Comma separated exchanges<br>**Default**: <code>None</code> |
| <code>segments</code> | <code>str \| None</code> | Comma separated segments<br>**Default**: <code>None</code> |
| <code>instrument_types</code> | <code>str \| None</code> | Comma separated instrument types<br>**Default**: <code>None</code> |
| <code>expiry</code> | <code>str \| None</code> | expiry in format: yyyy-MM-dd<br>**Default**: <code>None</code> |
| <code>atm_offset</code> | <code>int \| None</code> | page number greater than or equal to 1<br>**Default**: <code>None</code> |
| <code>page_number</code> | <code>int \| None</code> | ATM offset number for queries like ATM, ATM+1, ATM-1, etc.<br>**Default**: <code>1</code> |
| <code>records</code> | <code>int \| None</code> | no of records in a single page<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchInstrumentResponse](upstox/models/search_instrument_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[SearchInstrumentErrorBody](upstox/errors/search_instrument_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Login

> Source: [Login](upstox/apis/login.py)

<details>
<summary><code>def authorize(client_id: str, redirect_uri: str, *, state: str | None = None, scope: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This provides details on the login endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.login.authorize("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeErrorBody
```

**Async**

```python
try:
    await async_client.login.authorize("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>client_id</code> | <code>str</code> | Value sent with the request. |
| <code>redirect_uri</code> | <code>str</code> | Value sent with the request. |
| <code>state</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>scope</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[AuthorizeErrorBody](upstox/errors/authorize_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def init_token_request_for_indie_user(client_id: str, body: IndieUserTokenRequest | IndieUserTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the initialize the generate token and it's expiry for an indie user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.login.init_token_request_for_indie_user("some example string", IndieUserTokenRequest())
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitTokenRequestForIndieUserErrorBody
```

**Async**

```python
try:
    response = await async_client.login.init_token_request_for_indie_user(
        "some example string", IndieUserTokenRequest()
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitTokenRequestForIndieUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>client_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[IndieUserTokenRequest](upstox/models/indie_user_token_request.py) \| [IndieUserTokenRequestDict](upstox/models/indie_user_token_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](upstox/models/token_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[InitTokenRequestForIndieUserErrorBody](upstox/errors/init_token_request_for_indie_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def logout(*, request_options: RequestOptionsOrDict | None = None) -> LogoutResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.login.logout()
    # TODO: Handle 'response' of type LogoutResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LogoutErrorBody
```

**Async**

```python
try:
    response = await async_client.login.logout()
    # TODO: Handle 'response' of type LogoutResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LogoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogoutResponse](upstox/models/logout_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[LogoutErrorBody](upstox/errors/logout_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| 401 | <code>[OAuthClientException](upstox/models/o_auth_client_exception.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def token(code: str, client_id: str, client_secret: str, redirect_uri: str, grant_type: str, *, refresh_extended_token: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> TokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.login.token(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TokenErrorBody
```

**Async**

```python
try:
    response = await async_client.login.token(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>str</code> | Value sent with the request. |
| <code>client_id</code> | <code>str</code> | OAuth API key that is a public identifier for app |
| <code>client_secret</code> | <code>str</code> | OAuth client secret that is a private secret known only to app and authorization server |
| <code>redirect_uri</code> | <code>str</code> | Authorization server will redirect the user back to the application via redirect url |
| <code>grant_type</code> | <code>str</code> | Type of grant used to get an access token |
| <code>refresh_extended_token</code> | <code>bool \| None</code> | Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set to true to refresh; false or omit to reuse an existing extended token when available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](upstox/models/token_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[TokenErrorBody](upstox/errors/token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MarketHolidaysAndTimings

> Source: [MarketHolidaysAndTimings](upstox/apis/market_holidays_and_timings.py)

<details>
<summary><code>def get_change_oi_data(instrument_key: str, expiry: str, date: str, interval: int, *, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches change in OI data for the given instrument key, expiry, date and interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_change_oi_data(
        "NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06", 2
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChangeOiDataErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_change_oi_data(
        "NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06", 2
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChangeOiDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>str</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>str</code> | Date in YYYY-MM-DD format for which change OI data is required |
| <code>interval</code> | <code>int</code> | Number of days for which difference in OI is required |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetChangeOiDataErrorBody](upstox/errors/get_change_oi_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_dii_data(data_type: str, interval: str, *, from_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches DII activity data for the given interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_dii_data("NSE_EQ|CASH", "1D", from_="2024-01-01")
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDiiDataErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_dii_data("NSE_EQ|CASH", "1D", from_="2024-01-01")
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDiiDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_type</code> | <code>str</code> | Data type. Allowed value: NSE_EQ\|CASH |
| <code>interval</code> | <code>str</code> | Interval. Allowed values: 1D, 1M |
| <code>from_</code> | <code>str \| None</code> | Start date in YYYY-MM-DD format (optional)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetDiiDataErrorBody](upstox/errors/get_dii_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_exchange_timings(date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetExchangeTimingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the exchange timings on particular date

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_exchange_timings("some example string")
    # TODO: Handle 'response' of type GetExchangeTimingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExchangeTimingsErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_exchange_timings("some example string")
    # TODO: Handle 'response' of type GetExchangeTimingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExchangeTimingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExchangeTimingResponse](upstox/models/get_exchange_timing_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetExchangeTimingsErrorBody](upstox/errors/get_exchange_timings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_fii_data(data_type: str, interval: str, *, from_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches FII activity data for the given data type and interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_fii_data("NSE_FO|INDEX_FUTURES", "1D", from_="2024-01-01")
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFiiDataErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_fii_data(
        "NSE_FO|INDEX_FUTURES", "1D", from_="2024-01-01"
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFiiDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_type</code> | <code>str</code> | Data type. Allowed values: NSE_FO\|INDEX_FUTURES, NSE_FO\|STOCK_FUTURES, NSE_FO\|INDEX_OPTIONS, NSE_FO\|STOCK_OPTIONS, NSE_EQ\|CASH |
| <code>interval</code> | <code>str</code> | Interval. Allowed values: 1D, 1M |
| <code>from_</code> | <code>str \| None</code> | Start date in YYYY-MM-DD format (optional)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetFiiDataErrorBody](upstox/errors/get_fii_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_holiday(date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHolidayResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the holiday on particular date

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_holiday("some example string")
    # TODO: Handle 'response' of type GetHolidayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHolidayErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_holiday("some example string")
    # TODO: Handle 'response' of type GetHolidayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHolidayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHolidayResponse](upstox/models/get_holiday_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHolidayErrorBody](upstox/errors/get_holiday_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_holidays(*, request_options: RequestOptionsOrDict | None = None) -> GetHolidayResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the holiday list of current year

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_holidays()
    # TODO: Handle 'response' of type GetHolidayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHolidaysErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_holidays()
    # TODO: Handle 'response' of type GetHolidayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHolidaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHolidayResponse](upstox/models/get_holiday_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHolidaysErrorBody](upstox/errors/get_holidays_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_market_status(exchange: str, *, request_options: RequestOptionsOrDict | None = None) -> GetMarketStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the market status for particular exchange

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_market_status("some example string")
    # TODO: Handle 'response' of type GetMarketStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_market_status("some example string")
    # TODO: Handle 'response' of type GetMarketStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketStatusResponse](upstox/models/get_market_status_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMarketStatusErrorBody](upstox/errors/get_market_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_max_pain_data(instrument_key: str, expiry: str, date: str, bucket_interval: int, *, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_max_pain_data(
        "NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06", 15
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMaxPainDataErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_max_pain_data(
        "NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06", 15
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMaxPainDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>str</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>str</code> | Date in YYYY-MM-DD format for which Max Pain data is required |
| <code>bucket_interval</code> | <code>int</code> | Bucket interval in minutes for the insights list |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMaxPainDataErrorBody](upstox/errors/get_max_pain_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_oi_data(instrument_key: str, expiry: str, date: str, *, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches OI data for the given instrument key, expiry and date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_oi_data("NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06")
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOiDataErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_oi_data(
        "NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06"
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOiDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>str</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>str</code> | Date in YYYY-MM-DD format for which OI data is required |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetOiDataErrorBody](upstox/errors/get_oi_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pcr_data(instrument_key: str, expiry: str, date: str, bucket_interval: int, *, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_pcr_data("NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06", 15)
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPcrDataErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_pcr_data(
        "NSE_INDEX|Nifty 50", "2026-05-19", "2026-05-06", 15
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPcrDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Underlying asset instrument key |
| <code>expiry</code> | <code>str</code> | Expiry date in YYYY-MM-DD format |
| <code>date</code> | <code>str</code> | Date in YYYY-MM-DD format for which PCR data is required |
| <code>bucket_interval</code> | <code>int</code> | Bucket interval in minutes for the insights list |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPcrDataErrorBody](upstox/errors/get_pcr_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_smartlist_futures(*, asset_type: str | None = None, category: str | None = None, page_number: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of futures for the given asset type and category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_smartlist_futures(
        asset_type="INDEX", category="TOP_TRADED", page_number=1, page_size=20
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSmartlistFuturesErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_smartlist_futures(
        asset_type="INDEX", category="TOP_TRADED", page_number=1, page_size=20
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSmartlistFuturesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset_type</code> | <code>str \| None</code> | Asset type. Allowed values: INDEX, STOCK, COMMODITY<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS, PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS)<br>**Default**: <code>None</code> |
| <code>page_number</code> | <code>int \| None</code> | Page number (optional, 1-indexed)<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Page size (optional, max 50)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetSmartlistFuturesErrorBody](upstox/errors/get_smartlist_futures_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_smartlist_mtf(*, page_number: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_smartlist_mtf(page_number=1, page_size=20)
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSmartlistMtfErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_smartlist_mtf(page_number=1, page_size=20)
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSmartlistMtfErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_number</code> | <code>int \| None</code> | Page number (optional, 1-indexed)<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Page size (optional, max 50)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetSmartlistMtfErrorBody](upstox/errors/get_smartlist_mtf_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_smartlist_options(*, asset_type: str | None = None, category: str | None = None, page_number: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of options for the given asset type and category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_holidays_and_timings.get_smartlist_options(
        asset_type="INDEX", category="TOP_TRADED", page_number=1, page_size=20
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSmartlistOptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.market_holidays_and_timings.get_smartlist_options(
        asset_type="INDEX", category="TOP_TRADED", page_number=1, page_size=20
    )
    # TODO: Handle 'response' of type AnalyticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSmartlistOptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset_type</code> | <code>str \| None</code> | Asset type. Allowed values: INDEX, STOCK, COMMODITY<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS, PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS)<br>**Default**: <code>None</code> |
| <code>page_number</code> | <code>int \| None</code> | Page number (optional, 1-indexed)<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Page size (optional, max 50)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](upstox/models/analytics_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetSmartlistOptionsErrorBody](upstox/errors/get_smartlist_options_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MarketQuote

> Source: [MarketQuote](upstox/apis/market_quote.py)

<details>
<summary><code>def get_full_market_quote(*, symbol: str | None = None, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetFullMarketQuoteResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the full market quotes for one or more instruments.This API returns the complete market data snapshot of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_quote.get_full_market_quote(
        symbol="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039"
    )
    # TODO: Handle 'response' of type GetFullMarketQuoteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFullMarketQuoteErrorBody
```

**Async**

```python
try:
    response = await async_client.market_quote.get_full_market_quote(
        symbol="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039"
    )
    # TODO: Handle 'response' of type GetFullMarketQuoteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFullMarketQuoteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str \| None</code> | Comma separated list of symbols<br>**Default**: <code>None</code> |
| <code>instrument_key</code> | <code>str \| None</code> | Comma separated list of instrument keys<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetFullMarketQuoteResponse](upstox/models/get_full_market_quote_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetFullMarketQuoteErrorBody](upstox/errors/get_full_market_quote_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_market_quote_ohlc(interval: str, *, symbol: str | None = None, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetMarketQuoteOhlcResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_quote.get_market_quote_ohlc(
        "1d", symbol="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039"
    )
    # TODO: Handle 'response' of type GetMarketQuoteOhlcResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketQuoteOhlcErrorBody
```

**Async**

```python
try:
    response = await async_client.market_quote.get_market_quote_ohlc(
        "1d", symbol="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039"
    )
    # TODO: Handle 'response' of type GetMarketQuoteOhlcResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketQuoteOhlcErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>str</code> | Interval to get ohlc data |
| <code>symbol</code> | <code>str \| None</code> | Comma separated list of symbols<br>**Default**: <code>None</code> |
| <code>instrument_key</code> | <code>str \| None</code> | Comma separated list of instrument keys<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteOhlcResponse](upstox/models/get_market_quote_ohlc_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMarketQuoteOhlcErrorBody](upstox/errors/get_market_quote_ohlc_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ltp(*, symbol: str | None = None, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetMarketQuoteLastTradedPriceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 1000 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_quote.ltp(
        symbol="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039"
    )
    # TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LtpErrorBody
```

**Async**

```python
try:
    response = await async_client.market_quote.ltp(
        symbol="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE848E01039"
    )
    # TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LtpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str \| None</code> | Comma separated list of symbols<br>**Default**: <code>None</code> |
| <code>instrument_key</code> | <code>str \| None</code> | Comma separated list of instrument keys<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteLastTradedPriceResponse](upstox/models/get_market_quote_last_traded_price_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[LtpErrorBody](upstox/errors/ltp_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MarketQuoteV3

> Source: [MarketQuoteV3](upstox/apis/market_quote_v3.py)

<details>
<summary><code>def get_ltp(*, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetMarketQuoteLastTradedPriceResponseV3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_quote_v3.get_ltp(instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE009A01021")
    # TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponseV3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLtpErrorBody
```

**Async**

```python
try:
    response = await async_client.market_quote_v3.get_ltp(instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE009A01021")
    # TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponseV3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLtpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str \| None</code> | Comma separated list of instrument keys<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteLastTradedPriceResponseV3](upstox/models/get_market_quote_last_traded_price_response_v3.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetLtpErrorBody](upstox/errors/get_ltp_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_market_quote_ohlcv3(interval: str, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetMarketQuoteOhlcResponseV3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_quote_v3.get_market_quote_ohlcv3(
        "1d", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE009A01021"
    )
    # TODO: Handle 'response' of type GetMarketQuoteOhlcResponseV3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketQuoteOhlcv3ErrorBody
```

**Async**

```python
try:
    response = await async_client.market_quote_v3.get_market_quote_ohlcv3(
        "1d", instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE009A01021"
    )
    # TODO: Handle 'response' of type GetMarketQuoteOhlcResponseV3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketQuoteOhlcv3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>interval</code> | <code>str</code> | Interval to get ohlc data |
| <code>instrument_key</code> | <code>str \| None</code> | Comma separated list of instrument keys<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteOhlcResponseV3](upstox/models/get_market_quote_ohlc_response_v3.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMarketQuoteOhlcv3ErrorBody](upstox/errors/get_market_quote_ohlcv3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_market_quote_option_greek(*, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetMarketQuoteOptionGreekResponseV3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API returns the Option Greek data of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_quote_v3.get_market_quote_option_greek(
        instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE009A01021"
    )
    # TODO: Handle 'response' of type GetMarketQuoteOptionGreekResponseV3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketQuoteOptionGreekErrorBody
```

**Async**

```python
try:
    response = await async_client.market_quote_v3.get_market_quote_option_greek(
        instrument_key="NSE_EQ|INE848E01016,NSE_EQ|INE009A01021"
    )
    # TODO: Handle 'response' of type GetMarketQuoteOptionGreekResponseV3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketQuoteOptionGreekErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str \| None</code> | Comma separated list of instrument keys<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteOptionGreekResponseV3](upstox/models/get_market_quote_option_greek_response_v3.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMarketQuoteOptionGreekErrorBody](upstox/errors/get_market_quote_option_greek_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MutualFund

> Source: [MutualFund](upstox/apis/mutual_fund.py)

<details>
<summary><code>def get_mutual_fund_holdings(*, request_options: RequestOptionsOrDict | None = None) -> GetMutualFundHoldingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns mutual fund holdings for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mutual_fund.get_mutual_fund_holdings()
    # TODO: Handle 'response' of type GetMutualFundHoldingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundHoldingsErrorBody
```

**Async**

```python
try:
    response = await async_client.mutual_fund.get_mutual_fund_holdings()
    # TODO: Handle 'response' of type GetMutualFundHoldingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundHoldingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundHoldingsResponse](upstox/models/get_mutual_fund_holdings_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMutualFundHoldingsErrorBody](upstox/errors/get_mutual_fund_holdings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_mutual_fund_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetMutualFundOrderDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single mutual fund order by order id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mutual_fund.get_mutual_fund_order("some example string")
    # TODO: Handle 'response' of type GetMutualFundOrderDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.mutual_fund.get_mutual_fund_order("some example string")
    # TODO: Handle 'response' of type GetMutualFundOrderDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | Mutual fund order id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundOrderDetailsResponse](upstox/models/get_mutual_fund_order_details_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMutualFundOrderErrorBody](upstox/errors/get_mutual_fund_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_mutual_fund_orders(*, status: str | None = "ALL", transaction_type: str | None = "ALL", page_number: int | None = 1, records: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> GetMutualFundOrdersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns mutual fund orders from the last 7 days for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mutual_fund.get_mutual_fund_orders(
        status="PENDING", transaction_type="BUY", page_number=1, records=20
    )
    # TODO: Handle 'response' of type GetMutualFundOrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundOrdersErrorBody
```

**Async**

```python
try:
    response = await async_client.mutual_fund.get_mutual_fund_orders(
        status="PENDING", transaction_type="BUY", page_number=1, records=20
    )
    # TODO: Handle 'response' of type GetMutualFundOrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundOrdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>str \| None</code> | Mutual fund order status<br>**Default**: <code>"ALL"</code> |
| <code>transaction_type</code> | <code>str \| None</code> | Mutual fund order transaction type<br>**Default**: <code>"ALL"</code> |
| <code>page_number</code> | <code>int \| None</code> | Page number for pagination.<br>**Default**: <code>1</code> |
| <code>records</code> | <code>int \| None</code> | no of records in a single page<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundOrdersResponse](upstox/models/get_mutual_fund_orders_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMutualFundOrdersErrorBody](upstox/errors/get_mutual_fund_orders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_mutual_fund_sips(*, page_number: int | None = 1, records: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> GetMutualFundSipsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active and paused SIP orders for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mutual_fund.get_mutual_fund_sips(page_number=1, records=20)
    # TODO: Handle 'response' of type GetMutualFundSipsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundSipsErrorBody
```

**Async**

```python
try:
    response = await async_client.mutual_fund.get_mutual_fund_sips(page_number=1, records=20)
    # TODO: Handle 'response' of type GetMutualFundSipsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMutualFundSipsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_number</code> | <code>int \| None</code> | Page number for pagination.<br>**Default**: <code>1</code> |
| <code>records</code> | <code>int \| None</code> | no of records in a single page<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundSipsResponse](upstox/models/get_mutual_fund_sips_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMutualFundSipsErrorBody](upstox/errors/get_mutual_fund_sips_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](upstox/apis/news.py)

<details>
<summary><code>def get_news(category: str, *, instrument_keys: str | None = None, page_number: int | None = 1, page_size: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> GetNewsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches news articles for the given instrument keys, or the user's current positions or holdings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_news(
        "instrument_keys", instrument_keys="NSE_EQ|INE002A01018,NSE_EQ|INE669E01016", page_number=1, page_size=100
    )
    # TODO: Handle 'response' of type GetNewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNewsErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_news(
        "instrument_keys", instrument_keys="NSE_EQ|INE002A01018,NSE_EQ|INE669E01016", page_number=1, page_size=100
    )
    # TODO: Handle 'response' of type GetNewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str</code> | Category of news to fetch. Allowed values: instrument_keys, positions, holdings |
| <code>instrument_keys</code> | <code>str \| None</code> | Comma-separated list of instrument keys. Required when category is instrument_keys.<br>**Default**: <code>None</code> |
| <code>page_number</code> | <code>int \| None</code> | Page number for pagination<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNewsResponse](upstox/models/get_news_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetNewsErrorBody](upstox/errors/get_news_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Options

> Source: [Options](upstox/apis/options.py)

<details>
<summary><code>def get_option_contracts(instrument_key: str, *, expiry_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetOptionContractResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the option contracts

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.options.get_option_contracts("NSE_INDEX|Nifty 50", expiry_date="2024-02-01")
    # TODO: Handle 'response' of type GetOptionContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOptionContractsErrorBody
```

**Async**

```python
try:
    response = await async_client.options.get_option_contracts("NSE_INDEX|Nifty 50", expiry_date="2024-02-01")
    # TODO: Handle 'response' of type GetOptionContractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOptionContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Instrument key for an underlying symbol |
| <code>expiry_date</code> | <code>str \| None</code> | Expiry date in format: YYYY-mm-dd<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOptionContractResponse](upstox/models/get_option_contract_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetOptionContractsErrorBody](upstox/errors/get_option_contracts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_put_call_option_chain(instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetOptionChainResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the option chain

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.options.get_put_call_option_chain("NSE_INDEX|Nifty 50", "2024-02-01")
    # TODO: Handle 'response' of type GetOptionChainResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPutCallOptionChainErrorBody
```

**Async**

```python
try:
    response = await async_client.options.get_put_call_option_chain("NSE_INDEX|Nifty 50", "2024-02-01")
    # TODO: Handle 'response' of type GetOptionChainResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPutCallOptionChainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>instrument_key</code> | <code>str</code> | Instrument key for an underlying symbol |
| <code>expiry_date</code> | <code>str</code> | Expiry date in format: YYYY-mm-dd |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOptionChainResponse](upstox/models/get_option_chain_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPutCallOptionChainErrorBody](upstox/errors/get_put_call_option_chain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Order

> Source: [Order](upstox/apis/order.py)

<details>
<summary><code>def cancel_gtt_order(body: GttCancelOrderRequest | GttCancelOrderRequestDict, *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GttTriggerOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to cancel GTT orders.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.cancel_gtt_order(GttCancelOrderRequest(gtt_order_id="some example string"))
    # TODO: Handle 'response' of type GttTriggerOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelGttOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.cancel_gtt_order(GttCancelOrderRequest(gtt_order_id="some example string"))
    # TODO: Handle 'response' of type GttTriggerOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelGttOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GttCancelOrderRequest](upstox/models/gtt_cancel_order_request.py) \| [GttCancelOrderRequestDict](upstox/models/gtt_cancel_order_request.py)</code> | The request body. |
| <code>origin</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GttTriggerOrderResponse](upstox/models/gtt_trigger_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[CancelGttOrderErrorBody](upstox/errors/cancel_gtt_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_multi_order(*, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CancelOrExitMultiOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.cancel_multi_order()
    # TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelMultiOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.cancel_multi_order()
    # TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelMultiOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tag</code> | <code>str \| None</code> | The tag associated with the orders for which the orders must be cancelled<br>**Default**: <code>None</code> |
| <code>segment</code> | <code>str \| None</code> | The segment for which the orders must be cancelled<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrExitMultiOrderResponse](upstox/models/cancel_or_exit_multi_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[CancelMultiOrderErrorBody](upstox/errors/cancel_multi_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CancelOrderV3Response</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.cancel_order("some example string")
    # TODO: Handle 'response' of type CancelOrderV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.cancel_order("some example string")
    # TODO: Handle 'response' of type CancelOrderV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrderV3Response](upstox/models/cancel_order_v3_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[CancelOrderErrorBody](upstox/errors/cancel_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_order_1(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CancelOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel order API can be used for two purposes:
Cancelling an open order which could be an AMO or a normal order
It is also used to EXIT a CO or OCO(bracket order)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.cancel_order_1("12345667890")
    # TODO: Handle 'response' of type CancelOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelOrder1ErrorBody
```

**Async**

```python
try:
    response = await async_client.order.cancel_order_1("12345667890")
    # TODO: Handle 'response' of type CancelOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelOrder1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The order ID for which the order must be cancelled |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrderResponse](upstox/models/cancel_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[CancelOrder1ErrorBody](upstox/errors/cancel_order1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def exit_positions(*, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CancelOrExitMultiOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to exit all the positions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.exit_positions()
    # TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExitPositionsErrorBody
```

**Async**

```python
try:
    response = await async_client.order.exit_positions()
    # TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExitPositionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tag</code> | <code>str \| None</code> | The tag associated with the positions for which the positions must be exit<br>**Default**: <code>None</code> |
| <code>segment</code> | <code>str \| None</code> | The segment for which the positions must be exit<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrExitMultiOrderResponse](upstox/models/cancel_or_exit_multi_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ExitPositionsErrorBody](upstox/errors/exit_positions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_gtt_order_details(*, gtt_order_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetGttOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GTT_ORDER_DESCRIPTION

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.get_gtt_order_details(gtt_order_id="GTT-XX221130000253265")
    # TODO: Handle 'response' of type GetGttOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGttOrderDetailsErrorBody
```

**Async**

```python
try:
    response = await async_client.order.get_gtt_order_details(gtt_order_id="GTT-XX221130000253265")
    # TODO: Handle 'response' of type GetGttOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGttOrderDetailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>gtt_order_id</code> | <code>str \| None</code> | Unique identifier of the GTT order for which the order history is required<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGttOrderResponse](upstox/models/get_gtt_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetGttOrderDetailsErrorBody](upstox/errors/get_gtt_order_details_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order_book(*, request_options: RequestOptionsOrDict | None = None) -> GetOrderBookResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the list of orders placed by the user. The orders placed by the user is transient for a day and is cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.get_order_book()
    # TODO: Handle 'response' of type GetOrderBookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderBookErrorBody
```

**Async**

```python
try:
    response = await async_client.order.get_order_book()
    # TODO: Handle 'response' of type GetOrderBookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderBookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOrderBookResponse](upstox/models/get_order_book_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetOrderBookErrorBody](upstox/errors/get_order_book_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order_details(*, order_id: str | None = None, tag: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the details of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.

The order history can be requested either using order_id or tag.

If both the options are passed, the history of the order which precisely matches both the order_id and tag will be returned in the response.

If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.get_order_details(order_id="12345667890", tag="2qdqjppebx")
    # TODO: Handle 'response' of type GetOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderDetailsErrorBody
```

**Async**

```python
try:
    response = await async_client.order.get_order_details(order_id="12345667890", tag="2qdqjppebx")
    # TODO: Handle 'response' of type GetOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderDetailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str \| None</code> | The order reference ID for which the order history is required<br>**Default**: <code>None</code> |
| <code>tag</code> | <code>str \| None</code> | The unique tag of the order for which the order history is being requested<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOrderResponse](upstox/models/get_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetOrderDetailsErrorBody](upstox/errors/get_order_details_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order_status(*, order_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetOrderDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the recent detail of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be requested using order_id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.get_order_status(order_id="12345667890")
    # TODO: Handle 'response' of type GetOrderDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.order.get_order_status(order_id="12345667890")
    # TODO: Handle 'response' of type GetOrderDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str \| None</code> | The order reference ID for which the order details is required<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOrderDetailsResponse](upstox/models/get_order_details_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetOrderStatusErrorBody](upstox/errors/get_order_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trade_history(*, request_options: RequestOptionsOrDict | None = None) -> GetTradeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the trades executed for the day

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.get_trade_history()
    # TODO: Handle 'response' of type GetTradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradeHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.order.get_trade_history()
    # TODO: Handle 'response' of type GetTradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradeHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeResponse](upstox/models/get_trade_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetTradeHistoryErrorBody](upstox/errors/get_trade_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trades_by_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetTradeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the trades executed for an order

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.get_trades_by_order("12345667890")
    # TODO: Handle 'response' of type GetTradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradesByOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.get_trades_by_order("12345667890")
    # TODO: Handle 'response' of type GetTradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradesByOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The order ID for which the order to get order trades |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeResponse](upstox/models/get_trade_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetTradesByOrderErrorBody](upstox/errors/get_trades_by_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def modify_gtt_order(body: GttModifyOrderRequest | GttModifyOrderRequestDict, *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GttTriggerOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify GTT orders.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.modify_gtt_order(
        GttModifyOrderRequest(
            type_=Type.SINGLE,
            quantity=1,
            rules=[GttRule(strategy=Strategy.ENTRY, trigger_type=TriggerType.ABOVE, trigger_price=1.5)],
            gtt_order_id="some example string",
        ),
    )
    # TODO: Handle 'response' of type GttTriggerOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyGttOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.modify_gtt_order(
        GttModifyOrderRequest(
            type_=Type.SINGLE,
            quantity=1,
            rules=[GttRule(strategy=Strategy.ENTRY, trigger_type=TriggerType.ABOVE, trigger_price=1.5)],
            gtt_order_id="some example string",
        ),
    )
    # TODO: Handle 'response' of type GttTriggerOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyGttOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GttModifyOrderRequest](upstox/models/gtt_modify_order_request.py) \| [GttModifyOrderRequestDict](upstox/models/gtt_modify_order_request.py)</code> | The request body. |
| <code>origin</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GttTriggerOrderResponse](upstox/models/gtt_trigger_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ModifyGttOrderErrorBody](upstox/errors/modify_gtt_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def modify_order(body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ModifyOrderV3Response</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.modify_order(
        ModifyOrderRequest(
            validity=Validity5.DAY,
            price=1.5,
            order_id="some example string",
            order_type=OrderType6.MARKET,
            trigger_price=1.5,
        ),
    )
    # TODO: Handle 'response' of type ModifyOrderV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.modify_order(
        ModifyOrderRequest(
            validity=Validity5.DAY,
            price=1.5,
            order_id="some example string",
            order_type=OrderType6.MARKET,
            trigger_price=1.5,
        ),
    )
    # TODO: Handle 'response' of type ModifyOrderV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModifyOrderRequest](upstox/models/modify_order_request.py) \| [ModifyOrderRequestDict](upstox/models/modify_order_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModifyOrderV3Response](upstox/models/modify_order_v3_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ModifyOrderErrorBody](upstox/errors/modify_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def modify_order_1(body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ModifyOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will be considered from the original order

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.modify_order_1(
        ModifyOrderRequest(
            validity=Validity5.DAY,
            price=1.5,
            order_id="some example string",
            order_type=OrderType6.MARKET,
            trigger_price=1.5,
        ),
    )
    # TODO: Handle 'response' of type ModifyOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyOrder1ErrorBody
```

**Async**

```python
try:
    response = await async_client.order.modify_order_1(
        ModifyOrderRequest(
            validity=Validity5.DAY,
            price=1.5,
            order_id="some example string",
            order_type=OrderType6.MARKET,
            trigger_price=1.5,
        ),
    )
    # TODO: Handle 'response' of type ModifyOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyOrder1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModifyOrderRequest](upstox/models/modify_order_request.py) \| [ModifyOrderRequestDict](upstox/models/modify_order_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModifyOrderResponse](upstox/models/modify_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ModifyOrder1ErrorBody](upstox/errors/modify_order1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def place_gtt_order(body: GttPlaceOrderRequest | GttPlaceOrderRequestDict, *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GttTriggerOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place GTT orders.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.place_gtt_order(
        GttPlaceOrderRequest(
            type_=Type.SINGLE,
            quantity=1,
            product=Product3.I_,
            rules=[GttRule(strategy=Strategy.ENTRY, trigger_type=TriggerType.ABOVE, trigger_price=1.5)],
            instrument_token="some example string",
            transaction_type=TransactionType.BUY,
        ),
    )
    # TODO: Handle 'response' of type GttTriggerOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceGttOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.place_gtt_order(
        GttPlaceOrderRequest(
            type_=Type.SINGLE,
            quantity=1,
            product=Product3.I_,
            rules=[GttRule(strategy=Strategy.ENTRY, trigger_type=TriggerType.ABOVE, trigger_price=1.5)],
            instrument_token="some example string",
            transaction_type=TransactionType.BUY,
        ),
    )
    # TODO: Handle 'response' of type GttTriggerOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceGttOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GttPlaceOrderRequest](upstox/models/gtt_place_order_request.py) \| [GttPlaceOrderRequestDict](upstox/models/gtt_place_order_request.py)</code> | The request body. |
| <code>origin</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GttTriggerOrderResponse](upstox/models/gtt_trigger_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[PlaceGttOrderErrorBody](upstox/errors/place_gtt_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def place_multi_order(body: list[MultiOrderRequest | MultiOrderRequestDict], *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MultiOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place multiple orders to the exchange via Upstox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.place_multi_order(
        [
            MultiOrderRequest(
                quantity=1,
                product=ProductOpenApiDefinitionOrderApi.I_,
                validity=Validity.DAY,
                price=1.5,
                slice=True,
                instrument_token="some example string",
                order_type=OrderTypeOpenApiDefinitionOrderApi.MARKET,
                transaction_type=TransactionType.BUY,
                disclosed_quantity=1,
                trigger_price=1.5,
                is_amo=True,
                correlation_id="some example string",
            ),
        ],
    )
    # TODO: Handle 'response' of type MultiOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceMultiOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.place_multi_order(
        [
            MultiOrderRequest(
                quantity=1,
                product=ProductOpenApiDefinitionOrderApi.I_,
                validity=Validity.DAY,
                price=1.5,
                slice=True,
                instrument_token="some example string",
                order_type=OrderTypeOpenApiDefinitionOrderApi.MARKET,
                transaction_type=TransactionType.BUY,
                disclosed_quantity=1,
                trigger_price=1.5,
                is_amo=True,
                correlation_id="some example string",
            ),
        ],
    )
    # TODO: Handle 'response' of type MultiOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceMultiOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[MultiOrderRequest](upstox/models/multi_order_request.py) \| [MultiOrderRequestDict](upstox/models/multi_order_request.py)&#93;</code> | The request body. |
| <code>origin</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MultiOrderResponse](upstox/models/multi_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[PlaceMultiOrderErrorBody](upstox/errors/place_multi_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def place_order(body: PlaceOrderV3Request | PlaceOrderV3RequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PlaceOrderV3Response</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.place_order(
        PlaceOrderV3Request(
            quantity=1,
            product=ProductOpenApiDefinitionOrderApi.I_,
            validity=Validity.DAY,
            price=1.5,
            instrument_token="some example string",
            order_type=OrderTypeOpenApiDefinitionOrderApi.MARKET,
            transaction_type=TransactionType.BUY,
            disclosed_quantity=1,
            trigger_price=1.5,
            is_amo=True,
        ),
    )
    # TODO: Handle 'response' of type PlaceOrderV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.order.place_order(
        PlaceOrderV3Request(
            quantity=1,
            product=ProductOpenApiDefinitionOrderApi.I_,
            validity=Validity.DAY,
            price=1.5,
            instrument_token="some example string",
            order_type=OrderTypeOpenApiDefinitionOrderApi.MARKET,
            transaction_type=TransactionType.BUY,
            disclosed_quantity=1,
            trigger_price=1.5,
            is_amo=True,
        ),
    )
    # TODO: Handle 'response' of type PlaceOrderV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaceOrderV3Request](upstox/models/place_order_v3_request.py) \| [PlaceOrderV3RequestDict](upstox/models/place_order_v3_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaceOrderV3Response](upstox/models/place_order_v3_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[PlaceOrderErrorBody](upstox/errors/place_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def place_order_1(body: PlaceOrderRequest | PlaceOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PlaceOrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place an order to the exchange via Upstox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.order.place_order_1(
        PlaceOrderRequest(
            quantity=1,
            product=ProductOpenApiDefinitionOrderApi.I_,
            validity=Validity.DAY,
            price=1.5,
            instrument_token="some example string",
            order_type=OrderTypeOpenApiDefinitionOrderApi.MARKET,
            transaction_type=TransactionType.BUY,
            disclosed_quantity=1,
            trigger_price=1.5,
            is_amo=True,
        ),
    )
    # TODO: Handle 'response' of type PlaceOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceOrder1ErrorBody
```

**Async**

```python
try:
    response = await async_client.order.place_order_1(
        PlaceOrderRequest(
            quantity=1,
            product=ProductOpenApiDefinitionOrderApi.I_,
            validity=Validity.DAY,
            price=1.5,
            instrument_token="some example string",
            order_type=OrderTypeOpenApiDefinitionOrderApi.MARKET,
            transaction_type=TransactionType.BUY,
            disclosed_quantity=1,
            trigger_price=1.5,
            is_amo=True,
        ),
    )
    # TODO: Handle 'response' of type PlaceOrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceOrder1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaceOrderRequest](upstox/models/place_order_request.py) \| [PlaceOrderRequestDict](upstox/models/place_order_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaceOrderResponse](upstox/models/place_order_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[PlaceOrder1ErrorBody](upstox/errors/place_order1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](upstox/apis/payments.py)

<details>
<summary><code>def cancel_payout(transaction_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PayoutDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.cancel_payout("imps_0426_7654321")
    # TODO: Handle 'response' of type PayoutDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.cancel_payout("imps_0426_7654321")
    # TODO: Handle 'response' of type PayoutDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Payout transaction id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutDetailsResponse](upstox/models/payout_details_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[CancelPayoutErrorBody](upstox/errors/cancel_payout_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payin_history(*, request_options: RequestOptionsOrDict | None = None) -> PaymentHistoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_payin_history()
    # TODO: Handle 'response' of type PaymentHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayinHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_payin_history()
    # TODO: Handle 'response' of type PaymentHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayinHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentHistoryResponse](upstox/models/payment_history_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPayinHistoryErrorBody](upstox/errors/get_payin_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payout_history(*, request_options: RequestOptionsOrDict | None = None) -> PaymentHistoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_payout_history()
    # TODO: Handle 'response' of type PaymentHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayoutHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_payout_history()
    # TODO: Handle 'response' of type PaymentHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayoutHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentHistoryResponse](upstox/models/payment_history_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPayoutHistoryErrorBody](upstox/errors/get_payout_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payout_modes(*, request_options: RequestOptionsOrDict | None = None) -> PayoutModesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_payout_modes()
    # TODO: Handle 'response' of type PayoutModesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayoutModesErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_payout_modes()
    # TODO: Handle 'response' of type PayoutModesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPayoutModesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutModesResponse](upstox/models/payout_modes_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPayoutModesErrorBody](upstox/errors/get_payout_modes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def initiate_payout(body: InitiatePayoutRequest | InitiatePayoutRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PayoutDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.initiate_payout(InitiatePayoutRequest(mode="some example string", amount=1.5))
    # TODO: Handle 'response' of type PayoutDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitiatePayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.initiate_payout(
        InitiatePayoutRequest(mode="some example string", amount=1.5)
    )
    # TODO: Handle 'response' of type PayoutDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitiatePayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InitiatePayoutRequest](upstox/models/initiate_payout_request.py) \| [InitiatePayoutRequestDict](upstox/models/initiate_payout_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutDetailsResponse](upstox/models/payout_details_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[InitiatePayoutErrorBody](upstox/errors/initiate_payout_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def modify_payout(transaction_id: str, body: ModifyPayoutRequest | ModifyPayoutRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PayoutDetailsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.modify_payout("imps_0426_7654321", ModifyPayoutRequest(amount=1.5))
    # TODO: Handle 'response' of type PayoutDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyPayoutErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.modify_payout("imps_0426_7654321", ModifyPayoutRequest(amount=1.5))
    # TODO: Handle 'response' of type PayoutDetailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyPayoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Payout transaction id |
| <code>body</code> | <code>[ModifyPayoutRequest](upstox/models/modify_payout_request.py) \| [ModifyPayoutRequestDict](upstox/models/modify_payout_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutDetailsResponse](upstox/models/payout_details_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ModifyPayoutErrorBody](upstox/errors/modify_payout_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Portfolio

> Source: [Portfolio](upstox/apis/portfolio.py)

<details>
<summary><code>def convert_positions(body: ConvertPositionRequest | ConvertPositionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ConvertPositionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert the margin product of an open position

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.portfolio.convert_positions(
        ConvertPositionRequest(
            instrument_token="some example string",
            new_product=NewProduct.I_,
            old_product=OldProduct.I_,
            transaction_type=TransactionTypeOpenApiDefinitionPortfolioApi.BUY,
            quantity=1,
        ),
    )
    # TODO: Handle 'response' of type ConvertPositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConvertPositionsErrorBody
```

**Async**

```python
try:
    response = await async_client.portfolio.convert_positions(
        ConvertPositionRequest(
            instrument_token="some example string",
            new_product=NewProduct.I_,
            old_product=OldProduct.I_,
            transaction_type=TransactionTypeOpenApiDefinitionPortfolioApi.BUY,
            quantity=1,
        ),
    )
    # TODO: Handle 'response' of type ConvertPositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConvertPositionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ConvertPositionRequest](upstox/models/convert_position_request.py) \| [ConvertPositionRequestDict](upstox/models/convert_position_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConvertPositionResponse](upstox/models/convert_position_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[ConvertPositionsErrorBody](upstox/errors/convert_positions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_holdings(*, request_options: RequestOptionsOrDict | None = None) -> GetHoldingsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the holdings which the user has bought/sold in previous trading sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.portfolio.get_holdings()
    # TODO: Handle 'response' of type GetHoldingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHoldingsErrorBody
```

**Async**

```python
try:
    response = await async_client.portfolio.get_holdings()
    # TODO: Handle 'response' of type GetHoldingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHoldingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHoldingsResponse](upstox/models/get_holdings_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetHoldingsErrorBody](upstox/errors/get_holdings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_mtf_positions(*, request_options: RequestOptionsOrDict | None = None) -> GetPositionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to get MTF positions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.portfolio.get_mtf_positions()
    # TODO: Handle 'response' of type GetPositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMtfPositionsErrorBody
```

**Async**

```python
try:
    response = await async_client.portfolio.get_mtf_positions()
    # TODO: Handle 'response' of type GetPositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMtfPositionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPositionResponse](upstox/models/get_position_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMtfPositionsErrorBody](upstox/errors/get_mtf_positions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_positions(*, request_options: RequestOptionsOrDict | None = None) -> GetPositionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the current positions for the user for the current day.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.portfolio.get_positions()
    # TODO: Handle 'response' of type GetPositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPositionsErrorBody
```

**Async**

```python
try:
    response = await async_client.portfolio.get_positions()
    # TODO: Handle 'response' of type GetPositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPositionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPositionResponse](upstox/models/get_position_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPositionsErrorBody](upstox/errors/get_positions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PostTrade

> Source: [PostTrade](upstox/apis/post_trade.py)

<details>
<summary><code>def get_trades_by_date_range(start_date: str, end_date: str, page_number: int, page_size: int, *, segment: str | None = "", request_options: RequestOptionsOrDict | None = None) -> TradeHistoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves the trade history for a specified time interval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.post_trade.get_trades_by_date_range("2022-04-01", "2023-03-31", 1, 100, segment="EQ")
    # TODO: Handle 'response' of type TradeHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradesByDateRangeErrorBody
```

**Async**

```python
try:
    response = await async_client.post_trade.get_trades_by_date_range("2022-04-01", "2023-03-31", 1, 100, segment="EQ")
    # TODO: Handle 'response' of type TradeHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradesByDateRangeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start_date</code> | <code>str</code> | Date from which trade history needs to be fetched. Date in YYYY-mm-dd format |
| <code>end_date</code> | <code>str</code> | Date till which history needs needs to be fetched. Date in YYYY-mm-dd format |
| <code>page_number</code> | <code>int</code> | Page number for which you want to fetch trade history |
| <code>page_size</code> | <code>int</code> | How many records you want for a page |
| <code>segment</code> | <code>str \| None</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives MF - Mutual Funds<br>**Default**: <code>""</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TradeHistoryResponse](upstox/models/trade_history_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetTradesByDateRangeErrorBody](upstox/errors/get_trades_by_date_range_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TradeProfitAndLoss

> Source: [TradeProfitAndLoss](upstox/apis/trade_profit_and_loss.py)

<details>
<summary><code>def get_profit_and_loss_charges(segment: str, financial_year: str, *, from_date: str | None = None, to_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetProfitAndLossChargesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the charges incurred by users for their trades

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.trade_profit_and_loss.get_profit_and_loss_charges(
        "EQ", "2223", from_date="01-04-2022", to_date="31-03-2023"
    )
    # TODO: Handle 'response' of type GetProfitAndLossChargesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProfitAndLossChargesErrorBody
```

**Async**

```python
try:
    response = await async_client.trade_profit_and_loss.get_profit_and_loss_charges(
        "EQ", "2223", from_date="01-04-2022", to_date="31-03-2023"
    )
    # TODO: Handle 'response' of type GetProfitAndLossChargesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProfitAndLossChargesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>str</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives |
| <code>financial_year</code> | <code>str</code> | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 |
| <code>from_date</code> | <code>str \| None</code> | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>str \| None</code> | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProfitAndLossChargesResponse](upstox/models/get_profit_and_loss_charges_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetProfitAndLossChargesErrorBody](upstox/errors/get_profit_and_loss_charges_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trade_wise_profit_and_loss_data(segment: str, financial_year: str, page_number: int, page_size: int, *, from_date: str | None = None, to_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetTradeWiseProfitAndLossDataResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the data of the realised Profit and Loss report requested by a user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.trade_profit_and_loss.get_trade_wise_profit_and_loss_data(
        "EQ", "2223", 1, 3000, from_date="01-04-2022", to_date="31-03-2023"
    )
    # TODO: Handle 'response' of type GetTradeWiseProfitAndLossDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradeWiseProfitAndLossDataErrorBody
```

**Async**

```python
try:
    response = await async_client.trade_profit_and_loss.get_trade_wise_profit_and_loss_data(
        "EQ", "2223", 1, 3000, from_date="01-04-2022", to_date="31-03-2023"
    )
    # TODO: Handle 'response' of type GetTradeWiseProfitAndLossDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradeWiseProfitAndLossDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>str</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives |
| <code>financial_year</code> | <code>str</code> | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 |
| <code>page_number</code> | <code>int</code> | Page Number, the pages are starting from 1 |
| <code>page_size</code> | <code>int</code> | Page size for pagination. The maximum page size value is obtained from P and L report metadata API. |
| <code>from_date</code> | <code>str \| None</code> | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>str \| None</code> | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeWiseProfitAndLossDataResponse](upstox/models/get_trade_wise_profit_and_loss_data_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetTradeWiseProfitAndLossDataErrorBody](upstox/errors/get_trade_wise_profit_and_loss_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trade_wise_profit_and_loss_meta_data(segment: str, financial_year: str, *, from_date: str | None = None, to_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetTradeWiseProfitAndLossMetaDataResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the data of the realised Profit and Loss report requested by a user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.trade_profit_and_loss.get_trade_wise_profit_and_loss_meta_data(
        "EQ", "2223", from_date="01-04-2022", to_date="31-03-2023"
    )
    # TODO: Handle 'response' of type GetTradeWiseProfitAndLossMetaDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradeWiseProfitAndLossMetaDataErrorBody
```

**Async**

```python
try:
    response = await async_client.trade_profit_and_loss.get_trade_wise_profit_and_loss_meta_data(
        "EQ", "2223", from_date="01-04-2022", to_date="31-03-2023"
    )
    # TODO: Handle 'response' of type GetTradeWiseProfitAndLossMetaDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTradeWiseProfitAndLossMetaDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>str</code> | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives |
| <code>financial_year</code> | <code>str</code> | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 |
| <code>from_date</code> | <code>str \| None</code> | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>str \| None</code> | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeWiseProfitAndLossMetaDataResponse](upstox/models/get_trade_wise_profit_and_loss_meta_data_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetTradeWiseProfitAndLossMetaDataErrorBody](upstox/errors/get_trade_wise_profit_and_loss_meta_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](upstox/apis/user.py)

<details>
<summary><code>def get_kill_switch(*, request_options: RequestOptionsOrDict | None = None) -> KillSwitchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the disable/enable status of all trading segments for the user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.get_kill_switch()
    # TODO: Handle 'response' of type KillSwitchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKillSwitchErrorBody
```

**Async**

```python
try:
    response = await async_client.user.get_kill_switch()
    # TODO: Handle 'response' of type KillSwitchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKillSwitchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KillSwitchResponse](upstox/models/kill_switch_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetKillSwitchErrorBody](upstox/errors/get_kill_switch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_profile(*, request_options: RequestOptionsOrDict | None = None) -> GetProfileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows to fetch the complete information of the user who is logged in including the products, order types and exchanges enabled for the user

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.get_profile()
    # TODO: Handle 'response' of type GetProfileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProfileErrorBody
```

**Async**

```python
try:
    response = await async_client.user.get_profile()
    # TODO: Handle 'response' of type GetProfileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProfileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProfileResponse](upstox/models/get_profile_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetProfileErrorBody](upstox/errors/get_profile_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_fund_margin(*, segment: Segment1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> GetUserFundMarginResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shows the balance of the user in equity and commodity market.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.get_user_fund_margin()
    # TODO: Handle 'response' of type GetUserFundMarginResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserFundMarginErrorBody
```

**Async**

```python
try:
    response = await async_client.user.get_user_fund_margin()
    # TODO: Handle 'response' of type GetUserFundMarginResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserFundMarginErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segment</code> | <code>[Segment1OrStr](upstox/models/enums/segment1.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUserFundMarginResponse](upstox/models/get_user_fund_margin_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetUserFundMarginErrorBody](upstox/errors/get_user_fund_margin_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_fund_margin_v3(*, request_options: RequestOptionsOrDict | None = None) -> GetUserFundMarginV3Response</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and unavailable-to-trade components.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.get_user_fund_margin_v3()
    # TODO: Handle 'response' of type GetUserFundMarginV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserFundMarginV3ErrorBody
```

**Async**

```python
try:
    response = await async_client.user.get_user_fund_margin_v3()
    # TODO: Handle 'response' of type GetUserFundMarginV3Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserFundMarginV3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUserFundMarginV3Response](upstox/models/get_user_fund_margin_v3_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetUserFundMarginV3ErrorBody](upstox/errors/get_user_fund_margin_v3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_ips(*, request_options: RequestOptionsOrDict | None = None) -> UserIpResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.get_user_ips()
    # TODO: Handle 'response' of type UserIpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserIpsErrorBody
```

**Async**

```python
try:
    response = await async_client.user.get_user_ips()
    # TODO: Handle 'response' of type UserIpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserIpsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserIpResponse](upstox/models/user_ip_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetUserIpsErrorBody](upstox/errors/get_user_ips_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_kill_switch(body: list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict], *, request_options: RequestOptionsOrDict | None = None) -> KillSwitchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable specific trading segments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.update_kill_switch(
        [KillSwitchSegmentUpdateRequest(segment=Segment.BSE_EQ, action=Action.ENABLE)]
    )
    # TODO: Handle 'response' of type KillSwitchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateKillSwitchErrorBody
```

**Async**

```python
try:
    response = await async_client.user.update_kill_switch(
        [KillSwitchSegmentUpdateRequest(segment=Segment.BSE_EQ, action=Action.ENABLE)]
    )
    # TODO: Handle 'response' of type KillSwitchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateKillSwitchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[KillSwitchSegmentUpdateRequest](upstox/models/kill_switch_segment_update_request.py) \| [KillSwitchSegmentUpdateRequestDict](upstox/models/kill_switch_segment_update_request.py)&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KillSwitchResponse](upstox/models/kill_switch_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[UpdateKillSwitchErrorBody](upstox/errors/update_kill_switch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user_ip(body: UpdateUserIpRequest | UpdateUserIpRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> UserIpResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user.update_user_ip(UpdateUserIpRequest())
    # TODO: Handle 'response' of type UserIpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserIpErrorBody
```

**Async**

```python
try:
    response = await async_client.user.update_user_ip(UpdateUserIpRequest())
    # TODO: Handle 'response' of type UserIpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserIpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateUserIpRequest](upstox/models/update_user_ip_request.py) \| [UpdateUserIpRequestDict](upstox/models/update_user_ip_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserIpResponse](upstox/models/user_ip_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[UpdateUserIpErrorBody](upstox/errors/update_user_ip_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Websocket

> Source: [Websocket](upstox/apis/websocket.py)

<details>
<summary><code>def get_market_data_feed(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API redirects the client to the respective socket endpoint to receive Market updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.websocket.get_market_data_feed()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketDataFeedErrorBody
```

**Async**

```python
try:
    await async_client.websocket.get_market_data_feed()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketDataFeedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMarketDataFeedErrorBody](upstox/errors/get_market_data_feed_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_market_data_feed_authorize(*, request_options: RequestOptionsOrDict | None = None) -> WebsocketAuthRedirectResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the socket endpoint URI for Market updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.websocket.get_market_data_feed_authorize()
    # TODO: Handle 'response' of type WebsocketAuthRedirectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketDataFeedAuthorizeErrorBody
```

**Async**

```python
try:
    response = await async_client.websocket.get_market_data_feed_authorize()
    # TODO: Handle 'response' of type WebsocketAuthRedirectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketDataFeedAuthorizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebsocketAuthRedirectResponse](upstox/models/websocket_auth_redirect_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetMarketDataFeedAuthorizeErrorBody](upstox/errors/get_market_data_feed_authorize_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_portfolio_stream_feed(*, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API redirects the client to the respective socket endpoint to receive Portfolio updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.websocket.get_portfolio_stream_feed(update_types="order,gtt_order,position,holding")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPortfolioStreamFeedErrorBody
```

**Async**

```python
try:
    await async_client.websocket.get_portfolio_stream_feed(update_types="order,gtt_order,position,holding")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPortfolioStreamFeedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>update_types</code> | <code>str \| None</code> | Identifiers separated by commas denote the types of updates to receive.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPortfolioStreamFeedErrorBody](upstox/errors/get_portfolio_stream_feed_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_portfolio_stream_feed_authorize(*, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None) -> WebsocketAuthRedirectResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.websocket.get_portfolio_stream_feed_authorize(update_types="order,gtt_order,position,holding")
    # TODO: Handle 'response' of type WebsocketAuthRedirectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPortfolioStreamFeedAuthorizeErrorBody
```

**Async**

```python
try:
    response = await async_client.websocket.get_portfolio_stream_feed_authorize(
        update_types="order,gtt_order,position,holding"
    )
    # TODO: Handle 'response' of type WebsocketAuthRedirectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPortfolioStreamFeedAuthorizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>update_types</code> | <code>str \| None</code> | Identifiers separated by commas denote the types of updates to receive.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebsocketAuthRedirectResponse](upstox/models/websocket_auth_redirect_response.py)</code> -- Successful

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[GetPortfolioStreamFeedAuthorizeErrorBody](upstox/errors/get_portfolio_stream_feed_authorize_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EventsControllerV2

> Source: [EventsControllerV2](upstox/apis/events_controller_v2.py)

<details>
<summary><code>def publish_event(body: EventRequest | EventRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EventResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events_controller_v2.publish_event(
        EventRequest(event_type="some example string", event="some example string")
    )
    # TODO: Handle 'response' of type EventResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishEventErrorBody
```

**Async**

```python
try:
    response = await async_client.events_controller_v2.publish_event(
        EventRequest(event_type="some example string", event="some example string")
    )
    # TODO: Handle 'response' of type EventResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishEventErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EventRequest](upstox/models/event_request.py) \| [EventRequestDict](upstox/models/event_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](upstox/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventResponse](upstox/models/event_response.py)</code> -- OK

**OnError**: <code>[ApiError](upstox/core/exceptions.py)&#91;[PublishEventErrorBody](upstox/errors/publish_event_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 405, 422, 423, 429, 500 | <code>[ApiGatewayErrorResponse](upstox/models/api_gateway_error_response.py)</code> |
| anything unmapped | <code>[RawError](upstox/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

