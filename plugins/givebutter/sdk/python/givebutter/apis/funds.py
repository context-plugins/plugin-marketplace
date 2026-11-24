from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.funds_destroy_error import FundsDestroyErrorBody, funds_destroy_error_mapper
from ..errors.funds_show_error import FundsShowErrorBody, funds_show_error_mapper
from ..errors.funds_store_error import FundsStoreErrorBody, funds_store_error_mapper
from ..errors.funds_update_error import FundsUpdateErrorBody, funds_update_error_mapper
from ..models.fund_resource import FundResource
from ..models.v1_funds_request import V1FundsRequest, V1FundsRequestDict
from ..models.v1_funds_response import V1FundsResponse
from ..server.server import Server


class Funds:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FundsWithRawResponse(client, server, auth)

    def funds_destroy(self, fund: str | None, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.funds_destroy(fund, request_options=request_options))

    def funds_index(self, *, request_options: RequestOptionsOrDict | None = None) -> V1FundsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``FundResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.funds_index(request_options=request_options))

    def funds_show(self, fund: str | None, *, request_options: RequestOptionsOrDict | None = None) -> FundResource:
        """Send a ``GET`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``FundResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.funds_show(fund, request_options=request_options))

    def funds_store(
        self, body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FundResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``FundResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.funds_store(body, request_options=request_options))

    def funds_update(
        self,
        fund: str | None,
        body: V1FundsRequest | V1FundsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundResource:
        """Send a ``PUT`` request.

        Args:
            fund: The fund fid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``FundResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.funds_update(fund, body, request_options=request_options))

    @property
    def with_raw_response(self) -> FundsWithRawResponse:
        return self._with_raw_response


class AsyncFunds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFundsWithRawResponse(client, server, auth)

    async def funds_destroy(
        self, fund: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.funds_destroy(fund, request_options=request_options))

    async def funds_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1FundsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``FundResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.funds_index(request_options=request_options))

    async def funds_show(
        self, fund: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FundResource:
        """Send a ``GET`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``FundResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.funds_show(fund, request_options=request_options))

    async def funds_store(
        self, body: V1FundsRequest | V1FundsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FundResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``FundResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.funds_store(body, request_options=request_options))

    async def funds_update(
        self,
        fund: str | None,
        body: V1FundsRequest | V1FundsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundResource:
        """Send a ``PUT`` request.

        Args:
            fund: The fund fid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``FundResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.funds_update(fund, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFundsWithRawResponse:
        return self._with_raw_response


class FundsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def funds_destroy(
        self, fund: str | None, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, FundsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/funds/{fund}"),
            path_params=[param[str | None]("fund", fund)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=funds_destroy_error_mapper,
            request_options=request_options,
        )

    def funds_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1FundsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/funds"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1FundsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def funds_show(
        self, fund: str | None, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FundResource, FundsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/funds/{fund}"),
            path_params=[param[str | None]("fund", fund)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[FundResource],
            error_mapper=funds_show_error_mapper,
            request_options=request_options,
        )

    def funds_store(
        self, body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FundResource, FundsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/funds"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1FundsRequest | V1FundsRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[FundResource],
            error_mapper=funds_store_error_mapper,
            request_options=request_options,
        )

    def funds_update(
        self,
        fund: str | None,
        body: V1FundsRequest | V1FundsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundResource, FundsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            fund: The fund fid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/funds/{fund}"),
            path_params=[param[str | None]("fund", fund)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1FundsRequest | V1FundsRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[FundResource],
            error_mapper=funds_update_error_mapper,
            request_options=request_options,
        )


class AsyncFundsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def funds_destroy(
        self, fund: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, FundsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/funds/{fund}"),
            path_params=[param[str | None]("fund", fund)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=funds_destroy_error_mapper,
            request_options=request_options,
        )

    async def funds_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1FundsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/funds"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1FundsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def funds_show(
        self, fund: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FundResource, FundsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            fund: The fund fid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/funds/{fund}"),
            path_params=[param[str | None]("fund", fund)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[FundResource],
            error_mapper=funds_show_error_mapper,
            request_options=request_options,
        )

    async def funds_store(
        self, body: V1FundsRequest | V1FundsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FundResource, FundsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/funds"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1FundsRequest | V1FundsRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[FundResource],
            error_mapper=funds_store_error_mapper,
            request_options=request_options,
        )

    async def funds_update(
        self,
        fund: str | None,
        body: V1FundsRequest | V1FundsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundResource, FundsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            fund: The fund fid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/funds/{fund}"),
            path_params=[param[str | None]("fund", fund)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1FundsRequest | V1FundsRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[FundResource],
            error_mapper=funds_update_error_mapper,
            request_options=request_options,
        )
