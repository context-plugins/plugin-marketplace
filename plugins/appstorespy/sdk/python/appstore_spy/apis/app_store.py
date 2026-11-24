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
from ..errors.dev_filter_search_ios_developers_query_post_error import (
    DevFilterSearchIosDevelopersQueryPostErrorBody,
    dev_filter_search_ios_developers_query_post_error_mapper,
)
from ..errors.dev_search_ios_developers_get_error import (
    DevSearchIosDevelopersGetErrorBody,
    dev_search_ios_developers_get_error_mapper,
)
from ..errors.get_app_details_ios_apps_id_get_error import (
    GetAppDetailsIosAppsIdGetErrorBody,
    get_app_details_ios_apps_id_get_error_mapper,
)
from ..errors.get_app_search_ios_apps_get_error import (
    GetAppSearchIosAppsGetErrorBody,
    get_app_search_ios_apps_get_error_mapper,
)
from ..errors.get_apps_estimates_ios_developers_id_estimates_get_error import (
    GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody,
    get_apps_estimates_ios_developers_id_estimates_get_error_mapper,
)
from ..errors.get_apps_estimates_ios_estimates_get_error import (
    GetAppsEstimatesIosEstimatesGetErrorBody,
    get_apps_estimates_ios_estimates_get_error_mapper,
)
from ..errors.get_country_aggregates_ios_aggregates_countries_get_error import (
    GetCountryAggregatesIosAggregatesCountriesGetErrorBody,
    get_country_aggregates_ios_aggregates_countries_get_error_mapper,
)
from ..errors.get_developer_ios_developers_id_get_error import (
    GetDeveloperIosDevelopersIdGetErrorBody,
    get_developer_ios_developers_id_get_error_mapper,
)
from ..errors.get_filter_search_ios_apps_query_post_error import (
    GetFilterSearchIosAppsQueryPostErrorBody,
    get_filter_search_ios_apps_query_post_error_mapper,
)
from ..errors.get_ios_rankings_ios_rankings_get_error import (
    GetIosRankingsIosRankingsGetErrorBody,
    get_ios_rankings_ios_rankings_get_error_mapper,
)
from ..errors.get_play_app_countries_ios_info_countries_get_error import (
    GetPlayAppCountriesIosInfoCountriesGetErrorBody,
    get_play_app_countries_ios_info_countries_get_error_mapper,
)
from ..errors.get_play_app_languages_ios_info_languages_get_error import (
    GetPlayAppLanguagesIosInfoLanguagesGetErrorBody,
    get_play_app_languages_ios_info_languages_get_error_mapper,
)
from ..errors.get_recrawl_ios_apps_id_recrawl_get_error import (
    GetRecrawlIosAppsIdRecrawlGetErrorBody,
    get_recrawl_ios_apps_id_recrawl_get_error_mapper,
)
from ..errors.get_reviews_ios_apps_id_reviews_get_error import (
    GetReviewsIosAppsIdReviewsGetErrorBody,
    get_reviews_ios_apps_id_reviews_get_error_mapper,
)
from ..errors.get_similar_ios_apps_similar_post_error import (
    GetSimilarIosAppsSimilarPostErrorBody,
    get_similar_ios_apps_similar_post_error_mapper,
)
from ..errors.get_summary_ios_apps_summary_post_error import (
    GetSummaryIosAppsSummaryPostErrorBody,
    get_summary_ios_apps_summary_post_error_mapper,
)
from ..models.api_response_list_models_responses_response_ios_ranking_item import (
    ApiResponseListModelsResponsesResponseIosRankingItem,
)
from ..models.apps_estimates import AppsEstimates
from ..models.dev_apps_estimates import DevAppsEstimates
from ..models.dev_country_aggregates_response import DevCountryAggregatesResponse
from ..models.enums.app_countries import AppCountries, AppCountriesOrStr
from ..models.enums.app_languages import AppLanguages, AppLanguagesOrStr
from ..models.enums.collection import CollectionOrStr
from ..models.enums.ios_category import IosCategoryOrStr
from ..models.enums.ios_platform import IosPlatformOrStr
from ..models.enums.type_enum import TypeEnumOrStr
from ..models.ios_app import IosApp
from ..models.ios_app_list_response import IosAppListResponse
from ..models.ios_app_search_body import IosAppSearchBody, IosAppSearchBodyDict
from ..models.ios_dev import IosDev
from ..models.ios_dev_list_response import IosDevListResponse
from ..models.ios_dev_search_body import IosDevSearchBody, IosDevSearchBodyDict
from ..models.ios_review import IosReview
from ..models.ios_similar_search_body import IosSimilarSearchBody, IosSimilarSearchBodyDict
from ..models.ios_summary_search_body import IosSummarySearchBody, IosSummarySearchBodyDict
from ..models.store_countries import StoreCountries
from ..models.store_languages import StoreLanguages
from ..models.summary_response import SummaryResponse
from ..server.server import Server


