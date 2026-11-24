# Reference

> Source: [JidClient](src/client.ts)

## Monitors

> Source: [Monitors](src/resources/monitors.ts)

<details>
<summary><code>createMonitor(request: Monitors.CreateMonitorRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Monitors.CreateMonitorError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.createMonitor({ body: { entityId: "some example string" } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Monitors.CreateMonitorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .createMonitor({ body: { entityId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body</code> | <code>[V1MonitorsRequest](src/models/v1-monitors-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.createMonitor(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Monitors.CreateMonitorError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.createMonitor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Monitors.CreateMonitorError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMonitor(request: Monitors.DeleteMonitorRequest, options?: RequestOptions): ApiPromise&lt;undefined, Monitors.DeleteMonitorError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.monitors.deleteMonitor({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Monitors.DeleteMonitorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors.deleteMonitor({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.deleteMonitor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Monitors.DeleteMonitorError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.deleteMonitor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Monitors.DeleteMonitorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitors(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Monitors.ListMonitorsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.listMonitors();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ListMonitorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors.listMonitors().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.listMonitors()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Monitors.ListMonitorsError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.listMonitors().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Monitors.ListMonitorsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Qualify

> Source: [Qualify](src/resources/qualify.ts)

<details>
<summary><code>getResults(request: Qualify.GetResultsRequest, options?: RequestOptions): ApiPromise&lt;V1ResultsResponse, Qualify.GetResultsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qualify.getResults({ ids: "some example string" });
  // TODO: Handle 'response' of type V1ResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Qualify.GetResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qualify.getResults({ ids: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ResultsResponse
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
| <code>ids</code> | <code>string</code> | Comma-separated qual_ ids, up to 200 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qualify.getResults(request)`

- **OnSuccess**: <code>[V1ResultsResponse](src/models/v1-results-response.ts)</code>
- **OnError**: throws <code>[Qualify.GetResultsError](src/resources/qualify.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qualify.getResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ResultsResponse, Qualify.GetResultsError&gt;</code>, with `result.value` of type <code>[V1ResultsResponse](src/models/v1-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>qualifyCounterparty(request: Qualify.QualifyCounterpartyRequest, options?: RequestOptions): ApiPromise&lt;Qualification, Qualify.QualifyCounterpartyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons), a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only: personal webmail, a disposable address or no confident business match returns assessment individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing decisions about individuals.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qualify.qualifyCounterparty({ body: { email: "some example string" } });
  // TODO: Handle 'response' of type Qualification
} catch (err) {
  // TODO: Handle 'err' of type Qualify.QualifyCounterpartyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qualify
  .qualifyCounterparty({ body: { email: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Qualification
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
| <code>body</code> | <code>[V1QualifyRequest2](src/models/unions/v1-qualify-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qualify.qualifyCounterparty(request)`

- **OnSuccess**: <code>[Qualification](src/models/qualification.ts)</code>
- **OnError**: throws <code>[Qualify.QualifyCounterpartyError](src/resources/qualify.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qualify.qualifyCounterparty(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Qualification, Qualify.QualifyCounterpartyError&gt;</code>, with `result.value` of type <code>[Qualification](src/models/qualification.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recordOutcome(request: Qualify.RecordOutcomeRequest, options?: RequestOptions): ApiPromise&lt;V1OutcomesResponse, Qualify.RecordOutcomeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link. Free. Stored without personal data for 13 months; outcomes tune the published rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qualify.recordOutcome({ body: {} });
  // TODO: Handle 'response' of type V1OutcomesResponse
} catch (err) {
  // TODO: Handle 'err' of type Qualify.RecordOutcomeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qualify.recordOutcome({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OutcomesResponse
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
| <code>body</code> | <code>[V1OutcomesRequest](src/models/v1-outcomes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qualify.recordOutcome(request)`

- **OnSuccess**: <code>[V1OutcomesResponse](src/models/v1-outcomes-response.ts)</code>
- **OnError**: throws <code>[Qualify.RecordOutcomeError](src/resources/qualify.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qualify.recordOutcome(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OutcomesResponse, Qualify.RecordOutcomeError&gt;</code>, with `result.value` of type <code>[V1OutcomesResponse](src/models/v1-outcomes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Screen

> Source: [Screen](src/resources/screen.ts)

<details>
<summary><code>emailCheck(request: Screen.EmailCheckRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Screen.EmailCheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether the From domain or a business display name imitates a known company's registered domain. Returns checks and a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no AI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screen.emailCheck({ body: { headers: "some example string" } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Screen.EmailCheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screen.emailCheck({ body: { headers: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body</code> | <code>[V1EmailCheckRequest](src/models/v1-email-check-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screen.emailCheck(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Screen.EmailCheckError](src/resources/screen.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screen.emailCheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Screen.EmailCheckError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>screen(request: Screen.ScreenRequest, options?: RequestOptions): ApiPromise&lt;ScreenResult, Screen.ScreenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url, email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence, subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version 2026-10-05.2: https://jid.com/screen-rules

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screen.screen({ body: {} });
  // TODO: Handle 'response' of type ScreenResult
} catch (err) {
  // TODO: Handle 'err' of type Screen.ScreenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screen.screen({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScreenResult
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
| <code>body</code> | <code>[V1ScreenRequest](src/models/v1-screen-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screen.screen(request)`

- **OnSuccess**: <code>[ScreenResult](src/models/screen-result.ts)</code>
- **OnError**: throws <code>[Screen.ScreenError](src/resources/screen.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screen.screen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScreenResult, Screen.ScreenError&gt;</code>, with `result.value` of type <code>[ScreenResult](src/models/screen-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>screenGet(request?: Screen.ScreenGetRequest, options?: RequestOptions): ApiPromise&lt;ScreenResult, Screen.ScreenGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same as POST /v1/screen, with the fields as query parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screen.screenGet();
  // TODO: Handle 'response' of type ScreenResult
} catch (err) {
  // TODO: Handle 'err' of type Screen.ScreenGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screen.screenGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScreenResult
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
| <code>domain?</code> | <code>string</code> | - |
| <code>url?</code> | <code>string</code> | - |
| <code>email?</code> | <code>string</code> | - |
| <code>phone?</code> | <code>string</code> | - |
| <code>companyName?</code> | <code>string</code> | - |
| <code>name?</code> | <code>string</code> | - |
| <code>context?</code> | <code>string</code> | - |
| <code>policy?</code> | <code>string</code> | - |
| <code>amount?</code> | <code>number</code> | - |
| <code>country?</code> | <code>string</code> | - |
| <code>ipCountry?</code> | <code>string</code> | - |
| <code>ipRegion?</code> | <code>string</code> | - |
| <code>ipAsn?</code> | <code>string</code> | - |
| <code>browserTimezone?</code> | <code>string</code> | - |
| <code>statedCountry?</code> | <code>string</code> | - |
| <code>signal?</code> | <code>string</code> | - |
| <code>site?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screen.screenGet(request)`

- **OnSuccess**: <code>[ScreenResult](src/models/screen-result.ts)</code>
- **OnError**: throws <code>[Screen.ScreenGetError](src/resources/screen.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screen.screenGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScreenResult, Screen.ScreenGetError&gt;</code>, with `result.value` of type <code>[ScreenResult](src/models/screen-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchBusinesses(request: Search.SearchBusinessesRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, Search.SearchBusinessesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers, French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5 business units, filed on demand, listed first).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchBusinesses({ q: "some example string" });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchBusinessesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchBusinesses({ q: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
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
| <code>q</code> | <code>string</code> | - |
| <code>country?</code> | <code>string</code> | ISO 3166-1 alpha-2. FR also searches the French SIRENE register live. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchBusinesses(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[Search.SearchBusinessesError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchBusinesses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, Search.SearchBusinessesError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignalApi

> Source: [SignalApi](src/resources/signal-api.ts)

<details>
<summary><code>signal(request?: SignalApi.SignalRequest, options?: RequestOptions): ApiPromise&lt;V1SignalResponse, SignalApi.SignalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's country, region, city and network type itself and returns an HMAC-signed token (never the IP) for the form to forward to /v1/qualify or /v1/screen as `signal`. No key, CORS open, never cached, rate-limited per IP. See https://jid.com/signals.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalApi.signal();
  // TODO: Handle 'response' of type V1SignalResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalApi.SignalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalApi.signal().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SignalResponse
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
| <code>tz?</code> | <code>string</code> | Browser IANA time zone |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalApi.signal(request)`

- **OnSuccess**: <code>[V1SignalResponse](src/models/v1-signal-response.ts)</code>
- **OnError**: throws <code>[SignalApi.SignalError](src/resources/signal-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalApi.signal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SignalResponse, SignalApi.SignalError&gt;</code>, with `result.value` of type <code>[V1SignalResponse](src/models/v1-signal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Verify

> Source: [Verify](src/resources/verify.ts)

<details>
<summary><code>getBusinessFile(request: Verify.GetBusinessFileRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Verify.GetBusinessFileError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verify.getBusinessFile({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Verify.GetBusinessFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verify.getBusinessFile({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verify.getBusinessFile(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Verify.GetBusinessFileError](src/resources/verify.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verify.getBusinessFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Verify.GetBusinessFileError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReceipt(request: Verify.GetReceiptRequest, options?: RequestOptions): ApiPromise&lt;Receipt, Verify.GetReceiptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor or counterparty. Verify `signature.sig` over the canonical statement with the key at /.well-known/jid-keys.json.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verify.getReceipt({ receiptId: "some example string" });
  // TODO: Handle 'response' of type Receipt
} catch (err) {
  // TODO: Handle 'err' of type Verify.GetReceiptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verify.getReceipt({ receiptId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Receipt
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
| <code>receiptId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verify.getReceipt(request)`

- **OnSuccess**: <code>[Receipt](src/models/receipt.ts)</code>
- **OnError**: throws <code>[Verify.GetReceiptError](src/resources/verify.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verify.getReceipt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Receipt, Verify.GetReceiptError&gt;</code>, with `result.value` of type <code>[Receipt](src/models/receipt.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listActivities(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verify.listActivities();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verify.listActivities().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verify.listActivities()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.verify.listActivities().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyBusiness(request: Verify.VerifyBusinessRequest, options?: RequestOptions): ApiPromise&lt;VerifyResponse, Verify.VerifyBusinessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One check. Without activity, jurisdiction or amount: status, flags and every current fact with its receipts (unchanged since 1.0). With any of them: also `decision` (proceed | review | stop | insufficient_data) with reasons, and `receipt` (stored 13 months, Ed25519-signed). Act only on proceed; requirements Jid cannot check are unknown and lead to review.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verify.verifyBusiness({ id: "some example string" });
  // TODO: Handle 'response' of type VerifyResponse
} catch (err) {
  // TODO: Handle 'err' of type Verify.VerifyBusinessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verify.verifyBusiness({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VerifyResponse
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
| <code>id</code> | <code>string</code> | Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi). |
| <code>activity?</code> | <code>[Activity](src/models/activity.ts)</code> | What the business is about to do for you. Default general_commerce when jurisdiction or amount is given. Rules: https://jid.com/decision-rules |
| <code>jurisdiction?</code> | <code>string</code> | US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code. |
| <code>amount?</code> | <code>number</code> | Transaction amount. Context only: recorded on the receipt, never changes the rules. |
| <code>currency?</code> | <code>string</code> | ISO 4217 code for amount. Default USD. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verify.verifyBusiness(request)`

- **OnSuccess**: <code>[VerifyResponse](src/models/verify-response.ts)</code>
- **OnError**: throws <code>[Verify.VerifyBusinessError](src/resources/verify.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verify.verifyBusiness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VerifyResponse, Verify.VerifyBusinessError&gt;</code>, with `result.value` of type <code>[VerifyResponse](src/models/verify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JidError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

