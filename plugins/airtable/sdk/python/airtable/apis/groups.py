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
from ..errors.create_scim_group_error import CreateScimGroupErrorBody, create_scim_group_error_mapper
from ..errors.delete_scim_group_error import DeleteScimGroupErrorBody, delete_scim_group_error_mapper
from ..errors.get_scim_group_error import GetScimGroupErrorBody, get_scim_group_error_mapper
from ..errors.list_scim_groups_error import ListScimGroupsErrorBody, list_scim_groups_error_mapper
from ..errors.replace_scim_group_error import ReplaceScimGroupErrorBody, replace_scim_group_error_mapper
from ..errors.update_scim_group_error import UpdateScimGroupErrorBody, update_scim_group_error_mapper
from ..models.scim_group import ScimGroup
from ..models.scim_group_create_request import ScimGroupCreateRequest, ScimGroupCreateRequestDict
from ..models.scim_group_list_response import ScimGroupListResponse
from ..models.scim_patch_request import ScimPatchRequest, ScimPatchRequestDict
from ..server.server import Server


class Groups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GroupsWithRawResponse(client, server, auth)

    def create_scim_group(
        self,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access
        management.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SCIM group resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. A group with the same
                displayName already exists. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.create_scim_group(body, request_options=request_options))

    def delete_scim_group(self, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from
        the group.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The group was successfully deleted. No content returned.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.delete_scim_group(group_id, request_options=request_options))

    def get_scim_group(self, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ScimGroup:
        """Retrieves a single SCIM group resource by its unique identifier, including its member list.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested SCIM group resource.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.get_scim_group(group_id, request_options=request_options))

    def list_scim_groups(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroupListResponse:
        """Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination
        using startIndex and count.

        Args:
            filter_: SCIM filter expression (e.g., displayName eq "Engineering").
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing group resources.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.list_scim_groups(
                filter_=filter_, start_index=start_index, count=count, request_options=request_options
            ),
        )

    def replace_scim_group(
        self,
        group_id: str,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in
        the request.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The replaced SCIM group resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.replace_scim_group(group_id, body, request_options=request_options))

    def update_scim_group(
        self,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members
        from the group without replacing the entire resource.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM group resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.update_scim_group(group_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> GroupsWithRawResponse:
        return self._with_raw_response


class AsyncGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGroupsWithRawResponse(client, server, auth)

    async def create_scim_group(
        self,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access
        management.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SCIM group resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. A group with the same
                displayName already exists. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.create_scim_group(body, request_options=request_options))

    async def delete_scim_group(
        self, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from
        the group.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The group was successfully deleted. No content returned.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.delete_scim_group(group_id, request_options=request_options))

    async def get_scim_group(
        self, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ScimGroup:
        """Retrieves a single SCIM group resource by its unique identifier, including its member list.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested SCIM group resource.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. The requested SCIM resource was not found. Rate limit exceeded. ``error`` is
                ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.get_scim_group(group_id, request_options=request_options))

    async def list_scim_groups(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroupListResponse:
        """Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination
        using startIndex and count.

        Args:
            filter_: SCIM filter expression (e.g., displayName eq "Engineering").
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing group resources.

        Raises:
            ApiError: SCIM authentication token is missing or invalid. The authenticated token does not have SCIM
                provisioning permission. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_scim_groups(
                filter_=filter_, start_index=start_index, count=count, request_options=request_options
            ),
        )

    async def replace_scim_group(
        self,
        group_id: str,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in
        the request.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The replaced SCIM group resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.replace_scim_group(group_id, body, request_options=request_options))

    async def update_scim_group(
        self,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members
        from the group without replacing the entire resource.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM group resource.

        Raises:
            ApiError: The request body is malformed or contains invalid data. SCIM authentication token is missing or
                invalid. The authenticated token does not have SCIM provisioning permission. The requested SCIM resource
                was not found. Rate limit exceeded. ``error`` is ``ScimError | RawError``."""
        return unwrap(await self._with_raw_response.update_scim_group(group_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGroupsWithRawResponse:
        return self._with_raw_response


class GroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_scim_group(
        self,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, CreateScimGroupErrorBody]:
        """Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access
        management.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_airtable_scim_groups_api("/Groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroupCreateRequest | ScimGroupCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=create_scim_group_error_mapper,
            request_options=request_options,
        )

    def delete_scim_group(
        self, group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteScimGroupErrorBody]:
        """Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from
        the group.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_scim_group_error_mapper,
            request_options=request_options,
        )

    def get_scim_group(
        self, group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimGroup, GetScimGroupErrorBody]:
        """Retrieves a single SCIM group resource by its unique identifier, including its member list.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=get_scim_group_error_mapper,
            request_options=request_options,
        )

    def list_scim_groups(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroupListResponse, ListScimGroupsErrorBody]:
        """Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination
        using startIndex and count.

        Args:
            filter_: SCIM filter expression (e.g., displayName eq "Engineering").
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Groups"),
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("startIndex", start_index),
                param[int | None]("count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroupListResponse],
            error_mapper=list_scim_groups_error_mapper,
            request_options=request_options,
        )

    def replace_scim_group(
        self,
        group_id: str,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, ReplaceScimGroupErrorBody]:
        """Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in
        the request.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroupCreateRequest | ScimGroupCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=replace_scim_group_error_mapper,
            request_options=request_options,
        )

    def update_scim_group(
        self,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, UpdateScimGroupErrorBody]:
        """Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members
        from the group without replacing the entire resource.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=update_scim_group_error_mapper,
            request_options=request_options,
        )


class AsyncGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_scim_group(
        self,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, CreateScimGroupErrorBody]:
        """Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access
        management.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_airtable_scim_groups_api("/Groups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroupCreateRequest | ScimGroupCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=create_scim_group_error_mapper,
            request_options=request_options,
        )

    async def delete_scim_group(
        self, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteScimGroupErrorBody]:
        """Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from
        the group.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_scim_group_error_mapper,
            request_options=request_options,
        )

    async def get_scim_group(
        self, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScimGroup, GetScimGroupErrorBody]:
        """Retrieves a single SCIM group resource by its unique identifier, including its member list.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=get_scim_group_error_mapper,
            request_options=request_options,
        )

    async def list_scim_groups(
        self,
        *,
        filter_: str | None = None,
        start_index: int | None = 1,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroupListResponse, ListScimGroupsErrorBody]:
        """Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination
        using startIndex and count.

        Args:
            filter_: SCIM filter expression (e.g., displayName eq "Engineering").
            start_index: The 1-based index of the first result to return.
            count: The maximum number of results to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_airtable_scim_groups_api("/Groups"),
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("startIndex", start_index),
                param[int | None]("count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroupListResponse],
            error_mapper=list_scim_groups_error_mapper,
            request_options=request_options,
        )

    async def replace_scim_group(
        self,
        group_id: str,
        body: ScimGroupCreateRequest | ScimGroupCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, ReplaceScimGroupErrorBody]:
        """Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in
        the request.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroupCreateRequest | ScimGroupCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=replace_scim_group_error_mapper,
            request_options=request_options,
        )

    async def update_scim_group(
        self,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, UpdateScimGroupErrorBody]:
        """Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members
        from the group without replacing the entire resource.

        Args:
            group_id: The unique identifier of the SCIM group resource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_airtable_scim_groups_api("/Groups/{groupId}"),
            path_params=[param[str]("groupId", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=update_scim_group_error_mapper,
            request_options=request_options,
        )
