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
from ..errors.create_member_secret_v2_member_secrets_post_error import (
    CreateMemberSecretV2MemberSecretsPostErrorBody,
    create_member_secret_v2_member_secrets_post_error_mapper,
)
from ..errors.delete_member_secret_v2_member_secrets_secret_id_delete_error import (
    DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody,
    delete_member_secret_v2_member_secrets_secret_id_delete_error_mapper,
)
from ..errors.list_member_secrets_v2_member_secrets_get_error import (
    ListMemberSecretsV2MemberSecretsGetErrorBody,
    list_member_secrets_v2_member_secrets_get_error_mapper,
)
from ..errors.update_member_secret_v2_member_secrets_secret_id_patch_error import (
    UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody,
    update_member_secret_v2_member_secrets_secret_id_patch_error_mapper,
)
from ..models.member_secret_create_request import MemberSecretCreateRequest, MemberSecretCreateRequestDict
from ..models.member_secret_item import MemberSecretItem
from ..models.member_secret_update_request import MemberSecretUpdateRequest, MemberSecretUpdateRequestDict
from ..models.member_secrets_list_response import MemberSecretsListResponse
from ..server.server import Server


class MemberSecrets:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MemberSecretsWithRawResponse(client, server)

    def create_member_secret_v2_member_secrets_post(
        self,
        body: MemberSecretCreateRequest | MemberSecretCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MemberSecretItem:
        """Set a personal secret, creating it or updating an existing one by name.

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
            self._with_raw_response.create_member_secret_v2_member_secrets_post(body, request_options=request_options)
        )

    def delete_member_secret_v2_member_secrets_secret_id_delete(
        self, secret_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a personal secret.

        Args:
            secret_id: Value sent with the request.
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
            self._with_raw_response.delete_member_secret_v2_member_secrets_secret_id_delete(
                secret_id, request_options=request_options
            ),
        )

    def list_member_secrets_v2_member_secrets_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> MemberSecretsListResponse:
        """List the caller's personal secrets with masked values.

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
        return unwrap(
            self._with_raw_response.list_member_secrets_v2_member_secrets_get(request_options=request_options)
        )

    def update_member_secret_v2_member_secrets_secret_id_patch(
        self,
        secret_id: UUID,
        body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MemberSecretItem:
        """Update a personal secret's value.

        Args:
            secret_id: Value sent with the request.
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
            self._with_raw_response.update_member_secret_v2_member_secrets_secret_id_patch(
                secret_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MemberSecretsWithRawResponse:
        return self._with_raw_response


class AsyncMemberSecrets:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMemberSecretsWithRawResponse(client, server)

    async def create_member_secret_v2_member_secrets_post(
        self,
        body: MemberSecretCreateRequest | MemberSecretCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MemberSecretItem:
        """Set a personal secret, creating it or updating an existing one by name.

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
            await self._with_raw_response.create_member_secret_v2_member_secrets_post(
                body, request_options=request_options
            ),
        )

    async def delete_member_secret_v2_member_secrets_secret_id_delete(
        self, secret_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a personal secret.

        Args:
            secret_id: Value sent with the request.
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
            await self._with_raw_response.delete_member_secret_v2_member_secrets_secret_id_delete(
                secret_id, request_options=request_options
            ),
        )

    async def list_member_secrets_v2_member_secrets_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MemberSecretsListResponse:
        """List the caller's personal secrets with masked values.

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
        return unwrap(
            await self._with_raw_response.list_member_secrets_v2_member_secrets_get(request_options=request_options)
        )

    async def update_member_secret_v2_member_secrets_secret_id_patch(
        self,
        secret_id: UUID,
        body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MemberSecretItem:
        """Update a personal secret's value.

        Args:
            secret_id: Value sent with the request.
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
            await self._with_raw_response.update_member_secret_v2_member_secrets_secret_id_patch(
                secret_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMemberSecretsWithRawResponse:
        return self._with_raw_response


class MemberSecretsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_member_secret_v2_member_secrets_post(
        self,
        body: MemberSecretCreateRequest | MemberSecretCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberSecretItem, CreateMemberSecretV2MemberSecretsPostErrorBody]:
        """Set a personal secret, creating it or updating an existing one by name.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/member-secrets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberSecretCreateRequest | MemberSecretCreateRequestDict](body),
            decoder=json_decoder[MemberSecretItem],
            error_mapper=create_member_secret_v2_member_secrets_post_error_mapper,
            request_options=request_options,
        )

    def delete_member_secret_v2_member_secrets_secret_id_delete(
        self, secret_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody]:
        """Delete a personal secret.

        Args:
            secret_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/member-secrets/{secret_id}"),
            path_params=[param[UUID]("secret_id", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_member_secret_v2_member_secrets_secret_id_delete_error_mapper,
            request_options=request_options,
        )

    def list_member_secrets_v2_member_secrets_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MemberSecretsListResponse, ListMemberSecretsV2MemberSecretsGetErrorBody]:
        """List the caller's personal secrets with masked values.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/member-secrets"),
            decoder=json_decoder[MemberSecretsListResponse],
            error_mapper=list_member_secrets_v2_member_secrets_get_error_mapper,
            request_options=request_options,
        )

    def update_member_secret_v2_member_secrets_secret_id_patch(
        self,
        secret_id: UUID,
        body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberSecretItem, UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody]:
        """Update a personal secret's value.

        Args:
            secret_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/member-secrets/{secret_id}"),
            path_params=[param[UUID]("secret_id", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberSecretUpdateRequest | MemberSecretUpdateRequestDict](body),
            decoder=json_decoder[MemberSecretItem],
            error_mapper=update_member_secret_v2_member_secrets_secret_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncMemberSecretsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_member_secret_v2_member_secrets_post(
        self,
        body: MemberSecretCreateRequest | MemberSecretCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberSecretItem, CreateMemberSecretV2MemberSecretsPostErrorBody]:
        """Set a personal secret, creating it or updating an existing one by name.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/member-secrets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberSecretCreateRequest | MemberSecretCreateRequestDict](body),
            decoder=async_json_decoder[MemberSecretItem],
            error_mapper=create_member_secret_v2_member_secrets_post_error_mapper,
            request_options=request_options,
        )

    async def delete_member_secret_v2_member_secrets_secret_id_delete(
        self, secret_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody]:
        """Delete a personal secret.

        Args:
            secret_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/member-secrets/{secret_id}"),
            path_params=[param[UUID]("secret_id", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_member_secret_v2_member_secrets_secret_id_delete_error_mapper,
            request_options=request_options,
        )

    async def list_member_secrets_v2_member_secrets_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MemberSecretsListResponse, ListMemberSecretsV2MemberSecretsGetErrorBody]:
        """List the caller's personal secrets with masked values.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/member-secrets"),
            decoder=async_json_decoder[MemberSecretsListResponse],
            error_mapper=list_member_secrets_v2_member_secrets_get_error_mapper,
            request_options=request_options,
        )

    async def update_member_secret_v2_member_secrets_secret_id_patch(
        self,
        secret_id: UUID,
        body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MemberSecretItem, UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody]:
        """Update a personal secret's value.

        Args:
            secret_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/member-secrets/{secret_id}"),
            path_params=[param[UUID]("secret_id", secret_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberSecretUpdateRequest | MemberSecretUpdateRequestDict](body),
            decoder=async_json_decoder[MemberSecretItem],
            error_mapper=update_member_secret_v2_member_secrets_secret_id_patch_error_mapper,
            request_options=request_options,
        )
