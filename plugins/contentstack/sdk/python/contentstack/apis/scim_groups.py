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
from ..models.scim_group import ScimGroup, ScimGroupDict
from ..models.scim_list_response import ScimListResponse
from ..models.scim_patch_request import ScimPatchRequest, ScimPatchRequestDict
from ..server.server import Server


class ScimGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScimGroupsWithRawResponse(client, server, auth)

    def create_scim_group(
        self,
        organization_uid: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and
        stacks in Contentstack to control member access permissions.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SCIM group resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.create_scim_group(organization_uid, body, request_options=request_options)
        )

    def delete_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user
        accounts but lose the role permissions granted by the group mapping.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group deleted successfully.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_scim_group(organization_uid, group_id, request_options=request_options)
        )

    def get_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ScimGroup:
        """Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SCIM group resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.get_scim_group(organization_uid, group_id, request_options=request_options)
        )

    def list_scim_groups(
        self, organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ScimListResponse:
        """Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        displayName for group lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching groups. Example: displayName eq "Editors"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing group resources.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.list_scim_groups(organization_uid, filter_=filter_, request_options=request_options)
        )

    def replace_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete
        group membership from the IdP.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM group resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.replace_scim_group(
                organization_uid, group_id, body, request_options=request_options
            ),
        )

    def update_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual
        members from the group without replacing the entire membership list.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM group resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.update_scim_group(organization_uid, group_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ScimGroupsWithRawResponse:
        return self._with_raw_response


class AsyncScimGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScimGroupsWithRawResponse(client, server, auth)

    async def create_scim_group(
        self,
        organization_uid: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and
        stacks in Contentstack to control member access permissions.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created SCIM group resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_scim_group(organization_uid, body, request_options=request_options)
        )

    async def delete_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user
        accounts but lose the role permissions granted by the group mapping.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group deleted successfully.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_scim_group(organization_uid, group_id, request_options=request_options)
        )

    async def get_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ScimGroup:
        """Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SCIM group resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_scim_group(organization_uid, group_id, request_options=request_options)
        )

    async def list_scim_groups(
        self,
        organization_uid: str,
        *,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimListResponse:
        """Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        displayName for group lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching groups. Example: displayName eq "Editors"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing group resources.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_scim_groups(
                organization_uid, filter_=filter_, request_options=request_options
            ),
        )

    async def replace_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete
        group membership from the IdP.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM group resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_scim_group(
                organization_uid, group_id, body, request_options=request_options
            ),
        )

    async def update_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimGroup:
        """Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual
        members from the group without replacing the entire membership list.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM group resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_scim_group(
                organization_uid, group_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncScimGroupsWithRawResponse:
        return self._with_raw_response


class ScimGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_scim_group(
        self,
        organization_uid: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, CreateScimGroupErrorBody]:
        """Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and
        stacks in Contentstack to control member access permissions.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroup | ScimGroupDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=create_scim_group_error_mapper,
            request_options=request_options,
        )

    def delete_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteScimGroupErrorBody]:
        """Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user
        accounts but lose the role permissions granted by the group mapping.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_scim_group_error_mapper,
            request_options=request_options,
        )

    def get_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimGroup, GetScimGroupErrorBody]:
        """Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=get_scim_group_error_mapper,
            request_options=request_options,
        )

    def list_scim_groups(
        self, organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimListResponse, ListScimGroupsErrorBody]:
        """Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        displayName for group lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching groups. Example: displayName eq "Editors"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimListResponse],
            error_mapper=list_scim_groups_error_mapper,
            request_options=request_options,
        )

    def replace_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, ReplaceScimGroupErrorBody]:
        """Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete
        group membership from the IdP.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroup | ScimGroupDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=replace_scim_group_error_mapper,
            request_options=request_options,
        )

    def update_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, UpdateScimGroupErrorBody]:
        """Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual
        members from the group without replacing the entire membership list.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimGroup],
            error_mapper=update_scim_group_error_mapper,
            request_options=request_options,
        )


class AsyncScimGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_scim_group(
        self,
        organization_uid: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, CreateScimGroupErrorBody]:
        """Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and
        stacks in Contentstack to control member access permissions.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroup | ScimGroupDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=create_scim_group_error_mapper,
            request_options=request_options,
        )

    async def delete_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteScimGroupErrorBody]:
        """Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user
        accounts but lose the role permissions granted by the group mapping.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_scim_group_error_mapper,
            request_options=request_options,
        )

    async def get_scim_group(
        self, organization_uid: str, group_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScimGroup, GetScimGroupErrorBody]:
        """Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=get_scim_group_error_mapper,
            request_options=request_options,
        )

    async def list_scim_groups(
        self,
        organization_uid: str,
        *,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimListResponse, ListScimGroupsErrorBody]:
        """Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        displayName for group lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching groups. Example: displayName eq "Editors"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimListResponse],
            error_mapper=list_scim_groups_error_mapper,
            request_options=request_options,
        )

    async def replace_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimGroup | ScimGroupDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, ReplaceScimGroupErrorBody]:
        """Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete
        group membership from the IdP.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimGroup | ScimGroupDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=replace_scim_group_error_mapper,
            request_options=request_options,
        )

    async def update_scim_group(
        self,
        organization_uid: str,
        group_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimGroup, UpdateScimGroupErrorBody]:
        """Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual
        members from the group without replacing the entire membership list.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            group_id: The SCIM group ID of the group within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Groups/{group_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("group_id", group_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimGroup],
            error_mapper=update_scim_group_error_mapper,
            request_options=request_options,
        )
