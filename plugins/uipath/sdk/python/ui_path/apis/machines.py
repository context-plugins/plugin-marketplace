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
from ..errors.list_machines_error import ListMachinesErrorBody, list_machines_error_mapper
from ..models.o_data_machine_collection import ODataMachineCollection
from ..server.server import Server


class Machines:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MachinesWithRawResponse(client, server, auth)

    def list_machines(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataMachineCollection:
        """Retrieves a list of machine templates and registered machines. Machine templates define the number of
        runtimes available for cloud robots, while standard machines represent physical or virtual machines where
        Unattended Robot is installed.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of machines

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_machines(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MachinesWithRawResponse:
        return self._with_raw_response


class AsyncMachines:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMachinesWithRawResponse(client, server, auth)

    async def list_machines(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataMachineCollection:
        """Retrieves a list of machine templates and registered machines. Machine templates define the number of
        runtimes available for cloud robots, while standard machines represent physical or virtual machines where
        Unattended Robot is installed.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of machines

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_machines(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMachinesWithRawResponse:
        return self._with_raw_response


class MachinesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_machines(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataMachineCollection, ListMachinesErrorBody]:
        """Retrieves a list of machine templates and registered machines. Machine templates define the number of
        runtimes available for cloud robots, while standard machines represent physical or virtual machines where
        Unattended Robot is installed.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Machines"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataMachineCollection],
            error_mapper=list_machines_error_mapper,
            request_options=request_options,
        )


class AsyncMachinesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_machines(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataMachineCollection, ListMachinesErrorBody]:
        """Retrieves a list of machine templates and registered machines. Machine templates define the number of
        runtimes available for cloud robots, while standard machines represent physical or virtual machines where
        Unattended Robot is installed.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Machines"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataMachineCollection],
            error_mapper=list_machines_error_mapper,
            request_options=request_options,
        )
