from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.search_summarizer_error import SearchSummarizerErrorBody, search_summarizer_error_mapper
from ..models.enums.all_endpoint_sort_by import AllEndpointSortByOrStr
from ..models.summary_body import SummaryBody, SummaryBodyDict
from ..models.summary_search_result import SummarySearchResult
from ..server.server import Server


class AiAdvancedSearch:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AiAdvancedSearchWithRawResponse(client, server, auth)

    def search_summarizer(
        self,
        body: SummaryBody | SummaryBodyDict,
        *,
        q: str | None = None,
        title: str | None = None,
        desc: str | None = None,
        content: str | None = None,
        summary: str | None = None,
        url: str | None = None,
        article_id: list[str] | None = None,
        cluster_id: list[str] | None = None,
        sort_by: AllEndpointSortByOrStr | None = None,
        page: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        add_date_from: RFC3339DateTime | None = None,
        add_date_to: RFC3339DateTime | None = None,
        refresh_date_from: RFC3339DateTime | None = None,
        refresh_date_to: RFC3339DateTime | None = None,
        medium: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        exclude_source_group: list[str] | None = None,
        exclude_source: list[str] | None = None,
        watchlist: list[str] | None = None,
        exclude_watchlist: list[str] | None = None,
        paywall: bool | None = None,
        byline: list[str] | None = None,
        author: list[str] | None = None,
        exclude_author: list[str] | None = None,
        journalist_id: list[str] | None = None,
        exclude_journalist_id: list[str] | None = None,
        language: list[str] | None = None,
        exclude_language: list[str] | None = None,
        search_translation: bool | None = None,
        label: list[str] | None = None,
        exclude_label: list[str] | None = None,
        category: list[str] | None = None,
        exclude_category: list[str] | None = None,
        topic: list[str] | None = None,
        exclude_topic: list[str] | None = None,
        link_to: str | None = None,
        show_reprints: bool | None = None,
        reprint_group_id: str | None = None,
        city: list[str] | None = None,
        exclude_city: list[str] | None = None,
        area: list[str] | None = None,
        state: list[str] | None = None,
        exclude_state: list[str] | None = None,
        county: list[str] | None = None,
        exclude_county: list[str] | None = None,
        locations_country: list[str] | None = None,
        country: list[str] | None = None,
        exclude_locations_country: list[str] | None = None,
        location: list[str] | None = None,
        lat: float | None = None,
        lon: float | None = None,
        max_distance: float | None = None,
        source_city: list[str] | None = None,
        exclude_source_city: list[str] | None = None,
        source_county: list[str] | None = None,
        exclude_source_county: list[str] | None = None,
        source_country: list[str] | None = None,
        exclude_source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        exclude_source_state: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        person_wikidata_id: list[str] | None = None,
        exclude_person_wikidata_id: list[str] | None = None,
        person_name: list[str] | None = None,
        exclude_person_name: list[str] | None = None,
        company_id: list[str] | None = None,
        exclude_company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        exclude_company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        exclude_company_isin: list[str] | None = None,
        exclude_company_symbol_isin: list[str] | None = None,
        exclude_company_symbol: list[str] | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        taxonomy: list[str] | None = None,
        prefix_taxonomy: str | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SummarySearchResult:
        """Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and
        summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters
        such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting
        options are ignored.

        Args:
            body: The request body.
            q: String. Primary search query for filtering articles based on their title, description, and content.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            title: String. Search specifically within article headlines/titles. Supports Boolean operators, exact
                phrases with quotes, and wildcards for matching title variations.
            desc: String. Search within article description fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            content: String. Search within the full article body content. Supports Boolean logic, exact phrase matching
                with quotes, and wildcards for comprehensive content searching.
            summary: String. Search within article summary fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            url: String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying
                certain website sections, e.g. source=cnn.com&url=travel.
            article_id: String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs
                can be provided to return a collection of specific articles.
            cluster_id: String Array. Filter results to only show content within a specific related content cluster.
                Returns articles grouped together as part of Perigon Stories based on topic relevance.
            sort_by: String. Determines the article sorting order. Options include relevance (default), date/pubDate
                (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion
                date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in
                system first, often identical to addDate).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            from_: Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            to: Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g.,
                2022-02-01T23:59:59) or yyyy-mm-dd format.
            add_date_from: Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            add_date_to: Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            refresh_date_from: Date. Filter for articles refreshed/updated in Perigon's system after this date. In most
                cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            refresh_date_to: Date. Filter for articles refreshed/updated in Perigon's system before this date. In most
                cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            medium: String Array. Filter articles by their primary medium type. Accepts Article for written content or
                Video for video-based stories. Multiple values create an OR filter.
            source: String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            source_group: String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100,
                top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.
            exclude_source_group: String Array. Exclude articles from specified Perigon source groups. Multiple values
                create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g.,
                top10, top100).
            exclude_source: String Array. Exclude articles from specific publisher domains or subdomains. Supports
                wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude
                filter.
            watchlist: String Array. Filter articles using watchlists of people and companies. Multiple values create an
                OR filter to include articles mentioning any entity from the specified watchlists.
            exclude_watchlist: String Array. Exclude articles mentioning entities from specified watchlists. Multiple
                values create an AND-exclude filter, removing content mentioning any entity from the specified
                watchlists.
            paywall: Boolean. Filter to show only results where the source has a paywall (true) or does not have a
                paywall (false).
            byline: String Array. Filter articles by author bylines. Works as an exact match for each author name
                provided. Multiple values create an OR filter to find articles by any of the specified authors.
            author: String Array. Filter articles by specific author names. Works as an exact match for each name.
                Multiple values create an OR filter to find articles by any of the specified authors.
            exclude_author: String Array. Exclude articles written by specific authors. Any article with an author name
                matching an entry in this list will be omitted from results. Multiple values create an AND-exclude
                filter.
            journalist_id: String Array. Filter by unique journalist identifiers which can be found through the
                Journalist API or in the matchedAuthors field. Multiple values create an OR filter.
            exclude_journalist_id: String Array. Exclude articles written by specific journalists identified by their
                unique IDs. Multiple values create an AND-exclude filter.
            language: String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr).
                Multiple values create an OR filter.
            exclude_language: String Array. Exclude articles in specific languages using ISO-639 two-letter codes.
                Multiple values create an AND-exclude filter.
            search_translation: Boolean. Expand search to include translated content fields for non-English articles.
                When true, searches translated title, description, and content fields.
            label: String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check,
                or Press Release. Multiple values create an OR filter.
            exclude_label: String Array. Exclude articles with specific editorial labels. Multiple values create an
                AND-exclude filter, removing all content with any of these labels.
            category: String Array. Filter by categories. Categories are general themes that the article is about.
                Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as
                OR operations. Use 'none' to search uncategorized articles.
            exclude_category: String Array. Exclude articles with specific categories. Multiple values create an
                AND-exclude filter, removing all content with any of these categories.
            topic: String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports.
                Topics are more granular than categories, and articles can have multiple topics. Use the /topics
                endpoint for a complete list of available topics. Multiple values create an OR filter.
            exclude_topic: String Array. Exclude articles with specific topics. Multiple values create an AND-exclude
                filter, removing all content with any of these topics.
            link_to: String. Returns only articles that contain links to the specified URL pattern. Matches against the
                'links' field in article responses.
            show_reprints: Boolean. Controls whether to include reprinted content in results. When true (default), shows
                syndicated articles from wire services like AP or Reuters that appear on multiple sites.
            reprint_group_id: String. Returns all articles in a specific reprint group, including the original article
                and all its known reprints. Use when you want to see all versions of the same content.
            city: String Array. Filters articles where a specified city plays a central role in the content, beyond mere
                mentions, to ensure the results are deeply relevant to the urban area in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_city: String Array. A list of cities to exclude from the results. Articles that are associated with
                any of the specified cities will be filtered out.
            area: String Array. Filters articles where a specified area, such as a neighborhood, borough, or district,
                plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to
                the area in question. If multiple parameters are passed, they will be applied as OR operations.
            state: String Array. Filters articles where a specified state plays a central role in the content, beyond
                mere mentions, to ensure the results are deeply relevant to the state in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_state: String Array. A list of states to exclude. Articles that include, or are associated with, any
                of the states provided here will be filtered out. This is especially useful if you want to ignore news
                tied to certain geographical areas (e.g., US states).
            county: String Array. A list of counties to include (or specify) in the search results. This field filters
                the returned articles based on the county associated with the event or news. Only articles tagged with
                one of these counties will be included.
            exclude_county: String Array. Excludes articles from specific counties or administrative divisions in the
                search results. Accepts either a single county name or a list of county names. County names should match
                the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows
                for more granular geographic filter
            locations_country: String Array. Filters articles where a specified country plays a central role in the
                content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If
                multiple parameters are passed, they will be applied as OR operations.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            exclude_locations_country: String Array. Excludes articles where a specified country plays a central role in
                the content, ensuring results are not deeply relevant to the country in question. If multiple parameters
                are passed, they will be applied as AND operations, excluding articles relevant to any of the specified
                countries.
            location: String Array. Return all articles that have the specified location. Location attributes are
                delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.
            lat: Float. Latitude of the center point to search places
            lon: Float. Longitude of the center point to search places
            max_distance: Float. Maximum distance (in km) from starting point to search articles by tagged places
            source_city: String Array. Find articles published by sources that are located within a given city.
            exclude_source_city: String Array. Excludes articles published by sources that are located within the
                specified cities.
            source_county: String Array. Find articles published by sources that are located within a given county.
            exclude_source_county: String Array. Excludes articles published by sources that are located within the
                specified counties.
            source_country: String Array. Find articles published by sources that are located within a given country.
                Must be 2 character country code (i.e. us, gb, etc).
            exclude_source_country: String Array. Excludes articles published by sources that are located within the
                specified countries. Must be 2 character country codes (e.g., us, gb).
            source_state: String Array. Find articles published by sources that are located within a given state.
            exclude_source_state: String Array. Excludes articles published by sources that are located within the
                specified states.
            source_lat: Float. Latitude of the center point to search articles created by local publications.
            source_lon: Float. Longitude of the center point to search articles created by local publications.
            source_max_distance: Float. Maximum distance from starting point to search articles created by local
                publications.
            person_wikidata_id: String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people
                endpoint for a complete list of tracked individuals.
            exclude_person_wikidata_id: String Array. Exclude articles mentioning people with specific Wikidata IDs.
                Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to
                avoid name ambiguity.
            person_name: String Array. Filter articles by exact person name matches. Does not support Boolean or complex
                logic. For available person entities, consult the /people endpoint.
            exclude_person_name: String Array. Exclude articles mentioning specific people by name. Creates an
                AND-exclude filter to remove content about these individuals.
            company_id: String Array. Filter articles by company identifiers. For a complete list of tracked companies,
                refer to the /companies endpoint.
            exclude_company_id: String Array. Exclude articles mentioning companies with specific identifiers. Creates
                an AND-exclude filter to remove content about these corporate entities.
            company_name: String. Filter articles by company name mentions. Performs an exact match on company names.
            company_domain: String Array. Filter articles by company domains (e.g., apple.com). For available company
                entities, consult the /companies endpoint.
            exclude_company_domain: String Array. Exclude articles related to companies with specific domains. Creates
                an AND-exclude filter to remove content about these companies.
            company_symbol: String Array. Filter articles by company stock symbols. For available company entities and
                their symbols, consult the /companies endpoint.
            company_isin: String Array. Filter articles by company ISIN codes (International Securities Identification
                Numbers). For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin).
                Distinct from companyIsin, which matches the company-level ISIN. For available company entities and
                their listing ISINs, consult the /companies endpoint.
            exclude_company_isin: String Array. Exclude articles related to companies with specific ISIN codes. Creates
                an AND-exclude filter to remove content about these companies. For available company entities and their
                ISINs, consult the /companies endpoint.
            exclude_company_symbol_isin: String Array. Exclude articles related to companies whose ticker listings have
                these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN.
                For available company entities and their listing ISINs, consult the /companies endpoint.
            exclude_company_symbol: String Array. A list of stock symbols (ticker symbols) that identify companies to be
                excluded. Articles related to companies using any of these symbols will be omitted, which is useful for
                targeting or avoiding specific public companies.
            positive_sentiment_from: Float. Filter articles with a positive sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Float. Filter articles with a positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Float. Filter articles with a neutral sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Float. Filter articles with a neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Float. Filter articles with a negative sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Float. Filter articles with a negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            taxonomy: String Array. Filters by Google Content Categories. This field will accept 1 or more categories,
                must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other,
                /Finance/Investing/Funds. `Full list
                <https://docs.cloud.google.com/natural-language/docs/categories#version_2>`__
            prefix_taxonomy: String. Filters by Google Content Categories. This field will filter by the category prefix
                only. Example: prefixTaxonomy=/Finance
            show_highlighting: Boolean. When set to true, enables text highlighting in search results.
            highlight_fragment_size: Integer. Specifies the size in characters of each highlighted text fragment.
                Defaults to 100 if not specified.
            highlight_num_fragments: Integer. Controls the maximum number of highlighted fragments to return per field.
            highlight_pre_tag: String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if
                not specified.
            highlight_post_tag: String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if
                not specified.
            highlight_q: String. Specifies a separate query for highlighting, allowing highlights based on terms
                different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable
                OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_summarizer(
                body,
                q=q,
                title=title,
                desc=desc,
                content=content,
                summary=summary,
                url=url,
                article_id=article_id,
                cluster_id=cluster_id,
                sort_by=sort_by,
                page=page,
                from_=from_,
                to=to,
                add_date_from=add_date_from,
                add_date_to=add_date_to,
                refresh_date_from=refresh_date_from,
                refresh_date_to=refresh_date_to,
                medium=medium,
                source=source,
                source_group=source_group,
                exclude_source_group=exclude_source_group,
                exclude_source=exclude_source,
                watchlist=watchlist,
                exclude_watchlist=exclude_watchlist,
                paywall=paywall,
                byline=byline,
                author=author,
                exclude_author=exclude_author,
                journalist_id=journalist_id,
                exclude_journalist_id=exclude_journalist_id,
                language=language,
                exclude_language=exclude_language,
                search_translation=search_translation,
                label=label,
                exclude_label=exclude_label,
                category=category,
                exclude_category=exclude_category,
                topic=topic,
                exclude_topic=exclude_topic,
                link_to=link_to,
                show_reprints=show_reprints,
                reprint_group_id=reprint_group_id,
                city=city,
                exclude_city=exclude_city,
                area=area,
                state=state,
                exclude_state=exclude_state,
                county=county,
                exclude_county=exclude_county,
                locations_country=locations_country,
                country=country,
                exclude_locations_country=exclude_locations_country,
                location=location,
                lat=lat,
                lon=lon,
                max_distance=max_distance,
                source_city=source_city,
                exclude_source_city=exclude_source_city,
                source_county=source_county,
                exclude_source_county=exclude_source_county,
                source_country=source_country,
                exclude_source_country=exclude_source_country,
                source_state=source_state,
                exclude_source_state=exclude_source_state,
                source_lat=source_lat,
                source_lon=source_lon,
                source_max_distance=source_max_distance,
                person_wikidata_id=person_wikidata_id,
                exclude_person_wikidata_id=exclude_person_wikidata_id,
                person_name=person_name,
                exclude_person_name=exclude_person_name,
                company_id=company_id,
                exclude_company_id=exclude_company_id,
                company_name=company_name,
                company_domain=company_domain,
                exclude_company_domain=exclude_company_domain,
                company_symbol=company_symbol,
                company_isin=company_isin,
                company_symbol_isin=company_symbol_isin,
                exclude_company_isin=exclude_company_isin,
                exclude_company_symbol_isin=exclude_company_symbol_isin,
                exclude_company_symbol=exclude_company_symbol,
                positive_sentiment_from=positive_sentiment_from,
                positive_sentiment_to=positive_sentiment_to,
                neutral_sentiment_from=neutral_sentiment_from,
                neutral_sentiment_to=neutral_sentiment_to,
                negative_sentiment_from=negative_sentiment_from,
                negative_sentiment_to=negative_sentiment_to,
                taxonomy=taxonomy,
                prefix_taxonomy=prefix_taxonomy,
                show_highlighting=show_highlighting,
                highlight_fragment_size=highlight_fragment_size,
                highlight_num_fragments=highlight_num_fragments,
                highlight_pre_tag=highlight_pre_tag,
                highlight_post_tag=highlight_post_tag,
                highlight_q=highlight_q,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AiAdvancedSearchWithRawResponse:
        return self._with_raw_response


class AsyncAiAdvancedSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAiAdvancedSearchWithRawResponse(client, server, auth)

    async def search_summarizer(
        self,
        body: SummaryBody | SummaryBodyDict,
        *,
        q: str | None = None,
        title: str | None = None,
        desc: str | None = None,
        content: str | None = None,
        summary: str | None = None,
        url: str | None = None,
        article_id: list[str] | None = None,
        cluster_id: list[str] | None = None,
        sort_by: AllEndpointSortByOrStr | None = None,
        page: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        add_date_from: RFC3339DateTime | None = None,
        add_date_to: RFC3339DateTime | None = None,
        refresh_date_from: RFC3339DateTime | None = None,
        refresh_date_to: RFC3339DateTime | None = None,
        medium: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        exclude_source_group: list[str] | None = None,
        exclude_source: list[str] | None = None,
        watchlist: list[str] | None = None,
        exclude_watchlist: list[str] | None = None,
        paywall: bool | None = None,
        byline: list[str] | None = None,
        author: list[str] | None = None,
        exclude_author: list[str] | None = None,
        journalist_id: list[str] | None = None,
        exclude_journalist_id: list[str] | None = None,
        language: list[str] | None = None,
        exclude_language: list[str] | None = None,
        search_translation: bool | None = None,
        label: list[str] | None = None,
        exclude_label: list[str] | None = None,
        category: list[str] | None = None,
        exclude_category: list[str] | None = None,
        topic: list[str] | None = None,
        exclude_topic: list[str] | None = None,
        link_to: str | None = None,
        show_reprints: bool | None = None,
        reprint_group_id: str | None = None,
        city: list[str] | None = None,
        exclude_city: list[str] | None = None,
        area: list[str] | None = None,
        state: list[str] | None = None,
        exclude_state: list[str] | None = None,
        county: list[str] | None = None,
        exclude_county: list[str] | None = None,
        locations_country: list[str] | None = None,
        country: list[str] | None = None,
        exclude_locations_country: list[str] | None = None,
        location: list[str] | None = None,
        lat: float | None = None,
        lon: float | None = None,
        max_distance: float | None = None,
        source_city: list[str] | None = None,
        exclude_source_city: list[str] | None = None,
        source_county: list[str] | None = None,
        exclude_source_county: list[str] | None = None,
        source_country: list[str] | None = None,
        exclude_source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        exclude_source_state: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        person_wikidata_id: list[str] | None = None,
        exclude_person_wikidata_id: list[str] | None = None,
        person_name: list[str] | None = None,
        exclude_person_name: list[str] | None = None,
        company_id: list[str] | None = None,
        exclude_company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        exclude_company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        exclude_company_isin: list[str] | None = None,
        exclude_company_symbol_isin: list[str] | None = None,
        exclude_company_symbol: list[str] | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        taxonomy: list[str] | None = None,
        prefix_taxonomy: str | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SummarySearchResult:
        """Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and
        summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters
        such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting
        options are ignored.

        Args:
            body: The request body.
            q: String. Primary search query for filtering articles based on their title, description, and content.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            title: String. Search specifically within article headlines/titles. Supports Boolean operators, exact
                phrases with quotes, and wildcards for matching title variations.
            desc: String. Search within article description fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            content: String. Search within the full article body content. Supports Boolean logic, exact phrase matching
                with quotes, and wildcards for comprehensive content searching.
            summary: String. Search within article summary fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            url: String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying
                certain website sections, e.g. source=cnn.com&url=travel.
            article_id: String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs
                can be provided to return a collection of specific articles.
            cluster_id: String Array. Filter results to only show content within a specific related content cluster.
                Returns articles grouped together as part of Perigon Stories based on topic relevance.
            sort_by: String. Determines the article sorting order. Options include relevance (default), date/pubDate
                (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion
                date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in
                system first, often identical to addDate).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            from_: Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            to: Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g.,
                2022-02-01T23:59:59) or yyyy-mm-dd format.
            add_date_from: Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            add_date_to: Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            refresh_date_from: Date. Filter for articles refreshed/updated in Perigon's system after this date. In most
                cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            refresh_date_to: Date. Filter for articles refreshed/updated in Perigon's system before this date. In most
                cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            medium: String Array. Filter articles by their primary medium type. Accepts Article for written content or
                Video for video-based stories. Multiple values create an OR filter.
            source: String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            source_group: String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100,
                top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.
            exclude_source_group: String Array. Exclude articles from specified Perigon source groups. Multiple values
                create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g.,
                top10, top100).
            exclude_source: String Array. Exclude articles from specific publisher domains or subdomains. Supports
                wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude
                filter.
            watchlist: String Array. Filter articles using watchlists of people and companies. Multiple values create an
                OR filter to include articles mentioning any entity from the specified watchlists.
            exclude_watchlist: String Array. Exclude articles mentioning entities from specified watchlists. Multiple
                values create an AND-exclude filter, removing content mentioning any entity from the specified
                watchlists.
            paywall: Boolean. Filter to show only results where the source has a paywall (true) or does not have a
                paywall (false).
            byline: String Array. Filter articles by author bylines. Works as an exact match for each author name
                provided. Multiple values create an OR filter to find articles by any of the specified authors.
            author: String Array. Filter articles by specific author names. Works as an exact match for each name.
                Multiple values create an OR filter to find articles by any of the specified authors.
            exclude_author: String Array. Exclude articles written by specific authors. Any article with an author name
                matching an entry in this list will be omitted from results. Multiple values create an AND-exclude
                filter.
            journalist_id: String Array. Filter by unique journalist identifiers which can be found through the
                Journalist API or in the matchedAuthors field. Multiple values create an OR filter.
            exclude_journalist_id: String Array. Exclude articles written by specific journalists identified by their
                unique IDs. Multiple values create an AND-exclude filter.
            language: String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr).
                Multiple values create an OR filter.
            exclude_language: String Array. Exclude articles in specific languages using ISO-639 two-letter codes.
                Multiple values create an AND-exclude filter.
            search_translation: Boolean. Expand search to include translated content fields for non-English articles.
                When true, searches translated title, description, and content fields.
            label: String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check,
                or Press Release. Multiple values create an OR filter.
            exclude_label: String Array. Exclude articles with specific editorial labels. Multiple values create an
                AND-exclude filter, removing all content with any of these labels.
            category: String Array. Filter by categories. Categories are general themes that the article is about.
                Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as
                OR operations. Use 'none' to search uncategorized articles.
            exclude_category: String Array. Exclude articles with specific categories. Multiple values create an
                AND-exclude filter, removing all content with any of these categories.
            topic: String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports.
                Topics are more granular than categories, and articles can have multiple topics. Use the /topics
                endpoint for a complete list of available topics. Multiple values create an OR filter.
            exclude_topic: String Array. Exclude articles with specific topics. Multiple values create an AND-exclude
                filter, removing all content with any of these topics.
            link_to: String. Returns only articles that contain links to the specified URL pattern. Matches against the
                'links' field in article responses.
            show_reprints: Boolean. Controls whether to include reprinted content in results. When true (default), shows
                syndicated articles from wire services like AP or Reuters that appear on multiple sites.
            reprint_group_id: String. Returns all articles in a specific reprint group, including the original article
                and all its known reprints. Use when you want to see all versions of the same content.
            city: String Array. Filters articles where a specified city plays a central role in the content, beyond mere
                mentions, to ensure the results are deeply relevant to the urban area in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_city: String Array. A list of cities to exclude from the results. Articles that are associated with
                any of the specified cities will be filtered out.
            area: String Array. Filters articles where a specified area, such as a neighborhood, borough, or district,
                plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to
                the area in question. If multiple parameters are passed, they will be applied as OR operations.
            state: String Array. Filters articles where a specified state plays a central role in the content, beyond
                mere mentions, to ensure the results are deeply relevant to the state in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_state: String Array. A list of states to exclude. Articles that include, or are associated with, any
                of the states provided here will be filtered out. This is especially useful if you want to ignore news
                tied to certain geographical areas (e.g., US states).
            county: String Array. A list of counties to include (or specify) in the search results. This field filters
                the returned articles based on the county associated with the event or news. Only articles tagged with
                one of these counties will be included.
            exclude_county: String Array. Excludes articles from specific counties or administrative divisions in the
                search results. Accepts either a single county name or a list of county names. County names should match
                the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows
                for more granular geographic filter
            locations_country: String Array. Filters articles where a specified country plays a central role in the
                content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If
                multiple parameters are passed, they will be applied as OR operations.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            exclude_locations_country: String Array. Excludes articles where a specified country plays a central role in
                the content, ensuring results are not deeply relevant to the country in question. If multiple parameters
                are passed, they will be applied as AND operations, excluding articles relevant to any of the specified
                countries.
            location: String Array. Return all articles that have the specified location. Location attributes are
                delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.
            lat: Float. Latitude of the center point to search places
            lon: Float. Longitude of the center point to search places
            max_distance: Float. Maximum distance (in km) from starting point to search articles by tagged places
            source_city: String Array. Find articles published by sources that are located within a given city.
            exclude_source_city: String Array. Excludes articles published by sources that are located within the
                specified cities.
            source_county: String Array. Find articles published by sources that are located within a given county.
            exclude_source_county: String Array. Excludes articles published by sources that are located within the
                specified counties.
            source_country: String Array. Find articles published by sources that are located within a given country.
                Must be 2 character country code (i.e. us, gb, etc).
            exclude_source_country: String Array. Excludes articles published by sources that are located within the
                specified countries. Must be 2 character country codes (e.g., us, gb).
            source_state: String Array. Find articles published by sources that are located within a given state.
            exclude_source_state: String Array. Excludes articles published by sources that are located within the
                specified states.
            source_lat: Float. Latitude of the center point to search articles created by local publications.
            source_lon: Float. Longitude of the center point to search articles created by local publications.
            source_max_distance: Float. Maximum distance from starting point to search articles created by local
                publications.
            person_wikidata_id: String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people
                endpoint for a complete list of tracked individuals.
            exclude_person_wikidata_id: String Array. Exclude articles mentioning people with specific Wikidata IDs.
                Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to
                avoid name ambiguity.
            person_name: String Array. Filter articles by exact person name matches. Does not support Boolean or complex
                logic. For available person entities, consult the /people endpoint.
            exclude_person_name: String Array. Exclude articles mentioning specific people by name. Creates an
                AND-exclude filter to remove content about these individuals.
            company_id: String Array. Filter articles by company identifiers. For a complete list of tracked companies,
                refer to the /companies endpoint.
            exclude_company_id: String Array. Exclude articles mentioning companies with specific identifiers. Creates
                an AND-exclude filter to remove content about these corporate entities.
            company_name: String. Filter articles by company name mentions. Performs an exact match on company names.
            company_domain: String Array. Filter articles by company domains (e.g., apple.com). For available company
                entities, consult the /companies endpoint.
            exclude_company_domain: String Array. Exclude articles related to companies with specific domains. Creates
                an AND-exclude filter to remove content about these companies.
            company_symbol: String Array. Filter articles by company stock symbols. For available company entities and
                their symbols, consult the /companies endpoint.
            company_isin: String Array. Filter articles by company ISIN codes (International Securities Identification
                Numbers). For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin).
                Distinct from companyIsin, which matches the company-level ISIN. For available company entities and
                their listing ISINs, consult the /companies endpoint.
            exclude_company_isin: String Array. Exclude articles related to companies with specific ISIN codes. Creates
                an AND-exclude filter to remove content about these companies. For available company entities and their
                ISINs, consult the /companies endpoint.
            exclude_company_symbol_isin: String Array. Exclude articles related to companies whose ticker listings have
                these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN.
                For available company entities and their listing ISINs, consult the /companies endpoint.
            exclude_company_symbol: String Array. A list of stock symbols (ticker symbols) that identify companies to be
                excluded. Articles related to companies using any of these symbols will be omitted, which is useful for
                targeting or avoiding specific public companies.
            positive_sentiment_from: Float. Filter articles with a positive sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Float. Filter articles with a positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Float. Filter articles with a neutral sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Float. Filter articles with a neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Float. Filter articles with a negative sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Float. Filter articles with a negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            taxonomy: String Array. Filters by Google Content Categories. This field will accept 1 or more categories,
                must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other,
                /Finance/Investing/Funds. `Full list
                <https://docs.cloud.google.com/natural-language/docs/categories#version_2>`__
            prefix_taxonomy: String. Filters by Google Content Categories. This field will filter by the category prefix
                only. Example: prefixTaxonomy=/Finance
            show_highlighting: Boolean. When set to true, enables text highlighting in search results.
            highlight_fragment_size: Integer. Specifies the size in characters of each highlighted text fragment.
                Defaults to 100 if not specified.
            highlight_num_fragments: Integer. Controls the maximum number of highlighted fragments to return per field.
            highlight_pre_tag: String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if
                not specified.
            highlight_post_tag: String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if
                not specified.
            highlight_q: String. Specifies a separate query for highlighting, allowing highlights based on terms
                different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable
                OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_summarizer(
                body,
                q=q,
                title=title,
                desc=desc,
                content=content,
                summary=summary,
                url=url,
                article_id=article_id,
                cluster_id=cluster_id,
                sort_by=sort_by,
                page=page,
                from_=from_,
                to=to,
                add_date_from=add_date_from,
                add_date_to=add_date_to,
                refresh_date_from=refresh_date_from,
                refresh_date_to=refresh_date_to,
                medium=medium,
                source=source,
                source_group=source_group,
                exclude_source_group=exclude_source_group,
                exclude_source=exclude_source,
                watchlist=watchlist,
                exclude_watchlist=exclude_watchlist,
                paywall=paywall,
                byline=byline,
                author=author,
                exclude_author=exclude_author,
                journalist_id=journalist_id,
                exclude_journalist_id=exclude_journalist_id,
                language=language,
                exclude_language=exclude_language,
                search_translation=search_translation,
                label=label,
                exclude_label=exclude_label,
                category=category,
                exclude_category=exclude_category,
                topic=topic,
                exclude_topic=exclude_topic,
                link_to=link_to,
                show_reprints=show_reprints,
                reprint_group_id=reprint_group_id,
                city=city,
                exclude_city=exclude_city,
                area=area,
                state=state,
                exclude_state=exclude_state,
                county=county,
                exclude_county=exclude_county,
                locations_country=locations_country,
                country=country,
                exclude_locations_country=exclude_locations_country,
                location=location,
                lat=lat,
                lon=lon,
                max_distance=max_distance,
                source_city=source_city,
                exclude_source_city=exclude_source_city,
                source_county=source_county,
                exclude_source_county=exclude_source_county,
                source_country=source_country,
                exclude_source_country=exclude_source_country,
                source_state=source_state,
                exclude_source_state=exclude_source_state,
                source_lat=source_lat,
                source_lon=source_lon,
                source_max_distance=source_max_distance,
                person_wikidata_id=person_wikidata_id,
                exclude_person_wikidata_id=exclude_person_wikidata_id,
                person_name=person_name,
                exclude_person_name=exclude_person_name,
                company_id=company_id,
                exclude_company_id=exclude_company_id,
                company_name=company_name,
                company_domain=company_domain,
                exclude_company_domain=exclude_company_domain,
                company_symbol=company_symbol,
                company_isin=company_isin,
                company_symbol_isin=company_symbol_isin,
                exclude_company_isin=exclude_company_isin,
                exclude_company_symbol_isin=exclude_company_symbol_isin,
                exclude_company_symbol=exclude_company_symbol,
                positive_sentiment_from=positive_sentiment_from,
                positive_sentiment_to=positive_sentiment_to,
                neutral_sentiment_from=neutral_sentiment_from,
                neutral_sentiment_to=neutral_sentiment_to,
                negative_sentiment_from=negative_sentiment_from,
                negative_sentiment_to=negative_sentiment_to,
                taxonomy=taxonomy,
                prefix_taxonomy=prefix_taxonomy,
                show_highlighting=show_highlighting,
                highlight_fragment_size=highlight_fragment_size,
                highlight_num_fragments=highlight_num_fragments,
                highlight_pre_tag=highlight_pre_tag,
                highlight_post_tag=highlight_post_tag,
                highlight_q=highlight_q,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAiAdvancedSearchWithRawResponse:
        return self._with_raw_response


class AiAdvancedSearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_summarizer(
        self,
        body: SummaryBody | SummaryBodyDict,
        *,
        q: str | None = None,
        title: str | None = None,
        desc: str | None = None,
        content: str | None = None,
        summary: str | None = None,
        url: str | None = None,
        article_id: list[str] | None = None,
        cluster_id: list[str] | None = None,
        sort_by: AllEndpointSortByOrStr | None = None,
        page: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        add_date_from: RFC3339DateTime | None = None,
        add_date_to: RFC3339DateTime | None = None,
        refresh_date_from: RFC3339DateTime | None = None,
        refresh_date_to: RFC3339DateTime | None = None,
        medium: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        exclude_source_group: list[str] | None = None,
        exclude_source: list[str] | None = None,
        watchlist: list[str] | None = None,
        exclude_watchlist: list[str] | None = None,
        paywall: bool | None = None,
        byline: list[str] | None = None,
        author: list[str] | None = None,
        exclude_author: list[str] | None = None,
        journalist_id: list[str] | None = None,
        exclude_journalist_id: list[str] | None = None,
        language: list[str] | None = None,
        exclude_language: list[str] | None = None,
        search_translation: bool | None = None,
        label: list[str] | None = None,
        exclude_label: list[str] | None = None,
        category: list[str] | None = None,
        exclude_category: list[str] | None = None,
        topic: list[str] | None = None,
        exclude_topic: list[str] | None = None,
        link_to: str | None = None,
        show_reprints: bool | None = None,
        reprint_group_id: str | None = None,
        city: list[str] | None = None,
        exclude_city: list[str] | None = None,
        area: list[str] | None = None,
        state: list[str] | None = None,
        exclude_state: list[str] | None = None,
        county: list[str] | None = None,
        exclude_county: list[str] | None = None,
        locations_country: list[str] | None = None,
        country: list[str] | None = None,
        exclude_locations_country: list[str] | None = None,
        location: list[str] | None = None,
        lat: float | None = None,
        lon: float | None = None,
        max_distance: float | None = None,
        source_city: list[str] | None = None,
        exclude_source_city: list[str] | None = None,
        source_county: list[str] | None = None,
        exclude_source_county: list[str] | None = None,
        source_country: list[str] | None = None,
        exclude_source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        exclude_source_state: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        person_wikidata_id: list[str] | None = None,
        exclude_person_wikidata_id: list[str] | None = None,
        person_name: list[str] | None = None,
        exclude_person_name: list[str] | None = None,
        company_id: list[str] | None = None,
        exclude_company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        exclude_company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        exclude_company_isin: list[str] | None = None,
        exclude_company_symbol_isin: list[str] | None = None,
        exclude_company_symbol: list[str] | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        taxonomy: list[str] | None = None,
        prefix_taxonomy: str | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SummarySearchResult, SearchSummarizerErrorBody]:
        """Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and
        summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters
        such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting
        options are ignored.

        Args:
            body: The request body.
            q: String. Primary search query for filtering articles based on their title, description, and content.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            title: String. Search specifically within article headlines/titles. Supports Boolean operators, exact
                phrases with quotes, and wildcards for matching title variations.
            desc: String. Search within article description fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            content: String. Search within the full article body content. Supports Boolean logic, exact phrase matching
                with quotes, and wildcards for comprehensive content searching.
            summary: String. Search within article summary fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            url: String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying
                certain website sections, e.g. source=cnn.com&url=travel.
            article_id: String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs
                can be provided to return a collection of specific articles.
            cluster_id: String Array. Filter results to only show content within a specific related content cluster.
                Returns articles grouped together as part of Perigon Stories based on topic relevance.
            sort_by: String. Determines the article sorting order. Options include relevance (default), date/pubDate
                (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion
                date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in
                system first, often identical to addDate).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            from_: Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            to: Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g.,
                2022-02-01T23:59:59) or yyyy-mm-dd format.
            add_date_from: Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            add_date_to: Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            refresh_date_from: Date. Filter for articles refreshed/updated in Perigon's system after this date. In most
                cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            refresh_date_to: Date. Filter for articles refreshed/updated in Perigon's system before this date. In most
                cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            medium: String Array. Filter articles by their primary medium type. Accepts Article for written content or
                Video for video-based stories. Multiple values create an OR filter.
            source: String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            source_group: String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100,
                top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.
            exclude_source_group: String Array. Exclude articles from specified Perigon source groups. Multiple values
                create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g.,
                top10, top100).
            exclude_source: String Array. Exclude articles from specific publisher domains or subdomains. Supports
                wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude
                filter.
            watchlist: String Array. Filter articles using watchlists of people and companies. Multiple values create an
                OR filter to include articles mentioning any entity from the specified watchlists.
            exclude_watchlist: String Array. Exclude articles mentioning entities from specified watchlists. Multiple
                values create an AND-exclude filter, removing content mentioning any entity from the specified
                watchlists.
            paywall: Boolean. Filter to show only results where the source has a paywall (true) or does not have a
                paywall (false).
            byline: String Array. Filter articles by author bylines. Works as an exact match for each author name
                provided. Multiple values create an OR filter to find articles by any of the specified authors.
            author: String Array. Filter articles by specific author names. Works as an exact match for each name.
                Multiple values create an OR filter to find articles by any of the specified authors.
            exclude_author: String Array. Exclude articles written by specific authors. Any article with an author name
                matching an entry in this list will be omitted from results. Multiple values create an AND-exclude
                filter.
            journalist_id: String Array. Filter by unique journalist identifiers which can be found through the
                Journalist API or in the matchedAuthors field. Multiple values create an OR filter.
            exclude_journalist_id: String Array. Exclude articles written by specific journalists identified by their
                unique IDs. Multiple values create an AND-exclude filter.
            language: String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr).
                Multiple values create an OR filter.
            exclude_language: String Array. Exclude articles in specific languages using ISO-639 two-letter codes.
                Multiple values create an AND-exclude filter.
            search_translation: Boolean. Expand search to include translated content fields for non-English articles.
                When true, searches translated title, description, and content fields.
            label: String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check,
                or Press Release. Multiple values create an OR filter.
            exclude_label: String Array. Exclude articles with specific editorial labels. Multiple values create an
                AND-exclude filter, removing all content with any of these labels.
            category: String Array. Filter by categories. Categories are general themes that the article is about.
                Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as
                OR operations. Use 'none' to search uncategorized articles.
            exclude_category: String Array. Exclude articles with specific categories. Multiple values create an
                AND-exclude filter, removing all content with any of these categories.
            topic: String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports.
                Topics are more granular than categories, and articles can have multiple topics. Use the /topics
                endpoint for a complete list of available topics. Multiple values create an OR filter.
            exclude_topic: String Array. Exclude articles with specific topics. Multiple values create an AND-exclude
                filter, removing all content with any of these topics.
            link_to: String. Returns only articles that contain links to the specified URL pattern. Matches against the
                'links' field in article responses.
            show_reprints: Boolean. Controls whether to include reprinted content in results. When true (default), shows
                syndicated articles from wire services like AP or Reuters that appear on multiple sites.
            reprint_group_id: String. Returns all articles in a specific reprint group, including the original article
                and all its known reprints. Use when you want to see all versions of the same content.
            city: String Array. Filters articles where a specified city plays a central role in the content, beyond mere
                mentions, to ensure the results are deeply relevant to the urban area in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_city: String Array. A list of cities to exclude from the results. Articles that are associated with
                any of the specified cities will be filtered out.
            area: String Array. Filters articles where a specified area, such as a neighborhood, borough, or district,
                plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to
                the area in question. If multiple parameters are passed, they will be applied as OR operations.
            state: String Array. Filters articles where a specified state plays a central role in the content, beyond
                mere mentions, to ensure the results are deeply relevant to the state in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_state: String Array. A list of states to exclude. Articles that include, or are associated with, any
                of the states provided here will be filtered out. This is especially useful if you want to ignore news
                tied to certain geographical areas (e.g., US states).
            county: String Array. A list of counties to include (or specify) in the search results. This field filters
                the returned articles based on the county associated with the event or news. Only articles tagged with
                one of these counties will be included.
            exclude_county: String Array. Excludes articles from specific counties or administrative divisions in the
                search results. Accepts either a single county name or a list of county names. County names should match
                the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows
                for more granular geographic filter
            locations_country: String Array. Filters articles where a specified country plays a central role in the
                content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If
                multiple parameters are passed, they will be applied as OR operations.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            exclude_locations_country: String Array. Excludes articles where a specified country plays a central role in
                the content, ensuring results are not deeply relevant to the country in question. If multiple parameters
                are passed, they will be applied as AND operations, excluding articles relevant to any of the specified
                countries.
            location: String Array. Return all articles that have the specified location. Location attributes are
                delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.
            lat: Float. Latitude of the center point to search places
            lon: Float. Longitude of the center point to search places
            max_distance: Float. Maximum distance (in km) from starting point to search articles by tagged places
            source_city: String Array. Find articles published by sources that are located within a given city.
            exclude_source_city: String Array. Excludes articles published by sources that are located within the
                specified cities.
            source_county: String Array. Find articles published by sources that are located within a given county.
            exclude_source_county: String Array. Excludes articles published by sources that are located within the
                specified counties.
            source_country: String Array. Find articles published by sources that are located within a given country.
                Must be 2 character country code (i.e. us, gb, etc).
            exclude_source_country: String Array. Excludes articles published by sources that are located within the
                specified countries. Must be 2 character country codes (e.g., us, gb).
            source_state: String Array. Find articles published by sources that are located within a given state.
            exclude_source_state: String Array. Excludes articles published by sources that are located within the
                specified states.
            source_lat: Float. Latitude of the center point to search articles created by local publications.
            source_lon: Float. Longitude of the center point to search articles created by local publications.
            source_max_distance: Float. Maximum distance from starting point to search articles created by local
                publications.
            person_wikidata_id: String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people
                endpoint for a complete list of tracked individuals.
            exclude_person_wikidata_id: String Array. Exclude articles mentioning people with specific Wikidata IDs.
                Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to
                avoid name ambiguity.
            person_name: String Array. Filter articles by exact person name matches. Does not support Boolean or complex
                logic. For available person entities, consult the /people endpoint.
            exclude_person_name: String Array. Exclude articles mentioning specific people by name. Creates an
                AND-exclude filter to remove content about these individuals.
            company_id: String Array. Filter articles by company identifiers. For a complete list of tracked companies,
                refer to the /companies endpoint.
            exclude_company_id: String Array. Exclude articles mentioning companies with specific identifiers. Creates
                an AND-exclude filter to remove content about these corporate entities.
            company_name: String. Filter articles by company name mentions. Performs an exact match on company names.
            company_domain: String Array. Filter articles by company domains (e.g., apple.com). For available company
                entities, consult the /companies endpoint.
            exclude_company_domain: String Array. Exclude articles related to companies with specific domains. Creates
                an AND-exclude filter to remove content about these companies.
            company_symbol: String Array. Filter articles by company stock symbols. For available company entities and
                their symbols, consult the /companies endpoint.
            company_isin: String Array. Filter articles by company ISIN codes (International Securities Identification
                Numbers). For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin).
                Distinct from companyIsin, which matches the company-level ISIN. For available company entities and
                their listing ISINs, consult the /companies endpoint.
            exclude_company_isin: String Array. Exclude articles related to companies with specific ISIN codes. Creates
                an AND-exclude filter to remove content about these companies. For available company entities and their
                ISINs, consult the /companies endpoint.
            exclude_company_symbol_isin: String Array. Exclude articles related to companies whose ticker listings have
                these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN.
                For available company entities and their listing ISINs, consult the /companies endpoint.
            exclude_company_symbol: String Array. A list of stock symbols (ticker symbols) that identify companies to be
                excluded. Articles related to companies using any of these symbols will be omitted, which is useful for
                targeting or avoiding specific public companies.
            positive_sentiment_from: Float. Filter articles with a positive sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Float. Filter articles with a positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Float. Filter articles with a neutral sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Float. Filter articles with a neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Float. Filter articles with a negative sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Float. Filter articles with a negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            taxonomy: String Array. Filters by Google Content Categories. This field will accept 1 or more categories,
                must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other,
                /Finance/Investing/Funds. `Full list
                <https://docs.cloud.google.com/natural-language/docs/categories#version_2>`__
            prefix_taxonomy: String. Filters by Google Content Categories. This field will filter by the category prefix
                only. Example: prefixTaxonomy=/Finance
            show_highlighting: Boolean. When set to true, enables text highlighting in search results.
            highlight_fragment_size: Integer. Specifies the size in characters of each highlighted text fragment.
                Defaults to 100 if not specified.
            highlight_num_fragments: Integer. Controls the maximum number of highlighted fragments to return per field.
            highlight_pre_tag: String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if
                not specified.
            highlight_post_tag: String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if
                not specified.
            highlight_q: String. Specifies a separate query for highlighting, allowing highlights based on terms
                different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable
                OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/summarize"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("title", title),
                param[str | None]("desc", desc),
                param[str | None]("content", content),
                param[str | None]("summary", summary),
                param[str | None]("url", url),
                param[list[str] | None]("articleId", article_id),
                param[list[str] | None]("clusterId", cluster_id),
                param[AllEndpointSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[RFC3339DateTime | None]("addDateFrom", add_date_from),
                param[RFC3339DateTime | None]("addDateTo", add_date_to),
                param[RFC3339DateTime | None]("refreshDateFrom", refresh_date_from),
                param[RFC3339DateTime | None]("refreshDateTo", refresh_date_to),
                param[list[str] | None]("medium", medium),
                param[list[str] | None]("source", source),
                param[list[str] | None]("sourceGroup", source_group),
                param[list[str] | None]("excludeSourceGroup", exclude_source_group),
                param[list[str] | None]("excludeSource", exclude_source),
                param[list[str] | None]("watchlist", watchlist),
                param[list[str] | None]("excludeWatchlist", exclude_watchlist),
                param[bool | None]("paywall", paywall),
                param[list[str] | None]("byline", byline),
                param[list[str] | None]("author", author),
                param[list[str] | None]("excludeAuthor", exclude_author),
                param[list[str] | None]("journalistId", journalist_id),
                param[list[str] | None]("excludeJournalistId", exclude_journalist_id),
                param[list[str] | None]("language", language),
                param[list[str] | None]("excludeLanguage", exclude_language),
                param[bool | None]("searchTranslation", search_translation),
                param[list[str] | None]("label", label),
                param[list[str] | None]("excludeLabel", exclude_label),
                param[list[str] | None]("category", category),
                param[list[str] | None]("excludeCategory", exclude_category),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("excludeTopic", exclude_topic),
                param[str | None]("linkTo", link_to),
                param[bool | None]("showReprints", show_reprints),
                param[str | None]("reprintGroupId", reprint_group_id),
                param[list[str] | None]("city", city),
                param[list[str] | None]("excludeCity", exclude_city),
                param[list[str] | None]("area", area),
                param[list[str] | None]("state", state),
                param[list[str] | None]("excludeState", exclude_state),
                param[list[str] | None]("county", county),
                param[list[str] | None]("excludeCounty", exclude_county),
                param[list[str] | None]("locationsCountry", locations_country),
                param[list[str] | None]("country", country),
                param[list[str] | None]("excludeLocationsCountry", exclude_locations_country),
                param[list[str] | None]("location", location),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[float | None]("maxDistance", max_distance),
                param[list[str] | None]("sourceCity", source_city),
                param[list[str] | None]("excludeSourceCity", exclude_source_city),
                param[list[str] | None]("sourceCounty", source_county),
                param[list[str] | None]("excludeSourceCounty", exclude_source_county),
                param[list[str] | None]("sourceCountry", source_country),
                param[list[str] | None]("excludeSourceCountry", exclude_source_country),
                param[list[str] | None]("sourceState", source_state),
                param[list[str] | None]("excludeSourceState", exclude_source_state),
                param[float | None]("sourceLat", source_lat),
                param[float | None]("sourceLon", source_lon),
                param[float | None]("sourceMaxDistance", source_max_distance),
                param[list[str] | None]("personWikidataId", person_wikidata_id),
                param[list[str] | None]("excludePersonWikidataId", exclude_person_wikidata_id),
                param[list[str] | None]("personName", person_name),
                param[list[str] | None]("excludePersonName", exclude_person_name),
                param[list[str] | None]("companyId", company_id),
                param[list[str] | None]("excludeCompanyId", exclude_company_id),
                param[str | None]("companyName", company_name),
                param[list[str] | None]("companyDomain", company_domain),
                param[list[str] | None]("excludeCompanyDomain", exclude_company_domain),
                param[list[str] | None]("companySymbol", company_symbol),
                param[list[str] | None]("companyIsin", company_isin),
                param[list[str] | None]("companySymbolIsin", company_symbol_isin),
                param[list[str] | None]("excludeCompanyIsin", exclude_company_isin),
                param[list[str] | None]("excludeCompanySymbolIsin", exclude_company_symbol_isin),
                param[list[str] | None]("excludeCompanySymbol", exclude_company_symbol),
                param[float | None]("positiveSentimentFrom", positive_sentiment_from),
                param[float | None]("positiveSentimentTo", positive_sentiment_to),
                param[float | None]("neutralSentimentFrom", neutral_sentiment_from),
                param[float | None]("neutralSentimentTo", neutral_sentiment_to),
                param[float | None]("negativeSentimentFrom", negative_sentiment_from),
                param[float | None]("negativeSentimentTo", negative_sentiment_to),
                param[list[str] | None]("taxonomy", taxonomy),
                param[str | None]("prefixTaxonomy", prefix_taxonomy),
                param[bool | None]("showHighlighting", show_highlighting),
                param[int | None]("highlightFragmentSize", highlight_fragment_size),
                param[int | None]("highlightNumFragments", highlight_num_fragments),
                param[str | None]("highlightPreTag", highlight_pre_tag),
                param[str | None]("highlightPostTag", highlight_post_tag),
                param[str | None]("highlightQ", highlight_q),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SummaryBody | SummaryBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SummarySearchResult],
            error_mapper=search_summarizer_error_mapper,
            request_options=request_options,
        )


class AsyncAiAdvancedSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_summarizer(
        self,
        body: SummaryBody | SummaryBodyDict,
        *,
        q: str | None = None,
        title: str | None = None,
        desc: str | None = None,
        content: str | None = None,
        summary: str | None = None,
        url: str | None = None,
        article_id: list[str] | None = None,
        cluster_id: list[str] | None = None,
        sort_by: AllEndpointSortByOrStr | None = None,
        page: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        add_date_from: RFC3339DateTime | None = None,
        add_date_to: RFC3339DateTime | None = None,
        refresh_date_from: RFC3339DateTime | None = None,
        refresh_date_to: RFC3339DateTime | None = None,
        medium: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        exclude_source_group: list[str] | None = None,
        exclude_source: list[str] | None = None,
        watchlist: list[str] | None = None,
        exclude_watchlist: list[str] | None = None,
        paywall: bool | None = None,
        byline: list[str] | None = None,
        author: list[str] | None = None,
        exclude_author: list[str] | None = None,
        journalist_id: list[str] | None = None,
        exclude_journalist_id: list[str] | None = None,
        language: list[str] | None = None,
        exclude_language: list[str] | None = None,
        search_translation: bool | None = None,
        label: list[str] | None = None,
        exclude_label: list[str] | None = None,
        category: list[str] | None = None,
        exclude_category: list[str] | None = None,
        topic: list[str] | None = None,
        exclude_topic: list[str] | None = None,
        link_to: str | None = None,
        show_reprints: bool | None = None,
        reprint_group_id: str | None = None,
        city: list[str] | None = None,
        exclude_city: list[str] | None = None,
        area: list[str] | None = None,
        state: list[str] | None = None,
        exclude_state: list[str] | None = None,
        county: list[str] | None = None,
        exclude_county: list[str] | None = None,
        locations_country: list[str] | None = None,
        country: list[str] | None = None,
        exclude_locations_country: list[str] | None = None,
        location: list[str] | None = None,
        lat: float | None = None,
        lon: float | None = None,
        max_distance: float | None = None,
        source_city: list[str] | None = None,
        exclude_source_city: list[str] | None = None,
        source_county: list[str] | None = None,
        exclude_source_county: list[str] | None = None,
        source_country: list[str] | None = None,
        exclude_source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        exclude_source_state: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        person_wikidata_id: list[str] | None = None,
        exclude_person_wikidata_id: list[str] | None = None,
        person_name: list[str] | None = None,
        exclude_person_name: list[str] | None = None,
        company_id: list[str] | None = None,
        exclude_company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        exclude_company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        exclude_company_isin: list[str] | None = None,
        exclude_company_symbol_isin: list[str] | None = None,
        exclude_company_symbol: list[str] | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        taxonomy: list[str] | None = None,
        prefix_taxonomy: str | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SummarySearchResult, SearchSummarizerErrorBody]:
        """Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and
        summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters
        such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting
        options are ignored.

        Args:
            body: The request body.
            q: String. Primary search query for filtering articles based on their title, description, and content.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            title: String. Search specifically within article headlines/titles. Supports Boolean operators, exact
                phrases with quotes, and wildcards for matching title variations.
            desc: String. Search within article description fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            content: String. Search within the full article body content. Supports Boolean logic, exact phrase matching
                with quotes, and wildcards for comprehensive content searching.
            summary: String. Search within article summary fields. Supports Boolean expressions, exact phrase matching
                with quotes, and wildcards for flexible pattern matching.
            url: String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying
                certain website sections, e.g. source=cnn.com&url=travel.
            article_id: String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs
                can be provided to return a collection of specific articles.
            cluster_id: String Array. Filter results to only show content within a specific related content cluster.
                Returns articles grouped together as part of Perigon Stories based on topic relevance.
            sort_by: String. Determines the article sorting order. Options include relevance (default), date/pubDate
                (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion
                date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in
                system first, often identical to addDate).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            from_: Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g.,
                2023-03-01T00:00:00) or yyyy-mm-dd format.
            to: Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g.,
                2022-02-01T23:59:59) or yyyy-mm-dd format.
            add_date_from: Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            add_date_to: Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            refresh_date_from: Date. Filter for articles refreshed/updated in Perigon's system after this date. In most
                cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
            refresh_date_to: Date. Filter for articles refreshed/updated in Perigon's system before this date. In most
                cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format
                (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
            medium: String Array. Filter articles by their primary medium type. Accepts Article for written content or
                Video for video-based stories. Multiple values create an OR filter.
            source: String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            source_group: String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100,
                top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.
            exclude_source_group: String Array. Exclude articles from specified Perigon source groups. Multiple values
                create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g.,
                top10, top100).
            exclude_source: String Array. Exclude articles from specific publisher domains or subdomains. Supports
                wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude
                filter.
            watchlist: String Array. Filter articles using watchlists of people and companies. Multiple values create an
                OR filter to include articles mentioning any entity from the specified watchlists.
            exclude_watchlist: String Array. Exclude articles mentioning entities from specified watchlists. Multiple
                values create an AND-exclude filter, removing content mentioning any entity from the specified
                watchlists.
            paywall: Boolean. Filter to show only results where the source has a paywall (true) or does not have a
                paywall (false).
            byline: String Array. Filter articles by author bylines. Works as an exact match for each author name
                provided. Multiple values create an OR filter to find articles by any of the specified authors.
            author: String Array. Filter articles by specific author names. Works as an exact match for each name.
                Multiple values create an OR filter to find articles by any of the specified authors.
            exclude_author: String Array. Exclude articles written by specific authors. Any article with an author name
                matching an entry in this list will be omitted from results. Multiple values create an AND-exclude
                filter.
            journalist_id: String Array. Filter by unique journalist identifiers which can be found through the
                Journalist API or in the matchedAuthors field. Multiple values create an OR filter.
            exclude_journalist_id: String Array. Exclude articles written by specific journalists identified by their
                unique IDs. Multiple values create an AND-exclude filter.
            language: String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr).
                Multiple values create an OR filter.
            exclude_language: String Array. Exclude articles in specific languages using ISO-639 two-letter codes.
                Multiple values create an AND-exclude filter.
            search_translation: Boolean. Expand search to include translated content fields for non-English articles.
                When true, searches translated title, description, and content fields.
            label: String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check,
                or Press Release. Multiple values create an OR filter.
            exclude_label: String Array. Exclude articles with specific editorial labels. Multiple values create an
                AND-exclude filter, removing all content with any of these labels.
            category: String Array. Filter by categories. Categories are general themes that the article is about.
                Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as
                OR operations. Use 'none' to search uncategorized articles.
            exclude_category: String Array. Exclude articles with specific categories. Multiple values create an
                AND-exclude filter, removing all content with any of these categories.
            topic: String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports.
                Topics are more granular than categories, and articles can have multiple topics. Use the /topics
                endpoint for a complete list of available topics. Multiple values create an OR filter.
            exclude_topic: String Array. Exclude articles with specific topics. Multiple values create an AND-exclude
                filter, removing all content with any of these topics.
            link_to: String. Returns only articles that contain links to the specified URL pattern. Matches against the
                'links' field in article responses.
            show_reprints: Boolean. Controls whether to include reprinted content in results. When true (default), shows
                syndicated articles from wire services like AP or Reuters that appear on multiple sites.
            reprint_group_id: String. Returns all articles in a specific reprint group, including the original article
                and all its known reprints. Use when you want to see all versions of the same content.
            city: String Array. Filters articles where a specified city plays a central role in the content, beyond mere
                mentions, to ensure the results are deeply relevant to the urban area in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_city: String Array. A list of cities to exclude from the results. Articles that are associated with
                any of the specified cities will be filtered out.
            area: String Array. Filters articles where a specified area, such as a neighborhood, borough, or district,
                plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to
                the area in question. If multiple parameters are passed, they will be applied as OR operations.
            state: String Array. Filters articles where a specified state plays a central role in the content, beyond
                mere mentions, to ensure the results are deeply relevant to the state in question. If multiple
                parameters are passed, they will be applied as OR operations.
            exclude_state: String Array. A list of states to exclude. Articles that include, or are associated with, any
                of the states provided here will be filtered out. This is especially useful if you want to ignore news
                tied to certain geographical areas (e.g., US states).
            county: String Array. A list of counties to include (or specify) in the search results. This field filters
                the returned articles based on the county associated with the event or news. Only articles tagged with
                one of these counties will be included.
            exclude_county: String Array. Excludes articles from specific counties or administrative divisions in the
                search results. Accepts either a single county name or a list of county names. County names should match
                the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows
                for more granular geographic filter
            locations_country: String Array. Filters articles where a specified country plays a central role in the
                content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If
                multiple parameters are passed, they will be applied as OR operations.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            exclude_locations_country: String Array. Excludes articles where a specified country plays a central role in
                the content, ensuring results are not deeply relevant to the country in question. If multiple parameters
                are passed, they will be applied as AND operations, excluding articles relevant to any of the specified
                countries.
            location: String Array. Return all articles that have the specified location. Location attributes are
                delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.
            lat: Float. Latitude of the center point to search places
            lon: Float. Longitude of the center point to search places
            max_distance: Float. Maximum distance (in km) from starting point to search articles by tagged places
            source_city: String Array. Find articles published by sources that are located within a given city.
            exclude_source_city: String Array. Excludes articles published by sources that are located within the
                specified cities.
            source_county: String Array. Find articles published by sources that are located within a given county.
            exclude_source_county: String Array. Excludes articles published by sources that are located within the
                specified counties.
            source_country: String Array. Find articles published by sources that are located within a given country.
                Must be 2 character country code (i.e. us, gb, etc).
            exclude_source_country: String Array. Excludes articles published by sources that are located within the
                specified countries. Must be 2 character country codes (e.g., us, gb).
            source_state: String Array. Find articles published by sources that are located within a given state.
            exclude_source_state: String Array. Excludes articles published by sources that are located within the
                specified states.
            source_lat: Float. Latitude of the center point to search articles created by local publications.
            source_lon: Float. Longitude of the center point to search articles created by local publications.
            source_max_distance: Float. Maximum distance from starting point to search articles created by local
                publications.
            person_wikidata_id: String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people
                endpoint for a complete list of tracked individuals.
            exclude_person_wikidata_id: String Array. Exclude articles mentioning people with specific Wikidata IDs.
                Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to
                avoid name ambiguity.
            person_name: String Array. Filter articles by exact person name matches. Does not support Boolean or complex
                logic. For available person entities, consult the /people endpoint.
            exclude_person_name: String Array. Exclude articles mentioning specific people by name. Creates an
                AND-exclude filter to remove content about these individuals.
            company_id: String Array. Filter articles by company identifiers. For a complete list of tracked companies,
                refer to the /companies endpoint.
            exclude_company_id: String Array. Exclude articles mentioning companies with specific identifiers. Creates
                an AND-exclude filter to remove content about these corporate entities.
            company_name: String. Filter articles by company name mentions. Performs an exact match on company names.
            company_domain: String Array. Filter articles by company domains (e.g., apple.com). For available company
                entities, consult the /companies endpoint.
            exclude_company_domain: String Array. Exclude articles related to companies with specific domains. Creates
                an AND-exclude filter to remove content about these companies.
            company_symbol: String Array. Filter articles by company stock symbols. For available company entities and
                their symbols, consult the /companies endpoint.
            company_isin: String Array. Filter articles by company ISIN codes (International Securities Identification
                Numbers). For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin).
                Distinct from companyIsin, which matches the company-level ISIN. For available company entities and
                their listing ISINs, consult the /companies endpoint.
            exclude_company_isin: String Array. Exclude articles related to companies with specific ISIN codes. Creates
                an AND-exclude filter to remove content about these companies. For available company entities and their
                ISINs, consult the /companies endpoint.
            exclude_company_symbol_isin: String Array. Exclude articles related to companies whose ticker listings have
                these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN.
                For available company entities and their listing ISINs, consult the /companies endpoint.
            exclude_company_symbol: String Array. A list of stock symbols (ticker symbols) that identify companies to be
                excluded. Articles related to companies using any of these symbols will be omitted, which is useful for
                targeting or avoiding specific public companies.
            positive_sentiment_from: Float. Filter articles with a positive sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Float. Filter articles with a positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Float. Filter articles with a neutral sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Float. Filter articles with a neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Float. Filter articles with a negative sentiment score greater than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Float. Filter articles with a negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            taxonomy: String Array. Filters by Google Content Categories. This field will accept 1 or more categories,
                must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other,
                /Finance/Investing/Funds. `Full list
                <https://docs.cloud.google.com/natural-language/docs/categories#version_2>`__
            prefix_taxonomy: String. Filters by Google Content Categories. This field will filter by the category prefix
                only. Example: prefixTaxonomy=/Finance
            show_highlighting: Boolean. When set to true, enables text highlighting in search results.
            highlight_fragment_size: Integer. Specifies the size in characters of each highlighted text fragment.
                Defaults to 100 if not specified.
            highlight_num_fragments: Integer. Controls the maximum number of highlighted fragments to return per field.
            highlight_pre_tag: String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if
                not specified.
            highlight_post_tag: String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if
                not specified.
            highlight_q: String. Specifies a separate query for highlighting, allowing highlights based on terms
                different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable
                OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/summarize"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("title", title),
                param[str | None]("desc", desc),
                param[str | None]("content", content),
                param[str | None]("summary", summary),
                param[str | None]("url", url),
                param[list[str] | None]("articleId", article_id),
                param[list[str] | None]("clusterId", cluster_id),
                param[AllEndpointSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[RFC3339DateTime | None]("addDateFrom", add_date_from),
                param[RFC3339DateTime | None]("addDateTo", add_date_to),
                param[RFC3339DateTime | None]("refreshDateFrom", refresh_date_from),
                param[RFC3339DateTime | None]("refreshDateTo", refresh_date_to),
                param[list[str] | None]("medium", medium),
                param[list[str] | None]("source", source),
                param[list[str] | None]("sourceGroup", source_group),
                param[list[str] | None]("excludeSourceGroup", exclude_source_group),
                param[list[str] | None]("excludeSource", exclude_source),
                param[list[str] | None]("watchlist", watchlist),
                param[list[str] | None]("excludeWatchlist", exclude_watchlist),
                param[bool | None]("paywall", paywall),
                param[list[str] | None]("byline", byline),
                param[list[str] | None]("author", author),
                param[list[str] | None]("excludeAuthor", exclude_author),
                param[list[str] | None]("journalistId", journalist_id),
                param[list[str] | None]("excludeJournalistId", exclude_journalist_id),
                param[list[str] | None]("language", language),
                param[list[str] | None]("excludeLanguage", exclude_language),
                param[bool | None]("searchTranslation", search_translation),
                param[list[str] | None]("label", label),
                param[list[str] | None]("excludeLabel", exclude_label),
                param[list[str] | None]("category", category),
                param[list[str] | None]("excludeCategory", exclude_category),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("excludeTopic", exclude_topic),
                param[str | None]("linkTo", link_to),
                param[bool | None]("showReprints", show_reprints),
                param[str | None]("reprintGroupId", reprint_group_id),
                param[list[str] | None]("city", city),
                param[list[str] | None]("excludeCity", exclude_city),
                param[list[str] | None]("area", area),
                param[list[str] | None]("state", state),
                param[list[str] | None]("excludeState", exclude_state),
                param[list[str] | None]("county", county),
                param[list[str] | None]("excludeCounty", exclude_county),
                param[list[str] | None]("locationsCountry", locations_country),
                param[list[str] | None]("country", country),
                param[list[str] | None]("excludeLocationsCountry", exclude_locations_country),
                param[list[str] | None]("location", location),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[float | None]("maxDistance", max_distance),
                param[list[str] | None]("sourceCity", source_city),
                param[list[str] | None]("excludeSourceCity", exclude_source_city),
                param[list[str] | None]("sourceCounty", source_county),
                param[list[str] | None]("excludeSourceCounty", exclude_source_county),
                param[list[str] | None]("sourceCountry", source_country),
                param[list[str] | None]("excludeSourceCountry", exclude_source_country),
                param[list[str] | None]("sourceState", source_state),
                param[list[str] | None]("excludeSourceState", exclude_source_state),
                param[float | None]("sourceLat", source_lat),
                param[float | None]("sourceLon", source_lon),
                param[float | None]("sourceMaxDistance", source_max_distance),
                param[list[str] | None]("personWikidataId", person_wikidata_id),
                param[list[str] | None]("excludePersonWikidataId", exclude_person_wikidata_id),
                param[list[str] | None]("personName", person_name),
                param[list[str] | None]("excludePersonName", exclude_person_name),
                param[list[str] | None]("companyId", company_id),
                param[list[str] | None]("excludeCompanyId", exclude_company_id),
                param[str | None]("companyName", company_name),
                param[list[str] | None]("companyDomain", company_domain),
                param[list[str] | None]("excludeCompanyDomain", exclude_company_domain),
                param[list[str] | None]("companySymbol", company_symbol),
                param[list[str] | None]("companyIsin", company_isin),
                param[list[str] | None]("companySymbolIsin", company_symbol_isin),
                param[list[str] | None]("excludeCompanyIsin", exclude_company_isin),
                param[list[str] | None]("excludeCompanySymbolIsin", exclude_company_symbol_isin),
                param[list[str] | None]("excludeCompanySymbol", exclude_company_symbol),
                param[float | None]("positiveSentimentFrom", positive_sentiment_from),
                param[float | None]("positiveSentimentTo", positive_sentiment_to),
                param[float | None]("neutralSentimentFrom", neutral_sentiment_from),
                param[float | None]("neutralSentimentTo", neutral_sentiment_to),
                param[float | None]("negativeSentimentFrom", negative_sentiment_from),
                param[float | None]("negativeSentimentTo", negative_sentiment_to),
                param[list[str] | None]("taxonomy", taxonomy),
                param[str | None]("prefixTaxonomy", prefix_taxonomy),
                param[bool | None]("showHighlighting", show_highlighting),
                param[int | None]("highlightFragmentSize", highlight_fragment_size),
                param[int | None]("highlightNumFragments", highlight_num_fragments),
                param[str | None]("highlightPreTag", highlight_pre_tag),
                param[str | None]("highlightPostTag", highlight_post_tag),
                param[str | None]("highlightQ", highlight_q),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SummaryBody | SummaryBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SummarySearchResult],
            error_mapper=search_summarizer_error_mapper,
            request_options=request_options,
        )
