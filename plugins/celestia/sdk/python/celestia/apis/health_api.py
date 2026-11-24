from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_website_health_error import GetWebsiteHealthErrorBody, get_website_health_error_mapper
from ..models.health import Health
from ..server.server import Server


class HealthApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = HealthApiWithRawResponse(client, server)

    def get_website_health(self, *, request_options: RequestOptionsOrDict | None = None) -> Health:
        """Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication
        required.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Runtime is accepting requests.

        Raises:
            ApiError: Request failed. Read code and hint before retrying. ``error`` is ``ErrorCelestiaWebsiteContactApi
                | RawError``."""
        return unwrap(self._with_raw_response.get_website_health(request_options=request_options))

    def head_website_health(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """The same runtime liveness signal as GET, with an empty response body.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Runtime is accepting requests; no body.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.head_website_health(request_options=request_options))

    @property
    def with_raw_response(self) -> HealthApiWithRawResponse:
        return self._with_raw_response


class AsyncHealthApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncHealthApiWithRawResponse(client, server)

    async def get_website_health(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Health:
        """Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication
        required.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Runtime is accepting requests.

        Raises:
            ApiError: Request failed. Read code and hint before retrying. ``error`` is ``ErrorCelestiaWebsiteContactApi
                | RawError``."""
        return unwrap(await self._with_raw_response.get_website_health(request_options=request_options))

    async def head_website_health(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """The same runtime liveness signal as GET, with an empty response body.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Runtime is accepting requests; no body.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.head_website_health(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncHealthApiWithRawResponse:
        return self._with_raw_response


class HealthApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_website_health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetWebsiteHealthErrorBody]:
        """Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication
        required.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_celestia_website_contact_api("/api/health/"),
            decoder=json_decoder[Health],
            error_mapper=get_website_health_error_mapper,
            request_options=request_options,
        )

    def head_website_health(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """The same runtime liveness signal as GET, with an empty response body.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="HEAD",
            url_template=self._server.default_celestia_website_contact_api("/api/health/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncHealthApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_website_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetWebsiteHealthErrorBody]:
        """Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication
        required.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_celestia_website_contact_api("/api/health/"),
            decoder=async_json_decoder[Health],
            error_mapper=get_website_health_error_mapper,
            request_options=request_options,
        )

    async def head_website_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """The same runtime liveness signal as GET, with an empty response body.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="HEAD",
            url_template=self._server.default_celestia_website_contact_api("/api/health/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
