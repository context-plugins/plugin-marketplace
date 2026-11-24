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
from ..errors.create_group_error import CreateGroupErrorBody, create_group_error_mapper
from ..errors.get_group_error import GetGroupErrorBody, get_group_error_mapper
from ..errors.list_groups_error import ListGroupsErrorBody, list_groups_error_mapper
from ..models.create_group_request import CreateGroupRequest, CreateGroupRequestDict
from ..models.group import Group
from ..models.identity_api_group_response import IdentityApiGroupResponse
from ..server.server import Server


class Groups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GroupsWithRawResponse(client, server, auth)

    def create_group(
        self,
        organization_name: str,
        body: CreateGroupRequest | CreateGroupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Group:
        """Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and
        control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(self._with_raw_response.create_group(organization_name, body, request_options=request_options))

    def get_group(
        self,
        organization_name: str,
        partition_global_id: str,
        group_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Group:
        """Retrieves a specific user group by its unique identifier within the specified organizational partition.
        Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            group_id: Unique identifier of the group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested group

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_group(
                organization_name, partition_global_id, group_id, request_options=request_options
            ),
        )

    def list_groups(
        self, organization_name: str, partition_global_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IdentityApiGroupResponse:
        """Retrieves all user groups within the specified organizational partition (tenant or organization). Groups
        aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of user groups

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_groups(organization_name, partition_global_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> GroupsWithRawResponse:
        return self._with_raw_response


class AsyncGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGroupsWithRawResponse(client, server, auth)

    async def create_group(
        self,
        organization_name: str,
        body: CreateGroupRequest | CreateGroupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Group:
        """Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and
        control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_group(organization_name, body, request_options=request_options)
        )

    async def get_group(
        self,
        organization_name: str,
        partition_global_id: str,
        group_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Group:
        """Retrieves a specific user group by its unique identifier within the specified organizational partition.
        Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            group_id: Unique identifier of the group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested group

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_group(
                organization_name, partition_global_id, group_id, request_options=request_options
            ),
        )

    async def list_groups(
        self,
        organization_name: str,
        partition_global_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IdentityApiGroupResponse:
        """Retrieves all user groups within the specified organizational partition (tenant or organization). Groups
        aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of user groups

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_groups(
                organization_name, partition_global_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGroupsWithRawResponse:
        return self._with_raw_response


class GroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_group(
        self,
        organization_name: str,
        body: CreateGroupRequest | CreateGroupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, CreateGroupErrorBody]:
        """Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and
        control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/identity_/api/Group"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGroupRequest | CreateGroupRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Group],
            error_mapper=create_group_error_mapper,
            request_options=request_options,
        )

    def get_group(
        self,
        organization_name: str,
        partition_global_id: str,
        group_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, GetGroupErrorBody]:
        """Retrieves a specific user group by its unique identifier within the specified organizational partition.
        Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            group_id: Unique identifier of the group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/identity_/api/Group/{partitionGlobalId}/{groupId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name),
                param[str]("partitionGlobalId", partition_global_id),
                param[str]("groupId", group_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Group],
            error_mapper=get_group_error_mapper,
            request_options=request_options,
        )

    def list_groups(
        self, organization_name: str, partition_global_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IdentityApiGroupResponse, ListGroupsErrorBody]:
        """Retrieves all user groups within the specified organizational partition (tenant or organization). Groups
        aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/identity_/api/Group/{partitionGlobalId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name), param[str]("partitionGlobalId", partition_global_id)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IdentityApiGroupResponse],
            error_mapper=list_groups_error_mapper,
            request_options=request_options,
        )


class AsyncGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_group(
        self,
        organization_name: str,
        body: CreateGroupRequest | CreateGroupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, CreateGroupErrorBody]:
        """Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and
        control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/identity_/api/Group"
            ),
            path_params=[param[str]("organizationName", organization_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateGroupRequest | CreateGroupRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Group],
            error_mapper=create_group_error_mapper,
            request_options=request_options,
        )

    async def get_group(
        self,
        organization_name: str,
        partition_global_id: str,
        group_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Group, GetGroupErrorBody]:
        """Retrieves a specific user group by its unique identifier within the specified organizational partition.
        Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read
        OAuth scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            group_id: Unique identifier of the group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/identity_/api/Group/{partitionGlobalId}/{groupId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name),
                param[str]("partitionGlobalId", partition_global_id),
                param[str]("groupId", group_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Group],
            error_mapper=get_group_error_mapper,
            request_options=request_options,
        )

    async def list_groups(
        self,
        organization_name: str,
        partition_global_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IdentityApiGroupResponse, ListGroupsErrorBody]:
        """Retrieves all user groups within the specified organizational partition (tenant or organization). Groups
        aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth
        scope.

        Args:
            organization_name: The name of the UiPath organization
            partition_global_id: Global partition identifier for the organization or tenant scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_platform_management_audit_logs_api(
                "/{organizationName}/identity_/api/Group/{partitionGlobalId}"
            ),
            path_params=[
                param[str]("organizationName", organization_name), param[str]("partitionGlobalId", partition_global_id)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IdentityApiGroupResponse],
            error_mapper=list_groups_error_mapper,
            request_options=request_options,
        )
