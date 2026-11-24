from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.v1_me_response import V1MeResponse
from ..models.v1_usage_response import V1UsageResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def get_me(self, *, request_options: RequestOptionsOrDict | None = None) -> V1MeResponse:
        """Return the authenticated account, plan summary, and credit balance. Control-plane endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_me(request_options=request_options))

    def get_usage(
        self,
        *,
        since: RFC3339DateTime | None = None,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UsageResponse:
        """Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint — free.

        Args:
            since: Return rows with created_at >= this ISO timestamp.
            limit: Page size (max 1000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_usage(since=since, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def get_me(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1MeResponse:
        """Return the authenticated account, plan summary, and credit balance. Control-plane endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_me(request_options=request_options))

    async def get_usage(
        self,
        *,
        since: RFC3339DateTime | None = None,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UsageResponse:
        """Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint — free.

        Args:
            since: Return rows with created_at >= this ISO timestamp.
            limit: Page size (max 1000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_usage(since=since, limit=limit, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_me(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MeResponse, RawError]:
        """Return the authenticated account, plan summary, and credit balance. Control-plane endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1MeResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_usage(
        self,
        *,
        since: RFC3339DateTime | None = None,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UsageResponse, RawError]:
        """Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint — free.

        Args:
            since: Return rows with created_at >= this ISO timestamp.
            limit: Page size (max 1000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usage"),
            query_params=[param[RFC3339DateTime | None]("since", since), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1UsageResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_me(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MeResponse, RawError]:
        """Return the authenticated account, plan summary, and credit balance. Control-plane endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1MeResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_usage(
        self,
        *,
        since: RFC3339DateTime | None = None,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UsageResponse, RawError]:
        """Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint — free.

        Args:
            since: Return rows with created_at >= this ISO timestamp.
            limit: Page size (max 1000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usage"),
            query_params=[param[RFC3339DateTime | None]("since", since), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1UsageResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
