from __future__ import annotations

from typing import Any
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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.batch_lookup_error import BatchLookupErrorBody, batch_lookup_error_mapper
from ..models.batch_request import BatchRequest, BatchRequestDict
from ..models.batch_response import BatchResponse
from ..server.server import Server


class Batch:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BatchWithRawResponse(client, server, auth)

    def batch_lookup(
        self, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchResponse:
        """The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from
        the published vocabulary (``GET /api/v1/batch/fields``); the values come back in the same order, each with a
        status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an
        error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other
        endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of
        rows the balance does cover.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One result per request row, in order.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.batch_lookup(body, request_options=request_options))

    def list_batch_fields(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file
        so the client and the server cannot disagree about a field.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_batch_fields(request_options=request_options))

    @property
    def with_raw_response(self) -> BatchWithRawResponse:
        return self._with_raw_response


class AsyncBatch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBatchWithRawResponse(client, server, auth)

    async def batch_lookup(
        self, body: BatchRequest | BatchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchResponse:
        """The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from
        the published vocabulary (``GET /api/v1/batch/fields``); the values come back in the same order, each with a
        status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an
        error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other
        endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of
        rows the balance does cover.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One result per request row, in order.

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.batch_lookup(body, request_options=request_options))

    async def list_batch_fields(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file
        so the client and the server cannot disagree about a field.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_batch_fields(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBatchWithRawResponse:
        return self._with_raw_response


class BatchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_lookup(
        self, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchResponse, BatchLookupErrorBody]:
        """The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from
        the published vocabulary (``GET /api/v1/batch/fields``); the values come back in the same order, each with a
        status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an
        error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other
        endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of
        rows the balance does cover.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[BatchResponse],
            error_mapper=batch_lookup_error_mapper,
            request_options=request_options,
        )

    def list_batch_fields(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file
        so the client and the server cannot disagree about a field.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/batch/fields"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBatchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_lookup(
        self, body: BatchRequest | BatchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchResponse, BatchLookupErrorBody]:
        """The spreadsheet endpoint. Each row names an organization (an EIN, or a name to resolve) and ONE field from
        the published vocabulary (``GET /api/v1/batch/fields``); the values come back in the same order, each with a
        status that says whether it is an answer, an unresolved name, a field the key's plan does not reach, or an
        error. Costs one call per 50 rows rather than one per row, charged against the same allowance as every other
        endpoint. Rows the request cannot pay for are refused as a whole before any work is done, with the number of
        rows the balance does cover.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[BatchResponse],
            error_mapper=batch_lookup_error_mapper,
            request_options=request_options,
        )

    async def list_batch_fields(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Keyless. The same list the Sheets and Excel functions offer as autocomplete, read from one configuration file
        so the client and the server cannot disagree about a field.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/batch/fields"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
