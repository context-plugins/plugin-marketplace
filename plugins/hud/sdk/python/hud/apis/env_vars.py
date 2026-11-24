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
from ..errors.batch_replace_env_vars_v2_env_vars_batch_put_error import (
    BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody,
    batch_replace_env_vars_v2_env_vars_batch_put_error_mapper,
)
from ..errors.check_env_var_completeness_v2_env_vars_check_post_error import (
    CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody,
    check_env_var_completeness_v2_env_vars_check_post_error_mapper,
)
from ..errors.create_env_var_v2_env_vars_post_error import (
    CreateEnvVarV2EnvVarsPostErrorBody,
    create_env_var_v2_env_vars_post_error_mapper,
)
from ..errors.delete_env_var_v2_env_vars_var_id_delete_error import (
    DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody,
    delete_env_var_v2_env_vars_var_id_delete_error_mapper,
)
from ..errors.list_env_vars_v2_env_vars_get_error import (
    ListEnvVarsV2EnvVarsGetErrorBody,
    list_env_vars_v2_env_vars_get_error_mapper,
)
from ..errors.update_env_var_v2_env_vars_var_id_patch_error import (
    UpdateEnvVarV2EnvVarsVarIdPatchErrorBody,
    update_env_var_v2_env_vars_var_id_patch_error_mapper,
)
from ..models.registry_env_var_batch_request import RegistryEnvVarBatchRequest, RegistryEnvVarBatchRequestDict
from ..models.registry_env_var_batch_response import RegistryEnvVarBatchResponse
from ..models.registry_env_var_check_request import RegistryEnvVarCheckRequest, RegistryEnvVarCheckRequestDict
from ..models.registry_env_var_check_response import RegistryEnvVarCheckResponse
from ..models.registry_env_var_create_request import RegistryEnvVarCreateRequest, RegistryEnvVarCreateRequestDict
from ..models.registry_env_var_item import RegistryEnvVarItem
from ..models.registry_env_var_update_request import RegistryEnvVarUpdateRequest, RegistryEnvVarUpdateRequestDict
from ..models.registry_env_vars_list_response import RegistryEnvVarsListResponse
from ..server.server import Server


