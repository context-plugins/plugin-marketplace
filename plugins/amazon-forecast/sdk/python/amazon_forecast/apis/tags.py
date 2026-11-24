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
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.tag_resource2_error import TagResource2ErrorBody, tag_resource2_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_resource_api import (
    XAmzTarget1AmazonForecastServiceResourceApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_tags_api import XAmzTargetAmazonForecastServiceTagsApiOrStr
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the tags for an Amazon Forecast resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def tag_resource2(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource
        are not specified in the request parameters, they are not changed. When a resource is deleted, the tags
        associated with that resource are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the tags for an Amazon Forecast resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def tag_resource2(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource
        are not specified in the request parameters, they are not changed. When a resource is deleted, the tags
        associated with that resource are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceTagsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists the tags for an Amazon Forecast resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[
                param[XAmzTargetAmazonForecastServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def tag_resource2(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResource2ErrorBody]:
        """Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource
        are not specified in the request parameters, they are not changed. When a resource is deleted, the tags
        associated with that resource are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceResourceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource2_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceTagsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists the tags for an Amazon Forecast resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListTagsForResource"),
            headers=[
                param[XAmzTargetAmazonForecastServiceTagsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def tag_resource2(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResource2ErrorBody]:
        """Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource
        are not specified in the request parameters, they are not changed. When a resource is deleted, the tags
        associated with that resource are also deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceResourceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource2_error_mapper,
            request_options=request_options,
        )
