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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_location_error import GetLocationErrorBody, get_location_error_mapper
from ..errors.list_locations_error import ListLocationsErrorBody, list_locations_error_mapper
from ..errors.refresh_location_error import RefreshLocationErrorBody, refresh_location_error_mapper
from ..models.location import Location
from ..models.location_list import LocationList
from ..models.location_refresh import LocationRefresh
from ..server.server import Server


class LocationsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LocationsApiWithRawResponse(client, server, auth)

    def get_location(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Location:
        """One location by ID, disconnected ones included until their data is deleted.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The location.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No location with that ID in this
                workspace and mode (``resource_not_found``). More requests this minute than the plan allows for this
                key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and
                the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_location(id_, request_options=request_options))

    def list_locations(self, *, request_options: RequestOptionsOrDict | None = None) -> LocationList:
        """Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not
        paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All locations.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_locations(request_options=request_options))

    def refresh_location(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> LocationRefresh:
        """Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From
        the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in ``GET /v1/reviews``
        and as ``review.created`` webhooks.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Check queued. The body is the location plus ``refresh: "queued"``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The plan has no Refresh now (Spark, ``feature: "refresh_now"``) or
                doesn't include the location's platform (``feature: "platform"``), both ``plan_feature_unavailable``
                with ``upgrade_url``; or the account is suspended (``account_suspended``). No location with that ID in
                this workspace and mode (``resource_not_found``). The location is not active (disconnected). Over the
                API rate limit (``rate_limited``), or the location was checked less than 15 minutes ago
                (``refresh_too_soon``). ``Retry-After`` says when to try again. Something failed on Prisma's side.
                Retryable. Prisma is under maintenance and the API is paused. Retryable. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.refresh_location(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> LocationsApiWithRawResponse:
        return self._with_raw_response


class AsyncLocationsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLocationsApiWithRawResponse(client, server, auth)

    async def get_location(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Location:
        """One location by ID, disconnected ones included until their data is deleted.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The location.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No location with that ID in this
                workspace and mode (``resource_not_found``). More requests this minute than the plan allows for this
                key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and
                the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_location(id_, request_options=request_options))

    async def list_locations(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> LocationList:
        """Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not
        paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All locations.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_locations(request_options=request_options))

    async def refresh_location(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LocationRefresh:
        """Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From
        the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in ``GET /v1/reviews``
        and as ``review.created`` webhooks.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Check queued. The body is the location plus ``refresh: "queued"``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The plan has no Refresh now (Spark, ``feature: "refresh_now"``) or
                doesn't include the location's platform (``feature: "platform"``), both ``plan_feature_unavailable``
                with ``upgrade_url``; or the account is suspended (``account_suspended``). No location with that ID in
                this workspace and mode (``resource_not_found``). The location is not active (disconnected). Over the
                API rate limit (``rate_limited``), or the location was checked less than 15 minutes ago
                (``refresh_too_soon``). ``Retry-After`` says when to try again. Something failed on Prisma's side.
                Retryable. Prisma is under maintenance and the API is paused. Retryable. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.refresh_location(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLocationsApiWithRawResponse:
        return self._with_raw_response


class LocationsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_location(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Location, GetLocationErrorBody]:
        """One location by ID, disconnected ones included until their data is deleted.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/locations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Location],
            error_mapper=get_location_error_mapper,
            request_options=request_options,
        )

    def list_locations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LocationList, ListLocationsErrorBody]:
        """Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not
        paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/locations"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[LocationList],
            error_mapper=list_locations_error_mapper,
            request_options=request_options,
        )

    def refresh_location(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LocationRefresh, RefreshLocationErrorBody]:
        """Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From
        the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in ``GET /v1/reviews``
        and as ``review.created`` webhooks.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/locations/{id}/refresh"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[LocationRefresh],
            error_mapper=refresh_location_error_mapper,
            request_options=request_options,
        )


class AsyncLocationsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_location(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Location, GetLocationErrorBody]:
        """One location by ID, disconnected ones included until their data is deleted.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/locations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Location],
            error_mapper=get_location_error_mapper,
            request_options=request_options,
        )

    async def list_locations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LocationList, ListLocationsErrorBody]:
        """Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not
        paginated: ``next_cursor`` is always ``null``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/locations"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[LocationList],
            error_mapper=list_locations_error_mapper,
            request_options=request_options,
        )

    async def refresh_location(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LocationRefresh, RefreshLocationErrorBody]:
        """Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From
        the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in ``GET /v1/reviews``
        and as ``review.created`` webhooks.

        Args:
            id_: Location ID (``loc_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/locations/{id}/refresh"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[LocationRefresh],
            error_mapper=refresh_location_error_mapper,
            request_options=request_options,
        )
