from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_roles_error import ListRolesErrorBody, list_roles_error_mapper
from ..models.o_data_role_collection import ODataRoleCollection
from ..server.server import Server


class Roles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RolesWithRawResponse(client, server, auth)

    def list_roles(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataRoleCollection:
        """Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned
        to users or groups to control their access to resources and operations.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of roles

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_roles(filter_=filter_, top=top, skip=skip, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> RolesWithRawResponse:
        return self._with_raw_response


class AsyncRoles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRolesWithRawResponse(client, server, auth)

    async def list_roles(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataRoleCollection:
        """Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned
        to users or groups to control their access to resources and operations.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of roles

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_roles(
                filter_=filter_, top=top, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRolesWithRawResponse:
        return self._with_raw_response


class RolesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_roles(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataRoleCollection, ListRolesErrorBody]:
        """Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned
        to users or groups to control their access to resources and operations.

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
            url_template=self._server.default("/odata/Roles"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataRoleCollection],
            error_mapper=list_roles_error_mapper,
            request_options=request_options,
        )


class AsyncRolesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_roles(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataRoleCollection, ListRolesErrorBody]:
        """Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned
        to users or groups to control their access to resources and operations.

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
            url_template=self._server.default("/odata/Roles"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataRoleCollection],
            error_mapper=list_roles_error_mapper,
            request_options=request_options,
        )
