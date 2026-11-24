from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.check_usage_error import CheckUsageErrorBody, check_usage_error_mapper
from ..errors.usage_record_bulk_v2_error import UsageRecordBulkV2ErrorBody, usage_record_bulk_v2_error_mapper
from ..models.usage_check_usage_request import UsageCheckUsageRequest, UsageCheckUsageRequestDict
from ..models.usage_check_usage_response200 import UsageCheckUsageResponse200
from ..models.usage_signals_bulk_request import UsageSignalsBulkRequest, UsageSignalsBulkRequestDict
from ..models.usage_v2_signals_bulk_request import UsageV2SignalsBulkRequest, UsageV2SignalsBulkRequestDict
from ..server.server import Server


class Usage:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = UsageWithRawResponse(client, server)

    def check_usage(
        self,
        authorization: str,
        *,
        body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UsageCheckUsageResponse200:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage check response

        Raises:
            ApiError: Bad request - Invalid API key, missing authorization, or missing required fields
                (externalCustomerId, externalProductId) Not found - Order, plan, or product not found Internal server
                error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.check_usage(authorization, body=body, request_options=request_options))

    def record_bulk(
        self,
        authorization: str,
        *,
        body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.record_bulk(authorization, body=body, request_options=request_options))

    def usage_record_bulk_v_2(
        self,
        authorization: str,
        *,
        body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Each signal must provide exactly one customer ID (customer_id OR
                external_customer_id) and exactly one product ID (product_id OR external_product_id). Providing both or
                neither will result in an error. Conflict - One or more signals have idempotency keys that have already
                been used. The entire batch is rejected. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.usage_record_bulk_v_2(authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsageWithRawResponse:
        return self._with_raw_response


class AsyncUsage:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncUsageWithRawResponse(client, server)

    async def check_usage(
        self,
        authorization: str,
        *,
        body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UsageCheckUsageResponse200:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage check response

        Raises:
            ApiError: Bad request - Invalid API key, missing authorization, or missing required fields
                (externalCustomerId, externalProductId) Not found - Order, plan, or product not found Internal server
                error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.check_usage(authorization, body=body, request_options=request_options)
        )

    async def record_bulk(
        self,
        authorization: str,
        *,
        body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.record_bulk(authorization, body=body, request_options=request_options)
        )

    async def usage_record_bulk_v_2(
        self,
        authorization: str,
        *,
        body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Bad request - Each signal must provide exactly one customer ID (customer_id OR
                external_customer_id) and exactly one product ID (product_id OR external_product_id). Providing both or
                neither will result in an error. Conflict - One or more signals have idempotency keys that have already
                been used. The entire batch is rejected. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.usage_record_bulk_v_2(
                authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUsageWithRawResponse:
        return self._with_raw_response


class UsageWithRawResponse(BaseRawResponse[RawClient, Server]):
    def check_usage(
        self,
        authorization: str,
        *,
        body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UsageCheckUsageResponse200, CheckUsageErrorBody]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/usage/check-usage"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsageCheckUsageRequest | UsageCheckUsageRequestDict | None](body),
            decoder=json_decoder[UsageCheckUsageResponse200],
            error_mapper=check_usage_error_mapper,
            request_options=request_options,
        )

    def record_bulk(
        self,
        authorization: str,
        *,
        body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/usage/signals/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None](body),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def usage_record_bulk_v_2(
        self,
        authorization: str,
        *,
        body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UsageRecordBulkV2ErrorBody]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/usage/v2/signals/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None](body),
            decoder=json_decoder[Any],
            error_mapper=usage_record_bulk_v2_error_mapper,
            request_options=request_options,
        )


class AsyncUsageWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def check_usage(
        self,
        authorization: str,
        *,
        body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UsageCheckUsageResponse200, CheckUsageErrorBody]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/usage/check-usage"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsageCheckUsageRequest | UsageCheckUsageRequestDict | None](body),
            decoder=async_json_decoder[UsageCheckUsageResponse200],
            error_mapper=check_usage_error_mapper,
            request_options=request_options,
        )

    async def record_bulk(
        self,
        authorization: str,
        *,
        body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/usage/signals/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None](body),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def usage_record_bulk_v_2(
        self,
        authorization: str,
        *,
        body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UsageRecordBulkV2ErrorBody]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/usage/v2/signals/bulk"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None](body),
            decoder=async_json_decoder[Any],
            error_mapper=usage_record_bulk_v2_error_mapper,
            request_options=request_options,
        )
