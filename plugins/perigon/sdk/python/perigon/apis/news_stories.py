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
from ..errors.get_article_refresh_job_error import GetArticleRefreshJobErrorBody, get_article_refresh_job_error_mapper
from ..errors.get_story_counts_error import GetStoryCountsErrorBody, get_story_counts_error_mapper
from ..errors.get_story_history_error import GetStoryHistoryErrorBody, get_story_history_error_mapper
from ..errors.peek_article_refresh_error import PeekArticleRefreshErrorBody, peek_article_refresh_error_mapper
from ..errors.search_articles_error import SearchArticlesErrorBody, search_articles_error_mapper
from ..errors.search_stories_error import SearchStoriesErrorBody, search_stories_error_mapper
from ..errors.submit_article_refresh_job_error import (
    SubmitArticleRefreshJobErrorBody,
    submit_article_refresh_job_error_mapper,
)
from ..errors.vector_search_articles_error import VectorSearchArticlesErrorBody, vector_search_articles_error_mapper
from ..models.article_refresh_job_response import ArticleRefreshJobResponse
from ..models.article_refresh_peek_response import ArticleRefreshPeekResponse
from ..models.article_refresh_submit_request import ArticleRefreshSubmitRequest, ArticleRefreshSubmitRequestDict
from ..models.article_search_params import ArticleSearchParams, ArticleSearchParamsDict
from ..models.articles_vector_search_result import ArticlesVectorSearchResult
from ..models.enums.all_endpoint_sort_by import AllEndpointSortByOrStr
from ..models.enums.clusters_list_sort_by import ClustersListSortByOrStr
from ..models.enums.sort_by import SortByOrStr
from ..models.enums.split_by import SplitBy, SplitByOrStr
from ..models.query_search_result import QuerySearchResult
from ..models.stat_result import StatResult
from ..models.story_history_result import StoryHistoryResult
from ..models.story_search_result import StorySearchResult
from ..server.server import Server


