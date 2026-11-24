from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.pledges_show_error import PledgesShowErrorBody, pledges_show_error_mapper
from ..models.pledge_resource import PledgeResource
from ..models.v1_pledges_response import V1PledgesResponse
from ..server.server import Server


class Pledges:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PledgesWithRawResponse(client, server, auth)

    def pledges_index(self, *, request_options: RequestOptionsOrDict | None = None) -> V1PledgesResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``PledgeResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.pledges_index(request_options=request_options))

    def pledges_show(self, pledge: int, *, request_options: RequestOptionsOrDict | None = None) -> PledgeResource:
        """Send a ``GET`` request.

        Args:
            pledge: The pledge ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``PledgeResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.pledges_show(pledge, request_options=request_options))

    @property
    def with_raw_response(self) -> PledgesWithRawResponse:
        return self._with_raw_response


class AsyncPledges:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPledgesWithRawResponse(client, server, auth)

    async def pledges_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1PledgesResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``PledgeResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.pledges_index(request_options=request_options))

    async def pledges_show(
        self, pledge: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PledgeResource:
        """Send a ``GET`` request.

        Args:
            pledge: The pledge ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``PledgeResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.pledges_show(pledge, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPledgesWithRawResponse:
        return self._with_raw_response


class PledgesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def pledges_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PledgesResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pledges"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1PledgesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def pledges_show(
        self, pledge: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PledgeResource, PledgesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            pledge: The pledge ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pledges/{pledge}"),
            path_params=[param[int]("pledge", pledge)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[PledgeResource],
            error_mapper=pledges_show_error_mapper,
            request_options=request_options,
        )


class AsyncPledgesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def pledges_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PledgesResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pledges"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1PledgesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def pledges_show(
        self, pledge: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PledgeResource, PledgesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            pledge: The pledge ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pledges/{pledge}"),
            path_params=[param[int]("pledge", pledge)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[PledgeResource],
            error_mapper=pledges_show_error_mapper,
            request_options=request_options,
        )
