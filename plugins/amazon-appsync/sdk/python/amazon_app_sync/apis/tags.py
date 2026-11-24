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
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..models.list_tags_for_resource_response import ListTagsForResourceResponse
from ..models.v1_tags_request import V1TagsRequest, V1TagsRequestDict
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def list_tags_for_resource(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ListTagsForResourceResponse:
        """Lists the tags for a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(resource_arn, request_options=request_options))

    def tag_resource(
        self,
        resource_arn: str,
        *,
        body: V1TagsRequest | V1TagsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Tags a resource with user-supplied tags.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.tag_resource(resource_arn, body=body, request_options=request_options))

    def untag_resource(
        self, resource_arn: str, tag_keys: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Untags a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            tag_keys: A list of TagKey objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.untag_resource(resource_arn, tag_keys, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def list_tags_for_resource(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ListTagsForResourceResponse:
        """Lists the tags for a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(resource_arn, request_options=request_options)
        )

    async def tag_resource(
        self,
        resource_arn: str,
        *,
        body: V1TagsRequest | V1TagsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Tags a resource with user-supplied tags.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.tag_resource(resource_arn, body=body, request_options=request_options)
        )

    async def untag_resource(
        self, resource_arn: str, tag_keys: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Untags a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            tag_keys: A list of TagKey objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException LimitExceededException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.untag_resource(resource_arn, tag_keys, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_tags_for_resource(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]:
        """Lists the tags for a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTagsForResourceResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self,
        resource_arn: str,
        *,
        body: V1TagsRequest | V1TagsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResourceErrorBody]:
        """Tags a resource with user-supplied tags.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TagsRequest | V1TagsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self, resource_arn: str, tag_keys: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, UntagResourceErrorBody]:
        """Untags a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            tag_keys: A list of TagKey objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            query_params=[param[list[str]]("tagKeys", tag_keys)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_tags_for_resource(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]:
        """Lists the tags for a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTagsForResourceResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self,
        resource_arn: str,
        *,
        body: V1TagsRequest | V1TagsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResourceErrorBody]:
        """Tags a resource with user-supplied tags.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TagsRequest | V1TagsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self, resource_arn: str, tag_keys: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, UntagResourceErrorBody]:
        """Untags a resource.

        Args:
            resource_arn: The GraphqlApi Amazon Resource Name (ARN).
            tag_keys: A list of TagKey objects.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            query_params=[param[list[str]]("tagKeys", tag_keys)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )
