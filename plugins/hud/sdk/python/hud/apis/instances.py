from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_instances_v2_instance_get_error import (
    ListInstancesV2InstanceGetErrorBody,
    list_instances_v2_instance_get_error_mapper,
)
from ..errors.stop_instances_v2_instance_stop_post_error import (
    StopInstancesV2InstanceStopPostErrorBody,
    stop_instances_v2_instance_stop_post_error_mapper,
)
from ..models.active_instances_response import ActiveInstancesResponse
from ..models.stop_instances_request import StopInstancesRequest, StopInstancesRequestDict
from ..models.stop_instances_response import StopInstancesResponse
from ..server.server import Server


class Instances:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = InstancesWithRawResponse(client, server)

    def list_instances_v2_instance_get(
        self,
        registry_id: UUID,
        *,
        include_terminated: bool | None = False,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActiveInstancesResponse:
        """List a registry's instances, optionally including recently terminated ones.

        Args:
            registry_id: Filter instances to this registry
            include_terminated: Include recently terminated instances
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_instances_v2_instance_get(
                registry_id,
                include_terminated=include_terminated,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def stop_instances_v2_instance_stop_post(
        self,
        body: StopInstancesRequest | StopInstancesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StopInstancesResponse:
        """Stop the given instances of a registry, reporting per-instance results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.stop_instances_v2_instance_stop_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> InstancesWithRawResponse:
        return self._with_raw_response


class AsyncInstances:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncInstancesWithRawResponse(client, server)

    async def list_instances_v2_instance_get(
        self,
        registry_id: UUID,
        *,
        include_terminated: bool | None = False,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActiveInstancesResponse:
        """List a registry's instances, optionally including recently terminated ones.

        Args:
            registry_id: Filter instances to this registry
            include_terminated: Include recently terminated instances
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_instances_v2_instance_get(
                registry_id,
                include_terminated=include_terminated,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def stop_instances_v2_instance_stop_post(
        self,
        body: StopInstancesRequest | StopInstancesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StopInstancesResponse:
        """Stop the given instances of a registry, reporting per-instance results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.stop_instances_v2_instance_stop_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncInstancesWithRawResponse:
        return self._with_raw_response


class InstancesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def list_instances_v2_instance_get(
        self,
        registry_id: UUID,
        *,
        include_terminated: bool | None = False,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActiveInstancesResponse, ListInstancesV2InstanceGetErrorBody]:
        """List a registry's instances, optionally including recently terminated ones.

        Args:
            registry_id: Filter instances to this registry
            include_terminated: Include recently terminated instances
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/instance"),
            query_params=[
                param[UUID]("registry_id", registry_id),
                param[bool | None]("include_terminated", include_terminated),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[ActiveInstancesResponse],
            error_mapper=list_instances_v2_instance_get_error_mapper,
            request_options=request_options,
        )

    def stop_instances_v2_instance_stop_post(
        self,
        body: StopInstancesRequest | StopInstancesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StopInstancesResponse, StopInstancesV2InstanceStopPostErrorBody]:
        """Stop the given instances of a registry, reporting per-instance results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/instance/stop"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StopInstancesRequest | StopInstancesRequestDict](body),
            decoder=json_decoder[StopInstancesResponse],
            error_mapper=stop_instances_v2_instance_stop_post_error_mapper,
            request_options=request_options,
        )


class AsyncInstancesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def list_instances_v2_instance_get(
        self,
        registry_id: UUID,
        *,
        include_terminated: bool | None = False,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActiveInstancesResponse, ListInstancesV2InstanceGetErrorBody]:
        """List a registry's instances, optionally including recently terminated ones.

        Args:
            registry_id: Filter instances to this registry
            include_terminated: Include recently terminated instances
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/instance"),
            query_params=[
                param[UUID]("registry_id", registry_id),
                param[bool | None]("include_terminated", include_terminated),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[ActiveInstancesResponse],
            error_mapper=list_instances_v2_instance_get_error_mapper,
            request_options=request_options,
        )

    async def stop_instances_v2_instance_stop_post(
        self,
        body: StopInstancesRequest | StopInstancesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StopInstancesResponse, StopInstancesV2InstanceStopPostErrorBody]:
        """Stop the given instances of a registry, reporting per-instance results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/instance/stop"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StopInstancesRequest | StopInstancesRequestDict](body),
            decoder=async_json_decoder[StopInstancesResponse],
            error_mapper=stop_instances_v2_instance_stop_post_error_mapper,
            request_options=request_options,
        )
