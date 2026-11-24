# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [DidLogicClient](did_logic/client.py)

## ApiAccess

> Source: [ApiAccess](did_logic/apis/api_access.py)

<details>
<summary><code>def capabilities_show(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1CapabilitiesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the API operations your key may call, and the account it belongs to.

Your account decides which parts of the API are open to it: API v1, buying and
browsing numbers, SIP accounts, Click2Call, call recordings, the ASR report,
sending SMS, risk checks and HLR lookups. This operation answers for any valid
key, whatever is enabled, so it is also the cheapest way to check that a key
works.

Each entry is an HTTP method and a path exactly as this reference spells it,
path parameters included (`/api/v1/sipaccounts/{id}`). An operation missing from
the list is refused for your account. Checks that depend on the request itself,
such as the number you ask for or a rate limit, are not reflected here.

This operation does not list itself. An invalid key gets `401 Unauthorized`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.api_access.capabilities_show()
    # TODO: Handle 'response' of type ApiV1CapabilitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CapabilitiesShowErrorBody
```

**Async**

```python
try:
    response = await async_client.api_access.capabilities_show()
    # TODO: Handle 'response' of type ApiV1CapabilitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CapabilitiesShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CapabilitiesResponse](did_logic/models/api_v1_capabilities_response.py)</code> -- Returns the operations open to this key and the account it belongs to

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[CapabilitiesShowErrorBody](did_logic/errors/capabilities_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV1Capabilities401Error1](did_logic/models/api_v1_capabilities401_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AccountBalance

> Source: [AccountBalance](did_logic/apis/account_balance.py)

<details>
<summary><code>def balance_show(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1BalanceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current account balance for the authenticated user.

**Balance Representation:**
- Returns balance in account currency (typically USD)
- Value is rounded to 2 decimal places
- Supports both JSON and plain text formats

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account_balance.balance_show()
    # TODO: Handle 'response' of type ApiV1BalanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BalanceShowErrorBody
```

**Async**

```python
try:
    response = await async_client.account_balance.balance_show()
    # TODO: Handle 'response' of type ApiV1BalanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BalanceShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1BalanceResponse](did_logic/models/api_v1_balance_response.py)</code> -- Successfully returns account balance in JSON format with 2 decimal places

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[BalanceShowErrorBody](did_logic/errors/balance_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Balance403Error1](did_logic/models/api_v1_balance403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Calls

> Source: [Calls](did_logic/apis/calls.py)

<details>
<summary><code>def call_price_show(a_number: str, b_number: str, sipaccount: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CallPriceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What a call from one of your SIP accounts to `b_number`, presenting `a_number` as the caller ID,
will be billed: the destination name, the per-minute price and the billing increment.

The quote replays what the platform does to the call before it is billed: the SIP account's
destination rewrite, its caller-ID restrictions, routing rules and caller-ID overrides. It then
rates the call with the same code billing uses: exact prices, origin-based rates and markup
included.

**Not modelled:**
- the carrier (trunk) chosen for the call, which can change the increment and, through the
caller ID it presents, the price;
- blocklists and allowlists: a destination that would be refused is still quoted;
- where the platform picks a caller ID at random, the first candidate is used.

Send `b_number` in E.164 (country code first). A national number is quoted only when the SIP
account has a rewrite rule that turns it into E.164.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.calls.call_price_show("+13125550100", "+447911123456", "100001")
    # TODO: Handle 'response' of type ApiV1CallPriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallPriceShowErrorBody
```

**Async**

```python
try:
    response = await async_client.calls.call_price_show("+13125550100", "+447911123456", "100001")
    # TODO: Handle 'response' of type ApiV1CallPriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallPriceShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>a_number</code> | <code>str</code> | Caller ID the call presents; up to 5 digits means anonymous |
| <code>b_number</code> | <code>str</code> | Number to call, E.164 (a leading + is accepted) |
| <code>sipaccount</code> | <code>str</code> | SIP account name from sipaccounts_index, the account placing the call |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallPriceResponse](did_logic/models/api_v1_call_price_response.py)</code> -- The price and increment the call will be billed at

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[CallPriceShowErrorBody](did_logic/errors/call_price_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ApiV1CallPrice404Error1](did_logic/models/api_v1_call_price404_error1.py)</code> |
| 422 | <code>[ApiV1CallPrice422Error1](did_logic/models/api_v1_call_price422_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def calls_recording(callid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single call recording file by its Call ID.

> ⚠️ **Important:** this endpoint is a fallback mechanism designed for
> recovering missing recordings when a delivery webhook failed or its
> short-lived URL expired. For production workflows, always use
> Call Recording Webhooks
> instead of polling this API.

The Call ID is all you need — the recording is searched for across the
whole period your account retains recordings, so a client that stored only
the Call ID can download the file.

### Rate limits & quotas

To prevent system overload, strict limits are enforced per user:

- **Request frequency:** max 1 request per second.
- **Recording lookups:** max 1 lookup per minute.

The per-minute quota is consumed by every search query, regardless of
whether a recording is found or the request returns `404 Not Found` —
searching for the file is the operation that costs resources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.calls.calls_recording("raw.call-id-1@example.com")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallsRecordingErrorBody
```

**Async**

```python
try:
    await async_client.calls.calls_recording("raw.call-id-1@example.com")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallsRecordingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>callid</code> | <code>str</code> | Call ID of the recording (required). Inbound callids are the encrypted webhook value. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[CallsRecordingErrorBody](did_logic/errors/calls_recording_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1CallsRecordingResponse1](did_logic/models/unions/api_v1_calls_recording_response1.py)</code> |
| 404, 429 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def calls_show(*, type_: Type1OrStr | None = None, missed: MissedOrStr | None = None, from_search: str | None = None, to_search: str | None = None, amd_status: str | None = None, hangup_cause: HangupCause1OrStr | None = None, filter_: str | None = None, sip_account: str | None = None, from_: Date | None = None, to: Date | None = None, all_: bool | None = False, page: int | None = 1, per_page: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> CdrListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of call detail records (CDR) with filtering and pagination options.

**Important notes:**
- Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and hangup cause
- Supports both JSON and CSV export formats
- Use pagination for large result sets
- Statistics include total count, duration, and cost

**When to use:**
- Generating call history reports
- Analyzing call patterns and costs
- Exporting billing data
- Monitoring SIP account usage

See also: calls_statistics, totals for the same filters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.calls.calls_show(
        type_=Type1.SIP,
        missed=Missed._1,
        from_search="1221",
        to_search="1800",
        amd_status="machine",
        hangup_cause=HangupCause1.AMD_MACHINE,
        sip_account="36465",
        from_=date(2025, 1, 1),
        to=date(2025, 1, 31),
        all_=False,
        page=1,
        per_page=100,
    )
    # TODO: Handle 'response' of type CdrListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.calls.calls_show(
        type_=Type1.SIP,
        missed=Missed._1,
        from_search="1221",
        to_search="1800",
        amd_status="machine",
        hangup_cause=HangupCause1.AMD_MACHINE,
        sip_account="36465",
        from_=date(2025, 1, 1),
        to=date(2025, 1, 31),
        all_=False,
        page=1,
        per_page=100,
    )
    # TODO: Handle 'response' of type CdrListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[Type1OrStr](did_logic/models/enums/type1.py) \| None</code> | Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls, incoming = received calls)<br>**Default**: <code>None</code> |
| <code>missed</code> | <code>[MissedOrStr](did_logic/models/enums/missed.py) \| None</code> | Include missed calls in results (0 = exclude, 1 = include)<br>**Default**: <code>None</code> |
| <code>from_search</code> | <code>str \| None</code> | Filter by caller phone number (partial match supported)<br>**Default**: <code>None</code> |
| <code>to_search</code> | <code>str \| None</code> | Filter by destination phone number (partial match supported)<br>**Default**: <code>None</code> |
| <code>amd_status</code> | <code>str \| None</code> | Return only calls with this answering machine detection (AMD) verdict, matched ignoring case:<br>- `machine` — AMD detected an answering machine<br>- `human` — AMD detected a person<br>- `notsure` — AMD ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout<br><br>Only outbound calls carry a verdict, so `type=incoming` with this filter returns no calls.<br>A value that no call has returns no calls.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored, as if the parameter were not sent.<br>**Default**: <code>None</code> |
| <code>hangup_cause</code> | <code>[HangupCause1OrStr](did_logic/models/enums/hangup_cause1.py) \| None</code> | Return only calls that ended this way, matched ignoring case:<br>- `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values<br>- `NORMAL_CLEARING` — the call was answered<br>- `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer<br>- `BUSY` — the called party was busy<br>- `FAILED` — the call could not be connected<br><br>A value that no call has returns no calls.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored, as if the parameter were not sent.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Filter by phone number (alphanumeric, spaces, hyphens, underscores)<br>**Default**: <code>None</code> |
| <code>sip_account</code> | <code>str \| None</code> | SIP account name from sipaccounts_index<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>Date \| None</code> | Start date for filtering (inclusive). Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>to</code> | <code>Date \| None</code> | End date for filtering (inclusive). Format YYYY-MM-DD<br>**Default**: <code>None</code> |
| <code>all_</code> | <code>bool \| None</code> | Return all records (ignores pagination). Use with caution for large datasets.<br>**Default**: <code>False</code> |
| <code>page</code> | <code>int \| None</code> | Page number to retrieve (1-based)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of records per page (max 1000)<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CdrListResponse](did_logic/models/cdr_list_response.py)</code> -- Successfully retrieved CDR records

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[CallsShowErrorBody](did_logic/errors/calls_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV1Calls401Error1](did_logic/models/api_v1_calls401_error1.py)</code> |
| 403 | <code>[ApiV1Calls403Error1](did_logic/models/api_v1_calls403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def calls_statistics(*, from_: str | None = None, to: str | None = None, sipfriend: str | None = None, search: int | None = None, amd_status: str | None = None, hangup_cause: HangupCause1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1CallsStatisticsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve aggregated call statistics including totals and counts.

**Response includes:**
- Placed calls: total cost and count
- Received calls: total cost and count
- Missed calls: count only
- All calls: combined total cost and count

Rows: calls_show.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.calls.calls_statistics(
        from_="2024-01-01",
        to="2024-12-31",
        sipfriend="39452",
        search=1234567890,
        amd_status="human",
        hangup_cause=HangupCause1.NORMAL_CLEARING,
    )
    # TODO: Handle 'response' of type ApiV1CallsStatisticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallsStatisticsErrorBody
```

**Async**

```python
try:
    response = await async_client.calls.calls_statistics(
        from_="2024-01-01",
        to="2024-12-31",
        sipfriend="39452",
        search=1234567890,
        amd_status="human",
        hangup_cause=HangupCause1.NORMAL_CLEARING,
    )
    # TODO: Handle 'response' of type ApiV1CallsStatisticsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallsStatisticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>str \| None</code> | Start date for filtering (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>to</code> | <code>str \| None</code> | End date for filtering (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>sipfriend</code> | <code>str \| None</code> | SIP account name from sipaccounts_index<br>**Default**: <code>None</code> |
| <code>search</code> | <code>int \| None</code> | Search term for filtering calls<br>**Default**: <code>None</code> |
| <code>amd_status</code> | <code>str \| None</code> | Count only calls with this answering machine detection (AMD) verdict, matched ignoring case:<br>- `machine` — AMD detected an answering machine<br>- `human` — AMD detected a person<br>- `notsure` — AMD ran but could not tell a machine from a person, for example on silence,<br>  unclear audio or a timeout<br><br>Only outbound calls carry a verdict, so under this filter the received and missed counts<br>and the received total are 0. A value that no call has gives zero counts and totals.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored,<br>as if the parameter were not sent.<br>**Default**: <code>None</code> |
| <code>hangup_cause</code> | <code>[HangupCause1OrStr](did_logic/models/enums/hangup_cause1.py) \| None</code> | Count only calls that ended this way, matched ignoring case:<br>- `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values<br>- `NORMAL_CLEARING` — the call was answered<br>- `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer<br>- `BUSY` — the called party was busy<br>- `FAILED` — the call could not be connected<br><br>A value that no call has gives zero counts and totals.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored,<br>as if the parameter were not sent.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsStatisticsResponse](did_logic/models/api_v1_calls_statistics_response.py)</code> -- returns call statistics

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[CallsStatisticsErrorBody](did_logic/errors/calls_statistics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1CallsStatistics403Error1](did_logic/models/api_v1_calls_statistics403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Click2Call

> Source: [Click2Call](did_logic/apis/click2_call.py)

<details>
<summary><code>def click2call_create(*, body: ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1Click2CallResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places one call: the platform connects the agent leg first and, once it
answers, dials the destination number (the customer leg) and bridges the
two. The agent leg is one of your SIP accounts by default, or your own
WebSocket endpoint with `a_type: stream`. The response is the call resource in its initial `accepted` state. Poll
`GET /api/v1/click2call/{id}` for progress. > **`a_type: stream` requires an endpoint that speaks our protocol.** The
> message shapes, the audio format and what answers the call are described in
> WebSocket Calls. ### States

`accepted` → `agent_ringing` → `agent_answered` → `customer_ringing` →
`bridged` → `completed`, with `failed` reachable from any of them. > **`agent_ringing` is best-effort.** It is derived from a ringing
> indication on the agent leg, which some user agents never send, so it may
> be skipped entirely — a call can go straight from `accepted` to
> `agent_answered`. Do not require `agent_ringing` in client logic. ### Webhooks

Pass `callback_url` and we POST a JSON body to it on every transition of the
call. It must be an `https` URL on a public host, at most 255 characters;
anything else is refused with `422` and no call is placed. Delivery is per
call — there is no per-account setting, and calls placed without the field
get no webhooks. | Event | Fires when |
|-------|-----------|
| `click2call.agent_ringing` | the agent leg starts ringing |
| `click2call.agent_answered` | the agent leg answers |
| `click2call.customer_ringing` | the destination is dialled |
| `click2call.bridged` | the two legs are bridged |
| `click2call.completed` | the call ends normally |
| `click2call.failed` | the call ends any other way |
| `click2call.finalized` | the billed record is committed |

The body is `{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}`,
where `data` is the same call resource this endpoint returns. New fields may
appear in `data` and new names in the `click2call.*` namespace at any time:
ignore what you do not recognise. > **`click2call.completed` and `.failed` fire immediately, with `cost` still
> `null`.** `click2call.finalized` follows once billing has settled and
> carries the priced document. The two can arrive out of order — `.finalized`
> does not mean nothing more is coming. Order is recoverable only from
> `event_seq`, which increases within a call. Requests are **not signed**. Treat the call id as unguessable, not as proof
of origin, and confirm anything that matters with
`GET /api/v1/click2call/{id}`. **Delivery.** Answer `2xx` within 15 seconds. A `408`, `429`, `5xx` or a
transport failure is retried up to five times with exponential backoff from
30 seconds, honouring `Retry-After`; any other `4xx` is treated as permanent
and never retried. Delivery is at-least-once, so the same `event_seq` can
arrive twice. ### Recordings

`recording_url` is `null` until the call is settled, and stays `null` for a
call that was not recorded. It rides in the same `data` of every
`click2call.*` webhook, so `click2call.finalized` is where it first appears. **Default.** `recording_url` is a signed S3 link valid for 1 hour. Each read
of the call (click2call_show) mints a fresh one. Once it has expired, fetch
the file through calls_recording. **Permanent links.** Enabled on request through your account manager or
support. `recording_url` becomes `/api/v1/recordings/{user_id}/{token}`,
which needs no authentication and answers `302` to a signed URL valid for
5 minutes, `404` when the recording is no longer retained or the option is
turned off, and `429` with `Retry-After` past the per-minute download limit. Details: recordings_show. ### Caller ID

While the agent's phone rings it shows the destination number as the
caller. Pass `a_cli` to show a number of your choice instead — for example
when your agents must not see where the call is going.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.click2_call.click2call_create(
        body=ApiV1Click2CallRequest(
            a_type=AType.SIP_ACCOUNT,
            a_endpoint="10001",
            b_number="+447700900000",
            callback_url="https://hooks.example.com/didlogic",
            client_call_id="order-42_ABC",
            a_cli="+442071234567",
        ),
    )
    # TODO: Handle 'response' of type ApiV1Click2CallResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Click2CallCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.click2_call.click2call_create(
        body=ApiV1Click2CallRequest(
            a_type=AType.SIP_ACCOUNT,
            a_endpoint="10001",
            b_number="+447700900000",
            callback_url="https://hooks.example.com/didlogic",
            client_call_id="order-42_ABC",
            a_cli="+442071234567",
        ),
    )
    # TODO: Handle 'response' of type ApiV1Click2CallResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Click2CallCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1Click2CallRequest](did_logic/models/api_v1_click2_call_request.py) \| [ApiV1Click2CallRequestDict](did_logic/models/api_v1_click2_call_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1Click2CallResponse](did_logic/models/api_v1_click2_call_response.py)</code> -- The call was placed. Poll the read operation for progress.

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[Click2CallCreateErrorBody](did_logic/errors/click2_call_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV1Click2Call401Error1](did_logic/models/api_v1_click2_call401_error1.py)</code> |
| 402 | <code>[ApiV1Click2Call402Error1](did_logic/models/api_v1_click2_call402_error1.py)</code> |
| 403 | <code>[ApiV1Click2Call403Error1](did_logic/models/api_v1_click2_call403_error1.py)</code> |
| 409 | <code>[ApiV1Click2Call409Error1](did_logic/models/api_v1_click2_call409_error1.py)</code> |
| 422 | <code>[ApiV1Click2Call422Error1](did_logic/models/api_v1_click2_call422_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def click2call_destroy(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hangs the call up, whatever leg it has reached — before anyone answered, or
mid-conversation. The response is `204 No Content` with an empty body.

### Repeating the cancel is safe

A repeated `DELETE` also answers `204`. The request is recorded once and
every repeat gets the same answer, so a client that retries on a timeout
cannot get a spurious failure. Do **not** read a second `204` as "there was
still a call to hang up".

### What the cancel shows up as

A cancel that actually ended the call reads back with `reason` `canceled`.
Its `state` is `completed` if the two legs had already been bridged, and
`failed` if the call was hung up before it came together.

If the call had **already** ended on its own before your `DELETE` arrived, its
original `reason` is kept — a call nobody answered still reads `no_answer`.
Cleaning up with a defensive `DELETE` therefore cannot hide why a call ended.

### `404`

`404 call_not_found` means the call is unknown to you: it never existed, the
ID is malformed, it belongs to another account, or it is older than the
12-hour retention window — which runs from when the call was **placed**, not
from when it ended. The cases are deliberately indistinguishable.

See also: click2call_show, which reads the call back after the cancel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.click2_call.click2call_destroy("01K0SPIKE0000000000000002A")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Click2CallDestroyErrorBody
```

**Async**

```python
try:
    await async_client.click2_call.click2call_destroy("01K0SPIKE0000000000000002A")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Click2CallDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Call ID (`data.id`) from click2call_create, a 26-character ULID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[Click2CallDestroyErrorBody](did_logic/errors/click2_call_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV1Click2Call401Error1](did_logic/models/api_v1_click2_call401_error1.py)</code> |
| 403 | <code>[ApiV1Click2Call403Error1](did_logic/models/api_v1_click2_call403_error1.py)</code> |
| 404 | <code>[ApiV1Click2Call404Error1](did_logic/models/api_v1_click2_call404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def click2call_show(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1Click2CallResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of one call. This is the polling endpoint: call it
until `state` is `completed` or `failed`.

### States

| State | Meaning |
|---|---|
| `accepted` | The call was placed; no leg has moved yet |
| `agent_ringing` | Your SIP account is ringing — **best-effort, may be skipped** |
| `agent_answered` | Your SIP account answered |
| `customer_ringing` | The destination is being dialled |
| `bridged` | Both legs are up and talking |
| `completed` | The call ended normally |
| `failed` | The call did not come together |

`agent_ringing` is derived from a ringing indication on the agent leg, which
some user agents never send. A call may therefore go straight from
`accepted` to `agent_answered`; clients must not require `agent_ringing`.

### `reason`

`reason` answers *why the call ended*, on its own axis from `state`. It is
`null` while the call is live **and** on a normal end. Otherwise it is one
of `no_answer`, `busy`, `unreachable`, `canceled`, `timed_out` or
`platform_error`. A call your own `DELETE` ended reports `canceled` —
including when it had already been answered, in which case `state` is
`completed`. A `DELETE` that arrives after the call has already ended leaves
the original reason in place.

### Retention

A call is readable for **12 hours from the moment it was placed** — not from
the moment it ended. After that the record is gone and this endpoint answers
`404`. Call history is a separate product surface.

### Recordings

`recording_url` is `null` until the call is settled, and stays `null` for a
call that was not recorded.

**Default.** `recording_url` is a signed S3 link valid for 1 hour, minted
fresh on each read. Once it has expired, fetch the file through
calls_recording.

**Permanent links.** Enabled on request through your account manager or
support. `recording_url` becomes `/api/v1/recordings/{user_id}/{token}`,
which needs no authentication and answers `302` to a signed URL valid for
5 minutes. It answers `404` when the recording is no longer retained or the
option is turned off, and `429` with `Retry-After` past the per-minute
download limit. Details: recordings_show.

This link is the `recording_url` returned by click2call_create,
click2call_show and their `click2call.*` webhooks, and sent in the
call-recording webhook. Without permanent links enabled, `recording_url`
holds a temporary pre-signed URL; to fetch a recording after it expires,
use calls_recording.

### `404`

`404 call_not_found` means the call is unknown to you: it never existed, the
ID is malformed, it belongs to another account, or it has fallen out of the
12-hour window. The cases are deliberately indistinguishable.

`data.recording_url` feeds recordings_show. See also: click2call_destroy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.click2_call.click2call_show("01K0SPIKE0000000000000002A")
    # TODO: Handle 'response' of type ApiV1Click2CallResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Click2CallShowErrorBody
```

**Async**

```python
try:
    response = await async_client.click2_call.click2call_show("01K0SPIKE0000000000000002A")
    # TODO: Handle 'response' of type ApiV1Click2CallResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Click2CallShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Call ID (`data.id`) from click2call_create, a 26-character ULID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1Click2CallResponse1](did_logic/models/api_v1_click2_call_response1.py)</code> -- The current state of the call.

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[Click2CallShowErrorBody](did_logic/errors/click2_call_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV1Click2Call401Error1](did_logic/models/api_v1_click2_call401_error1.py)</code> |
| 403 | <code>[ApiV1Click2Call403Error1](did_logic/models/api_v1_click2_call403_error1.py)</code> |
| 404 | <code>[ApiV1Click2Call404Error1](did_logic/models/api_v1_click2_call404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recordings_show(user_id: int, token: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads a call recording from the permanent link carried in `recording_url` when the
account has permanent recording links enabled. The link needs no authentication.

- `302` redirects to a signed download of the recording, valid for 5 minutes.
- `404` when the link is invalid, the recording is no longer retained, or permanent
recording links are turned off for the account.
- `429` with a `Retry-After` header when the account exceeds its per-minute download limit.

This link is the `recording_url` returned by click2call_create, click2call_show and their
`click2call.*` webhooks, and sent in the call-recording webhook.

Without permanent links enabled, `recording_url` holds a temporary pre-signed URL
instead; to fetch a recording after it expires, use calls_recording.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.click2_call.recordings_show(1234, "invalid-token")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordingsShowErrorBody
```

**Async**

```python
try:
    await async_client.click2_call.recordings_show(1234, "invalid-token")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordingsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>int</code> | User ID in the permanent `recording_url` from click2call_create, click2call_show |
| <code>token</code> | <code>str</code> | Encrypted recording token in the permanent `recording_url` from click2call_create, click2call_show |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[RecordingsShowErrorBody](did_logic/errors/recordings_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 429 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## HlrLookups

> Source: [HlrLookups](did_logic/apis/hlr_lookups.py)

<details>
<summary><code>def hlr_create(body: ApiV2HlrRequest | ApiV2HlrRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2HlrResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits phone numbers for an HLR (Home Location Register) lookup
(maximum 1500 numbers per request).

Numbers must be supplied in **E.164 format** (e.g. `+14155552671`); a leading `+`
is added automatically when omitted.

A single number resolves synchronously; larger batches are processed asynchronously — poll
hlr_history for results. Lookups are performed
independently of call setup and do not affect PDD. Results are not cached: each request
re-queries the provider.

`hlr_request.task_id` feeds hlr_history (`task_ids`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.hlr_lookups.hlr_create(ApiV2HlrRequest())
    # TODO: Handle 'response' of type ApiV2HlrResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HlrCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.hlr_lookups.hlr_create(ApiV2HlrRequest())
    # TODO: Handle 'response' of type ApiV2HlrResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HlrCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2HlrRequest](did_logic/models/api_v2_hlr_request.py) \| [ApiV2HlrRequestDict](did_logic/models/api_v2_hlr_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2HlrResponse](did_logic/models/api_v2_hlr_response.py)</code> -- returns the created HLR lookup task

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[HlrCreateErrorBody](did_logic/errors/hlr_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Hlr401Error1](did_logic/models/api_v2_hlr401_error1.py)</code> |
| 403 | <code>[ApiV2Hlr403Error1](did_logic/models/api_v2_hlr403_error1.py)</code> |
| 422 | <code>[ApiV2Hlr422Error1](did_logic/models/api_v2_hlr422_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hlr_history(*, ids: str | None = None, task_ids: str | None = None, number: str | None = None, number_start: int | None = None, status: Status1OrStr | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, processed_at_from: Date | None = None, processed_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiV2HlrHistoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the caller's HLR lookup logs — one per number checked — with the lookup result
(validity, carrier, MCC/MNC, phone type, ported and risky flags, country). Supports
filtering by number prefix, status, and date ranges, plus pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.hlr_lookups.hlr_history(
        number_start=1212,
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.DESC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2HlrHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HlrHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.hlr_lookups.hlr_history(
        number_start=1212,
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.DESC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2HlrHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HlrHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str \| None</code> | Filter logs by log IDs (comma-separated)<br>**Default**: <code>None</code> |
| <code>task_ids</code> | <code>str \| None</code> | Filter logs by task IDs (comma-separated), from hlr_create<br>**Default**: <code>None</code> |
| <code>number</code> | <code>str \| None</code> | Filter logs by specific phone numbers (comma-separated)<br>**Default**: <code>None</code> |
| <code>number_start</code> | <code>int \| None</code> | Filter logs by phone-number prefix (starts-with)<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1OrStr](did_logic/models/enums/status1.py) \| None</code> | Filter by status<br>**Default**: <code>None</code> |
| <code>created_at_from</code> | <code>Date \| None</code> | Filter created from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>created_at_to</code> | <code>Date \| None</code> | Filter created until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>processed_at_from</code> | <code>Date \| None</code> | Filter processed from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>processed_at_to</code> | <code>Date \| None</code> | Filter processed until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Field to sort by<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](did_logic/models/enums/order.py) \| None</code> | Sort order<br>**Default**: <code>Order.DESC</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2HlrHistoryResponse](did_logic/models/api_v2_hlr_history_response.py)</code> -- returns the caller HLR logs filtered by number prefix

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[HlrHistoryErrorBody](did_logic/errors/hlr_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2HlrHistory401Error1](did_logic/models/api_v2_hlr_history401_error1.py)</code> |
| 403 | <code>[ApiV2HlrHistory403Error1](did_logic/models/api_v2_hlr_history403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](did_logic/apis/identities.py)

<details>
<summary><code>def identities_create(body: ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2IdentitiesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new identity for document organization.

**Required Fields:**
- name - Identity name

`identity.id` feeds documents_index, documents_create, documents_update, identities_destroy and
numbers_purchase_update. Rows: identities_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.identities.identities_create(ApiV2IdentitiesRequest())
    # TODO: Handle 'response' of type ApiV2IdentitiesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentitiesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.identities.identities_create(ApiV2IdentitiesRequest())
    # TODO: Handle 'response' of type ApiV2IdentitiesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentitiesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2IdentitiesRequest](did_logic/models/api_v2_identities_request.py) \| [ApiV2IdentitiesRequestDict](did_logic/models/api_v2_identities_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2IdentitiesResponse1](did_logic/models/api_v2_identities_response1.py)</code> -- creates a new identity

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[IdentitiesCreateErrorBody](did_logic/errors/identities_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Identities401Error1](did_logic/models/api_v2_identities401_error1.py)</code> |
| 422 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def identities_destroy(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2IdentitiesResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an identity.

**Important notes:**
- Identity is archived and becomes inactive
- Cannot delete primary/default identity
- Associated documents are preserved

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.identities.identities_destroy(422)
    # TODO: Handle 'response' of type ApiV2IdentitiesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentitiesDestroyErrorBody
```

**Async**

```python
try:
    response = await async_client.identities.identities_destroy(422)
    # TODO: Handle 'response' of type ApiV2IdentitiesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentitiesDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Identity ID from identities_index, identities_create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2IdentitiesResponse2](did_logic/models/api_v2_identities_response2.py)</code> -- archives the identity

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[IdentitiesDestroyErrorBody](did_logic/errors/identities_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Identities401Error1](did_logic/models/api_v2_identities401_error1.py)</code> |
| 404 | <code>[ApiV2Identities404Error1](did_logic/models/api_v2_identities404_error1.py)</code> |
| 422 | <code>[ApiV2Identities422Error1](did_logic/models/api_v2_identities422_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def identities_index(*, ids: str | None = None, name: str | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiV2IdentitiesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of identities with filtering and pagination.

**Important notes:**
- Supports filtering by name, IDs, and date range
- Results can be sorted and paginated

`identities[].id` feeds documents_index, documents_create, documents_update, identities_destroy and
numbers_purchase_update. When `documents_count` is above zero, documents_index lists those documents
by `identity_id`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.identities.identities_index(
        ids="429,430",
        name="box",
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        order_by="name",
        order=Order.ASC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2IdentitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentitiesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.identities.identities_index(
        ids="429,430",
        name="box",
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        order_by="name",
        order=Order.ASC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2IdentitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IdentitiesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str \| None</code> | Filter identities by IDs (comma-separated); `identity_id` from documents_index, documents_show<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Filter identities by name (partial match)<br>**Default**: <code>None</code> |
| <code>created_at_from</code> | <code>Date \| None</code> | Filter identities created from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>created_at_to</code> | <code>Date \| None</code> | Filter identities created until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Field to sort by<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](did_logic/models/enums/order.py) \| None</code> | Sort order<br>**Default**: <code>Order.DESC</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2IdentitiesResponse](did_logic/models/api_v2_identities_response.py)</code> -- returns identities with documents count

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[IdentitiesIndexErrorBody](did_logic/errors/identities_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Identities401Error1](did_logic/models/api_v2_identities401_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## InboundDestinations

> Source: [InboundDestinations](did_logic/apis/inbound_destinations.py)

<details>
<summary><code>def purchases_destinations_create(purchase_id: str, body: ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PurchasesDestinationsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a new inbound destination for a DID number.

**Destination Types:**
- SIP addresses (e.g., `sip:user@domain.com`)
- Phone numbers (e.g., `18005551234`)
- Extensions (SIP accounts created within didlogic)

**Parameters:**
- `destination` - The forwarding target (SIP URI or phone number)
- `dialing_type` - Dialing mode: `sequence`, `ring_all` or `random`
- `callhunt` - Legacy two-state mirror of `dialing_type` (boolean); ignored when `dialing_type` is sent
- `active` - Enable/disable this destination (boolean)
- `transport` - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone,
12 = WebSocket)

`transport: 12` streams the call to a WebSocket endpoint of your own instead of
ringing a phone or a SIP device, and `destination` is then its public `wss://`
URL. It is available only to accounts enabled for voice streaming; any other
account is refused with `422`. The endpoint has to speak our protocol — see
WebSocket Calls.

`did_destination.id` feeds purchases_destinations_update and purchases_destinations_destroy as `id`.
Rows: purchases_destinations_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.inbound_destinations.purchases_destinations_create(
        "43800327987", ApiV1PurchasesDestinationsRequest(destination=Destination1(transport=Transport1.VALUE_1))
    )
    # TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.inbound_destinations.purchases_destinations_create(
        "43800327987", ApiV1PurchasesDestinationsRequest(destination=Destination1(transport=Transport1.VALUE_1))
    )
    # TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchase_id</code> | <code>str</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>body</code> | <code>[ApiV1PurchasesDestinationsRequest](did_logic/models/api_v1_purchases_destinations_request.py) \| [ApiV1PurchasesDestinationsRequestDict](did_logic/models/api_v1_purchases_destinations_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse1](did_logic/models/api_v1_purchases_destinations_response1.py)</code> -- Successfully creates destination and returns destination details

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[PurchasesDestinationsCreateErrorBody](did_logic/errors/purchases_destinations_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1PurchasesDestinations403Error1](did_logic/models/api_v1_purchases_destinations403_error1.py)</code> |
| 404, 422 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchases_destinations_destroy(purchase_id: str, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing inbound destination from a DID number.

**Important:**
- Destination is permanently removed from the DID configuration
- Deletion is logged for audit purposes

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.inbound_destinations.purchases_destinations_destroy("43800327987", 58)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.inbound_destinations.purchases_destinations_destroy("43800327987", 58)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchase_id</code> | <code>str</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>id_</code> | <code>int</code> | Destination id from purchases_destinations_index, purchases_destinations_create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[PurchasesDestinationsDestroyErrorBody](did_logic/errors/purchases_destinations_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1PurchasesDestinations403Error1](did_logic/models/api_v1_purchases_destinations403_error1.py)</code> |
| 404 | <code>[ApiV1PurchasesDestinationsResponse31](did_logic/models/unions/api_v1_purchases_destinations_response31.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchases_destinations_index(purchase_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PurchasesDestinationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of inbound destinations configured for a specific DID number.

**Destinations** define where incoming calls to a DID should be routed (SIP addresses, phone numbers, etc.).

**Features:**
- Returns only current (non-deleted) destinations
- Each destination includes active status and its dialing mode (`dialing_type`, with the legacy `callhunt` mirror)

`destination[].id` feeds purchases_destinations_update and purchases_destinations_destroy as `id`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.inbound_destinations.purchases_destinations_index("43800327987")
    # TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.inbound_destinations.purchases_destinations_index("43800327987")
    # TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchase_id</code> | <code>str</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse](did_logic/models/api_v1_purchases_destinations_response.py)</code> -- Successfully returns all current destinations for the specified DID

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[PurchasesDestinationsIndexErrorBody](did_logic/errors/purchases_destinations_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1PurchasesDestinations403Error1](did_logic/models/api_v1_purchases_destinations403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchases_destinations_update(purchase_id: str, id_: int, body: ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PurchasesDestinationsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing inbound destination for a DID number.

**Updatable Fields:**
- `dialing_type` - Dialing mode: `sequence`, `ring_all` or `random`
- `callhunt` - Legacy two-state mirror of `dialing_type`; ignored when `dialing_type` is sent
- `active` - Enable/disable this destination

**Note:** The destination address and transport protocol cannot be changed. To change these, delete and create a new destination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.inbound_destinations.purchases_destinations_update(
        "43800327987", 65, ApiV1PurchasesDestinationsRequest1()
    )
    # TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.inbound_destinations.purchases_destinations_update(
        "43800327987", 65, ApiV1PurchasesDestinationsRequest1()
    )
    # TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesDestinationsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchase_id</code> | <code>str</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>id_</code> | <code>int</code> | Destination id from purchases_destinations_index, purchases_destinations_create |
| <code>body</code> | <code>[ApiV1PurchasesDestinationsRequest1](did_logic/models/api_v1_purchases_destinations_request1.py) \| [ApiV1PurchasesDestinationsRequest1Dict](did_logic/models/api_v1_purchases_destinations_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse2](did_logic/models/api_v1_purchases_destinations_response2.py)</code> -- Successfully updates destination settings and returns updated destination

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[PurchasesDestinationsUpdateErrorBody](did_logic/errors/purchases_destinations_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1PurchasesDestinations403Error1](did_logic/models/api_v1_purchases_destinations403_error1.py)</code> |
| 404 | <code>[ApiV1PurchasesDestinationsResponse31](did_logic/models/unions/api_v1_purchases_destinations_response31.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## KycDocuments

> Source: [KycDocuments](did_logic/apis/kyc_documents.py)

<details>
<summary><code>def documents_countries(*, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2DocumentsCountriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the country names a document can be uploaded for.

The name is the exact value documents_create takes in `document[country]`; a code such as `UK` or `GB` is
refused. Narrow the list by part of the name with `name_contains`.

`countries[].name` feeds documents_create.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.kyc_documents.documents_countries(name_contains="land")
    # TODO: Handle 'response' of type ApiV2DocumentsCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.kyc_documents.documents_countries(name_contains="land")
    # TODO: Handle 'response' of type ApiV2DocumentsCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name_contains</code> | <code>str \| None</code> | Filter countries by name pattern (case-insensitive substring match)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsCountriesResponse](did_logic/models/api_v2_documents_countries_response.py)</code> -- returns list of countries

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsCountriesErrorBody](did_logic/errors/documents_countries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2DocumentsCountries401Error1](did_logic/models/api_v2_documents_countries401_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def documents_create(document_name: str, document_doc_type: DocumentDocTypeOrStr, document_files_frontside: FileInput, document_identity_id: int, document_country: str, *, document_files_backside: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2DocumentsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a new document for identity verification.

**Document Types:**
- `personal_id` - Personal ID
- `address_proof` - Proof of address
- `business_registration` - Business Registration
- `letter_of_intent` - Letter of Intent

**File Requirements:**
- Allowed extensions: jpg, jpeg, png, pdf
- Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]

`document_id` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
`document.files[].role` feeds documents_files_download_file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.kyc_documents.documents_create(
        "some example string", DocumentDocType.PERSONAL_ID, Path("path/to/file.bin"), 470, "United Kingdom"
    )
    # TODO: Handle 'response' of type ApiV2DocumentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.kyc_documents.documents_create(
        "some example string", DocumentDocType.PERSONAL_ID, Path("path/to/file.bin"), 470, "United Kingdom"
    )
    # TODO: Handle 'response' of type ApiV2DocumentsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>document_name</code> | <code>str</code> | Document name |
| <code>document_doc_type</code> | <code>[DocumentDocTypeOrStr](did_logic/models/enums/document_doc_type.py)</code> | Document type |
| <code>document_files_frontside</code> | <code>FileInput</code> | Frontside file upload (binary) |
| <code>document_identity_id</code> | <code>int</code> | Identity ID to associate the document with, from identities_index, identities_create |
| <code>document_country</code> | <code>str</code> | Country name from documents_countries, e.g. `United Kingdom`; a code such as `UK` or `GB` is refused. For `letter_of_intent` the country of the purchased number is stored instead |
| <code>document_files_backside</code> | <code>FileInput \| None</code> | Backside file upload (binary, Personal ID only)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse1](did_logic/models/api_v2_documents_response1.py)</code> -- creates a new document

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsCreateErrorBody](did_logic/errors/documents_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Documents401Error1](did_logic/models/api_v2_documents401_error1.py)</code> |
| 422 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def documents_destroy(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a document by ID.

**Important notes:**
- Document is permanently removed
- Cannot be undone

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.kyc_documents.documents_destroy(480)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.kyc_documents.documents_destroy(480)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Document ID from documents_index, documents_create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsDestroyErrorBody](did_logic/errors/documents_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Documents401Error1](did_logic/models/api_v2_documents401_error1.py)</code> |
| 404 | <code>[ApiV2Documents404Error1](did_logic/models/api_v2_documents404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def documents_files_download_file(id_: int, role: RoleOrStr, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a specific document file by role (frontside/backside).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.kyc_documents.documents_files_download_file(500, Role.FRONTSIDE)
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsFilesDownloadFileErrorBody
```

**Async**

```python
try:
    response = await async_client.kyc_documents.documents_files_download_file(500, Role.FRONTSIDE)
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsFilesDownloadFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Document ID from documents_index, documents_show, documents_create |
| <code>role</code> | <code>[RoleOrStr](did_logic/models/enums/role.py)</code> | File role, `files[].role` from documents_index, documents_show, documents_create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- returns file with proper headers and content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsFilesDownloadFileErrorBody](did_logic/errors/documents_files_download_file_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2DocumentsFiles401Error1](did_logic/models/api_v2_documents_files401_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def documents_index(*, ids: str | None = None, identity_id: int | None = None, approvement_status: ApprovementStatusOrStr | None = None, upload_date_from: Date | None = None, upload_date_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiV2DocumentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of documents with filtering and pagination.

**Important notes:**
- Supports filtering by approval status, identity ID, and date range
- Results can be sorted and paginated

`documents[].id` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
`documents[].files[].role` feeds documents_files_download_file; `documents[].identity_id` feeds
identities_index. Full record: documents_show.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.kyc_documents.documents_index(
        ids="493,494",
        identity_id=480,
        approvement_status=ApprovementStatus.APPROVED,
        upload_date_from=date(2026, 11, 2),
        upload_date_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.ASC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2DocumentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.kyc_documents.documents_index(
        ids="493,494",
        identity_id=480,
        approvement_status=ApprovementStatus.APPROVED,
        upload_date_from=date(2026, 11, 2),
        upload_date_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.ASC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2DocumentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str \| None</code> | Filter documents by IDs (comma-separated)<br>**Default**: <code>None</code> |
| <code>identity_id</code> | <code>int \| None</code> | Filter documents by identity ID from identities_index, identities_create<br>**Default**: <code>None</code> |
| <code>approvement_status</code> | <code>[ApprovementStatusOrStr](did_logic/models/enums/approvement_status.py) \| None</code> | Filter documents by approval status<br>**Default**: <code>None</code> |
| <code>upload_date_from</code> | <code>Date \| None</code> | Filter documents created from this date<br>**Default**: <code>None</code> |
| <code>upload_date_to</code> | <code>Date \| None</code> | Filter documents created until this date<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Field to sort by<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](did_logic/models/enums/order.py) \| None</code> | Sort order<br>**Default**: <code>Order.DESC</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse](did_logic/models/api_v2_documents_response.py)</code> -- returns documents from specified identity

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsIndexErrorBody](did_logic/errors/documents_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Documents401Error1](did_logic/models/api_v2_documents401_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def documents_show(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2DocumentsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a document by ID.

`document.files[].role` feeds documents_files_download_file; `document.identity_id` feeds identities_index.
Rows: documents_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.kyc_documents.documents_show(488)
    # TODO: Handle 'response' of type ApiV2DocumentsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.kyc_documents.documents_show(488)
    # TODO: Handle 'response' of type ApiV2DocumentsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Document ID from documents_index, documents_create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse2](did_logic/models/api_v2_documents_response2.py)</code> -- returns the document details

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsShowErrorBody](did_logic/errors/documents_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Documents401Error1](did_logic/models/api_v2_documents401_error1.py)</code> |
| 404 | <code>[ApiV2Documents404Error1](did_logic/models/api_v2_documents404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def documents_update(id_: int, body: ApiV2DocumentsRequest | ApiV2DocumentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2DocumentsResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing document's name or identity.

`document_id` feeds documents_show.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.kyc_documents.documents_update(485, ApiV2DocumentsRequest())
    # TODO: Handle 'response' of type ApiV2DocumentsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.kyc_documents.documents_update(485, ApiV2DocumentsRequest())
    # TODO: Handle 'response' of type ApiV2DocumentsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DocumentsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Document ID from documents_index, documents_create |
| <code>body</code> | <code>[ApiV2DocumentsRequest](did_logic/models/api_v2_documents_request.py) \| [ApiV2DocumentsRequestDict](did_logic/models/api_v2_documents_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse3](did_logic/models/api_v2_documents_response3.py)</code> -- updates the document

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[DocumentsUpdateErrorBody](did_logic/errors/documents_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Documents401Error1](did_logic/models/api_v2_documents401_error1.py)</code> |
| 404 | <code>[ApiV2Documents404Error1](did_logic/models/api_v2_documents404_error1.py)</code> |
| 422 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NumbersInventory

> Source: [NumbersInventory](did_logic/apis/numbers_inventory.py)

<details>
<summary><code>def numbers_countries_cities_dids_index(country_id: int, city_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersCountriesCitiesDidsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve paginated list of available DID numbers in a specific city.

**Important notes:**
- For countries without regions (UK, Netherlands, etc.)
- Results are paginated (default 25 per page)
- Includes full pricing and feature details for each number
- Use for countries where regions are not applicable

**When to use:**
- Displaying available numbers after city selection
- Browsing DID inventory by location
- Non-US/Canada purchase flows

`dids.dids[].id` feeds numbers_purchase_create (`id_in`). `dids.dids[].number` feeds
numbers_purchase_create (`did_numbers`). See also: numbers_search_show.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_countries_cities_dids_index(757, 789)
    # TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesDidsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesCitiesDidsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_countries_cities_dids_index(757, 789)
    # TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesDidsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesCitiesDidsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country_id</code> | <code>int</code> | Country id from numbers_countries_index |
| <code>city_id</code> | <code>int</code> | City id from numbers_countries_cities_index, numbers_countries_locations_index |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesCitiesDidsResponse](did_logic/models/api_v2_numbers_countries_cities_dids_response.py)</code> -- returns list of available dids

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersCountriesCitiesDidsIndexErrorBody](did_logic/errors/numbers_countries_cities_dids_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersCountriesCitiesDids401Error1](did_logic/models/api_v2_numbers_countries_cities_dids401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersCountriesCitiesDids403Error1](did_logic/models/api_v2_numbers_countries_cities_dids403_error1.py)</code> |
| 404 | <code>[ApiV2NumbersCountriesCitiesDids404Error1](did_logic/models/api_v2_numbers_countries_cities_dids404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_countries_cities_index(country_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersCountriesCitiesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of cities within a country where DID numbers are available.

**Important notes:**
- For a country with `has_provinces_or_states`, numbers_search_show narrows to one state by its `region_id` from numbers_countries_regions_index
- Each city includes count of available DIDs
- Cities are returned with area codes

**When to use:**
- Building city selection for countries without states
- Checking DID availability by city
- Displaying available locations to users

`cities[].id` feeds numbers_countries_cities_dids_index and numbers_search_show (`city_id`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_countries_cities_index(794)
    # TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesCitiesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_countries_cities_index(794)
    # TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesCitiesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country_id</code> | <code>int</code> | Country id from numbers_countries_index |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesCitiesResponse](did_logic/models/api_v2_numbers_countries_cities_response.py)</code> -- returns list of cities

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersCountriesCitiesIndexErrorBody](did_logic/errors/numbers_countries_cities_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersCountriesCities401Error1](did_logic/models/api_v2_numbers_countries_cities401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersCountriesCities403Error1](did_logic/models/api_v2_numbers_countries_cities403_error1.py)</code> |
| 404 | <code>[ApiV2NumbersCountriesCities404Error1](did_logic/models/api_v2_numbers_countries_cities404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_countries_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersCountriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all countries where DID numbers are available.

**When to use:**
- Building country selection interface
- Checking number availability by country
- Starting the DID purchase flow

`countries[].id` feeds numbers_countries_cities_index, numbers_countries_regions_index,
numbers_countries_locations_index and numbers_countries_cities_dids_index (`country_id`).
`countries[].name` feeds numbers_search_show (`country_name_contains`). A country with
`has_provinces_or_states` true lists its states in numbers_countries_regions_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_countries_index()
    # TODO: Handle 'response' of type ApiV2NumbersCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_countries_index()
    # TODO: Handle 'response' of type ApiV2NumbersCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesResponse](did_logic/models/api_v2_numbers_countries_response.py)</code> -- returns list of available countries

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersCountriesIndexErrorBody](did_logic/errors/numbers_countries_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersCountries401Error1](did_logic/models/api_v2_numbers_countries401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersCountries403Error1](did_logic/models/api_v2_numbers_countries403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_countries_locations_index(country_id: int, prefix: int, *, sms_enabled: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersCountriesLocationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for locations (cities) that have DID numbers starting with a specific prefix.

**Important notes:**
- Useful for finding locations with specific area codes
- Prefix can be partial number (e.g., "212" for NYC area code)
- Returns combined location information (country, state, city)

**When to use:**
- Implementing "vanity number" search by prefix
- Finding locations with specific area codes
- Reverse lookup of number to location

`locations[].city_id` feeds numbers_countries_cities_dids_index and numbers_search_show
(`city_id`). `locations[].state_id` feeds numbers_search_show (`region_id`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_countries_locations_index(0, 212, sms_enabled="true")
    # TODO: Handle 'response' of type ApiV2NumbersCountriesLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesLocationsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_countries_locations_index(0, 212, sms_enabled="true")
    # TODO: Handle 'response' of type ApiV2NumbersCountriesLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesLocationsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country_id</code> | <code>int</code> | Country id from numbers_countries_index |
| <code>prefix</code> | <code>int</code> | Number prefix to search for |
| <code>sms_enabled</code> | <code>str \| None</code> | Filter locations by SMS capability<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesLocationsResponse](did_logic/models/api_v2_numbers_countries_locations_response.py)</code> -- returns list of locations

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersCountriesLocationsIndexErrorBody](did_logic/errors/numbers_countries_locations_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersCountriesLocations401Error1](did_logic/models/api_v2_numbers_countries_locations401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersCountriesLocations403Error1](did_logic/models/api_v2_numbers_countries_locations403_error1.py)</code> |
| 404 | <code>[ApiV2NumbersCountriesLocations404Error1](did_logic/models/api_v2_numbers_countries_locations404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_countries_regions_index(country_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersCountriesRegionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).

**Important notes:**
- Only applicable for countries with `has_provinces_or_states: true`
- Returns 404 for countries without regional divisions
- A state's numbers are listed by numbers_search_show with the state's `region_id`

**When to use:**
- Building state/province selection for US, Canada, etc.
- Filtering DID search by region

`regions[].id` feeds numbers_search_show (`region_id`). `regions[].name` feeds
numbers_search_show (`state_name_contains`, United States only).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_countries_regions_index(768)
    # TODO: Handle 'response' of type ApiV2NumbersCountriesRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesRegionsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_countries_regions_index(768)
    # TODO: Handle 'response' of type ApiV2NumbersCountriesRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersCountriesRegionsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country_id</code> | <code>int</code> | Country id from numbers_countries_index |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesRegionsResponse](did_logic/models/api_v2_numbers_countries_regions_response.py)</code> -- returns list of regions

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersCountriesRegionsIndexErrorBody](did_logic/errors/numbers_countries_regions_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersCountriesRegions401Error1](did_logic/models/api_v2_numbers_countries_regions401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersCountriesRegions403Error1](did_logic/models/api_v2_numbers_countries_regions403_error1.py)</code> |
| 404 | <code>[ApiV2NumbersCountriesRegions404Error1](did_logic/models/api_v2_numbers_countries_regions404_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_index(*, show_all: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of DID numbers purchased by the authenticated user.

**Important notes:**
- Returns only active numbers by default
- Use `show_all=true` to include numbers pending document approval
- Includes service information (SMS, etc.)
- Shows current status of each number

**When to use:**
- Displaying user's number inventory
- Checking number status
- Listing numbers for configuration
- Dashboard display

`dids[].id` feeds numbers_purchase_update and numbers_purchase_destroy (`id`, `id_in[]`).
`dids[].number` feeds numbers_purchase_destroy (`did_numbers[]`). `dids[].id` feeds
purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
purchases_destinations_destroy (`purchase_id`, which takes the number too). `dids[].identity_id`
feeds identities_index and numbers_purchase_update (`ids`, `identity_id`). See also: purchases_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_index(show_all="true")
    # TODO: Handle 'response' of type ApiV2NumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_index(show_all="true")
    # TODO: Handle 'response' of type ApiV2NumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>show_all</code> | <code>str \| None</code> | Include numbers pending documentation approval<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersResponse](did_logic/models/api_v2_numbers_response.py)</code> -- returns DIDs

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersIndexErrorBody](did_logic/errors/numbers_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2Numbers401Error1](did_logic/models/api_v2_numbers401_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_purchase_create(body: ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersPurchaseResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purchase one or more DID numbers with identity document association.

**Important notes:**
- Can purchase multiple numbers in a single request
- Identities must contain required documents for the number's country

**When to use:**
- Purchasing numbers with document verification
- Bulk number purchase with identity association

`purchase.purchases[].id` feeds numbers_purchase_update and numbers_purchase_destroy (`id`, `id_in[]`).
`purchase.purchases[].id` feeds purchases_destinations_index and purchases_destinations_create
(`purchase_id`). `purchase.purchases[].number` feeds numbers_purchase_destroy (`did_numbers[]`).
See also: numbers_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_purchase_create(ApiV2NumbersPurchaseRequest())
    # TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersPurchaseCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_purchase_create(ApiV2NumbersPurchaseRequest())
    # TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersPurchaseCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2NumbersPurchaseRequest](did_logic/models/api_v2_numbers_purchase_request.py) \| [ApiV2NumbersPurchaseRequestDict](did_logic/models/api_v2_numbers_purchase_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersPurchaseResponse](did_logic/models/api_v2_numbers_purchase_response.py)</code> -- purchase DIDs and link documents attached to identity

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersPurchaseCreateErrorBody](did_logic/errors/numbers_purchase_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV2NumbersPurchase400Error1](did_logic/models/api_v2_numbers_purchase400_error1.py)</code> |
| 401 | <code>[ApiV2NumbersPurchase401Error1](did_logic/models/api_v2_numbers_purchase401_error1.py)</code> |
| 422 | <code>[ApiV2NumbersPurchaseResponse11](did_logic/models/unions/api_v2_numbers_purchase_response11.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_purchase_destroy(*, id_in: list[int] | None = None, did_numbers: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersPurchaseResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel purchase of DID numbers and return them to inventory.

**Important notes:**
- Can cancel multiple numbers in a single request
- Numbers are returned to seller's inventory
- Optional quarantine period before number becomes available again
- Refund policy depends on service terms
- A number still inside its commitment term is charged the early-return
fee for the remaining months, the same fee as in the portal

**When to use:**
- User wants to cancel number purchase
- Returning numbers after unsuccessful activation
- Bulk number release

**Partial cancellation:** Numbers not present in your cancelable inventory
are skipped (not cancelled) and reported in the `warnings` array with code
`not_in_inventory`. If none of the requested numbers are cancelable, the
request returns `422`.

A number that is cancelable but whose cancellation fails is reported with
code `cancellation_failed` and is omitted from `dids`; it remains in your
inventory and is still billable. A request where every number fails this
way returns `200` with an empty `dids` array.

A number whose early-return fee your balance does not cover is not
cancelled and not charged. It is reported with code `insufficient_funds`,
is omitted from `dids`, and remains in your inventory.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_purchase_destroy(
        id_in=[1001, 1002], did_numbers=["12125551234", "12125551235"]
    )
    # TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersPurchaseDestroyErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_purchase_destroy(
        id_in=[1001, 1002], did_numbers=["12125551234", "12125551235"]
    )
    # TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersPurchaseDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_in</code> | <code>list&#91;int&#93; \| None</code> | Array of DID IDs to cancel, from numbers_index<br>**Default**: <code>None</code> |
| <code>did_numbers</code> | <code>list&#91;str&#93; \| None</code> | Array of DID numbers to cancel, from numbers_index, purchases_index<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersPurchaseResponse3](did_logic/models/api_v2_numbers_purchase_response3.py)</code> -- cancels owned numbers and reports skipped ones as warnings

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersPurchaseDestroyErrorBody](did_logic/errors/numbers_purchase_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersPurchase401Error1](did_logic/models/api_v2_numbers_purchase401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersPurchase403Error1](did_logic/models/api_v2_numbers_purchase403_error1.py)</code> |
| 422 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_purchase_update(body: ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersPurchaseResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a purchased DID number's identity association or call recording setting.

**Important notes:**
- New identity must contain required documents for the number
- `call_recording_enabled` requires the account-level "Allow call recording" setting to be on; returns 422 otherwise

**Other normalizations applied silently on number purchase/update:**
- Webphone destinations (`transport=10`) are resolved server-side.
- Boolean-like fields are coerced to booleans.
- Destination strings are normalized.
- SMS delivery-receipt (`dlr`) and Sender-ID settings follow account
defaults when omitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_purchase_update(ApiV2NumbersPurchaseRequest1())
    # TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersPurchaseUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_purchase_update(ApiV2NumbersPurchaseRequest1())
    # TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersPurchaseUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2NumbersPurchaseRequest1](did_logic/models/api_v2_numbers_purchase_request1.py) \| [ApiV2NumbersPurchaseRequest1Dict](did_logic/models/api_v2_numbers_purchase_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersPurchaseResponse2](did_logic/models/api_v2_numbers_purchase_response2.py)</code> -- updates purchased number

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersPurchaseUpdateErrorBody](did_logic/errors/numbers_purchase_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersPurchase401Error1](did_logic/models/api_v2_numbers_purchase401_error1.py)</code> |
| 422, 500 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_search_show(*, id_in: int | None = None, number_in: str | None = None, number_contains: int | None = None, begins_with: int | None = None, ends_with: int | None = None, city_name_contains: str | None = None, country_name_contains: str | None = None, state_name_contains: str | None = None, sms_enabled: str | None = None, no_local_cli: str | None = None, vendor_id: int | None = None, city_id: int | None = None, region_id: int | None = None, require_docs: int | None = None, commitment_months: int | None = None, cheap_sorting: str | None = None, page: int | None = 1, per_page: int | None = 25, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Advanced search for available DID numbers with multiple filter criteria.

**Important notes:**
- Supports pagination (page, per_page parameters)
- All filter parameters are optional
- Combine multiple filters for precise results
- Use for complex search scenarios beyond location-based browsing

**When to use:**
- Implementing vanity number search
- Finding numbers with specific features
- Custom number selection interfaces
- Bulk number lookup

`dids.dids[].id` feeds numbers_purchase_create (`id_in`). `dids.dids[].number` feeds
numbers_purchase_create (`did_numbers`). See also: numbers_countries_cities_dids_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.numbers_inventory.numbers_search_show(
        id_in=960,
        number_in="12125551234,12125559876",
        number_contains=555,
        begins_with=121,
        ends_with=1234,
        city_name_contains="YORK",
        country_name_contains="United States",
        state_name_contains="York",
        sms_enabled="true",
        no_local_cli="false",
        vendor_id=2660,
        city_id=818,
        region_id=86,
        require_docs=1,
        commitment_months=12,
        cheap_sorting="false",
        page=1,
        per_page=25,
    )
    # TODO: Handle 'response' of type ApiV2NumbersSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersSearchShowErrorBody
```

**Async**

```python
try:
    response = await async_client.numbers_inventory.numbers_search_show(
        id_in=960,
        number_in="12125551234,12125559876",
        number_contains=555,
        begins_with=121,
        ends_with=1234,
        city_name_contains="YORK",
        country_name_contains="United States",
        state_name_contains="York",
        sms_enabled="true",
        no_local_cli="false",
        vendor_id=2660,
        city_id=818,
        region_id=86,
        require_docs=1,
        commitment_months=12,
        cheap_sorting="false",
        page=1,
        per_page=25,
    )
    # TODO: Handle 'response' of type ApiV2NumbersSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersSearchShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_in</code> | <code>int \| None</code> | Search for specific DID IDs (comma-separated)<br>**Default**: <code>None</code> |
| <code>number_in</code> | <code>str \| None</code> | Search for specific numbers (exact match, comma-separated)<br>**Default**: <code>None</code> |
| <code>number_contains</code> | <code>int \| None</code> | Search for numbers containing this pattern<br>**Default**: <code>None</code> |
| <code>begins_with</code> | <code>int \| None</code> | Search for numbers beginning with this pattern<br>**Default**: <code>None</code> |
| <code>ends_with</code> | <code>int \| None</code> | Search for numbers ending with this pattern<br>**Default**: <code>None</code> |
| <code>city_name_contains</code> | <code>str \| None</code> | Filter by city name (partial match)<br>**Default**: <code>None</code> |
| <code>country_name_contains</code> | <code>str \| None</code> | Filter by country name (partial match), from numbers_countries_index<br>**Default**: <code>None</code> |
| <code>state_name_contains</code> | <code>str \| None</code> | Filter by state/region name (partial match, US only), from numbers_countries_regions_index<br>**Default**: <code>None</code> |
| <code>sms_enabled</code> | <code>str \| None</code> | Filter by SMS capability (true/false)<br>**Default**: <code>None</code> |
| <code>no_local_cli</code> | <code>str \| None</code> | Filter by local caller ID capability (true/false)<br>**Default**: <code>None</code> |
| <code>vendor_id</code> | <code>int \| None</code> | Filter by vendor ID (requires special permission)<br>**Default**: <code>None</code> |
| <code>city_id</code> | <code>int \| None</code> | City id from numbers_countries_cities_index, numbers_countries_locations_index<br>**Default**: <code>None</code> |
| <code>region_id</code> | <code>int \| None</code> | Region id from numbers_countries_regions_index, numbers_countries_locations_index<br>**Default**: <code>None</code> |
| <code>require_docs</code> | <code>int \| None</code> | Filter by document requirements<br>**Default**: <code>None</code> |
| <code>commitment_months</code> | <code>int \| None</code> | Filter by commitment period in months<br>**Default**: <code>None</code> |
| <code>cheap_sorting</code> | <code>str \| None</code> | Sort by price (activation + monthly fee) ascending<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>25</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersSearchResponse](did_logic/models/api_v2_numbers_search_response.py)</code> -- returns search results

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersSearchShowErrorBody](did_logic/errors/numbers_search_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersSearch401Error1](did_logic/models/api_v2_numbers_search401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersSearch403Error1](did_logic/models/api_v2_numbers_search403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Purchases

> Source: [Purchases](did_logic/apis/purchases.py)

<details>
<summary><code>def purchases_index(*, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiV1PurchasesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of DID numbers purchased by the authenticated user.

**Features:**
- Ordered by most recent first
- Pagination: 100 DIDs per page (max 1000)
- Available in JSON and CSV formats

**Returned Information:**
- DID number and status
- Purchase and expiration dates
- Monthly cost and features
- SMS/voice capabilities

`purchases[].number` feeds purchases_destinations_index, purchases_destinations_create,
purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and
sms_create: it is the `purchase_id` of the destination operations, an entry of `did_numbers[]`
when releasing numbers, and `sm[source]` when the number has SMS enabled. See also: numbers_index,
the same numbers with their inventory id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.purchases.purchases_index(page=1, per_page=10)
    # TODO: Handle 'response' of type ApiV1PurchasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.purchases.purchases_index(page=1, per_page=10)
    # TODO: Handle 'response' of type ApiV1PurchasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasesIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesResponse](did_logic/models/api_v1_purchases_response.py)</code> -- Successfully returns paginated list of purchased DID numbers in JSON format

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[PurchasesIndexErrorBody](did_logic/errors/purchases_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Purchases403Error1](did_logic/models/api_v1_purchases403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](did_logic/apis/reports.py)

<details>
<summary><code>def asr_report_show(start_date: str, end_date: str, *, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.

**ASR Metrics:**
- Number of calls
- Talk time in minutes
- ASR: Percentage of calls successfully connected
- Average call duration (ACD)

**Requirements:**
- Date range is required (start_date and end_date)
- Dates must be in YYYY-MM-DD format
- On success returns CSV; 400 and 403 errors return JSON

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.asr_report_show("2024-01-01", "2024-12-31")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsrReportShowErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.asr_report_show("2024-01-01", "2024-12-31")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsrReportShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start_date</code> | <code>str</code> | Report start date (YYYY-MM-DD format) |
| <code>end_date</code> | <code>str</code> | Report end date (YYYY-MM-DD format) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Successfully returns ASR metrics report in CSV format

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[AsrReportShowErrorBody](did_logic/errors/asr_report_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](did_logic/models/error.py)</code> |
| 403 | <code>[ApiV1AsrReportResponse1](did_logic/models/unions/api_v1_asr_report_response1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transactions_index(start_date: Date, end_date: Date, type_: str, *, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export account transaction history as a CSV file for a date range and
transaction type(s).

**Requirements:**
- start_date, end_date and type are all required
- Dates must be in YYYY-MM-DD format
- `type` accepts one or more comma-separated values from the list below

**Transaction types:** adjustments, paypal_in, paypal_out, cc_in, stripe_in,
google_pay_in, apple_pay_in, wire_transfer, call, call_fix_fee, connection,
sip, webcall, sms, inbound_sms, activation, month, subscription, porting,
surcharge, risk_check, call_recording, hlr_lookup, amd, paid_overstamping,
service_charge, x_transfer, refund, channel

`service_charge`, `x_transfer` and `refund` are manual withdrawals booked by
our accounting team: a fee for a service we provided, a transfer of funds to
another account, and a refund of funds to you.

**Response:** The caller receives the generated CSV payload. The internal
redirect used to fetch that file is an implementation detail and is not
part of the public contract.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.transactions_index(date(2024, 1, 1), date(2024, 1, 31), "call")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.transactions_index(date(2024, 1, 1), date(2024, 1, 31), "call")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransactionsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start_date</code> | <code>Date</code> | Start of the reporting period (YYYY-MM-DD) |
| <code>end_date</code> | <code>Date</code> | End of the reporting period (YYYY-MM-DD) |
| <code>type_</code> | <code>str</code> | Comma-separated transaction type(s); see the operation description for the full list of accepted values. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Returns the generated transactions CSV file

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[TransactionsIndexErrorBody](did_logic/errors/transactions_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](did_logic/models/error.py)</code> |
| 403 | <code>[ApiV1Transactions403Error1](did_logic/models/api_v1_transactions403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RiskChecks

> Source: [RiskChecks](did_logic/apis/risk_checks.py)

<details>
<summary><code>def numbers_risk_checks_create(body: ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersRiskChecksResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per request).

`risk_check_request.task_id` feeds numbers_risk_checks_index and numbers_risk_checks_logs (`task_ids`):
the task status and the per-number results.

**Note:** Results are informational only. Use at your own discretion.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_checks.numbers_risk_checks_create(ApiV2NumbersRiskChecksRequest())
    # TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersRiskChecksCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_checks.numbers_risk_checks_create(ApiV2NumbersRiskChecksRequest())
    # TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersRiskChecksCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2NumbersRiskChecksRequest](did_logic/models/api_v2_numbers_risk_checks_request.py) \| [ApiV2NumbersRiskChecksRequestDict](did_logic/models/api_v2_numbers_risk_checks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersRiskChecksResponse1](did_logic/models/api_v2_numbers_risk_checks_response1.py)</code> -- returns created risk check task

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersRiskChecksCreateErrorBody](did_logic/errors/numbers_risk_checks_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersRiskChecks401Error1](did_logic/models/api_v2_numbers_risk_checks401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersRiskChecks403Error1](did_logic/models/api_v2_numbers_risk_checks403_error1.py)</code> |
| 422 | <code>[ApiV2NumbersRiskChecksResponse21](did_logic/models/unions/api_v2_numbers_risk_checks_response21.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_risk_checks_index(*, task_ids: str | None = None, status: StatusDidlogicComRiskChecksApiOrStr | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, processed_at_from: Date | None = None, processed_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersRiskChecksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of risk check tasks.

Returns information about all risk check tasks created by your organization,
including task status, number counts, and processing timestamps. Supports filtering by various criteria and pagination.

`tasks[].id` feeds numbers_risk_checks_logs (`task_ids`). Rows: numbers_risk_checks_logs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_checks.numbers_risk_checks_index(
        task_ids="111,112",
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        processed_at_from=date(2026, 11, 2),
        processed_at_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.DESC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersRiskChecksIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_checks.numbers_risk_checks_index(
        task_ids="111,112",
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        processed_at_from=date(2026, 11, 2),
        processed_at_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.DESC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersRiskChecksIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_ids</code> | <code>str \| None</code> | Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDidlogicComRiskChecksApiOrStr](did_logic/models/enums/status_didlogic_com_risk_checks_api.py) \| None</code> | Filter by status<br>**Default**: <code>None</code> |
| <code>created_at_from</code> | <code>Date \| None</code> | Filter created from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>created_at_to</code> | <code>Date \| None</code> | Filter created until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>processed_at_from</code> | <code>Date \| None</code> | Filter processed from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>processed_at_to</code> | <code>Date \| None</code> | Filter processed until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Field to sort by<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](did_logic/models/enums/order.py) \| None</code> | Sort order<br>**Default**: <code>Order.DESC</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersRiskChecksResponse](did_logic/models/api_v2_numbers_risk_checks_response.py)</code> -- returns risk check tasks

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersRiskChecksIndexErrorBody](did_logic/errors/numbers_risk_checks_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersRiskChecks401Error1](did_logic/models/api_v2_numbers_risk_checks401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersRiskChecks403Error1](did_logic/models/api_v2_numbers_risk_checks403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbers_risk_checks_logs(*, ids: str | None = None, task_ids: int | None = None, number: str | None = None, status: StatusDidlogicComRiskChecksApiOrStr | None = None, risk_level: RiskLevelOrStr | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, processed_at_from: Date | None = None, processed_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiV2NumbersRiskChecksLogsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves risk check logs for individual phone numbers.

Returns detailed information about each number that was checked, including its risk level,
status, and processing time. Supports filtering by various criteria and pagination.

`logs[].task_id` feeds numbers_risk_checks_index (`task_ids`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_checks.numbers_risk_checks_logs(
        ids="171,172",
        task_ids=101,
        number="79991234567,79991234568",
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        processed_at_from=date(2026, 11, 2),
        processed_at_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.DESC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2NumbersRiskChecksLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersRiskChecksLogsErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_checks.numbers_risk_checks_logs(
        ids="171,172",
        task_ids=101,
        number="79991234567,79991234568",
        created_at_from=date(2026, 11, 2),
        created_at_to=date(2026, 11, 4),
        processed_at_from=date(2026, 11, 2),
        processed_at_to=date(2026, 11, 4),
        order_by="created_at",
        order=Order.DESC,
        page=1,
        per_page=10,
    )
    # TODO: Handle 'response' of type ApiV2NumbersRiskChecksLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbersRiskChecksLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str \| None</code> | Filter logs by log IDs (comma-separated)<br>**Default**: <code>None</code> |
| <code>task_ids</code> | <code>int \| None</code> | Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index<br>**Default**: <code>None</code> |
| <code>number</code> | <code>str \| None</code> | Filter logs by specific phone numbers (comma-separated)<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusDidlogicComRiskChecksApiOrStr](did_logic/models/enums/status_didlogic_com_risk_checks_api.py) \| None</code> | Filter by status<br>**Default**: <code>None</code> |
| <code>risk_level</code> | <code>[RiskLevelOrStr](did_logic/models/enums/risk_level.py) \| None</code> | Filter logs by risk level<br>**Default**: <code>None</code> |
| <code>created_at_from</code> | <code>Date \| None</code> | Filter created from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>created_at_to</code> | <code>Date \| None</code> | Filter created until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>processed_at_from</code> | <code>Date \| None</code> | Filter processed from this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>processed_at_to</code> | <code>Date \| None</code> | Filter processed until this date (YYYY-MM-DD)<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Field to sort by<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](did_logic/models/enums/order.py) \| None</code> | Sort order<br>**Default**: <code>Order.DESC</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>1</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of items per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersRiskChecksLogsResponse](did_logic/models/api_v2_numbers_risk_checks_logs_response.py)</code> -- returns risk check logs

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[NumbersRiskChecksLogsErrorBody](did_logic/errors/numbers_risk_checks_logs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiV2NumbersRiskChecksLogs401Error1](did_logic/models/api_v2_numbers_risk_checks_logs401_error1.py)</code> |
| 403 | <code>[ApiV2NumbersRiskChecksLogs403Error1](did_logic/models/api_v2_numbers_risk_checks_logs403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SipAccounts

> Source: [SipAccounts](did_logic/apis/sip_accounts.py)

<details>
<summary><code>def sipaccounts_allowed_ips_create(sipaccount_id: str, body: ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsAllowedIpsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add IP address to SIP account whitelist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_accounts.sipaccounts_allowed_ips_create(
        "01234", ApiV1SipaccountsAllowedIpsRequest(ip="some example string")
    )
    # TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsAllowedIpsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_accounts.sipaccounts_allowed_ips_create(
        "01234", ApiV1SipaccountsAllowedIpsRequest(ip="some example string")
    )
    # TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsAllowedIpsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sipaccount_id</code> | <code>str</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>body</code> | <code>[ApiV1SipaccountsAllowedIpsRequest](did_logic/models/api_v1_sipaccounts_allowed_ips_request.py) \| [ApiV1SipaccountsAllowedIpsRequestDict](did_logic/models/api_v1_sipaccounts_allowed_ips_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsAllowedIpsResponse1](did_logic/models/api_v1_sipaccounts_allowed_ips_response1.py)</code> -- Successfully adds IP to whitelist

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsAllowedIpsCreateErrorBody](did_logic/errors/sipaccounts_allowed_ips_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1SipaccountsAllowedIps403Error1](did_logic/models/api_v1_sipaccounts_allowed_ips403_error1.py)</code> |
| 404, 422 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_allowed_ips_destroy(sipaccount_id: str, ip: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove IP address from SIP account whitelist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.sip_accounts.sipaccounts_allowed_ips_destroy("01234", "1.2.3.4")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsAllowedIpsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.sip_accounts.sipaccounts_allowed_ips_destroy("01234", "1.2.3.4")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsAllowedIpsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sipaccount_id</code> | <code>str</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>ip</code> | <code>str</code> | IP address to remove, from sipaccounts_allowed_ips_index |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsAllowedIpsDestroyErrorBody](did_logic/errors/sipaccounts_allowed_ips_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1SipaccountsAllowedIps403Error1](did_logic/models/api_v1_sipaccounts_allowed_ips403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_allowed_ips_index(sipaccount_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsAllowedIpsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve list of IP addresses allowed to authenticate this SIP account.

`allowed_ips` feeds sipaccounts_allowed_ips_destroy as `ip`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_accounts.sipaccounts_allowed_ips_index("01234")
    # TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsAllowedIpsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_accounts.sipaccounts_allowed_ips_index("01234")
    # TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsAllowedIpsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sipaccount_id</code> | <code>str</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsAllowedIpsResponse](did_logic/models/api_v1_sipaccounts_allowed_ips_response.py)</code> -- Successfully returns list of allowed IP addresses

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsAllowedIpsIndexErrorBody](did_logic/errors/sipaccounts_allowed_ips_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1SipaccountsAllowedIps403Error1](did_logic/models/api_v1_sipaccounts_allowed_ips403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_create(body: ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new SIP account (trunk) for making/receiving calls.

`sipaccount.id` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy;
each also takes `sipaccount.name` in its place. `sipaccount.name` feeds call_price_show,
calls_show and click2call_create as the SIP account to price, filter by or ring.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_accounts.sipaccounts_create(
        ApiV1SipaccountsRequest(sipaccount=Sipaccount1(label="some example string", password="some example string"))
    )
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_accounts.sipaccounts_create(
        ApiV1SipaccountsRequest(sipaccount=Sipaccount1(label="some example string", password="some example string"))
    )
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SipaccountsRequest](did_logic/models/api_v1_sipaccounts_request.py) \| [ApiV1SipaccountsRequestDict](did_logic/models/api_v1_sipaccounts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse2](did_logic/models/api_v1_sipaccounts_response2.py)</code> -- Successfully creates SIP account and returns credentials

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsCreateErrorBody](did_logic/errors/sipaccounts_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1SipaccountsResponse11](did_logic/models/unions/api_v1_sipaccounts_response11.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_destroy(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a SIP account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.sip_accounts.sipaccounts_destroy("01234")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsDestroyErrorBody
```

**Async**

```python
try:
    await async_client.sip_accounts.sipaccounts_destroy("01234")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsDestroyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsDestroyErrorBody](did_logic/errors/sipaccounts_destroy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Sipaccounts403Error1](did_logic/models/api_v1_sipaccounts403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_index(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve list of SIP accounts (trunks) configured for the authenticated user.

**SIP Accounts** allow making/receiving calls through the platform using SIP protocol.

**Returned Information:**
- Account credentials and settings
- Call routing configuration
- Usage limits and restrictions
- Allowed IP addresses (if configured)

Technical accounts the platform manages for you — the Webphone account and
each SDK token's account (labelled `SDK Instance: `) — are
listed too, but cannot be fetched by id, updated or deleted through this API.

`sipaccounts[].id` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy;
each also takes `sipaccounts[].name` in its place. `sipaccounts[].name` feeds call_price_show,
calls_show and click2call_create as the SIP account to price, filter by or ring. Full record:
sipaccounts_show.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_accounts.sipaccounts_index()
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_accounts.sipaccounts_index()
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse](did_logic/models/api_v1_sipaccounts_response.py)</code> -- Successfully returns list of SIP accounts with configuration details

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsIndexErrorBody](did_logic/errors/sipaccounts_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1SipaccountsResponse11](did_logic/models/unions/api_v1_sipaccounts_response11.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_show(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsResponse4</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific SIP account.

Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_accounts.sipaccounts_show("01234")
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse4
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_accounts.sipaccounts_show("01234")
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse4
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse4](did_logic/models/api_v1_sipaccounts_response4.py)</code> -- Successfully returns SIP account configuration and settings

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsShowErrorBody](did_logic/errors/sipaccounts_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Sipaccounts403Error1](did_logic/models/api_v1_sipaccounts403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sipaccounts_update(id_: str, body: ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsResponse5</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update SIP account settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_accounts.sipaccounts_update("01234", ApiV1SipaccountsRequest1())
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse5
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_accounts.sipaccounts_update("01234", ApiV1SipaccountsRequest1())
    # TODO: Handle 'response' of type ApiV1SipaccountsResponse5
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SipaccountsUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>body</code> | <code>[ApiV1SipaccountsRequest1](did_logic/models/api_v1_sipaccounts_request1.py) \| [ApiV1SipaccountsRequest1Dict](did_logic/models/api_v1_sipaccounts_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse5](did_logic/models/api_v1_sipaccounts_response5.py)</code> -- Successfully updates SIP account settings

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SipaccountsUpdateErrorBody](did_logic/errors/sipaccounts_update_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Sipaccounts403Error1](did_logic/models/api_v1_sipaccounts403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SmsApi

> Source: [SmsApi](did_logic/apis/sms_api.py)

<details>
<summary><code>def sms_create(body: ApiV1SmsRequest | ApiV1SmsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SmsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an SMS message from a DID number owned by the authenticated user.

**Requirements:**
- Source DID must be owned by user
- Source DID must have SMS enabled
- Sufficient account balance for SMS cost
- Valid destination phone number

**Cost:**
- Charged per segment (160 characters)
- Price varies by destination country

`sms.id` feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sms_api.sms_create(
        ApiV1SmsRequest(
            sm=Sm1(source="some example string", destination="some example string", message="some example string")
        ),
    )
    # TODO: Handle 'response' of type ApiV1SmsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SmsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.sms_api.sms_create(
        ApiV1SmsRequest(
            sm=Sm1(source="some example string", destination="some example string", message="some example string")
        ),
    )
    # TODO: Handle 'response' of type ApiV1SmsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SmsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SmsRequest](did_logic/models/api_v1_sms_request.py) \| [ApiV1SmsRequestDict](did_logic/models/api_v1_sms_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SmsResponse1](did_logic/models/api_v1_sms_response1.py)</code> -- Successfully sends SMS message and returns details with ID

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SmsCreateErrorBody](did_logic/errors/sms_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](did_logic/models/error.py)</code> |
| 403 | <code>[ApiV1Sms403Error1](did_logic/models/api_v1_sms403_error1.py)</code> |
| 422 | <code>[ApiV1SmsResponse21](did_logic/models/unions/api_v1_sms_response21.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sms_index(*, page: str | None = "1", per_page: str | None = "20", request_options: RequestOptionsOrDict | None = None) -> ApiV1SmsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve paginated list of SMS messages sent by the authenticated user.
Note: Contact your account manager to set up a Relay URL for inbound messages.

`sms[].id` feeds sms_show. Full record: sms_show.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sms_api.sms_index()
    # TODO: Handle 'response' of type ApiV1SmsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SmsIndexErrorBody
```

**Async**

```python
try:
    response = await async_client.sms_api.sms_index()
    # TODO: Handle 'response' of type ApiV1SmsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SmsIndexErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>str \| None</code> | Page number for pagination (starts from 1)<br>**Default**: <code>"1"</code> |
| <code>per_page</code> | <code>str \| None</code> | Number of items per page<br>**Default**: <code>"20"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SmsResponse](did_logic/models/api_v1_sms_response.py)</code> -- Successfully returns paginated list of sent SMS messages

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SmsIndexErrorBody](did_logic/errors/sms_index_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Sms403Error1](did_logic/models/api_v1_sms403_error1.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sms_show(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SmsResponse3</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific SMS message sent by the authenticated user.

**Returned Information:**
- SMS ID and status
- Source and destination numbers
- Message content
- Delivery status and timestamps
- Cost and segment count

Rows: sms_index.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sms_api.sms_show(0)
    # TODO: Handle 'response' of type ApiV1SmsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SmsShowErrorBody
```

**Async**

```python
try:
    response = await async_client.sms_api.sms_show(0)
    # TODO: Handle 'response' of type ApiV1SmsResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SmsShowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | SMS message id from sms_index, sms_create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](did_logic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SmsResponse3](did_logic/models/api_v1_sms_response3.py)</code> -- Successfully returns SMS message details including status and timestamps

**OnError**: <code>[ApiError](did_logic/core/exceptions.py)&#91;[SmsShowErrorBody](did_logic/errors/sms_show_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV1Sms403Error1](did_logic/models/api_v1_sms403_error1.py)</code> |
| 404 | <code>[Error](did_logic/models/error.py)</code> |
| anything unmapped | <code>[RawError](did_logic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

