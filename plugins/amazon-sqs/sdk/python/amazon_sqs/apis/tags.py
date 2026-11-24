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
    empty_response,
    param,
    unwrap,
)
from ..errors.list_queue_tags_error import ListQueueTagsErrorBody, list_queue_tags_error_mapper
from ..errors.tag_queue2_error import TagQueue2ErrorBody, tag_queue2_error_mapper
from ..errors.untag_queue2_error import UntagQueue2ErrorBody, untag_queue2_error_mapper
from ..models.enums.x_amz_target1_amazon_simple_queue_service_tags_api import (
    XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_simple_queue_service_tags_api import (
    XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_simple_queue_service_tags_api import (
    XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr,
)
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def list_queue_tags(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see Tagging Your
        Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For
        more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.list_queue_tags(x_amz_target, request_options=request_options))

    def tag_queue2(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.tag_queue2(x_amz_target, request_options=request_options))

    def untag_queue2(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.untag_queue2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def list_queue_tags(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see Tagging Your
        Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For
        more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.list_queue_tags(x_amz_target, request_options=request_options))

    async def tag_queue2(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_queue2(x_amz_target, request_options=request_options))

    async def untag_queue2(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_queue2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_queue_tags(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListQueueTagsErrorBody]:
        """List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see Tagging Your
        Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For
        more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListQueueTags"),
            headers=[
                param[XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_queue_tags_error_mapper,
            request_options=request_options,
        )

    def tag_queue2(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagQueue2ErrorBody]:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagQueue"),
            headers=[
                param[XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_queue2_error_mapper,
            request_options=request_options,
        )

    def untag_queue2(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagQueue2ErrorBody]:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagQueue"),
            headers=[
                param[XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_queue2_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_queue_tags(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListQueueTagsErrorBody]:
        """List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see Tagging Your
        Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For
        more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer
        Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListQueueTags"),
            headers=[
                param[XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_queue_tags_error_mapper,
            request_options=request_options,
        )

    async def tag_queue2(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagQueue2ErrorBody]:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagQueue"),
            headers=[
                param[XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_queue2_error_mapper,
            request_options=request_options,
        )

    async def untag_queue2(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagQueue2ErrorBody]:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagQueue"),
            headers=[
                param[XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_queue2_error_mapper,
            request_options=request_options,
        )
