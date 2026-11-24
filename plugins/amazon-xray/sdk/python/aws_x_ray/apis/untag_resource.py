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
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..models.untag_resource_request import UntagResourceRequest, UntagResourceRequestDict
from ..server.server import Server


class UntagResource:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UntagResourceWithRawResponse(client, server, auth)

    def untag_resource(
        self,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags
        (those with an aws: prefix).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.untag_resource(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> UntagResourceWithRawResponse:
        return self._with_raw_response


class AsyncUntagResource:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUntagResourceWithRawResponse(client, server, auth)

    async def untag_resource(
        self,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags
        (those with an aws: prefix).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUntagResourceWithRawResponse:
        return self._with_raw_response


class UntagResourceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def untag_resource(
        self,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UntagResourceErrorBody]:
        """Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags
        (those with an aws: prefix).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UntagResource"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UntagResourceRequest | UntagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncUntagResourceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def untag_resource(
        self,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UntagResourceErrorBody]:
        """Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags
        (those with an aws: prefix).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UntagResource"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UntagResourceRequest | UntagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )
