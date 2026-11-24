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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_resource_permission_error import GetResourcePermissionErrorBody, get_resource_permission_error_mapper
from ..errors.update_resource_permission_error import (
    UpdateResourcePermissionErrorBody,
    update_resource_permission_error_mapper,
)
from ..models.enums.resource_type import ResourceTypeOrStr
from ..models.resource_permissions_response import ResourcePermissionsResponse
from ..models.sharing_v1_request import SharingV1Request, SharingV1RequestDict
from ..server.server import Server


class Sharing:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SharingWithRawResponse(client, server, auth)

    def get_resource_permission(
        self, resource_type: ResourceTypeOrStr, resource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ResourcePermissionsResponse:
        """Returns the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Resource permissions returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_resource_permission(resource_type, resource_id, request_options=request_options)
        )

    def update_resource_permission(
        self,
        resource_type: ResourceTypeOrStr,
        resource_id: str,
        *,
        body: SharingV1Request | SharingV1RequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResourcePermissionsResponse:
        """Updates the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Resource permissions configuration updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_resource_permission(
                resource_type, resource_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SharingWithRawResponse:
        return self._with_raw_response


class AsyncSharing:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSharingWithRawResponse(client, server, auth)

    async def get_resource_permission(
        self,
        resource_type: ResourceTypeOrStr,
        resource_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResourcePermissionsResponse:
        """Returns the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Resource permissions returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_resource_permission(
                resource_type, resource_id, request_options=request_options
            ),
        )

    async def update_resource_permission(
        self,
        resource_type: ResourceTypeOrStr,
        resource_id: str,
        *,
        body: SharingV1Request | SharingV1RequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResourcePermissionsResponse:
        """Updates the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Resource permissions configuration updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_resource_permission(
                resource_type, resource_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSharingWithRawResponse:
        return self._with_raw_response


class SharingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_resource_permission(
        self, resource_type: ResourceTypeOrStr, resource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ResourcePermissionsResponse, GetResourcePermissionErrorBody]:
        """Returns the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sharing/v1/{resourceType}/{resourceId}"),
            path_params=[
                param[ResourceTypeOrStr]("resourceType", resource_type), param[str]("resourceId", resource_id)
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResourcePermissionsResponse],
            error_mapper=get_resource_permission_error_mapper,
            request_options=request_options,
        )

    def update_resource_permission(
        self,
        resource_type: ResourceTypeOrStr,
        resource_id: str,
        *,
        body: SharingV1Request | SharingV1RequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourcePermissionsResponse, UpdateResourcePermissionErrorBody]:
        """Updates the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sharing/v1/{resourceType}/{resourceId}"),
            path_params=[
                param[ResourceTypeOrStr]("resourceType", resource_type), param[str]("resourceId", resource_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SharingV1Request | SharingV1RequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ResourcePermissionsResponse],
            error_mapper=update_resource_permission_error_mapper,
            request_options=request_options,
        )


class AsyncSharingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_resource_permission(
        self,
        resource_type: ResourceTypeOrStr,
        resource_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourcePermissionsResponse, GetResourcePermissionErrorBody]:
        """Returns the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sharing/v1/{resourceType}/{resourceId}"),
            path_params=[
                param[ResourceTypeOrStr]("resourceType", resource_type), param[str]("resourceId", resource_id)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResourcePermissionsResponse],
            error_mapper=get_resource_permission_error_mapper,
            request_options=request_options,
        )

    async def update_resource_permission(
        self,
        resource_type: ResourceTypeOrStr,
        resource_id: str,
        *,
        body: SharingV1Request | SharingV1RequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourcePermissionsResponse, UpdateResourcePermissionErrorBody]:
        """Updates the permissions associated with the specified Cloud Analytics resource. Supports Allocations, Alerts,
        Budgets, and Reports.

        Args:
            resource_type: Resource type.
            resource_id: Resource ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sharing/v1/{resourceType}/{resourceId}"),
            path_params=[
                param[ResourceTypeOrStr]("resourceType", resource_type), param[str]("resourceId", resource_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SharingV1Request | SharingV1RequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ResourcePermissionsResponse],
            error_mapper=update_resource_permission_error_mapper,
            request_options=request_options,
        )
