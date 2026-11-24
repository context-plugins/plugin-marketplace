from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.create_error import CreateErrorBody, create_error_mapper
from ..models.create_request import CreateRequest, CreateRequestDict
from ..server.server import Server


class Rest:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RestWithRawResponse(client, server)

    def create(
        self, body: CreateRequest | CreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Instacart link to the shopping list of ingredients.

        Raises:
            ApiError: Could not create an Instacart link to the shopping list of ingredients. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create(body, request_options=request_options))

    @property
    def with_raw_response(self) -> RestWithRawResponse:
        return self._with_raw_response


class AsyncRest:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRestWithRawResponse(client, server)

    async def create(
        self, body: CreateRequest | CreateRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Instacart link to the shopping list of ingredients.

        Raises:
            ApiError: Could not create an Instacart link to the shopping list of ingredients. ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRestWithRawResponse:
        return self._with_raw_response


class RestWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create(
        self, body: CreateRequest | CreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_instacart_rest_api("/rest/llm_integration/openapi/v2_1/recipes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateRequest | CreateRequestDict](body),
            decoder=empty_response,
            error_mapper=create_error_mapper,
            request_options=request_options,
        )


class AsyncRestWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create(
        self, body: CreateRequest | CreateRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_instacart_rest_api("/rest/llm_integration/openapi/v2_1/recipes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateRequest | CreateRequestDict](body),
            decoder=async_empty_response,
            error_mapper=create_error_mapper,
            request_options=request_options,
        )
