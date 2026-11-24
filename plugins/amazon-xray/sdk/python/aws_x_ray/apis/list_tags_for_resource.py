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
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..models.list_tags_for_resource_request import ListTagsForResourceRequest, ListTagsForResourceRequestDict
from ..models.list_tags_for_resource_response import ListTagsForResourceResponse
from ..server.server import Server


class ListTagsForResource:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ListTagsForResourceWithRawResponse(client, server, auth)

    def list_tags_for_resource(
        self,
        *,
        body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTagsForResourceResponse:
        """Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ListTagsForResourceWithRawResponse:
        return self._with_raw_response


class AsyncListTagsForResource:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncListTagsForResourceWithRawResponse(client, server, auth)

    async def list_tags_for_resource(
        self,
        *,
        body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTagsForResourceResponse:
        """Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.list_tags_for_resource(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncListTagsForResourceWithRawResponse:
        return self._with_raw_response


class ListTagsForResourceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_tags_for_resource(
        self,
        *,
        body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]:
        """Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ListTagsForResource"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTagsForResourceRequest | ListTagsForResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTagsForResourceResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )


class AsyncListTagsForResourceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_tags_for_resource(
        self,
        *,
        body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]:
        """Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ListTagsForResource"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTagsForResourceRequest | ListTagsForResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTagsForResourceResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )
