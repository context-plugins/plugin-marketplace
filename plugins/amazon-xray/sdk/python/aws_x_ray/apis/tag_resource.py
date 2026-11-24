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
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..models.tag_resource_request import TagResourceRequest, TagResourceRequestDict
from ..server.server import Server


class TagResource:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagResourceWithRawResponse(client, server, auth)

    def tag_resource(
        self,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException; TooManyTagsException ResourceNotFoundException ThrottledException
                ``error`` is ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.tag_resource(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TagResourceWithRawResponse:
        return self._with_raw_response


class AsyncTagResource:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagResourceWithRawResponse(client, server, auth)

    async def tag_resource(
        self,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException; TooManyTagsException ResourceNotFoundException ThrottledException
                ``error`` is ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTagResourceWithRawResponse:
        return self._with_raw_response


class TagResourceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def tag_resource(
        self,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResourceErrorBody]:
        """Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TagResource"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagResourceRequest | TagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncTagResourceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def tag_resource(
        self,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResourceErrorBody]:
        """Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TagResource"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagResourceRequest | TagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )
