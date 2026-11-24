# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [PerigonClient](perigon/client.py)

## AiAdvancedSearch

> Source: [AiAdvancedSearch](perigon/apis/ai_advanced_search.py)

<details>
<summary><code>def search_summarizer(body: SummaryBody | SummaryBodyDict, *, q: str | None = None, title: str | None = None, desc: str | None = None, content: str | None = None, summary: str | None = None, url: str | None = None, article_id: list[str] | None = None, cluster_id: list[str] | None = None, sort_by: AllEndpointSortByOrStr | None = None, page: int | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, add_date_from: RFC3339DateTime | None = None, add_date_to: RFC3339DateTime | None = None, refresh_date_from: RFC3339DateTime | None = None, refresh_date_to: RFC3339DateTime | None = None, medium: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, exclude_source_group: list[str] | None = None, exclude_source: list[str] | None = None, watchlist: list[str] | None = None, exclude_watchlist: list[str] | None = None, paywall: bool | None = None, byline: list[str] | None = None, author: list[str] | None = None, exclude_author: list[str] | None = None, journalist_id: list[str] | None = None, exclude_journalist_id: list[str] | None = None, language: list[str] | None = None, exclude_language: list[str] | None = None, search_translation: bool | None = None, label: list[str] | None = None, exclude_label: list[str] | None = None, category: list[str] | None = None, exclude_category: list[str] | None = None, topic: list[str] | None = None, exclude_topic: list[str] | None = None, link_to: str | None = None, show_reprints: bool | None = None, reprint_group_id: str | None = None, city: list[str] | None = None, exclude_city: list[str] | None = None, area: list[str] | None = None, state: list[str] | None = None, exclude_state: list[str] | None = None, county: list[str] | None = None, exclude_county: list[str] | None = None, locations_country: list[str] | None = None, country: list[str] | None = None, exclude_locations_country: list[str] | None = None, location: list[str] | None = None, lat: float | None = None, lon: float | None = None, max_distance: float | None = None, source_city: list[str] | None = None, exclude_source_city: list[str] | None = None, source_county: list[str] | None = None, exclude_source_county: list[str] | None = None, source_country: list[str] | None = None, exclude_source_country: list[str] | None = None, source_state: list[str] | None = None, exclude_source_state: list[str] | None = None, source_lat: float | None = None, source_lon: float | None = None, source_max_distance: float | None = None, person_wikidata_id: list[str] | None = None, exclude_person_wikidata_id: list[str] | None = None, person_name: list[str] | None = None, exclude_person_name: list[str] | None = None, company_id: list[str] | None = None, exclude_company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, exclude_company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, exclude_company_isin: list[str] | None = None, exclude_company_symbol_isin: list[str] | None = None, exclude_company_symbol: list[str] | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, taxonomy: list[str] | None = None, prefix_taxonomy: str | None = None, show_highlighting: bool | None = None, highlight_fragment_size: int | None = None, highlight_num_fragments: int | None = None, highlight_pre_tag: str | None = None, highlight_post_tag: str | None = None, highlight_q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarySearchResult, SearchSummarizerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting options are ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ai_advanced_search.with_raw_response.search_summarizer(SummaryBody())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchSummarizerErrorBody
```

**Async**

```python
result = await async_client.ai_advanced_search.with_raw_response.search_summarizer(SummaryBody())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchSummarizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SummaryBody](perigon/models/summary_body.py) \| [SummaryBodyDict](perigon/models/summary_body.py)</code> | The request body. |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering articles based on their title, description, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>title</code> | <code>str \| None</code> | String. Search specifically within article headlines/titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.<br>**Default**: <code>None</code> |
| <code>desc</code> | <code>str \| None</code> | String. Search within article description fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching.<br>**Default**: <code>None</code> |
| <code>content</code> | <code>str \| None</code> | String. Search within the full article body content. Supports Boolean logic, exact phrase matching with quotes, and wildcards for comprehensive content searching.<br>**Default**: <code>None</code> |
| <code>summary</code> | <code>str \| None</code> | String. Search within article summary fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying certain website sections, e.g. source=cnn.com&url=travel.<br>**Default**: <code>None</code> |
| <code>article_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs can be provided to return a collection of specific articles.<br>**Default**: <code>None</code> |
| <code>cluster_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter results to only show content within a specific related content cluster. Returns articles grouped together as part of Perigon Stories based on topic relevance.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[AllEndpointSortByOrStr](perigon/models/enums/all_endpoint_sort_by.py) \| None</code> | String. Determines the article sorting order. Options include relevance (default), date/pubDate (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in system first, often identical to addDate).<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>add_date_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>add_date_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>refresh_date_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles refreshed/updated in Perigon's system after this date. In most cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>refresh_date_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles refreshed/updated in Perigon's system before this date. In most cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>medium</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by their primary medium type. Accepts Article for written content or Video for video-based stories. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_group</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100, top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.<br>**Default**: <code>None</code> |
| <code>exclude_source_group</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles from specified Perigon source groups. Multiple values create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g., top10, top100).<br>**Default**: <code>None</code> |
| <code>exclude_source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles using watchlists of people and companies. Multiple values create an OR filter to include articles mentioning any entity from the specified watchlists.<br>**Default**: <code>None</code> |
| <code>exclude_watchlist</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning entities from specified watchlists. Multiple values create an AND-exclude filter, removing content mentioning any entity from the specified watchlists.<br>**Default**: <code>None</code> |
| <code>paywall</code> | <code>bool \| None</code> | Boolean. Filter to show only results where the source has a paywall (true) or does not have a paywall (false).<br>**Default**: <code>None</code> |
| <code>byline</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by author bylines. Works as an exact match for each author name provided. Multiple values create an OR filter to find articles by any of the specified authors.<br>**Default**: <code>None</code> |
| <code>author</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by specific author names. Works as an exact match for each name. Multiple values create an OR filter to find articles by any of the specified authors.<br>**Default**: <code>None</code> |
| <code>exclude_author</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles written by specific authors. Any article with an author name matching an entry in this list will be omitted from results. Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>journalist_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by unique journalist identifiers which can be found through the Journalist API or in the matchedAuthors field. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_journalist_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles written by specific journalists identified by their unique IDs. Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_language</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles in specific languages using ISO-639 two-letter codes. Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>search_translation</code> | <code>bool \| None</code> | Boolean. Expand search to include translated content fields for non-English articles. When true, searches translated title, description, and content fields.<br>**Default**: <code>None</code> |
| <code>label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles with specific editorial labels. Multiple values create an AND-exclude filter, removing all content with any of these labels.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by categories. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. Use 'none' to search uncategorized articles.<br>**Default**: <code>None</code> |
| <code>exclude_category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles with specific categories. Multiple values create an AND-exclude filter, removing all content with any of these categories.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and articles can have multiple topics. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles with specific topics. Multiple values create an AND-exclude filter, removing all content with any of these topics.<br>**Default**: <code>None</code> |
| <code>link_to</code> | <code>str \| None</code> | String. Returns only articles that contain links to the specified URL pattern. Matches against the 'links' field in article responses.<br>**Default**: <code>None</code> |
| <code>show_reprints</code> | <code>bool \| None</code> | Boolean. Controls whether to include reprinted content in results. When true (default), shows syndicated articles from wire services like AP or Reuters that appear on multiple sites.<br>**Default**: <code>None</code> |
| <code>reprint_group_id</code> | <code>str \| None</code> | String. Returns all articles in a specific reprint group, including the original article and all its known reprints. Use when you want to see all versions of the same content.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified city plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the urban area in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>exclude_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of cities to exclude from the results. Articles that are associated with any of the specified cities will be filtered out.<br>**Default**: <code>None</code> |
| <code>area</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified area, such as a neighborhood, borough, or district, plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the area in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified state plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the state in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>exclude_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of states to exclude. Articles that include, or are associated with, any of the states provided here will be filtered out. This is especially useful if you want to ignore news tied to certain geographical areas (e.g., US states).<br>**Default**: <code>None</code> |
| <code>county</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of counties to include (or specify) in the search results. This field filters the returned articles based on the county associated with the event or news. Only articles tagged with one of these counties will be included.<br>**Default**: <code>None</code> |
| <code>exclude_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles from specific counties or administrative divisions in the search results. Accepts either a single county name or a list of county names. County names should match the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows for more granular geographic filter<br>**Default**: <code>None</code> |
| <code>locations_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified country plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>exclude_locations_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles where a specified country plays a central role in the content, ensuring results are not deeply relevant to the country in question. If multiple parameters are passed, they will be applied as AND operations, excluding articles relevant to any of the specified countries.<br>**Default**: <code>None</code> |
| <code>location</code> | <code>list&#91;str&#93; \| None</code> | String Array. Return all articles that have the specified location. Location attributes are delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | Float. Latitude of the center point to search places<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Float. Longitude of the center point to search places<br>**Default**: <code>None</code> |
| <code>max_distance</code> | <code>float \| None</code> | Float. Maximum distance (in km) from starting point to search articles by tagged places<br>**Default**: <code>None</code> |
| <code>source_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given city.<br>**Default**: <code>None</code> |
| <code>exclude_source_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified cities.<br>**Default**: <code>None</code> |
| <code>source_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given county.<br>**Default**: <code>None</code> |
| <code>exclude_source_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified counties.<br>**Default**: <code>None</code> |
| <code>source_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given country. Must be 2 character country code (i.e. us, gb, etc).<br>**Default**: <code>None</code> |
| <code>exclude_source_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified countries. Must be 2 character country codes (e.g., us, gb).<br>**Default**: <code>None</code> |
| <code>source_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given state.<br>**Default**: <code>None</code> |
| <code>exclude_source_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified states.<br>**Default**: <code>None</code> |
| <code>source_lat</code> | <code>float \| None</code> | Float. Latitude of the center point to search articles created by local publications.<br>**Default**: <code>None</code> |
| <code>source_lon</code> | <code>float \| None</code> | Float. Longitude of the center point to search articles created by local publications.<br>**Default**: <code>None</code> |
| <code>source_max_distance</code> | <code>float \| None</code> | Float. Maximum distance from starting point to search articles created by local publications.<br>**Default**: <code>None</code> |
| <code>person_wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people endpoint for a complete list of tracked individuals.<br>**Default**: <code>None</code> |
| <code>exclude_person_wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning people with specific Wikidata IDs. Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to avoid name ambiguity.<br>**Default**: <code>None</code> |
| <code>person_name</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by exact person name matches. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_person_name</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning specific people by name. Creates an AND-exclude filter to remove content about these individuals.<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company identifiers. For a complete list of tracked companies, refer to the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning companies with specific identifiers. Creates an AND-exclude filter to remove content about these corporate entities.<br>**Default**: <code>None</code> |
| <code>company_name</code> | <code>str \| None</code> | String. Filter articles by company name mentions. Performs an exact match on company names.<br>**Default**: <code>None</code> |
| <code>company_domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company domains (e.g., apple.com). For available company entities, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles related to companies with specific domains. Creates an AND-exclude filter to remove content about these companies.<br>**Default**: <code>None</code> |
| <code>company_symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company stock symbols. For available company entities and their symbols, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company ISIN codes (International Securities Identification Numbers). For available company entities and their ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles related to companies with specific ISIN codes. Creates an AND-exclude filter to remove content about these companies. For available company entities and their ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles related to companies whose ticker listings have these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of stock symbols (ticker symbols) that identify companies to be excluded. Articles related to companies using any of these symbols will be omitted, which is useful for targeting or avoiding specific public companies.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_from</code> | <code>float \| None</code> | Float. Filter articles with a positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_to</code> | <code>float \| None</code> | Float. Filter articles with a positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_from</code> | <code>float \| None</code> | Float. Filter articles with a neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_to</code> | <code>float \| None</code> | Float. Filter articles with a neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_from</code> | <code>float \| None</code> | Float. Filter articles with a negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_to</code> | <code>float \| None</code> | Float. Filter articles with a negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>taxonomy</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters by Google Content Categories. This field will accept 1 or more categories, must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other, /Finance/Investing/Funds. [Full list](https://docs.cloud.google.com/natural-language/docs/categories#version_2)<br>**Default**: <code>None</code> |
| <code>prefix_taxonomy</code> | <code>str \| None</code> | String. Filters by Google Content Categories. This field will filter by the category prefix only. Example: prefixTaxonomy=/Finance<br>**Default**: <code>None</code> |
| <code>show_highlighting</code> | <code>bool \| None</code> | Boolean. When set to true, enables text highlighting in search results.<br>**Default**: <code>None</code> |
| <code>highlight_fragment_size</code> | <code>int \| None</code> | Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_num_fragments</code> | <code>int \| None</code> | Integer. Controls the maximum number of highlighted fragments to return per field.<br>**Default**: <code>None</code> |
| <code>highlight_pre_tag</code> | <code>str \| None</code> | String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_post_tag</code> | <code>str \| None</code> | String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_q</code> | <code>str \| None</code> | String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SummarySearchResult](perigon/models/summary_search_result.py), [SearchSummarizerErrorBody](perigon/errors/search_summarizer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarySearchResult](perigon/models/summary_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchSummarizerErrorBody](perigon/errors/search_summarizer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContactPoints

> Source: [ContactPoints](perigon/apis/contact_points.py)

<details>
<summary><code>def create_contact_point(body: ContactPointRequestBody | ContactPointRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactPointResult, CreateContactPointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points can be created via the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contact_points.with_raw_response.create_contact_point(
    ContactPointRequestBody(type_=Type1.EMAIL, name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContactPointErrorBody
```

**Async**

```python
result = await async_client.contact_points.with_raw_response.create_contact_point(
    ContactPointRequestBody(type_=Type1.EMAIL, name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContactPointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactPointRequestBody](perigon/models/contact_point_request_body.py) \| [ContactPointRequestBodyDict](perigon/models/contact_point_request_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ContactPointResult](perigon/models/contact_point_result.py), [CreateContactPointErrorBody](perigon/errors/create_contact_point_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactPointResult](perigon/models/contact_point_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[CreateContactPointErrorBody](perigon/errors/create_contact_point_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_contact_point(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactPointResult, DeleteContactPointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a contact point owned by the organization associated with the API key. Contact points with historical notifications are archived rather than hard-deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contact_points.with_raw_response.delete_contact_point(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContactPointErrorBody
```

**Async**

```python
result = await async_client.contact_points.with_raw_response.delete_contact_point(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContactPointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ContactPointResult](perigon/models/contact_point_result.py), [DeleteContactPointErrorBody](perigon/errors/delete_contact_point_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactPointResult](perigon/models/contact_point_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[DeleteContactPointErrorBody](perigon/errors/delete_contact_point_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_point(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactPointResult, GetContactPointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the API key. FASTN contact points are not accessible via this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contact_points.with_raw_response.get_contact_point(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContactPointErrorBody
```

**Async**

```python
result = await async_client.contact_points.with_raw_response.get_contact_point(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContactPointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ContactPointResult](perigon/models/contact_point_result.py), [GetContactPointErrorBody](perigon/errors/get_contact_point_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactPointResult](perigon/models/contact_point_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetContactPointErrorBody](perigon/errors/get_contact_point_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contact_points(sort_by: ContactPointSortByOrStr, sort_order: SortOrderOrStr, *, status: list[Status1OrStr] | None = None, type_: list[Type1OrStr] | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactPointListResult, ListContactPointsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List contact points owned by the organization associated with the API key. Supports filtering by status and type. FASTN contact points are excluded from results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contact_points.with_raw_response.list_contact_points(ContactPointSortBy.CREATED_AT, SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContactPointsErrorBody
```

**Async**

```python
result = await async_client.contact_points.with_raw_response.list_contact_points(
    ContactPointSortBy.CREATED_AT, SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContactPointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>[ContactPointSortByOrStr](perigon/models/enums/contact_point_sort_by.py)</code> | Value sent with the request. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>status</code> | <code>list&#91;[Status1OrStr](perigon/models/enums/status1.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>list&#91;[Type1OrStr](perigon/models/enums/type1.py)&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ContactPointListResult](perigon/models/contact_point_list_result.py), [ListContactPointsErrorBody](perigon/errors/list_contact_points_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactPointListResult](perigon/models/contact_point_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListContactPointsErrorBody](perigon/errors/list_contact_points_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact_point(uuid: UUID, body: ContactPointUpdateBody | ContactPointUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactPointResult, UpdateContactPointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a contact point owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contact_points.with_raw_response.update_contact_point(
    UUID("00000000-0000-0000-0000-000000000000"), ContactPointUpdateBody()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactPointErrorBody
```

**Async**

```python
result = await async_client.contact_points.with_raw_response.update_contact_point(
    UUID("00000000-0000-0000-0000-000000000000"), ContactPointUpdateBody()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactPointResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactPointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ContactPointUpdateBody](perigon/models/contact_point_update_body.py) \| [ContactPointUpdateBodyDict](perigon/models/contact_point_update_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ContactPointResult](perigon/models/contact_point_result.py), [UpdateContactPointErrorBody](perigon/errors/update_contact_point_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactPointResult](perigon/models/contact_point_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[UpdateContactPointErrorBody](perigon/errors/update_contact_point_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Monitors

> Source: [Monitors](perigon/apis/monitors.py)

<details>
<summary><code>def activate_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResult, ActivateMonitorApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a monitor, starting its processing pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.activate_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateMonitorApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.activate_monitor_api(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateMonitorApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor to activate. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorResult](perigon/models/monitor_result.py), [ActivateMonitorApiErrorBody](perigon/errors/activate_monitor_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResult](perigon/models/monitor_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ActivateMonitorApiErrorBody](perigon/errors/activate_monitor_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResult, ArchiveMonitorApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a monitor. Archived monitors are excluded from list results by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.archive_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveMonitorApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.archive_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveMonitorApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor to archive. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorResult](perigon/models/monitor_result.py), [ArchiveMonitorApiErrorBody](perigon/errors/archive_monitor_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResult](perigon/models/monitor_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ArchiveMonitorApiErrorBody](perigon/errors/archive_monitor_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_monitor_api(body: SignalApiCreateBody | SignalApiCreateBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResult, CreateMonitorApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.create_monitor_api(
    SignalApiCreateBody(
        name="some example string",
        classification_type=ClassificationType2.EVENT,
        monitoring_objective="some example string",
        data_schema=SignalMonitoringPlanDataSchema(schema_value={"key": SignalMonitoringPlanDataSchemaProperty()}),
        query=ComplexAllEndpointQuery(),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMonitorApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.create_monitor_api(
    SignalApiCreateBody(
        name="some example string",
        classification_type=ClassificationType2.EVENT,
        monitoring_objective="some example string",
        data_schema=SignalMonitoringPlanDataSchema(schema_value={"key": SignalMonitoringPlanDataSchemaProperty()}),
        query=ComplexAllEndpointQuery(),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMonitorApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SignalApiCreateBody](perigon/models/signal_api_create_body.py) \| [SignalApiCreateBodyDict](perigon/models/signal_api_create_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorResult](perigon/models/monitor_result.py), [CreateMonitorApiErrorBody](perigon/errors/create_monitor_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResult](perigon/models/monitor_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[CreateMonitorApiErrorBody](perigon/errors/create_monitor_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResult, GetMonitorApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a monitor by UUID for the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.get_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMonitorApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.get_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMonitorApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorResult](perigon/models/monitor_result.py), [GetMonitorApiErrorBody](perigon/errors/get_monitor_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResult](perigon/models/monitor_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetMonitorApiErrorBody](perigon/errors/get_monitor_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitor_events_api(uuid: UUID, sort_by: str, sort_order: SortOrderOrStr, *, event_type: str | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorEventListResult, ListMonitorEventsApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List structured events emitted by a monitor. Events represent individual matches detected by the monitor (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is ingested.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.list_monitor_events_api(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorEventListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorEventsApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.list_monitor_events_api(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorEventListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorEventsApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor whose events to retrieve. |
| <code>sort_by</code> | <code>str</code> | Required field used to sort events. Accepts createdAt, updatedAt, or eventDate. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>event_type</code> | <code>str \| None</code> | Filter for events with this exact event type.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Filter for events created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Filter for events created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorEventListResult](perigon/models/monitor_event_list_result.py), [ListMonitorEventsApiErrorBody](perigon/errors/list_monitor_events_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorEventListResult](perigon/models/monitor_event_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListMonitorEventsApiErrorBody](perigon/errors/list_monitor_events_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitor_newsletters_api(uuid: UUID, sort_by: str, sort_order: SortOrderOrStr, *, title: str | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorNewsletterListResult, ListMonitorNewslettersApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable digest and are produced on the monitor's configured schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.list_monitor_newsletters_api(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorNewsletterListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorNewslettersApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.list_monitor_newsletters_api(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorNewsletterListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorNewslettersApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor whose newsletters to retrieve. |
| <code>sort_by</code> | <code>str</code> | Required field used to sort newsletters. Accepts createdAt or updatedAt. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>title</code> | <code>str \| None</code> | Filter by newsletter title using a case-insensitive partial match.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorNewsletterListResult](perigon/models/monitor_newsletter_list_result.py), [ListMonitorNewslettersApiErrorBody](perigon/errors/list_monitor_newsletters_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorNewsletterListResult](perigon/models/monitor_newsletter_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListMonitorNewslettersApiErrorBody](perigon/errors/list_monitor_newsletters_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitor_summaries_api(uuid: UUID, sort_by: str, sort_order: SortOrderOrStr, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorSummaryListResult, ListMonitorSummariesApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List AI-generated summaries produced for a monitor as matching content is processed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.list_monitor_summaries_api(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorSummaryListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorSummariesApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.list_monitor_summaries_api(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", SortOrder.ASC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorSummaryListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorSummariesApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor whose summaries to retrieve. |
| <code>sort_by</code> | <code>str</code> | Required field used to sort summaries. Accepts createdAt or updatedAt. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Filter for summaries created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Filter for summaries created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorSummaryListResult](perigon/models/monitor_summary_list_result.py), [ListMonitorSummariesApiErrorBody](perigon/errors/list_monitor_summaries_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorSummaryListResult](perigon/models/monitor_summary_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListMonitorSummariesApiErrorBody](perigon/errors/list_monitor_summaries_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitors_api(sort_by: str, sort_order: SortOrderOrStr, *, uuid: list[UUID] | None = None, name: str | None = None, status: list[Status2OrStr] | None = None, classification_type: list[ClassificationType3OrStr] | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorListResult, ListMonitorsApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use the status parameter to filter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.list_monitors_api("some example string", SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorsApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.list_monitors_api("some example string", SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorsApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>str</code> | Required field used to sort monitors. Accepts createdAt or updatedAt. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>uuid</code> | <code>list&#91;UUID&#93; \| None</code> | Filter by one or more monitor UUIDs. Multiple values are combined with OR.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Filter by monitor name using a case-insensitive partial match.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>list&#91;[Status2OrStr](perigon/models/enums/status2.py)&#93; \| None</code> | Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded.<br>**Default**: <code>None</code> |
| <code>classification_type</code> | <code>list&#91;[ClassificationType3OrStr](perigon/models/enums/classification_type3.py)&#93; \| None</code> | Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined with OR.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorListResult](perigon/models/monitor_list_result.py), [ListMonitorsApiErrorBody](perigon/errors/list_monitors_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorListResult](perigon/models/monitor_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListMonitorsApiErrorBody](perigon/errors/list_monitors_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pause_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResult, PauseMonitorApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause a monitor, stopping its processing pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.pause_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PauseMonitorApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.pause_monitor_api(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PauseMonitorApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor to pause. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorResult](perigon/models/monitor_result.py), [PauseMonitorApiErrorBody](perigon/errors/pause_monitor_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResult](perigon/models/monitor_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[PauseMonitorApiErrorBody](perigon/errors/pause_monitor_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_monitor_api(uuid: UUID, body: SignalApiUpdateBody | SignalApiUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResult, UpdateMonitorApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change monitor status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitors.with_raw_response.update_monitor_api(
    UUID("00000000-0000-0000-0000-000000000000"),
    SignalApiUpdateBody(
        name="some example string",
        classification_type=ClassificationType1.EVENT,
        monitoring_objective="some example string",
        data_schema=SignalMonitoringPlanDataSchema(schema_value={"key": SignalMonitoringPlanDataSchemaProperty()}),
        entity_groups=[EntityGroup(group_reference="some example string")],
        query=ComplexAllEndpointQuery(),
        contact_point_ids=[UUID("00000000-0000-0000-0000-000000000000")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMonitorApiErrorBody
```

**Async**

```python
result = await async_client.monitors.with_raw_response.update_monitor_api(
    UUID("00000000-0000-0000-0000-000000000000"),
    SignalApiUpdateBody(
        name="some example string",
        classification_type=ClassificationType1.EVENT,
        monitoring_objective="some example string",
        data_schema=SignalMonitoringPlanDataSchema(schema_value={"key": SignalMonitoringPlanDataSchemaProperty()}),
        entity_groups=[EntityGroup(group_reference="some example string")],
        query=ComplexAllEndpointQuery(),
        contact_point_ids=[UUID("00000000-0000-0000-0000-000000000000")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMonitorApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uuid</code> | <code>UUID</code> | UUID of the monitor to update. |
| <code>body</code> | <code>[SignalApiUpdateBody](perigon/models/signal_api_update_body.py) \| [SignalApiUpdateBodyDict](perigon/models/signal_api_update_body.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[MonitorResult](perigon/models/monitor_result.py), [UpdateMonitorApiErrorBody](perigon/errors/update_monitor_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResult](perigon/models/monitor_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[UpdateMonitorApiErrorBody](perigon/errors/update_monitor_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NewsStories

> Source: [NewsStories](perigon/apis/news_stories.py)

<details>
<summary><code>def get_article_refresh_job(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ArticleRefreshJobResponse, GetArticleRefreshJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the job status together with whatever per-article results have been computed so far. Results are immutable snapshots taken when each article was processed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.get_article_refresh_job(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticleRefreshJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetArticleRefreshJobErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.get_article_refresh_job(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticleRefreshJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetArticleRefreshJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ArticleRefreshJobResponse](perigon/models/article_refresh_job_response.py), [GetArticleRefreshJobErrorBody](perigon/errors/get_article_refresh_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ArticleRefreshJobResponse](perigon/models/article_refresh_job_response.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetArticleRefreshJobErrorBody](perigon/errors/get_article_refresh_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_story_counts(*, split_by: SplitByOrStr = SplitBy.MONTH, q: str | None = None, name: str | None = None, cluster_id: list[str] | None = None, exclude_cluster_id: list[str] | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, initialized_from: RFC3339DateTime | None = None, initialized_to: RFC3339DateTime | None = None, updated_from: RFC3339DateTime | None = None, updated_to: RFC3339DateTime | None = None, topic: list[str] | None = None, category: list[str] | None = None, taxonomy: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, min_unique_sources: int | None = None, min_source_diversity: float | None = None, person_wikidata_id: list[str] | None = None, person_name: str | None = None, company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, country: list[str] | None = None, state: list[str] | None = None, city: list[str] | None = None, area: list[str] | None = None, min_cluster_size: int | None = None, max_cluster_size: int | None = None, name_exists: bool | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, show_duplicates: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatResult, GetStoryCountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and filtered by supported story attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.get_story_counts(split_by=SplitBy.HOUR)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryCountsErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.get_story_counts(split_by=SplitBy.HOUR)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryCountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>split_by</code> | <code>[SplitByOrStr](perigon/models/enums/split_by.py)</code> | Time interval used to group story counts. Accepts hour, day, week, or month and defaults to month.<br>**Default**: <code>SplitBy.MONTH</code> |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering stories based on their name, summary, and key points. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes, and wildcards for matching name variations.<br>**Default**: <code>None</code> |
| <code>cluster_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter to specific stories using their unique identifiers. Each clusterId represents a distinct story that groups related articles. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_cluster_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes specific stories from the results by their unique identifiers. Use this parameter to filter out unwanted or previously seen stories.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>initialized_from</code> | <code>RFC3339DateTime \| None</code> | Filter for stories initialized on or after this date. A story is initialized when it becomes visible with generated story data.<br>**Default**: <code>None</code> |
| <code>initialized_to</code> | <code>RFC3339DateTime \| None</code> | Filter for stories initialized on or before this date. A story is initialized when it becomes visible with generated story data.<br>**Default**: <code>None</code> |
| <code>updated_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for stories that received new articles after this date. Useful for tracking developing news events or evolving storylines.<br>**Default**: <code>None</code> |
| <code>updated_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for stories that received new articles before this date. Useful for tracking developing news events or evolving storylines.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and stories can include multiple topics based on their constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business, or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within each story. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>taxonomy</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized based on their constituent articles. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories that contain articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains at least one article from any of the specified sources. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_group</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories that contain articles from publishers in Perigon's curated bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any publisher in the specified bundles. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>min_unique_sources</code> | <code>int \| None</code> | Integer. Specifies the minimum number of unique sources required for a story to appear in results. Higher values return more significant stories covered by multiple publications. Default is 3.<br>**Default**: <code>None</code> |
| <code>min_source_diversity</code> | <code>float \| None</code> | Float. Minimum ratio of unique sources to unique articles (uniqueSources / uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires at least 1 unique source per 20 articles. Not applied by default.<br>**Default**: <code>None</code> |
| <code>person_wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked individuals.<br>**Default**: <code>None</code> |
| <code>person_name</code> | <code>str \| None</code> | String. Filter stories by exact name matches of top mentioned people. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint.<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by identifiers of top mentioned companies. Returns stories where these companies appear prominently. For a complete list of tracked companies, refer to the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_name</code> | <code>str \| None</code> | String. Filter stories by names of top mentioned companies. Performs an exact match on company names in the topCompanies field.<br>**Default**: <code>None</code> |
| <code>company_domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by domains of top mentioned companies (e.g., apple.com). Returns stories where companies with these domains appear prominently. For available company entities, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by stock symbols of top mentioned companies. Returns stories where companies with these symbols appear prominently. For available company entities and their symbols, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by ISIN codes of top mentioned companies (International Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently. For available company entities and their ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by ISIN codes on ticker listings of top mentioned companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns stories where those companies appear prominently. For available company entities and their listing ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter local news by state. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter local news by city. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>area</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter local news by area. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>min_cluster_size</code> | <code>int \| None</code> | Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of unique articles.<br>**Default**: <code>None</code> |
| <code>max_cluster_size</code> | <code>int \| None</code> | Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of unique articles in the cluster.<br>**Default**: <code>None</code> |
| <code>name_exists</code> | <code>bool \| None</code> | Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note that stories only receive names after they contain at least 5 unique articles.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_from</code> | <code>float \| None</code> | Filter stories with an aggregate positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_to</code> | <code>float \| None</code> | Filter stories with an aggregate positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_from</code> | <code>float \| None</code> | Filter stories with an aggregate neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_to</code> | <code>float \| None</code> | Filter stories with an aggregate neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_from</code> | <code>float \| None</code> | Filter stories with an aggregate negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_to</code> | <code>float \| None</code> | Filter stories with an aggregate negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>show_duplicates</code> | <code>bool \| None</code> | Boolean. Stories are deduplicated by default. If a story is deduplicated, all future articles are merged into the original story. duplicateOf field contains the original cluster Id. When showDuplicates=true, all stories are shown.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[StatResult](perigon/models/stat_result.py), [GetStoryCountsErrorBody](perigon/errors/get_story_counts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatResult](perigon/models/stat_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetStoryCountsErrorBody](perigon/errors/get_story_counts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_story_history(*, cluster_id: list[str] | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, sort_by: SortByOrStr | None = None, page: int | None = None, size: int | None = None, changelog_exists: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryHistoryResult, GetStoryHistoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and changelogs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.get_story_history()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryHistoryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryHistoryErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.get_story_history()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryHistoryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cluster_id</code> | <code>list&#91;str&#93; \| None</code> | Filter history records by story cluster ID. Multiple values are combined with OR.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByOrStr](perigon/models/enums/sort_by.py) \| None</code> | Field used to sort history records in descending order. Accepts createdAt or triggeredAt and defaults to createdAt.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. Number of stories results per page, from 0 to 100.<br>**Default**: <code>None</code> |
| <code>changelog_exists</code> | <code>bool \| None</code> | Filter by whether a history record contains a changelog. Use true to require one or false to require its absence.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[StoryHistoryResult](perigon/models/story_history_result.py), [GetStoryHistoryErrorBody](perigon/errors/get_story_history_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryHistoryResult](perigon/models/story_history_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetStoryHistoryErrorBody](perigon/errors/get_story_history_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def peek_article_refresh(body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ArticleRefreshPeekResponse, PeekArticleRefreshErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any processing or creating a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.peek_article_refresh(
    ArticleRefreshSubmitRequest(article_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticleRefreshPeekResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PeekArticleRefreshErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.peek_article_refresh(
    ArticleRefreshSubmitRequest(article_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticleRefreshPeekResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PeekArticleRefreshErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ArticleRefreshSubmitRequest](perigon/models/article_refresh_submit_request.py) \| [ArticleRefreshSubmitRequestDict](perigon/models/article_refresh_submit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ArticleRefreshPeekResponse](perigon/models/article_refresh_peek_response.py), [PeekArticleRefreshErrorBody](perigon/errors/peek_article_refresh_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ArticleRefreshPeekResponse](perigon/models/article_refresh_peek_response.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[PeekArticleRefreshErrorBody](perigon/errors/peek_article_refresh_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_articles(*, q: str | None = None, title: str | None = None, desc: str | None = None, content: str | None = None, summary: str | None = None, url: str | None = None, article_id: list[str] | None = None, cluster_id: list[str] | None = None, sort_by: AllEndpointSortByOrStr | None = None, page: int | None = None, size: int | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, add_date_from: RFC3339DateTime | None = None, add_date_to: RFC3339DateTime | None = None, refresh_date_from: RFC3339DateTime | None = None, refresh_date_to: RFC3339DateTime | None = None, medium: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, exclude_source_group: list[str] | None = None, exclude_source: list[str] | None = None, watchlist: list[str] | None = None, exclude_watchlist: list[str] | None = None, paywall: bool | None = None, byline: list[str] | None = None, author: list[str] | None = None, exclude_author: list[str] | None = None, journalist_id: list[str] | None = None, exclude_journalist_id: list[str] | None = None, language: list[str] | None = None, exclude_language: list[str] | None = None, search_translation: bool | None = None, label: list[str] | None = None, exclude_label: list[str] | None = None, category: list[str] | None = None, exclude_category: list[str] | None = None, topic: list[str] | None = None, exclude_topic: list[str] | None = None, link_to: str | None = None, show_reprints: bool | None = None, reprint_group_id: str | None = None, city: list[str] | None = None, exclude_city: list[str] | None = None, area: list[str] | None = None, state: list[str] | None = None, exclude_state: list[str] | None = None, county: list[str] | None = None, exclude_county: list[str] | None = None, locations_country: list[str] | None = None, country: list[str] | None = None, exclude_locations_country: list[str] | None = None, location: list[str] | None = None, lat: float | None = None, lon: float | None = None, max_distance: float | None = None, source_city: list[str] | None = None, exclude_source_city: list[str] | None = None, source_county: list[str] | None = None, exclude_source_county: list[str] | None = None, source_country: list[str] | None = None, exclude_source_country: list[str] | None = None, source_state: list[str] | None = None, exclude_source_state: list[str] | None = None, source_lat: float | None = None, source_lon: float | None = None, source_max_distance: float | None = None, person_wikidata_id: list[str] | None = None, exclude_person_wikidata_id: list[str] | None = None, person_name: list[str] | None = None, exclude_person_name: list[str] | None = None, company_id: list[str] | None = None, exclude_company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, exclude_company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, exclude_company_isin: list[str] | None = None, exclude_company_symbol_isin: list[str] | None = None, exclude_company_symbol: list[str] | None = None, show_num_results: bool | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, taxonomy: list[str] | None = None, prefix_taxonomy: str | None = None, show_highlighting: bool | None = None, highlight_fragment_size: int | None = None, highlight_num_fragments: int | None = None, highlight_pre_tag: str | None = None, highlight_post_tag: str | None = None, highlight_q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QuerySearchResult, SearchArticlesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter all news articles available via the Perigon API. The result includes a list of individual articles that were matched to your specific criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.search_articles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QuerySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchArticlesErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.search_articles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QuerySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchArticlesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering articles based on their title, description, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>title</code> | <code>str \| None</code> | String. Search specifically within article headlines/titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.<br>**Default**: <code>None</code> |
| <code>desc</code> | <code>str \| None</code> | String. Search within article description fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching.<br>**Default**: <code>None</code> |
| <code>content</code> | <code>str \| None</code> | String. Search within the full article body content. Supports Boolean logic, exact phrase matching with quotes, and wildcards for comprehensive content searching.<br>**Default**: <code>None</code> |
| <code>summary</code> | <code>str \| None</code> | String. Search within article summary fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying certain website sections, e.g. source=cnn.com&url=travel.<br>**Default**: <code>None</code> |
| <code>article_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs can be provided to return a collection of specific articles.<br>**Default**: <code>None</code> |
| <code>cluster_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter results to only show content within a specific related content cluster. Returns articles grouped together as part of Perigon Stories based on topic relevance.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[AllEndpointSortByOrStr](perigon/models/enums/all_endpoint_sort_by.py) \| None</code> | String. Determines the article sorting order. Options include relevance (default), date/pubDate (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in system first, often identical to addDate).<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of articles to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>add_date_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>add_date_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>refresh_date_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles refreshed/updated in Perigon's system after this date. In most cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>refresh_date_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for articles refreshed/updated in Perigon's system before this date. In most cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>medium</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by their primary medium type. Accepts Article for written content or Video for video-based stories. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_group</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100, top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.<br>**Default**: <code>None</code> |
| <code>exclude_source_group</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles from specified Perigon source groups. Multiple values create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g., top10, top100).<br>**Default**: <code>None</code> |
| <code>exclude_source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles using watchlists of people and companies. Multiple values create an OR filter to include articles mentioning any entity from the specified watchlists.<br>**Default**: <code>None</code> |
| <code>exclude_watchlist</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning entities from specified watchlists. Multiple values create an AND-exclude filter, removing content mentioning any entity from the specified watchlists.<br>**Default**: <code>None</code> |
| <code>paywall</code> | <code>bool \| None</code> | Boolean. Filter to show only results where the source has a paywall (true) or does not have a paywall (false).<br>**Default**: <code>None</code> |
| <code>byline</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by author bylines. Works as an exact match for each author name provided. Multiple values create an OR filter to find articles by any of the specified authors.<br>**Default**: <code>None</code> |
| <code>author</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by specific author names. Works as an exact match for each name. Multiple values create an OR filter to find articles by any of the specified authors.<br>**Default**: <code>None</code> |
| <code>exclude_author</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles written by specific authors. Any article with an author name matching an entry in this list will be omitted from results. Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>journalist_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by unique journalist identifiers which can be found through the Journalist API or in the matchedAuthors field. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_journalist_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles written by specific journalists identified by their unique IDs. Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_language</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles in specific languages using ISO-639 two-letter codes. Multiple values create an AND-exclude filter.<br>**Default**: <code>None</code> |
| <code>search_translation</code> | <code>bool \| None</code> | Boolean. Expand search to include translated content fields for non-English articles. When true, searches translated title, description, and content fields.<br>**Default**: <code>None</code> |
| <code>label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles with specific editorial labels. Multiple values create an AND-exclude filter, removing all content with any of these labels.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by categories. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. Use 'none' to search uncategorized articles.<br>**Default**: <code>None</code> |
| <code>exclude_category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles with specific categories. Multiple values create an AND-exclude filter, removing all content with any of these categories.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and articles can have multiple topics. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles with specific topics. Multiple values create an AND-exclude filter, removing all content with any of these topics.<br>**Default**: <code>None</code> |
| <code>link_to</code> | <code>str \| None</code> | String. Returns only articles that contain links to the specified URL pattern. Matches against the 'links' field in article responses.<br>**Default**: <code>None</code> |
| <code>show_reprints</code> | <code>bool \| None</code> | Boolean. Controls whether to include reprinted content in results. When true (default), shows syndicated articles from wire services like AP or Reuters that appear on multiple sites.<br>**Default**: <code>None</code> |
| <code>reprint_group_id</code> | <code>str \| None</code> | String. Returns all articles in a specific reprint group, including the original article and all its known reprints. Use when you want to see all versions of the same content.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified city plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the urban area in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>exclude_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of cities to exclude from the results. Articles that are associated with any of the specified cities will be filtered out.<br>**Default**: <code>None</code> |
| <code>area</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified area, such as a neighborhood, borough, or district, plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the area in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified state plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the state in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>exclude_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of states to exclude. Articles that include, or are associated with, any of the states provided here will be filtered out. This is especially useful if you want to ignore news tied to certain geographical areas (e.g., US states).<br>**Default**: <code>None</code> |
| <code>county</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of counties to include (or specify) in the search results. This field filters the returned articles based on the county associated with the event or news. Only articles tagged with one of these counties will be included.<br>**Default**: <code>None</code> |
| <code>exclude_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles from specific counties or administrative divisions in the search results. Accepts either a single county name or a list of county names. County names should match the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows for more granular geographic filter<br>**Default**: <code>None</code> |
| <code>locations_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters articles where a specified country plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>exclude_locations_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles where a specified country plays a central role in the content, ensuring results are not deeply relevant to the country in question. If multiple parameters are passed, they will be applied as AND operations, excluding articles relevant to any of the specified countries.<br>**Default**: <code>None</code> |
| <code>location</code> | <code>list&#91;str&#93; \| None</code> | String Array. Return all articles that have the specified location. Location attributes are delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.<br>**Default**: <code>None</code> |
| <code>lat</code> | <code>float \| None</code> | Float. Latitude of the center point to search places<br>**Default**: <code>None</code> |
| <code>lon</code> | <code>float \| None</code> | Float. Longitude of the center point to search places<br>**Default**: <code>None</code> |
| <code>max_distance</code> | <code>float \| None</code> | Float. Maximum distance (in km) from starting point to search articles by tagged places<br>**Default**: <code>None</code> |
| <code>source_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given city.<br>**Default**: <code>None</code> |
| <code>exclude_source_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified cities.<br>**Default**: <code>None</code> |
| <code>source_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given county.<br>**Default**: <code>None</code> |
| <code>exclude_source_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified counties.<br>**Default**: <code>None</code> |
| <code>source_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given country. Must be 2 character country code (i.e. us, gb, etc).<br>**Default**: <code>None</code> |
| <code>exclude_source_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified countries. Must be 2 character country codes (e.g., us, gb).<br>**Default**: <code>None</code> |
| <code>source_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Find articles published by sources that are located within a given state.<br>**Default**: <code>None</code> |
| <code>exclude_source_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes articles published by sources that are located within the specified states.<br>**Default**: <code>None</code> |
| <code>source_lat</code> | <code>float \| None</code> | Float. Latitude of the center point to search articles created by local publications.<br>**Default**: <code>None</code> |
| <code>source_lon</code> | <code>float \| None</code> | Float. Longitude of the center point to search articles created by local publications.<br>**Default**: <code>None</code> |
| <code>source_max_distance</code> | <code>float \| None</code> | Float. Maximum distance from starting point to search articles created by local publications.<br>**Default**: <code>None</code> |
| <code>person_wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people endpoint for a complete list of tracked individuals.<br>**Default**: <code>None</code> |
| <code>exclude_person_wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning people with specific Wikidata IDs. Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to avoid name ambiguity.<br>**Default**: <code>None</code> |
| <code>person_name</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by exact person name matches. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_person_name</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning specific people by name. Creates an AND-exclude filter to remove content about these individuals.<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company identifiers. For a complete list of tracked companies, refer to the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles mentioning companies with specific identifiers. Creates an AND-exclude filter to remove content about these corporate entities.<br>**Default**: <code>None</code> |
| <code>company_name</code> | <code>str \| None</code> | String. Filter articles by company name mentions. Performs an exact match on company names.<br>**Default**: <code>None</code> |
| <code>company_domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company domains (e.g., apple.com). For available company entities, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles related to companies with specific domains. Creates an AND-exclude filter to remove content about these companies.<br>**Default**: <code>None</code> |
| <code>company_symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company stock symbols. For available company entities and their symbols, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by company ISIN codes (International Securities Identification Numbers). For available company entities and their ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles related to companies with specific ISIN codes. Creates an AND-exclude filter to remove content about these companies. For available company entities and their ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Exclude articles related to companies whose ticker listings have these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>exclude_company_symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. A list of stock symbols (ticker symbols) that identify companies to be excluded. Articles related to companies using any of these symbols will be omitted, which is useful for targeting or avoiding specific public companies.<br>**Default**: <code>None</code> |
| <code>show_num_results</code> | <code>bool \| None</code> | Boolean. Whether to show the total number of all matched articles. Default value is false which makes queries a bit more efficient but also counts up to 10000 articles.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_from</code> | <code>float \| None</code> | Float. Filter articles with a positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_to</code> | <code>float \| None</code> | Float. Filter articles with a positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_from</code> | <code>float \| None</code> | Float. Filter articles with a neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_to</code> | <code>float \| None</code> | Float. Filter articles with a neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_from</code> | <code>float \| None</code> | Float. Filter articles with a negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_to</code> | <code>float \| None</code> | Float. Filter articles with a negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>taxonomy</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filters by Google Content Categories. This field will accept 1 or more categories, must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other, /Finance/Investing/Funds. [Full list](https://docs.cloud.google.com/natural-language/docs/categories#version_2)<br>**Default**: <code>None</code> |
| <code>prefix_taxonomy</code> | <code>str \| None</code> | String. Filters by Google Content Categories. This field will filter by the category prefix only. Example: prefixTaxonomy=/Finance<br>**Default**: <code>None</code> |
| <code>show_highlighting</code> | <code>bool \| None</code> | Boolean. When set to true, enables text highlighting in search results.<br>**Default**: <code>None</code> |
| <code>highlight_fragment_size</code> | <code>int \| None</code> | Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_num_fragments</code> | <code>int \| None</code> | Integer. Controls the maximum number of highlighted fragments to return per field.<br>**Default**: <code>None</code> |
| <code>highlight_pre_tag</code> | <code>str \| None</code> | String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_post_tag</code> | <code>str \| None</code> | String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_q</code> | <code>str \| None</code> | String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[QuerySearchResult](perigon/models/query_search_result.py), [SearchArticlesErrorBody](perigon/errors/search_articles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QuerySearchResult](perigon/models/query_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchArticlesErrorBody](perigon/errors/search_articles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_stories(*, q: str | None = None, name: str | None = None, cluster_id: list[str] | None = None, exclude_cluster_id: list[str] | None = None, sort_by: ClustersListSortByOrStr | None = None, page: int | None = None, size: int | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, initialized_from: RFC3339DateTime | None = None, initialized_to: RFC3339DateTime | None = None, updated_from: RFC3339DateTime | None = None, updated_to: RFC3339DateTime | None = None, topic: list[str] | None = None, category: list[str] | None = None, taxonomy: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, min_unique_sources: int | None = None, min_source_diversity: float | None = None, person_wikidata_id: list[str] | None = None, person_name: str | None = None, company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, country: list[str] | None = None, state: list[str] | None = None, city: list[str] | None = None, area: list[str] | None = None, min_cluster_size: int | None = None, max_cluster_size: int | None = None, name_exists: bool | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, show_story_page_info: bool | None = None, show_num_results: bool | None = None, show_duplicates: bool | None = None, show_highlighting: bool | None = None, highlight_fragment_size: int | None = None, highlight_num_fragments: int | None = None, highlight_pre_tag: str | None = None, highlight_post_tag: str | None = None, highlight_q: str | None = None, expand_articles: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StorySearchResult, SearchStoriesErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.search_stories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StorySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchStoriesErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.search_stories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StorySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering stories based on their name, summary, and key points. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes, and wildcards for matching name variations.<br>**Default**: <code>None</code> |
| <code>cluster_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter to specific stories using their unique identifiers. Each clusterId represents a distinct story that groups related articles. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exclude_cluster_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Excludes specific stories from the results by their unique identifiers. Use this parameter to filter out unwanted or previously seen stories.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[ClustersListSortByOrStr](perigon/models/enums/clusters_list_sort_by.py) \| None</code> | String. Determines the story sorting order. Options include createdAt (default, when stories first emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance (best match to query), count (by unique article count), and totalCount (by total article count including reprints).<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of articles to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>initialized_from</code> | <code>RFC3339DateTime \| None</code> | Filter for stories initialized on or after this date. A story is initialized when it becomes visible with generated story data.<br>**Default**: <code>None</code> |
| <code>initialized_to</code> | <code>RFC3339DateTime \| None</code> | Filter for stories initialized on or before this date. A story is initialized when it becomes visible with generated story data.<br>**Default**: <code>None</code> |
| <code>updated_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for stories that received new articles after this date. Useful for tracking developing news events or evolving storylines.<br>**Default**: <code>None</code> |
| <code>updated_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for stories that received new articles before this date. Useful for tracking developing news events or evolving storylines.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and stories can include multiple topics based on their constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business, or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within each story. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>taxonomy</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized based on their constituent articles. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories that contain articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains at least one article from any of the specified sources. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_group</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories that contain articles from publishers in Perigon's curated bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any publisher in the specified bundles. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>min_unique_sources</code> | <code>int \| None</code> | Integer. Specifies the minimum number of unique sources required for a story to appear in results. Higher values return more significant stories covered by multiple publications. Default is 3.<br>**Default**: <code>None</code> |
| <code>min_source_diversity</code> | <code>float \| None</code> | Float. Minimum ratio of unique sources to unique articles (uniqueSources / uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires at least 1 unique source per 20 articles. Not applied by default.<br>**Default**: <code>None</code> |
| <code>person_wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked individuals.<br>**Default**: <code>None</code> |
| <code>person_name</code> | <code>str \| None</code> | String. Filter stories by exact name matches of top mentioned people. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint.<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by identifiers of top mentioned companies. Returns stories where these companies appear prominently. For a complete list of tracked companies, refer to the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_name</code> | <code>str \| None</code> | String. Filter stories by names of top mentioned companies. Performs an exact match on company names in the topCompanies field.<br>**Default**: <code>None</code> |
| <code>company_domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by domains of top mentioned companies (e.g., apple.com). Returns stories where companies with these domains appear prominently. For available company entities, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by stock symbols of top mentioned companies. Returns stories where companies with these symbols appear prominently. For available company entities and their symbols, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by ISIN codes of top mentioned companies (International Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently. For available company entities and their ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>company_symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter stories by ISIN codes on ticker listings of top mentioned companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns stories where those companies appear prominently. For available company entities and their listing ISINs, consult the /companies endpoint.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter local news by state. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter local news by city. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>area</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter local news by area. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.<br>**Default**: <code>None</code> |
| <code>min_cluster_size</code> | <code>int \| None</code> | Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of unique articles.<br>**Default**: <code>None</code> |
| <code>max_cluster_size</code> | <code>int \| None</code> | Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of unique articles in the cluster.<br>**Default**: <code>None</code> |
| <code>name_exists</code> | <code>bool \| None</code> | Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note that stories only receive names after they contain at least 5 unique articles.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_from</code> | <code>float \| None</code> | Filter stories with an aggregate positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>positive_sentiment_to</code> | <code>float \| None</code> | Filter stories with an aggregate positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_from</code> | <code>float \| None</code> | Filter stories with an aggregate neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>neutral_sentiment_to</code> | <code>float \| None</code> | Filter stories with an aggregate neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_from</code> | <code>float \| None</code> | Filter stories with an aggregate negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>negative_sentiment_to</code> | <code>float \| None</code> | Filter stories with an aggregate negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.<br>**Default**: <code>None</code> |
| <code>show_story_page_info</code> | <code>bool \| None</code> | Boolean.<br>**Default**: <code>None</code> |
| <code>show_num_results</code> | <code>bool \| None</code> | Boolean. Show total number of results. By default set to false, will cap result count at 10000.<br>**Default**: <code>None</code> |
| <code>show_duplicates</code> | <code>bool \| None</code> | Boolean. Stories are deduplicated by default. If a story is deduplicated, all future articles are merged into the original story. duplicateOf field contains the original cluster Id. When showDuplicates=true, all stories are shown.<br>**Default**: <code>None</code> |
| <code>show_highlighting</code> | <code>bool \| None</code> | Boolean. When set to true, enables text highlighting in search results.<br>**Default**: <code>None</code> |
| <code>highlight_fragment_size</code> | <code>int \| None</code> | Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_num_fragments</code> | <code>int \| None</code> | Integer. Controls the maximum number of highlighted fragments to return per field.<br>**Default**: <code>None</code> |
| <code>highlight_pre_tag</code> | <code>str \| None</code> | String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_post_tag</code> | <code>str \| None</code> | String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not specified.<br>**Default**: <code>None</code> |
| <code>highlight_q</code> | <code>str \| None</code> | String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.<br>**Default**: <code>None</code> |
| <code>expand_articles</code> | <code>bool \| None</code> | Boolean. Preview 5 articles from the cluster.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[StorySearchResult](perigon/models/story_search_result.py), [SearchStoriesErrorBody](perigon/errors/search_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StorySearchResult](perigon/models/story_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchStoriesErrorBody](perigon/errors/search_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def submit_article_refresh_job(body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ArticleRefreshJobResponse, SubmitArticleRefreshJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately; the rest are scheduled for processing. Poll the job status endpoint for results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.submit_article_refresh_job(
    ArticleRefreshSubmitRequest(article_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticleRefreshJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitArticleRefreshJobErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.submit_article_refresh_job(
    ArticleRefreshSubmitRequest(article_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticleRefreshJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitArticleRefreshJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ArticleRefreshSubmitRequest](perigon/models/article_refresh_submit_request.py) \| [ArticleRefreshSubmitRequestDict](perigon/models/article_refresh_submit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ArticleRefreshJobResponse](perigon/models/article_refresh_job_response.py), [SubmitArticleRefreshJobErrorBody](perigon/errors/submit_article_refresh_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ArticleRefreshJobResponse](perigon/models/article_refresh_job_response.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SubmitArticleRefreshJobErrorBody](perigon/errors/submit_article_refresh_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vector_search_articles(body: ArticleSearchParams | ArticleSearchParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ArticlesVectorSearchResult, VectorSearchArticlesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a natural language search over news articles from the past 6 months using semantic relevance. The result includes a list of articles most closely matched to your query intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.news_stories.with_raw_response.vector_search_articles(ArticleSearchParams(prompt="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticlesVectorSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VectorSearchArticlesErrorBody
```

**Async**

```python
result = await async_client.news_stories.with_raw_response.vector_search_articles(
    ArticleSearchParams(prompt="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArticlesVectorSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VectorSearchArticlesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ArticleSearchParams](perigon/models/article_search_params.py) \| [ArticleSearchParamsDict](perigon/models/article_search_params.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[ArticlesVectorSearchResult](perigon/models/articles_vector_search_result.py), [VectorSearchArticlesErrorBody](perigon/errors/vector_search_articles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ArticlesVectorSearchResult](perigon/models/articles_vector_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[VectorSearchArticlesErrorBody](perigon/errors/vector_search_articles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SourceGroups

> Source: [SourceGroups](perigon/apis/source_groups.py)

<details>
<summary><code>def create_source_group(body: CreateSourceGroupParams | CreateSourceGroupParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceGroupResult, CreateSourceGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new source group under the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.source_groups.with_raw_response.create_source_group(
    CreateSourceGroupParams(name="some example string", domains=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSourceGroupErrorBody
```

**Async**

```python
result = await async_client.source_groups.with_raw_response.create_source_group(
    CreateSourceGroupParams(name="some example string", domains=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSourceGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSourceGroupParams](perigon/models/create_source_group_params.py) \| [CreateSourceGroupParamsDict](perigon/models/create_source_group_params.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceGroupResult](perigon/models/source_group_result.py), [CreateSourceGroupErrorBody](perigon/errors/create_source_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceGroupResult](perigon/models/source_group_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[CreateSourceGroupErrorBody](perigon/errors/create_source_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_source_group(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceGroupResult, DeleteSourceGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a source group owned by the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.source_groups.with_raw_response.delete_source_group(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSourceGroupErrorBody
```

**Async**

```python
result = await async_client.source_groups.with_raw_response.delete_source_group(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSourceGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceGroupResult](perigon/models/source_group_result.py), [DeleteSourceGroupErrorBody](perigon/errors/delete_source_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceGroupResult](perigon/models/source_group_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[DeleteSourceGroupErrorBody](perigon/errors/delete_source_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_source_group(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceGroupResult, GetSourceGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.source_groups.with_raw_response.get_source_group(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSourceGroupErrorBody
```

**Async**

```python
result = await async_client.source_groups.with_raw_response.get_source_group(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSourceGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceGroupResult](perigon/models/source_group_result.py), [GetSourceGroupErrorBody](perigon/errors/get_source_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceGroupResult](perigon/models/source_group_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetSourceGroupErrorBody](perigon/errors/get_source_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_source_groups(sort_by: SourceGroupSortByOrStr, sort_order: SortOrderOrStr, *, name: str | None = None, domain: str | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceGroupListResult, ListSourceGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List source groups owned by the organization associated with the API key, as well as publicly visible source groups. Supports filtering by name and domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.source_groups.with_raw_response.list_source_groups(SourceGroupSortBy.ID, SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceGroupsErrorBody
```

**Async**

```python
result = await async_client.source_groups.with_raw_response.list_source_groups(SourceGroupSortBy.ID, SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>[SourceGroupSortByOrStr](perigon/models/enums/source_group_sort_by.py)</code> | Value sent with the request. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceGroupListResult](perigon/models/source_group_list_result.py), [ListSourceGroupsErrorBody](perigon/errors/list_source_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceGroupListResult](perigon/models/source_group_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListSourceGroupsErrorBody](perigon/errors/list_source_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resolve_source_groups(*, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceGroupResolveResult, ResolveSourceGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve source groups by name. For each name, returns the organization's private source group if one exists, otherwise falls back to the matching public source group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.source_groups.with_raw_response.resolve_source_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResolveResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResolveSourceGroupsErrorBody
```

**Async**

```python
result = await async_client.source_groups.with_raw_response.resolve_source_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResolveResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResolveSourceGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>list&#91;str&#93; \| None</code> | Source group names to resolve (max 100)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceGroupResolveResult](perigon/models/source_group_resolve_result.py), [ResolveSourceGroupsErrorBody](perigon/errors/resolve_source_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceGroupResolveResult](perigon/models/source_group_resolve_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ResolveSourceGroupsErrorBody](perigon/errors/resolve_source_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_source_group(id_: int, body: PatchSourceGroupParams | PatchSourceGroupParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceGroupResult, UpdateSourceGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a source group owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.source_groups.with_raw_response.update_source_group(1, PatchSourceGroupParams())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSourceGroupErrorBody
```

**Async**

```python
result = await async_client.source_groups.with_raw_response.update_source_group(1, PatchSourceGroupParams())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSourceGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[PatchSourceGroupParams](perigon/models/patch_source_group_params.py) \| [PatchSourceGroupParamsDict](perigon/models/patch_source_group_params.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceGroupResult](perigon/models/source_group_result.py), [UpdateSourceGroupErrorBody](perigon/errors/update_source_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceGroupResult](perigon/models/source_group_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[UpdateSourceGroupErrorBody](perigon/errors/update_source_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SupplementalEndpoints

> Source: [SupplementalEndpoints](perigon/apis/supplemental_endpoints.py)

<details>
<summary><code>def get_journalist_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Journalist, GetJournalistByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find additional details on a journalist by using the journalist ID found in an article response object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.supplemental_endpoints.with_raw_response.get_journalist_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Journalist
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJournalistByIdErrorBody
```

**Async**

```python
result = await async_client.supplemental_endpoints.with_raw_response.get_journalist_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Journalist
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJournalistByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[Journalist](perigon/models/journalist.py), [GetJournalistByIdErrorBody](perigon/errors/get_journalist_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Journalist](perigon/models/journalist.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetJournalistByIdErrorBody](perigon/errors/get_journalist_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_companies(*, id_: list[str] | None = None, symbol: list[str] | None = None, symbol_isin: list[str] | None = None, domain: list[str] | None = None, country: list[str] | None = None, exchange: list[str] | None = None, num_employees_from: int | None = None, num_employees_to: int | None = None, ipo_from: RFC3339DateTime | None = None, ipo_to: RFC3339DateTime | None = None, q: str | None = None, name: str | None = None, industry: str | None = None, sector: str | None = None, size: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanySearchResult, SearchCompaniesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.supplemental_endpoints.with_raw_response.search_companies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCompaniesErrorBody
```

**Async**

```python
result = await async_client.supplemental_endpoints.with_raw_response.search_companies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanySearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by unique company identifiers. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>symbol</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>symbol_isin</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than the company-level ISIN. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by company headquarters country. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>num_employees_from</code> | <code>int \| None</code> | Integer. Filter for companies with at least this many employees.<br>**Default**: <code>None</code> |
| <code>num_employees_to</code> | <code>int \| None</code> | Integer. Filter for companies with no more than this many employees.<br>**Default**: <code>None</code> |
| <code>ipo_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g., 2023-01-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>ipo_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g., 2023-12-31T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering companies across name, alternative names, domains, and ticker symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>industry</code> | <code>str \| None</code> | String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>sector</code> | <code>str \| None</code> | String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of companies to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[CompanySearchResult](perigon/models/company_search_result.py), [SearchCompaniesErrorBody](perigon/errors/search_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanySearchResult](perigon/models/company_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchCompaniesErrorBody](perigon/errors/search_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_journalists(*, id_: list[str] | None = None, q: str | None = None, name: str | None = None, twitter: str | None = None, sort_by: JournalistsSortByOrStr | None = None, size: int | None = None, page: int | None = None, source: list[str] | None = None, topic: list[str] | None = None, category: list[str] | None = None, label: list[str] | None = None, min_monthly_posts: int | None = None, max_monthly_posts: int | None = None, country: list[str] | None = None, location_country: list[str] | None = None, location_state: list[str] | None = None, location_county: list[str] | None = None, location_city: list[str] | None = None, location_area: list[str] | None = None, updated_at_from: RFC3339DateTime | None = None, updated_at_to: RFC3339DateTime | None = None, show_num_results: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JournalistSearchResult, SearchJournalistsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search journalists using broad search attributes. Our database contains over 230,000 journalists from around the world and is refreshed frequently.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.supplemental_endpoints.with_raw_response.search_journalists()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JournalistSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchJournalistsErrorBody
```

**Async**

```python
result = await async_client.supplemental_endpoints.with_raw_response.search_journalists()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JournalistSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchJournalistsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find journalists matching any of the specified IDs.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering journalists based on their name, title, and Twitter bio. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>twitter</code> | <code>str \| None</code> | String. Filter journalists by their exact Twitter handle, without the @ symbol.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[JournalistsSortByOrStr](perigon/models/enums/journalists_sort_by.py) \| None</code> | String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or linkedinFollowers. When omitted, results are sorted by relevance.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of journalists to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by the top topics they cover. Topics are more specific themes that the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data field.)<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by the top categories they cover. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data field.)<br>**Default**: <code>None</code> |
| <code>label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by the most common label tagged to the articles they publish. This accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.)<br>**Default**: <code>None</code> |
| <code>min_monthly_posts</code> | <code>int \| None</code> | Integer. Filter for journalists who publish at least this many articles per month. Used to identify more active journalists.<br>**Default**: <code>None</code> |
| <code>max_monthly_posts</code> | <code>int \| None</code> | Integer. Filter for journalists who publish no more than this many articles per month.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>location_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by their profile location country (`locations.country`). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). `uk` is accepted as an alias for `gb`. Distinct from `country`, which filters reporting focus (`topCountries`). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>location_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by their profile location state or region (`locations.state`). For US locations this is the two-letter state code (e.g., NY, CA). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>location_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by their profile location county (`locations.county`). County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>location_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by their profile location city (`locations.city`). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>location_area</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter journalists by their profile location area — neighborhood, borough, or district (`locations.area`). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>updated_at_from</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>updated_at_to</code> | <code>RFC3339DateTime \| None</code> | Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>show_num_results</code> | <code>bool \| None</code> | Boolean. Controls whether to return the exact result count. When false (default), counts are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[JournalistSearchResult](perigon/models/journalist_search_result.py), [SearchJournalistsErrorBody](perigon/errors/search_journalists_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JournalistSearchResult](perigon/models/journalist_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchJournalistsErrorBody](perigon/errors/search_journalists_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_people(*, name: str | None = None, wikidata_id: list[str] | None = None, occupation_id: list[str] | None = None, occupation_label: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PeopleSearchResult, SearchPeopleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and retrieve additional information on known persons that exist within Perigon's entity database and as referenced in any article response object. Our database contains over 650,000 people from around the world and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be used to lookup even more information on Wikidata's website.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.supplemental_endpoints.with_raw_response.search_people()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPeopleErrorBody
```

**Async**

```python
result = await async_client.supplemental_endpoints.with_raw_response.search_people()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPeopleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>occupation_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>occupation_label</code> | <code>str \| None</code> | String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of people to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[PeopleSearchResult](perigon/models/people_search_result.py), [SearchPeopleErrorBody](perigon/errors/search_people_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PeopleSearchResult](perigon/models/people_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchPeopleErrorBody](perigon/errors/search_people_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_sources(*, domain: list[str] | None = None, name: str | None = None, source_group: str | None = None, sort_by: SourcesSortByOrStr | None = None, page: int | None = None, size: int | None = None, min_monthly_visits: int | None = None, max_monthly_visits: int | None = None, min_monthly_posts: int | None = None, max_monthly_posts: int | None = None, country: list[str] | None = None, source_country: list[str] | None = None, source_state: list[str] | None = None, source_county: list[str] | None = None, source_city: list[str] | None = None, source_lat: float | None = None, source_lon: float | None = None, source_max_distance: float | None = None, category: list[str] | None = None, topic: list[str] | None = None, label: list[str] | None = None, paywall: bool | None = None, show_subdomains: bool | None = None, show_num_results: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceSearchResult, SearchSourcesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of individual media sources that were matched to your specific criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.supplemental_endpoints.with_raw_response.search_sources()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchSourcesErrorBody
```

**Async**

```python
result = await async_client.supplemental_endpoints.with_raw_response.search_sources()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchSourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>source_group</code> | <code>str \| None</code> | String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources within the specified group. See documentation for available source groups.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SourcesSortByOrStr](perigon/models/enums/sources_sort_by.py) \| None</code> | String. Determines the source sorting order. Options include relevance (default, best match to query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count), and avgMonthlyPosts (by number of articles published monthly).<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of sources to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>min_monthly_visits</code> | <code>int \| None</code> | Integer. Filter for sources with at least this many monthly visitors. Used to target publishers by audience size.<br>**Default**: <code>None</code> |
| <code>max_monthly_visits</code> | <code>int \| None</code> | Integer. Filter for sources with no more than this many monthly visitors. Used to target publishers by audience size.<br>**Default**: <code>None</code> |
| <code>min_monthly_posts</code> | <code>int \| None</code> | Integer. Filter for sources that publish at least this many articles per month. Used to target publishers by content volume.<br>**Default**: <code>None</code> |
| <code>max_monthly_posts</code> | <code>int \| None</code> | Integer. Filter for sources that publish no more than this many articles per month. Used to target publishers by content volume.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported country codes. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_country</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter for local publications based in specific countries. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported country codes. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_state</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter for local publications based in specific states or regions. Uses standard two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_county</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter for local publications based in specific counties. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_city</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter for local publications based in specific cities. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>source_lat</code> | <code>float \| None</code> | Float. Latitude coordinate for filtering local publications by geographic proximity. Used with sourceLon and sourceMaxDistance for radius search.<br>**Default**: <code>None</code> |
| <code>source_lon</code> | <code>float \| None</code> | Float. Longitude coordinate for filtering local publications by geographic proximity. Used with sourceLat and sourceMaxDistance for radius search.<br>**Default**: <code>None</code> |
| <code>source_max_distance</code> | <code>float \| None</code> | Float. Maximum distance in kilometers from the coordinates defined by sourceLat and sourceLon. Defines the radius for local publication searches.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter sources by their primary content categories such as Politics, Tech, Sports, Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency, Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news). Returns sources where the specified label is common in their published content. See documentation for all available labels. Multiple values create an OR filter.<br>**Default**: <code>None</code> |
| <code>paywall</code> | <code>bool \| None</code> | Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find sources without paywalls.<br>**Default**: <code>None</code> |
| <code>show_subdomains</code> | <code>bool \| None</code> | Boolean. Controls whether subdomains are included as separate results. When true (default), subdomains appear as distinct sources. When false, results are consolidated to parent domains only.<br>**Default**: <code>None</code> |
| <code>show_num_results</code> | <code>bool \| None</code> | Boolean. Controls whether to return the exact result count. When false (default), counts are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[SourceSearchResult](perigon/models/source_search_result.py), [SearchSourcesErrorBody](perigon/errors/search_sources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceSearchResult](perigon/models/source_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchSourcesErrorBody](perigon/errors/search_sources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_topics(*, name: str | None = None, category: str | None = None, subcategory: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TopicSearchResult, SearchTopicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search through all available Topics that exist within the Perigon Database.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.supplemental_endpoints.with_raw_response.search_topics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TopicSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchTopicsErrorBody
```

**Async**

```python
result = await async_client.supplemental_endpoints.with_raw_response.search_topics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TopicSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchTopicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | String. Search for topics by exact name or partial text match. Does not support wildcards. Examples include Markets, Cryptocurrency, Climate Change, etc.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | String. Filter topics by broad article categories such as Politics, Tech, Sports, Business, Finance, Entertainment, etc.<br>**Default**: <code>None</code> |
| <code>subcategory</code> | <code>str \| None</code> | String. Filter topics by their specific subcategory. Subcategories provide more granular classification beyond the main category, such as TV or Event.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of topics to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[TopicSearchResult](perigon/models/topic_search_result.py), [SearchTopicsErrorBody](perigon/errors/search_topics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TopicSearchResult](perigon/models/topic_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchTopicsErrorBody](perigon/errors/search_topics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Utilities

> Source: [Utilities](perigon/apis/utilities.py)

<details>
<summary><code>def get_limits(*, api_keys: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LimitsResult, GetLimitsErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.utilities.with_raw_response.get_limits()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LimitsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLimitsErrorBody
```

**Async**

```python
result = await async_client.utilities.with_raw_response.get_limits()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LimitsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLimitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_keys</code> | <code>list&#91;str&#93; \| None</code> | Optional list of API keys whose validity and status should be checked. Each key is reported as valid only if it exists and belongs to your account.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[LimitsResult](perigon/models/limits_result.py), [GetLimitsErrorBody](perigon/errors/get_limits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LimitsResult](perigon/models/limits_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetLimitsErrorBody](perigon/errors/get_limits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlists

> Source: [Watchlists](perigon/apis/watchlists.py)

<details>
<summary><code>def create_watchlist(body: CreateWatchlistParams | CreateWatchlistParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistResult, CreateWatchlistErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100 combined people and companies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.create_watchlist(
    CreateWatchlistParams(name="some example string", people=[WatchlistPerson()], companies=[WatchlistCompany()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWatchlistErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.create_watchlist(
    CreateWatchlistParams(name="some example string", people=[WatchlistPerson()], companies=[WatchlistCompany()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWatchlistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWatchlistParams](perigon/models/create_watchlist_params.py) \| [CreateWatchlistParamsDict](perigon/models/create_watchlist_params.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WatchlistResult](perigon/models/watchlist_result.py), [CreateWatchlistErrorBody](perigon/errors/create_watchlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistResult](perigon/models/watchlist_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[CreateWatchlistErrorBody](perigon/errors/create_watchlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_watchlist(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistResult, DeleteWatchlistErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it is attached to active monitors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.delete_watchlist(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWatchlistErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.delete_watchlist(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWatchlistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WatchlistResult](perigon/models/watchlist_result.py), [DeleteWatchlistErrorBody](perigon/errors/delete_watchlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistResult](perigon/models/watchlist_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[DeleteWatchlistErrorBody](perigon/errors/delete_watchlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_watchlist(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistResult, GetWatchlistErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.get_watchlist(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWatchlistErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.get_watchlist(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWatchlistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WatchlistResult](perigon/models/watchlist_result.py), [GetWatchlistErrorBody](perigon/errors/get_watchlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistResult](perigon/models/watchlist_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[GetWatchlistErrorBody](perigon/errors/get_watchlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_watchlists(sort_by: WatchlistSortByOrStr, sort_order: SortOrderOrStr, *, name: str | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistListResult, ListWatchlistsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List watchlists owned by the organization associated with the API key, as well as publicly visible watchlists. Supports filtering by name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.list_watchlists(WatchlistSortBy.ID, SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWatchlistsErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.list_watchlists(WatchlistSortBy.ID, SortOrder.ASC)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistListResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWatchlistsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>[WatchlistSortByOrStr](perigon/models/enums/watchlist_sort_by.py)</code> | Value sent with the request. |
| <code>sort_order</code> | <code>[SortOrderOrStr](perigon/models/enums/sort_order.py)</code> | Required direction used to sort results. Accepts asc or desc. |
| <code>name</code> | <code>str \| None</code> | Filter watchlists by name (case-insensitive, partial match)<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Zero-based page number to retrieve. Defaults to 0.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Number of results per page. Must be between 1 and 100; defaults to 10.<br>**Default**: <code>10</code> |
| <code>nulls</code> | <code>[NullsOrStr](perigon/models/enums/nulls.py) \| None</code> | Placement of null values in sorted results. Accepts first or last.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WatchlistListResult](perigon/models/watchlist_list_result.py), [ListWatchlistsErrorBody](perigon/errors/list_watchlists_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistListResult](perigon/models/watchlist_list_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ListWatchlistsErrorBody](perigon/errors/list_watchlists_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resolve_watchlists(*, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistResolveResult, ResolveWatchlistsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists, otherwise falls back to the matching public watchlist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.resolve_watchlists()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResolveResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResolveWatchlistsErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.resolve_watchlists()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResolveResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResolveWatchlistsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>list&#91;str&#93; \| None</code> | Watchlist names to resolve (max 100)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WatchlistResolveResult](perigon/models/watchlist_resolve_result.py), [ResolveWatchlistsErrorBody](perigon/errors/resolve_watchlists_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistResolveResult](perigon/models/watchlist_resolve_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[ResolveWatchlistsErrorBody](perigon/errors/resolve_watchlists_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_watchlist(id_: int, body: UpdateWatchlistParams | UpdateWatchlistParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistResult, UpdateWatchlistErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a watchlist owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.update_watchlist(1, UpdateWatchlistParams())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWatchlistErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.update_watchlist(1, UpdateWatchlistParams())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWatchlistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateWatchlistParams](perigon/models/update_watchlist_params.py) \| [UpdateWatchlistParamsDict](perigon/models/update_watchlist_params.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WatchlistResult](perigon/models/watchlist_result.py), [UpdateWatchlistErrorBody](perigon/errors/update_watchlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistResult](perigon/models/watchlist_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[UpdateWatchlistErrorBody](perigon/errors/update_watchlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Wikipedia

> Source: [Wikipedia](perigon/apis/wikipedia.py)

<details>
<summary><code>def search_wikipedia(*, q: str | None = None, title: str | None = None, summary: str | None = None, text: str | None = None, reference: str | None = None, id_: list[str] | None = None, wiki_page_id: list[int] | None = None, wiki_revision_id: list[int] | None = None, wiki_code: list[str] | None = None, wiki_namespace: list[int] | None = None, wikidata_id: list[str] | None = None, wikidata_instance_of_id: list[str] | None = None, wikidata_instance_of_label: list[str] | None = None, category: list[str] | None = None, section_id: list[str] | None = None, wiki_revision_from: RFC3339DateTime | None = None, wiki_revision_to: RFC3339DateTime | None = None, scraped_at_from: RFC3339DateTime | None = None, scraped_at_to: RFC3339DateTime | None = None, pageviews_from: int | None = None, pageviews_to: int | None = None, with_pageviews: bool | None = None, show_num_results: bool | None = None, page: int | None = None, size: int | None = None, sort_by: SortByPerigonWikipediaApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WikipediaSearchResult, SearchWikipediaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual pages that were matched to your specific criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.wikipedia.with_raw_response.search_wikipedia()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WikipediaSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchWikipediaErrorBody
```

**Async**

```python
result = await async_client.wikipedia.with_raw_response.search_wikipedia()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WikipediaSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchWikipediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | String. Primary search query for filtering pages based on their title, summary, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.<br>**Default**: <code>None</code> |
| <code>title</code> | <code>str \| None</code> | String. Search specifically within page titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.<br>**Default**: <code>None</code> |
| <code>summary</code> | <code>str \| None</code> | String. Search specifically within page summary. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.<br>**Default**: <code>None</code> |
| <code>text</code> | <code>str \| None</code> | String. Search specifically within the page's content (across all sections). Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.<br>**Default**: <code>None</code> |
| <code>reference</code> | <code>str \| None</code> | String. Search specifically across page's references. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided to return a collection of specific pages.<br>**Default**: <code>None</code> |
| <code>wiki_page_id</code> | <code>list&#91;int&#93; \| None</code> | Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only in a combination with `wikiCode` parameter. Multiple IDs can be provided to return a collection of specific pages.<br>**Default**: <code>None</code> |
| <code>wiki_revision_id</code> | <code>list&#91;int&#93; \| None</code> | Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are unique only in a combination with `wikiCode` parameter. Multiple IDs can be provided to return a collection of specific pages. This ID changes each time a page is edited.<br>**Default**: <code>None</code> |
| <code>wiki_code</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted value is `enwiki`.<br>**Default**: <code>None</code> |
| <code>wiki_namespace</code> | <code>list&#91;int&#93; \| None</code> | Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main namespace (0) is available.<br>**Default**: <code>None</code> |
| <code>wikidata_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve pages by the ids corresponding to their Wikidata entities.<br>**Default**: <code>None</code> |
| <code>wikidata_instance_of_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve all pages whose Wikidata entities are instances of these provided ids.<br>**Default**: <code>None</code> |
| <code>wikidata_instance_of_label</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve all pages whose Wikidata entities are instances of these ids (provided as labels).<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve all pages for specified categories.<br>**Default**: <code>None</code> |
| <code>section_id</code> | <code>list&#91;str&#93; \| None</code> | String Array. Retrieve pages containing provided section ids. Each section ID is unique.<br>**Default**: <code>None</code> |
| <code>wiki_revision_from</code> | <code>RFC3339DateTime \| None</code> | Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>wiki_revision_to</code> | <code>RFC3339DateTime \| None</code> | Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>scraped_at_from</code> | <code>RFC3339DateTime \| None</code> | Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>scraped_at_to</code> | <code>RFC3339DateTime \| None</code> | Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.<br>**Default**: <code>None</code> |
| <code>pageviews_from</code> | <code>int \| None</code> | Integer. Retrieve pages with the average number of views per day higher than the provided value.<br>**Default**: <code>None</code> |
| <code>pageviews_to</code> | <code>int \| None</code> | Integer. Retrieve pages with the average number of views per day lower than the provided value.<br>**Default**: <code>None</code> |
| <code>with_pageviews</code> | <code>bool \| None</code> | Boolean. Retrieve pages that have any viewership statistics available for them. If `false` (the default) - return all pages.<br>**Default**: <code>None</code> |
| <code>show_num_results</code> | <code>bool \| None</code> | Boolean. Whether to show the total number of all matched pages. Default value is false which makes queries a bit more efficient but also counts up to 10000 pages.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Integer. The specific page of results to retrieve in the paginated response. Starts at 0.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Integer. The number of articles to return per page in the paginated response.<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByPerigonWikipediaApiOrStr](perigon/models/enums/sort_by_perigon_wikipedia_api.py) \| None</code> | String. Determines the Wikipedia page sorting order. Options include relevance (default), revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first), scrapedAtAsc (recently scraped last).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WikipediaSearchResult](perigon/models/wikipedia_search_result.py), [SearchWikipediaErrorBody](perigon/errors/search_wikipedia_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WikipediaSearchResult](perigon/models/wikipedia_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[SearchWikipediaErrorBody](perigon/errors/search_wikipedia_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vector_search_wikipedia(body: WikipediaSearchParams | WikipediaSearchParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WikipediaVectorSearchResult, VectorSearchWikipediaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list of page sections most closely matched to your query intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.wikipedia.with_raw_response.vector_search_wikipedia(WikipediaSearchParams(prompt="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WikipediaVectorSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VectorSearchWikipediaErrorBody
```

**Async**

```python
result = await async_client.wikipedia.with_raw_response.vector_search_wikipedia(
    WikipediaSearchParams(prompt="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WikipediaVectorSearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VectorSearchWikipediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WikipediaSearchParams](perigon/models/wikipedia_search_params.py) \| [WikipediaSearchParamsDict](perigon/models/wikipedia_search_params.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](perigon/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](perigon/core/results.py)&#91;[WikipediaVectorSearchResult](perigon/models/wikipedia_vector_search_result.py), [VectorSearchWikipediaErrorBody](perigon/errors/vector_search_wikipedia_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WikipediaVectorSearchResult](perigon/models/wikipedia_vector_search_result.py)</code> -- 200 - Success

**On `Failure`**: `error` is <code>[VectorSearchWikipediaErrorBody](perigon/errors/vector_search_wikipedia_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](perigon/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](perigon/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

