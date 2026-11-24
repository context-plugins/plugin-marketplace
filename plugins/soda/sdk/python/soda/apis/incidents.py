from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_v1_incidents_error import GetApiV1IncidentsErrorBody, get_api_v1_incidents_error_mapper
from ..errors.get_api_v1_incidents_incident_id_rca_report_error import (
    GetApiV1IncidentsIncidentIdRcaReportErrorBody,
    get_api_v1_incidents_incident_id_rca_report_error_mapper,
)
from ..errors.post_api_v1_incidents_error import PostApiV1IncidentsErrorBody, post_api_v1_incidents_error_mapper
from ..errors.post_api_v1_incidents_incident_id_error import (
    PostApiV1IncidentsIncidentIdErrorBody,
    post_api_v1_incidents_incident_id_error_mapper,
)
from ..errors.post_api_v1_incidents_incident_id_rca_report_error import (
    PostApiV1IncidentsIncidentIdRcaReportErrorBody,
    post_api_v1_incidents_incident_id_rca_report_error_mapper,
)
from ..models.incident_content_dto import IncidentContentDto
from ..models.public_api_create_incident_dto import PublicApiCreateIncidentDto, PublicApiCreateIncidentDtoDict
from ..models.public_api_incidents_response import PublicApiIncidentsResponse
from ..models.public_api_rca_report_content_dto import PublicApiRcaReportContentDto
from ..models.public_api_rca_report_dto import PublicApiRcaReportDto, PublicApiRcaReportDtoDict
from ..models.public_api_update_incident_dto import PublicApiUpdateIncidentDto, PublicApiUpdateIncidentDtoDict
from ..server.server import Server


