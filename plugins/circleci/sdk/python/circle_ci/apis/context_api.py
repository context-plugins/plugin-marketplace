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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_or_update_context_environment_variable_error import (
    AddOrUpdateContextEnvironmentVariableErrorBody,
    add_or_update_context_environment_variable_error_mapper,
)
from ..errors.create_context_error import CreateContextErrorBody, create_context_error_mapper
from ..errors.delete_context_environment_variable_error import (
    DeleteContextEnvironmentVariableErrorBody,
    delete_context_environment_variable_error_mapper,
)
from ..errors.delete_context_error import DeleteContextErrorBody, delete_context_error_mapper
from ..errors.get_context_error import GetContextErrorBody, get_context_error_mapper
from ..errors.list_context_environment_variables_error import (
    ListContextEnvironmentVariablesErrorBody,
    list_context_environment_variables_error_mapper,
)
from ..errors.list_contexts_error import ListContextsErrorBody, list_contexts_error_mapper
from ..models.context import Context
from ..models.context_environment_variable_request import (
    ContextEnvironmentVariableRequest,
    ContextEnvironmentVariableRequestDict,
)
from ..models.context_list import ContextList
from ..models.create_context_request import CreateContextRequest, CreateContextRequestDict
from ..models.enums.owner_type import OwnerTypeOrStr
from ..models.environment_variable import EnvironmentVariable
from ..models.environment_variable_list import EnvironmentVariableList
from ..models.message_response import MessageResponse
from ..server.server import Server


class ContextApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContextApiWithRawResponse(client, server, auth)

    def add_or_update_context_environment_variable(
        self,
        context_id: UUID,
        env_var_name: str,
        body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentVariable:
        """Creates a new environment variable or updates an existing one within the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully added or updated environment variable

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.add_or_update_context_environment_variable(
                context_id, env_var_name, body, request_options=request_options
            ),
        )

    def create_context(
        self,
        body: CreateContextRequest | CreateContextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Context:
        """Creates a new context for sharing environment variables across projects.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created context

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_context(body, request_options=request_options))

    def delete_context(
        self, context_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a context and all of its associated environment variables.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted context

        Raises:
            ApiError: Unauthorized Context not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_context(context_id, request_options=request_options))

    def delete_context_environment_variable(
        self, context_id: UUID, env_var_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes an environment variable from the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted environment variable

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_context_environment_variable(
                context_id, env_var_name, request_options=request_options
            ),
        )

    def get_context(self, context_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Context:
        """Returns a specific context by its unique identifier.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved context

        Raises:
            ApiError: Unauthorized Context not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_context(context_id, request_options=request_options))

    def list_context_environment_variables(
        self, context_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentVariableList:
        """Returns a paginated list of environment variables associated with a specific context.

        Args:
            context_id: The unique identifier of the context
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment variables

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_context_environment_variables(
                context_id, page_token=page_token, request_options=request_options
            ),
        )

    def list_contexts(
        self,
        *,
        owner_id: UUID | None = None,
        owner_slug: str | None = None,
        owner_type: OwnerTypeOrStr | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContextList:
        """Returns a paginated list of contexts for a given owner, which can be an organization or account.

        Args:
            owner_id: The unique identifier of the owner
            owner_slug: The slug for the owner
            owner_type: The type of the owner
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved contexts

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_contexts(
                owner_id=owner_id,
                owner_slug=owner_slug,
                owner_type=owner_type,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ContextApiWithRawResponse:
        return self._with_raw_response


class AsyncContextApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContextApiWithRawResponse(client, server, auth)

    async def add_or_update_context_environment_variable(
        self,
        context_id: UUID,
        env_var_name: str,
        body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentVariable:
        """Creates a new environment variable or updates an existing one within the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully added or updated environment variable

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.add_or_update_context_environment_variable(
                context_id, env_var_name, body, request_options=request_options
            ),
        )

    async def create_context(
        self,
        body: CreateContextRequest | CreateContextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Context:
        """Creates a new context for sharing environment variables across projects.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created context

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_context(body, request_options=request_options))

    async def delete_context(
        self, context_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a context and all of its associated environment variables.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted context

        Raises:
            ApiError: Unauthorized Context not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_context(context_id, request_options=request_options))

    async def delete_context_environment_variable(
        self, context_id: UUID, env_var_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes an environment variable from the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted environment variable

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_context_environment_variable(
                context_id, env_var_name, request_options=request_options
            ),
        )

    async def get_context(
        self, context_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Context:
        """Returns a specific context by its unique identifier.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved context

        Raises:
            ApiError: Unauthorized Context not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_context(context_id, request_options=request_options))

    async def list_context_environment_variables(
        self,
        context_id: UUID,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentVariableList:
        """Returns a paginated list of environment variables associated with a specific context.

        Args:
            context_id: The unique identifier of the context
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment variables

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_context_environment_variables(
                context_id, page_token=page_token, request_options=request_options
            ),
        )

    async def list_contexts(
        self,
        *,
        owner_id: UUID | None = None,
        owner_slug: str | None = None,
        owner_type: OwnerTypeOrStr | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContextList:
        """Returns a paginated list of contexts for a given owner, which can be an organization or account.

        Args:
            owner_id: The unique identifier of the owner
            owner_slug: The slug for the owner
            owner_type: The type of the owner
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved contexts

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_contexts(
                owner_id=owner_id,
                owner_slug=owner_slug,
                owner_type=owner_type,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncContextApiWithRawResponse:
        return self._with_raw_response


class ContextApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_or_update_context_environment_variable(
        self,
        context_id: UUID,
        env_var_name: str,
        body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentVariable, AddOrUpdateContextEnvironmentVariableErrorBody]:
        """Creates a new environment variable or updates an existing one within the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/context/{context-id}/environment-variable/{env-var-name}"
            ),
            path_params=[param[UUID]("context-id", context_id), param[str]("env-var-name", env_var_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EnvironmentVariable],
            error_mapper=add_or_update_context_environment_variable_error_mapper,
            request_options=request_options,
        )

    def create_context(
        self,
        body: CreateContextRequest | CreateContextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Context, CreateContextErrorBody]:
        """Creates a new context for sharing environment variables across projects.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContextRequest | CreateContextRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Context],
            error_mapper=create_context_error_mapper,
            request_options=request_options,
        )

    def delete_context(
        self, context_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteContextErrorBody]:
        """Deletes a context and all of its associated environment variables.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context/{context-id}"),
            path_params=[param[UUID]("context-id", context_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_context_error_mapper,
            request_options=request_options,
        )

    def delete_context_environment_variable(
        self, context_id: UUID, env_var_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteContextEnvironmentVariableErrorBody]:
        """Deletes an environment variable from the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/context/{context-id}/environment-variable/{env-var-name}"
            ),
            path_params=[param[UUID]("context-id", context_id), param[str]("env-var-name", env_var_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_context_environment_variable_error_mapper,
            request_options=request_options,
        )

    def get_context(
        self, context_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Context, GetContextErrorBody]:
        """Returns a specific context by its unique identifier.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context/{context-id}"),
            path_params=[param[UUID]("context-id", context_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Context],
            error_mapper=get_context_error_mapper,
            request_options=request_options,
        )

    def list_context_environment_variables(
        self, context_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentVariableList, ListContextEnvironmentVariablesErrorBody]:
        """Returns a paginated list of environment variables associated with a specific context.

        Args:
            context_id: The unique identifier of the context
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/context/{context-id}/environment-variable"
            ),
            path_params=[param[UUID]("context-id", context_id)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EnvironmentVariableList],
            error_mapper=list_context_environment_variables_error_mapper,
            request_options=request_options,
        )

    def list_contexts(
        self,
        *,
        owner_id: UUID | None = None,
        owner_slug: str | None = None,
        owner_type: OwnerTypeOrStr | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContextList, ListContextsErrorBody]:
        """Returns a paginated list of contexts for a given owner, which can be an organization or account.

        Args:
            owner_id: The unique identifier of the owner
            owner_slug: The slug for the owner
            owner_type: The type of the owner
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context"),
            query_params=[
                param[UUID | None]("owner-id", owner_id),
                param[str | None]("owner-slug", owner_slug),
                param[OwnerTypeOrStr | None]("owner-type", owner_type),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ContextList],
            error_mapper=list_contexts_error_mapper,
            request_options=request_options,
        )


class AsyncContextApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_or_update_context_environment_variable(
        self,
        context_id: UUID,
        env_var_name: str,
        body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentVariable, AddOrUpdateContextEnvironmentVariableErrorBody]:
        """Creates a new environment variable or updates an existing one within the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/context/{context-id}/environment-variable/{env-var-name}"
            ),
            path_params=[param[UUID]("context-id", context_id), param[str]("env-var-name", env_var_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EnvironmentVariable],
            error_mapper=add_or_update_context_environment_variable_error_mapper,
            request_options=request_options,
        )

    async def create_context(
        self,
        body: CreateContextRequest | CreateContextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Context, CreateContextErrorBody]:
        """Creates a new context for sharing environment variables across projects.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContextRequest | CreateContextRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Context],
            error_mapper=create_context_error_mapper,
            request_options=request_options,
        )

    async def delete_context(
        self, context_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteContextErrorBody]:
        """Deletes a context and all of its associated environment variables.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context/{context-id}"),
            path_params=[param[UUID]("context-id", context_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_context_error_mapper,
            request_options=request_options,
        )

    async def delete_context_environment_variable(
        self, context_id: UUID, env_var_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteContextEnvironmentVariableErrorBody]:
        """Deletes an environment variable from the specified context.

        Args:
            context_id: The unique identifier of the context
            env_var_name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/context/{context-id}/environment-variable/{env-var-name}"
            ),
            path_params=[param[UUID]("context-id", context_id), param[str]("env-var-name", env_var_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_context_environment_variable_error_mapper,
            request_options=request_options,
        )

    async def get_context(
        self, context_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Context, GetContextErrorBody]:
        """Returns a specific context by its unique identifier.

        Args:
            context_id: The unique identifier of the context
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context/{context-id}"),
            path_params=[param[UUID]("context-id", context_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Context],
            error_mapper=get_context_error_mapper,
            request_options=request_options,
        )

    async def list_context_environment_variables(
        self,
        context_id: UUID,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentVariableList, ListContextEnvironmentVariablesErrorBody]:
        """Returns a paginated list of environment variables associated with a specific context.

        Args:
            context_id: The unique identifier of the context
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/context/{context-id}/environment-variable"
            ),
            path_params=[param[UUID]("context-id", context_id)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EnvironmentVariableList],
            error_mapper=list_context_environment_variables_error_mapper,
            request_options=request_options,
        )

    async def list_contexts(
        self,
        *,
        owner_id: UUID | None = None,
        owner_slug: str | None = None,
        owner_type: OwnerTypeOrStr | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContextList, ListContextsErrorBody]:
        """Returns a paginated list of contexts for a given owner, which can be an organization or account.

        Args:
            owner_id: The unique identifier of the owner
            owner_slug: The slug for the owner
            owner_type: The type of the owner
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/context"),
            query_params=[
                param[UUID | None]("owner-id", owner_id),
                param[str | None]("owner-slug", owner_slug),
                param[OwnerTypeOrStr | None]("owner-type", owner_type),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ContextList],
            error_mapper=list_contexts_error_mapper,
            request_options=request_options,
        )
