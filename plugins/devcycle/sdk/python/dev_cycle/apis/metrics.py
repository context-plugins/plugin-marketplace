from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.metrics_controller_create_error import (
    MetricsControllerCreateErrorBody,
    metrics_controller_create_error_mapper,
)
from ..errors.metrics_controller_fetch_results_error import (
    MetricsControllerFetchResultsErrorBody,
    metrics_controller_fetch_results_error_mapper,
)
from ..errors.metrics_controller_find_all_error import (
    MetricsControllerFindAllErrorBody,
    metrics_controller_find_all_error_mapper,
)
from ..errors.metrics_controller_find_one_error import (
    MetricsControllerFindOneErrorBody,
    metrics_controller_find_one_error_mapper,
)
from ..errors.metrics_controller_remove_error import (
    MetricsControllerRemoveErrorBody,
    metrics_controller_remove_error_mapper,
)
from ..errors.metrics_controller_update_error import (
    MetricsControllerUpdateErrorBody,
    metrics_controller_update_error_mapper,
)
from ..errors.test_metric_results_controller_fetch_error import (
    TestMetricResultsControllerFetchErrorBody,
    test_metric_results_controller_fetch_error_mapper,
)
from ..models.create_metric_dto import CreateMetricDto, CreateMetricDtoDict
from ..models.enums.dimension3 import Dimension3OrStr
from ..models.enums.optimize3 import Optimize3OrStr
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.metric_dev_cycle_management_metrics_api import MetricDevCycleManagementMetricsApi
from ..models.metric_result import MetricResult
from ..models.update_metric_dto import UpdateMetricDto, UpdateMetricDtoDict
from ..server.server import Server


