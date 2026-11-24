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
from ..errors.list_tags_for_resource1_error import ListTagsForResource1ErrorBody, list_tags_for_resource1_error_mapper
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.tag_resource1_error import TagResource1ErrorBody, tag_resource1_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource1_error import UntagResource1ErrorBody, untag_resource1_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..models.list_tags_for_resource_response import ListTagsForResourceResponse
from ..models.models_lex_list_tags_for_resource_response import ModelsLexListTagsForResourceResponse
from ..models.models_lex_tag_resource_request import ModelsLexTagResourceRequest, ModelsLexTagResourceRequestDict
from ..models.models_lex_untag_resource_request import ModelsLexUntagResourceRequest, ModelsLexUntagResourceRequestDict
from ..models.tag_resource_request import TagResourceRequest, TagResourceRequestDict
from ..models.untag_resource_request import UntagResourceRequest, UntagResourceRequestDict
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def list_tags_for_resource(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ListTagsForResourceResponse:
        """Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags
        associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(resource_arn, request_options=request_options))

    def list_tags_for_resource1(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModelsLexListTagsForResourceResponse:
        """Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have
        tags associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource1(resource_arn, request_options=request_options))

    def tag_resource(
        self,
        resource_arn: str,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.tag_resource(resource_arn, body=body, request_options=request_options))

    def tag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.tag_resource1(resource_arn, body=body, request_options=request_options))

    def untag_resource(
        self,
        resource_arn: str,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes tags from a bot, bot alias, or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.untag_resource(resource_arn, body=body, request_options=request_options))

    def untag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes tags from a bot, bot alias or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.untag_resource1(resource_arn, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def list_tags_for_resource(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ListTagsForResourceResponse:
        """Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags
        associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(resource_arn, request_options=request_options)
        )

    async def list_tags_for_resource1(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ModelsLexListTagsForResourceResponse:
        """Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have
        tags associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource1(resource_arn, request_options=request_options)
        )

    async def tag_resource(
        self,
        resource_arn: str,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.tag_resource(resource_arn, body=body, request_options=request_options)
        )

    async def tag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.tag_resource1(resource_arn, body=body, request_options=request_options)
        )

    async def untag_resource(
        self,
        resource_arn: str,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes tags from a bot, bot alias, or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.untag_resource(resource_arn, body=body, request_options=request_options)
        )

    async def untag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes tags from a bot, bot alias or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.untag_resource1(resource_arn, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_tags_for_resource(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]:
        """Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags
        associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceARN}"),
            path_params=[param[str]("resourceARN", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTagsForResourceResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource1(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsLexListTagsForResourceResponse, ListTagsForResource1ErrorBody]:
        """Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have
        tags associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ModelsLexListTagsForResourceResponse],
            error_mapper=list_tags_for_resource1_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self,
        resource_arn: str,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResourceErrorBody]:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceARN}"),
            path_params=[param[str]("resourceARN", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagResourceRequest | TagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def tag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResource1ErrorBody]:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=tag_resource1_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self,
        resource_arn: str,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UntagResourceErrorBody]:
        """Removes tags from a bot, bot alias, or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceARN}"),
            path_params=[param[str]("resourceARN", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UntagResourceRequest | UntagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UntagResource1ErrorBody]:
        """Removes tags from a bot, bot alias or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=untag_resource1_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_tags_for_resource(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]:
        """Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags
        associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceARN}"),
            path_params=[param[str]("resourceARN", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTagsForResourceResponse],
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource1(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ModelsLexListTagsForResourceResponse, ListTagsForResource1ErrorBody]:
        """Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have
        tags associated with them.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ModelsLexListTagsForResourceResponse],
            error_mapper=list_tags_for_resource1_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self,
        resource_arn: str,
        *,
        body: TagResourceRequest | TagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResourceErrorBody]:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceARN}"),
            path_params=[param[str]("resourceARN", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagResourceRequest | TagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def tag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TagResource1ErrorBody]:
        """Adds the specified tags to the specified resource. If a tag key already exists, the existing value is
        replaced with the new value.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=tag_resource1_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self,
        resource_arn: str,
        *,
        body: UntagResourceRequest | UntagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UntagResourceErrorBody]:
        """Removes tags from a bot, bot alias, or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceARN}"),
            path_params=[param[str]("resourceARN", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UntagResourceRequest | UntagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource1(
        self,
        resource_arn: str,
        *,
        body: ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UntagResource1ErrorBody]:
        """Removes tags from a bot, bot alias or bot channel.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_tags_api("/tags/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=untag_resource1_error_mapper,
            request_options=request_options,
        )
