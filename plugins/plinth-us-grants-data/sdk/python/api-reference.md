# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [PlinthUsGrantsDataClient](plinth_us_grants_data/client.py)

## Analyze

> Source: [Analyze](plinth_us_grants_data/apis/analyze.py)

<details>
<summary><code>def ask_question(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor per day, then a paid key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.analyze.ask_question()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskQuestionErrorBody
```

**Async**

```python
try:
    response = await async_client.analyze.ask_question()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskQuestionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[AskQuestionErrorBody](plinth_us_grants_data/errors/ask_question_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](plinth_us_grants_data/apis/batch.py)

<details>
<summary><code>def batch_lookup(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BatchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from the published vocabulary (`GET /api/v1/batch/fields`); the values come back in the same order, each with a status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of rows the balance does cover.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.batch.batch_lookup(BatchRequest(rows=[BatchRow(field="some example string")]))
    # TODO: Handle 'response' of type BatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchLookupErrorBody
```

**Async**

```python
try:
    response = await async_client.batch.batch_lookup(BatchRequest(rows=[BatchRow(field="some example string")]))
    # TODO: Handle 'response' of type BatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRequest](plinth_us_grants_data/models/batch_request.py) \| [BatchRequestDict](plinth_us_grants_data/models/batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchResponse](plinth_us_grants_data/models/batch_response.py)</code> -- One result per request row, in order.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[BatchLookupErrorBody](plinth_us_grants_data/errors/batch_lookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_batch_fields(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file so the client and the server cannot disagree about a field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.batch.list_batch_fields()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.batch.list_batch_fields()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[RawError](plinth_us_grants_data/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Credentials

> Source: [Credentials](plinth_us_grants_data/apis/credentials.py)

<details>
<summary><code>def answer_challenge(body: AnswerRequest | AnswerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> UnlockResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at issue time and nothing can drift from the data it described.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credentials.answer_challenge(AnswerRequest(answers=["some example string"]))
    # TODO: Handle 'response' of type UnlockResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnswerChallengeErrorBody
```

**Async**

```python
try:
    response = await async_client.credentials.answer_challenge(AnswerRequest(answers=["some example string"]))
    # TODO: Handle 'response' of type UnlockResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnswerChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AnswerRequest](plinth_us_grants_data/models/answer_request.py) \| [AnswerRequestDict](plinth_us_grants_data/models/answer_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UnlockResult](plinth_us_grants_data/models/unlock_result.py)</code> -- Unlocked, with the general call budget added.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[AnswerChallengeErrorBody](plinth_us_grants_data/errors/answer_challenge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 409, 429 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_agent_key(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no signature needed to read this.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credentials.describe_agent_key()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.credentials.describe_agent_key()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- How to get a key: the keyless challenge route, the signing alternative, and the tier ladder.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[RawError](plinth_us_grants_data/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_challenge(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credentials.describe_challenge()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.credentials.describe_challenge()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- The loop, in order.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[RawError](plinth_us_grants_data/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mint_agent_key(body: AgentKeyRequest | AgentKeyRequestDict, *, signature_agent: str | None = None, signature_input: str | None = None, signature: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TrialKey</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credentials.mint_agent_key(
        AgentKeyRequest(purpose="some example string", source="some example string")
    )
    # TODO: Handle 'response' of type TrialKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MintAgentKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.credentials.mint_agent_key(
        AgentKeyRequest(purpose="some example string", source="some example string")
    )
    # TODO: Handle 'response' of type TrialKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MintAgentKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AgentKeyRequest](plinth_us_grants_data/models/agent_key_request.py) \| [AgentKeyRequestDict](plinth_us_grants_data/models/agent_key_request.py)</code> | The request body. |
| <code>signature_agent</code> | <code>str \| None</code> | The https origin publishing your key directory, as a structured-field string: "https://your-host.example".<br>**Default**: <code>None</code> |
| <code>signature_input</code> | <code>str \| None</code> | RFC 9421 covered components and parameters, e.g. sig=("@authority" "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"<br>**Default**: <code>None</code> |
| <code>signature</code> | <code>str \| None</code> | sig=:<base64 ed25519 signature>:  Send all three signature headers or none.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrialKey](plinth_us_grants_data/models/trial_key.py)</code> -- A trial key, its expiry, its budget, and the challenge it arrives locked to.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[MintAgentKeyErrorBody](plinth_us_grants_data/errors/mint_agent_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 502, 503 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def take_challenge(*, request_options: RequestOptionsOrDict | None = None) -> ChallengeIssued</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous questions turned out to be unanswerable from our side too.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credentials.take_challenge()
    # TODO: Handle 'response' of type ChallengeIssued
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TakeChallengeErrorBody
```

**Async**

```python
try:
    response = await async_client.credentials.take_challenge()
    # TODO: Handle 'response' of type ChallengeIssued
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TakeChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChallengeIssued](plinth_us_grants_data/models/challenge_issued.py)</code> -- Three calls this key may now make, and where to answer.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[TakeChallengeErrorBody](plinth_us_grants_data/errors/take_challenge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GrantsApi

> Source: [GrantsApi](plinth_us_grants_data/apis/grants_api.py)

<details>
<summary><code>def get_api_v1_grants_funders(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: SortOrderOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> FundersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and the first and last fiscal years they were active.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.get_api_v1_grants_funders(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type FundersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsFundersErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.get_api_v1_grants_funders(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type FundersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsFundersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>id_type</code> | <code>[IdTypeOrStr](plinth_us_grants_data/models/enums/id_type.py) \| None</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range.<br>**Default**: <code>None</code> |
| <code>min_year</code> | <code>str \| None</code> | Lowest fiscal year to include (open-ended alternative to `year`).<br>**Default**: <code>None</code> |
| <code>max_year</code> | <code>str \| None</code> | Highest fiscal year to include.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars).<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>geo_id_type</code> | <code>[GeoIdTypeOrStr](plinth_us_grants_data/models/enums/geo_id_type.py) \| None</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved.<br>**Default**: <code>None</code> |
| <code>location_type</code> | <code>[LocationTypeOrStr](plinth_us_grants_data/models/enums/location_type.py) \| None</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO).<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later.<br>**Default**: <code>None</code> |
| <code>support</code> | <code>str \| None</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so.<br>**Default**: <code>None</code> |
| <code>funder_type</code> | <code>[FunderTypeOrStr](plinth_us_grants_data/models/enums/funder_type.py) \| None</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through.<br>**Default**: <code>None</code> |
| <code>exclude</code> | <code>str \| None</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.<br>**Default**: <code>None</code> |
| <code>exclude_daf</code> | <code>str \| None</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity).<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Minimum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Maximum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>min_match_prob</code> | <code>str \| None</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`.<br>**Default**: <code>None</code> |
| <code>ein_source</code> | <code>str \| None</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits.<br>**Default**: <code>None</code> |
| <code>strict</code> | <code>str \| None</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>population</code> | <code>str \| None</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision.<br>**Default**: <code>None</code> |
| <code>transaction</code> | <code>str \| None</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV.<br>**Default**: <code>None</code> |
| <code>include_gov</code> | <code>str \| None</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government.<br>**Default**: <code>None</code> |
| <code>last_updated</code> | <code>str \| None</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.<br>**Default**: <code>None</code> |
| <code>profile_levels</code> | <code>str \| None</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | 1-based page number. Default 1.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>str \| None</code> | Maximum rows to return.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>str \| None</code> | Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](plinth_us_grants_data/models/enums/sort_order.py) \| None</code> | asc or desc. Default desc.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[Example1OrStr](plinth_us_grants_data/models/enums/example1.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundersResponse](plinth_us_grants_data/models/funders_response.py)</code> -- Funders matching the filter, aggregated.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1GrantsFundersErrorBody](plinth_us_grants_data/errors/get_api_v1_grants_funders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_grants_recipients(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: SortOrderOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> RecipientsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct funders backed them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.get_api_v1_grants_recipients(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type RecipientsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsRecipientsErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.get_api_v1_grants_recipients(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type RecipientsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsRecipientsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>id_type</code> | <code>[IdTypeOrStr](plinth_us_grants_data/models/enums/id_type.py) \| None</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range.<br>**Default**: <code>None</code> |
| <code>min_year</code> | <code>str \| None</code> | Lowest fiscal year to include (open-ended alternative to `year`).<br>**Default**: <code>None</code> |
| <code>max_year</code> | <code>str \| None</code> | Highest fiscal year to include.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars).<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>geo_id_type</code> | <code>[GeoIdTypeOrStr](plinth_us_grants_data/models/enums/geo_id_type.py) \| None</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved.<br>**Default**: <code>None</code> |
| <code>location_type</code> | <code>[LocationTypeOrStr](plinth_us_grants_data/models/enums/location_type.py) \| None</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO).<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later.<br>**Default**: <code>None</code> |
| <code>support</code> | <code>str \| None</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so.<br>**Default**: <code>None</code> |
| <code>funder_type</code> | <code>[FunderTypeOrStr](plinth_us_grants_data/models/enums/funder_type.py) \| None</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through.<br>**Default**: <code>None</code> |
| <code>exclude</code> | <code>str \| None</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.<br>**Default**: <code>None</code> |
| <code>exclude_daf</code> | <code>str \| None</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity).<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Minimum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Maximum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>min_match_prob</code> | <code>str \| None</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`.<br>**Default**: <code>None</code> |
| <code>ein_source</code> | <code>str \| None</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits.<br>**Default**: <code>None</code> |
| <code>strict</code> | <code>str \| None</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>population</code> | <code>str \| None</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision.<br>**Default**: <code>None</code> |
| <code>transaction</code> | <code>str \| None</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV.<br>**Default**: <code>None</code> |
| <code>include_gov</code> | <code>str \| None</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government.<br>**Default**: <code>None</code> |
| <code>last_updated</code> | <code>str \| None</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.<br>**Default**: <code>None</code> |
| <code>profile_levels</code> | <code>str \| None</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | 1-based page number. Default 1.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>str \| None</code> | Maximum rows to return.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>str \| None</code> | Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](plinth_us_grants_data/models/enums/sort_order.py) \| None</code> | asc or desc. Default desc.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[Example1OrStr](plinth_us_grants_data/models/enums/example1.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecipientsResponse](plinth_us_grants_data/models/recipients_response.py)</code> -- Recipients matching the filter, aggregated.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1GrantsRecipientsErrorBody](plinth_us_grants_data/errors/get_api_v1_grants_recipients_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_grants_summary(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, example: Example3OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SummaryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.get_api_v1_grants_summary(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type SummaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.get_api_v1_grants_summary(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type SummaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>id_type</code> | <code>[IdTypeOrStr](plinth_us_grants_data/models/enums/id_type.py) \| None</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range.<br>**Default**: <code>None</code> |
| <code>min_year</code> | <code>str \| None</code> | Lowest fiscal year to include (open-ended alternative to `year`).<br>**Default**: <code>None</code> |
| <code>max_year</code> | <code>str \| None</code> | Highest fiscal year to include.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars).<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>geo_id_type</code> | <code>[GeoIdTypeOrStr](plinth_us_grants_data/models/enums/geo_id_type.py) \| None</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved.<br>**Default**: <code>None</code> |
| <code>location_type</code> | <code>[LocationTypeOrStr](plinth_us_grants_data/models/enums/location_type.py) \| None</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO).<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later.<br>**Default**: <code>None</code> |
| <code>support</code> | <code>str \| None</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so.<br>**Default**: <code>None</code> |
| <code>funder_type</code> | <code>[FunderTypeOrStr](plinth_us_grants_data/models/enums/funder_type.py) \| None</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through.<br>**Default**: <code>None</code> |
| <code>exclude</code> | <code>str \| None</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.<br>**Default**: <code>None</code> |
| <code>exclude_daf</code> | <code>str \| None</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity).<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Minimum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Maximum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>min_match_prob</code> | <code>str \| None</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`.<br>**Default**: <code>None</code> |
| <code>ein_source</code> | <code>str \| None</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits.<br>**Default**: <code>None</code> |
| <code>strict</code> | <code>str \| None</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>population</code> | <code>str \| None</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision.<br>**Default**: <code>None</code> |
| <code>transaction</code> | <code>str \| None</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV.<br>**Default**: <code>None</code> |
| <code>include_gov</code> | <code>str \| None</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government.<br>**Default**: <code>None</code> |
| <code>last_updated</code> | <code>str \| None</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.<br>**Default**: <code>None</code> |
| <code>profile_levels</code> | <code>str \| None</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[Example3OrStr](plinth_us_grants_data/models/enums/example3.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummaryResponse](plinth_us_grants_data/models/summary_response.py)</code> -- Totals and a per-year breakdown over the whole filter.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1GrantsSummaryErrorBody](plinth_us_grants_data/errors/get_api_v1_grants_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_grants_transactions(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: SortOrderOrStr | None = None, example: ExampleOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> TransactionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The graph traverses both ways: `funder_id` for everything a foundation funded, `recip_id` for every funder behind a nonprofit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.get_api_v1_grants_transactions(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type TransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsTransactionsErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.get_api_v1_grants_transactions(
        funder_id="381675780",
        id_type=IdType.EIN,
        year="2023",
        subject="Human Services",
        location="MA",
        geo_id_type=GeoIdType.STATE,
        location_type=LocationType.RECIPIENT,
        country="IN",
        query="climate resilience",
        support="general_operating",
        exclude="daf,individuals,related_party",
        min_match_prob="0.95",
        ein_source="filed",
        jurisdiction="us",
        format_=Format.JSON,
    )
    # TODO: Handle 'response' of type TransactionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1GrantsTransactionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>id_type</code> | <code>[IdTypeOrStr](plinth_us_grants_data/models/enums/id_type.py) \| None</code> | Accepted for Candid compatibility. Only `ein` is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Filing fiscal year. A single year, a comma-separated list, or a `2019-2023` range.<br>**Default**: <code>None</code> |
| <code>min_year</code> | <code>str \| None</code> | Lowest fiscal year to include (open-ended alternative to `year`).<br>**Default**: <code>None</code> |
| <code>max_year</code> | <code>str \| None</code> | Highest fiscal year to include.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars).<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Place filter. **Whose place it is comes from `location_type`, which defaults to the RECIPIENT** — so on /grants/funders, `location=MA` returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set `location_type=funder` for the other reading. How the value itself is read comes from `geo_id_type` (default: two-letter US state). Comma-separate for several.<br>**Default**: <code>None</code> |
| <code>geo_id_type</code> | <code>[GeoIdTypeOrStr](plinth_us_grants_data/models/enums/geo_id_type.py) \| None</code> | How `location` is interpreted: state (default) \| zip \| city \| county_fips \| country. GeoNames ids are not resolved.<br>**Default**: <code>None</code> |
| <code>location_type</code> | <code>[LocationTypeOrStr](plinth_us_grants_data/models/enums/location_type.py) \| None</code> | Whose geography `location` refers to: recipient (default) \| funder \| area_served. `area_served` means the funder demonstrably gives there — see the response note for exactly what it covers.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO).<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in `x_plinth.warnings`; check `description` on the rows to see which you got. **Requires a narrowing filter** — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later.<br>**Default**: <code>None</code> |
| <code>support</code> | <code>str \| None</code> | Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so.<br>**Default**: <code>None</code> |
| <code>funder_type</code> | <code>[FunderTypeOrStr](plinth_us_grants_data/models/enums/funder_type.py) \| None</code> | private_foundation \| public_charity \| daf_or_passthrough. Separates institutional money from donor-advised pass-through.<br>**Default**: <code>None</code> |
| <code>exclude</code> | <code>str \| None</code> | Drop structurally distorting flows, comma-separated: daf \| individuals \| related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, `x_plinth.excluded` prices each class against your own filter.<br>**Default**: <code>None</code> |
| <code>exclude_daf</code> | <code>str \| None</code> | Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. **Reach for this whenever you rank by dollars.** DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to `exclude=daf`, and kept because the amount-ranked caveat names it; `exclude=` additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity).<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Minimum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Maximum grant amount, whole dollars.<br>**Default**: <code>None</code> |
| <code>min_match_prob</code> | <code>str \| None</code> | Keep only rows whose recipient EIN carries `x_plinth.match_prob` at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every `model` row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in `x_plinth.warnings`. For provenance, say so with `ein_source`.<br>**Default**: <code>None</code> |
| <code>ein_source</code> | <code>str \| None</code> | Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). `filed` is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded.<br>**Default**: <code>None</code> |
| <code>jurisdiction</code> | <code>str \| None</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits.<br>**Default**: <code>None</code> |
| <code>strict</code> | <code>str \| None</code> | Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>population</code> | <code>str \| None</code> | NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with `subject` plus `query`, and expect lower precision.<br>**Default**: <code>None</code> |
| <code>transaction</code> | <code>str \| None</code> | NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV.<br>**Default**: <code>None</code> |
| <code>include_gov</code> | <code>str \| None</code> | NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. `include_gov=false` is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government.<br>**Default**: <code>None</code> |
| <code>last_updated</code> | <code>str \| None</code> | NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read `x_plinth.dataset` on any response, or GET /api/meta, and re-sync when the build stamp moves.<br>**Default**: <code>None</code> |
| <code>profile_levels</code> | <code>str \| None</code> | NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | 1-based page number. Default 1.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>str \| None</code> | Maximum rows to return.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>str \| None</code> | Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](plinth_us_grants_data/models/enums/sort_order.py) \| None</code> | asc or desc. Default desc.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[ExampleOrStr](plinth_us_grants_data/models/enums/example.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsResponse](plinth_us_grants_data/models/transactions_response.py)</code> -- Grant lines matching the filter.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1GrantsTransactionsErrorBody](plinth_us_grants_data/errors/get_api_v1_grants_transactions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_grants_summary(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call for the whole shape of a filter: total dollars, grant count, distinct funders and recipients, plus a year-by-year breakdown. Cheaper than paging the rows to count them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.get_grants_summary()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGrantsSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.get_grants_summary()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGrantsSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetGrantsSummaryErrorBody](plinth_us_grants_data/errors/get_grants_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_funders(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, page: str | None = None, limit: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Funders matching the filter, ranked by total dollars: amount, grant count, distinct recipients reached, and the first and last fiscal years they were active.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.list_funders()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFundersErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.list_funders()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFundersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[ListFundersErrorBody](plinth_us_grants_data/errors/list_funders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_grants(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Individual grant rows — funder, recipient, amount, fiscal year, cause and the purpose text as filed. The graph traverses both ways: `funder_id` for everything a foundation funded, `recip_id` for every funder behind a nonprofit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.list_grants()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGrantsErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.list_grants()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGrantsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[ListGrantsErrorBody](plinth_us_grants_data/errors/list_grants_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_recipients(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, page: str | None = None, limit: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recipient organizations matching the filter, ranked by dollars received, with location and how many distinct funders backed them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.grants_api.list_recipients()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecipientsErrorBody
```

**Async**

```python
try:
    response = await async_client.grants_api.list_recipients()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecipientsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>funder_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>recip_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>subject</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>min_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_amt</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[ListRecipientsErrorBody](plinth_us_grants_data/errors/list_recipients_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](plinth_us_grants_data/apis/meta.py)

<details>
<summary><code>def get_meta(*, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MetaResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What is in the corpus, how current it is, and which Candid parameters this API honors. This is the answer to Candid's `last_updated` filter: there is no per-row change stamp because the dataset is rebuilt as a whole from monthly IRS releases, so a client keeping its own copy in sync watches `dataset.version` and the fiscal year span here and re-pulls when either moves. Keyless and unmetered.

**`scope` carries TWO fiscal-year ends and they are not the same number.** `last_fiscal_year` is the newest year any row falls in — sync against this. `last_complete_fiscal_year` is the newest year that has finished arriving, and it is the one to quote in prose: the IRS releases e-file data 12-24 months after the activity, so the corpus always holds a few hundred early filings for a year that has barely begun. `partial_fiscal_years` names every year still filling. Reporting `last_fiscal_year` as the coverage span overstates it by a year or two.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.meta.get_meta(jurisdiction="us")
    # TODO: Handle 'response' of type MetaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetaErrorBody
```

**Async**

```python
try:
    response = await async_client.meta.get_meta(jurisdiction="us")
    # TODO: Handle 'response' of type MetaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMetaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jurisdiction</code> | <code>str \| None</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetaResponse](plinth_us_grants_data/models/meta_response.py)</code> -- What this deployment holds, and how to get a key.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetMetaErrorBody](plinth_us_grants_data/errors/get_meta_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](plinth_us_grants_data/apis/organizations.py)

<details>
<summary><code>def get_api_v1_essentials_by_ein(ein: str, *, format_: FormatOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> EssentialsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_api_v1_essentials_by_ein("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type EssentialsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1EssentialsByEinErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_api_v1_essentials_by_ein("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type EssentialsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1EssentialsByEinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[Example1OrStr](plinth_us_grants_data/models/enums/example1.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EssentialsResponse](plinth_us_grants_data/models/essentials_response.py)</code> -- Identity and headline financials for one organization.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1EssentialsByEinErrorBody](plinth_us_grants_data/errors/get_api_v1_essentials_by_ein_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_premier_by_ein(ein: str, *, format_: FormatOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PremierResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything in essentials plus full financials and the resolved geographic service footprint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_api_v1_premier_by_ein("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type PremierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1PremierByEinErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_api_v1_premier_by_ein("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type PremierResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1PremierByEinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[Example1OrStr](plinth_us_grants_data/models/enums/example1.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PremierResponse](plinth_us_grants_data/models/premier_response.py)</code> -- The full record for one organization.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1PremierByEinErrorBody](plinth_us_grants_data/errors/get_api_v1_premier_by_ein_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_screening_by_ein(ein: str, *, format_: FormatOrStr | None = None, compat: str | None = None, example: ExamplePlinthUsGrantsDataOrganizationsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ComplianceResponse</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_api_v1_screening_by_ein("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type ComplianceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ScreeningByEinErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_api_v1_screening_by_ein("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type ComplianceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1ScreeningByEinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>compat</code> | <code>str \| None</code> | Set to `candid` to render this record the way Candid's documentation describes it — notably booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or what they say.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>[ExamplePlinthUsGrantsDataOrganizationsApiOrStr](plinth_us_grants_data/models/enums/example_plinth_us_grants_data_organizations_api.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComplianceResponse](plinth_us_grants_data/models/compliance_response.py)</code> -- A compliance screen for one organization.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1ScreeningByEinErrorBody](plinth_us_grants_data/errors/get_api_v1_screening_by_ein_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_compliance(ein: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an OFAC (Treasury SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The OFAC field is a triage signal — an entity NAME screen, not a sanctions determination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_compliance("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetComplianceErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_compliance("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetComplianceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetComplianceErrorBody](plinth_us_grants_data/errors/get_compliance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_compliance_bulk(body: BulkCompliance | BulkComplianceDict, *, compat: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BulkComplianceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The bulk form of `/screening/{ein}`, running byte-identical logic per EIN — a bulk screen that disagreed with the single-EIN screen would be worse than none. Candid's bulk Charity Check takes 25 organizations; this takes 100. Costs ONE call from your monthly allowance, not one per EIN. `report_date` and `sources` are returned once for the batch, since every row is screened against the same reference files.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_compliance_bulk(BulkCompliance(eins=["some example string"]))
    # TODO: Handle 'response' of type BulkComplianceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetComplianceBulkErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_compliance_bulk(BulkCompliance(eins=["some example string"]))
    # TODO: Handle 'response' of type BulkComplianceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetComplianceBulkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkCompliance](plinth_us_grants_data/models/bulk_compliance.py) \| [BulkComplianceDict](plinth_us_grants_data/models/bulk_compliance.py)</code> | The request body. |
| <code>compat</code> | <code>str \| None</code> | Set to `candid` to render this record the way Candid's documentation describes it — notably booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records match, or what they say.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkComplianceResponse](plinth_us_grants_data/models/bulk_compliance_response.py)</code> -- Screens for every valid EIN in the request.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetComplianceBulkErrorBody](plinth_us_grants_data/errors/get_compliance_bulk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_essentials(ein: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Name, location, NTEE classification and a financials summary from the latest filing we have parsed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_essentials("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEssentialsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_essentials("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEssentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetEssentialsErrorBody](plinth_us_grants_data/errors/get_essentials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_gov_funding(ein: str, *, format_: FormatOrStr | None = None, fiscal_year: int | None = None, kind: str | None = None, state: str | None = None, limit: int | None = 200, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> GovFundingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with agency and state rollups computed over every matching row. Pro plan. Obligations are money committed, not paid; state coverage is nine checkbooks, not national.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_gov_funding("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type GovFundingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGovFundingErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_gov_funding("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type GovFundingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGovFundingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>fiscal_year</code> | <code>int \| None</code> | Restrict to one federal fiscal year of awards (October–September), e.g. 2023.<br>**Default**: <code>None</code> |
| <code>kind</code> | <code>str \| None</code> | `federal` for USAspending awards or `state` for the state checkbooks; omit for both.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | Two-letter state code, for the state-checkbook side only — whose books the money came from, not where the recipient sits.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum rows to return.<br>**Default**: <code>200</code> |
| <code>example</code> | <code>[Example1OrStr](plinth_us_grants_data/models/enums/example1.py) \| None</code> | Return a canned example instead of querying the corpus. **Needs no API key and is not metered.** `1` is the plain success case; `list` enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GovFundingResponse](plinth_us_grants_data/models/gov_funding_response.py)</code> -- Federal and state government funding for one organization.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetGovFundingErrorBody](plinth_us_grants_data/errors/get_gov_funding_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_premier(ein: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything in essentials plus full financials and the resolved geographic service footprint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_premier("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPremierErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_premier("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPremierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ein</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetPremierErrorBody](plinth_us_grants_data/errors/get_premier_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_essentials(body: EssentialsSearch | EssentialsSearchDict, *, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EssentialsSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds: `search_terms`, `from`, `size`, `filters`, `sort`. This is the endpoint that corresponds to Candid's `/essentials/v4` — `GET /api/essentials/{ein}` is the single-record lookup, and mapping a search API onto it is the migration mistake worth avoiding.

Use `jurisdiction=ca` for Canadian organizations; the default is `us`. Financial filters use the filing currency, identified in `x_plinth.dataset`; currencies are never combined. Filters cover geography, IRS classification and financial ranges, all read from the organization's own filing. Candid's PCS subject, profile-participation and demographic filters have no counterpart; send one and it comes back named in `x_plinth.warnings` rather than being dropped.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.search_essentials(EssentialsSearch(), jurisdiction="us")
    # TODO: Handle 'response' of type EssentialsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchEssentialsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.search_essentials(EssentialsSearch(), jurisdiction="us")
    # TODO: Handle 'response' of type EssentialsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchEssentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EssentialsSearch](plinth_us_grants_data/models/essentials_search.py) \| [EssentialsSearchDict](plinth_us_grants_data/models/essentials_search.py)</code> | The request body. |
| <code>jurisdiction</code> | <code>str \| None</code> | Filing jurisdiction of the GRANT: us (default) \| ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind the answer. Distinct from `country`, which is where the RECIPIENT sits.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EssentialsSearchResponse](plinth_us_grants_data/models/essentials_search_response.py)</code> -- Organizations matching the search.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[SearchEssentialsErrorBody](plinth_us_grants_data/errors/search_essentials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_compliance_report(body: VerifyReport | VerifyReportDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.verify_compliance_report(VerifyReport(body={}))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyComplianceReportErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.verify_compliance_report(VerifyReport(body={}))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyComplianceReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[VerifyReport](plinth_us_grants_data/models/verify_report.py) \| [VerifyReportDict](plinth_us_grants_data/models/verify_report.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[VerifyComplianceReportErrorBody](plinth_us_grants_data/errors/verify_compliance_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Pulse

> Source: [Pulse](plinth_us_grants_data/apis/pulse.py)

<details>
<summary><code>def create_pulse(body: PulseCreate | PulseCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals. The digest is available as JSON, an HTML page, a PDF, and optionally by email.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.create_pulse(PulseCreate(eins=["some example string"]))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePulseErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.create_pulse(PulseCreate(eins=["some example string"]))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePulseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PulseCreate](plinth_us_grants_data/models/pulse_create.py) \| [PulseCreateDict](plinth_us_grants_data/models/pulse_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[CreatePulseErrorBody](plinth_us_grants_data/errors/create_pulse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pulse(sub_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the subscription, its check state and every stored digest. There is no undo; pausing with `active: false` is the reversible form.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.delete_pulse("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePulseErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.delete_pulse("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePulseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[DeletePulseErrorBody](plinth_us_grants_data/errors/delete_pulse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pulse(sub_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one has run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.get_pulse("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPulseErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.get_pulse("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPulseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetPulseErrorBody](plinth_us_grants_data/errors/get_pulse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pulse_latest(sub_id: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The digest payload as JSON by default; `format=html` renders the self-contained page (the same document the email carries), `format=pdf` the retainable report. Every finding is dated and carries its source; the provenance footer states the filing lag and what was not checked.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.get_pulse_latest("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPulseLatestErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.get_pulse_latest("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPulseLatestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetPulseLatestErrorBody](plinth_us_grants_data/errors/get_pulse_latest_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pulse_run(sub_id: str, run_id: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific past digest, unchanged since it ran — the same three formats as /latest.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.get_pulse_run("some example string", "some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPulseRunErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.get_pulse_run("some example string", "some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPulseRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetPulseRunErrorBody](plinth_us_grants_data/errors/get_pulse_run_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pulse(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every subscription created with this key, newest first. Subscriptions are scoped to the key that created them; another key's subscriptions are not listed and answer 404 by id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.list_pulse()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPulseErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.list_pulse()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPulseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[ListPulseErrorBody](plinth_us_grants_data/errors/list_pulse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pulse_runs(sub_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.list_pulse_runs("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPulseRunsErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.list_pulse_runs("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPulseRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[ListPulseRunsErrorBody](plinth_us_grants_data/errors/list_pulse_runs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_pulse(sub_id: str, *, checks: str | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file today and reports changes from the next run on. `checks` narrows the run; `format=html|pdf` renders it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.run_pulse("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunPulseErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.run_pulse("some example string", format_=Format.JSON)
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunPulseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>checks</code> | <code>str \| None</code> | Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit for the subscription's full set.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](plinth_us_grants_data/models/enums/format.py) \| None</code> | json (default) or xml.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[RunPulseErrorBody](plinth_us_grants_data/errors/run_pulse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pulse(sub_id: str, body: PulsePatch | PulsePatchDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; `active: false` pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pulse.update_pulse("some example string", PulsePatch())
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePulseErrorBody
```

**Async**

```python
try:
    response = await async_client.pulse.update_pulse("some example string", PulsePatch())
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePulseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PulsePatch](plinth_us_grants_data/models/pulse_patch.py) \| [PulsePatchDict](plinth_us_grants_data/models/pulse_patch.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[UpdatePulseErrorBody](plinth_us_grants_data/errors/update_pulse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| 422 | <code>[HttpValidationError](plinth_us_grants_data/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Resolve

> Source: [Resolve](plinth_us_grants_data/apis/resolve.py)

<details>
<summary><code>def get_api_v1_search(q: str, *, jurisdiction: JurisdictionModelOrStr | None = JurisdictionModel.US, state: str | None = None, limit: int | None = 20, min_: int | None = None, max_: int | None = None, strict: str | None = None, example: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1SearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches every US grantmaking foundation and funded nonprofit, or the Canadian charities register under `jurisdiction=ca`. **No API key required and not metered.**

`q` also accepts an EIN (`131684331` or `13-1684331`), which resolves against the index directly rather than as text. A parameter this endpoint does not accept comes back named in `x_plinth.warnings`, and `strict=1` turns that into a 400 — the same contract as the grant endpoints. Omitting `q` is a 400 rather than an empty result set, because an empty result set is indistinguishable from a genuine miss.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resolve.get_api_v1_search("skillman", state="MI", example="1")
    # TODO: Handle 'response' of type ApiV1SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1SearchErrorBody
```

**Async**

```python
try:
    response = await async_client.resolve.get_api_v1_search("skillman", state="MI", example="1")
    # TODO: Handle 'response' of type ApiV1SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiV1SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Search text. Fewer than 2 characters returns an empty result set. |
| <code>jurisdiction</code> | <code>[JurisdictionModelOrStr](plinth_us_grants_data/models/enums/jurisdiction_model.py) \| None</code> | Which register to search: `us` (IRS, the default) or `ca` (CRA). Case-insensitive. One register per query, because `revenue` is the filing's own figure and the two currencies are never combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key passed as `q`.<br>**Default**: <code>JurisdictionModel.US</code> |
| <code>state</code> | <code>str \| None</code> | Narrow to a two-letter region code — a US state, or a province or territory under `jurisdiction=ca`. Case-insensitive; anything else is reported in x_plinth.warnings rather than applied as a filter that cannot match.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.<br>**Default**: <code>20</code> |
| <code>min_</code> | <code>int \| None</code> | Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under `jurisdiction=ca`, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop matches past the cut.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Highest total revenue, in the same currency as `min`.<br>**Default**: <code>None</code> |
| <code>strict</code> | <code>str \| None</code> | strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.<br>**Default**: <code>None</code> |
| <code>example</code> | <code>str \| None</code> | Return a canned example response instead of querying the index — keyless, unmetered, and the only way to see this envelope without sending a real `q`. `?example=1` is the plain case; `?example=list` names the others. Every example body carries `x_plinth.example`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SearchResponse](plinth_us_grants_data/models/api_v1_search_response.py)</code> -- Matching organizations, best first.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[GetApiV1SearchErrorBody](plinth_us_grants_data/errors/get_api_v1_search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 503 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_organizations(q: str, *, state: str | None = None, mode: ModeModelOrStr | None = ModeModel.TEXT, request_options: RequestOptionsOrDict | None = None) -> ApiSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Entity resolution — the step that precedes every other call when you have a name rather than an EIN. Searches every US grantmaking foundation and funded nonprofit. **No API key required and not metered.**

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resolve.search_organizations("barancik", state="FL")
    # TODO: Handle 'response' of type ApiSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.resolve.search_organizations("barancik", state="FL")
    # TODO: Handle 'response' of type ApiSearchResponse
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
| <code>q</code> | <code>str</code> | Search text. Fewer than 2 characters returns an empty result set. |
| <code>state</code> | <code>str \| None</code> | Narrow to a US state, two-letter code.<br>**Default**: <code>None</code> |
| <code>mode</code> | <code>[ModeModelOrStr](plinth_us_grants_data/models/enums/mode_model.py) \| None</code> | text is keyword matching; semantic/hybrid add vector matching and fall back to text if unavailable.<br>**Default**: <code>ModeModel.TEXT</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiSearchResponse](plinth_us_grants_data/models/api_search_response.py)</code> -- Matching organizations, best first.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[RawError](plinth_us_grants_data/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sql

> Source: [Sql](plinth_us_grants_data/apis/sql.py)

<details>
<summary><code>def post_api_v1_sql(body: ApiV1SqlRequest | ApiV1SqlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SqlResponse</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sql.post_api_v1_sql(ApiV1SqlRequest(sql="some example string"))
    # TODO: Handle 'response' of type SqlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SqlErrorBody
```

**Async**

```python
try:
    response = await async_client.sql.post_api_v1_sql(ApiV1SqlRequest(sql="some example string"))
    # TODO: Handle 'response' of type SqlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApiV1SqlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SqlRequest](plinth_us_grants_data/models/api_v1_sql_request.py) \| [ApiV1SqlRequestDict](plinth_us_grants_data/models/api_v1_sql_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SqlResponse](plinth_us_grants_data/models/sql_response.py)</code> -- The rows the query returned.

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[PostApiV1SqlErrorBody](plinth_us_grants_data/errors/post_api_v1_sql_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_sql(body: ApiSqlRequest | ApiSqlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sql.run_sql(ApiSqlRequest(sql="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunSqlErrorBody
```

**Async**

```python
try:
    response = await async_client.sql.run_sql(ApiSqlRequest(sql="some example string"))
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunSqlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiSqlRequest](plinth_us_grants_data/models/api_sql_request.py) \| [ApiSqlRequestDict](plinth_us_grants_data/models/api_sql_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](plinth_us_grants_data/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](plinth_us_grants_data/core/exceptions.py)&#91;[RunSqlErrorBody](plinth_us_grants_data/errors/run_sql_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402 | <code>[ApiErrorModel](plinth_us_grants_data/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](plinth_us_grants_data/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

