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
from ..errors.add_custom_bitlink_error import AddCustomBitlinkErrorBody, add_custom_bitlink_error_mapper
from ..errors.get_clicks_for_custom_bitlink_error import (
    GetClicksForCustomBitlinkErrorBody,
    get_clicks_for_custom_bitlink_error_mapper,
)
from ..errors.get_custom_bitlink_error import GetCustomBitlinkErrorBody, get_custom_bitlink_error_mapper
from ..errors.get_custom_bitlink_metrics_by_destination_error import (
    GetCustomBitlinkMetricsByDestinationErrorBody,
    get_custom_bitlink_metrics_by_destination_error_mapper,
)
from ..errors.update_custom_bitlink_error import UpdateCustomBitlinkErrorBody, update_custom_bitlink_error_mapper
from ..models.add_custom_bitlink import AddCustomBitlink, AddCustomBitlinkDict
from ..models.click_metrics_bitly_custom_bitlinks_api import ClickMetricsBitlyCustomBitlinksApi
from ..models.clicks import Clicks
from ..models.custom_bitlink_bitly_custom_bitlinks_api import CustomBitlinkBitlyCustomBitlinksApi
from ..models.enums.time_unit import TimeUnit, TimeUnitOrStr
from ..models.update_custom_bitlink import UpdateCustomBitlink, UpdateCustomBitlinkDict
from ..server.server import Server


class CustomBitlinks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomBitlinksWithRawResponse(client, server, auth)

    def add_custom_bitlink(
        self, body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomBitlinkBitlyCustomBitlinksApi:
        """Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint
        can also be used for initial redirects to a link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND Conflict UNPROCESSABLE_ENTITY
                MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(self._with_raw_response.add_custom_bitlink(body, request_options=request_options))

    def get_clicks_for_custom_bitlink(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Clicks:
        """Returns the click counts for the specified link. This returns an array with clicks based on a date.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_clicks_for_custom_bitlink(
                custom_bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def get_custom_bitlink(
        self, custom_bitlink: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomBitlinkBitlyCustomBitlinksApi:
        """Returns the details and history of the specified link.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_custom_bitlink(custom_bitlink, request_options=request_options))

    def get_custom_bitlink_metrics_by_destination(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns click metrics for the specified link by its historical destinations.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.get_custom_bitlink_metrics_by_destination(
                custom_bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    def update_custom_bitlink(
        self,
        custom_bitlink: str,
        body: UpdateCustomBitlink | UpdateCustomBitlinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomBitlinkBitlyCustomBitlinksApi:
        """Move a keyword (or custom back-half) to a different Bitlink (domains must match).

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            self._with_raw_response.update_custom_bitlink(custom_bitlink, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CustomBitlinksWithRawResponse:
        return self._with_raw_response


class AsyncCustomBitlinks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomBitlinksWithRawResponse(client, server, auth)

    async def add_custom_bitlink(
        self, body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomBitlinkBitlyCustomBitlinksApi:
        """Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint
        can also be used for initial redirects to a link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND Conflict UNPROCESSABLE_ENTITY
                MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError |
                RawError``."""
        return unwrap(await self._with_raw_response.add_custom_bitlink(body, request_options=request_options))

    async def get_clicks_for_custom_bitlink(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Clicks:
        """Returns the click counts for the specified link. This returns an array with clicks based on a date.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_clicks_for_custom_bitlink(
                custom_bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def get_custom_bitlink(
        self, custom_bitlink: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomBitlinkBitlyCustomBitlinksApi:
        """Returns the details and history of the specified link.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_custom_bitlink(custom_bitlink, request_options=request_options))

    async def get_custom_bitlink_metrics_by_destination(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClickMetricsBitlyCustomBitlinksApi:
        """Returns click metrics for the specified link by its historical destinations.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND GONE MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_custom_bitlink_metrics_by_destination(
                custom_bitlink, unit=unit, units=units, unit_reference=unit_reference, request_options=request_options
            ),
        )

    async def update_custom_bitlink(
        self,
        custom_bitlink: str,
        body: UpdateCustomBitlink | UpdateCustomBitlinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomBitlinkBitlyCustomBitlinksApi:
        """Move a keyword (or custom back-half) to a different Bitlink (domains must match).

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_custom_bitlink(custom_bitlink, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCustomBitlinksWithRawResponse:
        return self._with_raw_response


class CustomBitlinksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_custom_bitlink(
        self, body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, AddCustomBitlinkErrorBody]:
        """Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint
        can also be used for initial redirects to a link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/custom_bitlinks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AddCustomBitlink | AddCustomBitlinkDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CustomBitlinkBitlyCustomBitlinksApi],
            error_mapper=add_custom_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_clicks_for_custom_bitlink(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Clicks, GetClicksForCustomBitlinkErrorBody]:
        """Returns the click counts for the specified link. This returns an array with clicks based on a date.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}/clicks"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Clicks],
            error_mapper=get_clicks_for_custom_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_custom_bitlink(
        self, custom_bitlink: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, GetCustomBitlinkErrorBody]:
        """Returns the details and history of the specified link.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CustomBitlinkBitlyCustomBitlinksApi],
            error_mapper=get_custom_bitlink_error_mapper,
            request_options=request_options,
        )

    def get_custom_bitlink_metrics_by_destination(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetCustomBitlinkMetricsByDestinationErrorBody]:
        """Returns click metrics for the specified link by its historical destinations.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}/clicks_by_destination"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_custom_bitlink_metrics_by_destination_error_mapper,
            request_options=request_options,
        )

    def update_custom_bitlink(
        self,
        custom_bitlink: str,
        body: UpdateCustomBitlink | UpdateCustomBitlinkDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, UpdateCustomBitlinkErrorBody]:
        """Move a keyword (or custom back-half) to a different Bitlink (domains must match).

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomBitlink | UpdateCustomBitlinkDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CustomBitlinkBitlyCustomBitlinksApi],
            error_mapper=update_custom_bitlink_error_mapper,
            request_options=request_options,
        )


class AsyncCustomBitlinksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_custom_bitlink(
        self, body: AddCustomBitlink | AddCustomBitlinkDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, AddCustomBitlinkErrorBody]:
        """Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint
        can also be used for initial redirects to a link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/custom_bitlinks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AddCustomBitlink | AddCustomBitlinkDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CustomBitlinkBitlyCustomBitlinksApi],
            error_mapper=add_custom_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_clicks_for_custom_bitlink(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Clicks, GetClicksForCustomBitlinkErrorBody]:
        """Returns the click counts for the specified link. This returns an array with clicks based on a date.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}/clicks"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Clicks],
            error_mapper=get_clicks_for_custom_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_custom_bitlink(
        self, custom_bitlink: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, GetCustomBitlinkErrorBody]:
        """Returns the details and history of the specified link.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CustomBitlinkBitlyCustomBitlinksApi],
            error_mapper=get_custom_bitlink_error_mapper,
            request_options=request_options,
        )

    async def get_custom_bitlink_metrics_by_destination(
        self,
        custom_bitlink: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetCustomBitlinkMetricsByDestinationErrorBody]:
        """Returns click metrics for the specified link by its historical destinations.

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}/clicks_by_destination"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClickMetricsBitlyCustomBitlinksApi],
            error_mapper=get_custom_bitlink_metrics_by_destination_error_mapper,
            request_options=request_options,
        )

    async def update_custom_bitlink(
        self,
        custom_bitlink: str,
        body: UpdateCustomBitlink | UpdateCustomBitlinkDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomBitlinkBitlyCustomBitlinksApi, UpdateCustomBitlinkErrorBody]:
        """Move a keyword (or custom back-half) to a different Bitlink (domains must match).

        Args:
            custom_bitlink: A Custom Bitlink made of the domain and keyword
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/custom_bitlinks/{custom_bitlink}"),
            path_params=[param[str]("custom_bitlink", custom_bitlink)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomBitlink | UpdateCustomBitlinkDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CustomBitlinkBitlyCustomBitlinksApi],
            error_mapper=update_custom_bitlink_error_mapper,
            request_options=request_options,
        )
