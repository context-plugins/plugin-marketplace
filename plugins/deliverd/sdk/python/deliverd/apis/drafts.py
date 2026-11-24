from __future__ import annotations

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
from ..models.api_v1_drafts_request import ApiV1DraftsRequest, ApiV1DraftsRequestDict
from ..models.api_v1_drafts_response import ApiV1DraftsResponse
from ..server.server import Server


class Drafts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DraftsWithRawResponse(client, server)

    def post_api_v1_drafts(
        self,
        *,
        body: ApiV1DraftsRequest | ApiV1DraftsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DraftsResponse:
        """For an AI with no Deliverd connection. Send an HTML document (JSON ``{ html, title?, sourceTool? }`` or a raw
        ``text/html`` body) and give the person the ``claimUrl`` that comes back. They sign in, or create a free
        account, and publish it with one click; it is private to them until they share it. Nothing is served from a
        draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and
        expire after 24 hours. Answers ``413 too_large``, ``422 scan_blocked`` or ``429 rate_limited`` when refused.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Draft stored; hand the claim link to the person

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_drafts(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> DraftsWithRawResponse:
        return self._with_raw_response


class AsyncDrafts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDraftsWithRawResponse(client, server)

    async def post_api_v1_drafts(
        self,
        *,
        body: ApiV1DraftsRequest | ApiV1DraftsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DraftsResponse:
        """For an AI with no Deliverd connection. Send an HTML document (JSON ``{ html, title?, sourceTool? }`` or a raw
        ``text/html`` body) and give the person the ``claimUrl`` that comes back. They sign in, or create a free
        account, and publish it with one click; it is private to them until they share it. Nothing is served from a
        draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and
        expire after 24 hours. Answers ``413 too_large``, ``422 scan_blocked`` or ``429 rate_limited`` when refused.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Draft stored; hand the claim link to the person

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_drafts(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDraftsWithRawResponse:
        return self._with_raw_response


class DraftsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_api_v1_drafts(
        self,
        *,
        body: ApiV1DraftsRequest | ApiV1DraftsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DraftsResponse, RawError]:
        """For an AI with no Deliverd connection. Send an HTML document (JSON ``{ html, title?, sourceTool? }`` or a raw
        ``text/html`` body) and give the person the ``claimUrl`` that comes back. They sign in, or create a free
        account, and publish it with one click; it is private to them until they share it. Nothing is served from a
        draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and
        expire after 24 hours. Answers ``413 too_large``, ``422 scan_blocked`` or ``429 rate_limited`` when refused.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/drafts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DraftsRequest | ApiV1DraftsRequestDict | None](body),
            decoder=json_decoder[ApiV1DraftsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDraftsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_api_v1_drafts(
        self,
        *,
        body: ApiV1DraftsRequest | ApiV1DraftsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DraftsResponse, RawError]:
        """For an AI with no Deliverd connection. Send an HTML document (JSON ``{ html, title?, sourceTool? }`` or a raw
        ``text/html`` body) and give the person the ``claimUrl`` that comes back. They sign in, or create a free
        account, and publish it with one click; it is private to them until they share it. Nothing is served from a
        draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and
        expire after 24 hours. Answers ``413 too_large``, ``422 scan_blocked`` or ``429 rate_limited`` when refused.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/drafts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DraftsRequest | ApiV1DraftsRequestDict | None](body),
            decoder=async_json_decoder[ApiV1DraftsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
