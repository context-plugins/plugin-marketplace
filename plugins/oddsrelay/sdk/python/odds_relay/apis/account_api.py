from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_pricing_error import GetPricingErrorBody, get_pricing_error_mapper
from ..errors.get_usage_error import GetUsageErrorBody, get_usage_error_mapper
from ..models.price_table import PriceTable
from ..models.usage import Usage
from ..server.server import Server


class AccountApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountApiWithRawResponse(client, server, auth)

    def get_pricing(self, *, request_options: RequestOptionsOrDict | None = None) -> PriceTable:
        """The price table every call is priced from, byte for byte. Free. ``ETag`` is its SHA-256 (``-gz`` on the gzip
        copy); 304 on a match. Gzip unless refused.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The table.

        Raises:
            ApiError: Unknown or repeated parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400 | Error401 | Error403 | Error429 | Error500 | Error503 | RawError``."""
        return unwrap(self._with_raw_response.get_pricing(request_options=request_options))

    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> Usage:
        """Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. ``scope`` and
        ``scope_version`` are your account's scope (both null when it has none); ``key.products`` is your key's products
        within it.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage.

        Raises:
            ApiError: Unknown or repeated parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``origin_not_allowed``.
                ``too_many_from_address``, then after authentication ``too_many_requests``; the front door's own caps
                answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502 from the front door
                when the API behind it does not answer: an empty body, no ``code``. Retry with backoff. ``error`` is
                ``Error400 | Error401 | Error403 | Error429 | Error500 | Error503 | RawError``."""
        return unwrap(self._with_raw_response.get_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountApiWithRawResponse:
        return self._with_raw_response


class AsyncAccountApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountApiWithRawResponse(client, server, auth)

    async def get_pricing(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> PriceTable:
        """The price table every call is priced from, byte for byte. Free. ``ETag`` is its SHA-256 (``-gz`` on the gzip
        copy); 304 on a match. Gzip unless refused.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The table.

        Raises:
            ApiError: Unknown or repeated parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400 | Error401 | Error403 | Error429 | Error500 | Error503 | RawError``."""
        return unwrap(await self._with_raw_response.get_pricing(request_options=request_options))

    async def get_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Usage:
        """Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. ``scope`` and
        ``scope_version`` are your account's scope (both null when it has none); ``key.products`` is your key's products
        within it.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage.

        Raises:
            ApiError: Unknown or repeated parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``origin_not_allowed``.
                ``too_many_from_address``, then after authentication ``too_many_requests``; the front door's own caps
                answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502 from the front door
                when the API behind it does not answer: an empty body, no ``code``. Retry with backoff. ``error`` is
                ``Error400 | Error401 | Error403 | Error429 | Error500 | Error503 | RawError``."""
        return unwrap(await self._with_raw_response.get_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountApiWithRawResponse:
        return self._with_raw_response


class AccountApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_pricing(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PriceTable, GetPricingErrorBody]:
        """The price table every call is priced from, byte for byte. Free. ``ETag`` is its SHA-256 (``-gz`` on the gzip
        copy); 304 on a match. Gzip unless refused.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/pricing"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[PriceTable],
            error_mapper=get_pricing_error_mapper,
            request_options=request_options,
        )

    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Usage, GetUsageErrorBody]:
        """Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. ``scope`` and
        ``scope_version`` are your account's scope (both null when it has none); ``key.products`` is your key's products
        within it.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/usage"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[Usage],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )


class AsyncAccountApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_pricing(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PriceTable, GetPricingErrorBody]:
        """The price table every call is priced from, byte for byte. Free. ``ETag`` is its SHA-256 (``-gz`` on the gzip
        copy); 304 on a match. Gzip unless refused.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/pricing"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[PriceTable],
            error_mapper=get_pricing_error_mapper,
            request_options=request_options,
        )

    async def get_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Usage, GetUsageErrorBody]:
        """Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. ``scope`` and
        ``scope_version`` are your account's scope (both null when it has none); ``key.products`` is your key's products
        within it.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/usage"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[Usage],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )
