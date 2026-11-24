from __future__ import annotations

from uuid import UUID

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_environment_usage_v2_environments_usage_get_error import (
    GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody,
    get_environment_usage_v2_environments_usage_get_error_mapper,
)
from ..errors.get_inference_usage_aggregate_v2_usage_inference_get_error import (
    GetInferenceUsageAggregateV2UsageInferenceGetErrorBody,
    get_inference_usage_aggregate_v2_usage_inference_get_error_mapper,
)
from ..models.enums.bucket_width import BucketWidth, BucketWidthOrStr
from ..models.enums.group_by import GroupByOrStr
from ..models.environment_usage_response import EnvironmentUsageResponse
from ..models.inference_usage_aggregate_response import InferenceUsageAggregateResponse
from ..server.server import Server


class Usage:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = UsageWithRawResponse(client, server)

    def get_environment_usage_v2_environments_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        status: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentUsageResponse:
        """Get the team's environment session usage over a window, with summary and paged sessions.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            status: Value sent with the request.
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
            self._with_raw_response.get_environment_usage_v2_environments_usage_get(
                days=days,
                user_id=user_id,
                api_key_id=api_key_id,
                status=status,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def get_inference_usage_aggregate_v2_usage_inference_get(
        self,
        *,
        start: RFC3339DateTime | None = None,
        end: RFC3339DateTime | None = None,
        bucket_width: BucketWidthOrStr | None = BucketWidth._1D,
        group_by: list[GroupByOrStr] | None = None,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InferenceUsageAggregateResponse:
        """Aggregate the team's inference usage into time buckets, optionally grouped.

        Args:
            start: Window start; defaults to end-7d
            end: Window end; defaults to now
            bucket_width: Value sent with the request.
            group_by: Grouping dimensions; repeat the parameter to group by several at once
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
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
            self._with_raw_response.get_inference_usage_aggregate_v2_usage_inference_get(
                start=start,
                end=end,
                bucket_width=bucket_width,
                group_by=group_by,
                user_id=user_id,
                api_key_id=api_key_id,
                byok_credential_id=byok_credential_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> UsageWithRawResponse:
        return self._with_raw_response


class AsyncUsage:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncUsageWithRawResponse(client, server)

    async def get_environment_usage_v2_environments_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        status: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentUsageResponse:
        """Get the team's environment session usage over a window, with summary and paged sessions.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            status: Value sent with the request.
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
            await self._with_raw_response.get_environment_usage_v2_environments_usage_get(
                days=days,
                user_id=user_id,
                api_key_id=api_key_id,
                status=status,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def get_inference_usage_aggregate_v2_usage_inference_get(
        self,
        *,
        start: RFC3339DateTime | None = None,
        end: RFC3339DateTime | None = None,
        bucket_width: BucketWidthOrStr | None = BucketWidth._1D,
        group_by: list[GroupByOrStr] | None = None,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InferenceUsageAggregateResponse:
        """Aggregate the team's inference usage into time buckets, optionally grouped.

        Args:
            start: Window start; defaults to end-7d
            end: Window end; defaults to now
            bucket_width: Value sent with the request.
            group_by: Grouping dimensions; repeat the parameter to group by several at once
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
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
            await self._with_raw_response.get_inference_usage_aggregate_v2_usage_inference_get(
                start=start,
                end=end,
                bucket_width=bucket_width,
                group_by=group_by,
                user_id=user_id,
                api_key_id=api_key_id,
                byok_credential_id=byok_credential_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUsageWithRawResponse:
        return self._with_raw_response


class UsageWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_environment_usage_v2_environments_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        status: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentUsageResponse, GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody]:
        """Get the team's environment session usage over a window, with summary and paged sessions.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            status: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/environments/usage"),
            query_params=[
                param[int | None]("days", days),
                param[UUID | None]("user_id", user_id),
                param[UUID | None]("api_key_id", api_key_id),
                param[str | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[EnvironmentUsageResponse],
            error_mapper=get_environment_usage_v2_environments_usage_get_error_mapper,
            request_options=request_options,
        )

    def get_inference_usage_aggregate_v2_usage_inference_get(
        self,
        *,
        start: RFC3339DateTime | None = None,
        end: RFC3339DateTime | None = None,
        bucket_width: BucketWidthOrStr | None = BucketWidth._1D,
        group_by: list[GroupByOrStr] | None = None,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InferenceUsageAggregateResponse, GetInferenceUsageAggregateV2UsageInferenceGetErrorBody]:
        """Aggregate the team's inference usage into time buckets, optionally grouped.

        Args:
            start: Window start; defaults to end-7d
            end: Window end; defaults to now
            bucket_width: Value sent with the request.
            group_by: Grouping dimensions; repeat the parameter to group by several at once
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/usage/inference"),
            query_params=[
                param[RFC3339DateTime | None]("start", start),
                param[RFC3339DateTime | None]("end", end),
                param[BucketWidthOrStr | None]("bucket_width", bucket_width),
                param[list[GroupByOrStr] | None]("group_by", group_by),
                param[UUID | None]("user_id", user_id),
                param[UUID | None]("api_key_id", api_key_id),
                param[UUID | None]("byok_credential_id", byok_credential_id),
            ],
            decoder=json_decoder[InferenceUsageAggregateResponse],
            error_mapper=get_inference_usage_aggregate_v2_usage_inference_get_error_mapper,
            request_options=request_options,
        )


class AsyncUsageWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_environment_usage_v2_environments_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        status: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentUsageResponse, GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody]:
        """Get the team's environment session usage over a window, with summary and paged sessions.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            status: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/environments/usage"),
            query_params=[
                param[int | None]("days", days),
                param[UUID | None]("user_id", user_id),
                param[UUID | None]("api_key_id", api_key_id),
                param[str | None]("status", status),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[EnvironmentUsageResponse],
            error_mapper=get_environment_usage_v2_environments_usage_get_error_mapper,
            request_options=request_options,
        )

    async def get_inference_usage_aggregate_v2_usage_inference_get(
        self,
        *,
        start: RFC3339DateTime | None = None,
        end: RFC3339DateTime | None = None,
        bucket_width: BucketWidthOrStr | None = BucketWidth._1D,
        group_by: list[GroupByOrStr] | None = None,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InferenceUsageAggregateResponse, GetInferenceUsageAggregateV2UsageInferenceGetErrorBody]:
        """Aggregate the team's inference usage into time buckets, optionally grouped.

        Args:
            start: Window start; defaults to end-7d
            end: Window end; defaults to now
            bucket_width: Value sent with the request.
            group_by: Grouping dimensions; repeat the parameter to group by several at once
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/usage/inference"),
            query_params=[
                param[RFC3339DateTime | None]("start", start),
                param[RFC3339DateTime | None]("end", end),
                param[BucketWidthOrStr | None]("bucket_width", bucket_width),
                param[list[GroupByOrStr] | None]("group_by", group_by),
                param[UUID | None]("user_id", user_id),
                param[UUID | None]("api_key_id", api_key_id),
                param[UUID | None]("byok_credential_id", byok_credential_id),
            ],
            decoder=async_json_decoder[InferenceUsageAggregateResponse],
            error_mapper=get_inference_usage_aggregate_v2_usage_inference_get_error_mapper,
            request_options=request_options,
        )
