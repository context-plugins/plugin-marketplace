from __future__ import annotations

from uuid import UUID

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_inference_usage_v2_inference_usage_get_error import (
    GetInferenceUsageV2InferenceUsageGetErrorBody,
    get_inference_usage_v2_inference_usage_get_error_mapper,
)
from ..models.inference_usage_response import InferenceUsageResponse
from ..server.server import Server


class Inference:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = InferenceWithRawResponse(client, server)

    def get_inference_usage_v2_inference_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        model_id: UUID | None = None,
        request_type: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InferenceUsageResponse:
        """Get the team's inference usage over a window, with summary and paged requests.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
            model_id: Value sent with the request.
            request_type: Value sent with the request.
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
            self._with_raw_response.get_inference_usage_v2_inference_usage_get(
                days=days,
                user_id=user_id,
                api_key_id=api_key_id,
                byok_credential_id=byok_credential_id,
                model_id=model_id,
                request_type=request_type,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> InferenceWithRawResponse:
        return self._with_raw_response


class AsyncInference:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncInferenceWithRawResponse(client, server)

    async def get_inference_usage_v2_inference_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        model_id: UUID | None = None,
        request_type: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InferenceUsageResponse:
        """Get the team's inference usage over a window, with summary and paged requests.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
            model_id: Value sent with the request.
            request_type: Value sent with the request.
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
            await self._with_raw_response.get_inference_usage_v2_inference_usage_get(
                days=days,
                user_id=user_id,
                api_key_id=api_key_id,
                byok_credential_id=byok_credential_id,
                model_id=model_id,
                request_type=request_type,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInferenceWithRawResponse:
        return self._with_raw_response


class InferenceWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_inference_usage_v2_inference_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        model_id: UUID | None = None,
        request_type: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InferenceUsageResponse, GetInferenceUsageV2InferenceUsageGetErrorBody]:
        """Get the team's inference usage over a window, with summary and paged requests.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
            model_id: Value sent with the request.
            request_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/inference/usage"),
            query_params=[
                param[int | None]("days", days),
                param[UUID | None]("user_id", user_id),
                param[UUID | None]("api_key_id", api_key_id),
                param[UUID | None]("byok_credential_id", byok_credential_id),
                param[UUID | None]("model_id", model_id),
                param[str | None]("request_type", request_type),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[InferenceUsageResponse],
            error_mapper=get_inference_usage_v2_inference_usage_get_error_mapper,
            request_options=request_options,
        )


class AsyncInferenceWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_inference_usage_v2_inference_usage_get(
        self,
        *,
        days: int | None = 7,
        user_id: UUID | None = None,
        api_key_id: UUID | None = None,
        byok_credential_id: UUID | None = None,
        model_id: UUID | None = None,
        request_type: str | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InferenceUsageResponse, GetInferenceUsageV2InferenceUsageGetErrorBody]:
        """Get the team's inference usage over a window, with summary and paged requests.

        Args:
            days: Value sent with the request.
            user_id: Value sent with the request.
            api_key_id: Value sent with the request.
            byok_credential_id: Value sent with the request.
            model_id: Value sent with the request.
            request_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/inference/usage"),
            query_params=[
                param[int | None]("days", days),
                param[UUID | None]("user_id", user_id),
                param[UUID | None]("api_key_id", api_key_id),
                param[UUID | None]("byok_credential_id", byok_credential_id),
                param[UUID | None]("model_id", model_id),
                param[str | None]("request_type", request_type),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[InferenceUsageResponse],
            error_mapper=get_inference_usage_v2_inference_usage_get_error_mapper,
            request_options=request_options,
        )
