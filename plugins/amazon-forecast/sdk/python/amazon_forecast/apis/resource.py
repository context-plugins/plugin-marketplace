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
from ..errors.stop_resource_error import StopResourceErrorBody, stop_resource_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_resource_api import (
    XAmzTarget1AmazonForecastServiceResourceApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_resource_api import (
    XAmzTarget2AmazonForecastServiceResourceApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_resource_api import (
    XAmzTargetAmazonForecastServiceResourceApiOrStr,
)
from ..server.server import Server


class Resource:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResourceWithRawResponse(client, server, auth)

    def stop_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot
        resume a resource once it has been stopped. This operation can be applied to the following resources (and their
        corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor
        Backtest Export Job Explainability Job Explainability Export Job

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.stop_resource(x_amz_target, request_options=request_options))

    def tag_resource(
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
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified tags from a resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ResourceWithRawResponse:
        return self._with_raw_response


class AsyncResource:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResourceWithRawResponse(client, server, auth)

    async def stop_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot
        resume a resource once it has been stopped. This operation can be applied to the following resources (and their
        corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor
        Backtest Export Job Explainability Job Explainability Export Job

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.stop_resource(x_amz_target, request_options=request_options))

    async def tag_resource(
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
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified tags from a resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncResourceWithRawResponse:
        return self._with_raw_response


class ResourceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def stop_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopResourceErrorBody]:
        """Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot
        resume a resource once it has been stopped. This operation can be applied to the following resources (and their
        corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor
        Backtest Export Job Explainability Job Explainability Export Job

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopResource"),
            headers=[
                param[XAmzTargetAmazonForecastServiceResourceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_resource_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
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
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Deletes the specified tags from a resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceResourceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncResourceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def stop_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopResourceErrorBody]:
        """Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot
        resume a resource once it has been stopped. This operation can be applied to the following resources (and their
        corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor
        Backtest Export Job Explainability Job Explainability Export Job

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopResource"),
            headers=[
                param[XAmzTargetAmazonForecastServiceResourceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_resource_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
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
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceResourceApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Deletes the specified tags from a resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceResourceApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )
