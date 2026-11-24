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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.clear_memory_v1_beta_memory_clear_post_error import (
    ClearMemoryV1BetaMemoryClearPostErrorBody,
    clear_memory_v1_beta_memory_clear_post_error_mapper,
)
from ..errors.evict_memory_source_v1_beta_memory_evict_post_error import (
    EvictMemorySourceV1BetaMemoryEvictPostErrorBody,
    evict_memory_source_v1_beta_memory_evict_post_error_mapper,
)
from ..errors.retrieve_memory_v1_beta_memory_retrieve_post_error import (
    RetrieveMemoryV1BetaMemoryRetrievePostErrorBody,
    retrieve_memory_v1_beta_memory_retrieve_post_error_mapper,
)
from ..models.memory_clear_request import MemoryClearRequest, MemoryClearRequestDict
from ..models.memory_evict_request import MemoryEvictRequest, MemoryEvictRequestDict
from ..models.memory_retrieve_request import MemoryRetrieveRequest, MemoryRetrieveRequestDict
from ..models.memory_retrieve_response import MemoryRetrieveResponse
from ..server.server import Server


class Memory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MemoryWithRawResponse(client, server, auth)

    def clear_memory_v1beta_memory_clear_post(
        self, body: MemoryClearRequest | MemoryClearRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Memory cleared.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.clear_memory_v1beta_memory_clear_post(body, request_options=request_options)
        )

    def evict_memory_source_v1beta_memory_evict_post(
        self, body: MemoryEvictRequest | MemoryEvictRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Source removed from memory.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.evict_memory_source_v1beta_memory_evict_post(body, request_options=request_options)
        )

    def retrieve_memory_v1beta_memory_retrieve_post(
        self,
        body: MemoryRetrieveRequest | MemoryRetrieveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MemoryRetrieveResponse:
        """Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance;
        leave it empty to return the most recent runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_memory_v1beta_memory_retrieve_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> MemoryWithRawResponse:
        return self._with_raw_response


class AsyncMemory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMemoryWithRawResponse(client, server, auth)

    async def clear_memory_v1beta_memory_clear_post(
        self,
        body: MemoryClearRequest | MemoryClearRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Memory cleared.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.clear_memory_v1beta_memory_clear_post(body, request_options=request_options)
        )

    async def evict_memory_source_v1beta_memory_evict_post(
        self,
        body: MemoryEvictRequest | MemoryEvictRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Source removed from memory.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.evict_memory_source_v1beta_memory_evict_post(
                body, request_options=request_options
            ),
        )

    async def retrieve_memory_v1beta_memory_retrieve_post(
        self,
        body: MemoryRetrieveRequest | MemoryRetrieveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MemoryRetrieveResponse:
        """Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance;
        leave it empty to return the most recent runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_memory_v1beta_memory_retrieve_post(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMemoryWithRawResponse:
        return self._with_raw_response


class MemoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def clear_memory_v1beta_memory_clear_post(
        self, body: MemoryClearRequest | MemoryClearRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ClearMemoryV1BetaMemoryClearPostErrorBody]:
        """Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/memory/clear"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemoryClearRequest | MemoryClearRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=clear_memory_v1_beta_memory_clear_post_error_mapper,
            request_options=request_options,
        )

    def evict_memory_source_v1beta_memory_evict_post(
        self, body: MemoryEvictRequest | MemoryEvictRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, EvictMemorySourceV1BetaMemoryEvictPostErrorBody]:
        """Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/memory/evict"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemoryEvictRequest | MemoryEvictRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=evict_memory_source_v1_beta_memory_evict_post_error_mapper,
            request_options=request_options,
        )

    def retrieve_memory_v1beta_memory_retrieve_post(
        self,
        body: MemoryRetrieveRequest | MemoryRetrieveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MemoryRetrieveResponse, RetrieveMemoryV1BetaMemoryRetrievePostErrorBody]:
        """Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance;
        leave it empty to return the most recent runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/memory/retrieve"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemoryRetrieveRequest | MemoryRetrieveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MemoryRetrieveResponse],
            error_mapper=retrieve_memory_v1_beta_memory_retrieve_post_error_mapper,
            request_options=request_options,
        )


class AsyncMemoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def clear_memory_v1beta_memory_clear_post(
        self,
        body: MemoryClearRequest | MemoryClearRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ClearMemoryV1BetaMemoryClearPostErrorBody]:
        """Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/memory/clear"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemoryClearRequest | MemoryClearRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=clear_memory_v1_beta_memory_clear_post_error_mapper,
            request_options=request_options,
        )

    async def evict_memory_source_v1beta_memory_evict_post(
        self,
        body: MemoryEvictRequest | MemoryEvictRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, EvictMemorySourceV1BetaMemoryEvictPostErrorBody]:
        """Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/memory/evict"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemoryEvictRequest | MemoryEvictRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=evict_memory_source_v1_beta_memory_evict_post_error_mapper,
            request_options=request_options,
        )

    async def retrieve_memory_v1beta_memory_retrieve_post(
        self,
        body: MemoryRetrieveRequest | MemoryRetrieveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MemoryRetrieveResponse, RetrieveMemoryV1BetaMemoryRetrievePostErrorBody]:
        """Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance;
        leave it empty to return the most recent runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/memory/retrieve"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemoryRetrieveRequest | MemoryRetrieveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MemoryRetrieveResponse],
            error_mapper=retrieve_memory_v1_beta_memory_retrieve_post_error_mapper,
            request_options=request_options,
        )
