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
from ..errors.list_alerts_error import ListAlertsErrorBody, list_alerts_error_mapper
from ..models.o_data_alert_collection import ODataAlertCollection
from ..server.server import Server


class Alerts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AlertsWithRawResponse(client, server, auth)

    def list_alerts(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataAlertCollection:
        """Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot
        disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of alerts

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_alerts(
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AlertsWithRawResponse:
        return self._with_raw_response


class AsyncAlerts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAlertsWithRawResponse(client, server, auth)

    async def list_alerts(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataAlertCollection:
        """Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot
        disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of alerts

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_alerts(
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAlertsWithRawResponse:
        return self._with_raw_response


class AlertsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_alerts(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataAlertCollection, ListAlertsErrorBody]:
        """Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot
        disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
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
            url_template=self._server.default("/odata/Alerts"),
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataAlertCollection],
            error_mapper=list_alerts_error_mapper,
            request_options=request_options,
        )


class AsyncAlertsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_alerts(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataAlertCollection, ListAlertsErrorBody]:
        """Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot
        disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
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
            url_template=self._server.default("/odata/Alerts"),
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataAlertCollection],
            error_mapper=list_alerts_error_mapper,
            request_options=request_options,
        )