class EnvVars:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EnvVarsWithRawResponse(client, server)

    def batch_replace_env_vars_v2_env_vars_batch_put(
        self,
        body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarBatchResponse:
        """Replace a registry's full env var set with the given variables.

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
            self._with_raw_response.batch_replace_env_vars_v2_env_vars_batch_put(body, request_options=request_options)
        )

    def check_env_var_completeness_v2_env_vars_check_post(
        self,
        body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarCheckResponse:
        """Check whether each registry has all env vars its manifest requires.

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
            self._with_raw_response.check_env_var_completeness_v2_env_vars_check_post(
                body, request_options=request_options
            ),
        )

    def create_env_var_v2_env_vars_post(
        self,
        body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarItem:
        """Set a registry env var, creating it or updating an existing one by name.

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
        return unwrap(self._with_raw_response.create_env_var_v2_env_vars_post(body, request_options=request_options))

    def delete_env_var_v2_env_vars_var_id_delete(
        self, var_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a registry env var.

        Args:
            var_id: Value sent with the request.
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
            self._with_raw_response.delete_env_var_v2_env_vars_var_id_delete(var_id, request_options=request_options)
        )

    def list_env_vars_v2_env_vars_get(
        self, registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> RegistryEnvVarsListResponse:
        """List a registry's runtime env vars with masked values.

        Args:
            registry_id: Registry to list env vars for.
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
            self._with_raw_response.list_env_vars_v2_env_vars_get(registry_id, request_options=request_options)
        )

    def update_env_var_v2_env_vars_var_id_patch(
        self,
        var_id: UUID,
        body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarItem:
        """Update a registry env var's value.

        Args:
            var_id: Value sent with the request.
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
            self._with_raw_response.update_env_var_v2_env_vars_var_id_patch(
                var_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EnvVarsWithRawResponse:
        return self._with_raw_response


class AsyncEnvVars:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEnvVarsWithRawResponse(client, server)

    async def batch_replace_env_vars_v2_env_vars_batch_put(
        self,
        body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarBatchResponse:
        """Replace a registry's full env var set with the given variables.

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
            await self._with_raw_response.batch_replace_env_vars_v2_env_vars_batch_put(
                body, request_options=request_options
            ),
        )

    async def check_env_var_completeness_v2_env_vars_check_post(
        self,
        body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarCheckResponse:
        """Check whether each registry has all env vars its manifest requires.

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
            await self._with_raw_response.check_env_var_completeness_v2_env_vars_check_post(
                body, request_options=request_options
            ),
        )

    async def create_env_var_v2_env_vars_post(
        self,
        body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarItem:
        """Set a registry env var, creating it or updating an existing one by name.

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
            await self._with_raw_response.create_env_var_v2_env_vars_post(body, request_options=request_options)
        )

    async def delete_env_var_v2_env_vars_var_id_delete(
        self, var_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a registry env var.

        Args:
            var_id: Value sent with the request.
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
            await self._with_raw_response.delete_env_var_v2_env_vars_var_id_delete(
                var_id, request_options=request_options
            ),
        )

    async def list_env_vars_v2_env_vars_get(
        self, registry_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RegistryEnvVarsListResponse:
        """List a registry's runtime env vars with masked values.

        Args:
            registry_id: Registry to list env vars for.
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
            await self._with_raw_response.list_env_vars_v2_env_vars_get(registry_id, request_options=request_options)
        )

    async def update_env_var_v2_env_vars_var_id_patch(
        self,
        var_id: UUID,
        body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RegistryEnvVarItem:
        """Update a registry env var's value.

        Args:
            var_id: Value sent with the request.
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
            await self._with_raw_response.update_env_var_v2_env_vars_var_id_patch(
                var_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnvVarsWithRawResponse:
        return self._with_raw_response


class EnvVarsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def batch_replace_env_vars_v2_env_vars_batch_put(
        self,
        body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarBatchResponse, BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody]:
        """Replace a registry's full env var set with the given variables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/env-vars/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict](body),
            decoder=json_decoder[RegistryEnvVarBatchResponse],
            error_mapper=batch_replace_env_vars_v2_env_vars_batch_put_error_mapper,
            request_options=request_options,
        )

    def check_env_var_completeness_v2_env_vars_check_post(
        self,
        body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarCheckResponse, CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody]:
        """Check whether each registry has all env vars its manifest requires.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/env-vars/check"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict](body),
            decoder=json_decoder[RegistryEnvVarCheckResponse],
            error_mapper=check_env_var_completeness_v2_env_vars_check_post_error_mapper,
            request_options=request_options,
        )

    def create_env_var_v2_env_vars_post(
        self,
        body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarItem, CreateEnvVarV2EnvVarsPostErrorBody]:
        """Set a registry env var, creating it or updating an existing one by name.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/env-vars"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict](body),
            decoder=json_decoder[RegistryEnvVarItem],
            error_mapper=create_env_var_v2_env_vars_post_error_mapper,
            request_options=request_options,
        )

    def delete_env_var_v2_env_vars_var_id_delete(
        self, var_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody]:
        """Delete a registry env var.

        Args:
            var_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/env-vars/{var_id}"),
            path_params=[param[UUID]("var_id", var_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_env_var_v2_env_vars_var_id_delete_error_mapper,
            request_options=request_options,
        )

    def list_env_vars_v2_env_vars_get(
        self, registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RegistryEnvVarsListResponse, ListEnvVarsV2EnvVarsGetErrorBody]:
        """List a registry's runtime env vars with masked values.

        Args:
            registry_id: Registry to list env vars for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/env-vars"),
            query_params=[param[UUID]("registry_id", registry_id)],
            decoder=json_decoder[RegistryEnvVarsListResponse],
            error_mapper=list_env_vars_v2_env_vars_get_error_mapper,
            request_options=request_options,
        )

    def update_env_var_v2_env_vars_var_id_patch(
        self,
        var_id: UUID,
        body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarItem, UpdateEnvVarV2EnvVarsVarIdPatchErrorBody]:
        """Update a registry env var's value.

        Args:
            var_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/env-vars/{var_id}"),
            path_params=[param[UUID]("var_id", var_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict](body),
            decoder=json_decoder[RegistryEnvVarItem],
            error_mapper=update_env_var_v2_env_vars_var_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncEnvVarsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def batch_replace_env_vars_v2_env_vars_batch_put(
        self,
        body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarBatchResponse, BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody]:
        """Replace a registry's full env var set with the given variables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/env-vars/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict](body),
            decoder=async_json_decoder[RegistryEnvVarBatchResponse],
            error_mapper=batch_replace_env_vars_v2_env_vars_batch_put_error_mapper,
            request_options=request_options,
        )

    async def check_env_var_completeness_v2_env_vars_check_post(
        self,
        body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarCheckResponse, CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody]:
        """Check whether each registry has all env vars its manifest requires.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/env-vars/check"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict](body),
            decoder=async_json_decoder[RegistryEnvVarCheckResponse],
            error_mapper=check_env_var_completeness_v2_env_vars_check_post_error_mapper,
            request_options=request_options,
        )

    async def create_env_var_v2_env_vars_post(
        self,
        body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarItem, CreateEnvVarV2EnvVarsPostErrorBody]:
        """Set a registry env var, creating it or updating an existing one by name.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/env-vars"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict](body),
            decoder=async_json_decoder[RegistryEnvVarItem],
            error_mapper=create_env_var_v2_env_vars_post_error_mapper,
            request_options=request_options,
        )

    async def delete_env_var_v2_env_vars_var_id_delete(
        self, var_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody]:
        """Delete a registry env var.

        Args:
            var_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/env-vars/{var_id}"),
            path_params=[param[UUID]("var_id", var_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_env_var_v2_env_vars_var_id_delete_error_mapper,
            request_options=request_options,
        )

    async def list_env_vars_v2_env_vars_get(
        self, registry_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RegistryEnvVarsListResponse, ListEnvVarsV2EnvVarsGetErrorBody]:
        """List a registry's runtime env vars with masked values.

        Args:
            registry_id: Registry to list env vars for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/env-vars"),
            query_params=[param[UUID]("registry_id", registry_id)],
            decoder=async_json_decoder[RegistryEnvVarsListResponse],
            error_mapper=list_env_vars_v2_env_vars_get_error_mapper,
            request_options=request_options,
        )

    async def update_env_var_v2_env_vars_var_id_patch(
        self,
        var_id: UUID,
        body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistryEnvVarItem, UpdateEnvVarV2EnvVarsVarIdPatchErrorBody]:
        """Update a registry env var's value.

        Args:
            var_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/env-vars/{var_id}"),
            path_params=[param[UUID]("var_id", var_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict](body),
            decoder=async_json_decoder[RegistryEnvVarItem],
            error_mapper=update_env_var_v2_env_vars_var_id_patch_error_mapper,
            request_options=request_options,
        )
