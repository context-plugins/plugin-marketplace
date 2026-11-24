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
from ..errors.get_group_license_allocation_error import (
    GetGroupLicenseAllocationErrorBody,
    get_group_license_allocation_error_mapper,
)
from ..errors.update_group_license_allocation_error import (
    UpdateGroupLicenseAllocationErrorBody,
    update_group_license_allocation_error_mapper,
)
from ..models.group_license_allocation import GroupLicenseAllocation
from ..models.update_group_license_allocation_request import (
    UpdateGroupLicenseAllocationRequest,
    UpdateGroupLicenseAllocationRequestDict,
)
from ..server.server import Server


class Licenses:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LicensesWithRawResponse(client, server, auth)

    def get_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupLicenseAllocation:
        """Retrieves the user license allocation rule for a specific group within the organization account. Returns the
        license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            License allocation for the group

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_group_license_allocation(
                organization_name, account_id, group_id, request_options=request_options
            ),
        )

    def update_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GroupLicenseAllocation:
        """Allocates or updates user licenses for a specific group. The rule defines which license types members of this
        group are entitled to. This controls the licenses automatically assigned when a member of the group first logs
        in. Requires the PM.License OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            License allocation updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_group_license_allocation(
                organization_name, account_id, group_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> LicensesWithRawResponse:
        return self._with_raw_response


class AsyncLicenses:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLicensesWithRawResponse(client, server, auth)

    async def get_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupLicenseAllocation:
        """Retrieves the user license allocation rule for a specific group within the organization account. Returns the
        license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            License allocation for the group

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group_license_allocation(
                organization_name, account_id, group_id, request_options=request_options
            ),
        )

    async def update_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GroupLicenseAllocation:
        """Allocates or updates user licenses for a specific group. The rule defines which license types members of this
        group are entitled to. This controls the licenses automatically assigned when a member of the group first logs
        in. Requires the PM.License OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            License allocation updated successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_group_license_allocation(
                organization_name, account_id, group_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLicensesWithRawResponse:
        return self._with_raw_response


class LicensesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupLicenseAllocation, GetGroupLicenseAllocationErrorBody]:
        """Retrieves the user license allocation rule for a specific group within the organization account. Returns the
        license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name),
                param[str]("accountId", account_id),
                param[str]("groupId", group_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupLicenseAllocation],
            error_mapper=get_group_license_allocation_error_mapper,
            request_options=request_options,
        )

    def update_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupLicenseAllocation, UpdateGroupLicenseAllocationErrorBody]:
        """Allocates or updates user licenses for a specific group. The rule defines which license types members of this
        group are entitled to. This controls the licenses automatically assigned when a member of the group first logs
        in. Requires the PM.License OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name),
                param[str]("accountId", account_id),
                param[str]("groupId", group_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GroupLicenseAllocation],
            error_mapper=update_group_license_allocation_error_mapper,
            request_options=request_options,
        )


class AsyncLicensesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupLicenseAllocation, GetGroupLicenseAllocationErrorBody]:
        """Retrieves the user license allocation rule for a specific group within the organization account. Returns the
        license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name),
                param[str]("accountId", account_id),
                param[str]("groupId", group_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupLicenseAllocation],
            error_mapper=get_group_license_allocation_error_mapper,
            request_options=request_options,
        )

    async def update_group_license_allocation(
        self,
        organization_name: str,
        account_id: str,
        group_id: str,
        body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GroupLicenseAllocation, UpdateGroupLicenseAllocationErrorBody]:
        """Allocates or updates user licenses for a specific group. The rule defines which license types members of this
        group are entitled to. This controls the licenses automatically assigned when a member of the group first logs
        in. Requires the PM.License OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            account_id: Unique identifier of the organization account
            group_id: Unique identifier of the user group
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name),
                param[str]("accountId", account_id),
                param[str]("groupId", group_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GroupLicenseAllocation],
            error_mapper=update_group_license_allocation_error_mapper,
            request_options=request_options,
        )
