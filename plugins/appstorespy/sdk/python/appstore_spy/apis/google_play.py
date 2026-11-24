from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.dev_filter_search_play_developers_query_post_error import (
    DevFilterSearchPlayDevelopersQueryPostErrorBody,
    dev_filter_search_play_developers_query_post_error_mapper,
)
from ..errors.dev_search_play_developers_get_error import (
    DevSearchPlayDevelopersGetErrorBody,
    dev_search_play_developers_get_error_mapper,
)
from ..errors.get_app_details_play_apps_id_get_error import (
    GetAppDetailsPlayAppsIdGetErrorBody,
    get_app_details_play_apps_id_get_error_mapper,
)
from ..errors.get_app_search_play_apps_get_error import (
    GetAppSearchPlayAppsGetErrorBody,
    get_app_search_play_apps_get_error_mapper,
)
from ..errors.get_apps_estimates_play_developers_id_estimates_get_error import (
    GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody,
    get_apps_estimates_play_developers_id_estimates_get_error_mapper,
)
from ..errors.get_apps_estimates_play_estimates_get_error import (
    GetAppsEstimatesPlayEstimatesGetErrorBody,
    get_apps_estimates_play_estimates_get_error_mapper,
)
from ..errors.get_apps_installs_daily_play_apps_id_installs_daily_get_error import (
    GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody,
    get_apps_installs_daily_play_apps_id_installs_daily_get_error_mapper,
)
from ..errors.get_country_aggregates_play_aggregates_countries_get_error import (
    GetCountryAggregatesPlayAggregatesCountriesGetErrorBody,
    get_country_aggregates_play_aggregates_countries_get_error_mapper,
)
from ..errors.get_developer_play_developers_id_get_error import (
    GetDeveloperPlayDevelopersIdGetErrorBody,
    get_developer_play_developers_id_get_error_mapper,
)
from ..errors.get_events_play_liveops_get2_error import (
    GetEventsPlayLiveopsGet2ErrorBody,
    get_events_play_liveops_get2_error_mapper,
)
from ..errors.get_filter_search_play_apps_query_post_error import (
    GetFilterSearchPlayAppsQueryPostErrorBody,
    get_filter_search_play_apps_query_post_error_mapper,
)
from ..errors.get_listing_play_apps_id_listing_get_error import (
    GetListingPlayAppsIdListingGetErrorBody,
    get_listing_play_apps_id_listing_get_error_mapper,
)
from ..errors.get_play_app_countries_play_info_countries_get_error import (
    GetPlayAppCountriesPlayInfoCountriesGetErrorBody,
    get_play_app_countries_play_info_countries_get_error_mapper,
)
from ..errors.get_play_app_languages_play_info_languages_get_error import (
    GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody,
    get_play_app_languages_play_info_languages_get_error_mapper,
)
from ..errors.get_play_rankings_play_rankings_get_error import (
    GetPlayRankingsPlayRankingsGetErrorBody,
    get_play_rankings_play_rankings_get_error_mapper,
)
from ..errors.get_recrawl_play_apps_id_recrawl_get_error import (
    GetRecrawlPlayAppsIdRecrawlGetErrorBody,
    get_recrawl_play_apps_id_recrawl_get_error_mapper,
)
from ..errors.get_reviews_play_apps_id_reviews_get_error import (
    GetReviewsPlayAppsIdReviewsGetErrorBody,
    get_reviews_play_apps_id_reviews_get_error_mapper,
)
from ..errors.get_similar_play_apps_similar_post_error import (
    GetSimilarPlayAppsSimilarPostErrorBody,
    get_similar_play_apps_similar_post_error_mapper,
)
from ..errors.get_suggests_play_suggestions_get_error import (
    GetSuggestsPlaySuggestionsGetErrorBody,
    get_suggests_play_suggestions_get_error_mapper,
)
from ..errors.get_summary_play_apps_summary_post_error import (
    GetSummaryPlayAppsSummaryPostErrorBody,
    get_summary_play_apps_summary_post_error_mapper,
)
from ..models.api_response_list_models_responses_response_play_ranking_item import (
    ApiResponseListModelsResponsesResponsePlayRankingItem,
)
from ..models.apps_daily_installs import AppsDailyInstalls
from ..models.apps_estimates import AppsEstimates
from ..models.dev_apps_estimates import DevAppsEstimates
from ..models.dev_country_aggregates_response import DevCountryAggregatesResponse
from ..models.enums.app_countries import AppCountries, AppCountriesOrStr
from ..models.enums.app_languages import AppLanguages, AppLanguagesOrStr
from ..models.enums.cache_time import CacheTime, CacheTimeOrStr
from ..models.enums.collection import CollectionOrStr
from ..models.enums.play_category import PlayCategoryOrStr
from ..models.enums.play_listing_languages import PlayListingLanguages, PlayListingLanguagesOrStr
from ..models.enums.type_enum import TypeEnumOrStr
from ..models.event import Event
from ..models.play_app import PlayApp
from ..models.play_app_list_response import PlayAppListResponse
from ..models.play_app_search_body import PlayAppSearchBody, PlayAppSearchBodyDict
from ..models.play_dev import PlayDev
from ..models.play_dev_list_response import PlayDevListResponse
from ..models.play_dev_search_body import PlayDevSearchBody, PlayDevSearchBodyDict
from ..models.play_listing import PlayListing
from ..models.play_review import PlayReview
from ..models.similar_search_body import SimilarSearchBody, SimilarSearchBodyDict
from ..models.store_countries import StoreCountries
from ..models.store_languages import StoreLanguages
from ..models.suggest import Suggest
from ..models.summary_response import SummaryResponse
from ..models.summary_search_body import SummarySearchBody, SummarySearchBodyDict
from ..server.server import Server


