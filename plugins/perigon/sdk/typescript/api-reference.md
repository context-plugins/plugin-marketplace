# Reference

> Source: [PerigonClient](src/client.ts)

## AiAdvancedSearch

> Source: [AiAdvancedSearch](src/resources/ai-advanced-search.ts)

<details>
<summary><code>searchSummarizer(request: AiAdvancedSearch.SearchSummarizerRequest, options?: RequestOptions): ApiPromise&lt;SummarySearchResult, AiAdvancedSearch.SearchSummarizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting options are ignored.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiAdvancedSearch.searchSummarizer({ body: {} });
  // TODO: Handle 'response' of type SummarySearchResult
} catch (err) {
  // TODO: Handle 'err' of type AiAdvancedSearch.SearchSummarizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiAdvancedSearch.searchSummarizer({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarySearchResult
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
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering articles based on their title, description, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>title?</code> | <code>string</code> | String. Search specifically within article headlines/titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations. |
| <code>desc?</code> | <code>string</code> | String. Search within article description fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching. |
| <code>content?</code> | <code>string</code> | String. Search within the full article body content. Supports Boolean logic, exact phrase matching with quotes, and wildcards for comprehensive content searching. |
| <code>summary?</code> | <code>string</code> | String. Search within article summary fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching. |
| <code>url?</code> | <code>string</code> | String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying certain website sections, e.g. source=cnn.com&url=travel. |
| <code>articleId?</code> | <code>string[]</code> | String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs can be provided to return a collection of specific articles. |
| <code>clusterId?</code> | <code>string[]</code> | String Array. Filter results to only show content within a specific related content cluster. Returns articles grouped together as part of Perigon Stories based on topic relevance. |
| <code>sortBy?</code> | <code>[AllEndpointSortBy](src/models/all-endpoint-sort-by.ts)</code> | String. Determines the article sorting order. Options include relevance (default), date/pubDate (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in system first, often identical to addDate). |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>from?</code> | <code>Date</code> (date-time) | Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format. |
| <code>addDateFrom?</code> | <code>Date</code> (date-time) | Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format. |
| <code>addDateTo?</code> | <code>Date</code> (date-time) | Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format. |
| <code>refreshDateFrom?</code> | <code>Date</code> (date-time) | Date. Filter for articles refreshed/updated in Perigon's system after this date. In most cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format. |
| <code>refreshDateTo?</code> | <code>Date</code> (date-time) | Date. Filter for articles refreshed/updated in Perigon's system before this date. In most cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format. |
| <code>medium?</code> | <code>string[]</code> | String Array. Filter articles by their primary medium type. Accepts Article for written content or Video for video-based stories. Multiple values create an OR filter. |
| <code>source?</code> | <code>string[]</code> | String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter. |
| <code>sourceGroup?</code> | <code>string[]</code> | String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100, top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles. |
| <code>excludeSourceGroup?</code> | <code>string[]</code> | String Array. Exclude articles from specified Perigon source groups. Multiple values create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g., top10, top100). |
| <code>excludeSource?</code> | <code>string[]</code> | String Array. Exclude articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude filter. |
| <code>watchlist?</code> | <code>string[]</code> | String Array. Filter articles using watchlists of people and companies. Multiple values create an OR filter to include articles mentioning any entity from the specified watchlists. |
| <code>excludeWatchlist?</code> | <code>string[]</code> | String Array. Exclude articles mentioning entities from specified watchlists. Multiple values create an AND-exclude filter, removing content mentioning any entity from the specified watchlists. |
| <code>paywall?</code> | <code>boolean</code> | Boolean. Filter to show only results where the source has a paywall (true) or does not have a paywall (false). |
| <code>byline?</code> | <code>string[]</code> | String Array. Filter articles by author bylines. Works as an exact match for each author name provided. Multiple values create an OR filter to find articles by any of the specified authors. |
| <code>author?</code> | <code>string[]</code> | String Array. Filter articles by specific author names. Works as an exact match for each name. Multiple values create an OR filter to find articles by any of the specified authors. |
| <code>excludeAuthor?</code> | <code>string[]</code> | String Array. Exclude articles written by specific authors. Any article with an author name matching an entry in this list will be omitted from results. Multiple values create an AND-exclude filter. |
| <code>journalistId?</code> | <code>string[]</code> | String Array. Filter by unique journalist identifiers which can be found through the Journalist API or in the matchedAuthors field. Multiple values create an OR filter. |
| <code>excludeJournalistId?</code> | <code>string[]</code> | String Array. Exclude articles written by specific journalists identified by their unique IDs. Multiple values create an AND-exclude filter. |
| <code>language?</code> | <code>string[]</code> | String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr). Multiple values create an OR filter. |
| <code>excludeLanguage?</code> | <code>string[]</code> | String Array. Exclude articles in specific languages using ISO-639 two-letter codes. Multiple values create an AND-exclude filter. |
| <code>searchTranslation?</code> | <code>boolean</code> | Boolean. Expand search to include translated content fields for non-English articles. When true, searches translated title, description, and content fields. |
| <code>label?</code> | <code>string[]</code> | String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. Multiple values create an OR filter. |
| <code>excludeLabel?</code> | <code>string[]</code> | String Array. Exclude articles with specific editorial labels. Multiple values create an AND-exclude filter, removing all content with any of these labels. |
| <code>category?</code> | <code>string[]</code> | String Array. Filter by categories. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. Use 'none' to search uncategorized articles. |
| <code>excludeCategory?</code> | <code>string[]</code> | String Array. Exclude articles with specific categories. Multiple values create an AND-exclude filter, removing all content with any of these categories. |
| <code>topic?</code> | <code>string[]</code> | String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and articles can have multiple topics. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter. |
| <code>excludeTopic?</code> | <code>string[]</code> | String Array. Exclude articles with specific topics. Multiple values create an AND-exclude filter, removing all content with any of these topics. |
| <code>linkTo?</code> | <code>string</code> | String. Returns only articles that contain links to the specified URL pattern. Matches against the 'links' field in article responses. |
| <code>showReprints?</code> | <code>boolean</code> | Boolean. Controls whether to include reprinted content in results. When true (default), shows syndicated articles from wire services like AP or Reuters that appear on multiple sites. |
| <code>reprintGroupId?</code> | <code>string</code> | String. Returns all articles in a specific reprint group, including the original article and all its known reprints. Use when you want to see all versions of the same content. |
| <code>city?</code> | <code>string[]</code> | String Array. Filters articles where a specified city plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the urban area in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>excludeCity?</code> | <code>string[]</code> | String Array. A list of cities to exclude from the results. Articles that are associated with any of the specified cities will be filtered out. |
| <code>area?</code> | <code>string[]</code> | String Array. Filters articles where a specified area, such as a neighborhood, borough, or district, plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the area in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>state?</code> | <code>string[]</code> | String Array. Filters articles where a specified state plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the state in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>excludeState?</code> | <code>string[]</code> | String Array. A list of states to exclude. Articles that include, or are associated with, any of the states provided here will be filtered out. This is especially useful if you want to ignore news tied to certain geographical areas (e.g., US states). |
| <code>county?</code> | <code>string[]</code> | String Array. A list of counties to include (or specify) in the search results. This field filters the returned articles based on the county associated with the event or news. Only articles tagged with one of these counties will be included. |
| <code>excludeCounty?</code> | <code>string[]</code> | String Array. Excludes articles from specific counties or administrative divisions in the search results. Accepts either a single county name or a list of county names. County names should match the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows for more granular geographic filter |
| <code>locationsCountry?</code> | <code>string[]</code> | String Array. Filters articles where a specified country plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>country?</code> | <code>string[]</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations. |
| <code>excludeLocationsCountry?</code> | <code>string[]</code> | String Array. Excludes articles where a specified country plays a central role in the content, ensuring results are not deeply relevant to the country in question. If multiple parameters are passed, they will be applied as AND operations, excluding articles relevant to any of the specified countries. |
| <code>location?</code> | <code>string[]</code> | String Array. Return all articles that have the specified location. Location attributes are delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'. |
| <code>lat?</code> | <code>number</code> | Float. Latitude of the center point to search places |
| <code>lon?</code> | <code>number</code> | Float. Longitude of the center point to search places |
| <code>maxDistance?</code> | <code>number</code> | Float. Maximum distance (in km) from starting point to search articles by tagged places |
| <code>sourceCity?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given city. |
| <code>excludeSourceCity?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified cities. |
| <code>sourceCounty?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given county. |
| <code>excludeSourceCounty?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified counties. |
| <code>sourceCountry?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given country. Must be 2 character country code (i.e. us, gb, etc). |
| <code>excludeSourceCountry?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified countries. Must be 2 character country codes (e.g., us, gb). |
| <code>sourceState?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given state. |
| <code>excludeSourceState?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified states. |
| <code>sourceLat?</code> | <code>number</code> | Float. Latitude of the center point to search articles created by local publications. |
| <code>sourceLon?</code> | <code>number</code> | Float. Longitude of the center point to search articles created by local publications. |
| <code>sourceMaxDistance?</code> | <code>number</code> | Float. Maximum distance from starting point to search articles created by local publications. |
| <code>personWikidataId?</code> | <code>string[]</code> | String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people endpoint for a complete list of tracked individuals. |
| <code>excludePersonWikidataId?</code> | <code>string[]</code> | String Array. Exclude articles mentioning people with specific Wikidata IDs. Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to avoid name ambiguity. |
| <code>personName?</code> | <code>string[]</code> | String Array. Filter articles by exact person name matches. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint. |
| <code>excludePersonName?</code> | <code>string[]</code> | String Array. Exclude articles mentioning specific people by name. Creates an AND-exclude filter to remove content about these individuals. |
| <code>companyId?</code> | <code>string[]</code> | String Array. Filter articles by company identifiers. For a complete list of tracked companies, refer to the /companies endpoint. |
| <code>excludeCompanyId?</code> | <code>string[]</code> | String Array. Exclude articles mentioning companies with specific identifiers. Creates an AND-exclude filter to remove content about these corporate entities. |
| <code>companyName?</code> | <code>string</code> | String. Filter articles by company name mentions. Performs an exact match on company names. |
| <code>companyDomain?</code> | <code>string[]</code> | String Array. Filter articles by company domains (e.g., apple.com). For available company entities, consult the /companies endpoint. |
| <code>excludeCompanyDomain?</code> | <code>string[]</code> | String Array. Exclude articles related to companies with specific domains. Creates an AND-exclude filter to remove content about these companies. |
| <code>companySymbol?</code> | <code>string[]</code> | String Array. Filter articles by company stock symbols. For available company entities and their symbols, consult the /companies endpoint. |
| <code>companyIsin?</code> | <code>string[]</code> | String Array. Filter articles by company ISIN codes (International Securities Identification Numbers). For available company entities and their ISINs, consult the /companies endpoint. |
| <code>companySymbolIsin?</code> | <code>string[]</code> | String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint. |
| <code>excludeCompanyIsin?</code> | <code>string[]</code> | String Array. Exclude articles related to companies with specific ISIN codes. Creates an AND-exclude filter to remove content about these companies. For available company entities and their ISINs, consult the /companies endpoint. |
| <code>excludeCompanySymbolIsin?</code> | <code>string[]</code> | String Array. Exclude articles related to companies whose ticker listings have these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint. |
| <code>excludeCompanySymbol?</code> | <code>string[]</code> | String Array. A list of stock symbols (ticker symbols) that identify companies to be excluded. Articles related to companies using any of these symbols will be omitted, which is useful for targeting or avoiding specific public companies. |
| <code>positiveSentimentFrom?</code> | <code>number</code> | Float. Filter articles with a positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>positiveSentimentTo?</code> | <code>number</code> | Float. Filter articles with a positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>neutralSentimentFrom?</code> | <code>number</code> | Float. Filter articles with a neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>neutralSentimentTo?</code> | <code>number</code> | Float. Filter articles with a neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>negativeSentimentFrom?</code> | <code>number</code> | Float. Filter articles with a negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>negativeSentimentTo?</code> | <code>number</code> | Float. Filter articles with a negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>taxonomy?</code> | <code>string[]</code> | String Array. Filters by Google Content Categories. This field will accept 1 or more categories, must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other, /Finance/Investing/Funds. [Full list](https://docs.cloud.google.com/natural-language/docs/categories#version_2) |
| <code>prefixTaxonomy?</code> | <code>string</code> | String. Filters by Google Content Categories. This field will filter by the category prefix only. Example: prefixTaxonomy=/Finance |
| <code>showHighlighting?</code> | <code>boolean</code> | Boolean. When set to true, enables text highlighting in search results. |
| <code>highlightFragmentSize?</code> | <code>number</code> | Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified. |
| <code>highlightNumFragments?</code> | <code>number</code> | Integer. Controls the maximum number of highlighted fragments to return per field. |
| <code>highlightPreTag?</code> | <code>string</code> | String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not specified. |
| <code>highlightPostTag?</code> | <code>string</code> | String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not specified. |
| <code>highlightQ?</code> | <code>string</code> | String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change. |
| <code>body</code> | <code>[SummaryBody](src/models/summary-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiAdvancedSearch.searchSummarizer(request)`

- **OnSuccess**: <code>[SummarySearchResult](src/models/summary-search-result.ts)</code>
- **OnError**: throws <code>[AiAdvancedSearch.SearchSummarizerError](src/resources/ai-advanced-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiAdvancedSearch.searchSummarizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarySearchResult, AiAdvancedSearch.SearchSummarizerError&gt;</code>, with `result.value` of type <code>[SummarySearchResult](src/models/summary-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContactPoints

> Source: [ContactPoints](src/resources/contact-points.ts)

<details>
<summary><code>createContactPoint(request: ContactPoints.CreateContactPointRequest, options?: RequestOptions): ApiPromise&lt;ContactPointResult, ContactPoints.CreateContactPointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points can be created via the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactPoints.createContactPoint({
    body: { type: Type1.Email, name: "some example string" },
  });
  // TODO: Handle 'response' of type ContactPointResult
} catch (err) {
  // TODO: Handle 'err' of type ContactPoints.CreateContactPointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactPoints
  .createContactPoint({ body: { type: Type1.Email, name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactPointResult
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
| <code>body</code> | <code>[ContactPointRequestBody](src/models/contact-point-request-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactPoints.createContactPoint(request)`

- **OnSuccess**: <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: throws <code>[ContactPoints.CreateContactPointError](src/resources/contact-points.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactPoints.createContactPoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactPointResult, ContactPoints.CreateContactPointError&gt;</code>, with `result.value` of type <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteContactPoint(request: ContactPoints.DeleteContactPointRequest, options?: RequestOptions): ApiPromise&lt;ContactPointResult, ContactPoints.DeleteContactPointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a contact point owned by the organization associated with the API key. Contact points with historical notifications are archived rather than hard-deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactPoints.deleteContactPoint({
    uuid: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ContactPointResult
} catch (err) {
  // TODO: Handle 'err' of type ContactPoints.DeleteContactPointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactPoints
  .deleteContactPoint({ uuid: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactPointResult
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
| <code>uuid</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactPoints.deleteContactPoint(request)`

- **OnSuccess**: <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: throws <code>[ContactPoints.DeleteContactPointError](src/resources/contact-points.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactPoints.deleteContactPoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactPointResult, ContactPoints.DeleteContactPointError&gt;</code>, with `result.value` of type <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactPoint(request: ContactPoints.GetContactPointRequest, options?: RequestOptions): ApiPromise&lt;ContactPointResult, ContactPoints.GetContactPointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the API key. FASTN contact points are not accessible via this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactPoints.getContactPoint({
    uuid: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ContactPointResult
} catch (err) {
  // TODO: Handle 'err' of type ContactPoints.GetContactPointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactPoints
  .getContactPoint({ uuid: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactPointResult
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
| <code>uuid</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactPoints.getContactPoint(request)`

- **OnSuccess**: <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: throws <code>[ContactPoints.GetContactPointError](src/resources/contact-points.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactPoints.getContactPoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactPointResult, ContactPoints.GetContactPointError&gt;</code>, with `result.value` of type <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContactPoints(request: ContactPoints.ListContactPointsRequest, options?: RequestOptions): ApiPromise&lt;ContactPointListResult, ContactPoints.ListContactPointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List contact points owned by the organization associated with the API key. Supports filtering by status and type. FASTN contact points are excluded from results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactPoints.listContactPoints({
    sortBy: ContactPointSortBy.CreatedAt,
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type ContactPointListResult
} catch (err) {
  // TODO: Handle 'err' of type ContactPoints.ListContactPointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactPoints
  .listContactPoints({ sortBy: ContactPointSortBy.CreatedAt, sortOrder: SortOrder.Asc })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactPointListResult
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
| <code>sortBy</code> | <code>[ContactPointSortBy](src/models/contact-point-sort-by.ts)</code> | - |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>status?</code> | <code>[Status1](src/models/status1.ts)[]</code> | - |
| <code>type?</code> | <code>[Type1](src/models/type1.ts)[]</code> | - |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactPoints.listContactPoints(request)`

- **OnSuccess**: <code>[ContactPointListResult](src/models/contact-point-list-result.ts)</code>
- **OnError**: throws <code>[ContactPoints.ListContactPointsError](src/resources/contact-points.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactPoints.listContactPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactPointListResult, ContactPoints.ListContactPointsError&gt;</code>, with `result.value` of type <code>[ContactPointListResult](src/models/contact-point-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContactPoint(request: ContactPoints.UpdateContactPointRequest, options?: RequestOptions): ApiPromise&lt;ContactPointResult, ContactPoints.UpdateContactPointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a contact point owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactPoints.updateContactPoint({
    uuid: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type ContactPointResult
} catch (err) {
  // TODO: Handle 'err' of type ContactPoints.UpdateContactPointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactPoints
  .updateContactPoint({ uuid: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactPointResult
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
| <code>uuid</code> | <code>string</code> | - |
| <code>body</code> | <code>[ContactPointUpdateBody](src/models/contact-point-update-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactPoints.updateContactPoint(request)`

- **OnSuccess**: <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: throws <code>[ContactPoints.UpdateContactPointError](src/resources/contact-points.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactPoints.updateContactPoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactPointResult, ContactPoints.UpdateContactPointError&gt;</code>, with `result.value` of type <code>[ContactPointResult](src/models/contact-point-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Monitors

> Source: [Monitors](src/resources/monitors.ts)

<details>
<summary><code>activateMonitorApi(request: Monitors.ActivateMonitorApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorResult, Monitors.ActivateMonitorApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a monitor, starting its processing pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.activateMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MonitorResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ActivateMonitorApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .activateMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor to activate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.activateMonitorApi(request)`

- **OnSuccess**: <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: throws <code>[Monitors.ActivateMonitorApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.activateMonitorApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResult, Monitors.ActivateMonitorApiError&gt;</code>, with `result.value` of type <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveMonitorApi(request: Monitors.ArchiveMonitorApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorResult, Monitors.ArchiveMonitorApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a monitor. Archived monitors are excluded from list results by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.archiveMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MonitorResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ArchiveMonitorApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .archiveMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor to archive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.archiveMonitorApi(request)`

- **OnSuccess**: <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: throws <code>[Monitors.ArchiveMonitorApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.archiveMonitorApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResult, Monitors.ArchiveMonitorApiError&gt;</code>, with `result.value` of type <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMonitorApi(request: Monitors.CreateMonitorApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorResult, Monitors.CreateMonitorApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.createMonitorApi({
    body: {
      name: "some example string",
      classificationType: ClassificationType2.Event,
      monitoringObjective: "some example string",
      dataSchema: { schema: { key: {} } },
      query: {},
    },
  });
  // TODO: Handle 'response' of type MonitorResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.CreateMonitorApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .createMonitorApi({
    body: {
      name: "some example string",
      classificationType: ClassificationType2.Event,
      monitoringObjective: "some example string",
      dataSchema: { schema: { key: {} } },
      query: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResult
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
| <code>body</code> | <code>[SignalApiCreateBody](src/models/signal-api-create-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.createMonitorApi(request)`

- **OnSuccess**: <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: throws <code>[Monitors.CreateMonitorApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.createMonitorApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResult, Monitors.CreateMonitorApiError&gt;</code>, with `result.value` of type <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMonitorApi(request: Monitors.GetMonitorApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorResult, Monitors.GetMonitorApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a monitor by UUID for the organization associated with the API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.getMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MonitorResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.GetMonitorApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .getMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.getMonitorApi(request)`

- **OnSuccess**: <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: throws <code>[Monitors.GetMonitorApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.getMonitorApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResult, Monitors.GetMonitorApiError&gt;</code>, with `result.value` of type <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorEventsApi(request: Monitors.ListMonitorEventsApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorEventListResult, Monitors.ListMonitorEventsApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List structured events emitted by a monitor. Events represent individual matches detected by the monitor (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is ingested.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.listMonitorEventsApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type MonitorEventListResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ListMonitorEventsApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .listMonitorEventsApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorEventListResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor whose events to retrieve. |
| <code>sortBy</code> | <code>string</code> | Required field used to sort events. Accepts createdAt, updatedAt, or eventDate. |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>eventType?</code> | <code>string</code> | Filter for events with this exact event type. |
| <code>from?</code> | <code>Date</code> (date-time) | Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.listMonitorEventsApi(request)`

- **OnSuccess**: <code>[MonitorEventListResult](src/models/monitor-event-list-result.ts)</code>
- **OnError**: throws <code>[Monitors.ListMonitorEventsApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.listMonitorEventsApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorEventListResult, Monitors.ListMonitorEventsApiError&gt;</code>, with `result.value` of type <code>[MonitorEventListResult](src/models/monitor-event-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorNewslettersApi(request: Monitors.ListMonitorNewslettersApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorNewsletterListResult, Monitors.ListMonitorNewslettersApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable digest and are produced on the monitor's configured schedule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.listMonitorNewslettersApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type MonitorNewsletterListResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ListMonitorNewslettersApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .listMonitorNewslettersApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorNewsletterListResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor whose newsletters to retrieve. |
| <code>sortBy</code> | <code>string</code> | Required field used to sort newsletters. Accepts createdAt or updatedAt. |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>title?</code> | <code>string</code> | Filter by newsletter title using a case-insensitive partial match. |
| <code>from?</code> | <code>Date</code> (date-time) | Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.listMonitorNewslettersApi(request)`

- **OnSuccess**: <code>[MonitorNewsletterListResult](src/models/monitor-newsletter-list-result.ts)</code>
- **OnError**: throws <code>[Monitors.ListMonitorNewslettersApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.listMonitorNewslettersApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorNewsletterListResult, Monitors.ListMonitorNewslettersApiError&gt;</code>, with `result.value` of type <code>[MonitorNewsletterListResult](src/models/monitor-newsletter-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorSummariesApi(request: Monitors.ListMonitorSummariesApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorSummaryListResult, Monitors.ListMonitorSummariesApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List AI-generated summaries produced for a monitor as matching content is processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.listMonitorSummariesApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type MonitorSummaryListResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ListMonitorSummariesApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .listMonitorSummariesApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorSummaryListResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor whose summaries to retrieve. |
| <code>sortBy</code> | <code>string</code> | Required field used to sort summaries. Accepts createdAt or updatedAt. |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>from?</code> | <code>Date</code> (date-time) | Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.listMonitorSummariesApi(request)`

- **OnSuccess**: <code>[MonitorSummaryListResult](src/models/monitor-summary-list-result.ts)</code>
- **OnError**: throws <code>[Monitors.ListMonitorSummariesApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.listMonitorSummariesApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorSummaryListResult, Monitors.ListMonitorSummariesApiError&gt;</code>, with `result.value` of type <code>[MonitorSummaryListResult](src/models/monitor-summary-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorsApi(request: Monitors.ListMonitorsApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorListResult, Monitors.ListMonitorsApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use the status parameter to filter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.listMonitorsApi({
    sortBy: "some example string",
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type MonitorListResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.ListMonitorsApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .listMonitorsApi({ sortBy: "some example string", sortOrder: SortOrder.Asc })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorListResult
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
| <code>sortBy</code> | <code>string</code> | Required field used to sort monitors. Accepts createdAt or updatedAt. |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>uuid?</code> | <code>string[]</code> | Filter by one or more monitor UUIDs. Multiple values are combined with OR. |
| <code>name?</code> | <code>string</code> | Filter by monitor name using a case-insensitive partial match. |
| <code>status?</code> | <code>[Status2](src/models/status2.ts)[]</code> | Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded. |
| <code>classificationType?</code> | <code>[ClassificationType3](src/models/classification-type3.ts)[]</code> | Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined with OR. |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.listMonitorsApi(request)`

- **OnSuccess**: <code>[MonitorListResult](src/models/monitor-list-result.ts)</code>
- **OnError**: throws <code>[Monitors.ListMonitorsApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.listMonitorsApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorListResult, Monitors.ListMonitorsApiError&gt;</code>, with `result.value` of type <code>[MonitorListResult](src/models/monitor-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseMonitorApi(request: Monitors.PauseMonitorApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorResult, Monitors.PauseMonitorApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause a monitor, stopping its processing pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.pauseMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MonitorResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.PauseMonitorApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .pauseMonitorApi({ uuid: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor to pause. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.pauseMonitorApi(request)`

- **OnSuccess**: <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: throws <code>[Monitors.PauseMonitorApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.pauseMonitorApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResult, Monitors.PauseMonitorApiError&gt;</code>, with `result.value` of type <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMonitorApi(request: Monitors.UpdateMonitorApiRequest, options?: RequestOptions): ApiPromise&lt;MonitorResult, Monitors.UpdateMonitorApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change monitor status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitors.updateMonitorApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    body: {
      name: "some example string",
      classificationType: ClassificationType1.Event,
      monitoringObjective: "some example string",
      dataSchema: { schema: { key: {} } },
      entityGroups: [{ groupReference: "some example string" }],
      query: {},
      contactPointIds: ["00000000-0000-0000-0000-000000000000"],
    },
  });
  // TODO: Handle 'response' of type MonitorResult
} catch (err) {
  // TODO: Handle 'err' of type Monitors.UpdateMonitorApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitors
  .updateMonitorApi({
    uuid: "00000000-0000-0000-0000-000000000000",
    body: {
      name: "some example string",
      classificationType: ClassificationType1.Event,
      monitoringObjective: "some example string",
      dataSchema: { schema: { key: {} } },
      entityGroups: [{ groupReference: "some example string" }],
      query: {},
      contactPointIds: ["00000000-0000-0000-0000-000000000000"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitorResult
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
| <code>uuid</code> | <code>string</code> | UUID of the monitor to update. |
| <code>body</code> | <code>[SignalApiUpdateBody](src/models/signal-api-update-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitors.updateMonitorApi(request)`

- **OnSuccess**: <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: throws <code>[Monitors.UpdateMonitorApiError](src/resources/monitors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitors.updateMonitorApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitorResult, Monitors.UpdateMonitorApiError&gt;</code>, with `result.value` of type <code>[MonitorResult](src/models/monitor-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NewsStories

> Source: [NewsStories](src/resources/news-stories.ts)

<details>
<summary><code>getArticleRefreshJob(request: NewsStories.GetArticleRefreshJobRequest, options?: RequestOptions): ApiPromise&lt;ArticleRefreshJobResponse, NewsStories.GetArticleRefreshJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the job status together with whatever per-article results have been computed so far. Results are immutable snapshots taken when each article was processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.getArticleRefreshJob({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ArticleRefreshJobResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.GetArticleRefreshJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories
  .getArticleRefreshJob({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ArticleRefreshJobResponse
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

**Direct**: `await client.newsStories.getArticleRefreshJob(request)`

- **OnSuccess**: <code>[ArticleRefreshJobResponse](src/models/article-refresh-job-response.ts)</code>
- **OnError**: throws <code>[NewsStories.GetArticleRefreshJobError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.getArticleRefreshJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ArticleRefreshJobResponse, NewsStories.GetArticleRefreshJobError&gt;</code>, with `result.value` of type <code>[ArticleRefreshJobResponse](src/models/article-refresh-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoryCounts(request?: NewsStories.GetStoryCountsRequest, options?: RequestOptions): ApiPromise&lt;StatResult, NewsStories.GetStoryCountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and filtered by supported story attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.getStoryCounts({ splitBy: SplitBy.Hour });
  // TODO: Handle 'response' of type StatResult
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.GetStoryCountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories.getStoryCounts({ splitBy: SplitBy.Hour }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatResult
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
| <code>splitBy?</code> | <code>[SplitBy](src/models/split-by.ts)</code> | Time interval used to group story counts. Accepts hour, day, week, or month and defaults to month.<br>**Default**: "month" |
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering stories based on their name, summary, and key points. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>name?</code> | <code>string</code> | String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes, and wildcards for matching name variations. |
| <code>clusterId?</code> | <code>string[]</code> | String Array. Filter to specific stories using their unique identifiers. Each clusterId represents a distinct story that groups related articles. Multiple values create an OR filter. |
| <code>excludeClusterId?</code> | <code>string[]</code> | String Array. Excludes specific stories from the results by their unique identifiers. Use this parameter to filter out unwanted or previously seen stories. |
| <code>from?</code> | <code>Date</code> (date-time) | Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>initializedFrom?</code> | <code>Date</code> (date-time) | Filter for stories initialized on or after this date. A story is initialized when it becomes visible with generated story data. |
| <code>initializedTo?</code> | <code>Date</code> (date-time) | Filter for stories initialized on or before this date. A story is initialized when it becomes visible with generated story data. |
| <code>updatedFrom?</code> | <code>Date</code> (date-time) | Date. Filter for stories that received new articles after this date. Useful for tracking developing news events or evolving storylines. |
| <code>updatedTo?</code> | <code>Date</code> (date-time) | Date. Filter for stories that received new articles before this date. Useful for tracking developing news events or evolving storylines. |
| <code>topic?</code> | <code>string[]</code> | String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and stories can include multiple topics based on their constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter. |
| <code>category?</code> | <code>string[]</code> | String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business, or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within each story. Multiple values create an OR filter. |
| <code>taxonomy?</code> | <code>string[]</code> | String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized based on their constituent articles. Multiple values create an OR filter. |
| <code>source?</code> | <code>string[]</code> | String Array. Filter stories that contain articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains at least one article from any of the specified sources. Multiple values create an OR filter. |
| <code>sourceGroup?</code> | <code>string[]</code> | String Array. Filter stories that contain articles from publishers in Perigon's curated bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any publisher in the specified bundles. Multiple values create an OR filter. |
| <code>minUniqueSources?</code> | <code>number</code> | Integer. Specifies the minimum number of unique sources required for a story to appear in results. Higher values return more significant stories covered by multiple publications. Default is 3. |
| <code>minSourceDiversity?</code> | <code>number</code> | Float. Minimum ratio of unique sources to unique articles (uniqueSources / uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires at least 1 unique source per 20 articles. Not applied by default. |
| <code>personWikidataId?</code> | <code>string[]</code> | String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked individuals. |
| <code>personName?</code> | <code>string</code> | String. Filter stories by exact name matches of top mentioned people. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint. |
| <code>companyId?</code> | <code>string[]</code> | String Array. Filter stories by identifiers of top mentioned companies. Returns stories where these companies appear prominently. For a complete list of tracked companies, refer to the /companies endpoint. |
| <code>companyName?</code> | <code>string</code> | String. Filter stories by names of top mentioned companies. Performs an exact match on company names in the topCompanies field. |
| <code>companyDomain?</code> | <code>string[]</code> | String Array. Filter stories by domains of top mentioned companies (e.g., apple.com). Returns stories where companies with these domains appear prominently. For available company entities, consult the /companies endpoint. |
| <code>companySymbol?</code> | <code>string[]</code> | String Array. Filter stories by stock symbols of top mentioned companies. Returns stories where companies with these symbols appear prominently. For available company entities and their symbols, consult the /companies endpoint. |
| <code>companyIsin?</code> | <code>string[]</code> | String Array. Filter stories by ISIN codes of top mentioned companies (International Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently. For available company entities and their ISINs, consult the /companies endpoint. |
| <code>companySymbolIsin?</code> | <code>string[]</code> | String Array. Filter stories by ISIN codes on ticker listings of top mentioned companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns stories where those companies appear prominently. For available company entities and their listing ISINs, consult the /companies endpoint. |
| <code>country?</code> | <code>string[]</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations. |
| <code>state?</code> | <code>string[]</code> | String Array. Filter local news by state. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations. |
| <code>city?</code> | <code>string[]</code> | String Array. Filter local news by city. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations. |
| <code>area?</code> | <code>string[]</code> | String Array. Filter local news by area. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations. |
| <code>minClusterSize?</code> | <code>number</code> | Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of unique articles. |
| <code>maxClusterSize?</code> | <code>number</code> | Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of unique articles in the cluster. |
| <code>nameExists?</code> | <code>boolean</code> | Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note that stories only receive names after they contain at least 5 unique articles. |
| <code>positiveSentimentFrom?</code> | <code>number</code> | Filter stories with an aggregate positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>positiveSentimentTo?</code> | <code>number</code> | Filter stories with an aggregate positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>neutralSentimentFrom?</code> | <code>number</code> | Filter stories with an aggregate neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>neutralSentimentTo?</code> | <code>number</code> | Filter stories with an aggregate neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>negativeSentimentFrom?</code> | <code>number</code> | Filter stories with an aggregate negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>negativeSentimentTo?</code> | <code>number</code> | Filter stories with an aggregate negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>showDuplicates?</code> | <code>boolean</code> | Boolean. Stories are deduplicated by default. If a story is deduplicated, all future articles are merged into the original story. duplicateOf field contains the original cluster Id. When showDuplicates=true, all stories are shown. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.getStoryCounts(request)`

- **OnSuccess**: <code>[StatResult](src/models/stat-result.ts)</code>
- **OnError**: throws <code>[NewsStories.GetStoryCountsError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.getStoryCounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatResult, NewsStories.GetStoryCountsError&gt;</code>, with `result.value` of type <code>[StatResult](src/models/stat-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoryHistory(request?: NewsStories.GetStoryHistoryRequest, options?: RequestOptions): ApiPromise&lt;StoryHistoryResult, NewsStories.GetStoryHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and changelogs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.getStoryHistory();
  // TODO: Handle 'response' of type StoryHistoryResult
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.GetStoryHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories.getStoryHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryHistoryResult
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
| <code>clusterId?</code> | <code>string[]</code> | Filter history records by story cluster ID. Multiple values are combined with OR. |
| <code>from?</code> | <code>Date</code> (date-time) | Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | Field used to sort history records in descending order. Accepts createdAt or triggeredAt and defaults to createdAt. |
| <code>page?</code> | <code>number</code> | Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations. |
| <code>size?</code> | <code>number</code> | Integer. Number of stories results per page, from 0 to 100. |
| <code>changelogExists?</code> | <code>boolean</code> | Filter by whether a history record contains a changelog. Use true to require one or false to require its absence. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.getStoryHistory(request)`

- **OnSuccess**: <code>[StoryHistoryResult](src/models/story-history-result.ts)</code>
- **OnError**: throws <code>[NewsStories.GetStoryHistoryError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.getStoryHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryHistoryResult, NewsStories.GetStoryHistoryError&gt;</code>, with `result.value` of type <code>[StoryHistoryResult](src/models/story-history-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>peekArticleRefresh(request: NewsStories.PeekArticleRefreshRequest, options?: RequestOptions): ApiPromise&lt;ArticleRefreshPeekResponse, NewsStories.PeekArticleRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any processing or creating a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.peekArticleRefresh({
    body: { articleIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type ArticleRefreshPeekResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.PeekArticleRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories
  .peekArticleRefresh({ body: { articleIds: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ArticleRefreshPeekResponse
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
| <code>body</code> | <code>[ArticleRefreshSubmitRequest](src/models/article-refresh-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.peekArticleRefresh(request)`

- **OnSuccess**: <code>[ArticleRefreshPeekResponse](src/models/article-refresh-peek-response.ts)</code>
- **OnError**: throws <code>[NewsStories.PeekArticleRefreshError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.peekArticleRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ArticleRefreshPeekResponse, NewsStories.PeekArticleRefreshError&gt;</code>, with `result.value` of type <code>[ArticleRefreshPeekResponse](src/models/article-refresh-peek-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchArticles(request?: NewsStories.SearchArticlesRequest, options?: RequestOptions): ApiPromise&lt;QuerySearchResult, NewsStories.SearchArticlesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter all news articles available via the Perigon API. The result includes a list of individual articles that were matched to your specific criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.searchArticles();
  // TODO: Handle 'response' of type QuerySearchResult
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.SearchArticlesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories.searchArticles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QuerySearchResult
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
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering articles based on their title, description, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>title?</code> | <code>string</code> | String. Search specifically within article headlines/titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations. |
| <code>desc?</code> | <code>string</code> | String. Search within article description fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching. |
| <code>content?</code> | <code>string</code> | String. Search within the full article body content. Supports Boolean logic, exact phrase matching with quotes, and wildcards for comprehensive content searching. |
| <code>summary?</code> | <code>string</code> | String. Search within article summary fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching. |
| <code>url?</code> | <code>string</code> | String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying certain website sections, e.g. source=cnn.com&url=travel. |
| <code>articleId?</code> | <code>string[]</code> | String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs can be provided to return a collection of specific articles. |
| <code>clusterId?</code> | <code>string[]</code> | String Array. Filter results to only show content within a specific related content cluster. Returns articles grouped together as part of Perigon Stories based on topic relevance. |
| <code>sortBy?</code> | <code>[AllEndpointSortBy](src/models/all-endpoint-sort-by.ts)</code> | String. Determines the article sorting order. Options include relevance (default), date/pubDate (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in system first, often identical to addDate). |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>size?</code> | <code>number</code> | Integer. The number of articles to return per page in the paginated response. |
| <code>from?</code> | <code>Date</code> (date-time) | Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format. |
| <code>addDateFrom?</code> | <code>Date</code> (date-time) | Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format. |
| <code>addDateTo?</code> | <code>Date</code> (date-time) | Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format. |
| <code>refreshDateFrom?</code> | <code>Date</code> (date-time) | Date. Filter for articles refreshed/updated in Perigon's system after this date. In most cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format. |
| <code>refreshDateTo?</code> | <code>Date</code> (date-time) | Date. Filter for articles refreshed/updated in Perigon's system before this date. In most cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format. |
| <code>medium?</code> | <code>string[]</code> | String Array. Filter articles by their primary medium type. Accepts Article for written content or Video for video-based stories. Multiple values create an OR filter. |
| <code>source?</code> | <code>string[]</code> | String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter. |
| <code>sourceGroup?</code> | <code>string[]</code> | String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100, top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles. |
| <code>excludeSourceGroup?</code> | <code>string[]</code> | String Array. Exclude articles from specified Perigon source groups. Multiple values create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g., top10, top100). |
| <code>excludeSource?</code> | <code>string[]</code> | String Array. Exclude articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude filter. |
| <code>watchlist?</code> | <code>string[]</code> | String Array. Filter articles using watchlists of people and companies. Multiple values create an OR filter to include articles mentioning any entity from the specified watchlists. |
| <code>excludeWatchlist?</code> | <code>string[]</code> | String Array. Exclude articles mentioning entities from specified watchlists. Multiple values create an AND-exclude filter, removing content mentioning any entity from the specified watchlists. |
| <code>paywall?</code> | <code>boolean</code> | Boolean. Filter to show only results where the source has a paywall (true) or does not have a paywall (false). |
| <code>byline?</code> | <code>string[]</code> | String Array. Filter articles by author bylines. Works as an exact match for each author name provided. Multiple values create an OR filter to find articles by any of the specified authors. |
| <code>author?</code> | <code>string[]</code> | String Array. Filter articles by specific author names. Works as an exact match for each name. Multiple values create an OR filter to find articles by any of the specified authors. |
| <code>excludeAuthor?</code> | <code>string[]</code> | String Array. Exclude articles written by specific authors. Any article with an author name matching an entry in this list will be omitted from results. Multiple values create an AND-exclude filter. |
| <code>journalistId?</code> | <code>string[]</code> | String Array. Filter by unique journalist identifiers which can be found through the Journalist API or in the matchedAuthors field. Multiple values create an OR filter. |
| <code>excludeJournalistId?</code> | <code>string[]</code> | String Array. Exclude articles written by specific journalists identified by their unique IDs. Multiple values create an AND-exclude filter. |
| <code>language?</code> | <code>string[]</code> | String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr). Multiple values create an OR filter. |
| <code>excludeLanguage?</code> | <code>string[]</code> | String Array. Exclude articles in specific languages using ISO-639 two-letter codes. Multiple values create an AND-exclude filter. |
| <code>searchTranslation?</code> | <code>boolean</code> | Boolean. Expand search to include translated content fields for non-English articles. When true, searches translated title, description, and content fields. |
| <code>label?</code> | <code>string[]</code> | String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. Multiple values create an OR filter. |
| <code>excludeLabel?</code> | <code>string[]</code> | String Array. Exclude articles with specific editorial labels. Multiple values create an AND-exclude filter, removing all content with any of these labels. |
| <code>category?</code> | <code>string[]</code> | String Array. Filter by categories. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. Use 'none' to search uncategorized articles. |
| <code>excludeCategory?</code> | <code>string[]</code> | String Array. Exclude articles with specific categories. Multiple values create an AND-exclude filter, removing all content with any of these categories. |
| <code>topic?</code> | <code>string[]</code> | String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and articles can have multiple topics. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter. |
| <code>excludeTopic?</code> | <code>string[]</code> | String Array. Exclude articles with specific topics. Multiple values create an AND-exclude filter, removing all content with any of these topics. |
| <code>linkTo?</code> | <code>string</code> | String. Returns only articles that contain links to the specified URL pattern. Matches against the 'links' field in article responses. |
| <code>showReprints?</code> | <code>boolean</code> | Boolean. Controls whether to include reprinted content in results. When true (default), shows syndicated articles from wire services like AP or Reuters that appear on multiple sites. |
| <code>reprintGroupId?</code> | <code>string</code> | String. Returns all articles in a specific reprint group, including the original article and all its known reprints. Use when you want to see all versions of the same content. |
| <code>city?</code> | <code>string[]</code> | String Array. Filters articles where a specified city plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the urban area in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>excludeCity?</code> | <code>string[]</code> | String Array. A list of cities to exclude from the results. Articles that are associated with any of the specified cities will be filtered out. |
| <code>area?</code> | <code>string[]</code> | String Array. Filters articles where a specified area, such as a neighborhood, borough, or district, plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the area in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>state?</code> | <code>string[]</code> | String Array. Filters articles where a specified state plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the state in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>excludeState?</code> | <code>string[]</code> | String Array. A list of states to exclude. Articles that include, or are associated with, any of the states provided here will be filtered out. This is especially useful if you want to ignore news tied to certain geographical areas (e.g., US states). |
| <code>county?</code> | <code>string[]</code> | String Array. A list of counties to include (or specify) in the search results. This field filters the returned articles based on the county associated with the event or news. Only articles tagged with one of these counties will be included. |
| <code>excludeCounty?</code> | <code>string[]</code> | String Array. Excludes articles from specific counties or administrative divisions in the search results. Accepts either a single county name or a list of county names. County names should match the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows for more granular geographic filter |
| <code>locationsCountry?</code> | <code>string[]</code> | String Array. Filters articles where a specified country plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If multiple parameters are passed, they will be applied as OR operations. |
| <code>country?</code> | <code>string[]</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations. |
| <code>excludeLocationsCountry?</code> | <code>string[]</code> | String Array. Excludes articles where a specified country plays a central role in the content, ensuring results are not deeply relevant to the country in question. If multiple parameters are passed, they will be applied as AND operations, excluding articles relevant to any of the specified countries. |
| <code>location?</code> | <code>string[]</code> | String Array. Return all articles that have the specified location. Location attributes are delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'. |
| <code>lat?</code> | <code>number</code> | Float. Latitude of the center point to search places |
| <code>lon?</code> | <code>number</code> | Float. Longitude of the center point to search places |
| <code>maxDistance?</code> | <code>number</code> | Float. Maximum distance (in km) from starting point to search articles by tagged places |
| <code>sourceCity?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given city. |
| <code>excludeSourceCity?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified cities. |
| <code>sourceCounty?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given county. |
| <code>excludeSourceCounty?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified counties. |
| <code>sourceCountry?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given country. Must be 2 character country code (i.e. us, gb, etc). |
| <code>excludeSourceCountry?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified countries. Must be 2 character country codes (e.g., us, gb). |
| <code>sourceState?</code> | <code>string[]</code> | String Array. Find articles published by sources that are located within a given state. |
| <code>excludeSourceState?</code> | <code>string[]</code> | String Array. Excludes articles published by sources that are located within the specified states. |
| <code>sourceLat?</code> | <code>number</code> | Float. Latitude of the center point to search articles created by local publications. |
| <code>sourceLon?</code> | <code>number</code> | Float. Longitude of the center point to search articles created by local publications. |
| <code>sourceMaxDistance?</code> | <code>number</code> | Float. Maximum distance from starting point to search articles created by local publications. |
| <code>personWikidataId?</code> | <code>string[]</code> | String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people endpoint for a complete list of tracked individuals. |
| <code>excludePersonWikidataId?</code> | <code>string[]</code> | String Array. Exclude articles mentioning people with specific Wikidata IDs. Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to avoid name ambiguity. |
| <code>personName?</code> | <code>string[]</code> | String Array. Filter articles by exact person name matches. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint. |
| <code>excludePersonName?</code> | <code>string[]</code> | String Array. Exclude articles mentioning specific people by name. Creates an AND-exclude filter to remove content about these individuals. |
| <code>companyId?</code> | <code>string[]</code> | String Array. Filter articles by company identifiers. For a complete list of tracked companies, refer to the /companies endpoint. |
| <code>excludeCompanyId?</code> | <code>string[]</code> | String Array. Exclude articles mentioning companies with specific identifiers. Creates an AND-exclude filter to remove content about these corporate entities. |
| <code>companyName?</code> | <code>string</code> | String. Filter articles by company name mentions. Performs an exact match on company names. |
| <code>companyDomain?</code> | <code>string[]</code> | String Array. Filter articles by company domains (e.g., apple.com). For available company entities, consult the /companies endpoint. |
| <code>excludeCompanyDomain?</code> | <code>string[]</code> | String Array. Exclude articles related to companies with specific domains. Creates an AND-exclude filter to remove content about these companies. |
| <code>companySymbol?</code> | <code>string[]</code> | String Array. Filter articles by company stock symbols. For available company entities and their symbols, consult the /companies endpoint. |
| <code>companyIsin?</code> | <code>string[]</code> | String Array. Filter articles by company ISIN codes (International Securities Identification Numbers). For available company entities and their ISINs, consult the /companies endpoint. |
| <code>companySymbolIsin?</code> | <code>string[]</code> | String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint. |
| <code>excludeCompanyIsin?</code> | <code>string[]</code> | String Array. Exclude articles related to companies with specific ISIN codes. Creates an AND-exclude filter to remove content about these companies. For available company entities and their ISINs, consult the /companies endpoint. |
| <code>excludeCompanySymbolIsin?</code> | <code>string[]</code> | String Array. Exclude articles related to companies whose ticker listings have these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint. |
| <code>excludeCompanySymbol?</code> | <code>string[]</code> | String Array. A list of stock symbols (ticker symbols) that identify companies to be excluded. Articles related to companies using any of these symbols will be omitted, which is useful for targeting or avoiding specific public companies. |
| <code>showNumResults?</code> | <code>boolean</code> | Boolean. Whether to show the total number of all matched articles. Default value is false which makes queries a bit more efficient but also counts up to 10000 articles. |
| <code>positiveSentimentFrom?</code> | <code>number</code> | Float. Filter articles with a positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>positiveSentimentTo?</code> | <code>number</code> | Float. Filter articles with a positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>neutralSentimentFrom?</code> | <code>number</code> | Float. Filter articles with a neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>neutralSentimentTo?</code> | <code>number</code> | Float. Filter articles with a neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>negativeSentimentFrom?</code> | <code>number</code> | Float. Filter articles with a negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>negativeSentimentTo?</code> | <code>number</code> | Float. Filter articles with a negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>taxonomy?</code> | <code>string[]</code> | String Array. Filters by Google Content Categories. This field will accept 1 or more categories, must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other, /Finance/Investing/Funds. [Full list](https://docs.cloud.google.com/natural-language/docs/categories#version_2) |
| <code>prefixTaxonomy?</code> | <code>string</code> | String. Filters by Google Content Categories. This field will filter by the category prefix only. Example: prefixTaxonomy=/Finance |
| <code>showHighlighting?</code> | <code>boolean</code> | Boolean. When set to true, enables text highlighting in search results. |
| <code>highlightFragmentSize?</code> | <code>number</code> | Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified. |
| <code>highlightNumFragments?</code> | <code>number</code> | Integer. Controls the maximum number of highlighted fragments to return per field. |
| <code>highlightPreTag?</code> | <code>string</code> | String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not specified. |
| <code>highlightPostTag?</code> | <code>string</code> | String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not specified. |
| <code>highlightQ?</code> | <code>string</code> | String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.searchArticles(request)`

- **OnSuccess**: <code>[QuerySearchResult](src/models/query-search-result.ts)</code>
- **OnError**: throws <code>[NewsStories.SearchArticlesError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.searchArticles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QuerySearchResult, NewsStories.SearchArticlesError&gt;</code>, with `result.value` of type <code>[QuerySearchResult](src/models/query-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchStories(request?: NewsStories.SearchStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySearchResult, NewsStories.SearchStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track evolving narratives and top news headlines with the '**Stories**' endpoint — it returns structured clusters of related articles with summaries, key points, sentiment scores, and metadata on top people, companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what they impact, and where they're gaining traction globally.

Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single story, identified by the `clusterId` field. Once a story reaches five articles, a story title is automatically generated based on its content. Stories update as new coverage is processed and key details evolve.

To fetch all articles within a specific story, query the `/articles/all` endpoint using the `clusterId` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.searchStories();
  // TODO: Handle 'response' of type StorySearchResult
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.SearchStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories.searchStories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySearchResult
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
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering stories based on their name, summary, and key points. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>name?</code> | <code>string</code> | String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes, and wildcards for matching name variations. |
| <code>clusterId?</code> | <code>string[]</code> | String Array. Filter to specific stories using their unique identifiers. Each clusterId represents a distinct story that groups related articles. Multiple values create an OR filter. |
| <code>excludeClusterId?</code> | <code>string[]</code> | String Array. Excludes specific stories from the results by their unique identifiers. Use this parameter to filter out unwanted or previously seen stories. |
| <code>sortBy?</code> | <code>[ClustersListSortBy](src/models/clusters-list-sort-by.ts)</code> | String. Determines the story sorting order. Options include createdAt (default, when stories first emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance (best match to query), count (by unique article count), and totalCount (by total article count including reprints). |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>size?</code> | <code>number</code> | Integer. The number of articles to return per page in the paginated response. |
| <code>from?</code> | <code>Date</code> (date-time) | Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>to?</code> | <code>Date</code> (date-time) | Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format. |
| <code>initializedFrom?</code> | <code>Date</code> (date-time) | Filter for stories initialized on or after this date. A story is initialized when it becomes visible with generated story data. |
| <code>initializedTo?</code> | <code>Date</code> (date-time) | Filter for stories initialized on or before this date. A story is initialized when it becomes visible with generated story data. |
| <code>updatedFrom?</code> | <code>Date</code> (date-time) | Date. Filter for stories that received new articles after this date. Useful for tracking developing news events or evolving storylines. |
| <code>updatedTo?</code> | <code>Date</code> (date-time) | Date. Filter for stories that received new articles before this date. Useful for tracking developing news events or evolving storylines. |
| <code>topic?</code> | <code>string[]</code> | String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and stories can include multiple topics based on their constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter. |
| <code>category?</code> | <code>string[]</code> | String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business, or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within each story. Multiple values create an OR filter. |
| <code>taxonomy?</code> | <code>string[]</code> | String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized based on their constituent articles. Multiple values create an OR filter. |
| <code>source?</code> | <code>string[]</code> | String Array. Filter stories that contain articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains at least one article from any of the specified sources. Multiple values create an OR filter. |
| <code>sourceGroup?</code> | <code>string[]</code> | String Array. Filter stories that contain articles from publishers in Perigon's curated bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any publisher in the specified bundles. Multiple values create an OR filter. |
| <code>minUniqueSources?</code> | <code>number</code> | Integer. Specifies the minimum number of unique sources required for a story to appear in results. Higher values return more significant stories covered by multiple publications. Default is 3. |
| <code>minSourceDiversity?</code> | <code>number</code> | Float. Minimum ratio of unique sources to unique articles (uniqueSources / uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires at least 1 unique source per 20 articles. Not applied by default. |
| <code>personWikidataId?</code> | <code>string[]</code> | String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked individuals. |
| <code>personName?</code> | <code>string</code> | String. Filter stories by exact name matches of top mentioned people. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint. |
| <code>companyId?</code> | <code>string[]</code> | String Array. Filter stories by identifiers of top mentioned companies. Returns stories where these companies appear prominently. For a complete list of tracked companies, refer to the /companies endpoint. |
| <code>companyName?</code> | <code>string</code> | String. Filter stories by names of top mentioned companies. Performs an exact match on company names in the topCompanies field. |
| <code>companyDomain?</code> | <code>string[]</code> | String Array. Filter stories by domains of top mentioned companies (e.g., apple.com). Returns stories where companies with these domains appear prominently. For available company entities, consult the /companies endpoint. |
| <code>companySymbol?</code> | <code>string[]</code> | String Array. Filter stories by stock symbols of top mentioned companies. Returns stories where companies with these symbols appear prominently. For available company entities and their symbols, consult the /companies endpoint. |
| <code>companyIsin?</code> | <code>string[]</code> | String Array. Filter stories by ISIN codes of top mentioned companies (International Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently. For available company entities and their ISINs, consult the /companies endpoint. |
| <code>companySymbolIsin?</code> | <code>string[]</code> | String Array. Filter stories by ISIN codes on ticker listings of top mentioned companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns stories where those companies appear prominently. For available company entities and their listing ISINs, consult the /companies endpoint. |
| <code>country?</code> | <code>string[]</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations. |
| <code>state?</code> | <code>string[]</code> | String Array. Filter local news by state. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations. |
| <code>city?</code> | <code>string[]</code> | String Array. Filter local news by city. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations. |
| <code>area?</code> | <code>string[]</code> | String Array. Filter local news by area. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations. |
| <code>minClusterSize?</code> | <code>number</code> | Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of unique articles. |
| <code>maxClusterSize?</code> | <code>number</code> | Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of unique articles in the cluster. |
| <code>nameExists?</code> | <code>boolean</code> | Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note that stories only receive names after they contain at least 5 unique articles. |
| <code>positiveSentimentFrom?</code> | <code>number</code> | Filter stories with an aggregate positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>positiveSentimentTo?</code> | <code>number</code> | Filter stories with an aggregate positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone. |
| <code>neutralSentimentFrom?</code> | <code>number</code> | Filter stories with an aggregate neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>neutralSentimentTo?</code> | <code>number</code> | Filter stories with an aggregate neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone. |
| <code>negativeSentimentFrom?</code> | <code>number</code> | Filter stories with an aggregate negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>negativeSentimentTo?</code> | <code>number</code> | Filter stories with an aggregate negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone. |
| <code>showStoryPageInfo?</code> | <code>boolean</code> | Boolean. |
| <code>showNumResults?</code> | <code>boolean</code> | Boolean. Show total number of results. By default set to false, will cap result count at 10000. |
| <code>showDuplicates?</code> | <code>boolean</code> | Boolean. Stories are deduplicated by default. If a story is deduplicated, all future articles are merged into the original story. duplicateOf field contains the original cluster Id. When showDuplicates=true, all stories are shown. |
| <code>showHighlighting?</code> | <code>boolean</code> | Boolean. When set to true, enables text highlighting in search results. |
| <code>highlightFragmentSize?</code> | <code>number</code> | Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified. |
| <code>highlightNumFragments?</code> | <code>number</code> | Integer. Controls the maximum number of highlighted fragments to return per field. |
| <code>highlightPreTag?</code> | <code>string</code> | String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not specified. |
| <code>highlightPostTag?</code> | <code>string</code> | String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not specified. |
| <code>highlightQ?</code> | <code>string</code> | String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change. |
| <code>expandArticles?</code> | <code>boolean</code> | Boolean. Preview 5 articles from the cluster. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.searchStories(request)`

- **OnSuccess**: <code>[StorySearchResult](src/models/story-search-result.ts)</code>
- **OnError**: throws <code>[NewsStories.SearchStoriesError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.searchStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySearchResult, NewsStories.SearchStoriesError&gt;</code>, with `result.value` of type <code>[StorySearchResult](src/models/story-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitArticleRefreshJob(request: NewsStories.SubmitArticleRefreshJobRequest, options?: RequestOptions): ApiPromise&lt;ArticleRefreshJobResponse, NewsStories.SubmitArticleRefreshJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately; the rest are scheduled for processing. Poll the job status endpoint for results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.submitArticleRefreshJob({
    body: { articleIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type ArticleRefreshJobResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.SubmitArticleRefreshJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories
  .submitArticleRefreshJob({ body: { articleIds: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ArticleRefreshJobResponse
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
| <code>body</code> | <code>[ArticleRefreshSubmitRequest](src/models/article-refresh-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.submitArticleRefreshJob(request)`

- **OnSuccess**: <code>[ArticleRefreshJobResponse](src/models/article-refresh-job-response.ts)</code>
- **OnError**: throws <code>[NewsStories.SubmitArticleRefreshJobError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.submitArticleRefreshJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ArticleRefreshJobResponse, NewsStories.SubmitArticleRefreshJobError&gt;</code>, with `result.value` of type <code>[ArticleRefreshJobResponse](src/models/article-refresh-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vectorSearchArticles(request: NewsStories.VectorSearchArticlesRequest, options?: RequestOptions): ApiPromise&lt;ArticlesVectorSearchResult, NewsStories.VectorSearchArticlesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a natural language search over news articles from the past 6 months using semantic relevance. The result includes a list of articles most closely matched to your query intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsStories.vectorSearchArticles({ body: { prompt: "some example string" } });
  // TODO: Handle 'response' of type ArticlesVectorSearchResult
} catch (err) {
  // TODO: Handle 'err' of type NewsStories.VectorSearchArticlesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsStories
  .vectorSearchArticles({ body: { prompt: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ArticlesVectorSearchResult
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
| <code>body</code> | <code>[ArticleSearchParams](src/models/article-search-params.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsStories.vectorSearchArticles(request)`

- **OnSuccess**: <code>[ArticlesVectorSearchResult](src/models/articles-vector-search-result.ts)</code>
- **OnError**: throws <code>[NewsStories.VectorSearchArticlesError](src/resources/news-stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsStories.vectorSearchArticles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ArticlesVectorSearchResult, NewsStories.VectorSearchArticlesError&gt;</code>, with `result.value` of type <code>[ArticlesVectorSearchResult](src/models/articles-vector-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SourceGroups

> Source: [SourceGroups](src/resources/source-groups.ts)

<details>
<summary><code>createSourceGroup(request: SourceGroups.CreateSourceGroupRequest, options?: RequestOptions): ApiPromise&lt;SourceGroupResult, SourceGroups.CreateSourceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new source group under the organization associated with the API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceGroups.createSourceGroup({
    body: { name: "some example string", domains: ["some example string"] },
  });
  // TODO: Handle 'response' of type SourceGroupResult
} catch (err) {
  // TODO: Handle 'err' of type SourceGroups.CreateSourceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceGroups
  .createSourceGroup({ body: { name: "some example string", domains: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceGroupResult
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
| <code>body</code> | <code>[CreateSourceGroupParams](src/models/create-source-group-params.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceGroups.createSourceGroup(request)`

- **OnSuccess**: <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: throws <code>[SourceGroups.CreateSourceGroupError](src/resources/source-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceGroups.createSourceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceGroupResult, SourceGroups.CreateSourceGroupError&gt;</code>, with `result.value` of type <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSourceGroup(request: SourceGroups.DeleteSourceGroupRequest, options?: RequestOptions): ApiPromise&lt;SourceGroupResult, SourceGroups.DeleteSourceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a source group owned by the organization associated with the API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceGroups.deleteSourceGroup({ id: 1 });
  // TODO: Handle 'response' of type SourceGroupResult
} catch (err) {
  // TODO: Handle 'err' of type SourceGroups.DeleteSourceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceGroups.deleteSourceGroup({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceGroupResult
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
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceGroups.deleteSourceGroup(request)`

- **OnSuccess**: <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: throws <code>[SourceGroups.DeleteSourceGroupError](src/resources/source-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceGroups.deleteSourceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceGroupResult, SourceGroups.DeleteSourceGroupError&gt;</code>, with `result.value` of type <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSourceGroup(request: SourceGroups.GetSourceGroupRequest, options?: RequestOptions): ApiPromise&lt;SourceGroupResult, SourceGroups.GetSourceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceGroups.getSourceGroup({ id: 1 });
  // TODO: Handle 'response' of type SourceGroupResult
} catch (err) {
  // TODO: Handle 'err' of type SourceGroups.GetSourceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceGroups.getSourceGroup({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceGroupResult
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
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceGroups.getSourceGroup(request)`

- **OnSuccess**: <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: throws <code>[SourceGroups.GetSourceGroupError](src/resources/source-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceGroups.getSourceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceGroupResult, SourceGroups.GetSourceGroupError&gt;</code>, with `result.value` of type <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSourceGroups(request: SourceGroups.ListSourceGroupsRequest, options?: RequestOptions): ApiPromise&lt;SourceGroupListResult, SourceGroups.ListSourceGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List source groups owned by the organization associated with the API key, as well as publicly visible source groups. Supports filtering by name and domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceGroups.listSourceGroups({
    sortBy: SourceGroupSortBy.Id,
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type SourceGroupListResult
} catch (err) {
  // TODO: Handle 'err' of type SourceGroups.ListSourceGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceGroups
  .listSourceGroups({ sortBy: SourceGroupSortBy.Id, sortOrder: SortOrder.Asc })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceGroupListResult
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
| <code>sortBy</code> | <code>[SourceGroupSortBy](src/models/source-group-sort-by.ts)</code> | - |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>name?</code> | <code>string</code> | - |
| <code>domain?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceGroups.listSourceGroups(request)`

- **OnSuccess**: <code>[SourceGroupListResult](src/models/source-group-list-result.ts)</code>
- **OnError**: throws <code>[SourceGroups.ListSourceGroupsError](src/resources/source-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceGroups.listSourceGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceGroupListResult, SourceGroups.ListSourceGroupsError&gt;</code>, with `result.value` of type <code>[SourceGroupListResult](src/models/source-group-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resolveSourceGroups(request?: SourceGroups.ResolveSourceGroupsRequest, options?: RequestOptions): ApiPromise&lt;SourceGroupResolveResult, SourceGroups.ResolveSourceGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve source groups by name. For each name, returns the organization's private source group if one exists, otherwise falls back to the matching public source group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceGroups.resolveSourceGroups();
  // TODO: Handle 'response' of type SourceGroupResolveResult
} catch (err) {
  // TODO: Handle 'err' of type SourceGroups.ResolveSourceGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceGroups.resolveSourceGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceGroupResolveResult
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
| <code>name?</code> | <code>string[]</code> | Source group names to resolve (max 100) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceGroups.resolveSourceGroups(request)`

- **OnSuccess**: <code>[SourceGroupResolveResult](src/models/source-group-resolve-result.ts)</code>
- **OnError**: throws <code>[SourceGroups.ResolveSourceGroupsError](src/resources/source-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceGroups.resolveSourceGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceGroupResolveResult, SourceGroups.ResolveSourceGroupsError&gt;</code>, with `result.value` of type <code>[SourceGroupResolveResult](src/models/source-group-resolve-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSourceGroup(request: SourceGroups.UpdateSourceGroupRequest, options?: RequestOptions): ApiPromise&lt;SourceGroupResult, SourceGroups.UpdateSourceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a source group owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceGroups.updateSourceGroup({ id: 1, body: {} });
  // TODO: Handle 'response' of type SourceGroupResult
} catch (err) {
  // TODO: Handle 'err' of type SourceGroups.UpdateSourceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceGroups.updateSourceGroup({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceGroupResult
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
| <code>id</code> | <code>number</code> | - |
| <code>body</code> | <code>[PatchSourceGroupParams](src/models/patch-source-group-params.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceGroups.updateSourceGroup(request)`

- **OnSuccess**: <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: throws <code>[SourceGroups.UpdateSourceGroupError](src/resources/source-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceGroups.updateSourceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceGroupResult, SourceGroups.UpdateSourceGroupError&gt;</code>, with `result.value` of type <code>[SourceGroupResult](src/models/source-group-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SupplementalEndpoints

> Source: [SupplementalEndpoints](src/resources/supplemental-endpoints.ts)

<details>
<summary><code>getJournalistById(request: SupplementalEndpoints.GetJournalistByIdRequest, options?: RequestOptions): ApiPromise&lt;Journalist, SupplementalEndpoints.GetJournalistByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find additional details on a journalist by using the journalist ID found in an article response object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supplementalEndpoints.getJournalistById({ id: "some example string" });
  // TODO: Handle 'response' of type Journalist
} catch (err) {
  // TODO: Handle 'err' of type SupplementalEndpoints.GetJournalistByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supplementalEndpoints
  .getJournalistById({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Journalist
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

**Direct**: `await client.supplementalEndpoints.getJournalistById(request)`

- **OnSuccess**: <code>[Journalist](src/models/journalist.ts)</code>
- **OnError**: throws <code>[SupplementalEndpoints.GetJournalistByIdError](src/resources/supplemental-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supplementalEndpoints.getJournalistById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Journalist, SupplementalEndpoints.GetJournalistByIdError&gt;</code>, with `result.value` of type <code>[Journalist](src/models/journalist.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompanies(request?: SupplementalEndpoints.SearchCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompanySearchResult, SupplementalEndpoints.SearchCompaniesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supplementalEndpoints.searchCompanies();
  // TODO: Handle 'response' of type CompanySearchResult
} catch (err) {
  // TODO: Handle 'err' of type SupplementalEndpoints.SearchCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supplementalEndpoints.searchCompanies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySearchResult
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
| <code>id?</code> | <code>string[]</code> | String Array. Filter by unique company identifiers. Multiple values create an OR filter. |
| <code>symbol?</code> | <code>string[]</code> | String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values create an OR filter. |
| <code>symbolIsin?</code> | <code>string[]</code> | String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than the company-level ISIN. Multiple values create an OR filter. |
| <code>domain?</code> | <code>string[]</code> | String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple values create an OR filter. |
| <code>country?</code> | <code>string[]</code> | String Array. Filter by company headquarters country. Multiple values create an OR filter. |
| <code>exchange?</code> | <code>string[]</code> | String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple values create an OR filter. |
| <code>numEmployeesFrom?</code> | <code>number</code> | Integer. Filter for companies with at least this many employees. |
| <code>numEmployeesTo?</code> | <code>number</code> | Integer. Filter for companies with no more than this many employees. |
| <code>ipoFrom?</code> | <code>Date</code> (date-time) | Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g., 2023-01-01T00:00:00) or yyyy-mm-dd format. |
| <code>ipoTo?</code> | <code>Date</code> (date-time) | Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g., 2023-12-31T23:59:59) or yyyy-mm-dd format. |
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering companies across name, alternative names, domains, and ticker symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>name?</code> | <code>string</code> | String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>industry?</code> | <code>string</code> | String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>sector?</code> | <code>string</code> | String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>size?</code> | <code>number</code> | Integer. The number of companies to return per page in the paginated response. |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supplementalEndpoints.searchCompanies(request)`

- **OnSuccess**: <code>[CompanySearchResult](src/models/company-search-result.ts)</code>
- **OnError**: throws <code>[SupplementalEndpoints.SearchCompaniesError](src/resources/supplemental-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supplementalEndpoints.searchCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySearchResult, SupplementalEndpoints.SearchCompaniesError&gt;</code>, with `result.value` of type <code>[CompanySearchResult](src/models/company-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchJournalists(request?: SupplementalEndpoints.SearchJournalistsRequest, options?: RequestOptions): ApiPromise&lt;JournalistSearchResult, SupplementalEndpoints.SearchJournalistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search journalists using broad search attributes. Our database contains over 230,000 journalists from around the world and is refreshed frequently.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supplementalEndpoints.searchJournalists();
  // TODO: Handle 'response' of type JournalistSearchResult
} catch (err) {
  // TODO: Handle 'err' of type SupplementalEndpoints.SearchJournalistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supplementalEndpoints.searchJournalists().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JournalistSearchResult
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
| <code>id?</code> | <code>string[]</code> | String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find journalists matching any of the specified IDs. |
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering journalists based on their name, title, and Twitter bio. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>name?</code> | <code>string</code> | String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>twitter?</code> | <code>string</code> | String. Filter journalists by their exact Twitter handle, without the @ symbol. |
| <code>sortBy?</code> | <code>[JournalistsSortBy](src/models/journalists-sort-by.ts)</code> | String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or linkedinFollowers. When omitted, results are sorted by relevance. |
| <code>size?</code> | <code>number</code> | Integer. The number of journalists to return per page in the paginated response. |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>source?</code> | <code>string[]</code> | String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter. |
| <code>topic?</code> | <code>string[]</code> | String Array. Filter journalists by the top topics they cover. Topics are more specific themes that the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data field.) |
| <code>category?</code> | <code>string[]</code> | String Array. Filter journalists by the top categories they cover. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data field.) |
| <code>label?</code> | <code>string[]</code> | String Array. Filter journalists by the most common label tagged to the articles they publish. This accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.) |
| <code>minMonthlyPosts?</code> | <code>number</code> | Integer. Filter for journalists who publish at least this many articles per month. Used to identify more active journalists. |
| <code>maxMonthlyPosts?</code> | <code>number</code> | Integer. Filter for journalists who publish no more than this many articles per month. |
| <code>country?</code> | <code>string[]</code> | String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR filter. |
| <code>locationCountry?</code> | <code>string[]</code> | String Array. Filter journalists by their profile location country (`locations.country`). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). `uk` is accepted as an alias for `gb`. Distinct from `country`, which filters reporting focus (`topCountries`). Multiple values create an OR filter. |
| <code>locationState?</code> | <code>string[]</code> | String Array. Filter journalists by their profile location state or region (`locations.state`). For US locations this is the two-letter state code (e.g., NY, CA). Multiple values create an OR filter. |
| <code>locationCounty?</code> | <code>string[]</code> | String Array. Filter journalists by their profile location county (`locations.county`). County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values create an OR filter. |
| <code>locationCity?</code> | <code>string[]</code> | String Array. Filter journalists by their profile location city (`locations.city`). Multiple values create an OR filter. |
| <code>locationArea?</code> | <code>string[]</code> | String Array. Filter journalists by their profile location area — neighborhood, borough, or district (`locations.area`). Multiple values create an OR filter. |
| <code>updatedAtFrom?</code> | <code>Date</code> (date-time) | Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>updatedAtTo?</code> | <code>Date</code> (date-time) | Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format. |
| <code>showNumResults?</code> | <code>boolean</code> | Boolean. Controls whether to return the exact result count. When false (default), counts are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supplementalEndpoints.searchJournalists(request)`

- **OnSuccess**: <code>[JournalistSearchResult](src/models/journalist-search-result.ts)</code>
- **OnError**: throws <code>[SupplementalEndpoints.SearchJournalistsError](src/resources/supplemental-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supplementalEndpoints.searchJournalists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JournalistSearchResult, SupplementalEndpoints.SearchJournalistsError&gt;</code>, with `result.value` of type <code>[JournalistSearchResult](src/models/journalist-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPeople(request?: SupplementalEndpoints.SearchPeopleRequest, options?: RequestOptions): ApiPromise&lt;PeopleSearchResult, SupplementalEndpoints.SearchPeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and retrieve additional information on known persons that exist within Perigon's entity database and as referenced in any article response object. Our database contains over 650,000 people from around the world and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be used to lookup even more information on Wikidata's website.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supplementalEndpoints.searchPeople();
  // TODO: Handle 'response' of type PeopleSearchResult
} catch (err) {
  // TODO: Handle 'err' of type SupplementalEndpoints.SearchPeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supplementalEndpoints.searchPeople().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleSearchResult
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
| <code>name?</code> | <code>string</code> | String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>wikidataId?</code> | <code>string[]</code> | String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values create an OR filter. |
| <code>occupationId?</code> | <code>string[]</code> | String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR filter. |
| <code>occupationLabel?</code> | <code>string</code> | String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>size?</code> | <code>number</code> | Integer. The number of people to return per page in the paginated response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supplementalEndpoints.searchPeople(request)`

- **OnSuccess**: <code>[PeopleSearchResult](src/models/people-search-result.ts)</code>
- **OnError**: throws <code>[SupplementalEndpoints.SearchPeopleError](src/resources/supplemental-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supplementalEndpoints.searchPeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleSearchResult, SupplementalEndpoints.SearchPeopleError&gt;</code>, with `result.value` of type <code>[PeopleSearchResult](src/models/people-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSources(request?: SupplementalEndpoints.SearchSourcesRequest, options?: RequestOptions): ApiPromise&lt;SourceSearchResult, SupplementalEndpoints.SearchSourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of individual media sources that were matched to your specific criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supplementalEndpoints.searchSources();
  // TODO: Handle 'response' of type SourceSearchResult
} catch (err) {
  // TODO: Handle 'err' of type SupplementalEndpoints.SearchSourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supplementalEndpoints.searchSources().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceSearchResult
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
| <code>domain?</code> | <code>string[]</code> | String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter. |
| <code>name?</code> | <code>string</code> | String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>sourceGroup?</code> | <code>string</code> | String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources within the specified group. See documentation for available source groups. |
| <code>sortBy?</code> | <code>[SourcesSortBy](src/models/sources-sort-by.ts)</code> | String. Determines the source sorting order. Options include relevance (default, best match to query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count), and avgMonthlyPosts (by number of articles published monthly). |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>size?</code> | <code>number</code> | Integer. The number of sources to return per page in the paginated response. |
| <code>minMonthlyVisits?</code> | <code>number</code> | Integer. Filter for sources with at least this many monthly visitors. Used to target publishers by audience size. |
| <code>maxMonthlyVisits?</code> | <code>number</code> | Integer. Filter for sources with no more than this many monthly visitors. Used to target publishers by audience size. |
| <code>minMonthlyPosts?</code> | <code>number</code> | Integer. Filter for sources that publish at least this many articles per month. Used to target publishers by content volume. |
| <code>maxMonthlyPosts?</code> | <code>number</code> | Integer. Filter for sources that publish no more than this many articles per month. Used to target publishers by content volume. |
| <code>country?</code> | <code>string[]</code> | String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported country codes. Multiple values create an OR filter. |
| <code>sourceCountry?</code> | <code>string[]</code> | String Array. Filter for local publications based in specific countries. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported country codes. Multiple values create an OR filter. |
| <code>sourceState?</code> | <code>string[]</code> | String Array. Filter for local publications based in specific states or regions. Uses standard two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes. Multiple values create an OR filter. |
| <code>sourceCounty?</code> | <code>string[]</code> | String Array. Filter for local publications based in specific counties. Multiple values create an OR filter. |
| <code>sourceCity?</code> | <code>string[]</code> | String Array. Filter for local publications based in specific cities. Multiple values create an OR filter. |
| <code>sourceLat?</code> | <code>number</code> | Float. Latitude coordinate for filtering local publications by geographic proximity. Used with sourceLon and sourceMaxDistance for radius search. |
| <code>sourceLon?</code> | <code>number</code> | Float. Longitude coordinate for filtering local publications by geographic proximity. Used with sourceLat and sourceMaxDistance for radius search. |
| <code>sourceMaxDistance?</code> | <code>number</code> | Float. Maximum distance in kilometers from the coordinates defined by sourceLat and sourceLon. Defines the radius for local publication searches. |
| <code>category?</code> | <code>string[]</code> | String Array. Filter sources by their primary content categories such as Politics, Tech, Sports, Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR filter. |
| <code>topic?</code> | <code>string[]</code> | String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency, Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple values create an OR filter. |
| <code>label?</code> | <code>string[]</code> | String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news). Returns sources where the specified label is common in their published content. See documentation for all available labels. Multiple values create an OR filter. |
| <code>paywall?</code> | <code>boolean</code> | Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find sources without paywalls. |
| <code>showSubdomains?</code> | <code>boolean</code> | Boolean. Controls whether subdomains are included as separate results. When true (default), subdomains appear as distinct sources. When false, results are consolidated to parent domains only. |
| <code>showNumResults?</code> | <code>boolean</code> | Boolean. Controls whether to return the exact result count. When false (default), counts are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supplementalEndpoints.searchSources(request)`

- **OnSuccess**: <code>[SourceSearchResult](src/models/source-search-result.ts)</code>
- **OnError**: throws <code>[SupplementalEndpoints.SearchSourcesError](src/resources/supplemental-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supplementalEndpoints.searchSources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceSearchResult, SupplementalEndpoints.SearchSourcesError&gt;</code>, with `result.value` of type <code>[SourceSearchResult](src/models/source-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTopics(request?: SupplementalEndpoints.SearchTopicsRequest, options?: RequestOptions): ApiPromise&lt;TopicSearchResult, SupplementalEndpoints.SearchTopicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search through all available Topics that exist within the Perigon Database.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supplementalEndpoints.searchTopics();
  // TODO: Handle 'response' of type TopicSearchResult
} catch (err) {
  // TODO: Handle 'err' of type SupplementalEndpoints.SearchTopicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supplementalEndpoints.searchTopics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TopicSearchResult
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
| <code>name?</code> | <code>string</code> | String. Search for topics by exact name or partial text match. Does not support wildcards. Examples include Markets, Cryptocurrency, Climate Change, etc. |
| <code>category?</code> | <code>string</code> | String. Filter topics by broad article categories such as Politics, Tech, Sports, Business, Finance, Entertainment, etc. |
| <code>subcategory?</code> | <code>string</code> | String. Filter topics by their specific subcategory. Subcategories provide more granular classification beyond the main category, such as TV or Event. |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>size?</code> | <code>number</code> | Integer. The number of topics to return per page in the paginated response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supplementalEndpoints.searchTopics(request)`

- **OnSuccess**: <code>[TopicSearchResult](src/models/topic-search-result.ts)</code>
- **OnError**: throws <code>[SupplementalEndpoints.SearchTopicsError](src/resources/supplemental-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supplementalEndpoints.searchTopics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TopicSearchResult, SupplementalEndpoints.SearchTopicsError&gt;</code>, with `result.value` of type <code>[TopicSearchResult](src/models/topic-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Utilities

> Source: [Utilities](src/resources/utilities.ts)

<details>
<summary><code>getLimits(request?: Utilities.GetLimitsRequest, options?: RequestOptions): ApiPromise&lt;LimitsResult, Utilities.GetLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's current API usage and the limits that apply to it: the number of requests made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.

Optionally, pass one or more API keys via the `apiKeys` parameter to check their status. For each supplied key the response reports whether it is `valid` (exists and belongs to your account), `enabled` (a disabled key is 'off'), and whether its `subscription` is active.

This endpoint is authenticated with your API key but is quota-exempt: calling it does **not** count against your monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and external dashboards that need to check whether an API key and subscription are active without consuming usage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.utilities.getLimits();
  // TODO: Handle 'response' of type LimitsResult
} catch (err) {
  // TODO: Handle 'err' of type Utilities.GetLimitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.utilities.getLimits().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LimitsResult
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
| <code>apiKeys?</code> | <code>string[]</code> | Optional list of API keys whose validity and status should be checked. Each key is reported as valid only if it exists and belongs to your account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.utilities.getLimits(request)`

- **OnSuccess**: <code>[LimitsResult](src/models/limits-result.ts)</code>
- **OnError**: throws <code>[Utilities.GetLimitsError](src/resources/utilities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.utilities.getLimits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LimitsResult, Utilities.GetLimitsError&gt;</code>, with `result.value` of type <code>[LimitsResult](src/models/limits-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlists

> Source: [Watchlists](src/resources/watchlists.ts)

<details>
<summary><code>createWatchlist(request: Watchlists.CreateWatchlistRequest, options?: RequestOptions): ApiPromise&lt;WatchlistResult, Watchlists.CreateWatchlistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100 combined people and companies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlists.createWatchlist({
    body: { name: "some example string", people: [{}], companies: [{}] },
  });
  // TODO: Handle 'response' of type WatchlistResult
} catch (err) {
  // TODO: Handle 'err' of type Watchlists.CreateWatchlistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlists
  .createWatchlist({ body: { name: "some example string", people: [{}], companies: [{}] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistResult
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
| <code>body</code> | <code>[CreateWatchlistParams](src/models/create-watchlist-params.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlists.createWatchlist(request)`

- **OnSuccess**: <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: throws <code>[Watchlists.CreateWatchlistError](src/resources/watchlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlists.createWatchlist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistResult, Watchlists.CreateWatchlistError&gt;</code>, with `result.value` of type <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWatchlist(request: Watchlists.DeleteWatchlistRequest, options?: RequestOptions): ApiPromise&lt;WatchlistResult, Watchlists.DeleteWatchlistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it is attached to active monitors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlists.deleteWatchlist({ id: 1 });
  // TODO: Handle 'response' of type WatchlistResult
} catch (err) {
  // TODO: Handle 'err' of type Watchlists.DeleteWatchlistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlists.deleteWatchlist({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistResult
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
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlists.deleteWatchlist(request)`

- **OnSuccess**: <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: throws <code>[Watchlists.DeleteWatchlistError](src/resources/watchlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlists.deleteWatchlist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistResult, Watchlists.DeleteWatchlistError&gt;</code>, with `result.value` of type <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWatchlist(request: Watchlists.GetWatchlistRequest, options?: RequestOptions): ApiPromise&lt;WatchlistResult, Watchlists.GetWatchlistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlists.getWatchlist({ id: 1 });
  // TODO: Handle 'response' of type WatchlistResult
} catch (err) {
  // TODO: Handle 'err' of type Watchlists.GetWatchlistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlists.getWatchlist({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistResult
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
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlists.getWatchlist(request)`

- **OnSuccess**: <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: throws <code>[Watchlists.GetWatchlistError](src/resources/watchlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlists.getWatchlist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistResult, Watchlists.GetWatchlistError&gt;</code>, with `result.value` of type <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWatchlists(request: Watchlists.ListWatchlistsRequest, options?: RequestOptions): ApiPromise&lt;WatchlistListResult, Watchlists.ListWatchlistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List watchlists owned by the organization associated with the API key, as well as publicly visible watchlists. Supports filtering by name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlists.listWatchlists({
    sortBy: WatchlistSortBy.Id,
    sortOrder: SortOrder.Asc,
  });
  // TODO: Handle 'response' of type WatchlistListResult
} catch (err) {
  // TODO: Handle 'err' of type Watchlists.ListWatchlistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlists
  .listWatchlists({ sortBy: WatchlistSortBy.Id, sortOrder: SortOrder.Asc })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistListResult
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
| <code>sortBy</code> | <code>[WatchlistSortBy](src/models/watchlist-sort-by.ts)</code> | - |
| <code>sortOrder</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>name?</code> | <code>string</code> | Filter watchlists by name (case-insensitive, partial match) |
| <code>page?</code> | <code>number</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: 10 |
| <code>nulls?</code> | <code>[Nulls](src/models/nulls.ts)</code> | Placement of null values in sorted results. Accepts first or last. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlists.listWatchlists(request)`

- **OnSuccess**: <code>[WatchlistListResult](src/models/watchlist-list-result.ts)</code>
- **OnError**: throws <code>[Watchlists.ListWatchlistsError](src/resources/watchlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlists.listWatchlists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistListResult, Watchlists.ListWatchlistsError&gt;</code>, with `result.value` of type <code>[WatchlistListResult](src/models/watchlist-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resolveWatchlists(request?: Watchlists.ResolveWatchlistsRequest, options?: RequestOptions): ApiPromise&lt;WatchlistResolveResult, Watchlists.ResolveWatchlistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists, otherwise falls back to the matching public watchlist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlists.resolveWatchlists();
  // TODO: Handle 'response' of type WatchlistResolveResult
} catch (err) {
  // TODO: Handle 'err' of type Watchlists.ResolveWatchlistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlists.resolveWatchlists().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistResolveResult
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
| <code>name?</code> | <code>string[]</code> | Watchlist names to resolve (max 100) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlists.resolveWatchlists(request)`

- **OnSuccess**: <code>[WatchlistResolveResult](src/models/watchlist-resolve-result.ts)</code>
- **OnError**: throws <code>[Watchlists.ResolveWatchlistsError](src/resources/watchlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlists.resolveWatchlists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistResolveResult, Watchlists.ResolveWatchlistsError&gt;</code>, with `result.value` of type <code>[WatchlistResolveResult](src/models/watchlist-resolve-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWatchlist(request: Watchlists.UpdateWatchlistRequest, options?: RequestOptions): ApiPromise&lt;WatchlistResult, Watchlists.UpdateWatchlistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a watchlist owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlists.updateWatchlist({ id: 1, body: {} });
  // TODO: Handle 'response' of type WatchlistResult
} catch (err) {
  // TODO: Handle 'err' of type Watchlists.UpdateWatchlistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlists.updateWatchlist({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistResult
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
| <code>id</code> | <code>number</code> | - |
| <code>body</code> | <code>[UpdateWatchlistParams](src/models/update-watchlist-params.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlists.updateWatchlist(request)`

- **OnSuccess**: <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: throws <code>[Watchlists.UpdateWatchlistError](src/resources/watchlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlists.updateWatchlist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistResult, Watchlists.UpdateWatchlistError&gt;</code>, with `result.value` of type <code>[WatchlistResult](src/models/watchlist-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Wikipedia

> Source: [Wikipedia](src/resources/wikipedia.ts)

<details>
<summary><code>searchWikipedia(request?: Wikipedia.SearchWikipediaRequest, options?: RequestOptions): ApiPromise&lt;WikipediaSearchResult, Wikipedia.SearchWikipediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual pages that were matched to your specific criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wikipedia.searchWikipedia();
  // TODO: Handle 'response' of type WikipediaSearchResult
} catch (err) {
  // TODO: Handle 'err' of type Wikipedia.SearchWikipediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wikipedia.searchWikipedia().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WikipediaSearchResult
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
| <code>q?</code> | <code>string</code> | String. Primary search query for filtering pages based on their title, summary, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching. |
| <code>title?</code> | <code>string</code> | String. Search specifically within page titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations. |
| <code>summary?</code> | <code>string</code> | String. Search specifically within page summary. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations. |
| <code>text?</code> | <code>string</code> | String. Search specifically within the page's content (across all sections). Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations. |
| <code>reference?</code> | <code>string</code> | String. Search specifically across page's references. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations. |
| <code>id?</code> | <code>string[]</code> | String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided to return a collection of specific pages. |
| <code>wikiPageId?</code> | <code>number[]</code> | Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only in a combination with `wikiCode` parameter. Multiple IDs can be provided to return a collection of specific pages. |
| <code>wikiRevisionId?</code> | <code>number[]</code> | Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are unique only in a combination with `wikiCode` parameter. Multiple IDs can be provided to return a collection of specific pages. This ID changes each time a page is edited. |
| <code>wikiCode?</code> | <code>string[]</code> | String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted value is `enwiki`. |
| <code>wikiNamespace?</code> | <code>number[]</code> | Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main namespace (0) is available. |
| <code>wikidataId?</code> | <code>string[]</code> | String Array. Retrieve pages by the ids corresponding to their Wikidata entities. |
| <code>wikidataInstanceOfId?</code> | <code>string[]</code> | String Array. Retrieve all pages whose Wikidata entities are instances of these provided ids. |
| <code>wikidataInstanceOfLabel?</code> | <code>string[]</code> | String Array. Retrieve all pages whose Wikidata entities are instances of these ids (provided as labels). |
| <code>category?</code> | <code>string[]</code> | String Array. Retrieve all pages for specified categories. |
| <code>sectionId?</code> | <code>string[]</code> | String Array. Retrieve pages containing provided section ids. Each section ID is unique. |
| <code>wikiRevisionFrom?</code> | <code>Date</code> (date-time) | Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>wikiRevisionTo?</code> | <code>Date</code> (date-time) | Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>scrapedAtFrom?</code> | <code>Date</code> (date-time) | Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>scrapedAtTo?</code> | <code>Date</code> (date-time) | Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format. |
| <code>pageviewsFrom?</code> | <code>number</code> | Integer. Retrieve pages with the average number of views per day higher than the provided value. |
| <code>pageviewsTo?</code> | <code>number</code> | Integer. Retrieve pages with the average number of views per day lower than the provided value. |
| <code>withPageviews?</code> | <code>boolean</code> | Boolean. Retrieve pages that have any viewership statistics available for them. If `false` (the default) - return all pages. |
| <code>showNumResults?</code> | <code>boolean</code> | Boolean. Whether to show the total number of all matched pages. Default value is false which makes queries a bit more efficient but also counts up to 10000 pages. |
| <code>page?</code> | <code>number</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0. |
| <code>size?</code> | <code>number</code> | Integer. The number of articles to return per page in the paginated response. |
| <code>sortBy?</code> | <code>[SortByPerigonWikipediaApi](src/models/sort-by-perigon-wikipedia-api.ts)</code> | String. Determines the Wikipedia page sorting order. Options include relevance (default), revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first), scrapedAtAsc (recently scraped last). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wikipedia.searchWikipedia(request)`

- **OnSuccess**: <code>[WikipediaSearchResult](src/models/wikipedia-search-result.ts)</code>
- **OnError**: throws <code>[Wikipedia.SearchWikipediaError](src/resources/wikipedia.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wikipedia.searchWikipedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WikipediaSearchResult, Wikipedia.SearchWikipediaError&gt;</code>, with `result.value` of type <code>[WikipediaSearchResult](src/models/wikipedia-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vectorSearchWikipedia(request: Wikipedia.VectorSearchWikipediaRequest, options?: RequestOptions): ApiPromise&lt;WikipediaVectorSearchResult, Wikipedia.VectorSearchWikipediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list of page sections most closely matched to your query intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wikipedia.vectorSearchWikipedia({ body: { prompt: "some example string" } });
  // TODO: Handle 'response' of type WikipediaVectorSearchResult
} catch (err) {
  // TODO: Handle 'err' of type Wikipedia.VectorSearchWikipediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wikipedia
  .vectorSearchWikipedia({ body: { prompt: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WikipediaVectorSearchResult
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
| <code>body</code> | <code>[WikipediaSearchParams](src/models/wikipedia-search-params.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wikipedia.vectorSearchWikipedia(request)`

- **OnSuccess**: <code>[WikipediaVectorSearchResult](src/models/wikipedia-vector-search-result.ts)</code>
- **OnError**: throws <code>[Wikipedia.VectorSearchWikipediaError](src/resources/wikipedia.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wikipedia.vectorSearchWikipedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WikipediaVectorSearchResult, Wikipedia.VectorSearchWikipediaError&gt;</code>, with `result.value` of type <code>[WikipediaVectorSearchResult](src/models/wikipedia-vector-search-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PerigonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

