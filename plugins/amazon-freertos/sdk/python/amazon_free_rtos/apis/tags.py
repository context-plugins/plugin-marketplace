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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..models.tags_request import TagsRequest, TagsRequestDict
from ..models.tags_response import TagsResponse
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def list_tags_for_resource(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TagsResponse:
        """Lists the tags (metadata) you have assigned to the resource.

        Args:
            resource_arn: The ARN of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(resource_arn, request_options=request_options))

    def tag_resource(
        self,
        resource_arn: str,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds to or modifies the tags of the given resource.

        Args:
            resource_arn: The ARN of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.tag_resource(resource_arn, body, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def list_tags_for_resource(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TagsResponse:
        """Lists the tags (metadata) you have assigned to the resource.

        Args:
            resource_arn: The ARN of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(resource_arn, request_options=request_options)
        )

    async def tag_resource(
        self,
        resource_arn: str,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds to or modifies the tags of the given resource.

        Args:
            resource_arn: The ARN of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(resource_arn, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_tags_for_resource(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TagsResponse, ListTagsForResourceErrorBody]:
        """Lists the tags (metadata) you have assigned to the resource.

        Args:
            resource_arn: The ARN of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[TagsResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self,
        resource_arn: str,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds to or modifies the tags of the given resource.

        Args:
            resource_arn: The ARN of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_tags_for_resource(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TagsResponse, ListTagsForResourceErrorBody]:
        """Lists the tags (metadata) you have assigned to the resource.

        Args:
            resource_arn: The ARN of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[TagsResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self,
        resource_arn: str,
        body: TagsRequest | TagsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds to or modifies the tags of the given resource.

        Args:
            resource_arn: The ARN of the resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )
