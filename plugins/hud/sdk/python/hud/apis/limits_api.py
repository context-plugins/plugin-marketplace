from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_spend_limit_v2_limits_post_error import (
    CreateSpendLimitV2LimitsPostErrorBody,
    create_spend_limit_v2_limits_post_error_mapper,
)
from ..errors.delete_spend_limit_v2_limits_limit_id_delete_error import (
    DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody,
    delete_spend_limit_v2_limits_limit_id_delete_error_mapper,
)
from ..errors.list_spend_limits_v2_limits_get_error import (
    ListSpendLimitsV2LimitsGetErrorBody,
    list_spend_limits_v2_limits_get_error_mapper,
)
from ..errors.reset_spend_limit_v2_limits_limit_id_reset_post_error import (
    ResetSpendLimitV2LimitsLimitIdResetPostErrorBody,
    reset_spend_limit_v2_limits_limit_id_reset_post_error_mapper,
)
from ..errors.update_spend_limit_v2_limits_limit_id_patch_error import (
    UpdateSpendLimitV2LimitsLimitIdPatchErrorBody,
    update_spend_limit_v2_limits_limit_id_patch_error_mapper,
)
from ..models.spend_limit_create_request import SpendLimitCreateRequest, SpendLimitCreateRequestDict
from ..models.spend_limit_item import SpendLimitItem
from ..models.spend_limit_list_response import SpendLimitListResponse
from ..models.spend_limit_update_request import SpendLimitUpdateRequest, SpendLimitUpdateRequestDict
from ..server.server import Server


class LimitsApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = LimitsApiWithRawResponse(client, server)

    def create_spend_limit_v2_limits_post(
        self,
        body: SpendLimitCreateRequest | SpendLimitCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpendLimitItem:
        """Create a team, member, or API-key limit, or a team percentage alert.

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
        return unwrap(self._with_raw_response.create_spend_limit_v2_limits_post(body, request_options=request_options))

    def delete_spend_limit_v2_limits_limit_id_delete(
        self, limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a spend limit.

        Args:
            limit_id: Value sent with the request.
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
            self._with_raw_response.delete_spend_limit_v2_limits_limit_id_delete(
                limit_id, request_options=request_options
            ),
        )

    def list_spend_limits_v2_limits_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> SpendLimitListResponse:
        """List the spend limits visible to the caller with current-period spend.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.list_spend_limits_v2_limits_get(request_options=request_options))

    def reset_spend_limit_v2_limits_limit_id_reset_post(
        self, limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SpendLimitItem:
        """Start a new spend window on a blocking limit. Ledger rows are unchanged.

        Args:
            limit_id: Value sent with the request.
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
            self._with_raw_response.reset_spend_limit_v2_limits_limit_id_reset_post(
                limit_id, request_options=request_options
            ),
        )

    def update_spend_limit_v2_limits_limit_id_patch(
        self,
        limit_id: UUID,
        body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpendLimitItem:
        """Update an absolute amount, percentage threshold, or enabled state.

        Args:
            limit_id: Value sent with the request.
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
            self._with_raw_response.update_spend_limit_v2_limits_limit_id_patch(
                limit_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> LimitsApiWithRawResponse:
        return self._with_raw_response


class AsyncLimitsApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncLimitsApiWithRawResponse(client, server)

    async def create_spend_limit_v2_limits_post(
        self,
        body: SpendLimitCreateRequest | SpendLimitCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpendLimitItem:
        """Create a team, member, or API-key limit, or a team percentage alert.

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
            await self._with_raw_response.create_spend_limit_v2_limits_post(body, request_options=request_options)
        )

    async def delete_spend_limit_v2_limits_limit_id_delete(
        self, limit_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a spend limit.

        Args:
            limit_id: Value sent with the request.
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
            await self._with_raw_response.delete_spend_limit_v2_limits_limit_id_delete(
                limit_id, request_options=request_options
            ),
        )

    async def list_spend_limits_v2_limits_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SpendLimitListResponse:
        """List the spend limits visible to the caller with current-period spend.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.list_spend_limits_v2_limits_get(request_options=request_options))

    async def reset_spend_limit_v2_limits_limit_id_reset_post(
        self, limit_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SpendLimitItem:
        """Start a new spend window on a blocking limit. Ledger rows are unchanged.

        Args:
            limit_id: Value sent with the request.
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
            await self._with_raw_response.reset_spend_limit_v2_limits_limit_id_reset_post(
                limit_id, request_options=request_options
            ),
        )

    async def update_spend_limit_v2_limits_limit_id_patch(
        self,
        limit_id: UUID,
        body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpendLimitItem:
        """Update an absolute amount, percentage threshold, or enabled state.

        Args:
            limit_id: Value sent with the request.
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
            await self._with_raw_response.update_spend_limit_v2_limits_limit_id_patch(
                limit_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLimitsApiWithRawResponse:
        return self._with_raw_response


class LimitsApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_spend_limit_v2_limits_post(
        self,
        body: SpendLimitCreateRequest | SpendLimitCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendLimitItem, CreateSpendLimitV2LimitsPostErrorBody]:
        """Create a team, member, or API-key limit, or a team percentage alert.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/limits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpendLimitCreateRequest | SpendLimitCreateRequestDict](body),
            decoder=json_decoder[SpendLimitItem],
            error_mapper=create_spend_limit_v2_limits_post_error_mapper,
            request_options=request_options,
        )

    def delete_spend_limit_v2_limits_limit_id_delete(
        self, limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody]:
        """Delete a spend limit.

        Args:
            limit_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/limits/{limit_id}"),
            path_params=[param[UUID]("limit_id", limit_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_spend_limit_v2_limits_limit_id_delete_error_mapper,
            request_options=request_options,
        )

    def list_spend_limits_v2_limits_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SpendLimitListResponse, ListSpendLimitsV2LimitsGetErrorBody]:
        """List the spend limits visible to the caller with current-period spend.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/limits"),
            decoder=json_decoder[SpendLimitListResponse],
            error_mapper=list_spend_limits_v2_limits_get_error_mapper,
            request_options=request_options,
        )

    def reset_spend_limit_v2_limits_limit_id_reset_post(
        self, limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SpendLimitItem, ResetSpendLimitV2LimitsLimitIdResetPostErrorBody]:
        """Start a new spend window on a blocking limit. Ledger rows are unchanged.

        Args:
            limit_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/limits/{limit_id}/reset"),
            path_params=[param[UUID]("limit_id", limit_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[SpendLimitItem],
            error_mapper=reset_spend_limit_v2_limits_limit_id_reset_post_error_mapper,
            request_options=request_options,
        )

    def update_spend_limit_v2_limits_limit_id_patch(
        self,
        limit_id: UUID,
        body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendLimitItem, UpdateSpendLimitV2LimitsLimitIdPatchErrorBody]:
        """Update an absolute amount, percentage threshold, or enabled state.

        Args:
            limit_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/limits/{limit_id}"),
            path_params=[param[UUID]("limit_id", limit_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpendLimitUpdateRequest | SpendLimitUpdateRequestDict](body),
            decoder=json_decoder[SpendLimitItem],
            error_mapper=update_spend_limit_v2_limits_limit_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncLimitsApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_spend_limit_v2_limits_post(
        self,
        body: SpendLimitCreateRequest | SpendLimitCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendLimitItem, CreateSpendLimitV2LimitsPostErrorBody]:
        """Create a team, member, or API-key limit, or a team percentage alert.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/limits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpendLimitCreateRequest | SpendLimitCreateRequestDict](body),
            decoder=async_json_decoder[SpendLimitItem],
            error_mapper=create_spend_limit_v2_limits_post_error_mapper,
            request_options=request_options,
        )

    async def delete_spend_limit_v2_limits_limit_id_delete(
        self, limit_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody]:
        """Delete a spend limit.

        Args:
            limit_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/limits/{limit_id}"),
            path_params=[param[UUID]("limit_id", limit_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_spend_limit_v2_limits_limit_id_delete_error_mapper,
            request_options=request_options,
        )

    async def list_spend_limits_v2_limits_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SpendLimitListResponse, ListSpendLimitsV2LimitsGetErrorBody]:
        """List the spend limits visible to the caller with current-period spend.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/limits"),
            decoder=async_json_decoder[SpendLimitListResponse],
            error_mapper=list_spend_limits_v2_limits_get_error_mapper,
            request_options=request_options,
        )

    async def reset_spend_limit_v2_limits_limit_id_reset_post(
        self, limit_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SpendLimitItem, ResetSpendLimitV2LimitsLimitIdResetPostErrorBody]:
        """Start a new spend window on a blocking limit. Ledger rows are unchanged.

        Args:
            limit_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/limits/{limit_id}/reset"),
            path_params=[param[UUID]("limit_id", limit_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[SpendLimitItem],
            error_mapper=reset_spend_limit_v2_limits_limit_id_reset_post_error_mapper,
            request_options=request_options,
        )

    async def update_spend_limit_v2_limits_limit_id_patch(
        self,
        limit_id: UUID,
        body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendLimitItem, UpdateSpendLimitV2LimitsLimitIdPatchErrorBody]:
        """Update an absolute amount, percentage threshold, or enabled state.

        Args:
            limit_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/limits/{limit_id}"),
            path_params=[param[UUID]("limit_id", limit_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SpendLimitUpdateRequest | SpendLimitUpdateRequestDict](body),
            decoder=async_json_decoder[SpendLimitItem],
            error_mapper=update_spend_limit_v2_limits_limit_id_patch_error_mapper,
            request_options=request_options,
        )
