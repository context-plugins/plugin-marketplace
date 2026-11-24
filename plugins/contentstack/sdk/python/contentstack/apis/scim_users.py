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
from ..errors.create_scim_user_error import CreateScimUserErrorBody, create_scim_user_error_mapper
from ..errors.get_scim_user_error import GetScimUserErrorBody, get_scim_user_error_mapper
from ..errors.list_scim_users_error import ListScimUsersErrorBody, list_scim_users_error_mapper
from ..errors.replace_scim_user_error import ReplaceScimUserErrorBody, replace_scim_user_error_mapper
from ..errors.update_scim_user_error import UpdateScimUserErrorBody, update_scim_user_error_mapper
from ..models.scim_list_response import ScimListResponse
from ..models.scim_patch_request import ScimPatchRequest, ScimPatchRequestDict
from ..models.scim_user import ScimUser, ScimUserDict
from ..server.server import Server


class ScimUsers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScimUsersWithRawResponse(client, server, auth)

    def create_scim_user(
        self,
        organization_uid: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes
        provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify
        otherwise.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly provisioned SCIM user resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. A user with this userName already exists. ``error`` is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.create_scim_user(organization_uid, body, request_options=request_options))

    def get_scim_user(
        self, organization_uid: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ScimUser:
        """Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SCIM user resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(self._with_raw_response.get_scim_user(organization_uid, user_id, request_options=request_options))

    def list_scim_users(
        self, organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ScimListResponse:
        """Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        userName (email address) using the filter query parameter for user lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching users. Example: userName eq "user@example.com"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing user resources.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.list_scim_users(organization_uid, filter_=filter_, request_options=request_options)
        )

    def replace_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request
        will be cleared or reset to defaults following SCIM 2.0 PUT semantics.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM user resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. The requested SCIM resource was not found. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.replace_scim_user(organization_uid, user_id, body, request_options=request_options)
        )

    def update_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or
        deactivate users by setting the active attribute, or to update specific profile attributes without replacing the
        entire resource.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM user resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. The requested SCIM resource was not found. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            self._with_raw_response.update_scim_user(organization_uid, user_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ScimUsersWithRawResponse:
        return self._with_raw_response


class AsyncScimUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScimUsersWithRawResponse(client, server, auth)

    async def create_scim_user(
        self,
        organization_uid: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes
        provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify
        otherwise.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly provisioned SCIM user resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. A user with this userName already exists. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_scim_user(organization_uid, body, request_options=request_options)
        )

    async def get_scim_user(
        self, organization_uid: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ScimUser:
        """Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SCIM user resource.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. The requested SCIM resource was not found. ``error``
                is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_scim_user(organization_uid, user_id, request_options=request_options)
        )

    async def list_scim_users(
        self,
        organization_uid: str,
        *,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimListResponse:
        """Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        userName (email address) using the filter query parameter for user lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching users. Example: userName eq "user@example.com"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A SCIM ListResponse containing user resources.

        Raises:
            ApiError: The SCIM bearer token is missing or invalid. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_scim_users(
                organization_uid, filter_=filter_, request_options=request_options
            ),
        )

    async def replace_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request
        will be cleared or reset to defaults following SCIM 2.0 PUT semantics.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM user resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. The requested SCIM resource was not found. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_scim_user(
                organization_uid, user_id, body, request_options=request_options
            ),
        )

    async def update_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScimUser:
        """Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or
        deactivate users by setting the active attribute, or to update specific profile attributes without replacing the
        entire resource.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated SCIM user resource.

        Raises:
            ApiError: The SCIM request is malformed or contains invalid attribute values. The SCIM bearer token is
                missing or invalid. The requested SCIM resource was not found. ``error`` is ``ScimError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_scim_user(
                organization_uid, user_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncScimUsersWithRawResponse:
        return self._with_raw_response


class ScimUsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_scim_user(
        self,
        organization_uid: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, CreateScimUserErrorBody]:
        """Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes
        provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify
        otherwise.

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
                "/scim/v2.0/organizations/{organization_uid}/Users"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUser | ScimUserDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=create_scim_user_error_mapper,
            request_options=request_options,
        )

    def get_scim_user(
        self, organization_uid: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimUser, GetScimUserErrorBody]:
        """Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("user_id", user_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=get_scim_user_error_mapper,
            request_options=request_options,
        )

    def list_scim_users(
        self, organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimListResponse, ListScimUsersErrorBody]:
        """Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        userName (email address) using the filter query parameter for user lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching users. Example: userName eq "user@example.com"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimListResponse],
            error_mapper=list_scim_users_error_mapper,
            request_options=request_options,
        )

    def replace_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, ReplaceScimUserErrorBody]:
        """Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request
        will be cleared or reset to defaults following SCIM 2.0 PUT semantics.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUser | ScimUserDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=replace_scim_user_error_mapper,
            request_options=request_options,
        )

    def update_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, UpdateScimUserErrorBody]:
        """Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or
        deactivate users by setting the active attribute, or to update specific profile attributes without replacing the
        entire resource.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScimUser],
            error_mapper=update_scim_user_error_mapper,
            request_options=request_options,
        )


class AsyncScimUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_scim_user(
        self,
        organization_uid: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, CreateScimUserErrorBody]:
        """Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes
        provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify
        otherwise.

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
                "/scim/v2.0/organizations/{organization_uid}/Users"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUser | ScimUserDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=create_scim_user_error_mapper,
            request_options=request_options,
        )

    async def get_scim_user(
        self, organization_uid: str, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScimUser, GetScimUserErrorBody]:
        """Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("user_id", user_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=get_scim_user_error_mapper,
            request_options=request_options,
        )

    async def list_scim_users(
        self,
        organization_uid: str,
        *,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimListResponse, ListScimUsersErrorBody]:
        """Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by
        userName (email address) using the filter query parameter for user lookup during IdP sync operations.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            filter_: SCIM filter expression for searching users. Example: userName eq "user@example.com"
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimListResponse],
            error_mapper=list_scim_users_error_mapper,
            request_options=request_options,
        )

    async def replace_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimUser | ScimUserDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, ReplaceScimUserErrorBody]:
        """Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request
        will be cleared or reset to defaults following SCIM 2.0 PUT semantics.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimUser | ScimUserDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=replace_scim_user_error_mapper,
            request_options=request_options,
        )

    async def update_scim_user(
        self,
        organization_uid: str,
        user_id: str,
        body: ScimPatchRequest | ScimPatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScimUser, UpdateScimUserErrorBody]:
        """Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or
        deactivate users by setting the active attribute, or to update specific profile attributes without replacing the
        entire resource.

        Args:
            organization_uid: The unique identifier of the Contentstack organization.
            user_id: The SCIM user ID of the user within the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_contentstack_scim_scim_groups_api(
                "/scim/v2.0/organizations/{organization_uid}/Users/{user_id}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScimPatchRequest | ScimPatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScimUser],
            error_mapper=update_scim_user_error_mapper,
            request_options=request_options,
        )