class Incidents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IncidentsWithRawResponse(client, server, auth)

    def get_api_v1_incidents(
        self,
        *,
        dataset_id: str | None = None,
        from_: RFC3339DateTime | None = None,
        incident_ids: str | None = None,
        lead_id: str | None = None,
        page: int | None = None,
        severity: str | None = None,
        size: int | None = None,
        status: str | None = None,
        to: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiIncidentsResponse:
        """This endpoint enables you to gather information about the incidents that exist in your organization's Soda
        Cloud account.

        Each incident carries a ``hasRcaReport`` flag indicating whether a structured root cause analysis report has
        been published for it; retrieve the report itself from ``GET /api/v1/incidents/{incidentId}/rcaReport``.
        **``hasRcaReport`` is in private preview**: it is ``true`` or ``false`` only when the root cause analysis report
        preview is enabled for your organization, and ``null`` otherwise.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``status``: Optionally, use this parameter to collect only the incidents with a specific status. One of
            ``reported``, ``investigating``, ``fixing``, ``resolved``.

        - ``severity``: Optionally, use this parameter to collect only the incidents with a specific severity. One of
            ``minor``, ``major``, ``critical``.

        - ``datasetId``: Optionally, use this parameter to collect only the incidents associated with a specific
            dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``incidentIds``: Optionally, use this parameter to collect only a specific batch of incidents. Provide
            multiple values as a comma-separated list of incident IDs, which you can find on the individual incident
            pages in Soda Cloud. This query parameter is limited to 1000 incident IDs and can be combined with the other
            query parameters (``status``, ``severity``, ``datasetId``, ``page``, ``size``), which are all applied
            together.

        - ``leadId``: Optionally, use this parameter to collect only the incidents assigned to a specific lead user.
            Provide the user id of the incident lead.

        - ``from``: Optionally, use this parameter to collect only the incidents created on or after this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T00:00:00+01:00``

        - ``to``: Optionally, use this parameter to collect only the incidents created on or before this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T23:59:59+01:00``

        The ``leadId``, ``from``, and ``to`` parameters can be combined with the other query parameters, which are all
        applied together (AND).

        If not specified, the query gathers information for all incidents in the account and sorts the results by
        incident number in ascending order.

        ## Authorization

        Soda only returns the incidents linked to datasets to which the user has **View dataset** permissions. Soda
        Cloud Admins have access to all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            from_: Value sent with the request.
            incident_ids: Value sent with the request.
            lead_id: Value sent with the request.
            page: Value sent with the request.
            severity: Value sent with the request.
            size: Value sent with the request.
            status: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_incidents(
                dataset_id=dataset_id,
                from_=from_,
                incident_ids=incident_ids,
                lead_id=lead_id,
                page=page,
                severity=severity,
                size=size,
                status=status,
                to=to,
                request_options=request_options,
            ),
        )

    def get_api_v1_incidents_incident_id_rca_report(
        self, incident_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiRcaReportContentDto:
        """This endpoint returns the structured root cause analysis and impact assessment published on an incident in
        your organization's Soda Cloud account.

        Returns 404 if the incident does not exist or has no RCA report published yet.

        ## Authorization

        Unlike the incident list, this endpoint requires **View dataset** permission on every dataset the incident
        touches. Soda Cloud Admins have access to all incidents. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_incidents_incident_id_rca_report(
                incident_id, request_options=request_options
            ),
        )

    def post_api_v1_incidents(
        self,
        body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IncidentContentDto:
        """This endpoint enables you to create a new incident linked to one or more monitor results in your
        organization's Soda Cloud account. The authenticated user becomes the incident reporter.

        ## Authorization

        Only users with **Manage incident** permission can create incidents. Soda Cloud Admins have permission to create
        incidents on all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_incidents(body, request_options=request_options))

    def post_api_v1_incidents_incident_id(
        self,
        incident_id: str,
        body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IncidentContentDto:
        """This endpoint enables you to update an existing incident title, severity, status, or description in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage incident** permission can update incidents. Soda Cloud Admins have permission to update
        all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_incidents_incident_id(
                incident_id, body, request_options=request_options
            ),
        )

    def post_api_v1_incidents_incident_id_rca_report(
        self,
        incident_id: str,
        body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiRcaReportContentDto:
        """This endpoint publishes a structured root cause analysis and impact assessment onto an existing incident in
        your organization's Soda Cloud account. The report is additive and does not mutate the incident's own fields
        (title, severity, status, description).

        There is one report per incident: publishing replaces any previous report. Publishing to a resolved incident is
        rejected.

        ## Authorization

        Only users with **Manage incident** permission can publish incident RCA reports. Soda Cloud Admins have
        permission to publish reports on all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_incidents_incident_id_rca_report(
                incident_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> IncidentsWithRawResponse:
        return self._with_raw_response


class AsyncIncidents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIncidentsWithRawResponse(client, server, auth)

    async def get_api_v1_incidents(
        self,
        *,
        dataset_id: str | None = None,
        from_: RFC3339DateTime | None = None,
        incident_ids: str | None = None,
        lead_id: str | None = None,
        page: int | None = None,
        severity: str | None = None,
        size: int | None = None,
        status: str | None = None,
        to: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiIncidentsResponse:
        """This endpoint enables you to gather information about the incidents that exist in your organization's Soda
        Cloud account.

        Each incident carries a ``hasRcaReport`` flag indicating whether a structured root cause analysis report has
        been published for it; retrieve the report itself from ``GET /api/v1/incidents/{incidentId}/rcaReport``.
        **``hasRcaReport`` is in private preview**: it is ``true`` or ``false`` only when the root cause analysis report
        preview is enabled for your organization, and ``null`` otherwise.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``status``: Optionally, use this parameter to collect only the incidents with a specific status. One of
            ``reported``, ``investigating``, ``fixing``, ``resolved``.

        - ``severity``: Optionally, use this parameter to collect only the incidents with a specific severity. One of
            ``minor``, ``major``, ``critical``.

        - ``datasetId``: Optionally, use this parameter to collect only the incidents associated with a specific
            dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``incidentIds``: Optionally, use this parameter to collect only a specific batch of incidents. Provide
            multiple values as a comma-separated list of incident IDs, which you can find on the individual incident
            pages in Soda Cloud. This query parameter is limited to 1000 incident IDs and can be combined with the other
            query parameters (``status``, ``severity``, ``datasetId``, ``page``, ``size``), which are all applied
            together.

        - ``leadId``: Optionally, use this parameter to collect only the incidents assigned to a specific lead user.
            Provide the user id of the incident lead.

        - ``from``: Optionally, use this parameter to collect only the incidents created on or after this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T00:00:00+01:00``

        - ``to``: Optionally, use this parameter to collect only the incidents created on or before this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T23:59:59+01:00``

        The ``leadId``, ``from``, and ``to`` parameters can be combined with the other query parameters, which are all
        applied together (AND).

        If not specified, the query gathers information for all incidents in the account and sorts the results by
        incident number in ascending order.

        ## Authorization

        Soda only returns the incidents linked to datasets to which the user has **View dataset** permissions. Soda
        Cloud Admins have access to all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            from_: Value sent with the request.
            incident_ids: Value sent with the request.
            lead_id: Value sent with the request.
            page: Value sent with the request.
            severity: Value sent with the request.
            size: Value sent with the request.
            status: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_incidents(
                dataset_id=dataset_id,
                from_=from_,
                incident_ids=incident_ids,
                lead_id=lead_id,
                page=page,
                severity=severity,
                size=size,
                status=status,
                to=to,
                request_options=request_options,
            ),
        )

    async def get_api_v1_incidents_incident_id_rca_report(
        self, incident_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiRcaReportContentDto:
        """This endpoint returns the structured root cause analysis and impact assessment published on an incident in
        your organization's Soda Cloud account.

        Returns 404 if the incident does not exist or has no RCA report published yet.

        ## Authorization

        Unlike the incident list, this endpoint requires **View dataset** permission on every dataset the incident
        touches. Soda Cloud Admins have access to all incidents. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_incidents_incident_id_rca_report(
                incident_id, request_options=request_options
            ),
        )

    async def post_api_v1_incidents(
        self,
        body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IncidentContentDto:
        """This endpoint enables you to create a new incident linked to one or more monitor results in your
        organization's Soda Cloud account. The authenticated user becomes the incident reporter.

        ## Authorization

        Only users with **Manage incident** permission can create incidents. Soda Cloud Admins have permission to create
        incidents on all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_incidents(body, request_options=request_options))

    async def post_api_v1_incidents_incident_id(
        self,
        incident_id: str,
        body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IncidentContentDto:
        """This endpoint enables you to update an existing incident title, severity, status, or description in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage incident** permission can update incidents. Soda Cloud Admins have permission to update
        all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_incidents_incident_id(
                incident_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_incidents_incident_id_rca_report(
        self,
        incident_id: str,
        body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiRcaReportContentDto:
        """This endpoint publishes a structured root cause analysis and impact assessment onto an existing incident in
        your organization's Soda Cloud account. The report is additive and does not mutate the incident's own fields
        (title, severity, status, description).

        There is one report per incident: publishing replaces any previous report. Publishing to a resolved incident is
        rejected.

        ## Authorization

        Only users with **Manage incident** permission can publish incident RCA reports. Soda Cloud Admins have
        permission to publish reports on all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_incidents_incident_id_rca_report(
                incident_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIncidentsWithRawResponse:
        return self._with_raw_response


class IncidentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_incidents(
        self,
        *,
        dataset_id: str | None = None,
        from_: RFC3339DateTime | None = None,
        incident_ids: str | None = None,
        lead_id: str | None = None,
        page: int | None = None,
        severity: str | None = None,
        size: int | None = None,
        status: str | None = None,
        to: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiIncidentsResponse, GetApiV1IncidentsErrorBody]:
        """This endpoint enables you to gather information about the incidents that exist in your organization's Soda
        Cloud account.

        Each incident carries a ``hasRcaReport`` flag indicating whether a structured root cause analysis report has
        been published for it; retrieve the report itself from ``GET /api/v1/incidents/{incidentId}/rcaReport``.
        **``hasRcaReport`` is in private preview**: it is ``true`` or ``false`` only when the root cause analysis report
        preview is enabled for your organization, and ``null`` otherwise.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``status``: Optionally, use this parameter to collect only the incidents with a specific status. One of
            ``reported``, ``investigating``, ``fixing``, ``resolved``.

        - ``severity``: Optionally, use this parameter to collect only the incidents with a specific severity. One of
            ``minor``, ``major``, ``critical``.

        - ``datasetId``: Optionally, use this parameter to collect only the incidents associated with a specific
            dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``incidentIds``: Optionally, use this parameter to collect only a specific batch of incidents. Provide
            multiple values as a comma-separated list of incident IDs, which you can find on the individual incident
            pages in Soda Cloud. This query parameter is limited to 1000 incident IDs and can be combined with the other
            query parameters (``status``, ``severity``, ``datasetId``, ``page``, ``size``), which are all applied
            together.

        - ``leadId``: Optionally, use this parameter to collect only the incidents assigned to a specific lead user.
            Provide the user id of the incident lead.

        - ``from``: Optionally, use this parameter to collect only the incidents created on or after this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T00:00:00+01:00``

        - ``to``: Optionally, use this parameter to collect only the incidents created on or before this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T23:59:59+01:00``

        The ``leadId``, ``from``, and ``to`` parameters can be combined with the other query parameters, which are all
        applied together (AND).

        If not specified, the query gathers information for all incidents in the account and sorts the results by
        incident number in ascending order.

        ## Authorization

        Soda only returns the incidents linked to datasets to which the user has **View dataset** permissions. Soda
        Cloud Admins have access to all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            from_: Value sent with the request.
            incident_ids: Value sent with the request.
            lead_id: Value sent with the request.
            page: Value sent with the request.
            severity: Value sent with the request.
            size: Value sent with the request.
            status: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/incidents"),
            query_params=[
                param[str | None]("datasetId", dataset_id),
                param[RFC3339DateTime | None]("from", from_),
                param[str | None]("incidentIds", incident_ids),
                param[str | None]("leadId", lead_id),
                param[int | None]("page", page),
                param[str | None]("severity", severity),
                param[int | None]("size", size),
                param[str | None]("status", status),
                param[RFC3339DateTime | None]("to", to),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiIncidentsResponse],
            error_mapper=get_api_v1_incidents_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_incidents_incident_id_rca_report(
        self, incident_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiRcaReportContentDto, GetApiV1IncidentsIncidentIdRcaReportErrorBody]:
        """This endpoint returns the structured root cause analysis and impact assessment published on an incident in
        your organization's Soda Cloud account.

        Returns 404 if the incident does not exist or has no RCA report published yet.

        ## Authorization

        Unlike the incident list, this endpoint requires **View dataset** permission on every dataset the incident
        touches. Soda Cloud Admins have access to all incidents. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/incidents/{incidentId}/rcaReport"),
            path_params=[param[str]("incidentId", incident_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiRcaReportContentDto],
            error_mapper=get_api_v1_incidents_incident_id_rca_report_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_incidents(
        self,
        body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IncidentContentDto, PostApiV1IncidentsErrorBody]:
        """This endpoint enables you to create a new incident linked to one or more monitor results in your
        organization's Soda Cloud account. The authenticated user becomes the incident reporter.

        ## Authorization

        Only users with **Manage incident** permission can create incidents. Soda Cloud Admins have permission to create
        incidents on all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/incidents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[IncidentContentDto],
            error_mapper=post_api_v1_incidents_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_incidents_incident_id(
        self,
        incident_id: str,
        body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IncidentContentDto, PostApiV1IncidentsIncidentIdErrorBody]:
        """This endpoint enables you to update an existing incident title, severity, status, or description in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage incident** permission can update incidents. Soda Cloud Admins have permission to update
        all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/incidents/{incidentId}"),
            path_params=[param[str]("incidentId", incident_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[IncidentContentDto],
            error_mapper=post_api_v1_incidents_incident_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_incidents_incident_id_rca_report(
        self,
        incident_id: str,
        body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiRcaReportContentDto, PostApiV1IncidentsIncidentIdRcaReportErrorBody]:
        """This endpoint publishes a structured root cause analysis and impact assessment onto an existing incident in
        your organization's Soda Cloud account. The report is additive and does not mutate the incident's own fields
        (title, severity, status, description).

        There is one report per incident: publishing replaces any previous report. Publishing to a resolved incident is
        rejected.

        ## Authorization

        Only users with **Manage incident** permission can publish incident RCA reports. Soda Cloud Admins have
        permission to publish reports on all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/incidents/{incidentId}/rcaReport"),
            path_params=[param[str]("incidentId", incident_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiRcaReportDto | PublicApiRcaReportDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiRcaReportContentDto],
            error_mapper=post_api_v1_incidents_incident_id_rca_report_error_mapper,
            request_options=request_options,
        )


class AsyncIncidentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_incidents(
        self,
        *,
        dataset_id: str | None = None,
        from_: RFC3339DateTime | None = None,
        incident_ids: str | None = None,
        lead_id: str | None = None,
        page: int | None = None,
        severity: str | None = None,
        size: int | None = None,
        status: str | None = None,
        to: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiIncidentsResponse, GetApiV1IncidentsErrorBody]:
        """This endpoint enables you to gather information about the incidents that exist in your organization's Soda
        Cloud account.

        Each incident carries a ``hasRcaReport`` flag indicating whether a structured root cause analysis report has
        been published for it; retrieve the report itself from ``GET /api/v1/incidents/{incidentId}/rcaReport``.
        **``hasRcaReport`` is in private preview**: it is ``true`` or ``false`` only when the root cause analysis report
        preview is enabled for your organization, and ``null`` otherwise.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``status``: Optionally, use this parameter to collect only the incidents with a specific status. One of
            ``reported``, ``investigating``, ``fixing``, ``resolved``.

        - ``severity``: Optionally, use this parameter to collect only the incidents with a specific severity. One of
            ``minor``, ``major``, ``critical``.

        - ``datasetId``: Optionally, use this parameter to collect only the incidents associated with a specific
            dataset. Find the ``datasetId`` in the URL of the dataset page in Soda Cloud.

        - ``incidentIds``: Optionally, use this parameter to collect only a specific batch of incidents. Provide
            multiple values as a comma-separated list of incident IDs, which you can find on the individual incident
            pages in Soda Cloud. This query parameter is limited to 1000 incident IDs and can be combined with the other
            query parameters (``status``, ``severity``, ``datasetId``, ``page``, ``size``), which are all applied
            together.

        - ``leadId``: Optionally, use this parameter to collect only the incidents assigned to a specific lead user.
            Provide the user id of the incident lead.

        - ``from``: Optionally, use this parameter to collect only the incidents created on or after this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T00:00:00+01:00``

        - ``to``: Optionally, use this parameter to collect only the incidents created on or before this moment,
            compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example:
            ``2026-08-01T23:59:59+01:00``

        The ``leadId``, ``from``, and ``to`` parameters can be combined with the other query parameters, which are all
        applied together (AND).

        If not specified, the query gathers information for all incidents in the account and sorts the results by
        incident number in ascending order.

        ## Authorization

        Soda only returns the incidents linked to datasets to which the user has **View dataset** permissions. Soda
        Cloud Admins have access to all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            from_: Value sent with the request.
            incident_ids: Value sent with the request.
            lead_id: Value sent with the request.
            page: Value sent with the request.
            severity: Value sent with the request.
            size: Value sent with the request.
            status: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/incidents"),
            query_params=[
                param[str | None]("datasetId", dataset_id),
                param[RFC3339DateTime | None]("from", from_),
                param[str | None]("incidentIds", incident_ids),
                param[str | None]("leadId", lead_id),
                param[int | None]("page", page),
                param[str | None]("severity", severity),
                param[int | None]("size", size),
                param[str | None]("status", status),
                param[RFC3339DateTime | None]("to", to),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiIncidentsResponse],
            error_mapper=get_api_v1_incidents_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_incidents_incident_id_rca_report(
        self, incident_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiRcaReportContentDto, GetApiV1IncidentsIncidentIdRcaReportErrorBody]:
        """This endpoint returns the structured root cause analysis and impact assessment published on an incident in
        your organization's Soda Cloud account.

        Returns 404 if the incident does not exist or has no RCA report published yet.

        ## Authorization

        Unlike the incident list, this endpoint requires **View dataset** permission on every dataset the incident
        touches. Soda Cloud Admins have access to all incidents. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/incidents/{incidentId}/rcaReport"),
            path_params=[param[str]("incidentId", incident_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiRcaReportContentDto],
            error_mapper=get_api_v1_incidents_incident_id_rca_report_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_incidents(
        self,
        body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IncidentContentDto, PostApiV1IncidentsErrorBody]:
        """This endpoint enables you to create a new incident linked to one or more monitor results in your
        organization's Soda Cloud account. The authenticated user becomes the incident reporter.

        ## Authorization

        Only users with **Manage incident** permission can create incidents. Soda Cloud Admins have permission to create
        incidents on all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/incidents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[IncidentContentDto],
            error_mapper=post_api_v1_incidents_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_incidents_incident_id(
        self,
        incident_id: str,
        body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IncidentContentDto, PostApiV1IncidentsIncidentIdErrorBody]:
        """This endpoint enables you to update an existing incident title, severity, status, or description in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage incident** permission can update incidents. Soda Cloud Admins have permission to update
        all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/incidents/{incidentId}"),
            path_params=[param[str]("incidentId", incident_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[IncidentContentDto],
            error_mapper=post_api_v1_incidents_incident_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_incidents_incident_id_rca_report(
        self,
        incident_id: str,
        body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiRcaReportContentDto, PostApiV1IncidentsIncidentIdRcaReportErrorBody]:
        """This endpoint publishes a structured root cause analysis and impact assessment onto an existing incident in
        your organization's Soda Cloud account. The report is additive and does not mutate the incident's own fields
        (title, severity, status, description).

        There is one report per incident: publishing replaces any previous report. Publishing to a resolved incident is
        rejected.

        ## Authorization

        Only users with **Manage incident** permission can publish incident RCA reports. Soda Cloud Admins have
        permission to publish reports on all incidents.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Incidents``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            incident_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/incidents/{incidentId}/rcaReport"),
            path_params=[param[str]("incidentId", incident_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiRcaReportDto | PublicApiRcaReportDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiRcaReportContentDto],
            error_mapper=post_api_v1_incidents_incident_id_rca_report_error_mapper,
            request_options=request_options,
        )
