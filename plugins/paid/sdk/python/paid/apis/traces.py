from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_traces_error import GetTracesErrorBody, get_traces_error_mapper
from ..models.traces_response import TracesResponse
from ..server.server import Server


class Traces:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TracesWithRawResponse(client, server)

    def get_traces(
        self,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        external_customer_id: str | None = None,
        external_product_id: str | None = None,
        external_agent_id: str | None = None,
        metadata: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TracesResponse:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            external_customer_id: Filter traces by external customer ID
            external_product_id: Filter traces by external product ID
            external_agent_id: DEPRECATED: Use externalProductId instead. Filter traces by external agent ID
            metadata: Filter traces by metadata fields. Must be a valid JSON object (e.g.,
                {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_traces(
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                external_customer_id=external_customer_id,
                external_product_id=external_product_id,
                external_agent_id=external_agent_id,
                metadata=metadata,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TracesWithRawResponse:
        return self._with_raw_response


class AsyncTraces:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTracesWithRawResponse(client, server)

    async def get_traces(
        self,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        external_customer_id: str | None = None,
        external_product_id: str | None = None,
        external_agent_id: str | None = None,
        metadata: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TracesResponse:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            external_customer_id: Filter traces by external customer ID
            external_product_id: Filter traces by external product ID
            external_agent_id: DEPRECATED: Use externalProductId instead. Filter traces by external agent ID
            metadata: Filter traces by metadata fields. Must be a valid JSON object (e.g.,
                {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Invalid query parameters Forbidden - Invalid or missing API key ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_traces(
                authorization,
                limit=limit,
                offset=offset,
                start_time=start_time,
                end_time=end_time,
                external_customer_id=external_customer_id,
                external_product_id=external_product_id,
                external_agent_id=external_agent_id,
                metadata=metadata,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTracesWithRawResponse:
        return self._with_raw_response


class TracesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_traces(
        self,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        external_customer_id: str | None = None,
        external_product_id: str | None = None,
        external_agent_id: str | None = None,
        metadata: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TracesResponse, GetTracesErrorBody]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            external_customer_id: Filter traces by external customer ID
            external_product_id: Filter traces by external product ID
            external_agent_id: DEPRECATED: Use externalProductId instead. Filter traces by external agent ID
            metadata: Filter traces by metadata fields. Must be a valid JSON object (e.g.,
                {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/traces"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("externalProductId", external_product_id),
                param[str | None]("externalAgentId", external_agent_id),
                param[str | None]("metadata", metadata),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[TracesResponse],
            error_mapper=get_traces_error_mapper,
            request_options=request_options,
        )


class AsyncTracesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_traces(
        self,
        authorization: str,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        start_time: RFC3339DateTime | None = None,
        end_time: RFC3339DateTime | None = None,
        external_customer_id: str | None = None,
        external_product_id: str | None = None,
        external_agent_id: str | None = None,
        metadata: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TracesResponse, GetTracesErrorBody]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            limit: Maximum number of traces to return (1-1000)
            offset: Number of traces to skip for pagination
            start_time: Filter traces starting from this time (ISO 8601 format)
            end_time: Filter traces up to this time (ISO 8601 format)
            external_customer_id: Filter traces by external customer ID
            external_product_id: Filter traces by external product ID
            external_agent_id: DEPRECATED: Use externalProductId instead. Filter traces by external agent ID
            metadata: Filter traces by metadata fields. Must be a valid JSON object (e.g.,
                {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/traces"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[RFC3339DateTime | None]("startTime", start_time),
                param[RFC3339DateTime | None]("endTime", end_time),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("externalProductId", external_product_id),
                param[str | None]("externalAgentId", external_agent_id),
                param[str | None]("metadata", metadata),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[TracesResponse],
            error_mapper=get_traces_error_mapper,
            request_options=request_options,
        )