class AppStore:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppStoreWithRawResponse(client, server, auth)

    def dev_filter_search_ios_developers_query_post(
        self, body: IosDevSearchBody | IosDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> IosDevListResponse:
        """Searches App Store developers by a structured JSON filter, with paging and sorting. ``GET /ios/developers``
        covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosDevelopersQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.dev_filter_search_ios_developers_query_post(body, request_options=request_options)
        )

    def dev_search_ios_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[IosDev]:
        """Free-text search across App Store developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /ios/developers/query``.

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
                subscription is not active and must be renewed ``error`` is ``IosDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.dev_search_ios_developers_get(
                q=q, fields=fields, sort=sort, limit=limit, page=page, request_options=request_options
            ),
        )

    def get_app_details_ios_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IosApp:
        """Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use ``country``
        to select the storefront and ``language`` for the metadata language; ``fields`` limits the response to the
        columns you need.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Forbidden Too Many Requests Validation Error The ``API-KEY`` header is missing or holds an unknown
                key Nothing was charged: the credit balance does not cover this call's price (with X-Cost and
                X-Remaining-Credits), or the paid subscription is not active and must be renewed ``error`` is
                ``IosApps401Error1 | str | Error | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_app_details_ios_apps_id_get(
                id_, fields=fields, country=country, language=language, request_options=request_options
            ),
        )

    def get_app_search_ios_apps_get(
        self,
        *,
        q: str | None = None,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[IosApp]:
        """Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured
        criteria such as revenue, downloads or category, use ``POST /ios/apps/query``.

        Args:
            q: Word or phrase for search.
            country: Country for specific country fields. Default - US.
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
                subscription is not active and must be renewed ``error`` is ``IosApps401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_app_search_ios_apps_get(
                q=q, country=country, fields=fields, sort=sort, limit=limit, page=page, request_options=request_options
            ),
        )

    def get_apps_estimates_ios_developers_id_estimates_get(
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
            id_: Developer's ids to return separated by comma(,)
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
                subscription is not active and must be renewed ``error`` is ``IosDevelopersEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_apps_estimates_ios_developers_id_estimates_get(
                id_, start=start, end=end, fill_gaps=fill_gaps, request_options=request_options
            ),
        )

    def get_apps_estimates_ios_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[AppsEstimates]:
        """Get App Store apps estimates

        Args:
            id_: App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store
                shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370,
                URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_apps_estimates_ios_estimates_get(
                id_, start=start, end=end, request_options=request_options
            ),
        )

    def get_country_aggregates_ios_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> DevCountryAggregatesResponse:
        """Per-country totals over all App Store developers: developer count, published apps, and sums of monthly
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
                subscription is not active and must be renewed ``error`` is ``IosAggregatesCountries401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_country_aggregates_ios_aggregates_countries_get(
                category_type=category_type, request_options=request_options
            ),
        )

    def get_developer_ios_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> IosDev:
        """Returns the App Store developer record for a single developer id, including the developer's publisher
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
                subscription is not active and must be renewed ``error`` is ``IosDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_developer_ios_developers_id_get(
                id_, fields=fields, request_options=request_options
            ),
        )

    def get_filter_search_ios_apps_query_post(
        self,
        *,
        body: IosAppSearchBody | IosAppSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IosAppListResponse:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Full Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Сategory| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |screenshots_duo_inner|[]string|- |iPhone Duo inner
        display screenshots| |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots| |removal_date
        |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size| |rating_count |integer |+
        |Ratings| |rating_value |float |+ |Rating in request country| |review_count |integer |+ |Reviews| |rating_avg
        |float |+ |Rating| |iap |boolean |- |Inapp| |copyright |string |- |Copyright| |seller |string |- |Seller|
        |chart_info |object |+ |App's chart info: category, collection, country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |active_countries|[]string|["US", "DE", "FR"] - List of countries where app
        is available (At least one country)| |category|string|App Store category: "TRAVEL", "EDUCATION",
        "GAMES_STRATEGY", "LIFESTYLE" etc| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |with_ads|boolean|With Ads| |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_filter_search_ios_apps_query_post(body=body, request_options=request_options)
        )

    def get_ios_rankings_ios_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[int] | None = None,
        platform: list[IosPlatformOrStr] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[IosCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResponseListModelsResponsesResponseIosRankingItem:
        """Returns App Store chart positions over a date range, filtered by storefront, category, collection and
        platform. One row per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            platform: Platforms (iPhone/iPad, comma-separated)
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
                subscription is not active and must be renewed ``error`` is ``IosRankings401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_ios_rankings_ios_rankings_get(
                date_start=date_start,
                date_end=date_end,
                app=app,
                platform=platform,
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

    def get_play_app_countries_ios_info_countries_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoreCountries:
        """This query returns the list of App Store storefronts available as a ``country`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``IosInfoCountries401Error1 | str | RawError``."""
        return unwrap(
            self._with_raw_response.get_play_app_countries_ios_info_countries_get(request_options=request_options)
        )

    def get_play_app_languages_ios_info_languages_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoreLanguages:
        """This query returns the list of metadata languages available as a ``language`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``IosInfoLanguages401Error1 | str | RawError``."""
        return unwrap(
            self._with_raw_response.get_play_app_languages_ios_info_languages_get(request_options=request_options)
        )

    def get_recrawl_ios_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The recrawl is queued; the body is empty

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsRecrawl401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_recrawl_ios_apps_id_recrawl_get(
                id_, country=country, language=language, request_options=request_options
            ),
        )

    def get_reviews_ios_apps_id_reviews_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[IosReview]:
        """Returns user reviews for a single App Store app. Reviews are storefront-specific, so ``country`` changes
        which set is returned.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: App storefront
            fields: Fields to return separated by comma(,)
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsReviews401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_reviews_ios_apps_id_reviews_get(
                id_, country=country, fields=fields, limit=limit, sort=sort, request_options=request_options
            ),
        )

    def get_similar_ios_apps_similar_post(
        self,
        *,
        body: IosSimilarSearchBody | IosSimilarSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IosAppListResponse:
        """Returns the apps App Store lists as similar to the given app. Set ``link`` to the reverse direction to get
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
                subscription is not active and must be renewed ``error`` is ``IosAppsSimilar401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_similar_ios_apps_similar_post(body=body, request_options=request_options)
        )

    def get_summary_ios_apps_summary_post(
        self,
        body: IosSummarySearchBody | IosSummarySearchBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /ios/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsSummary401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_summary_ios_apps_summary_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AppStoreWithRawResponse:
        return self._with_raw_response


class AsyncAppStore:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppStoreWithRawResponse(client, server, auth)

    async def dev_filter_search_ios_developers_query_post(
        self, body: IosDevSearchBody | IosDevSearchBodyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IosDevListResponse:
        """Searches App Store developers by a structured JSON filter, with paging and sorting. ``GET /ios/developers``
        covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosDevelopersQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.dev_filter_search_ios_developers_query_post(
                body, request_options=request_options
            ),
        )

    async def dev_search_ios_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[IosDev]:
        """Free-text search across App Store developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /ios/developers/query``.

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
                subscription is not active and must be renewed ``error`` is ``IosDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.dev_search_ios_developers_get(
                q=q, fields=fields, sort=sort, limit=limit, page=page, request_options=request_options
            ),
        )

    async def get_app_details_ios_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IosApp:
        """Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use ``country``
        to select the storefront and ``language`` for the metadata language; ``fields`` limits the response to the
        columns you need.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Forbidden Too Many Requests Validation Error The ``API-KEY`` header is missing or holds an unknown
                key Nothing was charged: the credit balance does not cover this call's price (with X-Cost and
                X-Remaining-Credits), or the paid subscription is not active and must be renewed ``error`` is
                ``IosApps401Error1 | str | Error | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_app_details_ios_apps_id_get(
                id_, fields=fields, country=country, language=language, request_options=request_options
            ),
        )

    async def get_app_search_ios_apps_get(
        self,
        *,
        q: str | None = None,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[IosApp]:
        """Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured
        criteria such as revenue, downloads or category, use ``POST /ios/apps/query``.

        Args:
            q: Word or phrase for search.
            country: Country for specific country fields. Default - US.
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
                subscription is not active and must be renewed ``error`` is ``IosApps401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_app_search_ios_apps_get(
                q=q, country=country, fields=fields, sort=sort, limit=limit, page=page, request_options=request_options
            ),
        )

    async def get_apps_estimates_ios_developers_id_estimates_get(
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
            id_: Developer's ids to return separated by comma(,)
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
                subscription is not active and must be renewed ``error`` is ``IosDevelopersEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apps_estimates_ios_developers_id_estimates_get(
                id_, start=start, end=end, fill_gaps=fill_gaps, request_options=request_options
            ),
        )

    async def get_apps_estimates_ios_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[AppsEstimates]:
        """Get App Store apps estimates

        Args:
            id_: App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store
                shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370,
                URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosEstimates401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apps_estimates_ios_estimates_get(
                id_, start=start, end=end, request_options=request_options
            ),
        )

    async def get_country_aggregates_ios_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DevCountryAggregatesResponse:
        """Per-country totals over all App Store developers: developer count, published apps, and sums of monthly
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
                subscription is not active and must be renewed ``error`` is ``IosAggregatesCountries401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_country_aggregates_ios_aggregates_countries_get(
                category_type=category_type, request_options=request_options
            ),
        )

    async def get_developer_ios_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IosDev:
        """Returns the App Store developer record for a single developer id, including the developer's publisher
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
                subscription is not active and must be renewed ``error`` is ``IosDevelopers401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_developer_ios_developers_id_get(
                id_, fields=fields, request_options=request_options
            ),
        )

    async def get_filter_search_ios_apps_query_post(
        self,
        *,
        body: IosAppSearchBody | IosAppSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IosAppListResponse:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Full Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Сategory| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |screenshots_duo_inner|[]string|- |iPhone Duo inner
        display screenshots| |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots| |removal_date
        |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size| |rating_count |integer |+
        |Ratings| |rating_value |float |+ |Rating in request country| |review_count |integer |+ |Reviews| |rating_avg
        |float |+ |Rating| |iap |boolean |- |Inapp| |copyright |string |- |Copyright| |seller |string |- |Seller|
        |chart_info |object |+ |App's chart info: category, collection, country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |active_countries|[]string|["US", "DE", "FR"] - List of countries where app
        is available (At least one country)| |category|string|App Store category: "TRAVEL", "EDUCATION",
        "GAMES_STRATEGY", "LIFESTYLE" etc| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |with_ads|boolean|With Ads| |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsQuery401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_filter_search_ios_apps_query_post(
                body=body, request_options=request_options
            ),
        )

    async def get_ios_rankings_ios_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[int] | None = None,
        platform: list[IosPlatformOrStr] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[IosCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResponseListModelsResponsesResponseIosRankingItem:
        """Returns App Store chart positions over a date range, filtered by storefront, category, collection and
        platform. One row per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            platform: Platforms (iPhone/iPad, comma-separated)
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
                subscription is not active and must be renewed ``error`` is ``IosRankings401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_ios_rankings_ios_rankings_get(
                date_start=date_start,
                date_end=date_end,
                app=app,
                platform=platform,
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

    async def get_play_app_countries_ios_info_countries_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoreCountries:
        """This query returns the list of App Store storefronts available as a ``country`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``IosInfoCountries401Error1 | str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_play_app_countries_ios_info_countries_get(request_options=request_options)
        )

    async def get_play_app_languages_ios_info_languages_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoreLanguages:
        """This query returns the list of metadata languages available as a ``language`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: The ``API-KEY`` header is missing or holds an unknown key Nothing was charged: the credit balance
                does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid subscription is not
                active and must be renewed ``error`` is ``IosInfoLanguages401Error1 | str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_play_app_languages_ios_info_languages_get(request_options=request_options)
        )

    async def get_recrawl_ios_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The recrawl is queued; the body is empty

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsRecrawl401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_recrawl_ios_apps_id_recrawl_get(
                id_, country=country, language=language, request_options=request_options
            ),
        )

    async def get_reviews_ios_apps_id_reviews_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[IosReview]:
        """Returns user reviews for a single App Store app. Reviews are storefront-specific, so ``country`` changes
        which set is returned.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: App storefront
            fields: Fields to return separated by comma(,)
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsReviews401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_reviews_ios_apps_id_reviews_get(
                id_, country=country, fields=fields, limit=limit, sort=sort, request_options=request_options
            ),
        )

    async def get_similar_ios_apps_similar_post(
        self,
        *,
        body: IosSimilarSearchBody | IosSimilarSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IosAppListResponse:
        """Returns the apps App Store lists as similar to the given app. Set ``link`` to the reverse direction to get
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
                subscription is not active and must be renewed ``error`` is ``IosAppsSimilar401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_similar_ios_apps_similar_post(body=body, request_options=request_options)
        )

    async def get_summary_ios_apps_summary_post(
        self,
        body: IosSummarySearchBody | IosSummarySearchBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SummaryResponse:
        """Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /ios/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``IosAppsSummary401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_summary_ios_apps_summary_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAppStoreWithRawResponse:
        return self._with_raw_response


class AppStoreWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def dev_filter_search_ios_developers_query_post(
        self, body: IosDevSearchBody | IosDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IosDevListResponse, DevFilterSearchIosDevelopersQueryPostErrorBody]:
        """Searches App Store developers by a structured JSON filter, with paging and sorting. ``GET /ios/developers``
        covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/developers/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosDevSearchBody | IosDevSearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IosDevListResponse],
            error_mapper=dev_filter_search_ios_developers_query_post_error_mapper,
            request_options=request_options,
        )

    def dev_search_ios_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IosDev], DevSearchIosDevelopersGetErrorBody]:
        """Free-text search across App Store developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /ios/developers/query``.

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
            url_template=self._server.default("/ios/developers"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[IosDev]],
            error_mapper=dev_search_ios_developers_get_error_mapper,
            request_options=request_options,
        )

    def get_app_details_ios_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IosApp, GetAppDetailsIosAppsIdGetErrorBody]:
        """Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use ``country``
        to select the storefront and ``language`` for the metadata language; ``fields`` limits the response to the
        columns you need.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/apps/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("fields", fields),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IosApp],
            error_mapper=get_app_details_ios_apps_id_get_error_mapper,
            request_options=request_options,
        )

    def get_app_search_ios_apps_get(
        self,
        *,
        q: str | None = None,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IosApp], GetAppSearchIosAppsGetErrorBody]:
        """Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured
        criteria such as revenue, downloads or category, use ``POST /ios/apps/query``.

        Args:
            q: Word or phrase for search.
            country: Country for specific country fields. Default - US.
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
            url_template=self._server.default("/ios/apps"),
            query_params=[
                param[str | None]("q", q),
                param[AppCountriesOrStr | None]("country", country),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[IosApp]],
            error_mapper=get_app_search_ios_apps_get_error_mapper,
            request_options=request_options,
        )

    def get_apps_estimates_ios_developers_id_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        fill_gaps: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DevAppsEstimates], GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody]:
        """Get Google Play apps estimates

        Args:
            id_: Developer's ids to return separated by comma(,)
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
            url_template=self._server.default("/ios/developers/{id}/estimates"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date | None]("start", start),
                param[Date | None]("end", end),
                param[bool | None]("fill_gaps", fill_gaps),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[DevAppsEstimates]],
            error_mapper=get_apps_estimates_ios_developers_id_estimates_get_error_mapper,
            request_options=request_options,
        )

    def get_apps_estimates_ios_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AppsEstimates], GetAppsEstimatesIosEstimatesGetErrorBody]:
        """Get App Store apps estimates

        Args:
            id_: App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store
                shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370,
                URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/estimates"),
            query_params=[param[str]("id", id_), param[Date | None]("start", start), param[Date | None]("end", end)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[AppsEstimates]],
            error_mapper=get_apps_estimates_ios_estimates_get_error_mapper,
            request_options=request_options,
        )

    def get_country_aggregates_ios_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesIosAggregatesCountriesGetErrorBody]:
        """Per-country totals over all App Store developers: developer count, published apps, and sums of monthly
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
            url_template=self._server.default("/ios/aggregates/countries"),
            query_params=[param[TypeEnumOrStr | None]("category_type", category_type)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[DevCountryAggregatesResponse],
            error_mapper=get_country_aggregates_ios_aggregates_countries_get_error_mapper,
            request_options=request_options,
        )

    def get_developer_ios_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IosDev, GetDeveloperIosDevelopersIdGetErrorBody]:
        """Returns the App Store developer record for a single developer id, including the developer's publisher
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
            url_template=self._server.default("/ios/developers/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IosDev],
            error_mapper=get_developer_ios_developers_id_get_error_mapper,
            request_options=request_options,
        )

    def get_filter_search_ios_apps_query_post(
        self,
        *,
        body: IosAppSearchBody | IosAppSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPostErrorBody]:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Full Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Сategory| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |screenshots_duo_inner|[]string|- |iPhone Duo inner
        display screenshots| |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots| |removal_date
        |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size| |rating_count |integer |+
        |Ratings| |rating_value |float |+ |Rating in request country| |review_count |integer |+ |Reviews| |rating_avg
        |float |+ |Rating| |iap |boolean |- |Inapp| |copyright |string |- |Copyright| |seller |string |- |Seller|
        |chart_info |object |+ |App's chart info: category, collection, country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |active_countries|[]string|["US", "DE", "FR"] - List of countries where app
        is available (At least one country)| |category|string|App Store category: "TRAVEL", "EDUCATION",
        "GAMES_STRATEGY", "LIFESTYLE" etc| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |with_ads|boolean|With Ads| |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/apps/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosAppSearchBody | IosAppSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IosAppListResponse],
            error_mapper=get_filter_search_ios_apps_query_post_error_mapper,
            request_options=request_options,
        )

    def get_ios_rankings_ios_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[int] | None = None,
        platform: list[IosPlatformOrStr] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[IosCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseListModelsResponsesResponseIosRankingItem, GetIosRankingsIosRankingsGetErrorBody]:
        """Returns App Store chart positions over a date range, filtered by storefront, category, collection and
        platform. One row per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            platform: Platforms (iPhone/iPad, comma-separated)
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
            url_template=self._server.default("/ios/rankings"),
            query_params=[
                param[Date | None]("date_start", date_start),
                param[Date | None]("date_end", date_end),
                param[list[int] | None]("app", app),
                param[list[IosPlatformOrStr] | None]("platform", platform),
                param[list[AppCountriesOrStr] | None]("country", country),
                param[list[IosCategoryOrStr] | None]("category", category),
                param[list[CollectionOrStr] | None]("collection", collection),
                param[int | None]("rank_start", rank_start),
                param[int | None]("rank_end", rank_end),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ApiResponseListModelsResponsesResponseIosRankingItem],
            error_mapper=get_ios_rankings_ios_rankings_get_error_mapper,
            request_options=request_options,
        )

    def get_play_app_countries_ios_info_countries_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoreCountries, GetPlayAppCountriesIosInfoCountriesGetErrorBody]:
        """This query returns the list of App Store storefronts available as a ``country`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/info/countries"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[StoreCountries],
            error_mapper=get_play_app_countries_ios_info_countries_get_error_mapper,
            request_options=request_options,
        )

    def get_play_app_languages_ios_info_languages_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoreLanguages, GetPlayAppLanguagesIosInfoLanguagesGetErrorBody]:
        """This query returns the list of metadata languages available as a ``language`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/info/languages"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[StoreLanguages],
            error_mapper=get_play_app_languages_ios_info_languages_get_error_mapper,
            request_options=request_options,
        )

    def get_recrawl_ios_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRecrawlIosAppsIdRecrawlGetErrorBody]:
        """Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/apps/{id}/recrawl"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=get_recrawl_ios_apps_id_recrawl_get_error_mapper,
            request_options=request_options,
        )

    def get_reviews_ios_apps_id_reviews_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IosReview], GetReviewsIosAppsIdReviewsGetErrorBody]:
        """Returns user reviews for a single App Store app. Reviews are storefront-specific, so ``country`` changes
        which set is returned.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: App storefront
            fields: Fields to return separated by comma(,)
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/apps/{id}/reviews"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[IosReview]],
            error_mapper=get_reviews_ios_apps_id_reviews_get_error_mapper,
            request_options=request_options,
        )

    def get_similar_ios_apps_similar_post(
        self,
        *,
        body: IosSimilarSearchBody | IosSimilarSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IosAppListResponse, GetSimilarIosAppsSimilarPostErrorBody]:
        """Returns the apps App Store lists as similar to the given app. Set ``link`` to the reverse direction to get
        the apps that list the given app as similar to them instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/apps/similar"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosSimilarSearchBody | IosSimilarSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IosAppListResponse],
            error_mapper=get_similar_ios_apps_similar_post_error_mapper,
            request_options=request_options,
        )

    def get_summary_ios_apps_summary_post(
        self,
        body: IosSummarySearchBody | IosSummarySearchBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetSummaryIosAppsSummaryPostErrorBody]:
        """Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /ios/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/apps/summary"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosSummarySearchBody | IosSummarySearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SummaryResponse],
            error_mapper=get_summary_ios_apps_summary_post_error_mapper,
            request_options=request_options,
        )


class AsyncAppStoreWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def dev_filter_search_ios_developers_query_post(
        self, body: IosDevSearchBody | IosDevSearchBodyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IosDevListResponse, DevFilterSearchIosDevelopersQueryPostErrorBody]:
        """Searches App Store developers by a structured JSON filter, with paging and sorting. ``GET /ios/developers``
        covers the free-text equivalent.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/developers/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosDevSearchBody | IosDevSearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IosDevListResponse],
            error_mapper=dev_filter_search_ios_developers_query_post_error_mapper,
            request_options=request_options,
        )

    async def dev_search_ios_developers_get(
        self,
        *,
        q: str | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IosDev], DevSearchIosDevelopersGetErrorBody]:
        """Free-text search across App Store developers using a ``field:value`` query such as ``hq_country:US``. To
        filter on structured criteria, use ``POST /ios/developers/query``.

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
            url_template=self._server.default("/ios/developers"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[IosDev]],
            error_mapper=dev_search_ios_developers_get_error_mapper,
            request_options=request_options,
        )

    async def get_app_details_ios_apps_id_get(
        self,
        id_: str,
        *,
        fields: str | None = None,
        country: AppCountriesOrStr | None = None,
        language: AppLanguagesOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IosApp, GetAppDetailsIosAppsIdGetErrorBody]:
        """Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use ``country``
        to select the storefront and ``language`` for the metadata language; ``fields`` limits the response to the
        columns you need.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            fields: Fields to return separated by comma(,)
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: store default language.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/apps/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("fields", fields),
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IosApp],
            error_mapper=get_app_details_ios_apps_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_app_search_ios_apps_get(
        self,
        *,
        q: str | None = None,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        sort: str | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IosApp], GetAppSearchIosAppsGetErrorBody]:
        """Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured
        criteria such as revenue, downloads or category, use ``POST /ios/apps/query``.

        Args:
            q: Word or phrase for search.
            country: Country for specific country fields. Default - US.
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
            url_template=self._server.default("/ios/apps"),
            query_params=[
                param[str | None]("q", q),
                param[AppCountriesOrStr | None]("country", country),
                param[str | None]("fields", fields),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[IosApp]],
            error_mapper=get_app_search_ios_apps_get_error_mapper,
            request_options=request_options,
        )

    async def get_apps_estimates_ios_developers_id_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        fill_gaps: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DevAppsEstimates], GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody]:
        """Get Google Play apps estimates

        Args:
            id_: Developer's ids to return separated by comma(,)
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
            url_template=self._server.default("/ios/developers/{id}/estimates"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date | None]("start", start),
                param[Date | None]("end", end),
                param[bool | None]("fill_gaps", fill_gaps),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[DevAppsEstimates]],
            error_mapper=get_apps_estimates_ios_developers_id_estimates_get_error_mapper,
            request_options=request_options,
        )

    async def get_apps_estimates_ios_estimates_get(
        self,
        id_: str,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AppsEstimates], GetAppsEstimatesIosEstimatesGetErrorBody]:
        """Get App Store apps estimates

        Args:
            id_: App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store
                shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370,
                URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422
            start: Start date. Format YYYY-MM-DD
            end: Start date. Format YYYY-MM-DD
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/estimates"),
            query_params=[param[str]("id", id_), param[Date | None]("start", start), param[Date | None]("end", end)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[AppsEstimates]],
            error_mapper=get_apps_estimates_ios_estimates_get_error_mapper,
            request_options=request_options,
        )

    async def get_country_aggregates_ios_aggregates_countries_get(
        self, *, category_type: TypeEnumOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesIosAggregatesCountriesGetErrorBody]:
        """Per-country totals over all App Store developers: developer count, published apps, and sums of monthly
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
            url_template=self._server.default("/ios/aggregates/countries"),
            query_params=[param[TypeEnumOrStr | None]("category_type", category_type)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[DevCountryAggregatesResponse],
            error_mapper=get_country_aggregates_ios_aggregates_countries_get_error_mapper,
            request_options=request_options,
        )

    async def get_developer_ios_developers_id_get(
        self, id_: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IosDev, GetDeveloperIosDevelopersIdGetErrorBody]:
        """Returns the App Store developer record for a single developer id, including the developer's publisher
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
            url_template=self._server.default("/ios/developers/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IosDev],
            error_mapper=get_developer_ios_developers_id_get_error_mapper,
            request_options=request_options,
        )

    async def get_filter_search_ios_apps_query_post(
        self,
        *,
        body: IosAppSearchBody | IosAppSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPostErrorBody]:
        """|**Fields**||||
        |---|---|---|---|
        |**Name** |**Type** |**Sort**|**Description**| |name |string |- |Name| |bundle |string |- |Bundle|
        |description_full |string |- |Full Description| |published |boolean |- |Published| |listing_visible |boolean |-
        |Published in request country| |category |string |- |Сategory| |category_type |string |- |Type| |revenue_month
        |integer |+ |Monthly Revenue| |revenue_lifetime |integer |- |Lifetime Revenue| |downloads_month |integer |+
        |Monthly Downloads| |downloads_lifetime|integer |- |Lifetime Downloads| |update_date |date ISO8601|+ |Last
        Updated| |release_date |date ISO8601|+ |Release date| |developer_name |string |- |Developer name|
        |description_short|string |- |Short description| |whatsnew |string |- |Whatsnew| |icon |string |- |Image| |video
        |string |- |Trailer| |screenshots |[]string |- |Screenshots| |screenshots_duo_inner|[]string|- |iPhone Duo inner
        display screenshots| |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots| |removal_date
        |date ISO8601|+ |Removal date| |version |string |- |Version| |size |float |- |Size| |rating_count |integer |+
        |Ratings| |rating_value |float |+ |Rating in request country| |review_count |integer |+ |Reviews| |rating_avg
        |float |+ |Rating| |iap |boolean |- |Inapp| |copyright |string |- |Copyright| |seller |string |- |Seller|
        |chart_info |object |+ |App's chart info: category, collection, country, position for today|

        |**Filters**|||
        |---|---|---|
        |**Name**|**Type**|**Description**| |name|string|Name| |published|boolean|Published| |category_type|string|APP
        or GAME| |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands:
        100 = 100000, 500 = 500000)| |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write
        values in thousands: 100 = 100000, 500 = 500000)| |update_date|DateRange|{"gte": "2021-01-01", "lte":
        "2022-01-01"}| |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
        |rating_count|ValueRange|{"gte": 1000, "lte": 5000}| |developer|string|Developer name|
        |developer_id|string|Developer id| |active_countries|[]string|["US", "DE", "FR"] - List of countries where app
        is available (At least one country)| |category|string|App Store category: "TRAVEL", "EDUCATION",
        "GAMES_STRATEGY", "LIFESTYLE" etc| |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
        |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}| |with_ads|boolean|With Ads| |advertised|boolean|Advertised|

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/apps/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosAppSearchBody | IosAppSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IosAppListResponse],
            error_mapper=get_filter_search_ios_apps_query_post_error_mapper,
            request_options=request_options,
        )

    async def get_ios_rankings_ios_rankings_get(
        self,
        *,
        date_start: Date | None = None,
        date_end: Date | None = None,
        app: list[int] | None = None,
        platform: list[IosPlatformOrStr] | None = None,
        country: list[AppCountriesOrStr] | None = None,
        category: list[IosCategoryOrStr] | None = None,
        collection: list[CollectionOrStr] | None = None,
        rank_start: int | None = None,
        rank_end: int | None = None,
        limit: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseListModelsResponsesResponseIosRankingItem, GetIosRankingsIosRankingsGetErrorBody]:
        """Returns App Store chart positions over a date range, filtered by storefront, category, collection and
        platform. One row per app per chart per day.

        Args:
            date_start: Start date (YYYY-MM-DD)
            date_end: End date (YYYY-MM-DD)
            app: App IDs (comma-separated)
            platform: Platforms (iPhone/iPad, comma-separated)
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
            url_template=self._server.default("/ios/rankings"),
            query_params=[
                param[Date | None]("date_start", date_start),
                param[Date | None]("date_end", date_end),
                param[list[int] | None]("app", app),
                param[list[IosPlatformOrStr] | None]("platform", platform),
                param[list[AppCountriesOrStr] | None]("country", country),
                param[list[IosCategoryOrStr] | None]("category", category),
                param[list[CollectionOrStr] | None]("collection", collection),
                param[int | None]("rank_start", rank_start),
                param[int | None]("rank_end", rank_end),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ApiResponseListModelsResponsesResponseIosRankingItem],
            error_mapper=get_ios_rankings_ios_rankings_get_error_mapper,
            request_options=request_options,
        )

    async def get_play_app_countries_ios_info_countries_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoreCountries, GetPlayAppCountriesIosInfoCountriesGetErrorBody]:
        """This query returns the list of App Store storefronts available as a ``country`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/info/countries"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[StoreCountries],
            error_mapper=get_play_app_countries_ios_info_countries_get_error_mapper,
            request_options=request_options,
        )

    async def get_play_app_languages_ios_info_languages_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoreLanguages, GetPlayAppLanguagesIosInfoLanguagesGetErrorBody]:
        """This query returns the list of metadata languages available as a ``language`` parameter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/info/languages"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[StoreLanguages],
            error_mapper=get_play_app_languages_ios_info_languages_get_error_mapper,
            request_options=request_options,
        )

    async def get_recrawl_ios_apps_id_recrawl_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = AppCountries.US,
        language: AppLanguagesOrStr | None = AppLanguages.EN_US,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRecrawlIosAppsIdRecrawlGetErrorBody]:
        """Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is
        accepted; the updated data appears on the app endpoints after the crawl completes.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: Country for which return data. By default: US.
            language: Language of meta data. By default: en_US
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/apps/{id}/recrawl"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[AppLanguagesOrStr | None]("language", language),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=get_recrawl_ios_apps_id_recrawl_get_error_mapper,
            request_options=request_options,
        )

    async def get_reviews_ios_apps_id_reviews_get(
        self,
        id_: str,
        *,
        country: AppCountriesOrStr | None = None,
        fields: str | None = None,
        limit: int | None = 10,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[IosReview], GetReviewsIosAppsIdReviewsGetErrorBody]:
        """Returns user reviews for a single App Store app. Reviews are storefront-specific, so ``country`` changes
        which set is returned.

        Args:
            id_: App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store
                link cannot be passed in the path; pass the id from it
            country: App storefront
            fields: Fields to return separated by comma(,)
            limit: Count of reviews per page
            sort: Sort params separated by comma(,)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ios/apps/{id}/reviews"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[AppCountriesOrStr | None]("country", country),
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[IosReview]],
            error_mapper=get_reviews_ios_apps_id_reviews_get_error_mapper,
            request_options=request_options,
        )

    async def get_similar_ios_apps_similar_post(
        self,
        *,
        body: IosSimilarSearchBody | IosSimilarSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IosAppListResponse, GetSimilarIosAppsSimilarPostErrorBody]:
        """Returns the apps App Store lists as similar to the given app. Set ``link`` to the reverse direction to get
        the apps that list the given app as similar to them instead.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/apps/similar"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosSimilarSearchBody | IosSimilarSearchBodyDict | None](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IosAppListResponse],
            error_mapper=get_similar_ios_apps_similar_post_error_mapper,
            request_options=request_options,
        )

    async def get_summary_ios_apps_summary_post(
        self,
        body: IosSummarySearchBody | IosSummarySearchBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SummaryResponse, GetSummaryIosAppsSummaryPostErrorBody]:
        """Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the
        apps themselves. Takes the same filter body as ``POST /ios/apps/query``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ios/apps/summary"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IosSummarySearchBody | IosSummarySearchBodyDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SummaryResponse],
            error_mapper=get_summary_ios_apps_summary_post_error_mapper,
            request_options=request_options,
        )
