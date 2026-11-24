# Reference

> Source: [DidLogicClient](src/client.ts)

## AccountBalance

> Source: [AccountBalance](src/resources/account-balance.ts)

<details>
<summary><code>balanceShow(options?: RequestOptions): ApiPromise&lt;ApiV1BalanceResponse, AccountBalance.BalanceShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountBalance.balanceShow();
  // TODO: Handle 'response' of type ApiV1BalanceResponse
} catch (err) {
  // TODO: Handle 'err' of type AccountBalance.BalanceShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountBalance.balanceShow().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1BalanceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountBalance.balanceShow()`

- **OnSuccess**: <code>[ApiV1BalanceResponse](src/models/api-v1-balance-response.ts)</code>
- **OnError**: throws <code>[AccountBalance.BalanceShowError](src/resources/account-balance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountBalance.balanceShow().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1BalanceResponse, AccountBalance.BalanceShowError&gt;</code>, with `result.value` of type <code>[ApiV1BalanceResponse](src/models/api-v1-balance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ApiAccess

> Source: [ApiAccess](src/resources/api-access.ts)

<details>
<summary><code>capabilitiesShow(options?: RequestOptions): ApiPromise&lt;ApiV1CapabilitiesResponse, ApiAccess.CapabilitiesShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiAccess.capabilitiesShow();
  // TODO: Handle 'response' of type ApiV1CapabilitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiAccess.CapabilitiesShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiAccess.capabilitiesShow().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CapabilitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiAccess.capabilitiesShow()`

- **OnSuccess**: <code>[ApiV1CapabilitiesResponse](src/models/api-v1-capabilities-response.ts)</code>
- **OnError**: throws <code>[ApiAccess.CapabilitiesShowError](src/resources/api-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiAccess.capabilitiesShow().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CapabilitiesResponse, ApiAccess.CapabilitiesShowError&gt;</code>, with `result.value` of type <code>[ApiV1CapabilitiesResponse](src/models/api-v1-capabilities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Calls

> Source: [Calls](src/resources/calls.ts)

<details>
<summary><code>callPriceShow(request: Calls.CallPriceShowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CallPriceResponse, Calls.CallPriceShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callPriceShow({
    aNumber: "+13125550100",
    bNumber: "+447911123456",
    sipaccount: "100001",
  });
  // TODO: Handle 'response' of type ApiV1CallPriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallPriceShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls
  .callPriceShow({ aNumber: "+13125550100", bNumber: "+447911123456", sipaccount: "100001" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CallPriceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aNumber</code> | <code>string</code> | Caller ID the call presents; up to 5 digits means anonymous |
| <code>bNumber</code> | <code>string</code> | Number to call, E.164 (a leading + is accepted) |
| <code>sipaccount</code> | <code>string</code> | SIP account name from sipaccounts_index, the account placing the call |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callPriceShow(request)`

- **OnSuccess**: <code>[ApiV1CallPriceResponse](src/models/api-v1-call-price-response.ts)</code>
- **OnError**: throws <code>[Calls.CallPriceShowError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callPriceShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CallPriceResponse, Calls.CallPriceShowError&gt;</code>, with `result.value` of type <code>[ApiV1CallPriceResponse](src/models/api-v1-call-price-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsRecording(request: Calls.CallsRecordingRequest, options?: RequestOptions): ApiPromise&lt;undefined, Calls.CallsRecordingError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.calls.callsRecording({ callid: "raw.call-id-1@example.com" });
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsRecordingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsRecording({ callid: "raw.call-id-1@example.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>callid</code> | <code>string</code> | Call ID of the recording (required). Inbound callids are the encrypted webhook value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsRecording(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Calls.CallsRecordingError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsRecording(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Calls.CallsRecordingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsShow(request?: Calls.CallsShowRequest, options?: RequestOptions): ApiPromise&lt;CdrListResponse, Calls.CallsShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsShow({
    type: Type1.Sip,
    missed: Missed._1,
    fromSearch: "1221",
    toSearch: "1800",
    amdStatus: "machine",
    hangupCause: HangupCause1.AmdMachine,
    sipAccount: "36465",
    from: "2025-01-01",
    to: "2025-01-31",
    all: false,
    page: 1,
    perPage: 100,
  });
  // TODO: Handle 'response' of type CdrListResponse
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls
  .callsShow({
    type: Type1.Sip,
    missed: Missed._1,
    fromSearch: "1221",
    toSearch: "1800",
    amdStatus: "machine",
    hangupCause: HangupCause1.AmdMachine,
    sipAccount: "36465",
    from: "2025-01-01",
    to: "2025-01-31",
    all: false,
    page: 1,
    perPage: 100,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CdrListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type?</code> | <code>[Type1](src/models/type1.ts)</code> | Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls, incoming = received calls) |
| <code>missed?</code> | <code>[Missed](src/models/missed.ts)</code> | Include missed calls in results (0 = exclude, 1 = include) |
| <code>fromSearch?</code> | <code>string</code> | Filter by caller phone number (partial match supported) |
| <code>toSearch?</code> | <code>string</code> | Filter by destination phone number (partial match supported) |
| <code>amdStatus?</code> | <code>string</code> | Return only calls with this answering machine detection (AMD) verdict, matched ignoring case:<br>- `machine` — AMD detected an answering machine<br>- `human` — AMD detected a person<br>- `notsure` — AMD ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout<br><br>Only outbound calls carry a verdict, so `type=incoming` with this filter returns no calls.<br>A value that no call has returns no calls.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored, as if the parameter were not sent. |
| <code>hangupCause?</code> | <code>[HangupCause1](src/models/hangup-cause1.ts)</code> | Return only calls that ended this way, matched ignoring case:<br>- `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values<br>- `NORMAL_CLEARING` — the call was answered<br>- `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer<br>- `BUSY` — the called party was busy<br>- `FAILED` — the call could not be connected<br><br>A value that no call has returns no calls.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored, as if the parameter were not sent. |
| <code>filter?</code> | <code>string</code> | Filter by phone number (alphanumeric, spaces, hyphens, underscores) |
| <code>sipAccount?</code> | <code>string</code> | SIP account name from sipaccounts_index |
| <code>from?</code> | <code>string</code> (date) | Start date for filtering (inclusive). Format YYYY-MM-DD |
| <code>to?</code> | <code>string</code> (date) | End date for filtering (inclusive). Format YYYY-MM-DD |
| <code>all?</code> | <code>boolean</code> | Return all records (ignores pagination). Use with caution for large datasets.<br>**Default**: false |
| <code>page?</code> | <code>number</code> | Page number to retrieve (1-based)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of records per page (max 1000)<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsShow(request)`

- **OnSuccess**: <code>[CdrListResponse](src/models/cdr-list-response.ts)</code>
- **OnError**: throws <code>[Calls.CallsShowError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CdrListResponse, Calls.CallsShowError&gt;</code>, with `result.value` of type <code>[CdrListResponse](src/models/cdr-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsStatistics(request?: Calls.CallsStatisticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CallsStatisticsResponse, Calls.CallsStatisticsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsStatistics({
    from: "2024-01-01",
    to: "2024-12-31",
    sipfriend: "39452",
    search: 1234567890,
    amdStatus: "human",
    hangupCause: HangupCause1.NormalClearing,
  });
  // TODO: Handle 'response' of type ApiV1CallsStatisticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsStatisticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls
  .callsStatistics({
    from: "2024-01-01",
    to: "2024-12-31",
    sipfriend: "39452",
    search: 1234567890,
    amdStatus: "human",
    hangupCause: HangupCause1.NormalClearing,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CallsStatisticsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from?</code> | <code>string</code> | Start date for filtering (YYYY-MM-DD) |
| <code>to?</code> | <code>string</code> | End date for filtering (YYYY-MM-DD) |
| <code>sipfriend?</code> | <code>string</code> | SIP account name from sipaccounts_index |
| <code>search?</code> | <code>number</code> | Search term for filtering calls |
| <code>amdStatus?</code> | <code>string</code> | Count only calls with this answering machine detection (AMD) verdict, matched ignoring case:<br>- `machine` — AMD detected an answering machine<br>- `human` — AMD detected a person<br>- `notsure` — AMD ran but could not tell a machine from a person, for example on silence,<br>  unclear audio or a timeout<br><br>Only outbound calls carry a verdict, so under this filter the received and missed counts<br>and the received total are 0. A value that no call has gives zero counts and totals.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored,<br>as if the parameter were not sent. |
| <code>hangupCause?</code> | <code>[HangupCause1](src/models/hangup-cause1.ts)</code> | Count only calls that ended this way, matched ignoring case:<br>- `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values<br>- `NORMAL_CLEARING` — the call was answered<br>- `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer<br>- `BUSY` — the called party was busy<br>- `FAILED` — the call could not be connected<br><br>A value that no call has gives zero counts and totals.<br>A malformed value, for example one with `\|` or non-ASCII characters, is ignored,<br>as if the parameter were not sent. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsStatistics(request)`

- **OnSuccess**: <code>[ApiV1CallsStatisticsResponse](src/models/api-v1-calls-statistics-response.ts)</code>
- **OnError**: throws <code>[Calls.CallsStatisticsError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsStatistics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CallsStatisticsResponse, Calls.CallsStatisticsError&gt;</code>, with `result.value` of type <code>[ApiV1CallsStatisticsResponse](src/models/api-v1-calls-statistics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Click2Call

> Source: [Click2Call](src/resources/click2-call.ts)

<details>
<summary><code>click2CallCreate(request?: Click2Call.Click2CallCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1Click2CallResponse, Click2Call.Click2CallCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.click2Call.click2CallCreate({
    body: {
      aType: AType.SipAccount,
      aEndpoint: "10001",
      bNumber: "+447700900000",
      callbackUrl: "https://hooks.example.com/didlogic",
      clientCallId: "order-42_ABC",
      aCli: "+442071234567",
    },
  });
  // TODO: Handle 'response' of type ApiV1Click2CallResponse
} catch (err) {
  // TODO: Handle 'err' of type Click2Call.Click2CallCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.click2Call
  .click2CallCreate({
    body: {
      aType: AType.SipAccount,
      aEndpoint: "10001",
      bNumber: "+447700900000",
      callbackUrl: "https://hooks.example.com/didlogic",
      clientCallId: "order-42_ABC",
      aCli: "+442071234567",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1Click2CallResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ApiV1Click2CallRequest](src/models/api-v1-click2-call-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.click2Call.click2CallCreate(request)`

- **OnSuccess**: <code>[ApiV1Click2CallResponse](src/models/api-v1-click2-call-response.ts)</code>
- **OnError**: throws <code>[Click2Call.Click2CallCreateError](src/resources/click2-call.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.click2Call.click2CallCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1Click2CallResponse, Click2Call.Click2CallCreateError&gt;</code>, with `result.value` of type <code>[ApiV1Click2CallResponse](src/models/api-v1-click2-call-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>click2CallDestroy(request: Click2Call.Click2CallDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Click2Call.Click2CallDestroyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.click2Call.click2CallDestroy({ id: "01K0SPIKE0000000000000002A" });
} catch (err) {
  // TODO: Handle 'err' of type Click2Call.Click2CallDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.click2Call.click2CallDestroy({ id: "01K0SPIKE0000000000000002A" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Call ID (`data.id`) from click2call_create, a 26-character ULID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.click2Call.click2CallDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Click2Call.Click2CallDestroyError](src/resources/click2-call.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.click2Call.click2CallDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Click2Call.Click2CallDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>click2CallShow(request: Click2Call.Click2CallShowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1Click2CallResponse1, Click2Call.Click2CallShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.click2Call.click2CallShow({ id: "01K0SPIKE0000000000000002A" });
  // TODO: Handle 'response' of type ApiV1Click2CallResponse1
} catch (err) {
  // TODO: Handle 'err' of type Click2Call.Click2CallShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.click2Call.click2CallShow({ id: "01K0SPIKE0000000000000002A" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1Click2CallResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Call ID (`data.id`) from click2call_create, a 26-character ULID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.click2Call.click2CallShow(request)`

- **OnSuccess**: <code>[ApiV1Click2CallResponse1](src/models/api-v1-click2-call-response1.ts)</code>
- **OnError**: throws <code>[Click2Call.Click2CallShowError](src/resources/click2-call.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.click2Call.click2CallShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1Click2CallResponse1, Click2Call.Click2CallShowError&gt;</code>, with `result.value` of type <code>[ApiV1Click2CallResponse1](src/models/api-v1-click2-call-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordingsShow(request: Click2Call.RecordingsShowRequest, options?: RequestOptions): ApiPromise&lt;undefined, Click2Call.RecordingsShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.click2Call.recordingsShow({ userId: 1234, token: "invalid-token" });
} catch (err) {
  // TODO: Handle 'err' of type Click2Call.RecordingsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.click2Call.recordingsShow({ userId: 1234, token: "invalid-token" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>number</code> | User ID in the permanent `recording_url` from click2call_create, click2call_show |
| <code>token</code> | <code>string</code> | Encrypted recording token in the permanent `recording_url` from click2call_create, click2call_show |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.click2Call.recordingsShow(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Click2Call.RecordingsShowError](src/resources/click2-call.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.click2Call.recordingsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Click2Call.RecordingsShowError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HlrLookups

> Source: [HlrLookups](src/resources/hlr-lookups.ts)

<details>
<summary><code>hlrCreate(request: HlrLookups.HlrCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2HlrResponse, HlrLookups.HlrCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hlrLookups.hlrCreate({ body: {} });
  // TODO: Handle 'response' of type ApiV2HlrResponse
} catch (err) {
  // TODO: Handle 'err' of type HlrLookups.HlrCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hlrLookups.hlrCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2HlrResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2HlrRequest](src/models/api-v2-hlr-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hlrLookups.hlrCreate(request)`

- **OnSuccess**: <code>[ApiV2HlrResponse](src/models/api-v2-hlr-response.ts)</code>
- **OnError**: throws <code>[HlrLookups.HlrCreateError](src/resources/hlr-lookups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hlrLookups.hlrCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2HlrResponse, HlrLookups.HlrCreateError&gt;</code>, with `result.value` of type <code>[ApiV2HlrResponse](src/models/api-v2-hlr-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hlrHistory(request?: HlrLookups.HlrHistoryRequest, options?: RequestOptions): ApiPromise&lt;ApiV2HlrHistoryResponse, HlrLookups.HlrHistoryError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hlrLookups.hlrHistory({
    numberStart: 1212,
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Desc,
    page: 1,
    perPage: 10,
  });
  // TODO: Handle 'response' of type ApiV2HlrHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type HlrLookups.HlrHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hlrLookups
  .hlrHistory({
    numberStart: 1212,
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Desc,
    page: 1,
    perPage: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2HlrHistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids?</code> | <code>string</code> | Filter logs by log IDs (comma-separated) |
| <code>taskIds?</code> | <code>string</code> | Filter logs by task IDs (comma-separated), from hlr_create |
| <code>number?</code> | <code>string</code> | Filter logs by specific phone numbers (comma-separated) |
| <code>numberStart?</code> | <code>number</code> | Filter logs by phone-number prefix (starts-with) |
| <code>status?</code> | <code>[Status1](src/models/status1.ts)</code> | Filter by status |
| <code>createdAtFrom?</code> | <code>string</code> (date) | Filter created from this date (YYYY-MM-DD) |
| <code>createdAtTo?</code> | <code>string</code> (date) | Filter created until this date (YYYY-MM-DD) |
| <code>processedAtFrom?</code> | <code>string</code> (date) | Filter processed from this date (YYYY-MM-DD) |
| <code>processedAtTo?</code> | <code>string</code> (date) | Filter processed until this date (YYYY-MM-DD) |
| <code>orderBy?</code> | <code>string</code> | Field to sort by |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order<br>**Default**: "desc" |
| <code>page?</code> | <code>number</code> | Page number for pagination (starts from 1)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hlrLookups.hlrHistory(request)`

- **OnSuccess**: <code>[ApiV2HlrHistoryResponse](src/models/api-v2-hlr-history-response.ts)</code>
- **OnError**: throws <code>[HlrLookups.HlrHistoryError](src/resources/hlr-lookups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hlrLookups.hlrHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2HlrHistoryResponse, HlrLookups.HlrHistoryError&gt;</code>, with `result.value` of type <code>[ApiV2HlrHistoryResponse](src/models/api-v2-hlr-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](src/resources/identities.ts)

<details>
<summary><code>identitiesCreate(request: Identities.IdentitiesCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2IdentitiesResponse1, Identities.IdentitiesCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identities.identitiesCreate({ body: {} });
  // TODO: Handle 'response' of type ApiV2IdentitiesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Identities.IdentitiesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identities.identitiesCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2IdentitiesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2IdentitiesRequest](src/models/api-v2-identities-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identities.identitiesCreate(request)`

- **OnSuccess**: <code>[ApiV2IdentitiesResponse1](src/models/api-v2-identities-response1.ts)</code>
- **OnError**: throws <code>[Identities.IdentitiesCreateError](src/resources/identities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identities.identitiesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2IdentitiesResponse1, Identities.IdentitiesCreateError&gt;</code>, with `result.value` of type <code>[ApiV2IdentitiesResponse1](src/models/api-v2-identities-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identitiesDestroy(request: Identities.IdentitiesDestroyRequest, options?: RequestOptions): ApiPromise&lt;ApiV2IdentitiesResponse2, Identities.IdentitiesDestroyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identities.identitiesDestroy({ id: 422 });
  // TODO: Handle 'response' of type ApiV2IdentitiesResponse2
} catch (err) {
  // TODO: Handle 'err' of type Identities.IdentitiesDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identities.identitiesDestroy({ id: 422 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2IdentitiesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Identity ID from identities_index, identities_create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identities.identitiesDestroy(request)`

- **OnSuccess**: <code>[ApiV2IdentitiesResponse2](src/models/api-v2-identities-response2.ts)</code>
- **OnError**: throws <code>[Identities.IdentitiesDestroyError](src/resources/identities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identities.identitiesDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2IdentitiesResponse2, Identities.IdentitiesDestroyError&gt;</code>, with `result.value` of type <code>[ApiV2IdentitiesResponse2](src/models/api-v2-identities-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identitiesIndex(request?: Identities.IdentitiesIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2IdentitiesResponse, Identities.IdentitiesIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identities.identitiesIndex({
    ids: "429,430",
    name: "box",
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    orderBy: "name",
    order: Order.Asc,
    page: 1,
    perPage: 10,
  });
  // TODO: Handle 'response' of type ApiV2IdentitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Identities.IdentitiesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identities
  .identitiesIndex({
    ids: "429,430",
    name: "box",
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    orderBy: "name",
    order: Order.Asc,
    page: 1,
    perPage: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2IdentitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids?</code> | <code>string</code> | Filter identities by IDs (comma-separated); `identity_id` from documents_index, documents_show |
| <code>name?</code> | <code>string</code> | Filter identities by name (partial match) |
| <code>createdAtFrom?</code> | <code>string</code> (date) | Filter identities created from this date (YYYY-MM-DD) |
| <code>createdAtTo?</code> | <code>string</code> (date) | Filter identities created until this date (YYYY-MM-DD) |
| <code>orderBy?</code> | <code>string</code> | Field to sort by |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order<br>**Default**: "desc" |
| <code>page?</code> | <code>number</code> | Page number for pagination (starts from 1)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identities.identitiesIndex(request)`

- **OnSuccess**: <code>[ApiV2IdentitiesResponse](src/models/api-v2-identities-response.ts)</code>
- **OnError**: throws <code>[Identities.IdentitiesIndexError](src/resources/identities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identities.identitiesIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2IdentitiesResponse, Identities.IdentitiesIndexError&gt;</code>, with `result.value` of type <code>[ApiV2IdentitiesResponse](src/models/api-v2-identities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InboundDestinations

> Source: [InboundDestinations](src/resources/inbound-destinations.ts)

<details>
<summary><code>purchasesDestinationsCreate(request: InboundDestinations.PurchasesDestinationsCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PurchasesDestinationsResponse1, InboundDestinations.PurchasesDestinationsCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inboundDestinations.purchasesDestinationsCreate({
    purchaseId: "43800327987",
    body: { destination: { transport: Transport1._1 } },
  });
  // TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type InboundDestinations.PurchasesDestinationsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inboundDestinations
  .purchasesDestinationsCreate({
    purchaseId: "43800327987",
    body: { destination: { transport: Transport1._1 } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PurchasesDestinationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseId</code> | <code>string</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>body</code> | <code>[ApiV1PurchasesDestinationsRequest](src/models/api-v1-purchases-destinations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inboundDestinations.purchasesDestinationsCreate(request)`

- **OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse1](src/models/api-v1-purchases-destinations-response1.ts)</code>
- **OnError**: throws <code>[InboundDestinations.PurchasesDestinationsCreateError](src/resources/inbound-destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inboundDestinations.purchasesDestinationsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PurchasesDestinationsResponse1, InboundDestinations.PurchasesDestinationsCreateError&gt;</code>, with `result.value` of type <code>[ApiV1PurchasesDestinationsResponse1](src/models/api-v1-purchases-destinations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchasesDestinationsDestroy(request: InboundDestinations.PurchasesDestinationsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, InboundDestinations.PurchasesDestinationsDestroyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.inboundDestinations.purchasesDestinationsDestroy({ purchaseId: "43800327987", id: 58 });
} catch (err) {
  // TODO: Handle 'err' of type InboundDestinations.PurchasesDestinationsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inboundDestinations
  .purchasesDestinationsDestroy({ purchaseId: "43800327987", id: 58 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseId</code> | <code>string</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>id</code> | <code>number</code> | Destination id from purchases_destinations_index, purchases_destinations_create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inboundDestinations.purchasesDestinationsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[InboundDestinations.PurchasesDestinationsDestroyError](src/resources/inbound-destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inboundDestinations.purchasesDestinationsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, InboundDestinations.PurchasesDestinationsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchasesDestinationsIndex(request: InboundDestinations.PurchasesDestinationsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PurchasesDestinationsResponse, InboundDestinations.PurchasesDestinationsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inboundDestinations.purchasesDestinationsIndex({ purchaseId: "43800327987" });
  // TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse
} catch (err) {
  // TODO: Handle 'err' of type InboundDestinations.PurchasesDestinationsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inboundDestinations
  .purchasesDestinationsIndex({ purchaseId: "43800327987" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PurchasesDestinationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseId</code> | <code>string</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inboundDestinations.purchasesDestinationsIndex(request)`

- **OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse](src/models/api-v1-purchases-destinations-response.ts)</code>
- **OnError**: throws <code>[InboundDestinations.PurchasesDestinationsIndexError](src/resources/inbound-destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inboundDestinations.purchasesDestinationsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PurchasesDestinationsResponse, InboundDestinations.PurchasesDestinationsIndexError&gt;</code>, with `result.value` of type <code>[ApiV1PurchasesDestinationsResponse](src/models/api-v1-purchases-destinations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchasesDestinationsUpdate(request: InboundDestinations.PurchasesDestinationsUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PurchasesDestinationsResponse2, InboundDestinations.PurchasesDestinationsUpdateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inboundDestinations.purchasesDestinationsUpdate({
    purchaseId: "43800327987",
    id: 65,
    body: {},
  });
  // TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse2
} catch (err) {
  // TODO: Handle 'err' of type InboundDestinations.PurchasesDestinationsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inboundDestinations
  .purchasesDestinationsUpdate({ purchaseId: "43800327987", id: 65, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PurchasesDestinationsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseId</code> | <code>string</code> | Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g. `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID. |
| <code>id</code> | <code>number</code> | Destination id from purchases_destinations_index, purchases_destinations_create |
| <code>body</code> | <code>[ApiV1PurchasesDestinationsRequest1](src/models/api-v1-purchases-destinations-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inboundDestinations.purchasesDestinationsUpdate(request)`

- **OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse2](src/models/api-v1-purchases-destinations-response2.ts)</code>
- **OnError**: throws <code>[InboundDestinations.PurchasesDestinationsUpdateError](src/resources/inbound-destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inboundDestinations.purchasesDestinationsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PurchasesDestinationsResponse2, InboundDestinations.PurchasesDestinationsUpdateError&gt;</code>, with `result.value` of type <code>[ApiV1PurchasesDestinationsResponse2](src/models/api-v1-purchases-destinations-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## KycDocuments

> Source: [KycDocuments](src/resources/kyc-documents.ts)

<details>
<summary><code>documentsCountries(request?: KycDocuments.DocumentsCountriesRequest, options?: RequestOptions): ApiPromise&lt;ApiV2DocumentsCountriesResponse, KycDocuments.DocumentsCountriesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.kycDocuments.documentsCountries({ nameContains: "land" });
  // TODO: Handle 'response' of type ApiV2DocumentsCountriesResponse
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments.documentsCountries({ nameContains: "land" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2DocumentsCountriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nameContains?</code> | <code>string</code> | Filter countries by name pattern (case-insensitive substring match) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsCountries(request)`

- **OnSuccess**: <code>[ApiV2DocumentsCountriesResponse](src/models/api-v2-documents-countries-response.ts)</code>
- **OnError**: throws <code>[KycDocuments.DocumentsCountriesError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2DocumentsCountriesResponse, KycDocuments.DocumentsCountriesError&gt;</code>, with `result.value` of type <code>[ApiV2DocumentsCountriesResponse](src/models/api-v2-documents-countries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>documentsCreate(request: KycDocuments.DocumentsCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2DocumentsResponse1, KycDocuments.DocumentsCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.kycDocuments.documentsCreate({
    documentName: "some example string",
    documentDocType: DocumentDocType.PersonalId,
    documentFilesFrontside: new Uint8Array(),
    documentIdentityId: 470,
    documentCountry: "United Kingdom",
  });
  // TODO: Handle 'response' of type ApiV2DocumentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments
  .documentsCreate({
    documentName: "some example string",
    documentDocType: DocumentDocType.PersonalId,
    documentFilesFrontside: new Uint8Array(),
    documentIdentityId: 470,
    documentCountry: "United Kingdom",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2DocumentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>documentName</code> | <code>string</code> | Document name |
| <code>documentDocType</code> | <code>[DocumentDocType](src/models/document-doc-type.ts)</code> | Document type |
| <code>documentFilesFrontside</code> | <code>FileInput</code> | Frontside file upload (binary) |
| <code>documentIdentityId</code> | <code>number</code> | Identity ID to associate the document with, from identities_index, identities_create |
| <code>documentCountry</code> | <code>string</code> | Country name from documents_countries, e.g. `United Kingdom`; a code such as `UK` or `GB` is refused. For `letter_of_intent` the country of the purchased number is stored instead |
| <code>documentFilesBackside?</code> | <code>FileInput</code> | Backside file upload (binary, Personal ID only) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsCreate(request)`

- **OnSuccess**: <code>[ApiV2DocumentsResponse1](src/models/api-v2-documents-response1.ts)</code>
- **OnError**: throws <code>[KycDocuments.DocumentsCreateError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2DocumentsResponse1, KycDocuments.DocumentsCreateError&gt;</code>, with `result.value` of type <code>[ApiV2DocumentsResponse1](src/models/api-v2-documents-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>documentsDestroy(request: KycDocuments.DocumentsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, KycDocuments.DocumentsDestroyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.kycDocuments.documentsDestroy({ id: 480 });
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments.documentsDestroy({ id: 480 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Document ID from documents_index, documents_create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[KycDocuments.DocumentsDestroyError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, KycDocuments.DocumentsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>documentsFilesDownloadFile(request: KycDocuments.DocumentsFilesDownloadFileRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, KycDocuments.DocumentsFilesDownloadFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a specific document file by role (frontside/backside).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.kycDocuments.documentsFilesDownloadFile({ id: 500, role: Role.Frontside });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsFilesDownloadFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments
  .documentsFilesDownloadFile({ id: 500, role: Role.Frontside })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Document ID from documents_index, documents_show, documents_create |
| <code>role</code> | <code>[Role](src/models/role.ts)</code> | File role, `files[].role` from documents_index, documents_show, documents_create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsFilesDownloadFile(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[KycDocuments.DocumentsFilesDownloadFileError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsFilesDownloadFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, KycDocuments.DocumentsFilesDownloadFileError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>documentsIndex(request?: KycDocuments.DocumentsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2DocumentsResponse, KycDocuments.DocumentsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.kycDocuments.documentsIndex({
    ids: "493,494",
    identityId: 480,
    approvementStatus: ApprovementStatus.Approved,
    uploadDateFrom: "2026-11-02",
    uploadDateTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Asc,
    page: 1,
    perPage: 10,
  });
  // TODO: Handle 'response' of type ApiV2DocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments
  .documentsIndex({
    ids: "493,494",
    identityId: 480,
    approvementStatus: ApprovementStatus.Approved,
    uploadDateFrom: "2026-11-02",
    uploadDateTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Asc,
    page: 1,
    perPage: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2DocumentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids?</code> | <code>string</code> | Filter documents by IDs (comma-separated) |
| <code>identityId?</code> | <code>number</code> | Filter documents by identity ID from identities_index, identities_create |
| <code>approvementStatus?</code> | <code>[ApprovementStatus](src/models/approvement-status.ts)</code> | Filter documents by approval status |
| <code>uploadDateFrom?</code> | <code>string</code> (date) | Filter documents created from this date |
| <code>uploadDateTo?</code> | <code>string</code> (date) | Filter documents created until this date |
| <code>orderBy?</code> | <code>string</code> | Field to sort by |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order<br>**Default**: "desc" |
| <code>page?</code> | <code>number</code> | Page number for pagination (starts from 1)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsIndex(request)`

- **OnSuccess**: <code>[ApiV2DocumentsResponse](src/models/api-v2-documents-response.ts)</code>
- **OnError**: throws <code>[KycDocuments.DocumentsIndexError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2DocumentsResponse, KycDocuments.DocumentsIndexError&gt;</code>, with `result.value` of type <code>[ApiV2DocumentsResponse](src/models/api-v2-documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>documentsShow(request: KycDocuments.DocumentsShowRequest, options?: RequestOptions): ApiPromise&lt;ApiV2DocumentsResponse2, KycDocuments.DocumentsShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.kycDocuments.documentsShow({ id: 488 });
  // TODO: Handle 'response' of type ApiV2DocumentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments.documentsShow({ id: 488 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2DocumentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Document ID from documents_index, documents_create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsShow(request)`

- **OnSuccess**: <code>[ApiV2DocumentsResponse2](src/models/api-v2-documents-response2.ts)</code>
- **OnError**: throws <code>[KycDocuments.DocumentsShowError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2DocumentsResponse2, KycDocuments.DocumentsShowError&gt;</code>, with `result.value` of type <code>[ApiV2DocumentsResponse2](src/models/api-v2-documents-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>documentsUpdate(request: KycDocuments.DocumentsUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2DocumentsResponse3, KycDocuments.DocumentsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing document's name or identity.

`document_id` feeds documents_show.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.kycDocuments.documentsUpdate({ id: 485, body: {} });
  // TODO: Handle 'response' of type ApiV2DocumentsResponse3
} catch (err) {
  // TODO: Handle 'err' of type KycDocuments.DocumentsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.kycDocuments.documentsUpdate({ id: 485, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2DocumentsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Document ID from documents_index, documents_create |
| <code>body</code> | <code>[ApiV2DocumentsRequest](src/models/api-v2-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.kycDocuments.documentsUpdate(request)`

- **OnSuccess**: <code>[ApiV2DocumentsResponse3](src/models/api-v2-documents-response3.ts)</code>
- **OnError**: throws <code>[KycDocuments.DocumentsUpdateError](src/resources/kyc-documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.kycDocuments.documentsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2DocumentsResponse3, KycDocuments.DocumentsUpdateError&gt;</code>, with `result.value` of type <code>[ApiV2DocumentsResponse3](src/models/api-v2-documents-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NumbersInventory

> Source: [NumbersInventory](src/resources/numbers-inventory.ts)

<details>
<summary><code>numbersCountriesCitiesDidsIndex(request: NumbersInventory.NumbersCountriesCitiesDidsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersCountriesCitiesDidsResponse, NumbersInventory.NumbersCountriesCitiesDidsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersCountriesCitiesDidsIndex({
    countryId: 757,
    cityId: 789,
  });
  // TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesDidsResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersCountriesCitiesDidsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory
  .numbersCountriesCitiesDidsIndex({ countryId: 757, cityId: 789 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersCountriesCitiesDidsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>countryId</code> | <code>number</code> | Country id from numbers_countries_index |
| <code>cityId</code> | <code>number</code> | City id from numbers_countries_cities_index, numbers_countries_locations_index |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersCountriesCitiesDidsIndex(request)`

- **OnSuccess**: <code>[ApiV2NumbersCountriesCitiesDidsResponse](src/models/api-v2-numbers-countries-cities-dids-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersCountriesCitiesDidsIndexError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersCountriesCitiesDidsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersCountriesCitiesDidsResponse, NumbersInventory.NumbersCountriesCitiesDidsIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersCountriesCitiesDidsResponse](src/models/api-v2-numbers-countries-cities-dids-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersCountriesCitiesIndex(request: NumbersInventory.NumbersCountriesCitiesIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersCountriesCitiesResponse, NumbersInventory.NumbersCountriesCitiesIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersCountriesCitiesIndex({ countryId: 794 });
  // TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersCountriesCitiesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory.numbersCountriesCitiesIndex({ countryId: 794 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersCountriesCitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>countryId</code> | <code>number</code> | Country id from numbers_countries_index |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersCountriesCitiesIndex(request)`

- **OnSuccess**: <code>[ApiV2NumbersCountriesCitiesResponse](src/models/api-v2-numbers-countries-cities-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersCountriesCitiesIndexError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersCountriesCitiesIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersCountriesCitiesResponse, NumbersInventory.NumbersCountriesCitiesIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersCountriesCitiesResponse](src/models/api-v2-numbers-countries-cities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersCountriesIndex(options?: RequestOptions): ApiPromise&lt;ApiV2NumbersCountriesResponse, NumbersInventory.NumbersCountriesIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersCountriesIndex();
  // TODO: Handle 'response' of type ApiV2NumbersCountriesResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersCountriesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory.numbersCountriesIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersCountriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersCountriesIndex()`

- **OnSuccess**: <code>[ApiV2NumbersCountriesResponse](src/models/api-v2-numbers-countries-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersCountriesIndexError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersCountriesIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersCountriesResponse, NumbersInventory.NumbersCountriesIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersCountriesResponse](src/models/api-v2-numbers-countries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersCountriesLocationsIndex(request: NumbersInventory.NumbersCountriesLocationsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersCountriesLocationsResponse, NumbersInventory.NumbersCountriesLocationsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersCountriesLocationsIndex({
    countryId: 0,
    prefix: 212,
    smsEnabled: "true",
  });
  // TODO: Handle 'response' of type ApiV2NumbersCountriesLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersCountriesLocationsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory
  .numbersCountriesLocationsIndex({ countryId: 0, prefix: 212, smsEnabled: "true" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersCountriesLocationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>countryId</code> | <code>number</code> | Country id from numbers_countries_index |
| <code>prefix</code> | <code>number</code> | Number prefix to search for |
| <code>smsEnabled?</code> | <code>string</code> | Filter locations by SMS capability |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersCountriesLocationsIndex(request)`

- **OnSuccess**: <code>[ApiV2NumbersCountriesLocationsResponse](src/models/api-v2-numbers-countries-locations-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersCountriesLocationsIndexError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersCountriesLocationsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersCountriesLocationsResponse, NumbersInventory.NumbersCountriesLocationsIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersCountriesLocationsResponse](src/models/api-v2-numbers-countries-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersCountriesRegionsIndex(request: NumbersInventory.NumbersCountriesRegionsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersCountriesRegionsResponse, NumbersInventory.NumbersCountriesRegionsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersCountriesRegionsIndex({ countryId: 768 });
  // TODO: Handle 'response' of type ApiV2NumbersCountriesRegionsResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersCountriesRegionsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory.numbersCountriesRegionsIndex({ countryId: 768 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersCountriesRegionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>countryId</code> | <code>number</code> | Country id from numbers_countries_index |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersCountriesRegionsIndex(request)`

- **OnSuccess**: <code>[ApiV2NumbersCountriesRegionsResponse](src/models/api-v2-numbers-countries-regions-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersCountriesRegionsIndexError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersCountriesRegionsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersCountriesRegionsResponse, NumbersInventory.NumbersCountriesRegionsIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersCountriesRegionsResponse](src/models/api-v2-numbers-countries-regions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersIndex(request?: NumbersInventory.NumbersIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersResponse, NumbersInventory.NumbersIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersIndex({ showAll: "true" });
  // TODO: Handle 'response' of type ApiV2NumbersResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory.numbersIndex({ showAll: "true" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>showAll?</code> | <code>string</code> | Include numbers pending documentation approval |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersIndex(request)`

- **OnSuccess**: <code>[ApiV2NumbersResponse](src/models/api-v2-numbers-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersIndexError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersResponse, NumbersInventory.NumbersIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersResponse](src/models/api-v2-numbers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersPurchaseCreate(request: NumbersInventory.NumbersPurchaseCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersPurchaseResponse, NumbersInventory.NumbersPurchaseCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersPurchaseCreate({ body: {} });
  // TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersPurchaseCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory.numbersPurchaseCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersPurchaseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2NumbersPurchaseRequest](src/models/api-v2-numbers-purchase-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersPurchaseCreate(request)`

- **OnSuccess**: <code>[ApiV2NumbersPurchaseResponse](src/models/api-v2-numbers-purchase-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersPurchaseCreateError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersPurchaseCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersPurchaseResponse, NumbersInventory.NumbersPurchaseCreateError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersPurchaseResponse](src/models/api-v2-numbers-purchase-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersPurchaseDestroy(request?: NumbersInventory.NumbersPurchaseDestroyRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersPurchaseResponse3, NumbersInventory.NumbersPurchaseDestroyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersPurchaseDestroy({
    idIn: [1001, 1002],
    didNumbers: ["12125551234", "12125551235"],
  });
  // TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse3
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersPurchaseDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory
  .numbersPurchaseDestroy({ idIn: [1001, 1002], didNumbers: ["12125551234", "12125551235"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersPurchaseResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idIn?</code> | <code>number[]</code> | Array of DID IDs to cancel, from numbers_index |
| <code>didNumbers?</code> | <code>string[]</code> | Array of DID numbers to cancel, from numbers_index, purchases_index |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersPurchaseDestroy(request)`

- **OnSuccess**: <code>[ApiV2NumbersPurchaseResponse3](src/models/api-v2-numbers-purchase-response3.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersPurchaseDestroyError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersPurchaseDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersPurchaseResponse3, NumbersInventory.NumbersPurchaseDestroyError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersPurchaseResponse3](src/models/api-v2-numbers-purchase-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersPurchaseUpdate(request: NumbersInventory.NumbersPurchaseUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersPurchaseResponse2, NumbersInventory.NumbersPurchaseUpdateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersPurchaseUpdate({ body: {} });
  // TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse2
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersPurchaseUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory.numbersPurchaseUpdate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersPurchaseResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2NumbersPurchaseRequest1](src/models/api-v2-numbers-purchase-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersPurchaseUpdate(request)`

- **OnSuccess**: <code>[ApiV2NumbersPurchaseResponse2](src/models/api-v2-numbers-purchase-response2.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersPurchaseUpdateError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersPurchaseUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersPurchaseResponse2, NumbersInventory.NumbersPurchaseUpdateError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersPurchaseResponse2](src/models/api-v2-numbers-purchase-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersSearchShow(request?: NumbersInventory.NumbersSearchShowRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersSearchResponse, NumbersInventory.NumbersSearchShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.numbersInventory.numbersSearchShow({
    idIn: 960,
    numberIn: "12125551234,12125559876",
    numberContains: 555,
    beginsWith: 121,
    endsWith: 1234,
    cityNameContains: "YORK",
    countryNameContains: "United States",
    stateNameContains: "York",
    smsEnabled: "true",
    noLocalCli: "false",
    vendorId: 2660,
    cityId: 818,
    regionId: 86,
    requireDocs: 1,
    commitmentMonths: 12,
    cheapSorting: "false",
    page: 1,
    perPage: 25,
  });
  // TODO: Handle 'response' of type ApiV2NumbersSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type NumbersInventory.NumbersSearchShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.numbersInventory
  .numbersSearchShow({
    idIn: 960,
    numberIn: "12125551234,12125559876",
    numberContains: 555,
    beginsWith: 121,
    endsWith: 1234,
    cityNameContains: "YORK",
    countryNameContains: "United States",
    stateNameContains: "York",
    smsEnabled: "true",
    noLocalCli: "false",
    vendorId: 2660,
    cityId: 818,
    regionId: 86,
    requireDocs: 1,
    commitmentMonths: 12,
    cheapSorting: "false",
    page: 1,
    perPage: 25,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idIn?</code> | <code>number</code> | Search for specific DID IDs (comma-separated) |
| <code>numberIn?</code> | <code>string</code> | Search for specific numbers (exact match, comma-separated) |
| <code>numberContains?</code> | <code>number</code> | Search for numbers containing this pattern |
| <code>beginsWith?</code> | <code>number</code> | Search for numbers beginning with this pattern |
| <code>endsWith?</code> | <code>number</code> | Search for numbers ending with this pattern |
| <code>cityNameContains?</code> | <code>string</code> | Filter by city name (partial match) |
| <code>countryNameContains?</code> | <code>string</code> | Filter by country name (partial match), from numbers_countries_index |
| <code>stateNameContains?</code> | <code>string</code> | Filter by state/region name (partial match, US only), from numbers_countries_regions_index |
| <code>smsEnabled?</code> | <code>string</code> | Filter by SMS capability (true/false) |
| <code>noLocalCli?</code> | <code>string</code> | Filter by local caller ID capability (true/false) |
| <code>vendorId?</code> | <code>number</code> | Filter by vendor ID (requires special permission) |
| <code>cityId?</code> | <code>number</code> | City id from numbers_countries_cities_index, numbers_countries_locations_index |
| <code>regionId?</code> | <code>number</code> | Region id from numbers_countries_regions_index, numbers_countries_locations_index |
| <code>requireDocs?</code> | <code>number</code> | Filter by document requirements |
| <code>commitmentMonths?</code> | <code>number</code> | Filter by commitment period in months |
| <code>cheapSorting?</code> | <code>string</code> | Sort by price (activation + monthly fee) ascending |
| <code>page?</code> | <code>number</code> | Page number for pagination<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 25 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.numbersInventory.numbersSearchShow(request)`

- **OnSuccess**: <code>[ApiV2NumbersSearchResponse](src/models/api-v2-numbers-search-response.ts)</code>
- **OnError**: throws <code>[NumbersInventory.NumbersSearchShowError](src/resources/numbers-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.numbersInventory.numbersSearchShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersSearchResponse, NumbersInventory.NumbersSearchShowError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersSearchResponse](src/models/api-v2-numbers-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Purchases

> Source: [Purchases](src/resources/purchases.ts)

<details>
<summary><code>purchasesIndex(request?: Purchases.PurchasesIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PurchasesResponse, Purchases.PurchasesIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchases.purchasesIndex({ page: 1, perPage: 10 });
  // TODO: Handle 'response' of type ApiV1PurchasesResponse
} catch (err) {
  // TODO: Handle 'err' of type Purchases.PurchasesIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchases.purchasesIndex({ page: 1, perPage: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PurchasesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Page number for pagination (starts from 1)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchases.purchasesIndex(request)`

- **OnSuccess**: <code>[ApiV1PurchasesResponse](src/models/api-v1-purchases-response.ts)</code>
- **OnError**: throws <code>[Purchases.PurchasesIndexError](src/resources/purchases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchases.purchasesIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PurchasesResponse, Purchases.PurchasesIndexError&gt;</code>, with `result.value` of type <code>[ApiV1PurchasesResponse](src/models/api-v1-purchases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>asrReportShow(request: Reports.AsrReportShowRequest, options?: RequestOptions): ApiPromise&lt;string, Reports.AsrReportShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.asrReportShow({ startDate: "2024-01-01", endDate: "2024-12-31" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Reports.AsrReportShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .asrReportShow({ startDate: "2024-01-01", endDate: "2024-12-31" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startDate</code> | <code>string</code> | Report start date (YYYY-MM-DD format) |
| <code>endDate</code> | <code>string</code> | Report end date (YYYY-MM-DD format) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.asrReportShow(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Reports.AsrReportShowError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.asrReportShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Reports.AsrReportShowError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsIndex(request: Reports.TransactionsIndexRequest, options?: RequestOptions): ApiPromise&lt;string, Reports.TransactionsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.transactionsIndex({
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    type: "call",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Reports.TransactionsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .transactionsIndex({ startDate: "2024-01-01", endDate: "2024-01-31", type: "call" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startDate</code> | <code>string</code> (date) | Start of the reporting period (YYYY-MM-DD) |
| <code>endDate</code> | <code>string</code> (date) | End of the reporting period (YYYY-MM-DD) |
| <code>type</code> | <code>string</code> | Comma-separated transaction type(s); see the operation description for the full list of accepted values. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.transactionsIndex(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Reports.TransactionsIndexError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.transactionsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Reports.TransactionsIndexError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RiskChecks

> Source: [RiskChecks](src/resources/risk-checks.ts)

<details>
<summary><code>numbersRiskChecksCreate(request: RiskChecks.NumbersRiskChecksCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersRiskChecksResponse1, RiskChecks.NumbersRiskChecksCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskChecks.numbersRiskChecksCreate({ body: {} });
  // TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse1
} catch (err) {
  // TODO: Handle 'err' of type RiskChecks.NumbersRiskChecksCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskChecks.numbersRiskChecksCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersRiskChecksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2NumbersRiskChecksRequest](src/models/api-v2-numbers-risk-checks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskChecks.numbersRiskChecksCreate(request)`

- **OnSuccess**: <code>[ApiV2NumbersRiskChecksResponse1](src/models/api-v2-numbers-risk-checks-response1.ts)</code>
- **OnError**: throws <code>[RiskChecks.NumbersRiskChecksCreateError](src/resources/risk-checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskChecks.numbersRiskChecksCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersRiskChecksResponse1, RiskChecks.NumbersRiskChecksCreateError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersRiskChecksResponse1](src/models/api-v2-numbers-risk-checks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersRiskChecksIndex(request?: RiskChecks.NumbersRiskChecksIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersRiskChecksResponse, RiskChecks.NumbersRiskChecksIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskChecks.numbersRiskChecksIndex({
    taskIds: "111,112",
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    processedAtFrom: "2026-11-02",
    processedAtTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Desc,
    page: 1,
    perPage: 10,
  });
  // TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse
} catch (err) {
  // TODO: Handle 'err' of type RiskChecks.NumbersRiskChecksIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskChecks
  .numbersRiskChecksIndex({
    taskIds: "111,112",
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    processedAtFrom: "2026-11-02",
    processedAtTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Desc,
    page: 1,
    perPage: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersRiskChecksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskIds?</code> | <code>string</code> | Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs |
| <code>status?</code> | <code>[StatusDidlogicComRiskChecksApi](src/models/status-didlogic-com-risk-checks-api.ts)</code> | Filter by status |
| <code>createdAtFrom?</code> | <code>string</code> (date) | Filter created from this date (YYYY-MM-DD) |
| <code>createdAtTo?</code> | <code>string</code> (date) | Filter created until this date (YYYY-MM-DD) |
| <code>processedAtFrom?</code> | <code>string</code> (date) | Filter processed from this date (YYYY-MM-DD) |
| <code>processedAtTo?</code> | <code>string</code> (date) | Filter processed until this date (YYYY-MM-DD) |
| <code>orderBy?</code> | <code>string</code> | Field to sort by |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order<br>**Default**: "desc" |
| <code>page?</code> | <code>number</code> | Page number for pagination (starts from 1)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskChecks.numbersRiskChecksIndex(request)`

- **OnSuccess**: <code>[ApiV2NumbersRiskChecksResponse](src/models/api-v2-numbers-risk-checks-response.ts)</code>
- **OnError**: throws <code>[RiskChecks.NumbersRiskChecksIndexError](src/resources/risk-checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskChecks.numbersRiskChecksIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersRiskChecksResponse, RiskChecks.NumbersRiskChecksIndexError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersRiskChecksResponse](src/models/api-v2-numbers-risk-checks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbersRiskChecksLogs(request?: RiskChecks.NumbersRiskChecksLogsRequest, options?: RequestOptions): ApiPromise&lt;ApiV2NumbersRiskChecksLogsResponse, RiskChecks.NumbersRiskChecksLogsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.riskChecks.numbersRiskChecksLogs({
    ids: "171,172",
    taskIds: 101,
    number: "79991234567,79991234568",
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    processedAtFrom: "2026-11-02",
    processedAtTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Desc,
    page: 1,
    perPage: 10,
  });
  // TODO: Handle 'response' of type ApiV2NumbersRiskChecksLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type RiskChecks.NumbersRiskChecksLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.riskChecks
  .numbersRiskChecksLogs({
    ids: "171,172",
    taskIds: 101,
    number: "79991234567,79991234568",
    createdAtFrom: "2026-11-02",
    createdAtTo: "2026-11-04",
    processedAtFrom: "2026-11-02",
    processedAtTo: "2026-11-04",
    orderBy: "created_at",
    order: Order.Desc,
    page: 1,
    perPage: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV2NumbersRiskChecksLogsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids?</code> | <code>string</code> | Filter logs by log IDs (comma-separated) |
| <code>taskIds?</code> | <code>number</code> | Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index |
| <code>number?</code> | <code>string</code> | Filter logs by specific phone numbers (comma-separated) |
| <code>status?</code> | <code>[StatusDidlogicComRiskChecksApi](src/models/status-didlogic-com-risk-checks-api.ts)</code> | Filter by status |
| <code>riskLevel?</code> | <code>[RiskLevel](src/models/risk-level.ts)</code> | Filter logs by risk level |
| <code>createdAtFrom?</code> | <code>string</code> (date) | Filter created from this date (YYYY-MM-DD) |
| <code>createdAtTo?</code> | <code>string</code> (date) | Filter created until this date (YYYY-MM-DD) |
| <code>processedAtFrom?</code> | <code>string</code> (date) | Filter processed from this date (YYYY-MM-DD) |
| <code>processedAtTo?</code> | <code>string</code> (date) | Filter processed until this date (YYYY-MM-DD) |
| <code>orderBy?</code> | <code>string</code> | Field to sort by |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order<br>**Default**: "desc" |
| <code>page?</code> | <code>number</code> | Page number for pagination (starts from 1)<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | Number of items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.riskChecks.numbersRiskChecksLogs(request)`

- **OnSuccess**: <code>[ApiV2NumbersRiskChecksLogsResponse](src/models/api-v2-numbers-risk-checks-logs-response.ts)</code>
- **OnError**: throws <code>[RiskChecks.NumbersRiskChecksLogsError](src/resources/risk-checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.riskChecks.numbersRiskChecksLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV2NumbersRiskChecksLogsResponse, RiskChecks.NumbersRiskChecksLogsError&gt;</code>, with `result.value` of type <code>[ApiV2NumbersRiskChecksLogsResponse](src/models/api-v2-numbers-risk-checks-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SipAccounts

> Source: [SipAccounts](src/resources/sip-accounts.ts)

<details>
<summary><code>sipaccountsAllowedIpsCreate(request: SipAccounts.SipaccountsAllowedIpsCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SipaccountsAllowedIpsResponse1, SipAccounts.SipaccountsAllowedIpsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add IP address to SIP account whitelist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipAccounts.sipaccountsAllowedIpsCreate({
    sipaccountId: "01234",
    body: { ip: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse1
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsAllowedIpsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts
  .sipaccountsAllowedIpsCreate({ sipaccountId: "01234", body: { ip: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SipaccountsAllowedIpsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sipaccountId</code> | <code>string</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>body</code> | <code>[ApiV1SipaccountsAllowedIpsRequest](src/models/api-v1-sipaccounts-allowed-ips-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsAllowedIpsCreate(request)`

- **OnSuccess**: <code>[ApiV1SipaccountsAllowedIpsResponse1](src/models/api-v1-sipaccounts-allowed-ips-response1.ts)</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsAllowedIpsCreateError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsAllowedIpsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SipaccountsAllowedIpsResponse1, SipAccounts.SipaccountsAllowedIpsCreateError&gt;</code>, with `result.value` of type <code>[ApiV1SipaccountsAllowedIpsResponse1](src/models/api-v1-sipaccounts-allowed-ips-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsAllowedIpsDestroy(request: SipAccounts.SipaccountsAllowedIpsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, SipAccounts.SipaccountsAllowedIpsDestroyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove IP address from SIP account whitelist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sipAccounts.sipaccountsAllowedIpsDestroy({ sipaccountId: "01234", ip: "1.2.3.4" });
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsAllowedIpsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts
  .sipaccountsAllowedIpsDestroy({ sipaccountId: "01234", ip: "1.2.3.4" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sipaccountId</code> | <code>string</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>ip</code> | <code>string</code> | IP address to remove, from sipaccounts_allowed_ips_index |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsAllowedIpsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsAllowedIpsDestroyError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsAllowedIpsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SipAccounts.SipaccountsAllowedIpsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsAllowedIpsIndex(request: SipAccounts.SipaccountsAllowedIpsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SipaccountsAllowedIpsResponse, SipAccounts.SipaccountsAllowedIpsIndexError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve list of IP addresses allowed to authenticate this SIP account.

`allowed_ips` feeds sipaccounts_allowed_ips_destroy as `ip`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipAccounts.sipaccountsAllowedIpsIndex({ sipaccountId: "01234" });
  // TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsAllowedIpsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts.sipaccountsAllowedIpsIndex({ sipaccountId: "01234" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SipaccountsAllowedIpsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sipaccountId</code> | <code>string</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsAllowedIpsIndex(request)`

- **OnSuccess**: <code>[ApiV1SipaccountsAllowedIpsResponse](src/models/api-v1-sipaccounts-allowed-ips-response.ts)</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsAllowedIpsIndexError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsAllowedIpsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SipaccountsAllowedIpsResponse, SipAccounts.SipaccountsAllowedIpsIndexError&gt;</code>, with `result.value` of type <code>[ApiV1SipaccountsAllowedIpsResponse](src/models/api-v1-sipaccounts-allowed-ips-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsCreate(request: SipAccounts.SipaccountsCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SipaccountsResponse2, SipAccounts.SipaccountsCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipAccounts.sipaccountsCreate({
    body: { sipaccount: { label: "some example string", password: "some example string" } },
  });
  // TODO: Handle 'response' of type ApiV1SipaccountsResponse2
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts
  .sipaccountsCreate({
    body: { sipaccount: { label: "some example string", password: "some example string" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SipaccountsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SipaccountsRequest](src/models/api-v1-sipaccounts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsCreate(request)`

- **OnSuccess**: <code>[ApiV1SipaccountsResponse2](src/models/api-v1-sipaccounts-response2.ts)</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsCreateError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SipaccountsResponse2, SipAccounts.SipaccountsCreateError&gt;</code>, with `result.value` of type <code>[ApiV1SipaccountsResponse2](src/models/api-v1-sipaccounts-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsDestroy(request: SipAccounts.SipaccountsDestroyRequest, options?: RequestOptions): ApiPromise&lt;undefined, SipAccounts.SipaccountsDestroyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a SIP account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sipAccounts.sipaccountsDestroy({ id: "01234" });
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts.sipaccountsDestroy({ id: "01234" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsDestroy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsDestroyError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SipAccounts.SipaccountsDestroyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsIndex(options?: RequestOptions): ApiPromise&lt;ApiV1SipaccountsResponse, SipAccounts.SipaccountsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipAccounts.sipaccountsIndex();
  // TODO: Handle 'response' of type ApiV1SipaccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts.sipaccountsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SipaccountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsIndex()`

- **OnSuccess**: <code>[ApiV1SipaccountsResponse](src/models/api-v1-sipaccounts-response.ts)</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsIndexError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsIndex().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SipaccountsResponse, SipAccounts.SipaccountsIndexError&gt;</code>, with `result.value` of type <code>[ApiV1SipaccountsResponse](src/models/api-v1-sipaccounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsShow(request: SipAccounts.SipaccountsShowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SipaccountsResponse4, SipAccounts.SipaccountsShowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific SIP account.

Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipAccounts.sipaccountsShow({ id: "01234" });
  // TODO: Handle 'response' of type ApiV1SipaccountsResponse4
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts.sipaccountsShow({ id: "01234" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SipaccountsResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsShow(request)`

- **OnSuccess**: <code>[ApiV1SipaccountsResponse4](src/models/api-v1-sipaccounts-response4.ts)</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsShowError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SipaccountsResponse4, SipAccounts.SipaccountsShowError&gt;</code>, with `result.value` of type <code>[ApiV1SipaccountsResponse4](src/models/api-v1-sipaccounts-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sipaccountsUpdate(request: SipAccounts.SipaccountsUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SipaccountsResponse5, SipAccounts.SipaccountsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update SIP account settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipAccounts.sipaccountsUpdate({ id: "01234", body: {} });
  // TODO: Handle 'response' of type ApiV1SipaccountsResponse5
} catch (err) {
  // TODO: Handle 'err' of type SipAccounts.SipaccountsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipAccounts.sipaccountsUpdate({ id: "01234", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SipaccountsResponse5
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g. `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same account. |
| <code>body</code> | <code>[ApiV1SipaccountsRequest1](src/models/api-v1-sipaccounts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipAccounts.sipaccountsUpdate(request)`

- **OnSuccess**: <code>[ApiV1SipaccountsResponse5](src/models/api-v1-sipaccounts-response5.ts)</code>
- **OnError**: throws <code>[SipAccounts.SipaccountsUpdateError](src/resources/sip-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipAccounts.sipaccountsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SipaccountsResponse5, SipAccounts.SipaccountsUpdateError&gt;</code>, with `result.value` of type <code>[ApiV1SipaccountsResponse5](src/models/api-v1-sipaccounts-response5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SmsApi

> Source: [SmsApi](src/resources/sms-api.ts)

<details>
<summary><code>smsCreate(request: SmsApi.SmsCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SmsResponse1, SmsApi.SmsCreateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.smsApi.smsCreate({
    body: {
      sm: {
        source: "some example string",
        destination: "some example string",
        message: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type ApiV1SmsResponse1
} catch (err) {
  // TODO: Handle 'err' of type SmsApi.SmsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.smsApi
  .smsCreate({
    body: {
      sm: {
        source: "some example string",
        destination: "some example string",
        message: "some example string",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SmsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SmsRequest](src/models/api-v1-sms-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.smsApi.smsCreate(request)`

- **OnSuccess**: <code>[ApiV1SmsResponse1](src/models/api-v1-sms-response1.ts)</code>
- **OnError**: throws <code>[SmsApi.SmsCreateError](src/resources/sms-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.smsApi.smsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SmsResponse1, SmsApi.SmsCreateError&gt;</code>, with `result.value` of type <code>[ApiV1SmsResponse1](src/models/api-v1-sms-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>smsIndex(request?: SmsApi.SmsIndexRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SmsResponse, SmsApi.SmsIndexError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.smsApi.smsIndex();
  // TODO: Handle 'response' of type ApiV1SmsResponse
} catch (err) {
  // TODO: Handle 'err' of type SmsApi.SmsIndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.smsApi.smsIndex().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SmsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>string</code> | Page number for pagination (starts from 1)<br>**Default**: "1" |
| <code>perPage?</code> | <code>string</code> | Number of items per page<br>**Default**: "20" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.smsApi.smsIndex(request)`

- **OnSuccess**: <code>[ApiV1SmsResponse](src/models/api-v1-sms-response.ts)</code>
- **OnError**: throws <code>[SmsApi.SmsIndexError](src/resources/sms-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.smsApi.smsIndex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SmsResponse, SmsApi.SmsIndexError&gt;</code>, with `result.value` of type <code>[ApiV1SmsResponse](src/models/api-v1-sms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>smsShow(request: SmsApi.SmsShowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SmsResponse3, SmsApi.SmsShowError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.smsApi.smsShow({ id: 0 });
  // TODO: Handle 'response' of type ApiV1SmsResponse3
} catch (err) {
  // TODO: Handle 'err' of type SmsApi.SmsShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.smsApi.smsShow({ id: 0 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SmsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | SMS message id from sms_index, sms_create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.smsApi.smsShow(request)`

- **OnSuccess**: <code>[ApiV1SmsResponse3](src/models/api-v1-sms-response3.ts)</code>
- **OnError**: throws <code>[SmsApi.SmsShowError](src/resources/sms-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.smsApi.smsShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SmsResponse3, SmsApi.SmsShowError&gt;</code>, with `result.value` of type <code>[ApiV1SmsResponse3](src/models/api-v1-sms-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DidLogicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

