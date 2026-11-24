# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CompSniperClient](src/CompSniper/CompSniperClient.cs)

## Account

> Source: [Account](src/CompSniper/Api/Account.cs)

<details>
<summary><code>Task&lt;AccountUsageResponse&gt; GetAccountUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's monthly allowance, current usage, billing period, rate limit, purchased-credit balance, and total available requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetAccountUsage();
    // TODO: Handle 'response' of type AccountUsageResponse
}
catch (ApiException<GetAccountUsageError> ex)
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

**OnSuccess**: <code>[AccountUsageResponse](src/CompSniper/Models/AccountUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetAccountUsageError](src/CompSniper/Errors/GetAccountUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BestOfferPrices

> Source: [BestOfferPrices](src/CompSniper/Api/BestOfferPrices.cs)

<details>
<summary><code>Task&lt;V1BestOfferPricesResponse&gt; GetBestOfferPrices(GetBestOfferPricesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BestOfferPrices.GetBestOfferPrices(new GetBestOfferPricesRequest
    {
        ItemIds = "some example string",
    });
    // TODO: Handle 'response' of type V1BestOfferPricesResponse
}
catch (ApiException<GetBestOfferPricesError> ex)
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

<code>[GetBestOfferPricesRequest](src/CompSniper/Requests/BestOfferPrices/GetBestOfferPricesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BestOfferPricesResponse](src/CompSniper/Models/V1BestOfferPricesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetBestOfferPricesError](src/CompSniper/Errors/GetBestOfferPricesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSearch

> Source: [BulkSearch](src/CompSniper/Api/BulkSearch.cs)

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;string&gt;&gt; BulkSearchInvoke(BulkSearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and may complete out of order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSearch.BulkSearchInvoke(new BulkSearchOperationRequest
    {
        Body = new BulkSearchRequest { Keywords = ["some example string"] },
    });
    // TODO: Handle 'response' of type IAsyncEnumerable<string>
}
catch (ApiException<BulkSearchError> ex)
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

<code>[BulkSearchOperationRequest](src/CompSniper/Requests/BulkSearch/BulkSearchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[BulkSearchError](src/CompSniper/Errors/BulkSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DownloadBulkSearchCsv(DownloadBulkSearchCsvRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same account's bearer credential.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSearch.DownloadBulkSearchCsv(new DownloadBulkSearchCsvRequest
    {
        RunId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DownloadBulkSearchCsvError> ex)
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

<code>[DownloadBulkSearchCsvRequest](src/CompSniper/Requests/BulkSearch/DownloadBulkSearchCsvRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[DownloadBulkSearchCsvError](src/CompSniper/Errors/DownloadBulkSearchCsvError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](src/CompSniper/Api/Cards.cs)

<details>
<summary><code>Task CancelCardBatch(CancelCardBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Cards.CancelCardBatch(new CancelCardBatchRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<CancelCardBatchError> ex)
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

<code>[CancelCardBatchRequest](src/CompSniper/Requests/Cards/CancelCardBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[CancelCardBatchError](src/CompSniper/Errors/CancelCardBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardBatchJob&gt; GetCardBatch(GetCardBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.GetCardBatch(new GetCardBatchRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CardBatchJob
}
catch (ApiException<GetCardBatchError> ex)
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

<code>[GetCardBatchRequest](src/CompSniper/Requests/Cards/GetCardBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardBatchJob](src/CompSniper/Models/CardBatchJob.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetCardBatchError](src/CompSniper/Errors/GetCardBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CardBatchAccepted&gt; SubmitCardBatch(SubmitCardBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each successfully processed card consumes one normal monthly request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Cards.SubmitCardBatch(new SubmitCardBatchRequest
    {
        Body = new CardBatchRequest { Cards = [new CardInput()] },
    });
    // TODO: Handle 'response' of type CardBatchAccepted
}
catch (ApiException<SubmitCardBatchError> ex)
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

<code>[SubmitCardBatchRequest](src/CompSniper/Requests/Cards/SubmitCardBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardBatchAccepted](src/CompSniper/Models/CardBatchAccepted.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[SubmitCardBatchError](src/CompSniper/Errors/SubmitCardBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Depop

> Source: [Depop](src/CompSniper/Api/Depop.cs)

<details>
<summary><code>Task&lt;V1DepopListingsResponse&gt; GetV1DepopListings(GetV1DepopListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Depop.GetV1DepopListings(new GetV1DepopListingsRequest
    {
        Keyword = "vintage levis 501",
    });
    // TODO: Handle 'response' of type V1DepopListingsResponse
}
catch (ApiException<GetV1DepopListingsError> ex)
{
    if (ex.Error.TryGetV1DepopListings400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1DepopListings400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1DepopListingsRequest](src/CompSniper/Requests/Depop/GetV1DepopListingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DepopListingsResponse](src/CompSniper/Models/V1DepopListingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetV1DepopListingsError](src/CompSniper/Errors/GetV1DepopListingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Grailed

> Source: [Grailed](src/CompSniper/Api/Grailed.cs)

<details>
<summary><code>Task&lt;V1GrailedListingsResponse&gt; GetV1GrailedListings(GetV1GrailedListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Grailed.GetV1GrailedListings(new GetV1GrailedListingsRequest
    {
        Keyword = "supreme box logo hoodie",
    });
    // TODO: Handle 'response' of type V1GrailedListingsResponse
}
catch (ApiException<GetV1GrailedListingsError> ex)
{
    if (ex.Error.TryGetV1GrailedListings400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1GrailedListings400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1GrailedListingsRequest](src/CompSniper/Requests/Grailed/GetV1GrailedListingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GrailedListingsResponse](src/CompSniper/Models/V1GrailedListingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetV1GrailedListingsError](src/CompSniper/Errors/GetV1GrailedListingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GrailedSoldResponse&gt; GetV1GrailedSold(GetV1GrailedSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Grailed.GetV1GrailedSold(new GetV1GrailedSoldRequest
    {
        Keyword = "supreme box logo hoodie",
    });
    // TODO: Handle 'response' of type V1GrailedSoldResponse
}
catch (ApiException<GetV1GrailedSoldError> ex)
{
    if (ex.Error.TryGetV1GrailedSold400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1GrailedSold400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1GrailedSoldRequest](src/CompSniper/Requests/Grailed/GetV1GrailedSoldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GrailedSoldResponse](src/CompSniper/Models/V1GrailedSoldResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetV1GrailedSoldError](src/CompSniper/Errors/GetV1GrailedSoldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Mercari

> Source: [Mercari](src/CompSniper/Api/Mercari.cs)

<details>
<summary><code>Task&lt;V1MercariResponse&gt; SearchMercariListings(SearchMercariListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one page of public Mercari sold or active listings through a managed anonymous guest session. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Mercari.SearchMercariListings(new SearchMercariListingsRequest
    {
        Keyword = "pokemon cards",
        Page = 1,
        Count = 100,
        MinPrice = 10d,
        MaxPrice = 100d,
        Sold = Sold.True,
        IncludeListedAt = IncludeListedAt.True,
    });
    // TODO: Handle 'response' of type V1MercariResponse
}
catch (ApiException<SearchMercariListingsError> ex)
{
    if (ex.Error.TryGetV1Mercari400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1Mercari400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchMercariListingsRequest](src/CompSniper/Requests/Mercari/SearchMercariListingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MercariResponse](src/CompSniper/Models/V1MercariResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[SearchMercariListingsError](src/CompSniper/Errors/SearchMercariListingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Psa

> Source: [Psa](src/CompSniper/Api/Psa.cs)

<details>
<summary><code>Task&lt;V1PsaCardResponse&gt; GetPsaCard(GetPsaCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful call uses one request; a card PSA does not have returns 404 not_found and is not charged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Psa.GetPsaCard(new GetPsaCardRequest
    {
        SpecId = "5217539",
        Keyword = "1999 pokemon base set charizard 4",
        Grade = "10",
    });
    // TODO: Handle 'response' of type V1PsaCardResponse
}
catch (ApiException<GetPsaCardError> ex)
{
    if (ex.Error.TryGetV1PsaCard400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1PsaCard400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPsaCardRequest](src/CompSniper/Requests/Psa/GetPsaCardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PsaCardResponse](src/CompSniper/Models/V1PsaCardResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetPsaCardError](src/CompSniper/Errors/GetPsaCardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PsaSetResponse&gt; GetPsaSetPopulation(GetPsaSetPopulationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call returns every card in a PSA set with its number, name, variety, specId and population for every grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets or the set's PSA population page url. Large sets can take 10 to 20 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Psa.GetPsaSetPopulation(new GetPsaSetPopulationRequest
    {
        HeadingId = "57801",
        Url = "https://www.psacard.com/pop/tcg-cards/1999/pokemon-game/57801",
    });
    // TODO: Handle 'response' of type V1PsaSetResponse
}
catch (ApiException<GetPsaSetPopulationError> ex)
{
    if (ex.Error.TryGetV1PsaSet400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1PsaSet400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPsaSetPopulationRequest](src/CompSniper/Requests/Psa/GetPsaSetPopulationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PsaSetResponse](src/CompSniper/Models/V1PsaSetResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetPsaSetPopulationError](src/CompSniper/Errors/GetPsaSetPopulationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PsaSetsResponse&gt; ListPsaSets(ListPsaSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it. Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Psa.ListPsaSets(new ListPsaSetsRequest { Keyword = "151" });
    // TODO: Handle 'response' of type V1PsaSetsResponse
}
catch (ApiException<ListPsaSetsError> ex)
{
    if (ex.Error.TryGetV1PsaSets400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1PsaSets400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPsaSetsRequest](src/CompSniper/Requests/Psa/ListPsaSetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PsaSetsResponse](src/CompSniper/Models/V1PsaSetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[ListPsaSetsError](src/CompSniper/Errors/ListPsaSetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PsaSearchResponse&gt; SearchPsaCards(SearchPsaCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used by /v1/psa/card. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Psa.SearchPsaCards(new SearchPsaCardsRequest { Keyword = "charizard base set" });
    // TODO: Handle 'response' of type V1PsaSearchResponse
}
catch (ApiException<SearchPsaCardsError> ex)
{
    if (ex.Error.TryGetV1PsaSearch400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1PsaSearch400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPsaCardsRequest](src/CompSniper/Requests/Psa/SearchPsaCardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PsaSearchResponse](src/CompSniper/Models/V1PsaSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[SearchPsaCardsError](src/CompSniper/Errors/SearchPsaCardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Poshmark

> Source: [Poshmark](src/CompSniper/Api/Poshmark.cs)

<details>
<summary><code>Task&lt;V1PoshmarkSoldResponse&gt; SearchPoshmarkSold(SearchPoshmarkSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Poshmark.SearchPoshmarkSold(new SearchPoshmarkSoldRequest
    {
        Keyword = "louis vuitton neverfull",
        Page = 1,
        MinPrice = 50d,
        MaxPrice = 500d,
        Brand = "Louis Vuitton",
        Enrich = Enrich.False,
    });
    // TODO: Handle 'response' of type V1PoshmarkSoldResponse
}
catch (ApiException<SearchPoshmarkSoldError> ex)
{
    if (ex.Error.TryGetV1PoshmarkSold400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1PoshmarkSold400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPoshmarkSoldRequest](src/CompSniper/Requests/Poshmark/SearchPoshmarkSoldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PoshmarkSoldResponse](src/CompSniper/Models/V1PoshmarkSoldResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[SearchPoshmarkSoldError](src/CompSniper/Errors/SearchPoshmarkSoldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Scrape

> Source: [Scrape](src/CompSniper/Api/Scrape.cs)

<details>
<summary><code>Task&lt;ScrapeResponse&gt; BrowseSoldListingsByCategory(BrowseSoldListingsByCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication, quota, filtering, response shape, and error contract as /v1/scrape.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scrape.BrowseSoldListingsByCategory(new BrowseSoldListingsByCategoryRequest
    {
        CategoryId = "some example string",
    });
    // TODO: Handle 'response' of type ScrapeResponse
}
catch (ApiException<BrowseSoldListingsByCategoryError> ex)
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

<code>[BrowseSoldListingsByCategoryRequest](src/CompSniper/Requests/Scrape/BrowseSoldListingsByCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScrapeResponse](src/CompSniper/Models/ScrapeResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[BrowseSoldListingsByCategoryError](src/CompSniper/Errors/BrowseSoldListingsByCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MaxCancelResponse&gt; CancelMaxSearch(CancelMaxSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scrape.CancelMaxSearch(new CancelMaxSearchRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MaxCancelResponse
}
catch (ApiException<CancelMaxSearchError> ex)
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

<code>[CancelMaxSearchRequest](src/CompSniper/Requests/Scrape/CancelMaxSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MaxCancelResponse](src/CompSniper/Models/MaxCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[CancelMaxSearchError](src/CompSniper/Errors/CancelMaxSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DownloadMaxSearchCsv(DownloadMaxSearchCsvRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the stored job result using the signed token returned for download or email delivery. The token itself authorizes this URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scrape.DownloadMaxSearchCsv(new DownloadMaxSearchCsvRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Token = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DownloadMaxSearchCsvError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadMaxSearchCsvRequest](src/CompSniper/Requests/Scrape/DownloadMaxSearchCsvRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[DownloadMaxSearchCsvError](src/CompSniper/Errors/DownloadMaxSearchCsvError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MaxJob&gt; GetMaxSearchResults(GetMaxSearchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scrape.GetMaxSearchResults(new GetMaxSearchResultsRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MaxJob
}
catch (ApiException<GetMaxSearchResultsError> ex)
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

<code>[GetMaxSearchResultsRequest](src/CompSniper/Requests/Scrape/GetMaxSearchResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MaxJob](src/CompSniper/Models/MaxJob.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetMaxSearchResultsError](src/CompSniper/Errors/GetMaxSearchResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScrapeResponse&gt; SearchSoldListings(SearchSoldListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns completed eBay sales by default. Set sold=false for current active listings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scrape.SearchSoldListings(new SearchSoldListingsRequest
    {
        Keyword = "some example string",
    });
    // TODO: Handle 'response' of type ScrapeResponse
}
catch (ApiException<SearchSoldListingsError> ex)
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

<code>[SearchSoldListingsRequest](src/CompSniper/Requests/Scrape/SearchSoldListingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScrapeResponse](src/CompSniper/Models/ScrapeResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[SearchSoldListingsError](src/CompSniper/Errors/SearchSoldListingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MaxJobAccepted&gt; StartMaxSearch(StartMaxSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then one purchased credit after monthly quota is exhausted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scrape.StartMaxSearch(new StartMaxSearchRequest
    {
        Body = new MaxSearchRequest { Keyword = "some example string" },
    });
    // TODO: Handle 'response' of type MaxJobAccepted
}
catch (ApiException<StartMaxSearchError> ex)
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

<code>[StartMaxSearchRequest](src/CompSniper/Requests/Scrape/StartMaxSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MaxJobAccepted](src/CompSniper/Models/MaxJobAccepted.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[StartMaxSearchError](src/CompSniper/Errors/StartMaxSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ShippingRates

> Source: [ShippingRates](src/CompSniper/Api/ShippingRates.cs)

<details>
<summary><code>Task&lt;ShippingRateUsageResponse&gt; GetShippingRateUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ShippingRates.GetShippingRateUsage();
    // TODO: Handle 'response' of type ShippingRateUsageResponse
}
catch (ApiException<GetShippingRateUsageError> ex)
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

**OnSuccess**: <code>[ShippingRateUsageResponse](src/CompSniper/Models/ShippingRateUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetShippingRateUsageError](src/CompSniper/Errors/GetShippingRateUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ShippingRateResponse&gt; GetShippingRates(GetShippingRatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight, and dimensions. Applicable services are returned in rates. Carrier-packaging and content-restricted services are returned in conditionalRates unless the caller explicitly confirms the requirement. Preserves retail and eBay discounted prices when available. Requires a separate Shipping Rates subscription and consumes one shipping request only when usable applicable rates are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ShippingRates.GetShippingRates(new GetShippingRatesRequest
    {
        Body = new ShippingRateRequest
        {
            ShipFrom = new ShipFrom { PostalCode = "some example string" },
            ShipTo = new ShipTo { PostalCode = "some example string" },
            Package = new Package
            {
                Weight = new Weight { Value = 1.5d },
                Dimensions = new Dimensions { Length = 1.5d, Width = 1.5d, Height = 1.5d },
            },
        },
    });
    // TODO: Handle 'response' of type ShippingRateResponse
}
catch (ApiException<GetShippingRatesError> ex)
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

<code>[GetShippingRatesRequest](src/CompSniper/Requests/ShippingRates/GetShippingRatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingRateResponse](src/CompSniper/Models/ShippingRateResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetShippingRatesError](src/CompSniper/Errors/GetShippingRatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoldHistory

> Source: [SoldHistory](src/CompSniper/Api/SoldHistory.cs)

<details>
<summary><code>Task&lt;V1ResearchSoldResponse&gt; GetV1ResearchSold(GetV1ResearchSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites, on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-* headers, 429 history_rate_limited), on top of the plan limit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SoldHistory.GetV1ResearchSold(new GetV1ResearchSoldRequest
    {
        Keyword = "nintendo switch oled",
        StartDate = DateTimeOffset.Parse("2023-10-11T00:00:00Z"),
        EndDate = DateTimeOffset.Parse("2026-10-10T00:00:00Z"),
    });
    // TODO: Handle 'response' of type V1ResearchSoldResponse
}
catch (ApiException<GetV1ResearchSoldError> ex)
{
    if (ex.Error.TryGetV1ResearchSold400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1ResearchSold400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1ResearchSoldRequest](src/CompSniper/Requests/SoldHistory/GetV1ResearchSoldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ResearchSoldResponse](src/CompSniper/Models/V1ResearchSoldResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetV1ResearchSoldError](src/CompSniper/Errors/GetV1ResearchSoldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Summary

> Source: [Summary](src/CompSniper/Api/Summary.cs)

<details>
<summary><code>Task&lt;SummaryResponse&gt; GetPriceSummary(GetPriceSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw comparison evidence, result counts, and cache status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Summary.GetPriceSummary(new GetPriceSummaryRequest { Keyword = "some example string" });
    // TODO: Handle 'response' of type SummaryResponse
}
catch (ApiException<GetPriceSummaryError> ex)
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

<code>[GetPriceSummaryRequest](src/CompSniper/Requests/Summary/GetPriceSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummaryResponse](src/CompSniper/Models/SummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetPriceSummaryError](src/CompSniper/Errors/GetPriceSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TcGplayer

> Source: [TcGplayer](src/CompSniper/Api/TcGplayer.cs)

<details>
<summary><code>Task&lt;V1TcgplayerListingsResponse&gt; GetV1TcgplayerListings(GetV1TcgplayerListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful call uses one request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TcGplayer.GetV1TcgplayerListings(new GetV1TcgplayerListingsRequest
    {
        Keyword = "charizard ex obsidian flames 223",
        Condition = "Near Mint",
        Variant = "Holofoil",
        Language = "English",
    });
    // TODO: Handle 'response' of type V1TcgplayerListingsResponse
}
catch (ApiException<GetV1TcgplayerListingsError> ex)
{
    if (ex.Error.TryGetV1TcgplayerListings400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1TcgplayerListings400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1TcgplayerListingsRequest](src/CompSniper/Requests/TcGplayer/GetV1TcgplayerListingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TcgplayerListingsResponse](src/CompSniper/Models/V1TcgplayerListingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetV1TcgplayerListingsError](src/CompSniper/Errors/GetV1TcgplayerListingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TcgplayerSoldResponse&gt; GetV1TcgplayerSold(GetV1TcgplayerSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full TCGplayer completed-sale history for a product, with optional market price history. One successful call uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live fetch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TcGplayer.GetV1TcgplayerSold(new GetV1TcgplayerSoldRequest
    {
        Keyword = "charizard ex obsidian flames 223",
        Condition = "Near Mint",
        Variant = "Holofoil",
        Language = "English",
        SoldAfter = DateTimeOffset.Parse("2026-10-14T00:00:00Z"),
        SoldBefore = DateTimeOffset.Parse("2026-10-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type V1TcgplayerSoldResponse
}
catch (ApiException<GetV1TcgplayerSoldError> ex)
{
    if (ex.Error.TryGetV1TcgplayerSold400Error1(out var error))
    {
        // TODO: Handle 'error' of type V1TcgplayerSold400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1TcgplayerSoldRequest](src/CompSniper/Requests/TcGplayer/GetV1TcgplayerSoldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TcgplayerSoldResponse](src/CompSniper/Models/V1TcgplayerSoldResponse.cs)</code>

**OnError**: <code>[ApiException](src/CompSniper/Core/Exceptions/ApiException.cs)&lt;[GetV1TcgplayerSoldError](src/CompSniper/Errors/GetV1TcgplayerSoldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

