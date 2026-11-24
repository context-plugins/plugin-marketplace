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
from ..models.api_v1_evidence_verify_response import ApiV1EvidenceVerifyResponse
from ..server.server import Server


class Evidence:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EvidenceWithRawResponse(client, server)

    def post_api_v1_evidence_verify(
        self, *, body: dict[str, Any] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1EvidenceVerifyResponse:
        """Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes
        (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key,
        published at ``/.well-known/deliverd-evidence-key``. Nothing is stored. ``deliverd verify `` makes the same
        check offline, which does not rely on asking us.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The verdict

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_evidence_verify(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> EvidenceWithRawResponse:
        return self._with_raw_response


class AsyncEvidence:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEvidenceWithRawResponse(client, server)

    async def post_api_v1_evidence_verify(
        self, *, body: dict[str, Any] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1EvidenceVerifyResponse:
        """Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes
        (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key,
        published at ``/.well-known/deliverd-evidence-key``. Nothing is stored. ``deliverd verify `` makes the same
        check offline, which does not rely on asking us.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The verdict

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_evidence_verify(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncEvidenceWithRawResponse:
        return self._with_raw_response


class EvidenceWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_api_v1_evidence_verify(
        self, *, body: dict[str, Any] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EvidenceVerifyResponse, RawError]:
        """Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes
        (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key,
        published at ``/.well-known/deliverd-evidence-key``. Nothing is stored. ``deliverd verify `` makes the same
        check offline, which does not rely on asking us.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/evidence/verify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[dict[str, Any] | None](body),
            decoder=json_decoder[ApiV1EvidenceVerifyResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncEvidenceWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_api_v1_evidence_verify(
        self, *, body: dict[str, Any] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EvidenceVerifyResponse, RawError]:
        """Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes
        (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key,
        published at ``/.well-known/deliverd-evidence-key``. Nothing is stored. ``deliverd verify `` makes the same
        check offline, which does not rely on asking us.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/evidence/verify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[dict[str, Any] | None](body),
            decoder=async_json_decoder[ApiV1EvidenceVerifyResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
