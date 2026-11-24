from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_connection_analytics_error import (
    GetConnectionAnalyticsErrorBody,
    get_connection_analytics_error_mapper,
)
from ..errors.get_user_analytics_error import GetUserAnalyticsErrorBody, get_user_analytics_error_mapper
from ..models.analytics_response import AnalyticsResponse
from ..models.connection_analytics_response import ConnectionAnalyticsResponse
from ..models.enums.interval import IntervalOrStr
from ..server.server import Server


class Analytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticsWithRawResponse(client, server, auth)

    def get_connection_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConnectionAnalyticsResponse:
        """Retrieve connection analytics, including connection creation, status distribution, method distribution, and
        disruption rates over a given time interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful connection analytics response

        Raises:
            ApiError: Invalid request parameters Unauthorized - missing or invalid token Access denied - expired or
                invalid token Internal server error ``error`` is ``ErrorList | RawError``."""
        return unwrap(
            self._with_raw_response.get_connection_analytics(
                interval, from_date=from_date, to_date=to_date, request_options=request_options
            ),
        )

    def get_user_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        connection_type: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Retrieve user analytics, such as number of users and connections created for an application over a given time
        interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            connection_type: Filter analytics by one or more connection types. Must be a comma-separated string. Values
                are case-sensitive: all, cdr, pdf, web, csv.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful analytics response

        Raises:
            ApiError: Invalid request parameters Unauthorized - missing or invalid token Access denied - expired or
                invalid token Internal server error ``error`` is ``ErrorList | RawError``."""
        return unwrap(
            self._with_raw_response.get_user_analytics(
                interval,
                from_date=from_date,
                to_date=to_date,
                connection_type=connection_type,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AnalyticsWithRawResponse:
        return self._with_raw_response


class AsyncAnalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticsWithRawResponse(client, server, auth)

    async def get_connection_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConnectionAnalyticsResponse:
        """Retrieve connection analytics, including connection creation, status distribution, method distribution, and
        disruption rates over a given time interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful connection analytics response

        Raises:
            ApiError: Invalid request parameters Unauthorized - missing or invalid token Access denied - expired or
                invalid token Internal server error ``error`` is ``ErrorList | RawError``."""
        return unwrap(
            await self._with_raw_response.get_connection_analytics(
                interval, from_date=from_date, to_date=to_date, request_options=request_options
            ),
        )

    async def get_user_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        connection_type: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Retrieve user analytics, such as number of users and connections created for an application over a given time
        interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            connection_type: Filter analytics by one or more connection types. Must be a comma-separated string. Values
                are case-sensitive: all, cdr, pdf, web, csv.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful analytics response

        Raises:
            ApiError: Invalid request parameters Unauthorized - missing or invalid token Access denied - expired or
                invalid token Internal server error ``error`` is ``ErrorList | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_analytics(
                interval,
                from_date=from_date,
                to_date=to_date,
                connection_type=connection_type,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAnalyticsWithRawResponse:
        return self._with_raw_response


class AnalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_connection_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectionAnalyticsResponse, GetConnectionAnalyticsErrorBody]:
        """Retrieve connection analytics, including connection creation, status distribution, method distribution, and
        disruption rates over a given time interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/connections"),
            query_params=[
                param[IntervalOrStr]("interval", interval),
                param[Date | None]("fromDate", from_date),
                param[Date | None]("toDate", to_date),
            ],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectionAnalyticsResponse],
            error_mapper=get_connection_analytics_error_mapper,
            request_options=request_options,
        )

    def get_user_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        connection_type: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetUserAnalyticsErrorBody]:
        """Retrieve user analytics, such as number of users and connections created for an application over a given time
        interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            connection_type: Filter analytics by one or more connection types. Must be a comma-separated string. Values
                are case-sensitive: all, cdr, pdf, web, csv.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/users"),
            query_params=[
                param[IntervalOrStr]("interval", interval),
                param[Date | None]("fromDate", from_date),
                param[Date | None]("toDate", to_date),
                param[str | None]("connectionType", connection_type),
            ],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_user_analytics_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_connection_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectionAnalyticsResponse, GetConnectionAnalyticsErrorBody]:
        """Retrieve connection analytics, including connection creation, status distribution, method distribution, and
        disruption rates over a given time interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/connections"),
            query_params=[
                param[IntervalOrStr]("interval", interval),
                param[Date | None]("fromDate", from_date),
                param[Date | None]("toDate", to_date),
            ],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectionAnalyticsResponse],
            error_mapper=get_connection_analytics_error_mapper,
            request_options=request_options,
        )

    async def get_user_analytics(
        self,
        interval: IntervalOrStr,
        *,
        from_date: Date | None = None,
        to_date: Date | None = None,
        connection_type: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetUserAnalyticsErrorBody]:
        """Retrieve user analytics, such as number of users and connections created for an application over a given time
        interval.

        Args:
            interval: Time interval for analytics.
            from_date: Start date of the analytics period (e.g., 2023-01-01).
            to_date: End date of the analytics period (e.g., 2024-01-01).
            connection_type: Filter analytics by one or more connection types. Must be a comma-separated string. Values
                are case-sensitive: all, cdr, pdf, web, csv.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/users"),
            query_params=[
                param[IntervalOrStr]("interval", interval),
                param[Date | None]("fromDate", from_date),
                param[Date | None]("toDate", to_date),
                param[str | None]("connectionType", connection_type),
            ],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_user_analytics_error_mapper,
            request_options=request_options,
        )