class Metrics:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MetricsWithRawResponse(client, server)

    def metrics_controller_create(
        self,
        project: str,
        body: CreateMetricDto | CreateMetricDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MetricDevCycleManagementMetricsApi:
        """Create a new Metric

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricDevCycleManagementMetricsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.metrics_controller_create(project, body, request_options=request_options))

    def metrics_controller_fetch_results(
        self,
        key: str,
        project: str,
        feature: str,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MetricResult:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            feature: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.metrics_controller_fetch_results(
                key, project, feature, start_date, end_date, environment=environment, request_options=request_options
            ),
        )

    def metrics_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        dimension: Dimension3OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[MetricDevCycleManagementMetricsApi]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            dimension: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[MetricDevCycleManagementMetricsApi]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.metrics_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                dimension=dimension,
                request_options=request_options,
            ),
        )

    def metrics_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MetricDevCycleManagementMetricsApi:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricDevCycleManagementMetricsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.metrics_controller_find_one(key, project, request_options=request_options)
        )

    def metrics_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.metrics_controller_remove(key, project, request_options=request_options))

    def metrics_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateMetricDto | UpdateMetricDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MetricDevCycleManagementMetricsApi:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricDevCycleManagementMetricsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.metrics_controller_update(key, project, body, request_options=request_options)
        )

    def test_metric_results_controller_fetch(
        self,
        project: str,
        feature: str,
        control: str,
        optimize: Optimize3OrStr,
        event: str,
        dimension: Dimension3OrStr,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MetricResult:
        """Fetch metric results with the given parameters

        Args:
            project: A Project key or ID
            feature: Value sent with the request.
            control: Value sent with the request.
            optimize: Value sent with the request.
            event: Value sent with the request.
            dimension: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.test_metric_results_controller_fetch(
                project,
                feature,
                control,
                optimize,
                event,
                dimension,
                start_date,
                end_date,
                environment=environment,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MetricsWithRawResponse:
        return self._with_raw_response


class AsyncMetrics:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMetricsWithRawResponse(client, server)

    async def metrics_controller_create(
        self,
        project: str,
        body: CreateMetricDto | CreateMetricDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MetricDevCycleManagementMetricsApi:
        """Create a new Metric

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricDevCycleManagementMetricsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.metrics_controller_create(project, body, request_options=request_options)
        )

    async def metrics_controller_fetch_results(
        self,
        key: str,
        project: str,
        feature: str,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MetricResult:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            feature: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.metrics_controller_fetch_results(
                key, project, feature, start_date, end_date, environment=environment, request_options=request_options
            ),
        )

    async def metrics_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        dimension: Dimension3OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[MetricDevCycleManagementMetricsApi]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            dimension: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[MetricDevCycleManagementMetricsApi]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.metrics_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                dimension=dimension,
                request_options=request_options,
            ),
        )

    async def metrics_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MetricDevCycleManagementMetricsApi:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricDevCycleManagementMetricsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.metrics_controller_find_one(key, project, request_options=request_options)
        )

    async def metrics_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.metrics_controller_remove(key, project, request_options=request_options)
        )

    async def metrics_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateMetricDto | UpdateMetricDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MetricDevCycleManagementMetricsApi:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricDevCycleManagementMetricsApi`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.metrics_controller_update(key, project, body, request_options=request_options)
        )

    async def test_metric_results_controller_fetch(
        self,
        project: str,
        feature: str,
        control: str,
        optimize: Optimize3OrStr,
        event: str,
        dimension: Dimension3OrStr,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MetricResult:
        """Fetch metric results with the given parameters

        Args:
            project: A Project key or ID
            feature: Value sent with the request.
            control: Value sent with the request.
            optimize: Value sent with the request.
            event: Value sent with the request.
            dimension: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MetricResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.test_metric_results_controller_fetch(
                project,
                feature,
                control,
                optimize,
                event,
                dimension,
                start_date,
                end_date,
                environment=environment,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMetricsWithRawResponse:
        return self._with_raw_response


class MetricsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def metrics_controller_create(
        self,
        project: str,
        body: CreateMetricDto | CreateMetricDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerCreateErrorBody]:
        """Create a new Metric

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/metrics"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMetricDto | CreateMetricDtoDict](body),
            decoder=json_decoder[MetricDevCycleManagementMetricsApi],
            error_mapper=metrics_controller_create_error_mapper,
            request_options=request_options,
        )

    def metrics_controller_fetch_results(
        self,
        key: str,
        project: str,
        feature: str,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricResult, MetricsControllerFetchResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            feature: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}/results"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            query_params=[
                param[str]("feature", feature),
                param[RFC3339DateTime]("startDate", start_date),
                param[RFC3339DateTime]("endDate", end_date),
                param[str | None]("environment", environment),
            ],
            decoder=json_decoder[MetricResult],
            error_mapper=metrics_controller_fetch_results_error_mapper,
            request_options=request_options,
        )

    def metrics_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        dimension: Dimension3OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[MetricDevCycleManagementMetricsApi], MetricsControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            dimension: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metrics"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[Dimension3OrStr | None]("dimension", dimension),
            ],
            decoder=json_decoder[list[MetricDevCycleManagementMetricsApi]],
            error_mapper=metrics_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def metrics_controller_find_one(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerFindOneErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[MetricDevCycleManagementMetricsApi],
            error_mapper=metrics_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def metrics_controller_remove(
        self, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, MetricsControllerRemoveErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=metrics_controller_remove_error_mapper,
            request_options=request_options,
        )

    def metrics_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateMetricDto | UpdateMetricDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerUpdateErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateMetricDto | UpdateMetricDtoDict](body),
            decoder=json_decoder[MetricDevCycleManagementMetricsApi],
            error_mapper=metrics_controller_update_error_mapper,
            request_options=request_options,
        )

    def test_metric_results_controller_fetch(
        self,
        project: str,
        feature: str,
        control: str,
        optimize: Optimize3OrStr,
        event: str,
        dimension: Dimension3OrStr,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricResult, TestMetricResultsControllerFetchErrorBody]:
        """Fetch metric results with the given parameters

        Args:
            project: A Project key or ID
            feature: Value sent with the request.
            control: Value sent with the request.
            optimize: Value sent with the request.
            event: Value sent with the request.
            dimension: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/test-metric-results"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[str]("feature", feature),
                param[str]("control", control),
                param[Optimize3OrStr]("optimize", optimize),
                param[str]("event", event),
                param[Dimension3OrStr]("dimension", dimension),
                param[RFC3339DateTime]("startDate", start_date),
                param[RFC3339DateTime]("endDate", end_date),
                param[str | None]("environment", environment),
            ],
            decoder=json_decoder[MetricResult],
            error_mapper=test_metric_results_controller_fetch_error_mapper,
            request_options=request_options,
        )


class AsyncMetricsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def metrics_controller_create(
        self,
        project: str,
        body: CreateMetricDto | CreateMetricDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerCreateErrorBody]:
        """Create a new Metric

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/metrics"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMetricDto | CreateMetricDtoDict](body),
            decoder=async_json_decoder[MetricDevCycleManagementMetricsApi],
            error_mapper=metrics_controller_create_error_mapper,
            request_options=request_options,
        )

    async def metrics_controller_fetch_results(
        self,
        key: str,
        project: str,
        feature: str,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricResult, MetricsControllerFetchResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            feature: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}/results"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            query_params=[
                param[str]("feature", feature),
                param[RFC3339DateTime]("startDate", start_date),
                param[RFC3339DateTime]("endDate", end_date),
                param[str | None]("environment", environment),
            ],
            decoder=async_json_decoder[MetricResult],
            error_mapper=metrics_controller_fetch_results_error_mapper,
            request_options=request_options,
        )

    async def metrics_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        dimension: Dimension3OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[MetricDevCycleManagementMetricsApi], MetricsControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            dimension: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metrics"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[Dimension3OrStr | None]("dimension", dimension),
            ],
            decoder=async_json_decoder[list[MetricDevCycleManagementMetricsApi]],
            error_mapper=metrics_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def metrics_controller_find_one(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerFindOneErrorBody]:
        """Send a ``GET`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[MetricDevCycleManagementMetricsApi],
            error_mapper=metrics_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def metrics_controller_remove(
        self, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, MetricsControllerRemoveErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=metrics_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def metrics_controller_update(
        self,
        key: str,
        project: str,
        body: UpdateMetricDto | UpdateMetricDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerUpdateErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/metrics/{key}"),
            path_params=[param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateMetricDto | UpdateMetricDtoDict](body),
            decoder=async_json_decoder[MetricDevCycleManagementMetricsApi],
            error_mapper=metrics_controller_update_error_mapper,
            request_options=request_options,
        )

    async def test_metric_results_controller_fetch(
        self,
        project: str,
        feature: str,
        control: str,
        optimize: Optimize3OrStr,
        event: str,
        dimension: Dimension3OrStr,
        start_date: RFC3339DateTime,
        end_date: RFC3339DateTime,
        *,
        environment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MetricResult, TestMetricResultsControllerFetchErrorBody]:
        """Fetch metric results with the given parameters

        Args:
            project: A Project key or ID
            feature: Value sent with the request.
            control: Value sent with the request.
            optimize: Value sent with the request.
            event: Value sent with the request.
            dimension: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/test-metric-results"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[str]("feature", feature),
                param[str]("control", control),
                param[Optimize3OrStr]("optimize", optimize),
                param[str]("event", event),
                param[Dimension3OrStr]("dimension", dimension),
                param[RFC3339DateTime]("startDate", start_date),
                param[RFC3339DateTime]("endDate", end_date),
                param[str | None]("environment", environment),
            ],
            decoder=async_json_decoder[MetricResult],
            error_mapper=test_metric_results_controller_fetch_error_mapper,
            request_options=request_options,
        )
