from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_filter_search_ios_apps_query_post2_error import (
    GetFilterSearchIosAppsQueryPost2ErrorBody,
    get_filter_search_ios_apps_query_post2_error_mapper,
)
from ..models.ios_app_list_response import IosAppListResponse
from ..models.ios_app_search_body import IosAppSearchBody, IosAppSearchBodyDict
from ..server.server import Server


class SearchFilterV2:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchFilterV2WithRawResponse(client, server, auth)

    def get_filter_search_ios_apps_query_post2(
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
            self._with_raw_response.get_filter_search_ios_apps_query_post2(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SearchFilterV2WithRawResponse:
        return self._with_raw_response


class AsyncSearchFilterV2:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchFilterV2WithRawResponse(client, server, auth)

    async def get_filter_search_ios_apps_query_post2(
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
            await self._with_raw_response.get_filter_search_ios_apps_query_post2(
                body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchFilterV2WithRawResponse:
        return self._with_raw_response


class SearchFilterV2WithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_filter_search_ios_apps_query_post2(
        self,
        *,
        body: IosAppSearchBody | IosAppSearchBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPost2ErrorBody]:
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
            error_mapper=get_filter_search_ios_apps_query_post2_error_mapper,
            request_options=request_options,
        )


class AsyncSearchFilterV2WithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_filter_search_ios_apps_query_post2(
        self,
        *,
        body: IosAppSearchBody | IosAppSearchBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPost2ErrorBody]:
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
            error_mapper=get_filter_search_ios_apps_query_post2_error_mapper,
            request_options=request_options,
        )