class GooglePlay:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GooglePlayWithRawResponse(client, server, auth)

    def dev_filter_search_play_developers_query_post(
        self, body: PlayDevSearchBody | PlayDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PlayDevListResponse:
        """Searches Google Play developers by a structured JSON filter, with paging and sorting. ``GET
        /play/developers`` covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopersQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.dev_filter_search_play_developers_query_post(body, request_options=request_options)
        )

    def dev_search_play_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[PlayDev]:
        """Free-text search across Google Play developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /play/developers/query``.

        Args:
            q: Query for search
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.dev_search_play_developers_get(
                q=q, fields=fields, sort=sort, limit=limit, page=page, request_options=request_options
            ),
        )

    def get_app_details_play_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlayApp:
        """Returns the full Google Play listing for a single app, looked up by its bundle id. Use ``country`` to select
        the storefront and ``language`` for the metadata language; ``fields`` limits the response to the columns you
        need.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayApps401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_app_details_play_apps_id_get(
                id_, fields=fields, country=country, language=language, request_options=request_options
            ),
        )

    def get_app_search_play_apps_get(
        self,
        *,
        q: str | None = None,
        published: bool | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[PlayApp]:
        """Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on
        structured criteria such as revenue, installs or category, use ``POST /play/apps/query``.

        Args:
            q: Word or phrase for search.
            published: Empty for all.
            country: Country for specific country fields. Default - US.
            language: Language of meta data. By default: store default language.
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayApps401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_app_search_play_apps_get(
                q=q,
                published=published,
                country=country,
                language=language,
                fields=fields,
                sort=sort,
                limit=limit,
                page=page,
                request_options=request_options,
            ),
        )

    def get_apps_estimates_play_developers_id_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        fill_gaps: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[DevAppsEstimates]:
        """Get Google Play apps estimates

        Args:
            id_: Developer's id
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            fill_gaps: Return every month from the developer's earliest to its latest month with estimates within
                start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is
                not read as a zero. Off by default, which leaves such months out.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopersEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_apps_estimates_play_developers_id_estimates_get(
                id_, start=start, end=end, fill_gaps=fill_gaps, request_options=request_options
            ),
        )

    def get_apps_estimates_play_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[AppsEstimates]:
        """Get Google Play apps estimates

        Args:
            id_: Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play
                link (https://play.google.com/store/apps/details?id=com.example.app or
                market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace
                answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_apps_estimates_play_estimates_get(
                id_, start=start, end=end, request_options=request_options
            ),
        )

    def get_apps_installs_daily_play_apps_id_installs_daily_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        smooth: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[AppsDailyInstalls]:
        """Get Google Play apps daily installs.

        ``ipd`` is derived from the cumulative install total: each increase is spread evenly across the elapsed days
        since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a
        single-day spike. Values are raw and never negative.

        By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving
        average for readability. Pass ``smooth=true`` to get that series: a centered, triangular-weighted 9-day moving
        average of ``ipd`` (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised).
        Neighbouring days outside ``start``/``end`` are included in the window, so the first and last days are smoothed
        the same way as the rest.

        Args:
            id_: Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in
                the path; pass the ``id`` value from it. An unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at ``end``
            end: End date. Format YYYY-MM-DD
            smooth: Return ``ipd`` smoothed as on the website chart
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsInstallsDaily401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_apps_installs_daily_play_apps_id_installs_daily_get(
                id_, start=start, end=end, smooth=smooth, request_options=request_options
            ),
        )

    def get_country_aggregates_play_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> DevCountryAggregatesResponse:
        """Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly
        downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category
        type. Sorted by downloads descending.

        Args:
            category_type: Restrict to developers with this dominant category type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAggregatesCountries401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_country_aggregates_play_aggregates_countries_get(
                category_type=category_type, request_options=request_options
            ),
        )

    def get_developer_play_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PlayDev:
        """Returns the Google Play developer record for a single developer id, including the developer's publisher
        identifiers and headquarters country.

        Args:
            id_: Developer ID
            fields: Fields to return separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_developer_play_developers_id_get(
                id_, fields=fields, request_options=request_options
            ),
        )

    def get_events_play_liveops_get2(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Event]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayLiveops401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_events_play_liveops_get2(
                app, country=country, freshness=freshness, request_options=request_options
            ),
        )

    def get_filter_search_play_apps_query_post(
        self,
        *,
        body: PlayAppSearchBody | PlayAppSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlayAppListResponse:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Category| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |feature_graphic |string |- |Feature graphic|
        |removal_date |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size|
        |downloads_daily |integer |+ |Daily Installs| |downloads_exact |integer |+ |Total Installs| |downloads_mark
        |integer |+ |Installs| |rating_count |integer |+ |Ratings| |rating_value |float |+ |Rating in request country|
        |review_count |integer |+ |Reviews| |rating_avg |float |+ |Rating| |iap |boolean |- |Inapp| |editorial |boolean
        |- |Editor's choise| |hosts |[]string |- |Hosts| |chart_info |object |+ |App's chart info: category, collection,
        country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |editorial|boolean|Editor's choise| |iap|boolean|Inapp|
        |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
        |category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
        |downloads_mark|integer|100, 500, 1000, 5000, 10000 etc| |downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
        |downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |similar_apps|string|"com.twitter.android" - Twitter similar apps|
        |reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |hosts|string|| |with_ads|boolean|With Ads|
        |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_filter_search_play_apps_query_post(body=body, request_options=request_options)
        )

    def get_listing_play_apps_id_listing_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: PlayListingLanguagesOrStr | None = PlayListingLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._1D,
        wait: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlayListing:
        """Returns the store listing of one app for a country and language exactly as Google Play serves it: title,
        short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play
        Console accepts can be requested. The listing is crawled on demand and kept; ``freshness`` sets how old a kept
        listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and
        answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass
        ``wait=false`` to get the 202 immediately. Repeated requests for the same listing share one crawl.
        ``translated`` tells whether Google Play machine-translated the texts instead of showing a translation the
        developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served
        from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl
        already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country of the listing (Google Play ``gl``). By default: US.
            language: Language of the listing (Google Play ``hl``), any Google Play Console locale. By default: en_US.
            freshness: How old a kept listing may be before it is crawled again.
            wait: Wait for a running crawl, or answer 202 right away.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The listing

        Raises:
            ApiError: The app is not on Google Play for this country Google Play could not be crawled; the credit was
                refunded Validation Error The ``API-KEY`` header is missing or holds an unknown key The per-key rate
                limit of this operation is exhausted; retry after ``Retry-After`` seconds. It costs no credits, except
                on job endpoints (https://github.com/romamo/as-rest/issues/99) Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``PlayAppsListing401Error1 | str | HttpValidationError |
                PlayAppsListing429Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_listing_play_apps_id_listing_get(
                id_, country=country, language=language, freshness=freshness, wait=wait, request_options=request_options
            ),
        )

    def get_play_app_countries_play_info_countries_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoreCountries:
        """This query returns the list of Google Play app available countries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``PlayInfoCountries401Error1 | str | RawError``."""
        return unwrap(
            self._with_raw_response.get_play_app_countries_play_info_countries_get(request_options=request_options)
        )

    def get_play_app_languages_play_info_languages_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoreLanguages:
        """This query returns the list of Google Play app available languages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``PlayInfoLanguages401Error1 | str | RawError``."""
        return unwrap(
            self._with_raw_response.get_play_app_languages_play_info_languages_get(request_options=request_options)
        )

    def get_play_rankings_play_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[str] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[PlayCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResponseListModelsResponsesResponsePlayRankingItem:
        """Returns Google Play chart positions over a date range, filtered by country, category and collection. One row
        per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            country: Country codes (comma-separated)
            category: App categories (comma-separated)
            collection: Collection types (comma-separated)
            rank_start: Minimum rank
            rank_end: Maximum rank
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayRankings401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_play_rankings_play_rankings_get(
                date_start=date_start,
                date_end=date_end,
                app=app,
                country=country,
                category=category,
                collection=collection,
                rank_start=rank_start,
                rank_end=rank_end,
                limit=limit,
                page=page,
                request_options=request_options,
            ),
        )

    def get_recrawl_play_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The recrawl is queued; the body is empty

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsRecrawl401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_recrawl_play_apps_id_recrawl_get(
                id_, country=country, language=language, request_options=request_options
            ),
        )

    def get_reviews_play_apps_id_reviews_get(
        self,
        id_: str,
        language: AppLanguagesOrStr,
        *,
        country: AppCountriesOrStr | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[PlayReview]:
        """Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so ``country``
        and ``language`` change which set is returned.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            language: Review language
            country: Value sent with the request.
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsReviews401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_reviews_play_apps_id_reviews_get(
                id_, language, country=country, limit=limit, sort=sort, request_options=request_options
            ),
        )

    def get_similar_play_apps_similar_post(
        self,
        *,
        body: SimilarSearchBody | SimilarSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlayAppListResponse:
        """Returns the apps Google Play lists as similar to the given app. Set ``link`` to the reverse direction to get
        the apps that list the given app as similar to them instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsSimilar401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_similar_play_apps_similar_post(body=body, request_options=request_options)
        )

    def get_suggests_play_suggestions_get(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Suggest:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlaySuggestions401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_suggests_play_suggestions_get(
                q, country=country, lang=lang, freshness=freshness, request_options=request_options
            ),
        )

    def get_summary_play_apps_summary_post(
        self, body: SummarySearchBody | SummarySearchBodyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SummaryResponse:
        """Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /play/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsSummary401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_summary_play_apps_summary_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> GooglePlayWithRawResponse:
        return self._with_raw_response


class AsyncGooglePlay:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGooglePlayWithRawResponse(client, server, auth)

    async def dev_filter_search_play_developers_query_post(
        self,
        body: PlayDevSearchBody | PlayDevSearchBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlayDevListResponse:
        """Searches Google Play developers by a structured JSON filter, with paging and sorting. ``GET
        /play/developers`` covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopersQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.dev_filter_search_play_developers_query_post(
                body, request_options=request_options
            ),
        )

    async def dev_search_play_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[PlayDev]:
        """Free-text search across Google Play developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /play/developers/query``.

        Args:
            q: Query for search
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.dev_search_play_developers_get(
                q=q, fields=fields, sort=sort, limit=limit, page=page, request_options=request_options
            ),
        )

    async def get_app_details_play_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlayApp:
        """Returns the full Google Play listing for a single app, looked up by its bundle id. Use ``country`` to select
        the storefront and ``language`` for the metadata language; ``fields`` limits the response to the columns you
        need.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayApps401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_app_details_play_apps_id_get(
                id_, fields=fields, country=country, language=language, request_options=request_options
            ),
        )

    async def get_app_search_play_apps_get(
        self,
        *,
        q: str | None = None,
        published: bool | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[PlayApp]:
        """Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on
        structured criteria such as revenue, installs or category, use ``POST /play/apps/query``.

        Args:
            q: Word or phrase for search.
            published: Empty for all.
            country: Country for specific country fields. Default - US.
            language: Language of meta data. By default: store default language.
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayApps401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_app_search_play_apps_get(
                q=q,
                published=published,
                country=country,
                language=language,
                fields=fields,
                sort=sort,
                limit=limit,
                page=page,
                request_options=request_options,
            ),
        )

    async def get_apps_estimates_play_developers_id_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        fill_gaps: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[DevAppsEstimates]:
        """Get Google Play apps estimates

        Args:
            id_: Developer's id
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            fill_gaps: Return every month from the developer's earliest to its latest month with estimates within
                start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is
                not read as a zero. Off by default, which leaves such months out.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopersEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apps_estimates_play_developers_id_estimates_get(
                id_, start=start, end=end, fill_gaps=fill_gaps, request_options=request_options
            ),
        )

    async def get_apps_estimates_play_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[AppsEstimates]:
        """Get Google Play apps estimates

        Args:
            id_: Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play
                link (https://play.google.com/store/apps/details?id=com.example.app or
                market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace
                answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apps_estimates_play_estimates_get(
                id_, start=start, end=end, request_options=request_options
            ),
        )

    async def get_apps_installs_daily_play_apps_id_installs_daily_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        smooth: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[AppsDailyInstalls]:
        """Get Google Play apps daily installs.

        ``ipd`` is derived from the cumulative install total: each increase is spread evenly across the elapsed days
        since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a
        single-day spike. Values are raw and never negative.

        By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving
        average for readability. Pass ``smooth=true`` to get that series: a centered, triangular-weighted 9-day moving
        average of ``ipd`` (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised).
        Neighbouring days outside ``start``/``end`` are included in the window, so the first and last days are smoothed
        the same way as the rest.

        Args:
            id_: Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in
                the path; pass the ``id`` value from it. An unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at ``end``
            end: End date. Format YYYY-MM-DD
            smooth: Return ``ipd`` smoothed as on the website chart
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsInstallsDaily401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apps_installs_daily_play_apps_id_installs_daily_get(
                id_, start=start, end=end, smooth=smooth, request_options=request_options
            ),
        )

    async def get_country_aggregates_play_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DevCountryAggregatesResponse:
        """Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly
        downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category
        type. Sorted by downloads descending.

        Args:
            category_type: Restrict to developers with this dominant category type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAggregatesCountries401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_country_aggregates_play_aggregates_countries_get(
                category_type=category_type, request_options=request_options
            ),
        )

    async def get_developer_play_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PlayDev:
        """Returns the Google Play developer record for a single developer id, including the developer's publisher
        identifiers and headquarters country.

        Args:
            id_: Developer ID
            fields: Fields to return separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_developer_play_developers_id_get(
                id_, fields=fields, request_options=request_options
            ),
        )

    async def get_events_play_liveops_get2(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Event]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayLiveops401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_events_play_liveops_get2(
                app, country=country, freshness=freshness, request_options=request_options
            ),
        )

    async def get_filter_search_play_apps_query_post(
        self,
        *,
        body: PlayAppSearchBody | PlayAppSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlayAppListResponse:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Category| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |feature_graphic |string |- |Feature graphic|
        |removal_date |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size|
        |downloads_daily |integer |+ |Daily Installs| |downloads_exact |integer |+ |Total Installs| |downloads_mark
        |integer |+ |Installs| |rating_count |integer |+ |Ratings| |rating_value |float |+ |Rating in request country|
        |review_count |integer |+ |Reviews| |rating_avg |float |+ |Rating| |iap |boolean |- |Inapp| |editorial |boolean
        |- |Editor's choise| |hosts |[]string |- |Hosts| |chart_info |object |+ |App's chart info: category, collection,
        country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |editorial|boolean|Editor's choise| |iap|boolean|Inapp|
        |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
        |category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
        |downloads_mark|integer|100, 500, 1000, 5000, 10000 etc| |downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
        |downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |similar_apps|string|"com.twitter.android" - Twitter similar apps|
        |reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |hosts|string|| |with_ads|boolean|With Ads|
        |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_filter_search_play_apps_query_post(
                body=body, request_options=request_options
            ),
        )

    async def get_listing_play_apps_id_listing_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: PlayListingLanguagesOrStr | None = PlayListingLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._1D,
        wait: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlayListing:
        """Returns the store listing of one app for a country and language exactly as Google Play serves it: title,
        short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play
        Console accepts can be requested. The listing is crawled on demand and kept; ``freshness`` sets how old a kept
        listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and
        answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass
        ``wait=false`` to get the 202 immediately. Repeated requests for the same listing share one crawl.
        ``translated`` tells whether Google Play machine-translated the texts instead of showing a translation the
        developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served
        from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl
        already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country of the listing (Google Play ``gl``). By default: US.
            language: Language of the listing (Google Play ``hl``), any Google Play Console locale. By default: en_US.
            freshness: How old a kept listing may be before it is crawled again.
            wait: Wait for a running crawl, or answer 202 right away.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The listing

        Raises:
            ApiError: The app is not on Google Play for this country Google Play could not be crawled; the credit was
                refunded Validation Error The ``API-KEY`` header is missing or holds an unknown key The per-key rate
                limit of this operation is exhausted; retry after ``Retry-After`` seconds. It costs no credits, except
                on job endpoints (https://github.com/romamo/as-rest/issues/99) Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``PlayAppsListing401Error1 | str | HttpValidationError |
                PlayAppsListing429Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_listing_play_apps_id_listing_get(
                id_, country=country, language=language, freshness=freshness, wait=wait, request_options=request_options
            ),
        )

    async def get_play_app_countries_play_info_countries_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoreCountries:
        """This query returns the list of Google Play app available countries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``PlayInfoCountries401Error1 | str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_play_app_countries_play_info_countries_get(
                request_options=request_options
            ),
        )

    async def get_play_app_languages_play_info_languages_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoreLanguages:
        """This query returns the list of Google Play app available languages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``PlayInfoLanguages401Error1 | str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_play_app_languages_play_info_languages_get(
                request_options=request_options
            ),
        )

    async def get_play_rankings_play_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[str] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[PlayCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResponseListModelsResponsesResponsePlayRankingItem:
        """Returns Google Play chart positions over a date range, filtered by country, category and collection. One row
        per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            country: Country codes (comma-separated)
            category: App categories (comma-separated)
            collection: Collection types (comma-separated)
            rank_start: Minimum rank
            rank_end: Maximum rank
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayRankings401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_play_rankings_play_rankings_get(
                date_start=date_start,
                date_end=date_end,
                app=app,
                country=country,
                category=category,
                collection=collection,
                rank_start=rank_start,
                rank_end=rank_end,
                limit=limit,
                page=page,
                request_options=request_options,
            ),
        )

    async def get_recrawl_play_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The recrawl is queued; the body is empty

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsRecrawl401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recrawl_play_apps_id_recrawl_get(
                id_, country=country, language=language, request_options=request_options
            ),
        )

    async def get_reviews_play_apps_id_reviews_get(
        self,
        id_: str,
        language: AppLanguagesOrStr,
        *,
        country: AppCountriesOrStr | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[PlayReview]:
        """Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so ``country``
        and ``language`` change which set is returned.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            language: Review language
            country: Value sent with the request.
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsReviews401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_reviews_play_apps_id_reviews_get(
                id_, language, country=country, limit=limit, sort=sort, request_options=request_options
            ),
        )

    async def get_similar_play_apps_similar_post(
        self,
        *,
        body: SimilarSearchBody | SimilarSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlayAppListResponse:
        """Returns the apps Google Play lists as similar to the given app. Set ``link`` to the reverse direction to get
        the apps that list the given app as similar to them instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsSimilar401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_similar_play_apps_similar_post(body=body, request_options=request_options)
        )

    async def get_suggests_play_suggestions_get(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Suggest:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlaySuggestions401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_suggests_play_suggestions_get(
                q, country=country, lang=lang, freshness=freshness, request_options=request_options
            ),
        )

    async def get_summary_play_apps_summary_post(
        self,
        body: SummarySearchBody | SummarySearchBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /play/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``PlayAppsSummary401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_summary_play_apps_summary_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncGooglePlayWithRawResponse:
        return self._with_raw_response


class GooglePlayWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def dev_filter_search_play_developers_query_post(
        self, body: PlayDevSearchBody | PlayDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlayDevListResponse, DevFilterSearchPlayDevelopersQueryPostErrorBody]:
        """Searches Google Play developers by a structured JSON filter, with paging and sorting. ``GET
        /play/developers`` covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/developers/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlayDevSearchBody | PlayDevSearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[PlayDevListResponse],
            error_mapper=dev_filter_search_play_developers_query_post_error_mapper,
            request_options=request_options,
        )

    def dev_search_play_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PlayDev], DevSearchPlayDevelopersGetErrorBody]:
        """Free-text search across Google Play developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /play/developers/query``.

        Args:
            q: Query for search
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/developers"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[PlayDev]],
            error_mapper=dev_search_play_developers_get_error_mapper,
            request_options=request_options,
        )

    def get_app_details_play_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayApp, GetAppDetailsPlayAppsIdGetErrorBody]:
        """Returns the full Google Play listing for a single app, looked up by its bundle id. Use ``country`` to select
        the storefront and ``language`` for the metadata language; ``fields`` limits the response to the columns you
        need.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("fields", fields),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[PlayApp],
            error_mapper=get_app_details_play_apps_id_get_error_mapper,
            request_options=request_options,
        )

    def get_app_search_play_apps_get(
        self,
        *,
        q: str | None = None,
        published: bool | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PlayApp], GetAppSearchPlayAppsGetErrorBody]:
        """Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on
        structured criteria such as revenue, installs or category, use ``POST /play/apps/query``.

        Args:
            q: Word or phrase for search.
            published: Empty for all.
            country: Country for specific country fields. Default - US.
            language: Language of meta data. By default: store default language.
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps"),
            query_params=[
                param[str | None]("q", q),
                param[bool | None]("published", published),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[PlayApp]],
            error_mapper=get_app_search_play_apps_get_error_mapper,
            request_options=request_options,
        )

    def get_apps_estimates_play_developers_id_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        fill_gaps: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DevAppsEstimates], GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody]:
        """Get Google Play apps estimates

        Args:
            id_: Developer's id
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            fill_gaps: Return every month from the developer's earliest to its latest month with estimates within
                start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is
                not read as a zero. Off by default, which leaves such months out.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/developers/{id}/estimates"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date | None]("start", start),
                param[Date | None]("end", end),
                param[bool | None]("fill_gaps", fill_gaps),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[DevAppsEstimates]],
            error_mapper=get_apps_estimates_play_developers_id_estimates_get_error_mapper,
            request_options=request_options,
        )

    def get_apps_estimates_play_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AppsEstimates], GetAppsEstimatesPlayEstimatesGetErrorBody]:
        """Get Google Play apps estimates

        Args:
            id_: Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play
                link (https://play.google.com/store/apps/details?id=com.example.app or
                market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace
                answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/estimates"),
            query_params=[param[str]("id", id_), param[Date | None]("start", start), param[Date | None]("end", end)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[AppsEstimates]],
            error_mapper=get_apps_estimates_play_estimates_get_error_mapper,
            request_options=request_options,
        )

    def get_apps_installs_daily_play_apps_id_installs_daily_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        smooth: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AppsDailyInstalls], GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody]:
        """Get Google Play apps daily installs.

        ``ipd`` is derived from the cumulative install total: each increase is spread evenly across the elapsed days
        since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a
        single-day spike. Values are raw and never negative.

        By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving
        average for readability. Pass ``smooth=true`` to get that series: a centered, triangular-weighted 9-day moving
        average of ``ipd`` (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised).
        Neighbouring days outside ``start``/``end`` are included in the window, so the first and last days are smoothed
        the same way as the rest.

        Args:
            id_: Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in
                the path; pass the ``id`` value from it. An unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at ``end``
            end: End date. Format YYYY-MM-DD
            smooth: Return ``ipd`` smoothed as on the website chart
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/installs_daily"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date | None]("start", start), param[Date | None]("end", end), param[bool | None]("smooth", smooth)
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[AppsDailyInstalls]],
            error_mapper=get_apps_installs_daily_play_apps_id_installs_daily_get_error_mapper,
            request_options=request_options,
        )

    def get_country_aggregates_play_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesPlayAggregatesCountriesGetErrorBody]:
        """Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly
        downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category
        type. Sorted by downloads descending.

        Args:
            category_type: Restrict to developers with this dominant category type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/aggregates/countries"),
            query_params=[param[TypeEnumOrStr | None]("category_type", category_type)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[DevCountryAggregatesResponse],
            error_mapper=get_country_aggregates_play_aggregates_countries_get_error_mapper,
            request_options=request_options,
        )

    def get_developer_play_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlayDev, GetDeveloperPlayDevelopersIdGetErrorBody]:
        """Returns the Google Play developer record for a single developer id, including the developer's publisher
        identifiers and headquarters country.

        Args:
            id_: Developer ID
            fields: Fields to return separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/developers/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[PlayDev],
            error_mapper=get_developer_play_developers_id_get_error_mapper,
            request_options=request_options,
        )

    def get_events_play_liveops_get2(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Event], GetEventsPlayLiveopsGet2ErrorBody]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/liveops"),
            query_params=[
                param[str]("app", app),
                param[AppCountriesOrStr | None]("country", country),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[Event]],
            error_mapper=get_events_play_liveops_get2_error_mapper,
            request_options=request_options,
        )

    def get_filter_search_play_apps_query_post(
        self,
        *,
        body: PlayAppSearchBody | PlayAppSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayAppListResponse, GetFilterSearchPlayAppsQueryPostErrorBody]:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Category| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |feature_graphic |string |- |Feature graphic|
        |removal_date |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size|
        |downloads_daily |integer |+ |Daily Installs| |downloads_exact |integer |+ |Total Installs| |downloads_mark
        |integer |+ |Installs| |rating_count |integer |+ |Ratings| |rating_value |float |+ |Rating in request country|
        |review_count |integer |+ |Reviews| |rating_avg |float |+ |Rating| |iap |boolean |- |Inapp| |editorial |boolean
        |- |Editor's choise| |hosts |[]string |- |Hosts| |chart_info |object |+ |App's chart info: category, collection,
        country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |editorial|boolean|Editor's choise| |iap|boolean|Inapp|
        |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
        |category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
        |downloads_mark|integer|100, 500, 1000, 5000, 10000 etc| |downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
        |downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |similar_apps|string|"com.twitter.android" - Twitter similar apps|
        |reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |hosts|string|| |with_ads|boolean|With Ads|
        |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/apps/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlayAppSearchBody | PlayAppSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[PlayAppListResponse],
            error_mapper=get_filter_search_play_apps_query_post_error_mapper,
            request_options=request_options,
        )

    def get_listing_play_apps_id_listing_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: PlayListingLanguagesOrStr | None = PlayListingLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._1D,
        wait: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayListing, GetListingPlayAppsIdListingGetErrorBody]:
        """Returns the store listing of one app for a country and language exactly as Google Play serves it: title,
        short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play
        Console accepts can be requested. The listing is crawled on demand and kept; ``freshness`` sets how old a kept
        listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and
        answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass
        ``wait=false`` to get the 202 immediately. Repeated requests for the same listing share one crawl.
        ``translated`` tells whether Google Play machine-translated the texts instead of showing a translation the
        developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served
        from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl
        already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country of the listing (Google Play ``gl``). By default: US.
            language: Language of the listing (Google Play ``hl``), any Google Play Console locale. By default: en_US.
            freshness: How old a kept listing may be before it is crawled again.
            wait: Wait for a running crawl, or answer 202 right away.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/listing"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[PlayListingLanguagesOrStr | None]("language", language),
                param[CacheTimeOrStr | None]("freshness", freshness),
                param[bool | None]("wait", wait),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[PlayListing],
            error_mapper=get_listing_play_apps_id_listing_get_error_mapper,
            request_options=request_options,
        )

    def get_play_app_countries_play_info_countries_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoreCountries, GetPlayAppCountriesPlayInfoCountriesGetErrorBody]:
        """This query returns the list of Google Play app available countries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/info/countries"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[StoreCountries],
            error_mapper=get_play_app_countries_play_info_countries_get_error_mapper,
            request_options=request_options,
        )

    def get_play_app_languages_play_info_languages_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoreLanguages, GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody]:
        """This query returns the list of Google Play app available languages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/info/languages"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[StoreLanguages],
            error_mapper=get_play_app_languages_play_info_languages_get_error_mapper,
            request_options=request_options,
        )

    def get_play_rankings_play_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[str] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[PlayCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseListModelsResponsesResponsePlayRankingItem, GetPlayRankingsPlayRankingsGetErrorBody]:
        """Returns Google Play chart positions over a date range, filtered by country, category and collection. One row
        per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            country: Country codes (comma-separated)
            category: App categories (comma-separated)
            collection: Collection types (comma-separated)
            rank_start: Minimum rank
            rank_end: Maximum rank
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/rankings"),
            query_params=[
                param[Date | None]("date_start", date_start),
                param[Date | None]("date_end", date_end),
                param[list[str] | None]("app", app),
                param[list[AppCountriesOrStr] | None]("country", country),
                param[list[PlayCategoryOrStr] | None]("category", category),
                param[list[CollectionOrStr] | None]("collection", collection),
                param[int | None]("rank_start", rank_start),
                param[int | None]("rank_end", rank_end),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ApiResponseListModelsResponsesResponsePlayRankingItem],
            error_mapper=get_play_rankings_play_rankings_get_error_mapper,
            request_options=request_options,
        )

    def get_recrawl_play_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRecrawlPlayAppsIdRecrawlGetErrorBody]:
        """Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/recrawl"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=get_recrawl_play_apps_id_recrawl_get_error_mapper,
            request_options=request_options,
        )

    def get_reviews_play_apps_id_reviews_get(
        self,
        id_: str,
        language: AppLanguagesOrStr,
        *,
        country: AppCountriesOrStr | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PlayReview], GetReviewsPlayAppsIdReviewsGetErrorBody]:
        """Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so ``country``
        and ``language`` change which set is returned.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            language: Review language
            country: Value sent with the request.
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/reviews"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppLanguagesOrStr]("language", language),
                param[AppCountriesOrStr | None]("country", country),
                param[int | None]("limit", limit),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[PlayReview]],
            error_mapper=get_reviews_play_apps_id_reviews_get_error_mapper,
            request_options=request_options,
        )

    def get_similar_play_apps_similar_post(
        self,
        *,
        body: SimilarSearchBody | SimilarSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayAppListResponse, GetSimilarPlayAppsSimilarPostErrorBody]:
        """Returns the apps Google Play lists as similar to the given app. Set ``link`` to the reverse direction to get
        the apps that list the given app as similar to them instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/apps/similar"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SimilarSearchBody | SimilarSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[PlayAppListResponse],
            error_mapper=get_similar_play_apps_similar_post_error_mapper,
            request_options=request_options,
        )

    def get_suggests_play_suggestions_get(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Suggest, GetSuggestsPlaySuggestionsGetErrorBody]:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/suggestions"),
            query_params=[
                param[str]("q", q),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("lang", lang),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[Suggest],
            error_mapper=get_suggests_play_suggestions_get_error_mapper,
            request_options=request_options,
        )

    def get_summary_play_apps_summary_post(
        self, body: SummarySearchBody | SummarySearchBodyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SummaryResponse, GetSummaryPlayAppsSummaryPostErrorBody]:
        """Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /play/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/apps/summary"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SummarySearchBody | SummarySearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SummaryResponse],
            error_mapper=get_summary_play_apps_summary_post_error_mapper,
            request_options=request_options,
        )


class AsyncGooglePlayWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def dev_filter_search_play_developers_query_post(
        self,
        body: PlayDevSearchBody | PlayDevSearchBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayDevListResponse, DevFilterSearchPlayDevelopersQueryPostErrorBody]:
        """Searches Google Play developers by a structured JSON filter, with paging and sorting. ``GET
        /play/developers`` covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/developers/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlayDevSearchBody | PlayDevSearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[PlayDevListResponse],
            error_mapper=dev_filter_search_play_developers_query_post_error_mapper,
            request_options=request_options,
        )

    async def dev_search_play_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PlayDev], DevSearchPlayDevelopersGetErrorBody]:
        """Free-text search across Google Play developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /play/developers/query``.

        Args:
            q: Query for search
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/developers"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[PlayDev]],
            error_mapper=dev_search_play_developers_get_error_mapper,
            request_options=request_options,
        )

    async def get_app_details_play_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayApp, GetAppDetailsPlayAppsIdGetErrorBody]:
        """Returns the full Google Play listing for a single app, looked up by its bundle id. Use ``country`` to select
        the storefront and ``language`` for the metadata language; ``fields`` limits the response to the columns you
        need.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("fields", fields),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[PlayApp],
            error_mapper=get_app_details_play_apps_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_app_search_play_apps_get(
        self,
        *,
        q: str | None = None,
        published: bool | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PlayApp], GetAppSearchPlayAppsGetErrorBody]:
        """Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on
        structured criteria such as revenue, installs or category, use ``POST /play/apps/query``.

        Args:
            q: Word or phrase for search.
            published: Empty for all.
            country: Country for specific country fields. Default - US.
            language: Language of meta data. By default: store default language.
            fields: Fields to return separated by comma(,)
            sort: Sort params separated by comma(,)
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps"),
            query_params=[
                param[str | None]("q", q),
                param[bool | None]("published", published),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[PlayApp]],
            error_mapper=get_app_search_play_apps_get_error_mapper,
            request_options=request_options,
        )

    async def get_apps_estimates_play_developers_id_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        fill_gaps: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DevAppsEstimates], GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody]:
        """Get Google Play apps estimates

        Args:
            id_: Developer's id
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            fill_gaps: Return every month from the developer's earliest to its latest month with estimates within
                start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is
                not read as a zero. Off by default, which leaves such months out.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/developers/{id}/estimates"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date | None]("start", start),
                param[Date | None]("end", end),
                param[bool | None]("fill_gaps", fill_gaps),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[DevAppsEstimates]],
            error_mapper=get_apps_estimates_play_developers_id_estimates_get_error_mapper,
            request_options=request_options,
        )

    async def get_apps_estimates_play_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AppsEstimates], GetAppsEstimatesPlayEstimatesGetErrorBody]:
        """Get Google Play apps estimates

        Args:
            id_: Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play
                link (https://play.google.com/store/apps/details?id=com.example.app or
                market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace
                answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/estimates"),
            query_params=[param[str]("id", id_), param[Date | None]("start", start), param[Date | None]("end", end)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[AppsEstimates]],
            error_mapper=get_apps_estimates_play_estimates_get_error_mapper,
            request_options=request_options,
        )

    async def get_apps_installs_daily_play_apps_id_installs_daily_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        smooth: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AppsDailyInstalls], GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody]:
        """Get Google Play apps daily installs.

        ``ipd`` is derived from the cumulative install total: each increase is spread evenly across the elapsed days
        since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a
        single-day spike. Values are raw and never negative.

        By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving
        average for readability. Pass ``smooth=true`` to get that series: a centered, triangular-weighted 9-day moving
        average of ``ipd`` (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised).
        Neighbouring days outside ``start``/``end`` are included in the window, so the first and last days are smoothed
        the same way as the rest.

        Args:
            id_: Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in
                the path; pass the ``id`` value from it. An unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at ``end``
            end: End date. Format YYYY-MM-DD
            smooth: Return ``ipd`` smoothed as on the website chart
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/installs_daily"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date | None]("start", start), param[Date | None]("end", end), param[bool | None]("smooth", smooth)
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[AppsDailyInstalls]],
            error_mapper=get_apps_installs_daily_play_apps_id_installs_daily_get_error_mapper,
            request_options=request_options,
        )

    async def get_country_aggregates_play_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesPlayAggregatesCountriesGetErrorBody]:
        """Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly
        downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category
        type. Sorted by downloads descending.

        Args:
            category_type: Restrict to developers with this dominant category type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/aggregates/countries"),
            query_params=[param[TypeEnumOrStr | None]("category_type", category_type)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[DevCountryAggregatesResponse],
            error_mapper=get_country_aggregates_play_aggregates_countries_get_error_mapper,
            request_options=request_options,
        )

    async def get_developer_play_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlayDev, GetDeveloperPlayDevelopersIdGetErrorBody]:
        """Returns the Google Play developer record for a single developer id, including the developer's publisher
        identifiers and headquarters country.

        Args:
            id_: Developer ID
            fields: Fields to return separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/developers/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[PlayDev],
            error_mapper=get_developer_play_developers_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_events_play_liveops_get2(
        self,
        app: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Event], GetEventsPlayLiveopsGet2ErrorBody]:
        """Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one
        country. Responds 202 while a fresh crawl is in progress.

        Args:
            app: Value sent with the request.
            country: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/liveops"),
            query_params=[
                param[str]("app", app),
                param[AppCountriesOrStr | None]("country", country),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[Event]],
            error_mapper=get_events_play_liveops_get2_error_mapper,
            request_options=request_options,
        )

    async def get_filter_search_play_apps_query_post(
        self,
        *,
        body: PlayAppSearchBody | PlayAppSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayAppListResponse, GetFilterSearchPlayAppsQueryPostErrorBody]:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Category| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |feature_graphic |string |- |Feature graphic|
        |removal_date |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size|
        |downloads_daily |integer |+ |Daily Installs| |downloads_exact |integer |+ |Total Installs| |downloads_mark
        |integer |+ |Installs| |rating_count |integer |+ |Ratings| |rating_value |float |+ |Rating in request country|
        |review_count |integer |+ |Reviews| |rating_avg |float |+ |Rating| |iap |boolean |- |Inapp| |editorial |boolean
        |- |Editor's choise| |hosts |[]string |- |Hosts| |chart_info |object |+ |App's chart info: category, collection,
        country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |editorial|boolean|Editor's choise| |iap|boolean|Inapp|
        |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
        |category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
        |downloads_mark|integer|100, 500, 1000, 5000, 10000 etc| |downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
        |downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |similar_apps|string|"com.twitter.android" - Twitter similar apps|
        |reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |hosts|string|| |with_ads|boolean|With Ads|
        |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/apps/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlayAppSearchBody | PlayAppSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[PlayAppListResponse],
            error_mapper=get_filter_search_play_apps_query_post_error_mapper,
            request_options=request_options,
        )

    async def get_listing_play_apps_id_listing_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: PlayListingLanguagesOrStr | None = PlayListingLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._1D,
        wait: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayListing, GetListingPlayAppsIdListingGetErrorBody]:
        """Returns the store listing of one app for a country and language exactly as Google Play serves it: title,
        short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play
        Console accepts can be requested. The listing is crawled on demand and kept; ``freshness`` sets how old a kept
        listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and
        answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass
        ``wait=false`` to get the 202 immediately. Repeated requests for the same listing share one crawl.
        ``translated`` tells whether Google Play machine-translated the texts instead of showing a translation the
        developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served
        from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl
        already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country of the listing (Google Play ``gl``). By default: US.
            language: Language of the listing (Google Play ``hl``), any Google Play Console locale. By default: en_US.
            freshness: How old a kept listing may be before it is crawled again.
            wait: Wait for a running crawl, or answer 202 right away.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/listing"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[PlayListingLanguagesOrStr | None]("language", language),
                param[CacheTimeOrStr | None]("freshness", freshness),
                param[bool | None]("wait", wait),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[PlayListing],
            error_mapper=get_listing_play_apps_id_listing_get_error_mapper,
            request_options=request_options,
        )

    async def get_play_app_countries_play_info_countries_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoreCountries, GetPlayAppCountriesPlayInfoCountriesGetErrorBody]:
        """This query returns the list of Google Play app available countries.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/info/countries"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[StoreCountries],
            error_mapper=get_play_app_countries_play_info_countries_get_error_mapper,
            request_options=request_options,
        )

    async def get_play_app_languages_play_info_languages_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoreLanguages, GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody]:
        """This query returns the list of Google Play app available languages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/info/languages"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[StoreLanguages],
            error_mapper=get_play_app_languages_play_info_languages_get_error_mapper,
            request_options=request_options,
        )

    async def get_play_rankings_play_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[str] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[PlayCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseListModelsResponsesResponsePlayRankingItem, GetPlayRankingsPlayRankingsGetErrorBody]:
        """Returns Google Play chart positions over a date range, filtered by country, category and collection. One row
        per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            country: Country codes (comma-separated)
            category: App categories (comma-separated)
            collection: Collection types (comma-separated)
            rank_start: Minimum rank
            rank_end: Maximum rank
            limit: Count per page
            page: Page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/rankings"),
            query_params=[
                param[Date | None]("date_start", date_start),
                param[Date | None]("date_end", date_end),
                param[list[str] | None]("app", app),
                param[list[AppCountriesOrStr] | None]("country", country),
                param[list[PlayCategoryOrStr] | None]("category", category),
                param[list[CollectionOrStr] | None]("collection", collection),
                param[int | None]("rank_start", rank_start),
                param[int | None]("rank_end", rank_end),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ApiResponseListModelsResponsesResponsePlayRankingItem],
            error_mapper=get_play_rankings_play_rankings_get_error_mapper,
            request_options=request_options,
        )

    async def get_recrawl_play_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRecrawlPlayAppsIdRecrawlGetErrorBody]:
        """Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/recrawl"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=get_recrawl_play_apps_id_recrawl_get_error_mapper,
            request_options=request_options,
        )

    async def get_reviews_play_apps_id_reviews_get(
        self,
        id_: str,
        language: AppLanguagesOrStr,
        *,
        country: AppCountriesOrStr | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[PlayReview], GetReviewsPlayAppsIdReviewsGetErrorBody]:
        """Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so ``country``
        and ``language`` change which set is returned.

        Args:
            id_: Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the ``id``
                value from it
            language: Review language
            country: Value sent with the request.
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/apps/{id}/reviews"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppLanguagesOrStr]("language", language),
                param[AppCountriesOrStr | None]("country", country),
                param[int | None]("limit", limit),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[PlayReview]],
            error_mapper=get_reviews_play_apps_id_reviews_get_error_mapper,
            request_options=request_options,
        )

    async def get_similar_play_apps_similar_post(
        self,
        *,
        body: SimilarSearchBody | SimilarSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlayAppListResponse, GetSimilarPlayAppsSimilarPostErrorBody]:
        """Returns the apps Google Play lists as similar to the given app. Set ``link`` to the reverse direction to get
        the apps that list the given app as similar to them instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/apps/similar"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SimilarSearchBody | SimilarSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[PlayAppListResponse],
            error_mapper=get_similar_play_apps_similar_post_error_mapper,
            request_options=request_options,
        )

    async def get_suggests_play_suggestions_get(
        self,
        q: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        lang: AppLanguagesOrStr | None = AppLanguages.EN_US,
        freshness: CacheTimeOrStr | None = CacheTime._7D,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Suggest, GetSuggestsPlaySuggestionsGetErrorBody]:
        """Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with
        a partial result while a fresh crawl is in progress; ``freshness`` sets how old a cached result may be before it
        is recrawled.

        Args:
            q: Value sent with the request.
            country: Value sent with the request.
            lang: Value sent with the request.
            freshness: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/play/suggestions"),
            query_params=[
                param[str]("q", q),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("lang", lang),
                param[CacheTimeOrStr | None]("freshness", freshness),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[Suggest],
            error_mapper=get_suggests_play_suggestions_get_error_mapper,
            request_options=request_options,
        )

    async def get_summary_play_apps_summary_post(
        self,
        body: SummarySearchBody | SummarySearchBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetSummaryPlayAppsSummaryPostErrorBody]:
        """Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /play/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/play/apps/summary"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SummarySearchBody | SummarySearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SummaryResponse],
            error_mapper=get_summary_play_apps_summary_post_error_mapper,
            request_options=request_options,
        )
