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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_user_permission_error import CreateUserPermissionErrorBody, create_user_permission_error_mapper
from ..errors.list_permission_sets_error import ListPermissionSetsErrorBody, list_permission_sets_error_mapper
from ..errors.list_user_permissions_error import ListUserPermissionsErrorBody, list_user_permissions_error_mapper
from ..models.companies_api_permission_sets_response import CompaniesApiPermissionSetsResponse
from ..models.companies_api_users_api_user_permissions_request import (
    CompaniesApiUsersApiUserPermissionsRequest,
    CompaniesApiUsersApiUserPermissionsRequestDict,
)
from ..models.companies_api_users_api_user_permissions_response import CompaniesApiUsersApiUserPermissionsResponse
from ..models.user_permission import UserPermission
from ..server.server import Server


class PermissionSets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PermissionSetsWithRawResponse(client, server, auth)

    def create_user_permission(
        self,
        company_id: UUID,
        user_id: UUID,
        body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UserPermission:
        """Assigns a permission set to the specified user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Permission set assigned

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_user_permission(company_id, user_id, body, request_options=request_options)
        )

    def list_permission_sets(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiPermissionSetsResponse:
        """Returns a list of available permission sets.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved permission sets

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_permission_sets(company_id, request_options=request_options))

    def list_user_permissions(
        self, company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiUsersApiUserPermissionsResponse:
        """Returns permission sets assigned to the user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved user permissions

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_user_permissions(company_id, user_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PermissionSetsWithRawResponse:
        return self._with_raw_response


class AsyncPermissionSets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPermissionSetsWithRawResponse(client, server, auth)

    async def create_user_permission(
        self,
        company_id: UUID,
        user_id: UUID,
        body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UserPermission:
        """Assigns a permission set to the specified user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Permission set assigned

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_user_permission(
                company_id, user_id, body, request_options=request_options
            ),
        )

    async def list_permission_sets(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiPermissionSetsResponse:
        """Returns a list of available permission sets.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved permission sets

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_permission_sets(company_id, request_options=request_options))

    async def list_user_permissions(
        self, company_id: UUID, user_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiUsersApiUserPermissionsResponse:
        """Returns permission sets assigned to the user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved user permissions

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_user_permissions(company_id, user_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPermissionSetsWithRawResponse:
        return self._with_raw_response


class PermissionSetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_user_permission(
        self,
        company_id: UUID,
        user_id: UUID,
        body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UserPermission, CreateUserPermissionErrorBody]:
        """Assigns a permission set to the specified user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})/userPermissions"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict](
                body
            ),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[UserPermission],
            error_mapper=create_user_permission_error_mapper,
            request_options=request_options,
        )

    def list_permission_sets(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiPermissionSetsResponse, ListPermissionSetsErrorBody]:
        """Returns a list of available permission sets.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/permissionSets"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiPermissionSetsResponse],
            error_mapper=list_permission_sets_error_mapper,
            request_options=request_options,
        )

    def list_user_permissions(
        self, company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiUsersApiUserPermissionsResponse, ListUserPermissionsErrorBody]:
        """Returns permission sets assigned to the user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})/userPermissions"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiUsersApiUserPermissionsResponse],
            error_mapper=list_user_permissions_error_mapper,
            request_options=request_options,
        )


class AsyncPermissionSetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_user_permission(
        self,
        company_id: UUID,
        user_id: UUID,
        body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UserPermission, CreateUserPermissionErrorBody]:
        """Assigns a permission set to the specified user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})/userPermissions"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[UserPermission],
            error_mapper=create_user_permission_error_mapper,
            request_options=request_options,
        )

    async def list_permission_sets(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiPermissionSetsResponse, ListPermissionSetsErrorBody]:
        """Returns a list of available permission sets.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/permissionSets"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiPermissionSetsResponse],
            error_mapper=list_permission_sets_error_mapper,
            request_options=request_options,
        )

    async def list_user_permissions(
        self, company_id: UUID, user_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiUsersApiUserPermissionsResponse, ListUserPermissionsErrorBody]:
        """Returns permission sets assigned to the user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})/userPermissions"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiUsersApiUserPermissionsResponse],
            error_mapper=list_user_permissions_error_mapper,
            request_options=request_options,
        )
