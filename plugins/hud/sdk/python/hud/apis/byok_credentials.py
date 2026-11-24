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
from ..errors.create_byok_credential_v2_byok_credentials_post_error import (
    CreateByokCredentialV2ByokCredentialsPostErrorBody,
    create_byok_credential_v2_byok_credentials_post_error_mapper,
)
from ..errors.delete_byok_credential_v2_byok_credentials_credential_id_delete_error import (
    DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody,
    delete_byok_credential_v2_byok_credentials_credential_id_delete_error_mapper,
)
from ..errors.list_byok_credentials_v2_byok_credentials_get_error import (
    ListByokCredentialsV2ByokCredentialsGetErrorBody,
    list_byok_credentials_v2_byok_credentials_get_error_mapper,
)
from ..errors.update_byok_credential_v2_byok_credentials_credential_id_patch_error import (
    UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody,
    update_byok_credential_v2_byok_credentials_credential_id_patch_error_mapper,
)
from ..models.byok_credential_create_request import ByokCredentialCreateRequest, ByokCredentialCreateRequestDict
from ..models.byok_credential_item import ByokCredentialItem
from ..models.byok_credential_update_request import ByokCredentialUpdateRequest, ByokCredentialUpdateRequestDict
from ..models.byok_credentials_list_response import ByokCredentialsListResponse
from ..server.server import Server


class ByokCredentials:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ByokCredentialsWithRawResponse(client, server)

    def create_byok_credential_v2_byok_credentials_post(
        self,
        body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ByokCredentialItem:
        """Create or replace a provider credential for one ownership scope.

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
            self._with_raw_response.create_byok_credential_v2_byok_credentials_post(
                body, request_options=request_options
            ),
        )

    def delete_byok_credential_v2_byok_credentials_credential_id_delete(
        self, credential_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Disable a BYOK credential and erase its encrypted value.

        Args:
            credential_id: Value sent with the request.
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
            self._with_raw_response.delete_byok_credential_v2_byok_credentials_credential_id_delete(
                credential_id, request_options=request_options
            ),
        )

    def list_byok_credentials_v2_byok_credentials_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ByokCredentialsListResponse:
        """List the caller's personal and team BYOK credentials with masked values.

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
            self._with_raw_response.list_byok_credentials_v2_byok_credentials_get(request_options=request_options)
        )

    def update_byok_credential_v2_byok_credentials_credential_id_patch(
        self,
        credential_id: UUID,
        body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ByokCredentialItem:
        """Rotate a BYOK credential without exposing its plaintext value.

        Args:
            credential_id: Value sent with the request.
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
            self._with_raw_response.update_byok_credential_v2_byok_credentials_credential_id_patch(
                credential_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ByokCredentialsWithRawResponse:
        return self._with_raw_response


class AsyncByokCredentials:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncByokCredentialsWithRawResponse(client, server)

    async def create_byok_credential_v2_byok_credentials_post(
        self,
        body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ByokCredentialItem:
        """Create or replace a provider credential for one ownership scope.

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
            await self._with_raw_response.create_byok_credential_v2_byok_credentials_post(
                body, request_options=request_options
            ),
        )

    async def delete_byok_credential_v2_byok_credentials_credential_id_delete(
        self, credential_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Disable a BYOK credential and erase its encrypted value.

        Args:
            credential_id: Value sent with the request.
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
            await self._with_raw_response.delete_byok_credential_v2_byok_credentials_credential_id_delete(
                credential_id, request_options=request_options
            ),
        )

    async def list_byok_credentials_v2_byok_credentials_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ByokCredentialsListResponse:
        """List the caller's personal and team BYOK credentials with masked values.

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
            await self._with_raw_response.list_byok_credentials_v2_byok_credentials_get(request_options=request_options)
        )

    async def update_byok_credential_v2_byok_credentials_credential_id_patch(
        self,
        credential_id: UUID,
        body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ByokCredentialItem:
        """Rotate a BYOK credential without exposing its plaintext value.

        Args:
            credential_id: Value sent with the request.
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
            await self._with_raw_response.update_byok_credential_v2_byok_credentials_credential_id_patch(
                credential_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncByokCredentialsWithRawResponse:
        return self._with_raw_response


class ByokCredentialsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_byok_credential_v2_byok_credentials_post(
        self,
        body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ByokCredentialItem, CreateByokCredentialV2ByokCredentialsPostErrorBody]:
        """Create or replace a provider credential for one ownership scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/byok-credentials"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ByokCredentialCreateRequest | ByokCredentialCreateRequestDict](body),
            decoder=json_decoder[ByokCredentialItem],
            error_mapper=create_byok_credential_v2_byok_credentials_post_error_mapper,
            request_options=request_options,
        )

    def delete_byok_credential_v2_byok_credentials_credential_id_delete(
        self, credential_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody]:
        """Disable a BYOK credential and erase its encrypted value.

        Args:
            credential_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/byok-credentials/{credential_id}"),
            path_params=[param[UUID]("credential_id", credential_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_byok_credential_v2_byok_credentials_credential_id_delete_error_mapper,
            request_options=request_options,
        )

    def list_byok_credentials_v2_byok_credentials_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ByokCredentialsListResponse, ListByokCredentialsV2ByokCredentialsGetErrorBody]:
        """List the caller's personal and team BYOK credentials with masked values.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/byok-credentials"),
            decoder=json_decoder[ByokCredentialsListResponse],
            error_mapper=list_byok_credentials_v2_byok_credentials_get_error_mapper,
            request_options=request_options,
        )

    def update_byok_credential_v2_byok_credentials_credential_id_patch(
        self,
        credential_id: UUID,
        body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ByokCredentialItem, UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody]:
        """Rotate a BYOK credential without exposing its plaintext value.

        Args:
            credential_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/byok-credentials/{credential_id}"),
            path_params=[param[UUID]("credential_id", credential_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict](body),
            decoder=json_decoder[ByokCredentialItem],
            error_mapper=update_byok_credential_v2_byok_credentials_credential_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncByokCredentialsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_byok_credential_v2_byok_credentials_post(
        self,
        body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ByokCredentialItem, CreateByokCredentialV2ByokCredentialsPostErrorBody]:
        """Create or replace a provider credential for one ownership scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/byok-credentials"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ByokCredentialCreateRequest | ByokCredentialCreateRequestDict](body),
            decoder=async_json_decoder[ByokCredentialItem],
            error_mapper=create_byok_credential_v2_byok_credentials_post_error_mapper,
            request_options=request_options,
        )

    async def delete_byok_credential_v2_byok_credentials_credential_id_delete(
        self, credential_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody]:
        """Disable a BYOK credential and erase its encrypted value.

        Args:
            credential_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/byok-credentials/{credential_id}"),
            path_params=[param[UUID]("credential_id", credential_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_byok_credential_v2_byok_credentials_credential_id_delete_error_mapper,
            request_options=request_options,
        )

    async def list_byok_credentials_v2_byok_credentials_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ByokCredentialsListResponse, ListByokCredentialsV2ByokCredentialsGetErrorBody]:
        """List the caller's personal and team BYOK credentials with masked values.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/byok-credentials"),
            decoder=async_json_decoder[ByokCredentialsListResponse],
            error_mapper=list_byok_credentials_v2_byok_credentials_get_error_mapper,
            request_options=request_options,
        )

    async def update_byok_credential_v2_byok_credentials_credential_id_patch(
        self,
        credential_id: UUID,
        body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ByokCredentialItem, UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody]:
        """Rotate a BYOK credential without exposing its plaintext value.

        Args:
            credential_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/byok-credentials/{credential_id}"),
            path_params=[param[UUID]("credential_id", credential_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict](body),
            decoder=async_json_decoder[ByokCredentialItem],
            error_mapper=update_byok_credential_v2_byok_credentials_credential_id_patch_error_mapper,
            request_options=request_options,
        )
