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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.track_lead_error import TrackLeadErrorBody, track_lead_error_mapper
from ..errors.track_sale_error import TrackSaleErrorBody, track_sale_error_mapper
from ..models.track_lead_request import TrackLeadRequest, TrackLeadRequestDict
from ..models.track_lead_response import TrackLeadResponse
from ..models.track_sale_request import TrackSaleRequest, TrackSaleRequestDict
from ..models.track_sale_response import TrackSaleResponse
from ..server.server import Server


class Track:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TrackWithRawResponse(client, server, auth)

    def track_lead(
        self,
        *,
        body: TrackLeadRequest | TrackLeadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TrackLeadResponse:
        """Track a lead for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A lead was tracked.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.track_lead(body=body, request_options=request_options))

    def track_sale(
        self,
        *,
        body: TrackSaleRequest | TrackSaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TrackSaleResponse:
        """Track a sale for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A sale was tracked.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.track_sale(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TrackWithRawResponse:
        return self._with_raw_response


class AsyncTrack:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTrackWithRawResponse(client, server, auth)

    async def track_lead(
        self,
        *,
        body: TrackLeadRequest | TrackLeadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TrackLeadResponse:
        """Track a lead for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A lead was tracked.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.track_lead(body=body, request_options=request_options))

    async def track_sale(
        self,
        *,
        body: TrackSaleRequest | TrackSaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TrackSaleResponse:
        """Track a sale for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A sale was tracked.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.track_sale(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTrackWithRawResponse:
        return self._with_raw_response


class TrackWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def track_lead(
        self,
        *,
        body: TrackLeadRequest | TrackLeadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TrackLeadResponse, TrackLeadErrorBody]:
        """Track a lead for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/track/lead"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrackLeadRequest | TrackLeadRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[TrackLeadResponse],
            error_mapper=track_lead_error_mapper,
            request_options=request_options,
        )

    def track_sale(
        self,
        *,
        body: TrackSaleRequest | TrackSaleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TrackSaleResponse, TrackSaleErrorBody]:
        """Track a sale for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/track/sale"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrackSaleRequest | TrackSaleRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[TrackSaleResponse],
            error_mapper=track_sale_error_mapper,
            request_options=request_options,
        )


class AsyncTrackWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def track_lead(
        self,
        *,
        body: TrackLeadRequest | TrackLeadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TrackLeadResponse, TrackLeadErrorBody]:
        """Track a lead for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/track/lead"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrackLeadRequest | TrackLeadRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[TrackLeadResponse],
            error_mapper=track_lead_error_mapper,
            request_options=request_options,
        )

    async def track_sale(
        self,
        *,
        body: TrackSaleRequest | TrackSaleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TrackSaleResponse, TrackSaleErrorBody]:
        """Track a sale for a short link.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/track/sale"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrackSaleRequest | TrackSaleRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[TrackSaleResponse],
            error_mapper=track_sale_error_mapper,
            request_options=request_options,
        )
