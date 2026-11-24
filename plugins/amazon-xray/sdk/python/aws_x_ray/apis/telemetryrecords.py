from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.put_telemetry_records_error import PutTelemetryRecordsErrorBody, put_telemetry_records_error_mapper
from ..models.telemetry_records_request import TelemetryRecordsRequest, TelemetryRecordsRequestDict
from ..server.server import Server


class Telemetryrecords:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TelemetryrecordsWithRawResponse(client, server, auth)

    def put_telemetry_records(
        self,
        *,
        body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Used by the Amazon Web Services X-Ray daemon to upload telemetry.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.put_telemetry_records(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TelemetryrecordsWithRawResponse:
        return self._with_raw_response


class AsyncTelemetryrecords:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTelemetryrecordsWithRawResponse(client, server, auth)

    async def put_telemetry_records(
        self,
        *,
        body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Used by the Amazon Web Services X-Ray daemon to upload telemetry.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.put_telemetry_records(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTelemetryrecordsWithRawResponse:
        return self._with_raw_response


class TelemetryrecordsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def put_telemetry_records(
        self,
        *,
        body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PutTelemetryRecordsErrorBody]:
        """Used by the Amazon Web Services X-Ray daemon to upload telemetry.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TelemetryRecords"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TelemetryRecordsRequest | TelemetryRecordsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=put_telemetry_records_error_mapper,
            request_options=request_options,
        )


class AsyncTelemetryrecordsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def put_telemetry_records(
        self,
        *,
        body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PutTelemetryRecordsErrorBody]:
        """Used by the Amazon Web Services X-Ray daemon to upload telemetry.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TelemetryRecords"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TelemetryRecordsRequest | TelemetryRecordsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=put_telemetry_records_error_mapper,
            request_options=request_options,
        )
