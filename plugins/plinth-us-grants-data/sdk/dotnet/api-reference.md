# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [PlinthUsGrantsDataClient](src/PlinthUsGrantsData/PlinthUsGrantsDataClient.cs)

## Analyze

> Source: [Analyze](src/PlinthUsGrantsData/Api/Analyze.cs)

<details>
<summary><code>Task&lt;object&gt; AskQuestion(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Analyze.AskQuestion();
    // TODO: Handle 'response' of type object
}
catch (ApiException<AskQuestionError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[AskQuestionError](src/PlinthUsGrantsData/Errors/AskQuestionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](src/PlinthUsGrantsData/Api/Batch.cs)

<details>
<summary><code>Task&lt;BatchResponse&gt; BatchLookup(BatchLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Batch.BatchLookup(new BatchLookupRequest
    {
        Body = new BatchRequest { Rows = [new BatchRow { Field = "some example string" }] },
    });
    // TODO: Handle 'response' of type BatchResponse
}
catch (ApiException<BatchLookupError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchLookupRequest](src/PlinthUsGrantsData/Requests/Batch/BatchLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchResponse](src/PlinthUsGrantsData/Models/BatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[BatchLookupError](src/PlinthUsGrantsData/Errors/BatchLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListBatchFields(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Batch.ListBatchFields();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[RawError](src/PlinthUsGrantsData/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Credentials

> Source: [Credentials](src/PlinthUsGrantsData/Api/Credentials.cs)

<details>
<summary><code>Task&lt;UnlockResult&gt; AnswerChallenge(AnswerChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Credentials.AnswerChallenge(new AnswerChallengeRequest
    {
        Body = new AnswerRequest { Answers = ["some example string"] },
    });
    // TODO: Handle 'response' of type UnlockResult
}
catch (ApiException<AnswerChallengeError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnswerChallengeRequest](src/PlinthUsGrantsData/Requests/Credentials/AnswerChallengeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UnlockResult](src/PlinthUsGrantsData/Models/UnlockResult.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[AnswerChallengeError](src/PlinthUsGrantsData/Errors/AnswerChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DescribeAgentKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Credentials.DescribeAgentKey();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[RawError](src/PlinthUsGrantsData/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DescribeChallenge(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Credentials.DescribeChallenge();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[RawError](src/PlinthUsGrantsData/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrialKey&gt; MintAgentKey(MintAgentKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Credentials.MintAgentKey(new MintAgentKeyRequest
    {
        Body = new AgentKeyRequest { Purpose = "some example string", Source = "some example string" },
    });
    // TODO: Handle 'response' of type TrialKey
}
catch (ApiException<MintAgentKeyError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MintAgentKeyRequest](src/PlinthUsGrantsData/Requests/Credentials/MintAgentKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrialKey](src/PlinthUsGrantsData/Models/TrialKey.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[MintAgentKeyError](src/PlinthUsGrantsData/Errors/MintAgentKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChallengeIssued&gt; TakeChallenge(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Credentials.TakeChallenge();
    // TODO: Handle 'response' of type ChallengeIssued
}
catch (ApiException<TakeChallengeError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChallengeIssued](src/PlinthUsGrantsData/Models/ChallengeIssued.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[TakeChallengeError](src/PlinthUsGrantsData/Errors/TakeChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GrantsApi

> Source: [GrantsApi](src/PlinthUsGrantsData/Api/GrantsApi.cs)

<details>
<summary><code>Task&lt;FundersResponse&gt; GetApiV1GrantsFunders(GetApiV1GrantsFundersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.GetApiV1GrantsFunders(new GetApiV1GrantsFundersRequest
    {
        FunderId = "381675780",
        IdType = IdType.Ein,
        Year = "2023",
        Subject = "Human Services",
        Location = "MA",
        GeoIdType = GeoIdType.State,
        LocationType = LocationType.Recipient,
        Country = "IN",
        Query = "climate resilience",
        Support = "general_operating",
        Exclude = "daf,individuals,related_party",
        MinMatchProb = "0.95",
        EinSource = "filed",
        Jurisdiction = "us",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type FundersResponse
}
catch (ApiException<GetApiV1GrantsFundersError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GrantsFundersRequest](src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsFundersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundersResponse](src/PlinthUsGrantsData/Models/FundersResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GrantsFundersError](src/PlinthUsGrantsData/Errors/GetApiV1GrantsFundersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecipientsResponse&gt; GetApiV1GrantsRecipients(GetApiV1GrantsRecipientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.GetApiV1GrantsRecipients(new GetApiV1GrantsRecipientsRequest
    {
        FunderId = "381675780",
        IdType = IdType.Ein,
        Year = "2023",
        Subject = "Human Services",
        Location = "MA",
        GeoIdType = GeoIdType.State,
        LocationType = LocationType.Recipient,
        Country = "IN",
        Query = "climate resilience",
        Support = "general_operating",
        Exclude = "daf,individuals,related_party",
        MinMatchProb = "0.95",
        EinSource = "filed",
        Jurisdiction = "us",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type RecipientsResponse
}
catch (ApiException<GetApiV1GrantsRecipientsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GrantsRecipientsRequest](src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsRecipientsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecipientsResponse](src/PlinthUsGrantsData/Models/RecipientsResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GrantsRecipientsError](src/PlinthUsGrantsData/Errors/GetApiV1GrantsRecipientsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummaryResponse&gt; GetApiV1GrantsSummary(GetApiV1GrantsSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.GetApiV1GrantsSummary(new GetApiV1GrantsSummaryRequest
    {
        FunderId = "381675780",
        IdType = IdType.Ein,
        Year = "2023",
        Subject = "Human Services",
        Location = "MA",
        GeoIdType = GeoIdType.State,
        LocationType = LocationType.Recipient,
        Country = "IN",
        Query = "climate resilience",
        Support = "general_operating",
        Exclude = "daf,individuals,related_party",
        MinMatchProb = "0.95",
        EinSource = "filed",
        Jurisdiction = "us",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type SummaryResponse
}
catch (ApiException<GetApiV1GrantsSummaryError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GrantsSummaryRequest](src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummaryResponse](src/PlinthUsGrantsData/Models/SummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GrantsSummaryError](src/PlinthUsGrantsData/Errors/GetApiV1GrantsSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionsResponse&gt; GetApiV1GrantsTransactions(GetApiV1GrantsTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.GetApiV1GrantsTransactions(new GetApiV1GrantsTransactionsRequest
    {
        FunderId = "381675780",
        IdType = IdType.Ein,
        Year = "2023",
        Subject = "Human Services",
        Location = "MA",
        GeoIdType = GeoIdType.State,
        LocationType = LocationType.Recipient,
        Country = "IN",
        Query = "climate resilience",
        Support = "general_operating",
        Exclude = "daf,individuals,related_party",
        MinMatchProb = "0.95",
        EinSource = "filed",
        Jurisdiction = "us",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type TransactionsResponse
}
catch (ApiException<GetApiV1GrantsTransactionsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GrantsTransactionsRequest](src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsTransactionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsResponse](src/PlinthUsGrantsData/Models/TransactionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GrantsTransactionsError](src/PlinthUsGrantsData/Errors/GetApiV1GrantsTransactionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetGrantsSummary(GetGrantsSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.GetGrantsSummary(new GetGrantsSummaryRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetGrantsSummaryError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGrantsSummaryRequest](src/PlinthUsGrantsData/Requests/GrantsApi/GetGrantsSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetGrantsSummaryError](src/PlinthUsGrantsData/Errors/GetGrantsSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListFunders(ListFundersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.ListFunders(new ListFundersRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ListFundersError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFundersRequest](src/PlinthUsGrantsData/Requests/GrantsApi/ListFundersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[ListFundersError](src/PlinthUsGrantsData/Errors/ListFundersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListGrants(ListGrantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.ListGrants(new ListGrantsRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ListGrantsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGrantsRequest](src/PlinthUsGrantsData/Requests/GrantsApi/ListGrantsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[ListGrantsError](src/PlinthUsGrantsData/Errors/ListGrantsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListRecipients(ListRecipientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GrantsApi.ListRecipients(new ListRecipientsRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<ListRecipientsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecipientsRequest](src/PlinthUsGrantsData/Requests/GrantsApi/ListRecipientsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[ListRecipientsError](src/PlinthUsGrantsData/Errors/ListRecipientsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/PlinthUsGrantsData/Api/Meta.cs)

<details>
<summary><code>Task&lt;MetaResponse&gt; GetMeta(GetMetaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Meta.GetMeta(new GetMetaRequest { Jurisdiction = "us" });
    // TODO: Handle 'response' of type MetaResponse
}
catch (ApiException<GetMetaError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMetaRequest](src/PlinthUsGrantsData/Requests/Meta/GetMetaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetaResponse](src/PlinthUsGrantsData/Models/MetaResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetMetaError](src/PlinthUsGrantsData/Errors/GetMetaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/PlinthUsGrantsData/Api/Organizations.cs)

<details>
<summary><code>Task&lt;EssentialsResponse&gt; GetApiV1EssentialsByEin(GetApiV1EssentialsByEinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetApiV1EssentialsByEin(new GetApiV1EssentialsByEinRequest
    {
        Ein = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type EssentialsResponse
}
catch (ApiException<GetApiV1EssentialsByEinError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1EssentialsByEinRequest](src/PlinthUsGrantsData/Requests/Organizations/GetApiV1EssentialsByEinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EssentialsResponse](src/PlinthUsGrantsData/Models/EssentialsResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1EssentialsByEinError](src/PlinthUsGrantsData/Errors/GetApiV1EssentialsByEinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PremierResponse&gt; GetApiV1PremierByEin(GetApiV1PremierByEinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetApiV1PremierByEin(new GetApiV1PremierByEinRequest
    {
        Ein = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type PremierResponse
}
catch (ApiException<GetApiV1PremierByEinError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1PremierByEinRequest](src/PlinthUsGrantsData/Requests/Organizations/GetApiV1PremierByEinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PremierResponse](src/PlinthUsGrantsData/Models/PremierResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1PremierByEinError](src/PlinthUsGrantsData/Errors/GetApiV1PremierByEinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ComplianceResponse&gt; GetApiV1ScreeningByEin(GetApiV1ScreeningByEinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetApiV1ScreeningByEin(new GetApiV1ScreeningByEinRequest
    {
        Ein = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type ComplianceResponse
}
catch (ApiException<GetApiV1ScreeningByEinError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ScreeningByEinRequest](src/PlinthUsGrantsData/Requests/Organizations/GetApiV1ScreeningByEinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComplianceResponse](src/PlinthUsGrantsData/Models/ComplianceResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ScreeningByEinError](src/PlinthUsGrantsData/Errors/GetApiV1ScreeningByEinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompliance(GetComplianceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetCompliance(new GetComplianceRequest { Ein = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetComplianceError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetComplianceRequest](src/PlinthUsGrantsData/Requests/Organizations/GetComplianceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetComplianceError](src/PlinthUsGrantsData/Errors/GetComplianceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkComplianceResponse&gt; GetComplianceBulk(GetComplianceBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetComplianceBulk(new GetComplianceBulkRequest
    {
        Body = new BulkCompliance { Eins = ["some example string"] },
    });
    // TODO: Handle 'response' of type BulkComplianceResponse
}
catch (ApiException<GetComplianceBulkError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetComplianceBulkRequest](src/PlinthUsGrantsData/Requests/Organizations/GetComplianceBulkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkComplianceResponse](src/PlinthUsGrantsData/Models/BulkComplianceResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetComplianceBulkError](src/PlinthUsGrantsData/Errors/GetComplianceBulkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetEssentials(GetEssentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetEssentials(new GetEssentialsRequest { Ein = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetEssentialsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEssentialsRequest](src/PlinthUsGrantsData/Requests/Organizations/GetEssentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetEssentialsError](src/PlinthUsGrantsData/Errors/GetEssentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GovFundingResponse&gt; GetGovFunding(GetGovFundingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetGovFunding(new GetGovFundingRequest
    {
        Ein = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type GovFundingResponse
}
catch (ApiException<GetGovFundingError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGovFundingRequest](src/PlinthUsGrantsData/Requests/Organizations/GetGovFundingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GovFundingResponse](src/PlinthUsGrantsData/Models/GovFundingResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetGovFundingError](src/PlinthUsGrantsData/Errors/GetGovFundingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetPremier(GetPremierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetPremier(new GetPremierRequest { Ein = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetPremierError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPremierRequest](src/PlinthUsGrantsData/Requests/Organizations/GetPremierRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetPremierError](src/PlinthUsGrantsData/Errors/GetPremierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EssentialsSearchResponse&gt; SearchEssentials(SearchEssentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.SearchEssentials(new SearchEssentialsRequest
    {
        Jurisdiction = "us",
        Body = new EssentialsSearch(),
    });
    // TODO: Handle 'response' of type EssentialsSearchResponse
}
catch (ApiException<SearchEssentialsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchEssentialsRequest](src/PlinthUsGrantsData/Requests/Organizations/SearchEssentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EssentialsSearchResponse](src/PlinthUsGrantsData/Models/EssentialsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[SearchEssentialsError](src/PlinthUsGrantsData/Errors/SearchEssentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; VerifyComplianceReport(VerifyComplianceReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.VerifyComplianceReport(new VerifyComplianceReportRequest
    {
        Body = new VerifyReport { Body = body },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<VerifyComplianceReportError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VerifyComplianceReportRequest](src/PlinthUsGrantsData/Requests/Organizations/VerifyComplianceReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[VerifyComplianceReportError](src/PlinthUsGrantsData/Errors/VerifyComplianceReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pulse

> Source: [Pulse](src/PlinthUsGrantsData/Api/Pulse.cs)

<details>
<summary><code>Task&lt;object&gt; CreatePulse(CreatePulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.CreatePulse(new CreatePulseRequest
    {
        Body = new PulseCreate { Eins = ["some example string"] },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CreatePulseError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePulseRequest](src/PlinthUsGrantsData/Requests/Pulse/CreatePulseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[CreatePulseError](src/PlinthUsGrantsData/Errors/CreatePulseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeletePulse(DeletePulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.DeletePulse(new DeletePulseRequest { SubId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeletePulseError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePulseRequest](src/PlinthUsGrantsData/Requests/Pulse/DeletePulseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[DeletePulseError](src/PlinthUsGrantsData/Errors/DeletePulseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetPulse(GetPulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.GetPulse(new GetPulseRequest { SubId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetPulseError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPulseRequest](src/PlinthUsGrantsData/Requests/Pulse/GetPulseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetPulseError](src/PlinthUsGrantsData/Errors/GetPulseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetPulseLatest(GetPulseLatestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.GetPulseLatest(new GetPulseLatestRequest
    {
        SubId = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetPulseLatestError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPulseLatestRequest](src/PlinthUsGrantsData/Requests/Pulse/GetPulseLatestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetPulseLatestError](src/PlinthUsGrantsData/Errors/GetPulseLatestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetPulseRun(GetPulseRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.GetPulseRun(new GetPulseRunRequest
    {
        SubId = "some example string",
        RunId = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetPulseRunError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPulseRunRequest](src/PlinthUsGrantsData/Requests/Pulse/GetPulseRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetPulseRunError](src/PlinthUsGrantsData/Errors/GetPulseRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListPulse(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.ListPulse();
    // TODO: Handle 'response' of type object
}
catch (ApiException<ListPulseError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[ListPulseError](src/PlinthUsGrantsData/Errors/ListPulseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListPulseRuns(ListPulseRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.ListPulseRuns(new ListPulseRunsRequest { SubId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ListPulseRunsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPulseRunsRequest](src/PlinthUsGrantsData/Requests/Pulse/ListPulseRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[ListPulseRunsError](src/PlinthUsGrantsData/Errors/ListPulseRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; RunPulse(RunPulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.RunPulse(new RunPulseRequest
    {
        SubId = "some example string",
        Format = Format.Json,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RunPulseError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RunPulseRequest](src/PlinthUsGrantsData/Requests/Pulse/RunPulseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[RunPulseError](src/PlinthUsGrantsData/Errors/RunPulseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UpdatePulse(UpdatePulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pulse.UpdatePulse(new UpdatePulseRequest
    {
        SubId = "some example string",
        Body = new PulsePatch(),
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<UpdatePulseError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePulseRequest](src/PlinthUsGrantsData/Requests/Pulse/UpdatePulseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[UpdatePulseError](src/PlinthUsGrantsData/Errors/UpdatePulseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Resolve

> Source: [Resolve](src/PlinthUsGrantsData/Api/Resolve.cs)

<details>
<summary><code>Task&lt;ApiV1SearchResponse&gt; GetApiV1Search(GetApiV1SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Resolve.GetApiV1Search(new GetApiV1SearchRequest
    {
        Q = "skillman",
        State = "MI",
        Example = "1",
    });
    // TODO: Handle 'response' of type ApiV1SearchResponse
}
catch (ApiException<GetApiV1SearchError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1SearchRequest](src/PlinthUsGrantsData/Requests/Resolve/GetApiV1SearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SearchResponse](src/PlinthUsGrantsData/Models/ApiV1SearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[GetApiV1SearchError](src/PlinthUsGrantsData/Errors/GetApiV1SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiSearchResponse&gt; SearchOrganizations(SearchOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Resolve.SearchOrganizations(new SearchOrganizationsRequest
    {
        Q = "barancik",
        State = "FL",
    });
    // TODO: Handle 'response' of type ApiSearchResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchOrganizationsRequest](src/PlinthUsGrantsData/Requests/Resolve/SearchOrganizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiSearchResponse](src/PlinthUsGrantsData/Models/ApiSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[RawError](src/PlinthUsGrantsData/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sql

> Source: [Sql](src/PlinthUsGrantsData/Api/Sql.cs)

<details>
<summary><code>Task&lt;SqlResponse&gt; PostApiV1Sql(PostApiV1SqlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Sql.PostApiV1Sql(new PostApiV1SqlRequest
    {
        Body = new ApiV1SqlRequest { Sql = "some example string" },
    });
    // TODO: Handle 'response' of type SqlResponse
}
catch (ApiException<PostApiV1SqlError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1SqlRequest](src/PlinthUsGrantsData/Requests/Sql/PostApiV1SqlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SqlResponse](src/PlinthUsGrantsData/Models/SqlResponse.cs)</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[PostApiV1SqlError](src/PlinthUsGrantsData/Errors/PostApiV1SqlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; RunSql(RunSqlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Sql.RunSql(new RunSqlRequest
    {
        Body = new ApiSqlRequest { Sql = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RunSqlError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RunSqlRequest](src/PlinthUsGrantsData/Requests/Sql/RunSqlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/PlinthUsGrantsData/Core/Exceptions/ApiException.cs)&lt;[RunSqlError](src/PlinthUsGrantsData/Errors/RunSqlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

