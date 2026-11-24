from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.project_change_requests_controller_get_feature_change_requests_error import (
    ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody,
    project_change_requests_controller_get_feature_change_requests_error_mapper,
)
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.enums.status1_dev_cycle_management_project_change_requests_api import (
    Status1DevCycleManagementProjectChangeRequestsApiOrStr,
)
from ..models.feature_change_request_summary import FeatureChangeRequestSummary
from ..server.server import Server


class ProjectChangeRequests:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ProjectChangeRequestsWithRawResponse(client, server)

    def project_change_requests_controller_get_feature_change_requests(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None,
        reviewer: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FeatureChangeRequestSummary]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            status: Value sent with the request.
            reviewer: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureChangeRequestSummary]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.project_change_requests_controller_get_feature_change_requests(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                status=status,
                reviewer=reviewer,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ProjectChangeRequestsWithRawResponse:
        return self._with_raw_response


class AsyncProjectChangeRequests:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncProjectChangeRequestsWithRawResponse(client, server)

    async def project_change_requests_controller_get_feature_change_requests(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None,
        reviewer: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FeatureChangeRequestSummary]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            status: Value sent with the request.
            reviewer: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureChangeRequestSummary]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.project_change_requests_controller_get_feature_change_requests(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                status=status,
                reviewer=reviewer,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectChangeRequestsWithRawResponse:
        return self._with_raw_response


class ProjectChangeRequestsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def project_change_requests_controller_get_feature_change_requests(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None,
        reviewer: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureChangeRequestSummary], ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            status: Value sent with the request.
            reviewer: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/change-requests"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[Status1DevCycleManagementProjectChangeRequestsApiOrStr | None]("status", status),
                param[str | None]("reviewer", reviewer),
            ],
            decoder=json_decoder[list[FeatureChangeRequestSummary]],
            error_mapper=project_change_requests_controller_get_feature_change_requests_error_mapper,
            request_options=request_options,
        )


class AsyncProjectChangeRequestsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def project_change_requests_controller_get_feature_change_requests(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None,
        reviewer: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureChangeRequestSummary], ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            status: Value sent with the request.
            reviewer: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/change-requests"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[Status1DevCycleManagementProjectChangeRequestsApiOrStr | None]("status", status),
                param[str | None]("reviewer", reviewer),
            ],
            decoder=async_json_decoder[list[FeatureChangeRequestSummary]],
            error_mapper=project_change_requests_controller_get_feature_change_requests_error_mapper,
            request_options=request_options,
        )
