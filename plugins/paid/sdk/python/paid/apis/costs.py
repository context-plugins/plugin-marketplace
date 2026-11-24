from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_costs_error import CreateCostsErrorBody, create_costs_error_mapper
from ..models.cost_ingest_request import CostIngestRequest, CostIngestRequestDict
from ..models.cost_ingest_response import CostIngestResponse
from ..server.server import Server


class Costs:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CostsWithRawResponse(client, server)

    def create_costs(
        self,
        authorization: str,
        *,
        body: CostIngestRequest | CostIngestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CostIngestResponse:
        """Ingests a batch of cost records. Each record is either a pre-computed ``cost`` (caller supplies amount +
        currency) or a ``usage`` record (caller supplies vendor/model/token counts and Paid prices it server-side). The
        batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing
        is persisted.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_costs(authorization, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CostsWithRawResponse:
        return self._with_raw_response


class AsyncCosts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCostsWithRawResponse(client, server)

    async def create_costs(
        self,
        authorization: str,
        *,
        body: CostIngestRequest | CostIngestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CostIngestResponse:
        """Ingests a batch of cost records. Each record is either a pre-computed ``cost`` (caller supplies amount +
        currency) or a ``usage`` record (caller supplies vendor/model/token counts and Paid prices it server-side). The
        batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing
        is persisted.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_costs(authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCostsWithRawResponse:
        return self._with_raw_response


class CostsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_costs(
        self,
        authorization: str,
        *,
        body: CostIngestRequest | CostIngestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CostIngestResponse, CreateCostsErrorBody]:
        """Ingests a batch of cost records. Each record is either a pre-computed ``cost`` (caller supplies amount +
        currency) or a ``usage`` record (caller supplies vendor/model/token counts and Paid prices it server-side). The
        batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing
        is persisted.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/costs/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CostIngestRequest | CostIngestRequestDict | None](body),
            decoder=json_decoder[CostIngestResponse],
            error_mapper=create_costs_error_mapper,
            request_options=request_options,
        )


class AsyncCostsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_costs(
        self,
        authorization: str,
        *,
        body: CostIngestRequest | CostIngestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CostIngestResponse, CreateCostsErrorBody]:
        """Ingests a batch of cost records. Each record is either a pre-computed ``cost`` (caller supplies amount +
        currency) or a ``usage`` record (caller supplies vendor/model/token counts and Paid prices it server-side). The
        batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing
        is persisted.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/costs/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CostIngestRequest | CostIngestRequestDict | None](body),
            decoder=async_json_decoder[CostIngestResponse],
            error_mapper=create_costs_error_mapper,
            request_options=request_options,
        )
