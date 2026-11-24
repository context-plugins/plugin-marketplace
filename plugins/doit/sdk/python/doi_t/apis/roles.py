from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.create_role_error import CreateRoleErrorBody, create_role_error_mapper
from ..errors.delete_role_error import DeleteRoleErrorBody, delete_role_error_mapper
from ..errors.get_role_error import GetRoleErrorBody, get_role_error_mapper
from ..errors.list_roles_error import ListRolesErrorBody, list_roles_error_mapper
from ..errors.update_role_error import UpdateRoleErrorBody, update_role_error_mapper
from ..models.create_role_request import CreateRoleRequest, CreateRoleRequestDict
from ..models.iam_v1_roles_response import IamV1RolesResponse
from ..models.role_doi_t_roles_api import RoleDoiTRolesApi
from ..models.update_role_request import UpdateRoleRequest, UpdateRoleRequestDict
from ..server.server import Server


class Roles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RolesWithRawResponse(client, server, auth)

    def create_role(
        self,
        idempotency_key: str,
        body: CreateRoleRequest | CreateRoleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RoleDoiTRolesApi:
        """Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the
        ``permissions`` values returned by ``GET /iam/v1/roles``. A service account of a parent tenant can create the
        role in a descendant tenant by setting ``X-Tenant-Id`` to that tenant's customer ID. Requires the
        ``Idempotency-Key`` header so a retried request does not create a second role.

        Args:
            idempotency_key: Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same
                body returns the original response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Role created.

        Raises:
            ApiError: Bad Request - Missing, blank or whitespace-padded ``name``, duplicate permission IDs, or a
                permission ID that does not exist or is not available to the customer. A missing ``Idempotency-Key``
                returns ``application/problem+json``. Unauthorized - Invalid API key. Forbidden - The client is not
                authorized to perform the request. Conflict - A role with the same ``name`` already exists for the
                customer. The same ``Idempotency-Key`` still being processed by another request returns
                ``application/problem+json``. Unprocessable Entity - The ``Idempotency-Key`` was already used with a
                different request body. Internal Server Error - Something went wrong with the DoiT API server. ``error``
                is ``Error | ProblemDetails | RawError``."""
        return unwrap(self._with_raw_response.create_role(idempotency_key, body, request_options=request_options))

    def delete_role(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be
        unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - Role deleted.

        Raises:
            ApiError: Bad Request - The role is a preset role. Unauthorized - Invalid API key. Forbidden - The client is
                not authorized to perform the request. Not Found - The role does not exist or belongs to another
                customer. Conflict - The role is still assigned to users or groups, or held as a child tenant role.
                Service Unavailable - Role graph cleanup is temporarily unavailable. Retry the deletion. Internal Server
                Error - Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_role(id_, request_options=request_options))

    def get_role(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> RoleDoiTRolesApi:
        """Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to
        the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The role does not exist or belongs to another customer. Internal Server Error - Something
                went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_role(id_, request_options=request_options))

    def list_roles(self, *, request_options: RequestOptionsOrDict | None = None) -> IamV1RolesResponse:
        """Returns a list of roles.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of roles returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_roles(request_options=request_options))

    def update_role(
        self,
        id_: str,
        body: UpdateRoleRequest | UpdateRoleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RoleDoiTRolesApi:
        """Updates the ``name``, ``description`` and/or ``permissions`` of a custom role. Only the fields present in the
        body change; ``permissions`` replaces the full list when present. Preset roles cannot be modified. A service
        account of a parent tenant can update a descendant tenant's role by setting ``X-Tenant-Id`` to that tenant's
        customer ID.

        Args:
            id_: The unique ID of the role to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role updated.

        Raises:
            ApiError: Bad Request - Empty body, blank or whitespace-padded ``name``, duplicate permission IDs, unknown
                field, a permission ID that does not exist or is not available to the customer, or the role is a preset
                role. Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The role does not exist or belongs to another customer. Conflict - Another role of the
                customer, custom or preset, already has the requested ``name``. Internal Server Error - Something went
                wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_role(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> RolesWithRawResponse:
        return self._with_raw_response


class AsyncRoles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRolesWithRawResponse(client, server, auth)

    async def create_role(
        self,
        idempotency_key: str,
        body: CreateRoleRequest | CreateRoleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RoleDoiTRolesApi:
        """Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the
        ``permissions`` values returned by ``GET /iam/v1/roles``. A service account of a parent tenant can create the
        role in a descendant tenant by setting ``X-Tenant-Id`` to that tenant's customer ID. Requires the
        ``Idempotency-Key`` header so a retried request does not create a second role.

        Args:
            idempotency_key: Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same
                body returns the original response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Role created.

        Raises:
            ApiError: Bad Request - Missing, blank or whitespace-padded ``name``, duplicate permission IDs, or a
                permission ID that does not exist or is not available to the customer. A missing ``Idempotency-Key``
                returns ``application/problem+json``. Unauthorized - Invalid API key. Forbidden - The client is not
                authorized to perform the request. Conflict - A role with the same ``name`` already exists for the
                customer. The same ``Idempotency-Key`` still being processed by another request returns
                ``application/problem+json``. Unprocessable Entity - The ``Idempotency-Key`` was already used with a
                different request body. Internal Server Error - Something went wrong with the DoiT API server. ``error``
                is ``Error | ProblemDetails | RawError``."""
        return unwrap(await self._with_raw_response.create_role(idempotency_key, body, request_options=request_options))

    async def delete_role(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be
        unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content - Role deleted.

        Raises:
            ApiError: Bad Request - The role is a preset role. Unauthorized - Invalid API key. Forbidden - The client is
                not authorized to perform the request. Not Found - The role does not exist or belongs to another
                customer. Conflict - The role is still assigned to users or groups, or held as a child tenant role.
                Service Unavailable - Role graph cleanup is temporarily unavailable. Retry the deletion. Internal Server
                Error - Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_role(id_, request_options=request_options))

    async def get_role(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> RoleDoiTRolesApi:
        """Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to
        the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The role does not exist or belongs to another customer. Internal Server Error - Something
                went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_role(id_, request_options=request_options))

    async def list_roles(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> IamV1RolesResponse:
        """Returns a list of roles.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of roles returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_roles(request_options=request_options))

    async def update_role(
        self,
        id_: str,
        body: UpdateRoleRequest | UpdateRoleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RoleDoiTRolesApi:
        """Updates the ``name``, ``description`` and/or ``permissions`` of a custom role. Only the fields present in the
        body change; ``permissions`` replaces the full list when present. Preset roles cannot be modified. A service
        account of a parent tenant can update a descendant tenant's role by setting ``X-Tenant-Id`` to that tenant's
        customer ID.

        Args:
            id_: The unique ID of the role to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role updated.

        Raises:
            ApiError: Bad Request - Empty body, blank or whitespace-padded ``name``, duplicate permission IDs, unknown
                field, a permission ID that does not exist or is not available to the customer, or the role is a preset
                role. Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The role does not exist or belongs to another customer. Conflict - Another role of the
                customer, custom or preset, already has the requested ``name``. Internal Server Error - Something went
                wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_role(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRolesWithRawResponse:
        return self._with_raw_response


class RolesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_role(
        self,
        idempotency_key: str,
        body: CreateRoleRequest | CreateRoleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RoleDoiTRolesApi, CreateRoleErrorBody]:
        """Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the
        ``permissions`` values returned by ``GET /iam/v1/roles``. A service account of a parent tenant can create the
        role in a descendant tenant by setting ``X-Tenant-Id`` to that tenant's customer ID. Requires the
        ``Idempotency-Key`` header so a retried request does not create a second role.

        Args:
            idempotency_key: Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same
                body returns the original response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/roles"),
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateRoleRequest | CreateRoleRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[RoleDoiTRolesApi],
            error_mapper=create_role_error_mapper,
            request_options=request_options,
        )

    def delete_role(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRoleErrorBody]:
        """Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be
        unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/roles/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_role_error_mapper,
            request_options=request_options,
        )

    def get_role(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RoleDoiTRolesApi, GetRoleErrorBody]:
        """Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to
        the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/roles/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[RoleDoiTRolesApi],
            error_mapper=get_role_error_mapper,
            request_options=request_options,
        )

    def list_roles(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IamV1RolesResponse, ListRolesErrorBody]:
        """Returns a list of roles.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/roles"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[IamV1RolesResponse],
            error_mapper=list_roles_error_mapper,
            request_options=request_options,
        )

    def update_role(
        self,
        id_: str,
        body: UpdateRoleRequest | UpdateRoleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RoleDoiTRolesApi, UpdateRoleErrorBody]:
        """Updates the ``name``, ``description`` and/or ``permissions`` of a custom role. Only the fields present in the
        body change; ``permissions`` replaces the full list when present. Preset roles cannot be modified. A service
        account of a parent tenant can update a descendant tenant's role by setting ``X-Tenant-Id`` to that tenant's
        customer ID.

        Args:
            id_: The unique ID of the role to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/roles/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateRoleRequest | UpdateRoleRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[RoleDoiTRolesApi],
            error_mapper=update_role_error_mapper,
            request_options=request_options,
        )


class AsyncRolesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_role(
        self,
        idempotency_key: str,
        body: CreateRoleRequest | CreateRoleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RoleDoiTRolesApi, CreateRoleErrorBody]:
        """Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the
        ``permissions`` values returned by ``GET /iam/v1/roles``. A service account of a parent tenant can create the
        role in a descendant tenant by setting ``X-Tenant-Id`` to that tenant's customer ID. Requires the
        ``Idempotency-Key`` header so a retried request does not create a second role.

        Args:
            idempotency_key: Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same
                body returns the original response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/iam/v1/roles"),
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateRoleRequest | CreateRoleRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[RoleDoiTRolesApi],
            error_mapper=create_role_error_mapper,
            request_options=request_options,
        )

    async def delete_role(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRoleErrorBody]:
        """Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be
        unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/iam/v1/roles/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_role_error_mapper,
            request_options=request_options,
        )

    async def get_role(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RoleDoiTRolesApi, GetRoleErrorBody]:
        """Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to
        the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting
        ``X-Tenant-Id`` to that tenant's customer ID.

        Args:
            id_: The unique ID of the role.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/roles/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[RoleDoiTRolesApi],
            error_mapper=get_role_error_mapper,
            request_options=request_options,
        )

    async def list_roles(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IamV1RolesResponse, ListRolesErrorBody]:
        """Returns a list of roles.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/iam/v1/roles"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[IamV1RolesResponse],
            error_mapper=list_roles_error_mapper,
            request_options=request_options,
        )

    async def update_role(
        self,
        id_: str,
        body: UpdateRoleRequest | UpdateRoleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RoleDoiTRolesApi, UpdateRoleErrorBody]:
        """Updates the ``name``, ``description`` and/or ``permissions`` of a custom role. Only the fields present in the
        body change; ``permissions`` replaces the full list when present. Preset roles cannot be modified. A service
        account of a parent tenant can update a descendant tenant's role by setting ``X-Tenant-Id`` to that tenant's
        customer ID.

        Args:
            id_: The unique ID of the role to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/iam/v1/roles/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateRoleRequest | UpdateRoleRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[RoleDoiTRolesApi],
            error_mapper=update_role_error_mapper,
            request_options=request_options,
        )
