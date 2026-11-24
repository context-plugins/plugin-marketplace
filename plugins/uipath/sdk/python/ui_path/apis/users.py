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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_user_error import AddUserErrorBody, add_user_error_mapper
from ..errors.create_user_error import CreateUserErrorBody, create_user_error_mapper
from ..errors.delete_user_error import DeleteUserErrorBody, delete_user_error_mapper
from ..errors.edit_user_error import EditUserErrorBody, edit_user_error_mapper
from ..errors.get_odata_users_error import GetOdataUsersErrorBody, get_odata_users_error_mapper
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.list_roles2_error import ListRoles2ErrorBody, list_roles2_error_mapper
from ..errors.list_users_error import ListUsersErrorBody, list_users_error_mapper
from ..models.add_user_request import AddUserRequest, AddUserRequestDict
from ..models.create_user_request import CreateUserRequest, CreateUserRequestDict
from ..models.edit_user_request import EditUserRequest, EditUserRequestDict
from ..models.o_data_user_collection import ODataUserCollection
from ..models.roles_response import RolesResponse
from ..models.user import User
from ..models.user2 import User2
from ..models.user_list_response import UserListResponse
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def add_user(
        self, body: AddUserRequest | AddUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> User:
        """Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This
        endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea
        submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User added successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.add_user(body, request_options=request_options))

    def create_user(
        self,
        organization_name: str,
        body: CreateUserRequest | CreateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> User2:
        """Creates a new user account in the UiPath organization. The user will receive an invitation email to set up
        their credentials. The request must include the user's email address, display name, and the tenants or roles to
        initially assign. Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.create_user(organization_name, body, request_options=request_options))

    def delete_user(
        self, organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a user account from the organization by their unique identifier. This action removes the
        user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone.
        Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | ErrorResponse3 | RawError``."""
        return unwrap(self._with_raw_response.delete_user(organization_name, user_id, request_options=request_options))

    def edit_user(
        self, body: EditUserRequest | EditUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> User:
        """Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The
        user is identified by their unique ID in the request body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.edit_user(body, request_options=request_options))

    def get_odata_users(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataUserCollection:
        """Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations,
        and folder memberships. Supports OData filtering and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of users

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_odata_users(
                filter_=filter_, top=top, skip=skip, request_options=request_options
            ),
        )

    def get_user(
        self, organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> User2:
        """Retrieves user account information by the user's unique identifier. Returns user properties including name,
        email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested user account

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | ErrorResponse3 | RawError``."""
        return unwrap(self._with_raw_response.get_user(organization_name, user_id, request_options=request_options))

    def list_roles2(self, *, request_options: RequestOptionsOrDict | None = None) -> RolesResponse:
        """Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling
        what a user can view and perform within the platform. Roles are assigned when adding or editing users.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of available roles

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.list_roles2(request_options=request_options))

    def list_users(
        self, *, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> UserListResponse:
        """Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and
        assigned roles. Used by administrators to manage user assignments and role configurations.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of users

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_users(page=page, page_size=page_size, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def add_user(
        self, body: AddUserRequest | AddUserRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> User:
        """Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This
        endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea
        submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User added successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.add_user(body, request_options=request_options))

    async def create_user(
        self,
        organization_name: str,
        body: CreateUserRequest | CreateUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> User2:
        """Creates a new user account in the UiPath organization. The user will receive an invitation email to set up
        their credentials. The request must include the user's email address, display name, and the tenants or roles to
        initially assign. Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_user(organization_name, body, request_options=request_options)
        )

    async def delete_user(
        self, organization_name: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a user account from the organization by their unique identifier. This action removes the
        user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone.
        Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | ErrorResponse3 | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_user(organization_name, user_id, request_options=request_options)
        )

    async def edit_user(
        self, body: EditUserRequest | EditUserRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> User:
        """Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The
        user is identified by their unique ID in the request body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.edit_user(body, request_options=request_options))

    async def get_odata_users(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataUserCollection:
        """Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations,
        and folder memberships. Supports OData filtering and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of users

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_odata_users(
                filter_=filter_, top=top, skip=skip, request_options=request_options
            ),
        )

    async def get_user(
        self, organization_name: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> User2:
        """Retrieves user account information by the user's unique identifier. Returns user properties including name,
        email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested user account

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | ErrorResponse3 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user(organization_name, user_id, request_options=request_options)
        )

    async def list_roles2(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> RolesResponse:
        """Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling
        what a user can view and perform within the platform. Roles are assigned when adding or editing users.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of available roles

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.list_roles2(request_options=request_options))

    async def list_users(
        self,
        *,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserListResponse:
        """Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and
        assigned roles. Used by administrators to manage user assignments and role configurations.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of users

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_users(page=page, page_size=page_size, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_user(
        self, body: AddUserRequest | AddUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User, AddUserErrorBody]:
        """Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This
        endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea
        submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/adduser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AddUserRequest | AddUserRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[User],
            error_mapper=add_user_error_mapper,
            request_options=request_options,
        )

    def create_user(
        self,
        organization_name: str,
        body: CreateUserRequest | CreateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[User2, CreateUserErrorBody]:
        """Creates a new user account in the UiPath organization. The user will receive an invitation email to set up
        their credentials. The request must include the user's email address, display name, and the tenants or roles to
        initially assign. Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/{organizationName}/identity_/api/User"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateUserRequest | CreateUserRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[User2],
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    def delete_user(
        self, organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Permanently deletes a user account from the organization by their unique identifier. This action removes the
        user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone.
        Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/{organizationName}/identity_/api/User/{userId}"
            ),
            path_params=[param[str]("organizationName", organization_name), param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    def edit_user(
        self, body: EditUserRequest | EditUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User, EditUserErrorBody]:
        """Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The
        user is identified by their unique ID in the request body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/edituser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EditUserRequest | EditUserRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[User],
            error_mapper=edit_user_error_mapper,
            request_options=request_options,
        )

    def get_odata_users(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataUserCollection, GetOdataUsersErrorBody]:
        """Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations,
        and folder memberships. Supports OData filtering and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/odata/Users"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataUserCollection],
            error_mapper=get_odata_users_error_mapper,
            request_options=request_options,
        )

    def get_user(
        self, organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User2, GetUserErrorBody]:
        """Retrieves user account information by the user's unique identifier. Returns user properties including name,
        email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/{organizationName}/identity_/api/User/{userId}"
            ),
            path_params=[param[str]("organizationName", organization_name), param[str]("userId", user_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[User2],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def list_roles2(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RolesResponse, ListRoles2ErrorBody]:
        """Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling
        what a user can view and perform within the platform. Roles are assigned when adding or editing users.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/roles"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[RolesResponse],
            error_mapper=list_roles2_error_mapper,
            request_options=request_options,
        )

    def list_users(
        self, *, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserListResponse, ListUsersErrorBody]:
        """Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and
        assigned roles. Used by administrators to manage user assignments and role configurations.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/users"),
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[UserListResponse],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_user(
        self, body: AddUserRequest | AddUserRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, AddUserErrorBody]:
        """Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This
        endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea
        submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/adduser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AddUserRequest | AddUserRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[User],
            error_mapper=add_user_error_mapper,
            request_options=request_options,
        )

    async def create_user(
        self,
        organization_name: str,
        body: CreateUserRequest | CreateUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[User2, CreateUserErrorBody]:
        """Creates a new user account in the UiPath organization. The user will receive an invitation email to set up
        their credentials. The request must include the user's email address, display name, and the tenants or roles to
        initially assign. Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/{organizationName}/identity_/api/User"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateUserRequest | CreateUserRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[User2],
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    async def delete_user(
        self, organization_name: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Permanently deletes a user account from the organization by their unique identifier. This action removes the
        user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone.
        Requires the PM.Users OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/{organizationName}/identity_/api/User/{userId}"
            ),
            path_params=[param[str]("organizationName", organization_name), param[str]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    async def edit_user(
        self, body: EditUserRequest | EditUserRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, EditUserErrorBody]:
        """Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The
        user is identified by their unique ID in the request body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/edituser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EditUserRequest | EditUserRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[User],
            error_mapper=edit_user_error_mapper,
            request_options=request_options,
        )

    async def get_odata_users(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataUserCollection, GetOdataUsersErrorBody]:
        """Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations,
        and folder memberships. Supports OData filtering and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/odata/Users"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataUserCollection],
            error_mapper=get_odata_users_error_mapper,
            request_options=request_options,
        )

    async def get_user(
        self, organization_name: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User2, GetUserErrorBody]:
        """Retrieves user account information by the user's unique identifier. Returns user properties including name,
        email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            user_id: Unique identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api(
                "/{organizationName}/identity_/api/User/{userId}"
            ),
            path_params=[param[str]("organizationName", organization_name), param[str]("userId", user_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[User2],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def list_roles2(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RolesResponse, ListRoles2ErrorBody]:
        """Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling
        what a user can view and perform within the platform. Roles are assigned when adding or editing users.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/roles"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[RolesResponse],
            error_mapper=list_roles2_error_mapper,
            request_options=request_options,
        )

    async def list_users(
        self,
        *,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserListResponse, ListUsersErrorBody]:
        """Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and
        assigned roles. Used by administrators to manage user assignments and role configurations.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/users"),
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[UserListResponse],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )
