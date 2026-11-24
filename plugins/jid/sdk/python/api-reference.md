# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [JidClient](jid/client.py)

## Monitors

> Source: [Monitors](jid/apis/monitors.py)

<details>
<summary><code>def create_monitor(body: V1MonitorsRequest | V1MonitorsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.monitors.create_monitor(V1MonitorsRequest(entity_id="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMonitorErrorBody
```

**Async**

```python
try:
    response = await async_client.monitors.create_monitor(V1MonitorsRequest(entity_id="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMonitorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MonitorsRequest](jid/models/v1_monitors_request.py) \| [V1MonitorsRequestDict](jid/models/v1_monitors_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Created. webhook_secret is returned once.

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[CreateMonitorErrorBody](jid/errors/create_monitor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_monitor(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.monitors.delete_monitor("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMonitorErrorBody
```

**Async**

```python
try:
    await async_client.monitors.delete_monitor("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMonitorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[DeleteMonitorErrorBody](jid/errors/delete_monitor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitors(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.monitors.list_monitors()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorsErrorBody
```

**Async**

```python
try:
    response = await async_client.monitors.list_monitors()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Monitors

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[ListMonitorsErrorBody](jid/errors/list_monitors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](jid/apis/search.py)

<details>
<summary><code>def search_businesses(q: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers, French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5 business units, filed on demand, listed first).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.search_businesses("some example string")
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchBusinessesErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_businesses("some example string")
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchBusinessesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>str \| None</code> | ISO 3166-1 alpha-2. FR also searches the French SIRENE register live.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](jid/models/search_response.py)</code> -- Candidates

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[SearchBusinessesErrorBody](jid/errors/search_businesses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignalApi

> Source: [SignalApi](jid/apis/signal_api.py)

<details>
<summary><code>def signal(*, tz: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SignalResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify or /v1/screen as `signal`. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signal_api.signal()
    # TODO: Handle 'response' of type V1SignalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SignalErrorBody
```

**Async**

```python
try:
    response = await async_client.signal_api.signal()
    # TODO: Handle 'response' of type V1SignalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SignalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tz</code> | <code>str \| None</code> | Browser IANA time zone<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SignalResponse](jid/models/v1_signal_response.py)</code> -- Token

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[SignalErrorBody](jid/errors/signal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Verify

> Source: [Verify](jid/apis/verify.py)

<details>
<summary><code>def get_business_file(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.verify.get_business_file("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBusinessFileErrorBody
```

**Async**

```python
try:
    response = await async_client.verify.get_business_file("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBusinessFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- File

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[GetBusinessFileErrorBody](jid/errors/get_business_file_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 404, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_receipt(receipt_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Receipt</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or counterparty. Verify `signature.sig` over the canonical statement with the key at /.well-known/jid-keys.json.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verify.get_receipt("some example string")
    # TODO: Handle 'response' of type Receipt
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.verify.get_receipt("some example string")
    # TODO: Handle 'response' of type Receipt
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>receipt_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Receipt](jid/models/receipt.py)</code> -- Receipt

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[GetReceiptErrorBody](jid/errors/get_receipt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_activities(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.verify.list_activities()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.verify.list_activities()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Rules

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[RawError](jid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_business(id_: str, *, activity: ActivityOrStr | None = None, jurisdiction: str | None = None, amount: float | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VerifyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts (unchanged since 1.0). With any of them: also `decision` (proceed | review | stop | insufficient_data) with reasons, and `receipt` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check are unknown and lead to review.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.verify.verify_business("some example string")
    # TODO: Handle 'response' of type VerifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyBusinessErrorBody
```

**Async**

```python
try:
    response = await async_client.verify.verify_business("some example string")
    # TODO: Handle 'response' of type VerifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyBusinessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi). |
| <code>activity</code> | <code>[ActivityOrStr](jid/models/enums/activity.py) \| None</code> | What the business is about to do for you. Default general_commerce when jurisdiction or amount is given. Rules: https://jid.com/decision-rules<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code.<br>**Default**: <code>None</code> |
| <code>amount</code> | <code>float \| None</code> | Transaction amount. Context only: recorded on the receipt, never changes the rules.<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>str \| None</code> | ISO 4217 code for amount. Default USD.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerifyResponse](jid/models/verify_response.py)</code> -- The file, and the decision when requested

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[VerifyBusinessErrorBody](jid/errors/verify_business_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 404, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Qualify

> Source: [Qualify](jid/apis/qualify.py)

<details>
<summary><code>def get_results(ids: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ResultsResponse</code></summary>

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
    response = client.qualify.get_results("some example string")
    # TODO: Handle 'response' of type V1ResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.qualify.get_results("some example string")
    # TODO: Handle 'response' of type V1ResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Comma-separated qual_ ids, up to 200 |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ResultsResponse](jid/models/v1_results_response.py)</code> -- Results

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[GetResultsErrorBody](jid/errors/get_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def qualify_counterparty(body: V1QualifyRequest2 | V1QualifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> Qualification</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons), a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only: personal webmail, a disposable address or no confident business match returns assessment individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing decisions about individuals.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.qualify.qualify_counterparty(V1QualifyRequest(email="some example string"))
    # TODO: Handle 'response' of type Qualification
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QualifyCounterpartyErrorBody
```

**Async**

```python
try:
    response = await async_client.qualify.qualify_counterparty(V1QualifyRequest(email="some example string"))
    # TODO: Handle 'response' of type Qualification
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QualifyCounterpartyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1QualifyRequest2](jid/models/unions/v1_qualify_request2.py) \| [V1QualifyRequest2Dict](jid/models/unions/v1_qualify_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Qualification](jid/models/qualification.py)</code> -- Qualification

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[QualifyCounterpartyErrorBody](jid/errors/qualify_counterparty_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def record_outcome(body: V1OutcomesRequest | V1OutcomesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1OutcomesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link. Free. Stored without personal data for 13 months; outcomes tune the published rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.qualify.record_outcome(V1OutcomesRequest())
    # TODO: Handle 'response' of type V1OutcomesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordOutcomeErrorBody
```

**Async**

```python
try:
    response = await async_client.qualify.record_outcome(V1OutcomesRequest())
    # TODO: Handle 'response' of type V1OutcomesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordOutcomeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1OutcomesRequest](jid/models/v1_outcomes_request.py) \| [V1OutcomesRequestDict](jid/models/v1_outcomes_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OutcomesResponse](jid/models/v1_outcomes_response.py)</code> -- Recorded

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[RecordOutcomeErrorBody](jid/errors/record_outcome_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 410 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Screen

> Source: [Screen](jid/apis/screen.py)

<details>
<summary><code>def email_check(body: V1EmailCheckRequest | V1EmailCheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether the From domain or a business display name imitates a known company's registered domain. Returns checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no AI.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screen.email_check(V1EmailCheckRequest(headers="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmailCheckErrorBody
```

**Async**

```python
try:
    response = await async_client.screen.email_check(V1EmailCheckRequest(headers="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmailCheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1EmailCheckRequest](jid/models/v1_email_check_request.py) \| [V1EmailCheckRequestDict](jid/models/v1_email_check_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Checks and read

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[EmailCheckErrorBody](jid/errors/email_check_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def screen(body: V1ScreenRequest | V1ScreenRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ScreenResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url, email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence, subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version 2026-10-05.2: https://jid.com/screen-rules

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screen.screen(V1ScreenRequest())
    # TODO: Handle 'response' of type ScreenResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScreenErrorBody
```

**Async**

```python
try:
    response = await async_client.screen.screen(V1ScreenRequest())
    # TODO: Handle 'response' of type ScreenResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScreenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ScreenRequest](jid/models/v1_screen_request.py) \| [V1ScreenRequestDict](jid/models/v1_screen_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScreenResult](jid/models/screen_result.py)</code> -- Screen result

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[ScreenErrorBody](jid/errors/screen_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def screen_get(*, domain: str | None = None, url: str | None = None, email: str | None = None, phone: str | None = None, company_name: str | None = None, name: str | None = None, context: str | None = None, policy: str | None = None, amount: float | None = None, country: str | None = None, ip_country: str | None = None, ip_region: str | None = None, ip_asn: str | None = None, browser_timezone: str | None = None, stated_country: str | None = None, signal: str | None = None, site: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ScreenResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same as POST /v1/screen, with the fields as query parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screen.screen_get()
    # TODO: Handle 'response' of type ScreenResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScreenGetErrorBody
```

**Async**

```python
try:
    response = await async_client.screen.screen_get()
    # TODO: Handle 'response' of type ScreenResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScreenGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>phone</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>company_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>context</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>policy</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>amount</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ip_country</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ip_region</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ip_asn</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>browser_timezone</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>stated_country</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>signal</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>site</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](jid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScreenResult](jid/models/screen_result.py)</code> -- Screen result

**OnError**: <code>[ApiError](jid/core/exceptions.py)&#91;[ScreenGetErrorBody](jid/errors/screen_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 429 | <code>[Error](jid/models/error.py)</code> |
| anything unmapped | <code>[RawError](jid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

