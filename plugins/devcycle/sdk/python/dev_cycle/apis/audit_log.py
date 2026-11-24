from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.audit_log_controller_find_all_error import (
    AuditLogControllerFindAllErrorBody,
    audit_log_controller_find_all_error_mapper,
)
from ..models.audit_log_entity import AuditLogEntity
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..server.server import Server


class AuditLog:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuditLogWithRawResponse(client, server)

    def audit_log_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        environment: str | None = None,
        a0_user: str | None = None,
        start_date: RFC3339DateTime | None = None,
        end_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[AuditLogEntity]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            environment: Value sent with the request.
            a0_user: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[AuditLogEntity]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.audit_log_controller_find_all(
                feature,
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                environment=environment,
                a0_user=a0_user,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AuditLogWithRawResponse:
        return self._with_raw_response


class AsyncAuditLog:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuditLogWithRawResponse(client, server)

    async def audit_log_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        environment: str | None = None,
        a0_user: str | None = None,
        start_date: RFC3339DateTime | None = None,
        end_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[AuditLogEntity]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            environment: Value sent with the request.
            a0_user: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[AuditLogEntity]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.audit_log_controller_find_all(
                feature,
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                environment=environment,
                a0_user=a0_user,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuditLogWithRawResponse:
        return self._with_raw_response


class AuditLogWithRawResponse(BaseRawResponse[RawClient, Server]):
    def audit_log_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        environment: str | None = None,
        a0_user: str | None = None,
        start_date: RFC3339DateTime | None = None,
        end_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AuditLogEntity], AuditLogControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            environment: Value sent with the request.
            a0_user: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/audit"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("environment", environment),
                param[str | None]("a0_user", a0_user),
                param[RFC3339DateTime | None]("startDate", start_date),
                param[RFC3339DateTime | None]("endDate", end_date),
            ],
            decoder=json_decoder[list[AuditLogEntity]],
            error_mapper=audit_log_controller_find_all_error_mapper,
            request_options=request_options,
        )


class AsyncAuditLogWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def audit_log_controller_find_all(
        self,
        feature: str,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        environment: str | None = None,
        a0_user: str | None = None,
        start_date: RFC3339DateTime | None = None,
        end_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[AuditLogEntity], AuditLogControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            environment: Value sent with the request.
            a0_user: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/audit"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("environment", environment),
                param[str | None]("a0_user", a0_user),
                param[RFC3339DateTime | None]("startDate", start_date),
                param[RFC3339DateTime | None]("endDate", end_date),
            ],
            decoder=async_json_decoder[list[AuditLogEntity]],
            error_mapper=audit_log_controller_find_all_error_mapper,
            request_options=request_options,
        )
