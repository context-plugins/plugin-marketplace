from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_journalist_by_id_error import GetJournalistByIdErrorBody, get_journalist_by_id_error_mapper
from ..errors.search_companies_error import SearchCompaniesErrorBody, search_companies_error_mapper
from ..errors.search_journalists_error import SearchJournalistsErrorBody, search_journalists_error_mapper
from ..errors.search_people_error import SearchPeopleErrorBody, search_people_error_mapper
from ..errors.search_sources_error import SearchSourcesErrorBody, search_sources_error_mapper
from ..errors.search_topics_error import SearchTopicsErrorBody, search_topics_error_mapper
from ..models.company_search_result import CompanySearchResult
from ..models.enums.journalists_sort_by import JournalistsSortByOrStr
from ..models.enums.sources_sort_by import SourcesSortByOrStr
from ..models.journalist import Journalist
from ..models.journalist_search_result import JournalistSearchResult
from ..models.people_search_result import PeopleSearchResult
from ..models.source_search_result import SourceSearchResult
from ..models.topic_search_result import TopicSearchResult
from ..server.server import Server


class SupplementalEndpoints:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SupplementalEndpointsWithRawResponse(client, server, auth)

    def get_journalist_by_id(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Journalist:
        """Find additional details on a journalist by using the journalist ID found in an article response object.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 404 - Resource Not Found 500 - Server Error 400 - Bad Request 403 - Request
                Forbidden 429 - Too Many Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_journalist_by_id(id_, request_options=request_options))

    def search_companies(
        self,
        *,
        id_: list[str] | None = None,
        symbol: list[str] | None = None,
        symbol_isin: list[str] | None = None,
        domain: list[str] | None = None,
        country: list[str] | None = None,
        exchange: list[str] | None = None,
        num_employees_from: int | None = None,
        num_employees_to: int | None = None,
        ipo_from: RFC3339DateTime | None = None,
        ipo_to: RFC3339DateTime | None = None,
        q: str | None = None,
        name: str | None = None,
        industry: str | None = None,
        sector: str | None = None,
        size: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanySearchResult:
        """Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports
        Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

        Args:
            id_: String Array. Filter by unique company identifiers. Multiple values create an OR filter.
            symbol: String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values
                create an OR filter.
            symbol_isin: String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than
                the company-level ISIN. Multiple values create an OR filter.
            domain: String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple
                values create an OR filter.
            country: String Array. Filter by company headquarters country. Multiple values create an OR filter.
            exchange: String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple
                values create an OR filter.
            num_employees_from: Integer. Filter for companies with at least this many employees.
            num_employees_to: Integer. Filter for companies with no more than this many employees.
            ipo_from: Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g.,
                2023-01-01T00:00:00) or yyyy-mm-dd format.
            ipo_to: Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g.,
                2023-12-31T23:59:59) or yyyy-mm-dd format.
            q: String. Primary search query for filtering companies across name, alternative names, domains, and ticker
                symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?)
                for flexible searching.
            name: String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with
                quotes, and wildcards (* and ?) for flexible searching.
            industry: String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT),
                exact phrases with quotes, and wildcards (* and ?) for flexible searching.
            sector: String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            size: Integer. The number of companies to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_companies(
                id_=id_,
                symbol=symbol,
                symbol_isin=symbol_isin,
                domain=domain,
                country=country,
                exchange=exchange,
                num_employees_from=num_employees_from,
                num_employees_to=num_employees_to,
                ipo_from=ipo_from,
                ipo_to=ipo_to,
                q=q,
                name=name,
                industry=industry,
                sector=sector,
                size=size,
                page=page,
                request_options=request_options,
            ),
        )

    def search_journalists(
        self,
        *,
        id_: list[str] | None = None,
        q: str | None = None,
        name: str | None = None,
        twitter: str | None = None,
        sort_by: JournalistsSortByOrStr | None = None,
        size: int | None = None,
        page: int | None = None,
        source: list[str] | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        label: list[str] | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        location_country: list[str] | None = None,
        location_state: list[str] | None = None,
        location_county: list[str] | None = None,
        location_city: list[str] | None = None,
        location_area: list[str] | None = None,
        updated_at_from: RFC3339DateTime | None = None,
        updated_at_to: RFC3339DateTime | None = None,
        show_num_results: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JournalistSearchResult:
        """Search journalists using broad search attributes. Our database contains over 230,000 journalists from around
        the world and is refreshed frequently.

        Args:
            id_: String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find
                journalists matching any of the specified IDs.
            q: String. Primary search query for filtering journalists based on their name, title, and Twitter bio.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            name: String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            twitter: String. Filter journalists by their exact Twitter handle, without the @ symbol.
            sort_by: String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or
                linkedinFollowers. When omitted, results are sorted by relevance.
            size: Integer. The number of journalists to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            source: String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            topic: String Array. Filter journalists by the top topics they cover. Topics are more specific themes that
                the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple
                parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data
                field.)
            category: String Array. Filter journalists by the top categories they cover. Categories are general themes
                that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are
                passed, they will be applied as OR operations. (Searches inside the topCategories data field.)
            label: String Array. Filter journalists by the most common label tagged to the articles they publish. This
                accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.)
            min_monthly_posts: Integer. Filter for journalists who publish at least this many articles per month. Used
                to identify more active journalists.
            max_monthly_posts: Integer. Filter for journalists who publish no more than this many articles per month.
            country: String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO
                3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR
                filter.
            location_country: String Array. Filter journalists by their profile location country
                (``locations.country``). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb,
                jp). ``uk`` is accepted as an alias for ``gb``. Distinct from ``country``, which filters reporting focus
                (``topCountries``). Multiple values create an OR filter.
            location_state: String Array. Filter journalists by their profile location state or region
                (``locations.state``). For US locations this is the two-letter state code (e.g., NY, CA). Multiple
                values create an OR filter.
            location_county: String Array. Filter journalists by their profile location county (``locations.county``).
                County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values
                create an OR filter.
            location_city: String Array. Filter journalists by their profile location city (``locations.city``).
                Multiple values create an OR filter.
            location_area: String Array. Filter journalists by their profile location area — neighborhood, borough, or
                district (``locations.area``). Multiple values create an OR filter.
            updated_at_from: Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
            updated_at_to: Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_journalists(
                id_=id_,
                q=q,
                name=name,
                twitter=twitter,
                sort_by=sort_by,
                size=size,
                page=page,
                source=source,
                topic=topic,
                category=category,
                label=label,
                min_monthly_posts=min_monthly_posts,
                max_monthly_posts=max_monthly_posts,
                country=country,
                location_country=location_country,
                location_state=location_state,
                location_county=location_county,
                location_city=location_city,
                location_area=location_area,
                updated_at_from=updated_at_from,
                updated_at_to=updated_at_to,
                show_num_results=show_num_results,
                request_options=request_options,
            ),
        )

    def search_people(
        self,
        *,
        name: str | None = None,
        wikidata_id: list[str] | None = None,
        occupation_id: list[str] | None = None,
        occupation_label: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PeopleSearchResult:
        """Search and retrieve additional information on known persons that exist within Perigon's entity database and
        as referenced in any article response object. Our database contains over 650,000 people from around the world
        and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be
        used to lookup even more information on Wikidata's website.

        Args:
            name: String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes,
                and wildcards (* and ?) for flexible searching.
            wikidata_id: String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers
                from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values
                create an OR filter.
            occupation_id: String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for
                actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR
                filter.
            occupation_label: String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of people to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_people(
                name=name,
                wikidata_id=wikidata_id,
                occupation_id=occupation_id,
                occupation_label=occupation_label,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    def search_sources(
        self,
        *,
        domain: list[str] | None = None,
        name: str | None = None,
        source_group: str | None = None,
        sort_by: SourcesSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        min_monthly_visits: int | None = None,
        max_monthly_visits: int | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        source_county: list[str] | None = None,
        source_city: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        category: list[str] | None = None,
        topic: list[str] | None = None,
        label: list[str] | None = None,
        paywall: bool | None = None,
        show_subdomains: bool | None = None,
        show_num_results: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourceSearchResult:
        """Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of
        individual media sources that were matched to your specific criteria.

        Args:
            domain: String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for
                pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter.
            name: String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            source_group: String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources
                within the specified group. See documentation for available source groups.
            sort_by: String. Determines the source sorting order. Options include relevance (default, best match to
                query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count),
                and avgMonthlyPosts (by number of articles published monthly).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of sources to return per page in the paginated response.
            min_monthly_visits: Integer. Filter for sources with at least this many monthly visitors. Used to target
                publishers by audience size.
            max_monthly_visits: Integer. Filter for sources with no more than this many monthly visitors. Used to target
                publishers by audience size.
            min_monthly_posts: Integer. Filter for sources that publish at least this many articles per month. Used to
                target publishers by content volume.
            max_monthly_posts: Integer. Filter for sources that publish no more than this many articles per month. Used
                to target publishers by content volume.
            country: String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_country: String Array. Filter for local publications based in specific countries. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_state: String Array. Filter for local publications based in specific states or regions. Uses standard
                two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes.
                Multiple values create an OR filter.
            source_county: String Array. Filter for local publications based in specific counties. Multiple values
                create an OR filter.
            source_city: String Array. Filter for local publications based in specific cities. Multiple values create an
                OR filter.
            source_lat: Float. Latitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLon and sourceMaxDistance for radius search.
            source_lon: Float. Longitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLat and sourceMaxDistance for radius search.
            source_max_distance: Float. Maximum distance in kilometers from the coordinates defined by sourceLat and
                sourceLon. Defines the radius for local publication searches.
            category: String Array. Filter sources by their primary content categories such as Politics, Tech, Sports,
                Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR
                filter.
            topic: String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency,
                Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple
                values create an OR filter.
            label: String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news).
                Returns sources where the specified label is common in their published content. See documentation for
                all available labels. Multiple values create an OR filter.
            paywall: Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find
                sources without paywalls.
            show_subdomains: Boolean. Controls whether subdomains are included as separate results. When true (default),
                subdomains appear as distinct sources. When false, results are consolidated to parent domains only.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_sources(
                domain=domain,
                name=name,
                source_group=source_group,
                sort_by=sort_by,
                page=page,
                size=size,
                min_monthly_visits=min_monthly_visits,
                max_monthly_visits=max_monthly_visits,
                min_monthly_posts=min_monthly_posts,
                max_monthly_posts=max_monthly_posts,
                country=country,
                source_country=source_country,
                source_state=source_state,
                source_county=source_county,
                source_city=source_city,
                source_lat=source_lat,
                source_lon=source_lon,
                source_max_distance=source_max_distance,
                category=category,
                topic=topic,
                label=label,
                paywall=paywall,
                show_subdomains=show_subdomains,
                show_num_results=show_num_results,
                request_options=request_options,
            ),
        )

    def search_topics(
        self,
        *,
        name: str | None = None,
        category: str | None = None,
        subcategory: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TopicSearchResult:
        """Search through all available Topics that exist within the Perigon Database.

        Args:
            name: String. Search for topics by exact name or partial text match. Does not support wildcards. Examples
                include Markets, Cryptocurrency, Climate Change, etc.
            category: String. Filter topics by broad article categories such as Politics, Tech, Sports, Business,
                Finance, Entertainment, etc.
            subcategory: String. Filter topics by their specific subcategory. Subcategories provide more granular
                classification beyond the main category, such as TV or Event.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of topics to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_topics(
                name=name,
                category=category,
                subcategory=subcategory,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SupplementalEndpointsWithRawResponse:
        return self._with_raw_response


class AsyncSupplementalEndpoints:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSupplementalEndpointsWithRawResponse(client, server, auth)

    async def get_journalist_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Journalist:
        """Find additional details on a journalist by using the journalist ID found in an article response object.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 404 - Resource Not Found 500 - Server Error 400 - Bad Request 403 - Request
                Forbidden 429 - Too Many Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_journalist_by_id(id_, request_options=request_options))

    async def search_companies(
        self,
        *,
        id_: list[str] | None = None,
        symbol: list[str] | None = None,
        symbol_isin: list[str] | None = None,
        domain: list[str] | None = None,
        country: list[str] | None = None,
        exchange: list[str] | None = None,
        num_employees_from: int | None = None,
        num_employees_to: int | None = None,
        ipo_from: RFC3339DateTime | None = None,
        ipo_to: RFC3339DateTime | None = None,
        q: str | None = None,
        name: str | None = None,
        industry: str | None = None,
        sector: str | None = None,
        size: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanySearchResult:
        """Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports
        Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

        Args:
            id_: String Array. Filter by unique company identifiers. Multiple values create an OR filter.
            symbol: String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values
                create an OR filter.
            symbol_isin: String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than
                the company-level ISIN. Multiple values create an OR filter.
            domain: String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple
                values create an OR filter.
            country: String Array. Filter by company headquarters country. Multiple values create an OR filter.
            exchange: String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple
                values create an OR filter.
            num_employees_from: Integer. Filter for companies with at least this many employees.
            num_employees_to: Integer. Filter for companies with no more than this many employees.
            ipo_from: Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g.,
                2023-01-01T00:00:00) or yyyy-mm-dd format.
            ipo_to: Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g.,
                2023-12-31T23:59:59) or yyyy-mm-dd format.
            q: String. Primary search query for filtering companies across name, alternative names, domains, and ticker
                symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?)
                for flexible searching.
            name: String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with
                quotes, and wildcards (* and ?) for flexible searching.
            industry: String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT),
                exact phrases with quotes, and wildcards (* and ?) for flexible searching.
            sector: String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            size: Integer. The number of companies to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_companies(
                id_=id_,
                symbol=symbol,
                symbol_isin=symbol_isin,
                domain=domain,
                country=country,
                exchange=exchange,
                num_employees_from=num_employees_from,
                num_employees_to=num_employees_to,
                ipo_from=ipo_from,
                ipo_to=ipo_to,
                q=q,
                name=name,
                industry=industry,
                sector=sector,
                size=size,
                page=page,
                request_options=request_options,
            ),
        )

    async def search_journalists(
        self,
        *,
        id_: list[str] | None = None,
        q: str | None = None,
        name: str | None = None,
        twitter: str | None = None,
        sort_by: JournalistsSortByOrStr | None = None,
        size: int | None = None,
        page: int | None = None,
        source: list[str] | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        label: list[str] | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        location_country: list[str] | None = None,
        location_state: list[str] | None = None,
        location_county: list[str] | None = None,
        location_city: list[str] | None = None,
        location_area: list[str] | None = None,
        updated_at_from: RFC3339DateTime | None = None,
        updated_at_to: RFC3339DateTime | None = None,
        show_num_results: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JournalistSearchResult:
        """Search journalists using broad search attributes. Our database contains over 230,000 journalists from around
        the world and is refreshed frequently.

        Args:
            id_: String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find
                journalists matching any of the specified IDs.
            q: String. Primary search query for filtering journalists based on their name, title, and Twitter bio.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            name: String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            twitter: String. Filter journalists by their exact Twitter handle, without the @ symbol.
            sort_by: String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or
                linkedinFollowers. When omitted, results are sorted by relevance.
            size: Integer. The number of journalists to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            source: String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            topic: String Array. Filter journalists by the top topics they cover. Topics are more specific themes that
                the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple
                parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data
                field.)
            category: String Array. Filter journalists by the top categories they cover. Categories are general themes
                that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are
                passed, they will be applied as OR operations. (Searches inside the topCategories data field.)
            label: String Array. Filter journalists by the most common label tagged to the articles they publish. This
                accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.)
            min_monthly_posts: Integer. Filter for journalists who publish at least this many articles per month. Used
                to identify more active journalists.
            max_monthly_posts: Integer. Filter for journalists who publish no more than this many articles per month.
            country: String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO
                3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR
                filter.
            location_country: String Array. Filter journalists by their profile location country
                (``locations.country``). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb,
                jp). ``uk`` is accepted as an alias for ``gb``. Distinct from ``country``, which filters reporting focus
                (``topCountries``). Multiple values create an OR filter.
            location_state: String Array. Filter journalists by their profile location state or region
                (``locations.state``). For US locations this is the two-letter state code (e.g., NY, CA). Multiple
                values create an OR filter.
            location_county: String Array. Filter journalists by their profile location county (``locations.county``).
                County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values
                create an OR filter.
            location_city: String Array. Filter journalists by their profile location city (``locations.city``).
                Multiple values create an OR filter.
            location_area: String Array. Filter journalists by their profile location area — neighborhood, borough, or
                district (``locations.area``). Multiple values create an OR filter.
            updated_at_from: Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
            updated_at_to: Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_journalists(
                id_=id_,
                q=q,
                name=name,
                twitter=twitter,
                sort_by=sort_by,
                size=size,
                page=page,
                source=source,
                topic=topic,
                category=category,
                label=label,
                min_monthly_posts=min_monthly_posts,
                max_monthly_posts=max_monthly_posts,
                country=country,
                location_country=location_country,
                location_state=location_state,
                location_county=location_county,
                location_city=location_city,
                location_area=location_area,
                updated_at_from=updated_at_from,
                updated_at_to=updated_at_to,
                show_num_results=show_num_results,
                request_options=request_options,
            ),
        )

    async def search_people(
        self,
        *,
        name: str | None = None,
        wikidata_id: list[str] | None = None,
        occupation_id: list[str] | None = None,
        occupation_label: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PeopleSearchResult:
        """Search and retrieve additional information on known persons that exist within Perigon's entity database and
        as referenced in any article response object. Our database contains over 650,000 people from around the world
        and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be
        used to lookup even more information on Wikidata's website.

        Args:
            name: String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes,
                and wildcards (* and ?) for flexible searching.
            wikidata_id: String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers
                from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values
                create an OR filter.
            occupation_id: String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for
                actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR
                filter.
            occupation_label: String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of people to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_people(
                name=name,
                wikidata_id=wikidata_id,
                occupation_id=occupation_id,
                occupation_label=occupation_label,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    async def search_sources(
        self,
        *,
        domain: list[str] | None = None,
        name: str | None = None,
        source_group: str | None = None,
        sort_by: SourcesSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        min_monthly_visits: int | None = None,
        max_monthly_visits: int | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        source_county: list[str] | None = None,
        source_city: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        category: list[str] | None = None,
        topic: list[str] | None = None,
        label: list[str] | None = None,
        paywall: bool | None = None,
        show_subdomains: bool | None = None,
        show_num_results: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourceSearchResult:
        """Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of
        individual media sources that were matched to your specific criteria.

        Args:
            domain: String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for
                pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter.
            name: String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            source_group: String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources
                within the specified group. See documentation for available source groups.
            sort_by: String. Determines the source sorting order. Options include relevance (default, best match to
                query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count),
                and avgMonthlyPosts (by number of articles published monthly).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of sources to return per page in the paginated response.
            min_monthly_visits: Integer. Filter for sources with at least this many monthly visitors. Used to target
                publishers by audience size.
            max_monthly_visits: Integer. Filter for sources with no more than this many monthly visitors. Used to target
                publishers by audience size.
            min_monthly_posts: Integer. Filter for sources that publish at least this many articles per month. Used to
                target publishers by content volume.
            max_monthly_posts: Integer. Filter for sources that publish no more than this many articles per month. Used
                to target publishers by content volume.
            country: String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_country: String Array. Filter for local publications based in specific countries. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_state: String Array. Filter for local publications based in specific states or regions. Uses standard
                two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes.
                Multiple values create an OR filter.
            source_county: String Array. Filter for local publications based in specific counties. Multiple values
                create an OR filter.
            source_city: String Array. Filter for local publications based in specific cities. Multiple values create an
                OR filter.
            source_lat: Float. Latitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLon and sourceMaxDistance for radius search.
            source_lon: Float. Longitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLat and sourceMaxDistance for radius search.
            source_max_distance: Float. Maximum distance in kilometers from the coordinates defined by sourceLat and
                sourceLon. Defines the radius for local publication searches.
            category: String Array. Filter sources by their primary content categories such as Politics, Tech, Sports,
                Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR
                filter.
            topic: String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency,
                Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple
                values create an OR filter.
            label: String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news).
                Returns sources where the specified label is common in their published content. See documentation for
                all available labels. Multiple values create an OR filter.
            paywall: Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find
                sources without paywalls.
            show_subdomains: Boolean. Controls whether subdomains are included as separate results. When true (default),
                subdomains appear as distinct sources. When false, results are consolidated to parent domains only.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_sources(
                domain=domain,
                name=name,
                source_group=source_group,
                sort_by=sort_by,
                page=page,
                size=size,
                min_monthly_visits=min_monthly_visits,
                max_monthly_visits=max_monthly_visits,
                min_monthly_posts=min_monthly_posts,
                max_monthly_posts=max_monthly_posts,
                country=country,
                source_country=source_country,
                source_state=source_state,
                source_county=source_county,
                source_city=source_city,
                source_lat=source_lat,
                source_lon=source_lon,
                source_max_distance=source_max_distance,
                category=category,
                topic=topic,
                label=label,
                paywall=paywall,
                show_subdomains=show_subdomains,
                show_num_results=show_num_results,
                request_options=request_options,
            ),
        )

    async def search_topics(
        self,
        *,
        name: str | None = None,
        category: str | None = None,
        subcategory: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TopicSearchResult:
        """Search through all available Topics that exist within the Perigon Database.

        Args:
            name: String. Search for topics by exact name or partial text match. Does not support wildcards. Examples
                include Markets, Cryptocurrency, Climate Change, etc.
            category: String. Filter topics by broad article categories such as Politics, Tech, Sports, Business,
                Finance, Entertainment, etc.
            subcategory: String. Filter topics by their specific subcategory. Subcategories provide more granular
                classification beyond the main category, such as TV or Event.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of topics to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_topics(
                name=name,
                category=category,
                subcategory=subcategory,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSupplementalEndpointsWithRawResponse:
        return self._with_raw_response


class SupplementalEndpointsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_journalist_by_id(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Journalist, GetJournalistByIdErrorBody]:
        """Find additional details on a journalist by using the journalist ID found in an article response object.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/journalists/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Journalist],
            error_mapper=get_journalist_by_id_error_mapper,
            request_options=request_options,
        )

    def search_companies(
        self,
        *,
        id_: list[str] | None = None,
        symbol: list[str] | None = None,
        symbol_isin: list[str] | None = None,
        domain: list[str] | None = None,
        country: list[str] | None = None,
        exchange: list[str] | None = None,
        num_employees_from: int | None = None,
        num_employees_to: int | None = None,
        ipo_from: RFC3339DateTime | None = None,
        ipo_to: RFC3339DateTime | None = None,
        q: str | None = None,
        name: str | None = None,
        industry: str | None = None,
        sector: str | None = None,
        size: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySearchResult, SearchCompaniesErrorBody]:
        """Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports
        Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

        Args:
            id_: String Array. Filter by unique company identifiers. Multiple values create an OR filter.
            symbol: String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values
                create an OR filter.
            symbol_isin: String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than
                the company-level ISIN. Multiple values create an OR filter.
            domain: String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple
                values create an OR filter.
            country: String Array. Filter by company headquarters country. Multiple values create an OR filter.
            exchange: String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple
                values create an OR filter.
            num_employees_from: Integer. Filter for companies with at least this many employees.
            num_employees_to: Integer. Filter for companies with no more than this many employees.
            ipo_from: Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g.,
                2023-01-01T00:00:00) or yyyy-mm-dd format.
            ipo_to: Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g.,
                2023-12-31T23:59:59) or yyyy-mm-dd format.
            q: String. Primary search query for filtering companies across name, alternative names, domains, and ticker
                symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?)
                for flexible searching.
            name: String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with
                quotes, and wildcards (* and ?) for flexible searching.
            industry: String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT),
                exact phrases with quotes, and wildcards (* and ?) for flexible searching.
            sector: String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            size: Integer. The number of companies to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/companies/all"),
            query_params=[
                param[list[str] | None]("id", id_),
                param[list[str] | None]("symbol", symbol),
                param[list[str] | None]("symbolIsin", symbol_isin),
                param[list[str] | None]("domain", domain),
                param[list[str] | None]("country", country),
                param[list[str] | None]("exchange", exchange),
                param[int | None]("numEmployeesFrom", num_employees_from),
                param[int | None]("numEmployeesTo", num_employees_to),
                param[RFC3339DateTime | None]("ipoFrom", ipo_from),
                param[RFC3339DateTime | None]("ipoTo", ipo_to),
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[str | None]("industry", industry),
                param[str | None]("sector", sector),
                param[int | None]("size", size),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanySearchResult],
            error_mapper=search_companies_error_mapper,
            request_options=request_options,
        )

    def search_journalists(
        self,
        *,
        id_: list[str] | None = None,
        q: str | None = None,
        name: str | None = None,
        twitter: str | None = None,
        sort_by: JournalistsSortByOrStr | None = None,
        size: int | None = None,
        page: int | None = None,
        source: list[str] | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        label: list[str] | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        location_country: list[str] | None = None,
        location_state: list[str] | None = None,
        location_county: list[str] | None = None,
        location_city: list[str] | None = None,
        location_area: list[str] | None = None,
        updated_at_from: RFC3339DateTime | None = None,
        updated_at_to: RFC3339DateTime | None = None,
        show_num_results: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JournalistSearchResult, SearchJournalistsErrorBody]:
        """Search journalists using broad search attributes. Our database contains over 230,000 journalists from around
        the world and is refreshed frequently.

        Args:
            id_: String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find
                journalists matching any of the specified IDs.
            q: String. Primary search query for filtering journalists based on their name, title, and Twitter bio.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            name: String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            twitter: String. Filter journalists by their exact Twitter handle, without the @ symbol.
            sort_by: String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or
                linkedinFollowers. When omitted, results are sorted by relevance.
            size: Integer. The number of journalists to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            source: String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            topic: String Array. Filter journalists by the top topics they cover. Topics are more specific themes that
                the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple
                parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data
                field.)
            category: String Array. Filter journalists by the top categories they cover. Categories are general themes
                that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are
                passed, they will be applied as OR operations. (Searches inside the topCategories data field.)
            label: String Array. Filter journalists by the most common label tagged to the articles they publish. This
                accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.)
            min_monthly_posts: Integer. Filter for journalists who publish at least this many articles per month. Used
                to identify more active journalists.
            max_monthly_posts: Integer. Filter for journalists who publish no more than this many articles per month.
            country: String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO
                3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR
                filter.
            location_country: String Array. Filter journalists by their profile location country
                (``locations.country``). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb,
                jp). ``uk`` is accepted as an alias for ``gb``. Distinct from ``country``, which filters reporting focus
                (``topCountries``). Multiple values create an OR filter.
            location_state: String Array. Filter journalists by their profile location state or region
                (``locations.state``). For US locations this is the two-letter state code (e.g., NY, CA). Multiple
                values create an OR filter.
            location_county: String Array. Filter journalists by their profile location county (``locations.county``).
                County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values
                create an OR filter.
            location_city: String Array. Filter journalists by their profile location city (``locations.city``).
                Multiple values create an OR filter.
            location_area: String Array. Filter journalists by their profile location area — neighborhood, borough, or
                district (``locations.area``). Multiple values create an OR filter.
            updated_at_from: Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
            updated_at_to: Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/journalists/all"),
            query_params=[
                param[list[str] | None]("id", id_),
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[str | None]("twitter", twitter),
                param[JournalistsSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("size", size),
                param[int | None]("page", page),
                param[list[str] | None]("source", source),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("category", category),
                param[list[str] | None]("label", label),
                param[int | None]("minMonthlyPosts", min_monthly_posts),
                param[int | None]("maxMonthlyPosts", max_monthly_posts),
                param[list[str] | None]("country", country),
                param[list[str] | None]("locationCountry", location_country),
                param[list[str] | None]("locationState", location_state),
                param[list[str] | None]("locationCounty", location_county),
                param[list[str] | None]("locationCity", location_city),
                param[list[str] | None]("locationArea", location_area),
                param[RFC3339DateTime | None]("updatedAtFrom", updated_at_from),
                param[RFC3339DateTime | None]("updatedAtTo", updated_at_to),
                param[bool | None]("showNumResults", show_num_results),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[JournalistSearchResult],
            error_mapper=search_journalists_error_mapper,
            request_options=request_options,
        )

    def search_people(
        self,
        *,
        name: str | None = None,
        wikidata_id: list[str] | None = None,
        occupation_id: list[str] | None = None,
        occupation_label: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PeopleSearchResult, SearchPeopleErrorBody]:
        """Search and retrieve additional information on known persons that exist within Perigon's entity database and
        as referenced in any article response object. Our database contains over 650,000 people from around the world
        and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be
        used to lookup even more information on Wikidata's website.

        Args:
            name: String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes,
                and wildcards (* and ?) for flexible searching.
            wikidata_id: String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers
                from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values
                create an OR filter.
            occupation_id: String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for
                actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR
                filter.
            occupation_label: String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of people to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/people/all"),
            query_params=[
                param[str | None]("name", name),
                param[list[str] | None]("wikidataId", wikidata_id),
                param[list[str] | None]("occupationId", occupation_id),
                param[str | None]("occupationLabel", occupation_label),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PeopleSearchResult],
            error_mapper=search_people_error_mapper,
            request_options=request_options,
        )

    def search_sources(
        self,
        *,
        domain: list[str] | None = None,
        name: str | None = None,
        source_group: str | None = None,
        sort_by: SourcesSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        min_monthly_visits: int | None = None,
        max_monthly_visits: int | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        source_county: list[str] | None = None,
        source_city: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        category: list[str] | None = None,
        topic: list[str] | None = None,
        label: list[str] | None = None,
        paywall: bool | None = None,
        show_subdomains: bool | None = None,
        show_num_results: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceSearchResult, SearchSourcesErrorBody]:
        """Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of
        individual media sources that were matched to your specific criteria.

        Args:
            domain: String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for
                pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter.
            name: String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            source_group: String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources
                within the specified group. See documentation for available source groups.
            sort_by: String. Determines the source sorting order. Options include relevance (default, best match to
                query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count),
                and avgMonthlyPosts (by number of articles published monthly).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of sources to return per page in the paginated response.
            min_monthly_visits: Integer. Filter for sources with at least this many monthly visitors. Used to target
                publishers by audience size.
            max_monthly_visits: Integer. Filter for sources with no more than this many monthly visitors. Used to target
                publishers by audience size.
            min_monthly_posts: Integer. Filter for sources that publish at least this many articles per month. Used to
                target publishers by content volume.
            max_monthly_posts: Integer. Filter for sources that publish no more than this many articles per month. Used
                to target publishers by content volume.
            country: String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_country: String Array. Filter for local publications based in specific countries. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_state: String Array. Filter for local publications based in specific states or regions. Uses standard
                two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes.
                Multiple values create an OR filter.
            source_county: String Array. Filter for local publications based in specific counties. Multiple values
                create an OR filter.
            source_city: String Array. Filter for local publications based in specific cities. Multiple values create an
                OR filter.
            source_lat: Float. Latitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLon and sourceMaxDistance for radius search.
            source_lon: Float. Longitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLat and sourceMaxDistance for radius search.
            source_max_distance: Float. Maximum distance in kilometers from the coordinates defined by sourceLat and
                sourceLon. Defines the radius for local publication searches.
            category: String Array. Filter sources by their primary content categories such as Politics, Tech, Sports,
                Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR
                filter.
            topic: String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency,
                Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple
                values create an OR filter.
            label: String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news).
                Returns sources where the specified label is common in their published content. See documentation for
                all available labels. Multiple values create an OR filter.
            paywall: Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find
                sources without paywalls.
            show_subdomains: Boolean. Controls whether subdomains are included as separate results. When true (default),
                subdomains appear as distinct sources. When false, results are consolidated to parent domains only.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sources/all"),
            query_params=[
                param[list[str] | None]("domain", domain),
                param[str | None]("name", name),
                param[str | None]("sourceGroup", source_group),
                param[SourcesSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[int | None]("minMonthlyVisits", min_monthly_visits),
                param[int | None]("maxMonthlyVisits", max_monthly_visits),
                param[int | None]("minMonthlyPosts", min_monthly_posts),
                param[int | None]("maxMonthlyPosts", max_monthly_posts),
                param[list[str] | None]("country", country),
                param[list[str] | None]("sourceCountry", source_country),
                param[list[str] | None]("sourceState", source_state),
                param[list[str] | None]("sourceCounty", source_county),
                param[list[str] | None]("sourceCity", source_city),
                param[float | None]("sourceLat", source_lat),
                param[float | None]("sourceLon", source_lon),
                param[float | None]("sourceMaxDistance", source_max_distance),
                param[list[str] | None]("category", category),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("label", label),
                param[bool | None]("paywall", paywall),
                param[bool | None]("showSubdomains", show_subdomains),
                param[bool | None]("showNumResults", show_num_results),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceSearchResult],
            error_mapper=search_sources_error_mapper,
            request_options=request_options,
        )

    def search_topics(
        self,
        *,
        name: str | None = None,
        category: str | None = None,
        subcategory: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TopicSearchResult, SearchTopicsErrorBody]:
        """Search through all available Topics that exist within the Perigon Database.

        Args:
            name: String. Search for topics by exact name or partial text match. Does not support wildcards. Examples
                include Markets, Cryptocurrency, Climate Change, etc.
            category: String. Filter topics by broad article categories such as Politics, Tech, Sports, Business,
                Finance, Entertainment, etc.
            subcategory: String. Filter topics by their specific subcategory. Subcategories provide more granular
                classification beyond the main category, such as TV or Event.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of topics to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/topics/all"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("category", category),
                param[str | None]("subcategory", subcategory),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TopicSearchResult],
            error_mapper=search_topics_error_mapper,
            request_options=request_options,
        )


class AsyncSupplementalEndpointsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_journalist_by_id(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Journalist, GetJournalistByIdErrorBody]:
        """Find additional details on a journalist by using the journalist ID found in an article response object.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/journalists/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Journalist],
            error_mapper=get_journalist_by_id_error_mapper,
            request_options=request_options,
        )

    async def search_companies(
        self,
        *,
        id_: list[str] | None = None,
        symbol: list[str] | None = None,
        symbol_isin: list[str] | None = None,
        domain: list[str] | None = None,
        country: list[str] | None = None,
        exchange: list[str] | None = None,
        num_employees_from: int | None = None,
        num_employees_to: int | None = None,
        ipo_from: RFC3339DateTime | None = None,
        ipo_to: RFC3339DateTime | None = None,
        q: str | None = None,
        name: str | None = None,
        industry: str | None = None,
        sector: str | None = None,
        size: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySearchResult, SearchCompaniesErrorBody]:
        """Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports
        Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

        Args:
            id_: String Array. Filter by unique company identifiers. Multiple values create an OR filter.
            symbol: String Array. Filter by company stock ticker symbols (e.g., AAPL, MSFT, GOOGL). Multiple values
                create an OR filter.
            symbol_isin: String Array. Filter by ISIN codes on company ticker listings. Matches symbols.isin rather than
                the company-level ISIN. Multiple values create an OR filter.
            domain: String Array. Filter by company domains or websites (e.g., apple.com, microsoft.com). Multiple
                values create an OR filter.
            country: String Array. Filter by company headquarters country. Multiple values create an OR filter.
            exchange: String Array. Filter by stock exchange where companies are listed (e.g., NASDAQ, NYSE). Multiple
                values create an OR filter.
            num_employees_from: Integer. Filter for companies with at least this many employees.
            num_employees_to: Integer. Filter for companies with no more than this many employees.
            ipo_from: Date. Filter for companies that went public on or after this date. Accepts ISO 8601 format (e.g.,
                2023-01-01T00:00:00) or yyyy-mm-dd format.
            ipo_to: Date. Filter for companies that went public on or before this date. Accepts ISO 8601 format (e.g.,
                2023-12-31T23:59:59) or yyyy-mm-dd format.
            q: String. Primary search query for filtering companies across name, alternative names, domains, and ticker
                symbols. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?)
                for flexible searching.
            name: String. Search within company names. Supports Boolean operators (AND, OR, NOT), exact phrases with
                quotes, and wildcards (* and ?) for flexible searching.
            industry: String. Filter by company industry classifications. Supports Boolean operators (AND, OR, NOT),
                exact phrases with quotes, and wildcards (* and ?) for flexible searching.
            sector: String. Filter by company sector classifications. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            size: Integer. The number of companies to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/companies/all"),
            query_params=[
                param[list[str] | None]("id", id_),
                param[list[str] | None]("symbol", symbol),
                param[list[str] | None]("symbolIsin", symbol_isin),
                param[list[str] | None]("domain", domain),
                param[list[str] | None]("country", country),
                param[list[str] | None]("exchange", exchange),
                param[int | None]("numEmployeesFrom", num_employees_from),
                param[int | None]("numEmployeesTo", num_employees_to),
                param[RFC3339DateTime | None]("ipoFrom", ipo_from),
                param[RFC3339DateTime | None]("ipoTo", ipo_to),
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[str | None]("industry", industry),
                param[str | None]("sector", sector),
                param[int | None]("size", size),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanySearchResult],
            error_mapper=search_companies_error_mapper,
            request_options=request_options,
        )

    async def search_journalists(
        self,
        *,
        id_: list[str] | None = None,
        q: str | None = None,
        name: str | None = None,
        twitter: str | None = None,
        sort_by: JournalistsSortByOrStr | None = None,
        size: int | None = None,
        page: int | None = None,
        source: list[str] | None = None,
        topic: list[str] | None = None,
        category: list[str] | None = None,
        label: list[str] | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        location_country: list[str] | None = None,
        location_state: list[str] | None = None,
        location_county: list[str] | None = None,
        location_city: list[str] | None = None,
        location_area: list[str] | None = None,
        updated_at_from: RFC3339DateTime | None = None,
        updated_at_to: RFC3339DateTime | None = None,
        show_num_results: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JournalistSearchResult, SearchJournalistsErrorBody]:
        """Search journalists using broad search attributes. Our database contains over 230,000 journalists from around
        the world and is refreshed frequently.

        Args:
            id_: String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find
                journalists matching any of the specified IDs.
            q: String. Primary search query for filtering journalists based on their name, title, and Twitter bio.
                Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for
                flexible searching.
            name: String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            twitter: String. Filter journalists by their exact Twitter handle, without the @ symbol.
            sort_by: String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or
                linkedinFollowers. When omitted, results are sorted by relevance.
            size: Integer. The number of journalists to return per page in the paginated response.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            source: String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and
                ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
            topic: String Array. Filter journalists by the top topics they cover. Topics are more specific themes that
                the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple
                parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data
                field.)
            category: String Array. Filter journalists by the top categories they cover. Categories are general themes
                that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are
                passed, they will be applied as OR operations. (Searches inside the topCategories data field.)
            label: String Array. Filter journalists by the most common label tagged to the articles they publish. This
                accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.)
            min_monthly_posts: Integer. Filter for journalists who publish at least this many articles per month. Used
                to identify more active journalists.
            max_monthly_posts: Integer. Filter for journalists who publish no more than this many articles per month.
            country: String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO
                3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR
                filter.
            location_country: String Array. Filter journalists by their profile location country
                (``locations.country``). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb,
                jp). ``uk`` is accepted as an alias for ``gb``. Distinct from ``country``, which filters reporting focus
                (``topCountries``). Multiple values create an OR filter.
            location_state: String Array. Filter journalists by their profile location state or region
                (``locations.state``). For US locations this is the two-letter state code (e.g., NY, CA). Multiple
                values create an OR filter.
            location_county: String Array. Filter journalists by their profile location county (``locations.county``).
                County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values
                create an OR filter.
            location_city: String Array. Filter journalists by their profile location city (``locations.city``).
                Multiple values create an OR filter.
            location_area: String Array. Filter journalists by their profile location area — neighborhood, borough, or
                district (``locations.area``). Multiple values create an OR filter.
            updated_at_from: Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
            updated_at_to: Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format
                (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/journalists/all"),
            query_params=[
                param[list[str] | None]("id", id_),
                param[str | None]("q", q),
                param[str | None]("name", name),
                param[str | None]("twitter", twitter),
                param[JournalistsSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("size", size),
                param[int | None]("page", page),
                param[list[str] | None]("source", source),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("category", category),
                param[list[str] | None]("label", label),
                param[int | None]("minMonthlyPosts", min_monthly_posts),
                param[int | None]("maxMonthlyPosts", max_monthly_posts),
                param[list[str] | None]("country", country),
                param[list[str] | None]("locationCountry", location_country),
                param[list[str] | None]("locationState", location_state),
                param[list[str] | None]("locationCounty", location_county),
                param[list[str] | None]("locationCity", location_city),
                param[list[str] | None]("locationArea", location_area),
                param[RFC3339DateTime | None]("updatedAtFrom", updated_at_from),
                param[RFC3339DateTime | None]("updatedAtTo", updated_at_to),
                param[bool | None]("showNumResults", show_num_results),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[JournalistSearchResult],
            error_mapper=search_journalists_error_mapper,
            request_options=request_options,
        )

    async def search_people(
        self,
        *,
        name: str | None = None,
        wikidata_id: list[str] | None = None,
        occupation_id: list[str] | None = None,
        occupation_label: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PeopleSearchResult, SearchPeopleErrorBody]:
        """Search and retrieve additional information on known persons that exist within Perigon's entity database and
        as referenced in any article response object. Our database contains over 650,000 people from around the world
        and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be
        used to lookup even more information on Wikidata's website.

        Args:
            name: String. Search by person's name. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes,
                and wildcards (* and ?) for flexible searching.
            wikidata_id: String Array. Filter by Wikidata entity IDs (e.g., Q7747, Q937). These are unique identifiers
                from Wikidata.org that precisely identify public figures and eliminate name ambiguity. Multiple values
                create an OR filter.
            occupation_id: String Array. Filter by Wikidata occupation IDs (e.g., Q82955 for politician, Q33999 for
                actor, Q19546 for businessman). Finds people with specific professions. Multiple values create an OR
                filter.
            occupation_label: String. Search by occupation name (e.g., politician, actor, CEO, athlete). Supports
                Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible
                searching.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of people to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/people/all"),
            query_params=[
                param[str | None]("name", name),
                param[list[str] | None]("wikidataId", wikidata_id),
                param[list[str] | None]("occupationId", occupation_id),
                param[str | None]("occupationLabel", occupation_label),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PeopleSearchResult],
            error_mapper=search_people_error_mapper,
            request_options=request_options,
        )

    async def search_sources(
        self,
        *,
        domain: list[str] | None = None,
        name: str | None = None,
        source_group: str | None = None,
        sort_by: SourcesSortByOrStr | None = None,
        page: int | None = None,
        size: int | None = None,
        min_monthly_visits: int | None = None,
        max_monthly_visits: int | None = None,
        min_monthly_posts: int | None = None,
        max_monthly_posts: int | None = None,
        country: list[str] | None = None,
        source_country: list[str] | None = None,
        source_state: list[str] | None = None,
        source_county: list[str] | None = None,
        source_city: list[str] | None = None,
        source_lat: float | None = None,
        source_lon: float | None = None,
        source_max_distance: float | None = None,
        category: list[str] | None = None,
        topic: list[str] | None = None,
        label: list[str] | None = None,
        paywall: bool | None = None,
        show_subdomains: bool | None = None,
        show_num_results: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceSearchResult, SearchSourcesErrorBody]:
        """Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of
        individual media sources that were matched to your specific criteria.

        Args:
            domain: String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for
                pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter.
            name: String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact
                phrases with quotes, and wildcards (* and ?) for flexible searching.
            source_group: String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources
                within the specified group. See documentation for available source groups.
            sort_by: String. Determines the source sorting order. Options include relevance (default, best match to
                query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count),
                and avgMonthlyPosts (by number of articles published monthly).
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of sources to return per page in the paginated response.
            min_monthly_visits: Integer. Filter for sources with at least this many monthly visitors. Used to target
                publishers by audience size.
            max_monthly_visits: Integer. Filter for sources with no more than this many monthly visitors. Used to target
                publishers by audience size.
            min_monthly_posts: Integer. Filter for sources that publish at least this many articles per month. Used to
                target publishers by content volume.
            max_monthly_posts: Integer. Filter for sources that publish no more than this many articles per month. Used
                to target publishers by content volume.
            country: String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_country: String Array. Filter for local publications based in specific countries. Uses ISO 3166-1
                alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported
                country codes. Multiple values create an OR filter.
            source_state: String Array. Filter for local publications based in specific states or regions. Uses standard
                two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes.
                Multiple values create an OR filter.
            source_county: String Array. Filter for local publications based in specific counties. Multiple values
                create an OR filter.
            source_city: String Array. Filter for local publications based in specific cities. Multiple values create an
                OR filter.
            source_lat: Float. Latitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLon and sourceMaxDistance for radius search.
            source_lon: Float. Longitude coordinate for filtering local publications by geographic proximity. Used with
                sourceLat and sourceMaxDistance for radius search.
            source_max_distance: Float. Maximum distance in kilometers from the coordinates defined by sourceLat and
                sourceLon. Defines the radius for local publication searches.
            category: String Array. Filter sources by their primary content categories such as Politics, Tech, Sports,
                Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR
                filter.
            topic: String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency,
                Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple
                values create an OR filter.
            label: String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news).
                Returns sources where the specified label is common in their published content. See documentation for
                all available labels. Multiple values create an OR filter.
            paywall: Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find
                sources without paywalls.
            show_subdomains: Boolean. Controls whether subdomains are included as separate results. When true (default),
                subdomains appear as distinct sources. When false, results are consolidated to parent domains only.
            show_num_results: Boolean. Controls whether to return the exact result count. When false (default), counts
                are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sources/all"),
            query_params=[
                param[list[str] | None]("domain", domain),
                param[str | None]("name", name),
                param[str | None]("sourceGroup", source_group),
                param[SourcesSortByOrStr | None]("sortBy", sort_by),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[int | None]("minMonthlyVisits", min_monthly_visits),
                param[int | None]("maxMonthlyVisits", max_monthly_visits),
                param[int | None]("minMonthlyPosts", min_monthly_posts),
                param[int | None]("maxMonthlyPosts", max_monthly_posts),
                param[list[str] | None]("country", country),
                param[list[str] | None]("sourceCountry", source_country),
                param[list[str] | None]("sourceState", source_state),
                param[list[str] | None]("sourceCounty", source_county),
                param[list[str] | None]("sourceCity", source_city),
                param[float | None]("sourceLat", source_lat),
                param[float | None]("sourceLon", source_lon),
                param[float | None]("sourceMaxDistance", source_max_distance),
                param[list[str] | None]("category", category),
                param[list[str] | None]("topic", topic),
                param[list[str] | None]("label", label),
                param[bool | None]("paywall", paywall),
                param[bool | None]("showSubdomains", show_subdomains),
                param[bool | None]("showNumResults", show_num_results),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceSearchResult],
            error_mapper=search_sources_error_mapper,
            request_options=request_options,
        )

    async def search_topics(
        self,
        *,
        name: str | None = None,
        category: str | None = None,
        subcategory: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TopicSearchResult, SearchTopicsErrorBody]:
        """Search through all available Topics that exist within the Perigon Database.

        Args:
            name: String. Search for topics by exact name or partial text match. Does not support wildcards. Examples
                include Markets, Cryptocurrency, Climate Change, etc.
            category: String. Filter topics by broad article categories such as Politics, Tech, Sports, Business,
                Finance, Entertainment, etc.
            subcategory: String. Filter topics by their specific subcategory. Subcategories provide more granular
                classification beyond the main category, such as TV or Event.
            page: Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
            size: Integer. The number of topics to return per page in the paginated response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/topics/all"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("category", category),
                param[str | None]("subcategory", subcategory),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TopicSearchResult],
            error_mapper=search_topics_error_mapper,
            request_options=request_options,
        )