class NewsStories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NewsStoriesWithRawResponse(client, server, auth)

    def get_article_refresh_job(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ArticleRefreshJobResponse:
        """Returns the job status together with whatever per-article results have been computed so far. Results are
        immutable snapshots taken when each article was processed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 404 - Job not found 400 - Bad Request 403 - Request
                Forbidden 429 - Too Many Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_article_refresh_job(id_, request_options=request_options))

    def get_story_counts(
        self,
        *,
        split_by: SplitByOrStr = SplitBy.MONTH,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_duplicates: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatResult:
        """Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and
        filtered by supported story attributes.

        Args:
            split_by: Time interval used to group story counts. Accepts hour, day, week, or month and defaults to month.
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_story_counts(
                split_by=split_by,
                q=q,
                name=name,
                cluster_id=cluster_id,
                exclude_cluster_id=exclude_cluster_id,
                from_=from_,
                to=to,
                initialized_from=initialized_from,
                initialized_to=initialized_to,
                updated_from=updated_from,
                updated_to=updated_to,
                topic=topic,
                category=category,
                taxonomy=taxonomy,
                source=source,
                source_group=source_group,
                min_unique_sources=min_unique_sources,
                min_source_diversity=min_source_diversity,
                person_wikidata_id=person_wikidata_id,
                person_name=person_name,
                company_id=company_id,
                company_name=company_name,
                company_domain=company_domain,
                company_symbol=company_symbol,
                company_isin=company_isin,
                company_symbol_isin=company_symbol_isin,
                country=country,
                state=state,
                city=city,
                area=area,
                min_cluster_size=min_cluster_size,
                max_cluster_size=max_cluster_size,
                name_exists=name_exists,
                positive_sentiment_from=positive_sentiment_from,
                positive_sentiment_to=positive_sentiment_to,
                neutral_sentiment_from=neutral_sentiment_from,
                neutral_sentiment_to=neutral_sentiment_to,
                negative_sentiment_from=negative_sentiment_from,
                negative_sentiment_to=negative_sentiment_to,
                show_duplicates=show_duplicates,
                request_options=request_options,
            ),
        )

    def get_story_history(
        self,
        *,
        cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        sort_by: SortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        changelog_exists: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StoryHistoryResult:
        """Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and
        changelogs.

        Args:
            cluster_id: Filter history records by story cluster ID. Multiple values are combined with OR.
            from_: Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            sort_by: Field used to sort history records in descending order. Accepts createdAt or triggeredAt and
                defaults to createdAt.
            page: Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations.
            size: Integer. Number of stories results per page, from 0 to 100.
            changelog_exists: Filter by whether a history record contains a changelog. Use true to require one or false
                to require its absence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_story_history(
                cluster_id=cluster_id,
                from_=from_,
                to=to,
                sort_by=sort_by,
                page=page,
                size=size,
                changelog_exists=changelog_exists,
                request_options=request_options,
            ),
        )

    def peek_article_refresh(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ArticleRefreshPeekResponse:
        """Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any
        processing or creating a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.peek_article_refresh(body, request_options=request_options))

    def search_articles(
        self,
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
        size: int | None = None,
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
        show_num_results: bool | None = None,
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
    ) -> QuerySearchResult:
        """Search and filter all news articles available via the Perigon API. The result includes a list of individual
        articles that were matched to your specific criteria.

        Args:
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
            size: Integer. The number of articles to return per page in the paginated response.
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
            show_num_results: Boolean. Whether to show the total number of all matched articles. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 articles.
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
            self._with_raw_response.search_articles(
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
                size=size,
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
                show_num_results=show_num_results,
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

    def search_stories(
        self,
        *,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        sort_by: ClustersListSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_story_page_info: bool | None = None,
        show_num_results: bool | None = None,
        show_duplicates: bool | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        expand_articles: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StorySearchResult:
        """Track evolving narratives and top news headlines with the '**Stories**' endpoint — it returns structured
        clusters of related articles with summaries, key points, sentiment scores, and metadata on top people,
        companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what
        they impact, and where they're gaining traction globally.

        Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single
        story, identified by the ``clusterId`` field. Once a story reaches five articles, a story title is automatically
        generated based on its content. Stories update as new coverage is processed and key details evolve.

        To fetch all articles within a specific story, query the ``/articles/all`` endpoint using the ``clusterId``
        parameter.

        Args:
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            sort_by: String. Determines the story sorting order. Options include createdAt (default, when stories first
                emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance
                (best match to query), count (by unique article count), and totalCount (by total article count including
                reprints).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_story_page_info: Boolean.
            show_num_results: Boolean. Show total number of results. By default set to false, will cap result count at
                10000.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
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
            expand_articles: Boolean. Preview 5 articles from the cluster.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_stories(
                q=q,
                name=name,
                cluster_id=cluster_id,
                exclude_cluster_id=exclude_cluster_id,
                sort_by=sort_by,
                page=page,
                size=size,
                from_=from_,
                to=to,
                initialized_from=initialized_from,
                initialized_to=initialized_to,
                updated_from=updated_from,
                updated_to=updated_to,
                topic=topic,
                category=category,
                taxonomy=taxonomy,
                source=source,
                source_group=source_group,
                min_unique_sources=min_unique_sources,
                min_source_diversity=min_source_diversity,
                person_wikidata_id=person_wikidata_id,
                person_name=person_name,
                company_id=company_id,
                company_name=company_name,
                company_domain=company_domain,
                company_symbol=company_symbol,
                company_isin=company_isin,
                company_symbol_isin=company_symbol_isin,
                country=country,
                state=state,
                city=city,
                area=area,
                min_cluster_size=min_cluster_size,
                max_cluster_size=max_cluster_size,
                name_exists=name_exists,
                positive_sentiment_from=positive_sentiment_from,
                positive_sentiment_to=positive_sentiment_to,
                neutral_sentiment_from=neutral_sentiment_from,
                neutral_sentiment_to=neutral_sentiment_to,
                negative_sentiment_from=negative_sentiment_from,
                negative_sentiment_to=negative_sentiment_to,
                show_story_page_info=show_story_page_info,
                show_num_results=show_num_results,
                show_duplicates=show_duplicates,
                show_highlighting=show_highlighting,
                highlight_fragment_size=highlight_fragment_size,
                highlight_num_fragments=highlight_num_fragments,
                highlight_pre_tag=highlight_pre_tag,
                highlight_post_tag=highlight_post_tag,
                highlight_q=highlight_q,
                expand_articles=expand_articles,
                request_options=request_options,
            ),
        )

    def submit_article_refresh_job(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ArticleRefreshJobResponse:
        """Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately;
        the rest are scheduled for processing. Poll the job status endpoint for results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 404 - One or more article ids do not exist 400 - Bad
                Request 403 - Request Forbidden 429 - Too Many Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.submit_article_refresh_job(body, request_options=request_options))

    def vector_search_articles(
        self,
        body: ArticleSearchParams | ArticleSearchParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ArticlesVectorSearchResult:
        """Perform a natural language search over news articles from the past 6 months using semantic relevance. The
        result includes a list of articles most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.vector_search_articles(body, request_options=request_options))

    @property
    def with_raw_response(self) -> NewsStoriesWithRawResponse:
        return self._with_raw_response


