from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_stack_error import CreateStackErrorBody, create_stack_error_mapper
from ..errors.delete_stack_error import DeleteStackErrorBody, delete_stack_error_mapper
from ..errors.get_all_stacks_error import GetAllStacksErrorBody, get_all_stacks_error_mapper
from ..errors.get_stack_error import GetStackErrorBody, get_stack_error_mapper
from ..errors.update_stack_error import UpdateStackErrorBody, update_stack_error_mapper
from ..models.create_stack_request import CreateStackRequest, CreateStackRequestDict
from ..models.stack import Stack
from ..models.stack_list import StackList
from ..models.update_stack_request import UpdateStackRequest, UpdateStackRequestDict
from ..server.server import Server


class Stacks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StacksWithRawResponse(client, server, auth)

    def create_stack(
        self,
        organization_uid: str,
        body: CreateStackRequest | CreateStackRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stack:
        """Creates a new Contentstack stack within an organization. A stack is an independent repository for content,
        assets, and configuration within a Contentstack account.

        Args:
            organization_uid: The UID of the organization in which to create the stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created stack.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.create_stack(organization_uid, body, request_options=request_options))

    def delete_stack(self, api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a stack and all its contents. This action is irreversible and will remove all content
        types, entries, assets, and configuration from the stack.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stack deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.delete_stack(api_key, request_options=request_options))

    def get_all_stacks(self, *, request_options: RequestOptionsOrDict | None = None) -> StackList:
        """Returns all stacks accessible to the authenticated user, optionally filtered by organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of accessible stacks.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.get_all_stacks(request_options=request_options))

    def get_stack(self, api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> Stack:
        """Retrieves details for a specific stack identified by its API key, including configuration, plan, and region
        information.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested stack details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.get_stack(api_key, request_options=request_options))

    def update_stack(
        self,
        api_key: str,
        body: UpdateStackRequest | UpdateStackRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stack:
        """Updates settings and metadata for a specific stack such as name, description, and master locale
        configuration.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated stack object.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.update_stack(api_key, body, request_options=request_options))

    @property
    def with_raw_response(self) -> StacksWithRawResponse:
        return self._with_raw_response


class AsyncStacks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStacksWithRawResponse(client, server, auth)

    async def create_stack(
        self,
        organization_uid: str,
        body: CreateStackRequest | CreateStackRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Stack:
        """Creates a new Contentstack stack within an organization. A stack is an independent repository for content,
        assets, and configuration within a Contentstack account.

        Args:
            organization_uid: The UID of the organization in which to create the stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created stack.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            await self._with_raw_response.create_stack(organization_uid, body, request_options=request_options)
        )

    async def delete_stack(self, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a stack and all its contents. This action is irreversible and will remove all content
        types, entries, assets, and configuration from the stack.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stack deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.delete_stack(api_key, request_options=request_options))

    async def get_all_stacks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> StackList:
        """Returns all stacks accessible to the authenticated user, optionally filtered by organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of accessible stacks.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.get_all_stacks(request_options=request_options))

    async def get_stack(self, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Stack:
        """Retrieves details for a specific stack identified by its API key, including configuration, plan, and region
        information.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested stack details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.get_stack(api_key, request_options=request_options))

    async def update_stack(
        self,
        api_key: str,
        body: UpdateStackRequest | UpdateStackRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Stack:
        """Updates settings and metadata for a specific stack such as name, description, and master locale
        configuration.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated stack object.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.update_stack(api_key, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStacksWithRawResponse:
        return self._with_raw_response


class StacksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_stack(
        self,
        organization_uid: str,
        body: CreateStackRequest | CreateStackRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stack, CreateStackErrorBody]:
        """Creates a new Contentstack stack within an organization. A stack is an independent repository for content,
        assets, and configuration within a Contentstack account.

        Args:
            organization_uid: The UID of the organization in which to create the stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_environments_api("/stacks"),
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStackRequest | CreateStackRequestDict](body),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[Stack],
            error_mapper=create_stack_error_mapper,
            request_options=request_options,
        )

    def delete_stack(
        self, api_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStackErrorBody]:
        """Permanently deletes a stack and all its contents. This action is irreversible and will remove all content
        types, entries, assets, and configuration from the stack.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_environments_api("/stacks/{api_key}"),
            path_params=[param[str]("api_key", api_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=empty_response,
            error_mapper=delete_stack_error_mapper,
            request_options=request_options,
        )

    def get_all_stacks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StackList, GetAllStacksErrorBody]:
        """Returns all stacks accessible to the authenticated user, optionally filtered by organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/stacks"),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[StackList],
            error_mapper=get_all_stacks_error_mapper,
            request_options=request_options,
        )

    def get_stack(
        self, api_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Stack, GetStackErrorBody]:
        """Retrieves details for a specific stack identified by its API key, including configuration, plan, and region
        information.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/stacks/{api_key}"),
            path_params=[param[str]("api_key", api_key)],
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[Stack],
            error_mapper=get_stack_error_mapper,
            request_options=request_options,
        )

    def update_stack(
        self,
        api_key: str,
        body: UpdateStackRequest | UpdateStackRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stack, UpdateStackErrorBody]:
        """Updates settings and metadata for a specific stack such as name, description, and master locale
        configuration.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_environments_api("/stacks/{api_key}"),
            path_params=[param[str]("api_key", api_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStackRequest | UpdateStackRequestDict](body),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[Stack],
            error_mapper=update_stack_error_mapper,
            request_options=request_options,
        )


class AsyncStacksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_stack(
        self,
        organization_uid: str,
        body: CreateStackRequest | CreateStackRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Stack, CreateStackErrorBody]:
        """Creates a new Contentstack stack within an organization. A stack is an independent repository for content,
        assets, and configuration within a Contentstack account.

        Args:
            organization_uid: The UID of the organization in which to create the stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_environments_api("/stacks"),
            headers=[param[str]("organization_uid", organization_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateStackRequest | CreateStackRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[Stack],
            error_mapper=create_stack_error_mapper,
            request_options=request_options,
        )

    async def delete_stack(
        self, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteStackErrorBody]:
        """Permanently deletes a stack and all its contents. This action is irreversible and will remove all content
        types, entries, assets, and configuration from the stack.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_environments_api("/stacks/{api_key}"),
            path_params=[param[str]("api_key", api_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_empty_response,
            error_mapper=delete_stack_error_mapper,
            request_options=request_options,
        )

    async def get_all_stacks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StackList, GetAllStacksErrorBody]:
        """Returns all stacks accessible to the authenticated user, optionally filtered by organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/stacks"),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[StackList],
            error_mapper=get_all_stacks_error_mapper,
            request_options=request_options,
        )

    async def get_stack(
        self, api_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Stack, GetStackErrorBody]:
        """Retrieves details for a specific stack identified by its API key, including configuration, plan, and region
        information.

        Args:
            api_key: The API key identifying the Contentstack stack.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/stacks/{api_key}"),
            path_params=[param[str]("api_key", api_key)],
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[Stack],
            error_mapper=get_stack_error_mapper,
            request_options=request_options,
        )

    async def update_stack(
        self,
        api_key: str,
        body: UpdateStackRequest | UpdateStackRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Stack, UpdateStackErrorBody]:
        """Updates settings and metadata for a specific stack such as name, description, and master locale
        configuration.

        Args:
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_environments_api("/stacks/{api_key}"),
            path_params=[param[str]("api_key", api_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStackRequest | UpdateStackRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[Stack],
            error_mapper=update_stack_error_mapper,
            request_options=request_options,
        )
