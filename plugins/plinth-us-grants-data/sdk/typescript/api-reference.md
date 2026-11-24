# Reference

> Source: [PlinthUsGrantsDataClient](src/client.ts)

## Analyze

> Source: [Analyze](src/resources/analyze.ts)

<details>
<summary><code>askQuestion(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Analyze.AskQuestionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor per day, then a paid key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analyze.askQuestion();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Analyze.AskQuestionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analyze.askQuestion().asApiResult();
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

**Direct**: `await client.analyze.askQuestion()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Analyze.AskQuestionError](src/resources/analyze.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analyze.askQuestion().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Analyze.AskQuestionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](src/resources/batch.ts)

<details>
<summary><code>batchLookup(request: Batch.BatchLookupRequest, options?: RequestOptions): ApiPromise&lt;BatchResponse, Batch.BatchLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from the published vocabulary (`GET /api/v1/batch/fields`); the values come back in the same order, each with a status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of rows the balance does cover.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batch.batchLookup({ body: { rows: [{ field: "some example string" }] } });
  // TODO: Handle 'response' of type BatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Batch.BatchLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batch
  .batchLookup({ body: { rows: [{ field: "some example string" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchResponse
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
| <code>body</code> | <code>[BatchRequest](src/models/batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batch.batchLookup(request)`

- **OnSuccess**: <code>[BatchResponse](src/models/batch-response.ts)</code>
- **OnError**: throws <code>[Batch.BatchLookupError](src/resources/batch.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.batch.batchLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchResponse, Batch.BatchLookupError&gt;</code>, with `result.value` of type <code>[BatchResponse](src/models/batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBatchFields(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file so the client and the server cannot disagree about a field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batch.listBatchFields();
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
const result = await client.batch.listBatchFields().asApiResult();
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

**Direct**: `await client.batch.listBatchFields()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.batch.listBatchFields().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Credentials

> Source: [Credentials](src/resources/credentials.ts)

<details>
<summary><code>answerChallenge(request: Credentials.AnswerChallengeRequest, options?: RequestOptions): ApiPromise&lt;UnlockResult, Credentials.AnswerChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at issue time and nothing can drift from the data it described.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credentials.answerChallenge({ body: { answers: ["some example string"] } });
  // TODO: Handle 'response' of type UnlockResult
} catch (err) {
  // TODO: Handle 'err' of type Credentials.AnswerChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credentials
  .answerChallenge({ body: { answers: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UnlockResult
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
| <code>body</code> | <code>[AnswerRequest](src/models/answer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credentials.answerChallenge(request)`

- **OnSuccess**: <code>[UnlockResult](src/models/unlock-result.ts)</code>
- **OnError**: throws <code>[Credentials.AnswerChallengeError](src/resources/credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credentials.answerChallenge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UnlockResult, Credentials.AnswerChallengeError&gt;</code>, with `result.value` of type <code>[UnlockResult](src/models/unlock-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAgentKey(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no signature needed to read this.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credentials.describeAgentKey();
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
const result = await client.credentials.describeAgentKey().asApiResult();
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

**Direct**: `await client.credentials.describeAgentKey()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.credentials.describeAgentKey().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeChallenge(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credentials.describeChallenge();
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
const result = await client.credentials.describeChallenge().asApiResult();
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

**Direct**: `await client.credentials.describeChallenge()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.credentials.describeChallenge().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mintAgentKey(request: Credentials.MintAgentKeyRequest, options?: RequestOptions): ApiPromise&lt;TrialKey, Credentials.MintAgentKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing created in anyone else's name.

**The ordinary route needs no credential of any kind.** POST here with `purpose` and `source` and you get a key immediately — but LOCKED: it may make only the calls its challenge names. Make them, read the fields the questions ask about, POST those values to `/api/v1/agent-key/answer`, and the key unlocks for general use. When that budget is spent, take another challenge. As often as you like, free.

Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge budget, both announced in `x_plinth.warnings` at `caveat` severity.

**Signing is the alternative, not the requirement.** A caller that can publish an Ed25519 key directory and sign per RFC 9421 (Web Bot Auth profile: cover `@authority` and `signature-agent`, tag `web-bot-auth`, with `created`, `expires`, a `nonce` and a `keyid` that is the base64url JWK SHA-256 thumbprint) is issued at a higher tier with a larger budget and no challenges. That allowance IS a total and never refills. GET this path for the full ladder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credentials.mintAgentKey({
    body: { purpose: "some example string", source: "some example string" },
  });
  // TODO: Handle 'response' of type TrialKey
} catch (err) {
  // TODO: Handle 'err' of type Credentials.MintAgentKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credentials
  .mintAgentKey({ body: { purpose: "some example string", source: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrialKey
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
| <code>signatureAgent?</code> | <code>string</code> | The https origin publishing your key directory, as a structured-field string: "https://your-host.example". |
| <code>signatureInput?</code> | <code>string</code> | RFC 9421 covered components and parameters, e.g. sig=("@authority" "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth" |
| <code>signature?</code> | <code>string</code> | sig=:<base64 ed25519 signature>:  Send all three signature headers or none. |
| <code>body</code> | <code>[AgentKeyRequest](src/models/agent-key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credentials.mintAgentKey(request)`

- **OnSuccess**: <code>[TrialKey](src/models/trial-key.ts)</code>
- **OnError**: throws <code>[Credentials.MintAgentKeyError](src/resources/credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credentials.mintAgentKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrialKey, Credentials.MintAgentKeyError&gt;</code>, with `result.value` of type <code>[TrialKey](src/models/trial-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>takeChallenge(options?: RequestOptions): ApiPromise&lt;ChallengeIssued, Credentials.TakeChallengeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous questions turned out to be unanswerable from our side too.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credentials.takeChallenge();
  // TODO: Handle 'response' of type ChallengeIssued
} catch (err) {
  // TODO: Handle 'err' of type Credentials.TakeChallengeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credentials.takeChallenge().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChallengeIssued
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credentials.takeChallenge()`

- **OnSuccess**: <code>[ChallengeIssued](src/models/challenge-issued.ts)</code>
- **OnError**: throws <code>[Credentials.TakeChallengeError](src/resources/credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credentials.takeChallenge().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChallengeIssued, Credentials.TakeChallengeError&gt;</code>, with `result.value` of type <code>[ChallengeIssued](src/models/challenge-issued.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GrantsApi

> Source: [GrantsApi](src/resources/grants-api.ts)

<details>
<summary><code>getApiV1GrantsFunders(request?: GrantsApi.GetApiV1GrantsFundersRequest, options?: RequestOptions): ApiPromise&lt;FundersResponse, GrantsApi.GetApiV1GrantsFundersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and the first and last fiscal years they were active.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getApiV1GrantsFunders({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type FundersResponse
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.GetApiV1GrantsFundersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi
  .getApiV1GrantsFunders({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundersResponse
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several. |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several. |
| <code>idType?</code> | <code>[IdType1](src/models/unions/id-type1.ts)</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter. |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. |
| <code>minYear?</code> | <code>[MinYear](src/models/unions/min-year.ts)</code> | Lowest fiscal year to include (open-ended alternative to `year`). |
| <code>maxYear?</code> | <code>[MaxYear](src/models/unions/max-year.ts)</code> | Highest fiscal year to include. |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars). |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several. |
| <code>geoIdType?</code> | <code>[GeoIdType1](src/models/unions/geo-id-type1.ts)</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved. |
| <code>locationType?</code> | <code>[LocationType1](src/models/unions/location-type1.ts)</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers. |
| <code>country?</code> | <code>[CountryVariantQgdleu](src/models/unions/country-variant-qgdleu.ts)</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO). |
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later. |
| <code>support?</code> | <code>[Support](src/models/unions/support.ts)</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so. |
| <code>funderType?</code> | <code>[FunderType1](src/models/unions/funder-type1.ts)</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through. |
| <code>exclude?</code> | <code>[Exclude](src/models/unions/exclude.ts)</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter. |
| <code>excludeDaf?</code> | <code>[ExcludeDaf](src/models/unions/exclude-daf.ts)</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity). |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | Minimum grant amount, whole dollars. |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | Maximum grant amount, whole dollars. |
| <code>minMatchProb?</code> | <code>[MinMatchProb](src/models/unions/min-match-prob.ts)</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`. |
| <code>einSource?</code> | <code>[EinSource1](src/models/unions/ein-source1.ts)</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded. |
| <code>jurisdiction?</code> | <code>[Jurisdiction](src/models/unions/jurisdiction.ts)</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits. |
| <code>strict?</code> | <code>[Strict](src/models/unions/strict.ts)</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly. |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>population?</code> | <code>[Population](src/models/unions/population.ts)</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision. |
| <code>transaction?</code> | <code>[Transaction](src/models/unions/transaction.ts)</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV. |
| <code>includeGov?</code> | <code>[IncludeGov](src/models/unions/include-gov.ts)</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government. |
| <code>lastUpdated?</code> | <code>[LastUpdated](src/models/unions/last-updated.ts)</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves. |
| <code>profileLevels?</code> | <code>[ProfileLevels](src/models/unions/profile-levels.ts)</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform. |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | 1-based page number. Default 1. |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Maximum rows to return. |
| <code>sortBy?</code> | <code>[SortBy](src/models/unions/sort-by.ts)</code> | Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped. |
| <code>sortOrder?</code> | <code>[SortOrder11](src/models/unions/sort-order11.ts)</code> | asc or desc. Default desc. |
| <code>example?</code> | <code>[Example1](src/models/example1.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.getApiV1GrantsFunders(request)`

- **OnSuccess**: <code>[FundersResponse](src/models/funders-response.ts)</code>
- **OnError**: throws <code>[GrantsApi.GetApiV1GrantsFundersError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.getApiV1GrantsFunders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundersResponse, GrantsApi.GetApiV1GrantsFundersError&gt;</code>, with `result.value` of type <code>[FundersResponse](src/models/funders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GrantsRecipients(request?: GrantsApi.GetApiV1GrantsRecipientsRequest, options?: RequestOptions): ApiPromise&lt;RecipientsResponse, GrantsApi.GetApiV1GrantsRecipientsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct funders backed them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getApiV1GrantsRecipients({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type RecipientsResponse
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.GetApiV1GrantsRecipientsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi
  .getApiV1GrantsRecipients({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecipientsResponse
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several. |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several. |
| <code>idType?</code> | <code>[IdType1](src/models/unions/id-type1.ts)</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter. |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. |
| <code>minYear?</code> | <code>[MinYear](src/models/unions/min-year.ts)</code> | Lowest fiscal year to include (open-ended alternative to `year`). |
| <code>maxYear?</code> | <code>[MaxYear](src/models/unions/max-year.ts)</code> | Highest fiscal year to include. |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars). |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several. |
| <code>geoIdType?</code> | <code>[GeoIdType1](src/models/unions/geo-id-type1.ts)</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved. |
| <code>locationType?</code> | <code>[LocationType1](src/models/unions/location-type1.ts)</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers. |
| <code>country?</code> | <code>[CountryVariantQgdleu](src/models/unions/country-variant-qgdleu.ts)</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO). |
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later. |
| <code>support?</code> | <code>[Support](src/models/unions/support.ts)</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so. |
| <code>funderType?</code> | <code>[FunderType1](src/models/unions/funder-type1.ts)</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through. |
| <code>exclude?</code> | <code>[Exclude](src/models/unions/exclude.ts)</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter. |
| <code>excludeDaf?</code> | <code>[ExcludeDaf](src/models/unions/exclude-daf.ts)</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity). |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | Minimum grant amount, whole dollars. |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | Maximum grant amount, whole dollars. |
| <code>minMatchProb?</code> | <code>[MinMatchProb](src/models/unions/min-match-prob.ts)</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`. |
| <code>einSource?</code> | <code>[EinSource1](src/models/unions/ein-source1.ts)</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded. |
| <code>jurisdiction?</code> | <code>[Jurisdiction](src/models/unions/jurisdiction.ts)</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits. |
| <code>strict?</code> | <code>[Strict](src/models/unions/strict.ts)</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly. |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>population?</code> | <code>[Population](src/models/unions/population.ts)</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision. |
| <code>transaction?</code> | <code>[Transaction](src/models/unions/transaction.ts)</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV. |
| <code>includeGov?</code> | <code>[IncludeGov](src/models/unions/include-gov.ts)</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government. |
| <code>lastUpdated?</code> | <code>[LastUpdated](src/models/unions/last-updated.ts)</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves. |
| <code>profileLevels?</code> | <code>[ProfileLevels](src/models/unions/profile-levels.ts)</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform. |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | 1-based page number. Default 1. |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Maximum rows to return. |
| <code>sortBy?</code> | <code>[SortBy](src/models/unions/sort-by.ts)</code> | Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped. |
| <code>sortOrder?</code> | <code>[SortOrder11](src/models/unions/sort-order11.ts)</code> | asc or desc. Default desc. |
| <code>example?</code> | <code>[Example1](src/models/example1.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.getApiV1GrantsRecipients(request)`

- **OnSuccess**: <code>[RecipientsResponse](src/models/recipients-response.ts)</code>
- **OnError**: throws <code>[GrantsApi.GetApiV1GrantsRecipientsError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.getApiV1GrantsRecipients(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecipientsResponse, GrantsApi.GetApiV1GrantsRecipientsError&gt;</code>, with `result.value` of type <code>[RecipientsResponse](src/models/recipients-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GrantsSummary(request?: GrantsApi.GetApiV1GrantsSummaryRequest, options?: RequestOptions): ApiPromise&lt;SummaryResponse, GrantsApi.GetApiV1GrantsSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getApiV1GrantsSummary({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type SummaryResponse
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.GetApiV1GrantsSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi
  .getApiV1GrantsSummary({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummaryResponse
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several. |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several. |
| <code>idType?</code> | <code>[IdType1](src/models/unions/id-type1.ts)</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter. |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. |
| <code>minYear?</code> | <code>[MinYear](src/models/unions/min-year.ts)</code> | Lowest fiscal year to include (open-ended alternative to `year`). |
| <code>maxYear?</code> | <code>[MaxYear](src/models/unions/max-year.ts)</code> | Highest fiscal year to include. |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars). |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several. |
| <code>geoIdType?</code> | <code>[GeoIdType1](src/models/unions/geo-id-type1.ts)</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved. |
| <code>locationType?</code> | <code>[LocationType1](src/models/unions/location-type1.ts)</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers. |
| <code>country?</code> | <code>[CountryVariantQgdleu](src/models/unions/country-variant-qgdleu.ts)</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO). |
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later. |
| <code>support?</code> | <code>[Support](src/models/unions/support.ts)</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so. |
| <code>funderType?</code> | <code>[FunderType1](src/models/unions/funder-type1.ts)</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through. |
| <code>exclude?</code> | <code>[Exclude](src/models/unions/exclude.ts)</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter. |
| <code>excludeDaf?</code> | <code>[ExcludeDaf](src/models/unions/exclude-daf.ts)</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity). |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | Minimum grant amount, whole dollars. |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | Maximum grant amount, whole dollars. |
| <code>minMatchProb?</code> | <code>[MinMatchProb](src/models/unions/min-match-prob.ts)</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`. |
| <code>einSource?</code> | <code>[EinSource1](src/models/unions/ein-source1.ts)</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded. |
| <code>jurisdiction?</code> | <code>[Jurisdiction](src/models/unions/jurisdiction.ts)</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits. |
| <code>strict?</code> | <code>[Strict](src/models/unions/strict.ts)</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly. |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>population?</code> | <code>[Population](src/models/unions/population.ts)</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision. |
| <code>transaction?</code> | <code>[Transaction](src/models/unions/transaction.ts)</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV. |
| <code>includeGov?</code> | <code>[IncludeGov](src/models/unions/include-gov.ts)</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government. |
| <code>lastUpdated?</code> | <code>[LastUpdated](src/models/unions/last-updated.ts)</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves. |
| <code>profileLevels?</code> | <code>[ProfileLevels](src/models/unions/profile-levels.ts)</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform. |
| <code>example?</code> | <code>[Example3](src/models/example3.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.getApiV1GrantsSummary(request)`

- **OnSuccess**: <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: throws <code>[GrantsApi.GetApiV1GrantsSummaryError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.getApiV1GrantsSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummaryResponse, GrantsApi.GetApiV1GrantsSummaryError&gt;</code>, with `result.value` of type <code>[SummaryResponse](src/models/summary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1GrantsTransactions(request?: GrantsApi.GetApiV1GrantsTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse, GrantsApi.GetApiV1GrantsTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The graph traverses both ways: `funder_id` for everything a foundation funded, `recip_id` for every funder behind a nonprofit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getApiV1GrantsTransactions({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type TransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.GetApiV1GrantsTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi
  .getApiV1GrantsTransactions({
    funderId: "381675780",
    idType: IdType.Ein,
    year: "2023",
    subject: "Human Services",
    location: "MA",
    geoIdType: GeoIdType.State,
    locationType: LocationType.Recipient,
    country: "IN",
    query: "climate resilience",
    support: "general_operating",
    exclude: "daf,individuals,related_party",
    minMatchProb: "0.95",
    einSource: "filed",
    jurisdiction: "us",
    format: Format.Json,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several. |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several. |
| <code>idType?</code> | <code>[IdType1](src/models/unions/id-type1.ts)</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter. |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range. |
| <code>minYear?</code> | <code>[MinYear](src/models/unions/min-year.ts)</code> | Lowest fiscal year to include (open-ended alternative to `year`). |
| <code>maxYear?</code> | <code>[MaxYear](src/models/unions/max-year.ts)</code> | Highest fiscal year to include. |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars). |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several. |
| <code>geoIdType?</code> | <code>[GeoIdType1](src/models/unions/geo-id-type1.ts)</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved. |
| <code>locationType?</code> | <code>[LocationType1](src/models/unions/location-type1.ts)</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers. |
| <code>country?</code> | <code>[CountryVariantQgdleu](src/models/unions/country-variant-qgdleu.ts)</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO). |
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later. |
| <code>support?</code> | <code>[Support](src/models/unions/support.ts)</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so. |
| <code>funderType?</code> | <code>[FunderType1](src/models/unions/funder-type1.ts)</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through. |
| <code>exclude?</code> | <code>[Exclude](src/models/unions/exclude.ts)</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter. |
| <code>excludeDaf?</code> | <code>[ExcludeDaf](src/models/unions/exclude-daf.ts)</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity). |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | Minimum grant amount, whole dollars. |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | Maximum grant amount, whole dollars. |
| <code>minMatchProb?</code> | <code>[MinMatchProb](src/models/unions/min-match-prob.ts)</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`. |
| <code>einSource?</code> | <code>[EinSource1](src/models/unions/ein-source1.ts)</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded. |
| <code>jurisdiction?</code> | <code>[Jurisdiction](src/models/unions/jurisdiction.ts)</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits. |
| <code>strict?</code> | <code>[Strict](src/models/unions/strict.ts)</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly. |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>population?</code> | <code>[Population](src/models/unions/population.ts)</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision. |
| <code>transaction?</code> | <code>[Transaction](src/models/unions/transaction.ts)</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV. |
| <code>includeGov?</code> | <code>[IncludeGov](src/models/unions/include-gov.ts)</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government. |
| <code>lastUpdated?</code> | <code>[LastUpdated](src/models/unions/last-updated.ts)</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves. |
| <code>profileLevels?</code> | <code>[ProfileLevels](src/models/unions/profile-levels.ts)</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform. |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | 1-based page number. Default 1. |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Maximum rows to return. |
| <code>sortBy?</code> | <code>[SortBy](src/models/unions/sort-by.ts)</code> | Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped. |
| <code>sortOrder?</code> | <code>[SortOrder11](src/models/unions/sort-order11.ts)</code> | asc or desc. Default desc. |
| <code>example?</code> | <code>[Example](src/models/example.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.getApiV1GrantsTransactions(request)`

- **OnSuccess**: <code>[TransactionsResponse](src/models/transactions-response.ts)</code>
- **OnError**: throws <code>[GrantsApi.GetApiV1GrantsTransactionsError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.getApiV1GrantsTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse, GrantsApi.GetApiV1GrantsTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionsResponse](src/models/transactions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGrantsSummary(request?: GrantsApi.GetGrantsSummaryRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GrantsApi.GetGrantsSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.getGrantsSummary();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.GetGrantsSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi.getGrantsSummary().asApiResult();
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | - |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | - |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | - |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | - |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | - |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | - |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.getGrantsSummary(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GrantsApi.GetGrantsSummaryError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.getGrantsSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GrantsApi.GetGrantsSummaryError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFunders(request?: GrantsApi.ListFundersRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GrantsApi.ListFundersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and the first and last fiscal years they were active.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.listFunders();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.ListFundersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi.listFunders().asApiResult();
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | - |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | - |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | - |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | - |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | - |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | - |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | - |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.listFunders(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GrantsApi.ListFundersError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.listFunders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GrantsApi.ListFundersError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGrants(request?: GrantsApi.ListGrantsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GrantsApi.ListGrantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The graph traverses both ways: `funder_id` for everything a foundation funded, `recip_id` for every funder behind a nonprofit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.listGrants();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.ListGrantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi.listGrants().asApiResult();
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | - |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | - |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | - |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | - |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | - |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | - |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | - |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | - |
| <code>sortBy?</code> | <code>[SortBy](src/models/unions/sort-by.ts)</code> | - |
| <code>sortOrder?</code> | <code>[SortOrder1](src/models/unions/sort-order1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.listGrants(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GrantsApi.ListGrantsError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.listGrants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GrantsApi.ListGrantsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecipients(request?: GrantsApi.ListRecipientsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GrantsApi.ListRecipientsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct funders backed them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantsApi.listRecipients();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GrantsApi.ListRecipientsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantsApi.listRecipients().asApiResult();
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
| <code>funderId?</code> | <code>[FunderId](src/models/unions/funder-id.ts)</code> | - |
| <code>recipId?</code> | <code>[RecipId](src/models/unions/recip-id.ts)</code> | - |
| <code>year?</code> | <code>[YearPlinthUsDataGrantsApi](src/models/unions/year-plinth-us-data-grants-api.ts)</code> | - |
| <code>subject?</code> | <code>[Subject](src/models/unions/subject.ts)</code> | - |
| <code>location?</code> | <code>[Location1](src/models/unions/location1.ts)</code> | - |
| <code>minAmt?</code> | <code>[MinAmt](src/models/unions/min-amt.ts)</code> | - |
| <code>maxAmt?</code> | <code>[MaxAmt](src/models/unions/max-amt.ts)</code> | - |
| <code>page?</code> | <code>[Page](src/models/unions/page.ts)</code> | - |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantsApi.listRecipients(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GrantsApi.ListRecipientsError](src/resources/grants-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantsApi.listRecipients(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GrantsApi.ListRecipientsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/resources/meta.ts)

<details>
<summary><code>getMeta(request?: Meta.GetMetaRequest, options?: RequestOptions): ApiPromise&lt;MetaResponse, Meta.GetMetaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to Candid's `last_updated` filter: there is no per-row change stamp because the dataset is rebuilt as a whole from monthly IRS releases, so a client keeping its own copy in sync watches `dataset.version` and the fiscal year span here and re-pulls when either moves. Keyless and unmetered.

**`scope` carries TWO fiscal-year ends and they are not the same number.** `last_fiscal_year` is the newest year any row falls in — sync against this. `last_complete_fiscal_year` is the newest year that has finished arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so the corpus always holds a few hundred early filings for a year that has barely begun. `partial_fiscal_years` names every year still filling. Reporting `last_fiscal_year` as the coverage span overstates it by a year or two.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.meta.getMeta({ jurisdiction: "us" });
  // TODO: Handle 'response' of type MetaResponse
} catch (err) {
  // TODO: Handle 'err' of type Meta.GetMetaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.meta.getMeta({ jurisdiction: "us" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetaResponse
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
| <code>jurisdiction?</code> | <code>[Jurisdiction](src/models/unions/jurisdiction.ts)</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.meta.getMeta(request)`

- **OnSuccess**: <code>[MetaResponse](src/models/meta-response.ts)</code>
- **OnError**: throws <code>[Meta.GetMetaError](src/resources/meta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.meta.getMeta(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetaResponse, Meta.GetMetaError&gt;</code>, with `result.value` of type <code>[MetaResponse](src/models/meta-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>getApiV1EssentialsByEin(request: Organizations.GetApiV1EssentialsByEinRequest, options?: RequestOptions): ApiPromise&lt;EssentialsResponse, Organizations.GetApiV1EssentialsByEinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getApiV1EssentialsByEin({
    ein: "some example string",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type EssentialsResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetApiV1EssentialsByEinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getApiV1EssentialsByEin({ ein: "some example string", format: Format.Json })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EssentialsResponse
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
| <code>ein</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>example?</code> | <code>[Example1](src/models/example1.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getApiV1EssentialsByEin(request)`

- **OnSuccess**: <code>[EssentialsResponse](src/models/essentials-response.ts)</code>
- **OnError**: throws <code>[Organizations.GetApiV1EssentialsByEinError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getApiV1EssentialsByEin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EssentialsResponse, Organizations.GetApiV1EssentialsByEinError&gt;</code>, with `result.value` of type <code>[EssentialsResponse](src/models/essentials-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1PremierByEin(request: Organizations.GetApiV1PremierByEinRequest, options?: RequestOptions): ApiPromise&lt;PremierResponse, Organizations.GetApiV1PremierByEinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything in essentials plus full financials and the resolved geographic service footprint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getApiV1PremierByEin({
    ein: "some example string",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type PremierResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetApiV1PremierByEinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getApiV1PremierByEin({ ein: "some example string", format: Format.Json })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PremierResponse
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
| <code>ein</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>example?</code> | <code>[Example1](src/models/example1.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getApiV1PremierByEin(request)`

- **OnSuccess**: <code>[PremierResponse](src/models/premier-response.ts)</code>
- **OnError**: throws <code>[Organizations.GetApiV1PremierByEinError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getApiV1PremierByEin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PremierResponse, Organizations.GetApiV1PremierByEinError&gt;</code>, with `result.value` of type <code>[PremierResponse](src/models/premier-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiV1ScreeningByEin(request: Organizations.GetApiV1ScreeningByEinRequest, options?: RequestOptions): ApiPromise&lt;ComplianceResponse, Organizations.GetApiV1ScreeningByEinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus name screens against the OFAC sanctions lists (SDN and Consolidated, primary and alias names), the Internal Revenue Bulletin's §170 deletion announcements, and California registration (AG Registry + FTB). Every screen reports whether it RAN: a source that is unavailable comes back `not screened`, never `clear`.

`compliance.reliance` carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS publishes for relying on EO BMF data from a third party — element by element, with the EO BMF Extract revision date and whether it is the current one. `?format=pdf` returns the same screen as a one-page retainable report for the grant file (paid keys; §8.01(2) puts the retention obligation on the grantor).

The name screens are triage signals, not determinations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getApiV1ScreeningByEin({
    ein: "some example string",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type ComplianceResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetApiV1ScreeningByEinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getApiV1ScreeningByEin({ ein: "some example string", format: Format.Json })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ComplianceResponse
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
| <code>ein</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>compat?</code> | <code>[Compat](src/models/unions/compat.ts)</code> | Set to `candid` to render this record the way Candid's documentation describes it — notably booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or what they say. |
| <code>example?</code> | <code>[ExamplePlinthUsGrantsDataOrganizationsApi](src/models/example-plinth-us-grants-data-organizations-api.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getApiV1ScreeningByEin(request)`

- **OnSuccess**: <code>[ComplianceResponse](src/models/compliance-response.ts)</code>
- **OnError**: throws <code>[Organizations.GetApiV1ScreeningByEinError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getApiV1ScreeningByEin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ComplianceResponse, Organizations.GetApiV1ScreeningByEinError&gt;</code>, with `result.value` of type <code>[ComplianceResponse](src/models/compliance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompliance(request: Organizations.GetComplianceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Organizations.GetComplianceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an entity NAME screen, not a sanctions determination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getCompliance({ ein: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetComplianceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.getCompliance({ ein: "some example string" }).asApiResult();
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
| <code>ein</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getCompliance(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Organizations.GetComplianceError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getCompliance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Organizations.GetComplianceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComplianceBulk(request: Organizations.GetComplianceBulkRequest, options?: RequestOptions): ApiPromise&lt;BulkComplianceResponse, Organizations.GetComplianceBulkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The bulk form of `/screening/{ein}`, running byte-identical logic per EIN — a bulk screen that disagreed with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this takes 100. Costs ONE call from your monthly allowance, not one per EIN. `report_date` and `sources` are returned once for the batch, since every row is screened against the same reference files.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getComplianceBulk({ body: { eins: ["some example string"] } });
  // TODO: Handle 'response' of type BulkComplianceResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetComplianceBulkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getComplianceBulk({ body: { eins: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkComplianceResponse
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
| <code>compat?</code> | <code>[Compat](src/models/unions/compat.ts)</code> | Set to `candid` to render this record the way Candid's documentation describes it — notably booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or what they say. |
| <code>body</code> | <code>[BulkCompliance](src/models/bulk-compliance.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getComplianceBulk(request)`

- **OnSuccess**: <code>[BulkComplianceResponse](src/models/bulk-compliance-response.ts)</code>
- **OnError**: throws <code>[Organizations.GetComplianceBulkError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getComplianceBulk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkComplianceResponse, Organizations.GetComplianceBulkError&gt;</code>, with `result.value` of type <code>[BulkComplianceResponse](src/models/bulk-compliance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEssentials(request: Organizations.GetEssentialsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Organizations.GetEssentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getEssentials({ ein: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetEssentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.getEssentials({ ein: "some example string" }).asApiResult();
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
| <code>ein</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getEssentials(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Organizations.GetEssentialsError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getEssentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Organizations.GetEssentialsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGovFunding(request: Organizations.GetGovFundingRequest, options?: RequestOptions): ApiPromise&lt;GovFundingResponse, Organizations.GetGovFundingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is nine checkbooks, not national.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getGovFunding({
    ein: "some example string",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type GovFundingResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetGovFundingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getGovFunding({ ein: "some example string", format: Format.Json })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GovFundingResponse
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
| <code>ein</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |
| <code>fiscalYear?</code> | <code>[FiscalYear](src/models/unions/fiscal-year.ts)</code> | Restrict to one federal fiscal year of awards (October–September), e.g. 2023. |
| <code>kind?</code> | <code>[KindVariantYqwpsz](src/models/unions/kind-variant-yqwpsz.ts)</code> | `federal` for USAspending awards or `state` for the state checkbooks; omit for both. |
| <code>state?</code> | <code>[State1](src/models/unions/state1.ts)</code> | Two-letter state code, for the state-checkbook side only — whose books the money came from, not where the recipient sits. |
| <code>limit?</code> | <code>number</code> | Maximum rows to return.<br>**Default**: 200 |
| <code>example?</code> | <code>[Example1](src/models/example1.ts)</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getGovFunding(request)`

- **OnSuccess**: <code>[GovFundingResponse](src/models/gov-funding-response.ts)</code>
- **OnError**: throws <code>[Organizations.GetGovFundingError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getGovFunding(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GovFundingResponse, Organizations.GetGovFundingError&gt;</code>, with `result.value` of type <code>[GovFundingResponse](src/models/gov-funding-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPremier(request: Organizations.GetPremierRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Organizations.GetPremierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything in essentials plus full financials and the resolved geographic service footprint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getPremier({ ein: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetPremierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.getPremier({ ein: "some example string" }).asApiResult();
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
| <code>ein</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getPremier(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Organizations.GetPremierError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getPremier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Organizations.GetPremierError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchEssentials(request: Organizations.SearchEssentialsRequest, options?: RequestOptions): ApiPromise&lt;EssentialsSearchResponse, Organizations.SearchEssentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds: `search_terms`, `from`, `size`, `filters`, `sort`. This is the endpoint that corresponds to Candid's `/essentials/v4` — `GET /api/essentials/{ein}` is the single-record lookup, and mapping a search API onto it is the migration mistake worth avoiding.

Use `jurisdiction=ca` for Canadian organizations; the default is `us`. Financial filters use the filing currency, identified in `x_plinth.dataset`; currencies are never combined. Filters cover geography, IRS classification and financial ranges, all read from the organization's own filing. Candid's PCS subject, profile-participation and demographic filters have no counterpart; send one and it comes back named in `x_plinth.warnings` rather than being dropped.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.searchEssentials({ jurisdiction: "us", body: {} });
  // TODO: Handle 'response' of type EssentialsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.SearchEssentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.searchEssentials({ jurisdiction: "us", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EssentialsSearchResponse
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
| <code>jurisdiction?</code> | <code>[Jurisdiction](src/models/unions/jurisdiction.ts)</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits. |
| <code>body</code> | <code>[EssentialsSearch](src/models/essentials-search.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.searchEssentials(request)`

- **OnSuccess**: <code>[EssentialsSearchResponse](src/models/essentials-search-response.ts)</code>
- **OnError**: throws <code>[Organizations.SearchEssentialsError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.searchEssentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EssentialsSearchResponse, Organizations.SearchEssentialsError&gt;</code>, with `result.value` of type <code>[EssentialsSearchResponse](src/models/essentials-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyComplianceReport(request: Organizations.VerifyComplianceReportRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Organizations.VerifyComplianceReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recomputes the identifier and checks the signature over a compliance report you kept. **Keyless and unmetered** — a grantor confirming a filed document should not spend a screen doing it, and their auditor should not need a credential at all.

Reports also state `report_format`, which versions what the document ASSERTS: which limitations apply, which section governs a conflict, what the summary concludes. An older format is not wrong, but today's may describe the same organization differently, and the response says which you are holding.

Offline verification is equivalent and needs nothing from us: the Ed25519 public key is published on `/meta`. Note this is a detached signature over the report data, not an X.509/PAdES PDF signature — a PDF reader shows no signature panel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.verifyComplianceReport({ body: { body: {} } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Organizations.VerifyComplianceReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.verifyComplianceReport({ body: { body: {} } }).asApiResult();
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
| <code>body</code> | <code>[VerifyReport](src/models/verify-report.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.verifyComplianceReport(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Organizations.VerifyComplianceReportError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.verifyComplianceReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Organizations.VerifyComplianceReportError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pulse

> Source: [Pulse](src/resources/pulse.ts)

<details>
<summary><code>createPulse(request: Pulse.CreatePulseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.CreatePulseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals. The digest is available as JSON, an HTML page, a PDF, and optionally by email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.createPulse({ body: { eins: ["some example string"] } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.CreatePulseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse.createPulse({ body: { eins: ["some example string"] } }).asApiResult();
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
| <code>body</code> | <code>[PulseCreate](src/models/pulse-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.createPulse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.CreatePulseError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.createPulse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.CreatePulseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePulse(request: Pulse.DeletePulseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.DeletePulseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the subscription, its check state and every stored digest. There is no undo; pausing with `active: false` is the reversible form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.deletePulse({ subId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.DeletePulseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse.deletePulse({ subId: "some example string" }).asApiResult();
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
| <code>subId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.deletePulse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.DeletePulseError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.deletePulse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.DeletePulseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPulse(request: Pulse.GetPulseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.GetPulseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one has run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.getPulse({ subId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.GetPulseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse.getPulse({ subId: "some example string" }).asApiResult();
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
| <code>subId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.getPulse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.GetPulseError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.getPulse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.GetPulseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPulseLatest(request: Pulse.GetPulseLatestRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.GetPulseLatestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The digest payload as JSON by default; `format=html` renders the self-contained page (the same document the email carries), `format=pdf` the retainable report. Every finding is dated and carries its source; the provenance footer states the filing lag and what was not checked.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.getPulseLatest({ subId: "some example string", format: Format.Json });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.GetPulseLatestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse
  .getPulseLatest({ subId: "some example string", format: Format.Json })
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
| <code>subId</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.getPulseLatest(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.GetPulseLatestError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.getPulseLatest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.GetPulseLatestError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPulseRun(request: Pulse.GetPulseRunRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.GetPulseRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific past digest, unchanged since it ran — the same three formats as /latest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.getPulseRun({
    subId: "some example string",
    runId: "some example string",
    format: Format.Json,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.GetPulseRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse
  .getPulseRun({ subId: "some example string", runId: "some example string", format: Format.Json })
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
| <code>subId</code> | <code>string</code> | - |
| <code>runId</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.getPulseRun(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.GetPulseRunError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.getPulseRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.GetPulseRunError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPulse(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.ListPulseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every subscription created with this key, newest first. Subscriptions are scoped to the key that created them; another key's subscriptions are not listed and answer 404 by id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.listPulse();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.ListPulseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse.listPulse().asApiResult();
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

**Direct**: `await client.pulse.listPulse()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.ListPulseError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.listPulse().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.ListPulseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPulseRuns(request: Pulse.ListPulseRunsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.ListPulseRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.listPulseRuns({ subId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.ListPulseRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse.listPulseRuns({ subId: "some example string" }).asApiResult();
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
| <code>subId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.listPulseRuns(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.ListPulseRunsError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.listPulseRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.ListPulseRunsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runPulse(request: Pulse.RunPulseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.RunPulseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file today and reports changes from the next run on. `checks` narrows the run; `format=html|pdf` renders it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.runPulse({ subId: "some example string", format: Format.Json });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.RunPulseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse
  .runPulse({ subId: "some example string", format: Format.Json })
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
| <code>subId</code> | <code>string</code> | - |
| <code>checks?</code> | <code>[Checks2](src/models/unions/checks2.ts)</code> | Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit for the subscription's full set. |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | json (default) or xml. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.runPulse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.RunPulseError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.runPulse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.RunPulseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePulse(request: Pulse.UpdatePulseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pulse.UpdatePulseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; `active: false` pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pulse.updatePulse({ subId: "some example string", body: {} });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pulse.UpdatePulseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pulse.updatePulse({ subId: "some example string", body: {} }).asApiResult();
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
| <code>subId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PulsePatch](src/models/pulse-patch.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pulse.updatePulse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pulse.UpdatePulseError](src/resources/pulse.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pulse.updatePulse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pulse.UpdatePulseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Resolve

> Source: [Resolve](src/resources/resolve.ts)

<details>
<summary><code>getApiV1Search(request: Resolve.GetApiV1SearchRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SearchResponse, Resolve.GetApiV1SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches every US grantmaking foundation and funded nonprofit, or the Canadian charities register under `jurisdiction=ca`. **No API key required and not metered.**

`q` also accepts an EIN (`131684331` or `13-1684331`), which resolves against the index directly rather than as text. A parameter this endpoint does not accept comes back named in `x_plinth.warnings`, and `strict=1` turns that into a 400 — the same contract as the grant endpoints. Omitting `q` is a 400 rather than an empty result set, because an empty result set is indistinguishable from a genuine miss.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolve.getApiV1Search({ q: "skillman", state: "MI", example: "1" });
  // TODO: Handle 'response' of type ApiV1SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Resolve.GetApiV1SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolve
  .getApiV1Search({ q: "skillman", state: "MI", example: "1" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SearchResponse
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
| <code>q</code> | <code>string</code> | Search text. Fewer than 2 characters returns an empty result set. |
| <code>jurisdiction?</code> | <code>[JurisdictionEnum](src/models/jurisdiction-enum.ts)</code> | Which register to search: `us` (IRS, the default) or `ca` (CRA). Case-insensitive. One register per query, because `revenue` is the filing's own figure and the two currencies are never combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key passed as `q`.<br>**Default**: "us" |
| <code>state?</code> | <code>string</code> | Narrow to a two-letter region code — a US state, or a province or territory under `jurisdiction=ca`. Case-insensitive; anything else is reported in x_plinth.warnings rather than applied as a filter that cannot match. |
| <code>limit?</code> | <code>number</code> | Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.<br>**Default**: 20 |
| <code>min?</code> | <code>number</code> | Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under `jurisdiction=ca`, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop matches past the cut. |
| <code>max?</code> | <code>number</code> | Highest total revenue, in the same currency as `min`. |
| <code>strict?</code> | <code>string</code> | strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning. |
| <code>example?</code> | <code>string</code> | Return a canned example response instead of querying the index — keyless, unmetered, and the only way to see this envelope without sending a real `q`. `?example=1` is the plain case; `?example=list` names the others. Every example body carries `x_plinth.example`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolve.getApiV1Search(request)`

- **OnSuccess**: <code>[ApiV1SearchResponse](src/models/api-v1-search-response.ts)</code>
- **OnError**: throws <code>[Resolve.GetApiV1SearchError](src/resources/resolve.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolve.getApiV1Search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SearchResponse, Resolve.GetApiV1SearchError&gt;</code>, with `result.value` of type <code>[ApiV1SearchResponse](src/models/api-v1-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchOrganizations(request: Resolve.SearchOrganizationsRequest, options?: RequestOptions): ApiPromise&lt;ApiSearchResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches every US grantmaking foundation and funded nonprofit. **No API key required and not metered.**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolve.searchOrganizations({ q: "barancik", state: "FL" });
  // TODO: Handle 'response' of type ApiSearchResponse
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
const result = await client.resolve.searchOrganizations({ q: "barancik", state: "FL" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiSearchResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | Search text. Fewer than 2 characters returns an empty result set. |
| <code>state?</code> | <code>string</code> | Narrow to a US state, two-letter code. |
| <code>mode?</code> | <code>[ModeEnum](src/models/mode-enum.ts)</code> | text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.<br>**Default**: "text" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolve.searchOrganizations(request)`

- **OnSuccess**: <code>[ApiSearchResponse](src/models/api-search-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.resolve.searchOrganizations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiSearchResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiSearchResponse](src/models/api-search-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sql

> Source: [Sql](src/resources/sql.ts)

<details>
<summary><code>postApiV1Sql(request: Sql.PostApiV1SqlRequest, options?: RequestOptions): ApiPromise&lt;SqlResponse, Sql.PostApiV1SqlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query the grants warehouse directly when the fixed endpoints can't express the question.

Accepts ONE read-only statement: `SELECT` or `WITH ... SELECT`. Multiple statements, any DDL/DML, and
the file-reading functions (`read_parquet`, `read_csv`, …) are rejected — you query named views, not
files. The view list, every column, and the caveats that decide whether an answer is right are
documented at https://data.useplinth.com/developers/schema.

`grants` is the US corpus in US dollars; Canadian T3010 filings are a separate view, `grants_ca`, in
Canadian dollars. Neither is a filter on the other, because a total spanning both adds CAD to USD.

Two ceilings, and they bound different things. Results are capped at 2,000 rows
(`truncated: true` says you hit it) — aggregate in SQL rather than paging. Separately, a query is
cancelled after 30 seconds: the row cap limits the response, this limits the scan behind
it. A cancelled query returns 400, so narrow it with a `tax_year` or `funder_ein` filter and retry.

Every response carries `x_plinth.datasets`: the licence and required attribution for each corpus you
can reach here. Which one answered is not knowable per query, so all of them are listed. The Canadian
attribution is a condition of the licence — reproduce it wherever you publish figures drawn from it.

Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the
same as any other endpoint. Asset-intelligence and governance tables additionally need Pro.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sql.postApiV1Sql({ body: { sql: "some example string" } });
  // TODO: Handle 'response' of type SqlResponse
} catch (err) {
  // TODO: Handle 'err' of type Sql.PostApiV1SqlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sql.postApiV1Sql({ body: { sql: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SqlResponse
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
| <code>body</code> | <code>[ApiV1SqlRequest](src/models/api-v1-sql-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sql.postApiV1Sql(request)`

- **OnSuccess**: <code>[SqlResponse](src/models/sql-response.ts)</code>
- **OnError**: throws <code>[Sql.PostApiV1SqlError](src/resources/sql.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sql.postApiV1Sql(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SqlResponse, Sql.PostApiV1SqlError&gt;</code>, with `result.value` of type <code>[SqlResponse](src/models/sql-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runSql(request: Sql.RunSqlRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Sql.RunSqlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query the grants warehouse directly when the fixed endpoints can't express the question.

Accepts ONE read-only statement: `SELECT` or `WITH ... SELECT`. Multiple statements, any DDL/DML, and
the file-reading functions (`read_parquet`, `read_csv`, …) are rejected — you query named views, not
files. The view list, every column, and the caveats that decide whether an answer is right are
documented at https://data.useplinth.com/developers/schema.

Two ceilings, and they bound different things. Results are capped at 2,000 rows
(`truncated: true` says you hit it) — aggregate in SQL rather than paging. Separately, a query is
cancelled after 30 seconds: the row cap limits the response, this limits the scan behind
it. A cancelled query returns 400, so narrow it with a `tax_year` or `funder_ein` filter and retry.

Requires a paid key — there is no free SQL tier — and costs one call from your monthly allowance, the
same as any other endpoint. Asset-intelligence and governance tables additionally need Pro.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sql.runSql({ body: { sql: "some example string" } });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Sql.RunSqlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sql.runSql({ body: { sql: "some example string" } }).asApiResult();
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
| <code>body</code> | <code>[ApiSqlRequest](src/models/api-sql-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sql.runSql(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Sql.RunSqlError](src/resources/sql.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sql.runSql(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Sql.RunSqlError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PlinthUsGrantsDataError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