class AsyncNewsStories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNewsStoriesWithRawResponse(client, server, auth)

    async def get_article_refresh_job(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ArticleRefreshJobResponse:
        """Returns the job status together with whatever per-article results have been computed so far. Results are
        immutable snapshots taken when each article was processed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 404 - Job not found 400 - Bad Request 403 - Request
                Forbidden 429 - Too Many Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_article_refresh_job(id_, request_options=request_options))

    async def get_story_counts(
        self,
        *,
        split_by: SplitByOrStr = SplitBy.MONTH,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_duplicates: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatResult:
        """Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and
        filtered by supported story attributes.

        Args:
            split_by: Time interval used to group story counts. Accepts hour, day, week, or month and defaults to month.
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_story_counts(
                split_by=split_by,
                q=q,
                name=name,
                cluster_id=cluster_id,
                exclude_cluster_id=exclude_cluster_id,
                from_=from_,
                to=to,
                initialized_from=initialized_from,
                initialized_to=initialized_to,
                updated_from=updated_from,
                updated_to=updated_to,
                topic=topic,
                category=category,
                taxonomy=taxonomy,
                source=source,
                source_group=source_group,
                min_unique_sources=min_unique_sources,
                min_source_diversity=min_source_diversity,
                person_wikidata_id=person_wikidata_id,
                person_name=person_name,
                company_id=company_id,
                company_name=company_name,
                company_domain=company_domain,
                company_symbol=company_symbol,
                company_isin=company_isin,
                company_symbol_isin=company_symbol_isin,
                country=country,
                state=state,
                city=city,
                area=area,
                min_cluster_size=min_cluster_size,
                max_cluster_size=max_cluster_size,
                name_exists=name_exists,
                positive_sentiment_from=positive_sentiment_from,
                positive_sentiment_to=positive_sentiment_to,
                neutral_sentiment_from=neutral_sentiment_from,
                neutral_sentiment_to=neutral_sentiment_to,
                negative_sentiment_from=negative_sentiment_from,
                negative_sentiment_to=negative_sentiment_to,
                show_duplicates=show_duplicates,
                request_options=request_options,
            ),
        )

    async def get_story_history(
        self,
        *,
        cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        sort_by: SortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        changelog_exists: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoryHistoryResult:
        """Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and
        changelogs.

        Args:
            cluster_id: Filter history records by story cluster ID. Multiple values are combined with OR.
            from_: Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            sort_by: Field used to sort history records in descending order. Accepts createdAt or triggeredAt and
                defaults to createdAt.
            page: Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations.
            size: Integer. Number of stories results per page, from 0 to 100.
            changelog_exists: Filter by whether a history record contains a changelog. Use true to require one or false
                to require its absence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_story_history(
                cluster_id=cluster_id,
                from_=from_,
                to=to,
                sort_by=sort_by,
                page=page,
                size=size,
                changelog_exists=changelog_exists,
                request_options=request_options,
            ),
        )

    async def peek_article_refresh(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ArticleRefreshPeekResponse:
        """Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any
        processing or creating a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.peek_article_refresh(body, request_options=request_options))

    async def search_articles(
        self,
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
        size: int | None = None,
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
        show_num_results: bool | None = None,
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
    ) -> QuerySearchResult:
        """Search and filter all news articles available via the Perigon API. The result includes a list of individual
        articles that were matched to your specific criteria.

        Args:
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
            size: Integer. The number of articles to return per page in the paginated response.
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
            show_num_results: Boolean. Whether to show the total number of all matched articles. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 articles.
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
            await self._with_raw_response.search_articles(
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
                size=size,
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
                show_num_results=show_num_results,
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

    async def search_stories(
        self,
        *,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        sort_by: ClustersListSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_story_page_info: bool | None = None,
        show_num_results: bool | None = None,
        show_duplicates: bool | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        expand_articles: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StorySearchResult:
        """Track evolving narratives and top news headlines with the '**Stories**' endpoint — it returns structured
        clusters of related articles with summaries, key points, sentiment scores, and metadata on top people,
        companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what
        they impact, and where they're gaining traction globally.

        Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single
        story, identified by the ``clusterId`` field. Once a story reaches five articles, a story title is automatically
        generated based on its content. Stories update as new coverage is processed and key details evolve.

        To fetch all articles within a specific story, query the ``/articles/all`` endpoint using the ``clusterId``
        parameter.

        Args:
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            sort_by: String. Determines the story sorting order. Options include createdAt (default, when stories first
                emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance
                (best match to query), count (by unique article count), and totalCount (by total article count including
                reprints).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_story_page_info: Boolean.
            show_num_results: Boolean. Show total number of results. By default set to false, will cap result count at
                10000.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
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
            expand_articles: Boolean. Preview 5 articles from the cluster.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_stories(
                q=q,
                name=name,
                cluster_id=cluster_id,
                exclude_cluster_id=exclude_cluster_id,
                sort_by=sort_by,
                page=page,
                size=size,
                from_=from_,
                to=to,
                initialized_from=initialized_from,
                initialized_to=initialized_to,
                updated_from=updated_from,
                updated_to=updated_to,
                topic=topic,
                category=category,
                taxonomy=taxonomy,
                source=source,
                source_group=source_group,
                min_unique_sources=min_unique_sources,
                min_source_diversity=min_source_diversity,
                person_wikidata_id=person_wikidata_id,
                person_name=person_name,
                company_id=company_id,
                company_name=company_name,
                company_domain=company_domain,
                company_symbol=company_symbol,
                company_isin=company_isin,
                company_symbol_isin=company_symbol_isin,
                country=country,
                state=state,
                city=city,
                area=area,
                min_cluster_size=min_cluster_size,
                max_cluster_size=max_cluster_size,
                name_exists=name_exists,
                positive_sentiment_from=positive_sentiment_from,
                positive_sentiment_to=positive_sentiment_to,
                neutral_sentiment_from=neutral_sentiment_from,
                neutral_sentiment_to=neutral_sentiment_to,
                negative_sentiment_from=negative_sentiment_from,
                negative_sentiment_to=negative_sentiment_to,
                show_story_page_info=show_story_page_info,
                show_num_results=show_num_results,
                show_duplicates=show_duplicates,
                show_highlighting=show_highlighting,
                highlight_fragment_size=highlight_fragment_size,
                highlight_num_fragments=highlight_num_fragments,
                highlight_pre_tag=highlight_pre_tag,
                highlight_post_tag=highlight_post_tag,
                highlight_q=highlight_q,
                expand_articles=expand_articles,
                request_options=request_options,
            ),
        )

    async def submit_article_refresh_job(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ArticleRefreshJobResponse:
        """Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately;
        the rest are scheduled for processing. Poll the job status endpoint for results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 404 - One or more article ids do not exist 400 - Bad
                Request 403 - Request Forbidden 429 - Too Many Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.submit_article_refresh_job(body, request_options=request_options))

    async def vector_search_articles(
        self,
        body: ArticleSearchParams | ArticleSearchParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ArticlesVectorSearchResult:
        """Perform a natural language search over news articles from the past 6 months using semantic relevance. The
        result includes a list of articles most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.vector_search_articles(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncNewsStoriesWithRawResponse:
        return self._with_raw_response


class NewsStoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_article_refresh_job(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ArticleRefreshJobResponse, GetArticleRefreshJobErrorBody]:
        """Returns the job status together with whatever per-article results have been computed so far. Results are
        immutable snapshots taken when each article was processed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/articles/refresh/jobs/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ArticleRefreshJobResponse],
            error_mapper=get_article_refresh_job_error_mapper,
            request_options=request_options,
        )

    def get_story_counts(
        self,
        *,
        split_by: SplitByOrStr = SplitBy.MONTH,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_duplicates: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatResult, GetStoryCountsErrorBody]:
        """Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and
        filtered by supported story attributes.

        Args:
            split_by: Time interval used to group story counts. Accepts hour, day, week, or month and defaults to month.
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stories/stats"),
            query_params=[
                param[SplitByOrStr]("splitBy", split_by),
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[list[str] | None]("clusterId", cluster_id),
                param[list[str] | None]("excludeClusterId", exclude_cluster_id),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[RFC3339DateTime | None]("initializedFrom", initialized_from),
                param[RFC3339DateTime | None]("initializedTo", initialized_to),
                param[RFC3339DateTime | None]("updatedFrom", updated_from),
                param[RFC3339DateTime | None]("updatedTo", updated_to),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("category", category),
                param[list[str] | None]("taxonomy", taxonomy),
                param[list[str] | None]("source", source),
                param[list[str] | None]("sourceGroup", source_group),
                param[int | None]("minUniqueSources", min_unique_sources),
                param[float | None]("minSourceDiversity", min_source_diversity),
                param[list[str] | None]("personWikidataId", person_wikidata_id),
                param[str | None]("personName", person_name),
                param[list[str] | None]("companyId", company_id),
                param[str | None]("companyName", company_name),
                param[list[str] | None]("companyDomain", company_domain),
                param[list[str] | None]("companySymbol", company_symbol),
                param[list[str] | None]("companyIsin", company_isin),
                param[list[str] | None]("companySymbolIsin", company_symbol_isin),
                param[list[str] | None]("country", country),
                param[list[str] | None]("state", state),
                param[list[str] | None]("city", city),
                param[list[str] | None]("area", area),
                param[int | None]("minClusterSize", min_cluster_size),
                param[int | None]("maxClusterSize", max_cluster_size),
                param[bool | None]("nameExists", name_exists),
                param[float | None]("positiveSentimentFrom", positive_sentiment_from),
                param[float | None]("positiveSentimentTo", positive_sentiment_to),
                param[float | None]("neutralSentimentFrom", neutral_sentiment_from),
                param[float | None]("neutralSentimentTo", neutral_sentiment_to),
                param[float | None]("negativeSentimentFrom", negative_sentiment_from),
                param[float | None]("negativeSentimentTo", negative_sentiment_to),
                param[bool | None]("showDuplicates", show_duplicates),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[StatResult],
            error_mapper=get_story_counts_error_mapper,
            request_options=request_options,
        )

    def get_story_history(
        self,
        *,
        cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        sort_by: SortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        changelog_exists: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryHistoryResult, GetStoryHistoryErrorBody]:
        """Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and
        changelogs.

        Args:
            cluster_id: Filter history records by story cluster ID. Multiple values are combined with OR.
            from_: Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            sort_by: Field used to sort history records in descending order. Accepts createdAt or triggeredAt and
                defaults to createdAt.
            page: Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations.
            size: Integer. Number of stories results per page, from 0 to 100.
            changelog_exists: Filter by whether a history record contains a changelog. Use true to require one or false
                to require its absence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stories/history"),
            query_params=[
                param[list[str] | None]("clusterId", cluster_id),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[bool | None]("changelogExists", changelog_exists),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[StoryHistoryResult],
            error_mapper=get_story_history_error_mapper,
            request_options=request_options,
        )

    def peek_article_refresh(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ArticleRefreshPeekResponse, PeekArticleRefreshErrorBody]:
        """Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any
        processing or creating a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/articles/refresh/peek"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ArticleRefreshPeekResponse],
            error_mapper=peek_article_refresh_error_mapper,
            request_options=request_options,
        )

    def search_articles(
        self,
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
        size: int | None = None,
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
        show_num_results: bool | None = None,
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
    ) -> ApiResult[QuerySearchResult, SearchArticlesErrorBody]:
        """Search and filter all news articles available via the Perigon API. The result includes a list of individual
        articles that were matched to your specific criteria.

        Args:
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
            size: Integer. The number of articles to return per page in the paginated response.
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
            show_num_results: Boolean. Whether to show the total number of all matched articles. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 articles.
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
            http_method="GET",
            url_template=self._server.default("/v1/articles/all"),
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
                param[int | None]("size", size),
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
                param[bool | None]("showNumResults", show_num_results),
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
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[QuerySearchResult],
            error_mapper=search_articles_error_mapper,
            request_options=request_options,
        )

    def search_stories(
        self,
        *,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        sort_by: ClustersListSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_story_page_info: bool | None = None,
        show_num_results: bool | None = None,
        show_duplicates: bool | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        expand_articles: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StorySearchResult, SearchStoriesErrorBody]:
        """Track evolving narratives and top news headlines with the '**Stories**' endpoint — it returns structured
        clusters of related articles with summaries, key points, sentiment scores, and metadata on top people,
        companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what
        they impact, and where they're gaining traction globally.

        Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single
        story, identified by the ``clusterId`` field. Once a story reaches five articles, a story title is automatically
        generated based on its content. Stories update as new coverage is processed and key details evolve.

        To fetch all articles within a specific story, query the ``/articles/all`` endpoint using the ``clusterId``
        parameter.

        Args:
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            sort_by: String. Determines the story sorting order. Options include createdAt (default, when stories first
                emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance
                (best match to query), count (by unique article count), and totalCount (by total article count including
                reprints).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_story_page_info: Boolean.
            show_num_results: Boolean. Show total number of results. By default set to false, will cap result count at
                10000.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
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
            expand_articles: Boolean. Preview 5 articles from the cluster.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stories/all"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[list[str] | None]("clusterId", cluster_id),
                param[list[str] | None]("excludeClusterId", exclude_cluster_id),
                param[ClustersListSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[RFC3339DateTime | None]("initializedFrom", initialized_from),
                param[RFC3339DateTime | None]("initializedTo", initialized_to),
                param[RFC3339DateTime | None]("updatedFrom", updated_from),
                param[RFC3339DateTime | None]("updatedTo", updated_to),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("category", category),
                param[list[str] | None]("taxonomy", taxonomy),
                param[list[str] | None]("source", source),
                param[list[str] | None]("sourceGroup", source_group),
                param[int | None]("minUniqueSources", min_unique_sources),
                param[float | None]("minSourceDiversity", min_source_diversity),
                param[list[str] | None]("personWikidataId", person_wikidata_id),
                param[str | None]("personName", person_name),
                param[list[str] | None]("companyId", company_id),
                param[str | None]("companyName", company_name),
                param[list[str] | None]("companyDomain", company_domain),
                param[list[str] | None]("companySymbol", company_symbol),
                param[list[str] | None]("companyIsin", company_isin),
                param[list[str] | None]("companySymbolIsin", company_symbol_isin),
                param[list[str] | None]("country", country),
                param[list[str] | None]("state", state),
                param[list[str] | None]("city", city),
                param[list[str] | None]("area", area),
                param[int | None]("minClusterSize", min_cluster_size),
                param[int | None]("maxClusterSize", max_cluster_size),
                param[bool | None]("nameExists", name_exists),
                param[float | None]("positiveSentimentFrom", positive_sentiment_from),
                param[float | None]("positiveSentimentTo", positive_sentiment_to),
                param[float | None]("neutralSentimentFrom", neutral_sentiment_from),
                param[float | None]("neutralSentimentTo", neutral_sentiment_to),
                param[float | None]("negativeSentimentFrom", negative_sentiment_from),
                param[float | None]("negativeSentimentTo", negative_sentiment_to),
                param[bool | None]("showStoryPageInfo", show_story_page_info),
                param[bool | None]("showNumResults", show_num_results),
                param[bool | None]("showDuplicates", show_duplicates),
                param[bool | None]("showHighlighting", show_highlighting),
                param[int | None]("highlightFragmentSize", highlight_fragment_size),
                param[int | None]("highlightNumFragments", highlight_num_fragments),
                param[str | None]("highlightPreTag", highlight_pre_tag),
                param[str | None]("highlightPostTag", highlight_post_tag),
                param[str | None]("highlightQ", highlight_q),
                param[bool | None]("expandArticles", expand_articles),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[StorySearchResult],
            error_mapper=search_stories_error_mapper,
            request_options=request_options,
        )

    def submit_article_refresh_job(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ArticleRefreshJobResponse, SubmitArticleRefreshJobErrorBody]:
        """Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately;
        the rest are scheduled for processing. Poll the job status endpoint for results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/articles/refresh/jobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ArticleRefreshJobResponse],
            error_mapper=submit_article_refresh_job_error_mapper,
            request_options=request_options,
        )

    def vector_search_articles(
        self,
        body: ArticleSearchParams | ArticleSearchParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ArticlesVectorSearchResult, VectorSearchArticlesErrorBody]:
        """Perform a natural language search over news articles from the past 6 months using semantic relevance. The
        result includes a list of articles most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vector/news/all"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ArticleSearchParams | ArticleSearchParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ArticlesVectorSearchResult],
            error_mapper=vector_search_articles_error_mapper,
            request_options=request_options,
        )


class AsyncNewsStoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_article_refresh_job(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ArticleRefreshJobResponse, GetArticleRefreshJobErrorBody]:
        """Returns the job status together with whatever per-article results have been computed so far. Results are
        immutable snapshots taken when each article was processed.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/articles/refresh/jobs/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ArticleRefreshJobResponse],
            error_mapper=get_article_refresh_job_error_mapper,
            request_options=request_options,
        )

    async def get_story_counts(
        self,
        *,
        split_by: SplitByOrStr = SplitBy.MONTH,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_duplicates: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatResult, GetStoryCountsErrorBody]:
        """Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and
        filtered by supported story attributes.

        Args:
            split_by: Time interval used to group story counts. Accepts hour, day, week, or month and defaults to month.
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stories/stats"),
            query_params=[
                param[SplitByOrStr]("splitBy", split_by),
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[list[str] | None]("clusterId", cluster_id),
                param[list[str] | None]("excludeClusterId", exclude_cluster_id),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[RFC3339DateTime | None]("initializedFrom", initialized_from),
                param[RFC3339DateTime | None]("initializedTo", initialized_to),
                param[RFC3339DateTime | None]("updatedFrom", updated_from),
                param[RFC3339DateTime | None]("updatedTo", updated_to),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("category", category),
                param[list[str] | None]("taxonomy", taxonomy),
                param[list[str] | None]("source", source),
                param[list[str] | None]("sourceGroup", source_group),
                param[int | None]("minUniqueSources", min_unique_sources),
                param[float | None]("minSourceDiversity", min_source_diversity),
                param[list[str] | None]("personWikidataId", person_wikidata_id),
                param[str | None]("personName", person_name),
                param[list[str] | None]("companyId", company_id),
                param[str | None]("companyName", company_name),
                param[list[str] | None]("companyDomain", company_domain),
                param[list[str] | None]("companySymbol", company_symbol),
                param[list[str] | None]("companyIsin", company_isin),
                param[list[str] | None]("companySymbolIsin", company_symbol_isin),
                param[list[str] | None]("country", country),
                param[list[str] | None]("state", state),
                param[list[str] | None]("city", city),
                param[list[str] | None]("area", area),
                param[int | None]("minClusterSize", min_cluster_size),
                param[int | None]("maxClusterSize", max_cluster_size),
                param[bool | None]("nameExists", name_exists),
                param[float | None]("positiveSentimentFrom", positive_sentiment_from),
                param[float | None]("positiveSentimentTo", positive_sentiment_to),
                param[float | None]("neutralSentimentFrom", neutral_sentiment_from),
                param[float | None]("neutralSentimentTo", neutral_sentiment_to),
                param[float | None]("negativeSentimentFrom", negative_sentiment_from),
                param[float | None]("negativeSentimentTo", negative_sentiment_to),
                param[bool | None]("showDuplicates", show_duplicates),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[StatResult],
            error_mapper=get_story_counts_error_mapper,
            request_options=request_options,
        )

    async def get_story_history(
        self,
        *,
        cluster_id: list[str] | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        sort_by: SortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        changelog_exists: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryHistoryResult, GetStoryHistoryErrorBody]:
        """Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and
        changelogs.

        Args:
            cluster_id: Filter history records by story cluster ID. Multiple values are combined with OR.
            from_: Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            sort_by: Field used to sort history records in descending order. Accepts createdAt or triggeredAt and
                defaults to createdAt.
            page: Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations.
            size: Integer. Number of stories results per page, from 0 to 100.
            changelog_exists: Filter by whether a history record contains a changelog. Use true to require one or false
                to require its absence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stories/history"),
            query_params=[
                param[list[str] | None]("clusterId", cluster_id),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[bool | None]("changelogExists", changelog_exists),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[StoryHistoryResult],
            error_mapper=get_story_history_error_mapper,
            request_options=request_options,
        )

    async def peek_article_refresh(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ArticleRefreshPeekResponse, PeekArticleRefreshErrorBody]:
        """Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any
        processing or creating a job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/articles/refresh/peek"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ArticleRefreshPeekResponse],
            error_mapper=peek_article_refresh_error_mapper,
            request_options=request_options,
        )

    async def search_articles(
        self,
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
        size: int | None = None,
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
        show_num_results: bool | None = None,
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
    ) -> ApiResult[QuerySearchResult, SearchArticlesErrorBody]:
        """Search and filter all news articles available via the Perigon API. The result includes a list of individual
        articles that were matched to your specific criteria.

        Args:
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
            size: Integer. The number of articles to return per page in the paginated response.
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
            show_num_results: Boolean. Whether to show the total number of all matched articles. Default value is false
                which makes queries a bit more efficient but also counts up to 10000 articles.
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
            http_method="GET",
            url_template=self._server.default("/v1/articles/all"),
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
                param[int | None]("size", size),
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
                param[bool | None]("showNumResults", show_num_results),
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
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[QuerySearchResult],
            error_mapper=search_articles_error_mapper,
            request_options=request_options,
        )

    async def search_stories(
        self,
        *,
        q: str | None = None,
        name: str | None = None,
        cluster_id: list[str] | None = None,
        exclude_cluster_id: list[str] | None = None,
        sort_by: ClustersListSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        from_: RFC3339DateTime | None = None,
        to: RFC3339DateTime | None = None,
        initialized_from: RFC3339DateTime | None = None,
        initialized_to: RFC3339DateTime | None = None,
        updated_from: RFC3339DateTime | None = None,
        updated_to: RFC3339DateTime | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        taxonomy: list[str] | None = None,
        source: list[str] | None = None,
        source_group: list[str] | None = None,
        min_unique_sources: int | None = None,
        min_source_diversity: float | None = None,
        person_wikidata_id: list[str] | None = None,
        person_name: str | None = None,
        company_id: list[str] | None = None,
        company_name: str | None = None,
        company_domain: list[str] | None = None,
        company_symbol: list[str] | None = None,
        company_isin: list[str] | None = None,
        company_symbol_isin: list[str] | None = None,
        country: list[str] | None = None,
        state: list[str] | None = None,
        city: list[str] | None = None,
        area: list[str] | None = None,
        min_cluster_size: int | None = None,
        max_cluster_size: int | None = None,
        name_exists: bool | None = None,
        positive_sentiment_from: float | None = None,
        positive_sentiment_to: float | None = None,
        neutral_sentiment_from: float | None = None,
        neutral_sentiment_to: float | None = None,
        negative_sentiment_from: float | None = None,
        negative_sentiment_to: float | None = None,
        show_story_page_info: bool | None = None,
        show_num_results: bool | None = None,
        show_duplicates: bool | None = None,
        show_highlighting: bool | None = None,
        highlight_fragment_size: int | None = None,
        highlight_num_fragments: int | None = None,
        highlight_pre_tag: str | None = None,
        highlight_post_tag: str | None = None,
        highlight_q: str | None = None,
        expand_articles: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StorySearchResult, SearchStoriesErrorBody]:
        """Track evolving narratives and top news headlines with the '**Stories**' endpoint — it returns structured
        clusters of related articles with summaries, key points, sentiment scores, and metadata on top people,
        companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what
        they impact, and where they're gaining traction globally.

        Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single
        story, identified by the ``clusterId`` field. Once a story reaches five articles, a story title is automatically
        generated based on its content. Stories update as new coverage is processed and key details evolve.

        To fetch all articles within a specific story, query the ``/articles/all`` endpoint using the ``clusterId``
        parameter.

        Args:
            q: String. Primary search query for filtering stories based on their name, summary, and key points. Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            name: String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes,
                and wildcards for matching name variations.
            cluster_id: String Array. Filter to specific stories using their unique identifiers. Each clusterId
                represents a distinct story that groups related articles. Multiple values create an OR filter.
            exclude_cluster_id: String Array. Excludes specific stories from the results by their unique identifiers.
                Use this parameter to filter out unwanted or previously seen stories.
            sort_by: String. Determines the story sorting order. Options include createdAt (default, when stories first
                emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance
                (best match to query), count (by unique article count), and totalCount (by total article count including
                reprints).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of articles to return per page in the paginated response.
            from_: Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
            to: Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
            initialized_from: Filter for stories initialized on or after this date. A story is initialized when it
                becomes visible with generated story data.
            initialized_to: Filter for stories initialized on or before this date. A story is initialized when it
                becomes visible with generated story data.
            updated_from: Date. Filter for stories that received new articles after this date. Useful for tracking
                developing news events or evolving storylines.
            updated_to: Date. Filter for stories that received new articles before this date. Useful for tracking
                developing news events or evolving storylines.
            topic: String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College
                Sports. Topics are more granular than categories, and stories can include multiple topics based on their
                constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values
                create an OR filter.
            category: String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business,
                or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within
                each story. Multiple values create an OR filter.
            taxonomy: String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of
                the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized
                based on their constituent articles. Multiple values create an OR filter.
            source: String Array. Filter stories that contain articles from specific publisher domains or subdomains.
                Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains
                at least one article from any of the specified sources. Multiple values create an OR filter.
            source_group: String Array. Filter stories that contain articles from publishers in Perigon's curated
                bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any
                publisher in the specified bundles. Multiple values create an OR filter.
            min_unique_sources: Integer. Specifies the minimum number of unique sources required for a story to appear
                in results. Higher values return more significant stories covered by multiple publications. Default is
                3.
            min_source_diversity: Float. Minimum ratio of unique sources to unique articles (uniqueSources /
                uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires
                at least 1 unique source per 20 articles. Not applied by default.
            person_wikidata_id: String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories
                where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked
                individuals.
            person_name: String. Filter stories by exact name matches of top mentioned people. Does not support Boolean
                or complex logic. For available person entities, consult the /people endpoint.
            company_id: String Array. Filter stories by identifiers of top mentioned companies. Returns stories where
                these companies appear prominently. For a complete list of tracked companies, refer to the /companies
                endpoint.
            company_name: String. Filter stories by names of top mentioned companies. Performs an exact match on company
                names in the topCompanies field.
            company_domain: String Array. Filter stories by domains of top mentioned companies (e.g., apple.com).
                Returns stories where companies with these domains appear prominently. For available company entities,
                consult the /companies endpoint.
            company_symbol: String Array. Filter stories by stock symbols of top mentioned companies. Returns stories
                where companies with these symbols appear prominently. For available company entities and their symbols,
                consult the /companies endpoint.
            company_isin: String Array. Filter stories by ISIN codes of top mentioned companies (International
                Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently.
                For available company entities and their ISINs, consult the /companies endpoint.
            company_symbol_isin: String Array. Filter stories by ISIN codes on ticker listings of top mentioned
                companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns
                stories where those companies appear prominently. For available company entities and their listing
                ISINs, consult the /companies endpoint.
            country: String Array. Country code to filter by country. If multiple parameters are passed, they will be
                applied as OR operations.
            state: String Array. Filter local news by state. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            city: String Array. Filter local news by city. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            area: String Array. Filter local news by area. Applies only to local news, when this param is passed
                non-local news will not be returned. If multiple parameters are passed, they will be applied as OR
                operations.
            min_cluster_size: Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of
                unique articles.
            max_cluster_size: Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of
                unique articles in the cluster.
            name_exists: Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note
                that stories only receive names after they contain at least 5 unique articles.
            positive_sentiment_from: Filter stories with an aggregate positive sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            positive_sentiment_to: Filter stories with an aggregate positive sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
            neutral_sentiment_from: Filter stories with an aggregate neutral sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            neutral_sentiment_to: Filter stories with an aggregate neutral sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
            negative_sentiment_from: Filter stories with an aggregate negative sentiment score greater than or equal to
                the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            negative_sentiment_to: Filter stories with an aggregate negative sentiment score less than or equal to the
                specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
            show_story_page_info: Boolean.
            show_num_results: Boolean. Show total number of results. By default set to false, will cap result count at
                10000.
            show_duplicates: Boolean. Stories are deduplicated by default. If a story is deduplicated, all future
                articles are merged into the original story. duplicateOf field contains the original cluster Id. When
                showDuplicates=true, all stories are shown.
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
            expand_articles: Boolean. Preview 5 articles from the cluster.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stories/all"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[list[str] | None]("clusterId", cluster_id),
                param[list[str] | None]("excludeClusterId", exclude_cluster_id),
                param[ClustersListSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[RFC3339DateTime | None]("from", from_),
                param[RFC3339DateTime | None]("to", to),
                param[RFC3339DateTime | None]("initializedFrom", initialized_from),
                param[RFC3339DateTime | None]("initializedTo", initialized_to),
                param[RFC3339DateTime | None]("updatedFrom", updated_from),
                param[RFC3339DateTime | None]("updatedTo", updated_to),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("category", category),
                param[list[str] | None]("taxonomy", taxonomy),
                param[list[str] | None]("source", source),
                param[list[str] | None]("sourceGroup", source_group),
                param[int | None]("minUniqueSources", min_unique_sources),
                param[float | None]("minSourceDiversity", min_source_diversity),
                param[list[str] | None]("personWikidataId", person_wikidata_id),
                param[str | None]("personName", person_name),
                param[list[str] | None]("companyId", company_id),
                param[str | None]("companyName", company_name),
                param[list[str] | None]("companyDomain", company_domain),
                param[list[str] | None]("companySymbol", company_symbol),
                param[list[str] | None]("companyIsin", company_isin),
                param[list[str] | None]("companySymbolIsin", company_symbol_isin),
                param[list[str] | None]("country", country),
                param[list[str] | None]("state", state),
                param[list[str] | None]("city", city),
                param[list[str] | None]("area", area),
                param[int | None]("minClusterSize", min_cluster_size),
                param[int | None]("maxClusterSize", max_cluster_size),
                param[bool | None]("nameExists", name_exists),
                param[float | None]("positiveSentimentFrom", positive_sentiment_from),
                param[float | None]("positiveSentimentTo", positive_sentiment_to),
                param[float | None]("neutralSentimentFrom", neutral_sentiment_from),
                param[float | None]("neutralSentimentTo", neutral_sentiment_to),
                param[float | None]("negativeSentimentFrom", negative_sentiment_from),
                param[float | None]("negativeSentimentTo", negative_sentiment_to),
                param[bool | None]("showStoryPageInfo", show_story_page_info),
                param[bool | None]("showNumResults", show_num_results),
                param[bool | None]("showDuplicates", show_duplicates),
                param[bool | None]("showHighlighting", show_highlighting),
                param[int | None]("highlightFragmentSize", highlight_fragment_size),
                param[int | None]("highlightNumFragments", highlight_num_fragments),
                param[str | None]("highlightPreTag", highlight_pre_tag),
                param[str | None]("highlightPostTag", highlight_post_tag),
                param[str | None]("highlightQ", highlight_q),
                param[bool | None]("expandArticles", expand_articles),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[StorySearchResult],
            error_mapper=search_stories_error_mapper,
            request_options=request_options,
        )

    async def submit_article_refresh_job(
        self,
        body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ArticleRefreshJobResponse, SubmitArticleRefreshJobErrorBody]:
        """Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately;
        the rest are scheduled for processing. Poll the job status endpoint for results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/articles/refresh/jobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ArticleRefreshJobResponse],
            error_mapper=submit_article_refresh_job_error_mapper,
            request_options=request_options,
        )

    async def vector_search_articles(
        self,
        body: ArticleSearchParams | ArticleSearchParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ArticlesVectorSearchResult, VectorSearchArticlesErrorBody]:
        """Perform a natural language search over news articles from the past 6 months using semantic relevance. The
        result includes a list of articles most closely matched to your query intent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vector/news/all"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ArticleSearchParams | ArticleSearchParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ArticlesVectorSearchResult],
            error_mapper=vector_search_articles_error_mapper,
            request_options=request_options,
        )
