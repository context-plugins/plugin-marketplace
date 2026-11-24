# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DidLogicClient](src/DidLogic/DidLogicClient.cs)

## ApiAccess

> Source: [ApiAccess](src/DidLogic/Api/ApiAccess.cs)

<details>
<summary><code>Task&lt;ApiV1CapabilitiesResponse&gt; CapabilitiesShow(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ApiAccess.CapabilitiesShow();
    // TODO: Handle 'response' of type ApiV1CapabilitiesResponse
}
catch (ApiException<CapabilitiesShowError> ex)
{
    if (ex.Error.TryGetApiV1Capabilities401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Capabilities401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CapabilitiesResponse](src/DidLogic/Models/ApiV1CapabilitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[CapabilitiesShowError](src/DidLogic/Errors/CapabilitiesShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountBalance

> Source: [AccountBalance](src/DidLogic/Api/AccountBalance.cs)

<details>
<summary><code>Task&lt;ApiV1BalanceResponse&gt; BalanceShow(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AccountBalance.BalanceShow();
    // TODO: Handle 'response' of type ApiV1BalanceResponse
}
catch (ApiException<BalanceShowError> ex)
{
    if (ex.Error.TryGetApiV1Balance403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Balance403Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1BalanceResponse](src/DidLogic/Models/ApiV1BalanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[BalanceShowError](src/DidLogic/Errors/BalanceShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Calls

> Source: [Calls](src/DidLogic/Api/Calls.cs)

<details>
<summary><code>Task&lt;ApiV1CallPriceResponse&gt; CallPriceShow(CallPriceShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Calls.CallPriceShow(new CallPriceShowRequest
    {
        ANumber = "+13125550100",
        BNumber = "+447911123456",
        Sipaccount = "100001",
    });
    // TODO: Handle 'response' of type ApiV1CallPriceResponse
}
catch (ApiException<CallPriceShowError> ex)
{
    if (ex.Error.TryGetApiV1CallPrice404Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CallPrice404Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CallPriceShowRequest](src/DidLogic/Requests/Calls/CallPriceShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallPriceResponse](src/DidLogic/Models/ApiV1CallPriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[CallPriceShowError](src/DidLogic/Errors/CallPriceShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CallsRecording(CallsRecordingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Calls.CallsRecording(new CallsRecordingRequest { Callid = "raw.call-id-1@example.com" });
}
catch (ApiException<CallsRecordingError> ex)
{
    if (ex.Error.TryGetApiV1CallsRecordingResponse1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CallsRecordingResponse1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CallsRecordingRequest](src/DidLogic/Requests/Calls/CallsRecordingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[CallsRecordingError](src/DidLogic/Errors/CallsRecordingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CdrListResponse&gt; CallsShow(CallsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Calls.CallsShow(new CallsShowRequest
    {
        Type = Type1.Sip,
        Missed = Missed._1,
        FromSearch = "1221",
        ToSearch = "1800",
        AmdStatus = "machine",
        HangupCause = HangupCause1.AmdMachine,
        SipAccount = "36465",
        From = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
        To = DateTimeOffset.Parse("2025-01-31T00:00:00Z"),
        All = false,
        Page = 1,
        PerPage = 100,
    });
    // TODO: Handle 'response' of type CdrListResponse
}
catch (ApiException<CallsShowError> ex)
{
    if (ex.Error.TryGetApiV1Calls401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Calls401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CallsShowRequest](src/DidLogic/Requests/Calls/CallsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CdrListResponse](src/DidLogic/Models/CdrListResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[CallsShowError](src/DidLogic/Errors/CallsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CallsStatisticsResponse&gt; CallsStatistics(CallsStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Calls.CallsStatistics(new CallsStatisticsRequest
    {
        From = "2024-01-01",
        To = "2024-12-31",
        Sipfriend = "39452",
        Search = 1234567890,
        AmdStatus = "human",
        HangupCause = HangupCause1.NormalClearing,
    });
    // TODO: Handle 'response' of type ApiV1CallsStatisticsResponse
}
catch (ApiException<CallsStatisticsError> ex)
{
    if (ex.Error.TryGetApiV1CallsStatistics403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CallsStatistics403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CallsStatisticsRequest](src/DidLogic/Requests/Calls/CallsStatisticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsStatisticsResponse](src/DidLogic/Models/ApiV1CallsStatisticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[CallsStatisticsError](src/DidLogic/Errors/CallsStatisticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Click2Call

> Source: [Click2Call](src/DidLogic/Api/Click2Call.cs)

<details>
<summary><code>Task&lt;ApiV1Click2CallResponse&gt; Click2CallCreate(Click2CallCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Click2Call.Click2CallCreate(new Click2CallCreateRequest
    {
        Body = new ApiV1Click2CallRequest
        {
            AType = AType.SipAccount,
            AEndpoint = "10001",
            BNumber = "+447700900000",
            CallbackUrl = "https://hooks.example.com/didlogic",
            ClientCallId = "order-42_ABC",
            ACli = "+442071234567",
        },
    });
    // TODO: Handle 'response' of type ApiV1Click2CallResponse
}
catch (ApiException<Click2CallCreateError> ex)
{
    if (ex.Error.TryGetApiV1Click2Call401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Click2Call401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[Click2CallCreateRequest](src/DidLogic/Requests/Click2Call/Click2CallCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1Click2CallResponse](src/DidLogic/Models/ApiV1Click2CallResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[Click2CallCreateError](src/DidLogic/Errors/Click2CallCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Click2CallDestroy(Click2CallDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Click2Call.Click2CallDestroy(new Click2CallDestroyRequest { Id = "01K0SPIKE0000000000000002A" });
}
catch (ApiException<Click2CallDestroyError> ex)
{
    if (ex.Error.TryGetApiV1Click2Call401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Click2Call401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[Click2CallDestroyRequest](src/DidLogic/Requests/Click2Call/Click2CallDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[Click2CallDestroyError](src/DidLogic/Errors/Click2CallDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1Click2CallResponse1&gt; Click2CallShow(Click2CallShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Click2Call.Click2CallShow(new Click2CallShowRequest
    {
        Id = "01K0SPIKE0000000000000002A",
    });
    // TODO: Handle 'response' of type ApiV1Click2CallResponse1
}
catch (ApiException<Click2CallShowError> ex)
{
    if (ex.Error.TryGetApiV1Click2Call401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Click2Call401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[Click2CallShowRequest](src/DidLogic/Requests/Click2Call/Click2CallShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1Click2CallResponse1](src/DidLogic/Models/ApiV1Click2CallResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[Click2CallShowError](src/DidLogic/Errors/Click2CallShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RecordingsShow(RecordingsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Click2Call.RecordingsShow(new RecordingsShowRequest { UserId = 1234, Token = "invalid-token" });
}
catch (ApiException<RecordingsShowError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecordingsShowRequest](src/DidLogic/Requests/Click2Call/RecordingsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[RecordingsShowError](src/DidLogic/Errors/RecordingsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HlrLookups

> Source: [HlrLookups](src/DidLogic/Api/HlrLookups.cs)

<details>
<summary><code>Task&lt;ApiV2HlrResponse&gt; HlrCreate(HlrCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.HlrLookups.HlrCreate(new HlrCreateRequest { Body = new ApiV2HlrRequest() });
    // TODO: Handle 'response' of type ApiV2HlrResponse
}
catch (ApiException<HlrCreateError> ex)
{
    if (ex.Error.TryGetApiV2Hlr401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Hlr401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HlrCreateRequest](src/DidLogic/Requests/HlrLookups/HlrCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2HlrResponse](src/DidLogic/Models/ApiV2HlrResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[HlrCreateError](src/DidLogic/Errors/HlrCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2HlrHistoryResponse&gt; HlrHistory(HlrHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.HlrLookups.HlrHistory(new HlrHistoryRequest
    {
        NumberStart = 1212,
        CreatedAtFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        CreatedAtTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        OrderBy = "created_at",
        Order = Order.Desc,
        Page = 1,
        PerPage = 10,
    });
    // TODO: Handle 'response' of type ApiV2HlrHistoryResponse
}
catch (ApiException<HlrHistoryError> ex)
{
    if (ex.Error.TryGetApiV2HlrHistory401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2HlrHistory401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HlrHistoryRequest](src/DidLogic/Requests/HlrLookups/HlrHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2HlrHistoryResponse](src/DidLogic/Models/ApiV2HlrHistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[HlrHistoryError](src/DidLogic/Errors/HlrHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](src/DidLogic/Api/Identities.cs)

<details>
<summary><code>Task&lt;ApiV2IdentitiesResponse1&gt; IdentitiesCreate(IdentitiesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Identities.IdentitiesCreate(new IdentitiesCreateRequest
    {
        Body = new ApiV2IdentitiesRequest(),
    });
    // TODO: Handle 'response' of type ApiV2IdentitiesResponse1
}
catch (ApiException<IdentitiesCreateError> ex)
{
    if (ex.Error.TryGetApiV2Identities401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Identities401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IdentitiesCreateRequest](src/DidLogic/Requests/Identities/IdentitiesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2IdentitiesResponse1](src/DidLogic/Models/ApiV2IdentitiesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[IdentitiesCreateError](src/DidLogic/Errors/IdentitiesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2IdentitiesResponse2&gt; IdentitiesDestroy(IdentitiesDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Identities.IdentitiesDestroy(new IdentitiesDestroyRequest { Id = 422 });
    // TODO: Handle 'response' of type ApiV2IdentitiesResponse2
}
catch (ApiException<IdentitiesDestroyError> ex)
{
    if (ex.Error.TryGetApiV2Identities401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Identities401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IdentitiesDestroyRequest](src/DidLogic/Requests/Identities/IdentitiesDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2IdentitiesResponse2](src/DidLogic/Models/ApiV2IdentitiesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[IdentitiesDestroyError](src/DidLogic/Errors/IdentitiesDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2IdentitiesResponse&gt; IdentitiesIndex(IdentitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Identities.IdentitiesIndex(new IdentitiesIndexRequest
    {
        Ids = "429,430",
        Name = "box",
        CreatedAtFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        CreatedAtTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        OrderBy = "name",
        Order = Order.Asc,
        Page = 1,
        PerPage = 10,
    });
    // TODO: Handle 'response' of type ApiV2IdentitiesResponse
}
catch (ApiException<IdentitiesIndexError> ex)
{
    if (ex.Error.TryGetApiV2Identities401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Identities401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IdentitiesIndexRequest](src/DidLogic/Requests/Identities/IdentitiesIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2IdentitiesResponse](src/DidLogic/Models/ApiV2IdentitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[IdentitiesIndexError](src/DidLogic/Errors/IdentitiesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InboundDestinations

> Source: [InboundDestinations](src/DidLogic/Api/InboundDestinations.cs)

<details>
<summary><code>Task&lt;ApiV1PurchasesDestinationsResponse1&gt; PurchasesDestinationsCreate(PurchasesDestinationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InboundDestinations.PurchasesDestinationsCreate(new PurchasesDestinationsCreateRequest
    {
        PurchaseId = "43800327987",
        Body = new ApiV1PurchasesDestinationsRequest
        {
            Destination = new Destination1 { Transport = Transport1.Value1 },
        },
    });
    // TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse1
}
catch (ApiException<PurchasesDestinationsCreateError> ex)
{
    if (ex.Error.TryGetApiV1PurchasesDestinations403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PurchasesDestinations403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurchasesDestinationsCreateRequest](src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse1](src/DidLogic/Models/ApiV1PurchasesDestinationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[PurchasesDestinationsCreateError](src/DidLogic/Errors/PurchasesDestinationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PurchasesDestinationsDestroy(PurchasesDestinationsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.InboundDestinations.PurchasesDestinationsDestroy(new PurchasesDestinationsDestroyRequest
    {
        PurchaseId = "43800327987",
        Id = 58,
    });
}
catch (ApiException<PurchasesDestinationsDestroyError> ex)
{
    if (ex.Error.TryGetApiV1PurchasesDestinations403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PurchasesDestinations403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurchasesDestinationsDestroyRequest](src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[PurchasesDestinationsDestroyError](src/DidLogic/Errors/PurchasesDestinationsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PurchasesDestinationsResponse&gt; PurchasesDestinationsIndex(PurchasesDestinationsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InboundDestinations.PurchasesDestinationsIndex(new PurchasesDestinationsIndexRequest
    {
        PurchaseId = "43800327987",
    });
    // TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse
}
catch (ApiException<PurchasesDestinationsIndexError> ex)
{
    if (ex.Error.TryGetApiV1PurchasesDestinations403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PurchasesDestinations403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurchasesDestinationsIndexRequest](src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse](src/DidLogic/Models/ApiV1PurchasesDestinationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[PurchasesDestinationsIndexError](src/DidLogic/Errors/PurchasesDestinationsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PurchasesDestinationsResponse2&gt; PurchasesDestinationsUpdate(PurchasesDestinationsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.InboundDestinations.PurchasesDestinationsUpdate(new PurchasesDestinationsUpdateRequest
    {
        PurchaseId = "43800327987",
        Id = 65,
        Body = new ApiV1PurchasesDestinationsRequest1(),
    });
    // TODO: Handle 'response' of type ApiV1PurchasesDestinationsResponse2
}
catch (ApiException<PurchasesDestinationsUpdateError> ex)
{
    if (ex.Error.TryGetApiV1PurchasesDestinations403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PurchasesDestinations403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurchasesDestinationsUpdateRequest](src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesDestinationsResponse2](src/DidLogic/Models/ApiV1PurchasesDestinationsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[PurchasesDestinationsUpdateError](src/DidLogic/Errors/PurchasesDestinationsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## KycDocuments

> Source: [KycDocuments](src/DidLogic/Api/KycDocuments.cs)

<details>
<summary><code>Task&lt;ApiV2DocumentsCountriesResponse&gt; DocumentsCountries(DocumentsCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.KycDocuments.DocumentsCountries(new DocumentsCountriesRequest
    {
        NameContains = "land",
    });
    // TODO: Handle 'response' of type ApiV2DocumentsCountriesResponse
}
catch (ApiException<DocumentsCountriesError> ex)
{
    if (ex.Error.TryGetApiV2DocumentsCountries401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2DocumentsCountries401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsCountriesRequest](src/DidLogic/Requests/KycDocuments/DocumentsCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsCountriesResponse](src/DidLogic/Models/ApiV2DocumentsCountriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsCountriesError](src/DidLogic/Errors/DocumentsCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2DocumentsResponse1&gt; DocumentsCreate(DocumentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.KycDocuments.DocumentsCreate(new DocumentsCreateRequest
    {
        DocumentName = "some example string",
        DocumentDocType = DocumentDocType.PersonalId,
        DocumentFilesFrontside = Array.Empty<byte>(),
        DocumentIdentityId = 470,
        DocumentCountry = "United Kingdom",
    });
    // TODO: Handle 'response' of type ApiV2DocumentsResponse1
}
catch (ApiException<DocumentsCreateError> ex)
{
    if (ex.Error.TryGetApiV2Documents401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Documents401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsCreateRequest](src/DidLogic/Requests/KycDocuments/DocumentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse1](src/DidLogic/Models/ApiV2DocumentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsCreateError](src/DidLogic/Errors/DocumentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DocumentsDestroy(DocumentsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.KycDocuments.DocumentsDestroy(new DocumentsDestroyRequest { Id = 480 });
}
catch (ApiException<DocumentsDestroyError> ex)
{
    if (ex.Error.TryGetApiV2Documents401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Documents401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsDestroyRequest](src/DidLogic/Requests/KycDocuments/DocumentsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsDestroyError](src/DidLogic/Errors/DocumentsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DocumentsFilesDownloadFile(DocumentsFilesDownloadFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.KycDocuments.DocumentsFilesDownloadFile(new DocumentsFilesDownloadFileRequest
    {
        Id = 500,
        Role = Role.Frontside,
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DocumentsFilesDownloadFileError> ex)
{
    if (ex.Error.TryGetApiV2DocumentsFiles401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2DocumentsFiles401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsFilesDownloadFileRequest](src/DidLogic/Requests/KycDocuments/DocumentsFilesDownloadFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsFilesDownloadFileError](src/DidLogic/Errors/DocumentsFilesDownloadFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2DocumentsResponse&gt; DocumentsIndex(DocumentsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.KycDocuments.DocumentsIndex(new DocumentsIndexRequest
    {
        Ids = "493,494",
        IdentityId = 480,
        ApprovementStatus = ApprovementStatus.Approved,
        UploadDateFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        UploadDateTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        OrderBy = "created_at",
        Order = Order.Asc,
        Page = 1,
        PerPage = 10,
    });
    // TODO: Handle 'response' of type ApiV2DocumentsResponse
}
catch (ApiException<DocumentsIndexError> ex)
{
    if (ex.Error.TryGetApiV2Documents401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Documents401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsIndexRequest](src/DidLogic/Requests/KycDocuments/DocumentsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse](src/DidLogic/Models/ApiV2DocumentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsIndexError](src/DidLogic/Errors/DocumentsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2DocumentsResponse2&gt; DocumentsShow(DocumentsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.KycDocuments.DocumentsShow(new DocumentsShowRequest { Id = 488 });
    // TODO: Handle 'response' of type ApiV2DocumentsResponse2
}
catch (ApiException<DocumentsShowError> ex)
{
    if (ex.Error.TryGetApiV2Documents401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Documents401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsShowRequest](src/DidLogic/Requests/KycDocuments/DocumentsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse2](src/DidLogic/Models/ApiV2DocumentsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsShowError](src/DidLogic/Errors/DocumentsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2DocumentsResponse3&gt; DocumentsUpdate(DocumentsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.KycDocuments.DocumentsUpdate(new DocumentsUpdateRequest
    {
        Id = 485,
        Body = new ApiV2DocumentsRequest(),
    });
    // TODO: Handle 'response' of type ApiV2DocumentsResponse3
}
catch (ApiException<DocumentsUpdateError> ex)
{
    if (ex.Error.TryGetApiV2Documents401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Documents401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DocumentsUpdateRequest](src/DidLogic/Requests/KycDocuments/DocumentsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2DocumentsResponse3](src/DidLogic/Models/ApiV2DocumentsResponse3.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[DocumentsUpdateError](src/DidLogic/Errors/DocumentsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NumbersInventory

> Source: [NumbersInventory](src/DidLogic/Api/NumbersInventory.cs)

<details>
<summary><code>Task&lt;ApiV2NumbersCountriesCitiesDidsResponse&gt; NumbersCountriesCitiesDidsIndex(NumbersCountriesCitiesDidsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersCountriesCitiesDidsIndex(
        new NumbersCountriesCitiesDidsIndexRequest { CountryId = 757, CityId = 789 });
    // TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesDidsResponse
}
catch (ApiException<NumbersCountriesCitiesDidsIndexError> ex)
{
    if (ex.Error.TryGetApiV2NumbersCountriesCitiesDids401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersCountriesCitiesDids401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersCountriesCitiesDidsIndexRequest](src/DidLogic/Requests/NumbersInventory/NumbersCountriesCitiesDidsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesCitiesDidsResponse](src/DidLogic/Models/ApiV2NumbersCountriesCitiesDidsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersCountriesCitiesDidsIndexError](src/DidLogic/Errors/NumbersCountriesCitiesDidsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersCountriesCitiesResponse&gt; NumbersCountriesCitiesIndex(NumbersCountriesCitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersCountriesCitiesIndex(new NumbersCountriesCitiesIndexRequest
    {
        CountryId = 794,
    });
    // TODO: Handle 'response' of type ApiV2NumbersCountriesCitiesResponse
}
catch (ApiException<NumbersCountriesCitiesIndexError> ex)
{
    if (ex.Error.TryGetApiV2NumbersCountriesCities401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersCountriesCities401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersCountriesCitiesIndexRequest](src/DidLogic/Requests/NumbersInventory/NumbersCountriesCitiesIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesCitiesResponse](src/DidLogic/Models/ApiV2NumbersCountriesCitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersCountriesCitiesIndexError](src/DidLogic/Errors/NumbersCountriesCitiesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersCountriesResponse&gt; NumbersCountriesIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersCountriesIndex();
    // TODO: Handle 'response' of type ApiV2NumbersCountriesResponse
}
catch (ApiException<NumbersCountriesIndexError> ex)
{
    if (ex.Error.TryGetApiV2NumbersCountries401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersCountries401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesResponse](src/DidLogic/Models/ApiV2NumbersCountriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersCountriesIndexError](src/DidLogic/Errors/NumbersCountriesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersCountriesLocationsResponse&gt; NumbersCountriesLocationsIndex(NumbersCountriesLocationsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersCountriesLocationsIndex(
        new NumbersCountriesLocationsIndexRequest { CountryId = 0, Prefix = 212, SmsEnabled = "true" });
    // TODO: Handle 'response' of type ApiV2NumbersCountriesLocationsResponse
}
catch (ApiException<NumbersCountriesLocationsIndexError> ex)
{
    if (ex.Error.TryGetApiV2NumbersCountriesLocations401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersCountriesLocations401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersCountriesLocationsIndexRequest](src/DidLogic/Requests/NumbersInventory/NumbersCountriesLocationsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesLocationsResponse](src/DidLogic/Models/ApiV2NumbersCountriesLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersCountriesLocationsIndexError](src/DidLogic/Errors/NumbersCountriesLocationsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersCountriesRegionsResponse&gt; NumbersCountriesRegionsIndex(NumbersCountriesRegionsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersCountriesRegionsIndex(new NumbersCountriesRegionsIndexRequest
    {
        CountryId = 768,
    });
    // TODO: Handle 'response' of type ApiV2NumbersCountriesRegionsResponse
}
catch (ApiException<NumbersCountriesRegionsIndexError> ex)
{
    if (ex.Error.TryGetApiV2NumbersCountriesRegions401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersCountriesRegions401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersCountriesRegionsIndexRequest](src/DidLogic/Requests/NumbersInventory/NumbersCountriesRegionsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersCountriesRegionsResponse](src/DidLogic/Models/ApiV2NumbersCountriesRegionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersCountriesRegionsIndexError](src/DidLogic/Errors/NumbersCountriesRegionsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersResponse&gt; NumbersIndex(NumbersIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersIndex(new NumbersIndexRequest { ShowAll = "true" });
    // TODO: Handle 'response' of type ApiV2NumbersResponse
}
catch (ApiException<NumbersIndexError> ex)
{
    if (ex.Error.TryGetApiV2Numbers401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Numbers401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersIndexRequest](src/DidLogic/Requests/NumbersInventory/NumbersIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersResponse](src/DidLogic/Models/ApiV2NumbersResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersIndexError](src/DidLogic/Errors/NumbersIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersPurchaseResponse&gt; NumbersPurchaseCreate(NumbersPurchaseCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersPurchaseCreate(new NumbersPurchaseCreateRequest
    {
        Body = new ApiV2NumbersPurchaseRequest(),
    });
    // TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse
}
catch (ApiException<NumbersPurchaseCreateError> ex)
{
    if (ex.Error.TryGetApiV2NumbersPurchase400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersPurchase400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersPurchaseCreateRequest](src/DidLogic/Requests/NumbersInventory/NumbersPurchaseCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersPurchaseResponse](src/DidLogic/Models/ApiV2NumbersPurchaseResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersPurchaseCreateError](src/DidLogic/Errors/NumbersPurchaseCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersPurchaseResponse3&gt; NumbersPurchaseDestroy(NumbersPurchaseDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersPurchaseDestroy(new NumbersPurchaseDestroyRequest
    {
        IdIn = [1001, 1002],
        DidNumbers = ["12125551234", "12125551235"],
    });
    // TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse3
}
catch (ApiException<NumbersPurchaseDestroyError> ex)
{
    if (ex.Error.TryGetApiV2NumbersPurchase401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersPurchase401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersPurchaseDestroyRequest](src/DidLogic/Requests/NumbersInventory/NumbersPurchaseDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersPurchaseResponse3](src/DidLogic/Models/ApiV2NumbersPurchaseResponse3.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersPurchaseDestroyError](src/DidLogic/Errors/NumbersPurchaseDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersPurchaseResponse2&gt; NumbersPurchaseUpdate(NumbersPurchaseUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersPurchaseUpdate(new NumbersPurchaseUpdateRequest
    {
        Body = new ApiV2NumbersPurchaseRequest1(),
    });
    // TODO: Handle 'response' of type ApiV2NumbersPurchaseResponse2
}
catch (ApiException<NumbersPurchaseUpdateError> ex)
{
    if (ex.Error.TryGetApiV2NumbersPurchase401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersPurchase401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersPurchaseUpdateRequest](src/DidLogic/Requests/NumbersInventory/NumbersPurchaseUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersPurchaseResponse2](src/DidLogic/Models/ApiV2NumbersPurchaseResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersPurchaseUpdateError](src/DidLogic/Errors/NumbersPurchaseUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersSearchResponse&gt; NumbersSearchShow(NumbersSearchShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.NumbersInventory.NumbersSearchShow(new NumbersSearchShowRequest
    {
        IdIn = 960,
        NumberIn = "12125551234,12125559876",
        NumberContains = 555,
        BeginsWith = 121,
        EndsWith = 1234,
        CityNameContains = "YORK",
        CountryNameContains = "United States",
        StateNameContains = "York",
        SmsEnabled = "true",
        NoLocalCli = "false",
        VendorId = 2660,
        CityId = 818,
        RegionId = 86,
        RequireDocs = 1,
        CommitmentMonths = 12,
        CheapSorting = "false",
        Page = 1,
        PerPage = 25,
    });
    // TODO: Handle 'response' of type ApiV2NumbersSearchResponse
}
catch (ApiException<NumbersSearchShowError> ex)
{
    if (ex.Error.TryGetApiV2NumbersSearch401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersSearch401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersSearchShowRequest](src/DidLogic/Requests/NumbersInventory/NumbersSearchShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersSearchResponse](src/DidLogic/Models/ApiV2NumbersSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersSearchShowError](src/DidLogic/Errors/NumbersSearchShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Purchases

> Source: [Purchases](src/DidLogic/Api/Purchases.cs)

<details>
<summary><code>Task&lt;ApiV1PurchasesResponse&gt; PurchasesIndex(PurchasesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Purchases.PurchasesIndex(new PurchasesIndexRequest { Page = 1, PerPage = 10 });
    // TODO: Handle 'response' of type ApiV1PurchasesResponse
}
catch (ApiException<PurchasesIndexError> ex)
{
    if (ex.Error.TryGetApiV1Purchases403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Purchases403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurchasesIndexRequest](src/DidLogic/Requests/Purchases/PurchasesIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PurchasesResponse](src/DidLogic/Models/ApiV1PurchasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[PurchasesIndexError](src/DidLogic/Errors/PurchasesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/DidLogic/Api/Reports.cs)

<details>
<summary><code>Task&lt;string&gt; AsrReportShow(AsrReportShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Reports.AsrReportShow(new AsrReportShowRequest
    {
        StartDate = "2024-01-01",
        EndDate = "2024-12-31",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<AsrReportShowError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AsrReportShowRequest](src/DidLogic/Requests/Reports/AsrReportShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[AsrReportShowError](src/DidLogic/Errors/AsrReportShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; TransactionsIndex(TransactionsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Reports.TransactionsIndex(new TransactionsIndexRequest
    {
        StartDate = DateTimeOffset.Parse("2024-01-01T00:00:00Z"),
        EndDate = DateTimeOffset.Parse("2024-01-31T00:00:00Z"),
        Type = "call",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<TransactionsIndexError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TransactionsIndexRequest](src/DidLogic/Requests/Reports/TransactionsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[TransactionsIndexError](src/DidLogic/Errors/TransactionsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RiskChecks

> Source: [RiskChecks](src/DidLogic/Api/RiskChecks.cs)

<details>
<summary><code>Task&lt;ApiV2NumbersRiskChecksResponse1&gt; NumbersRiskChecksCreate(NumbersRiskChecksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.RiskChecks.NumbersRiskChecksCreate(new NumbersRiskChecksCreateRequest
    {
        Body = new ApiV2NumbersRiskChecksRequest(),
    });
    // TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse1
}
catch (ApiException<NumbersRiskChecksCreateError> ex)
{
    if (ex.Error.TryGetApiV2NumbersRiskChecks401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersRiskChecks401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersRiskChecksCreateRequest](src/DidLogic/Requests/RiskChecks/NumbersRiskChecksCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersRiskChecksResponse1](src/DidLogic/Models/ApiV2NumbersRiskChecksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersRiskChecksCreateError](src/DidLogic/Errors/NumbersRiskChecksCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersRiskChecksResponse&gt; NumbersRiskChecksIndex(NumbersRiskChecksIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.RiskChecks.NumbersRiskChecksIndex(new NumbersRiskChecksIndexRequest
    {
        TaskIds = "111,112",
        CreatedAtFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        CreatedAtTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        ProcessedAtFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        ProcessedAtTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        OrderBy = "created_at",
        Order = Order.Desc,
        Page = 1,
        PerPage = 10,
    });
    // TODO: Handle 'response' of type ApiV2NumbersRiskChecksResponse
}
catch (ApiException<NumbersRiskChecksIndexError> ex)
{
    if (ex.Error.TryGetApiV2NumbersRiskChecks401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersRiskChecks401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersRiskChecksIndexRequest](src/DidLogic/Requests/RiskChecks/NumbersRiskChecksIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersRiskChecksResponse](src/DidLogic/Models/ApiV2NumbersRiskChecksResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersRiskChecksIndexError](src/DidLogic/Errors/NumbersRiskChecksIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2NumbersRiskChecksLogsResponse&gt; NumbersRiskChecksLogs(NumbersRiskChecksLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.RiskChecks.NumbersRiskChecksLogs(new NumbersRiskChecksLogsRequest
    {
        Ids = "171,172",
        TaskIds = 101,
        Number = "79991234567,79991234568",
        CreatedAtFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        CreatedAtTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        ProcessedAtFrom = DateTimeOffset.Parse("2026-11-02T00:00:00Z"),
        ProcessedAtTo = DateTimeOffset.Parse("2026-11-04T00:00:00Z"),
        OrderBy = "created_at",
        Order = Order.Desc,
        Page = 1,
        PerPage = 10,
    });
    // TODO: Handle 'response' of type ApiV2NumbersRiskChecksLogsResponse
}
catch (ApiException<NumbersRiskChecksLogsError> ex)
{
    if (ex.Error.TryGetApiV2NumbersRiskChecksLogs401Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2NumbersRiskChecksLogs401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NumbersRiskChecksLogsRequest](src/DidLogic/Requests/RiskChecks/NumbersRiskChecksLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2NumbersRiskChecksLogsResponse](src/DidLogic/Models/ApiV2NumbersRiskChecksLogsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[NumbersRiskChecksLogsError](src/DidLogic/Errors/NumbersRiskChecksLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SipAccounts

> Source: [SipAccounts](src/DidLogic/Api/SipAccounts.cs)

<details>
<summary><code>Task&lt;ApiV1SipaccountsAllowedIpsResponse1&gt; SipaccountsAllowedIpsCreate(SipaccountsAllowedIpsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SipAccounts.SipaccountsAllowedIpsCreate(new SipaccountsAllowedIpsCreateRequest
    {
        SipaccountId = "01234",
        Body = new ApiV1SipaccountsAllowedIpsRequest { Ip = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse1
}
catch (ApiException<SipaccountsAllowedIpsCreateError> ex)
{
    if (ex.Error.TryGetApiV1SipaccountsAllowedIps403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SipaccountsAllowedIps403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsAllowedIpsCreateRequest](src/DidLogic/Requests/SipAccounts/SipaccountsAllowedIpsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsAllowedIpsResponse1](src/DidLogic/Models/ApiV1SipaccountsAllowedIpsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsAllowedIpsCreateError](src/DidLogic/Errors/SipaccountsAllowedIpsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SipaccountsAllowedIpsDestroy(SipaccountsAllowedIpsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.SipAccounts.SipaccountsAllowedIpsDestroy(new SipaccountsAllowedIpsDestroyRequest
    {
        SipaccountId = "01234",
        Ip = "1.2.3.4",
    });
}
catch (ApiException<SipaccountsAllowedIpsDestroyError> ex)
{
    if (ex.Error.TryGetApiV1SipaccountsAllowedIps403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SipaccountsAllowedIps403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsAllowedIpsDestroyRequest](src/DidLogic/Requests/SipAccounts/SipaccountsAllowedIpsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsAllowedIpsDestroyError](src/DidLogic/Errors/SipaccountsAllowedIpsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SipaccountsAllowedIpsResponse&gt; SipaccountsAllowedIpsIndex(SipaccountsAllowedIpsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SipAccounts.SipaccountsAllowedIpsIndex(new SipaccountsAllowedIpsIndexRequest
    {
        SipaccountId = "01234",
    });
    // TODO: Handle 'response' of type ApiV1SipaccountsAllowedIpsResponse
}
catch (ApiException<SipaccountsAllowedIpsIndexError> ex)
{
    if (ex.Error.TryGetApiV1SipaccountsAllowedIps403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SipaccountsAllowedIps403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsAllowedIpsIndexRequest](src/DidLogic/Requests/SipAccounts/SipaccountsAllowedIpsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsAllowedIpsResponse](src/DidLogic/Models/ApiV1SipaccountsAllowedIpsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsAllowedIpsIndexError](src/DidLogic/Errors/SipaccountsAllowedIpsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SipaccountsResponse2&gt; SipaccountsCreate(SipaccountsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SipAccounts.SipaccountsCreate(new SipaccountsCreateRequest
    {
        Body = new ApiV1SipaccountsRequest
        {
            Sipaccount = new Sipaccount1 { Label = "some example string", Password = "some example string" },
        },
    });
    // TODO: Handle 'response' of type ApiV1SipaccountsResponse2
}
catch (ApiException<SipaccountsCreateError> ex)
{
    if (ex.Error.TryGetApiV1SipaccountsResponse11(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SipaccountsResponse11
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsCreateRequest](src/DidLogic/Requests/SipAccounts/SipaccountsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse2](src/DidLogic/Models/ApiV1SipaccountsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsCreateError](src/DidLogic/Errors/SipaccountsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SipaccountsDestroy(SipaccountsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.SipAccounts.SipaccountsDestroy(new SipaccountsDestroyRequest { Id = "01234" });
}
catch (ApiException<SipaccountsDestroyError> ex)
{
    if (ex.Error.TryGetApiV1Sipaccounts403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Sipaccounts403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsDestroyRequest](src/DidLogic/Requests/SipAccounts/SipaccountsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsDestroyError](src/DidLogic/Errors/SipaccountsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SipaccountsResponse&gt; SipaccountsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SipAccounts.SipaccountsIndex();
    // TODO: Handle 'response' of type ApiV1SipaccountsResponse
}
catch (ApiException<SipaccountsIndexError> ex)
{
    if (ex.Error.TryGetApiV1SipaccountsResponse11(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SipaccountsResponse11
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse](src/DidLogic/Models/ApiV1SipaccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsIndexError](src/DidLogic/Errors/SipaccountsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SipaccountsResponse4&gt; SipaccountsShow(SipaccountsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SipAccounts.SipaccountsShow(new SipaccountsShowRequest { Id = "01234" });
    // TODO: Handle 'response' of type ApiV1SipaccountsResponse4
}
catch (ApiException<SipaccountsShowError> ex)
{
    if (ex.Error.TryGetApiV1Sipaccounts403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Sipaccounts403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsShowRequest](src/DidLogic/Requests/SipAccounts/SipaccountsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse4](src/DidLogic/Models/ApiV1SipaccountsResponse4.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsShowError](src/DidLogic/Errors/SipaccountsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SipaccountsResponse5&gt; SipaccountsUpdate(SipaccountsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SipAccounts.SipaccountsUpdate(new SipaccountsUpdateRequest
    {
        Id = "01234",
        Body = new ApiV1SipaccountsRequest1(),
    });
    // TODO: Handle 'response' of type ApiV1SipaccountsResponse5
}
catch (ApiException<SipaccountsUpdateError> ex)
{
    if (ex.Error.TryGetApiV1Sipaccounts403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Sipaccounts403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SipaccountsUpdateRequest](src/DidLogic/Requests/SipAccounts/SipaccountsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SipaccountsResponse5](src/DidLogic/Models/ApiV1SipaccountsResponse5.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SipaccountsUpdateError](src/DidLogic/Errors/SipaccountsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SmsApi

> Source: [SmsApi](src/DidLogic/Api/SmsApi.cs)

<details>
<summary><code>Task&lt;ApiV1SmsResponse1&gt; SmsCreate(SmsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SmsApi.SmsCreate(new SmsCreateRequest
    {
        Body = new ApiV1SmsRequest
        {
            Sm = new Sm1
            {
                Source = "some example string",
                Destination = "some example string",
                Message = "some example string",
            },
        },
    });
    // TODO: Handle 'response' of type ApiV1SmsResponse1
}
catch (ApiException<SmsCreateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SmsCreateRequest](src/DidLogic/Requests/SmsApi/SmsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SmsResponse1](src/DidLogic/Models/ApiV1SmsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SmsCreateError](src/DidLogic/Errors/SmsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SmsResponse&gt; SmsIndex(SmsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SmsApi.SmsIndex(new SmsIndexRequest());
    // TODO: Handle 'response' of type ApiV1SmsResponse
}
catch (ApiException<SmsIndexError> ex)
{
    if (ex.Error.TryGetApiV1Sms403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Sms403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SmsIndexRequest](src/DidLogic/Requests/SmsApi/SmsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SmsResponse](src/DidLogic/Models/ApiV1SmsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SmsIndexError](src/DidLogic/Errors/SmsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SmsResponse3&gt; SmsShow(SmsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SmsApi.SmsShow(new SmsShowRequest { Id = 0 });
    // TODO: Handle 'response' of type ApiV1SmsResponse3
}
catch (ApiException<SmsShowError> ex)
{
    if (ex.Error.TryGetApiV1Sms403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Sms403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SmsShowRequest](src/DidLogic/Requests/SmsApi/SmsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SmsResponse3](src/DidLogic/Models/ApiV1SmsResponse3.cs)</code>

**OnError**: <code>[ApiException](src/DidLogic/Core/Exceptions/ApiException.cs)&lt;[SmsShowError](src/DidLogic/Errors/SmsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

