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
from ..errors.results_controller_get_evaluations_per_hour_by_project_error import (
    ResultsControllerGetEvaluationsPerHourByProjectErrorBody,
    results_controller_get_evaluations_per_hour_by_project_error_mapper,
)
from ..errors.results_controller_get_total_evaluations_per_hour_by_feature_error import (
    ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody,
    results_controller_get_total_evaluations_per_hour_by_feature_error_mapper,
)
from ..errors.results_controller_get_total_evaluations_per_hour_by_project_error import (
    ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody,
    results_controller_get_total_evaluations_per_hour_by_project_error_mapper,
)
from ..models.enums.period import PeriodOrStr
from ..models.enums.sdk_type_dev_cycle_management_results_api import SdkTypeDevCycleManagementResultsApiOrStr
from ..models.result_evaluations_by_hour_dto import ResultEvaluationsByHourDto
from ..models.result_project_evaluations_by_hour_dto import ResultProjectEvaluationsByHourDto
from ..server.server import Server


class Results:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ResultsWithRawResponse(client, server)

    def results_controller_get_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResultProjectEvaluationsByHourDto:
        """Fetch unique user variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ResultProjectEvaluationsByHourDto`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.results_controller_get_evaluations_per_hour_by_project(
                project,
                start_date=start_date,
                end_date=end_date,
                environment=environment,
                period=period,
                sdk_type=sdk_type,
                request_options=request_options,
            ),
        )

    def results_controller_get_total_evaluations_per_hour_by_feature(
        self,
        feature: str,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        platform: str | None = None,
        variable: str | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResultEvaluationsByHourDto:
        """Fetch total variable evaluations per hour for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            platform: Value sent with the request.
            variable: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ResultEvaluationsByHourDto`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.results_controller_get_total_evaluations_per_hour_by_feature(
                feature,
                project,
                start_date=start_date,
                end_date=end_date,
                platform=platform,
                variable=variable,
                environment=environment,
                period=period,
                sdk_type=sdk_type,
                request_options=request_options,
            ),
        )

    def results_controller_get_total_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResultProjectEvaluationsByHourDto:
        """Fetch total variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ResultProjectEvaluationsByHourDto`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.results_controller_get_total_evaluations_per_hour_by_project(
                project,
                start_date=start_date,
                end_date=end_date,
                environment=environment,
                period=period,
                sdk_type=sdk_type,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ResultsWithRawResponse:
        return self._with_raw_response


class AsyncResults:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncResultsWithRawResponse(client, server)

    async def results_controller_get_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResultProjectEvaluationsByHourDto:
        """Fetch unique user variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ResultProjectEvaluationsByHourDto`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.results_controller_get_evaluations_per_hour_by_project(
                project,
                start_date=start_date,
                end_date=end_date,
                environment=environment,
                period=period,
                sdk_type=sdk_type,
                request_options=request_options,
            ),
        )

    async def results_controller_get_total_evaluations_per_hour_by_feature(
        self,
        feature: str,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        platform: str | None = None,
        variable: str | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResultEvaluationsByHourDto:
        """Fetch total variable evaluations per hour for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            platform: Value sent with the request.
            variable: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ResultEvaluationsByHourDto`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.results_controller_get_total_evaluations_per_hour_by_feature(
                feature,
                project,
                start_date=start_date,
                end_date=end_date,
                platform=platform,
                variable=variable,
                environment=environment,
                period=period,
                sdk_type=sdk_type,
                request_options=request_options,
            ),
        )

    async def results_controller_get_total_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResultProjectEvaluationsByHourDto:
        """Fetch total variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ResultProjectEvaluationsByHourDto`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.results_controller_get_total_evaluations_per_hour_by_project(
                project,
                start_date=start_date,
                end_date=end_date,
                environment=environment,
                period=period,
                sdk_type=sdk_type,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncResultsWithRawResponse:
        return self._with_raw_response


class ResultsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def results_controller_get_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetEvaluationsPerHourByProjectErrorBody]:
        """Fetch unique user variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/results/evaluations"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("startDate", start_date),
                param[float | None]("endDate", end_date),
                param[str | None]("environment", environment),
                param[PeriodOrStr | None]("period", period),
                param[SdkTypeDevCycleManagementResultsApiOrStr | None]("sdkType", sdk_type),
            ],
            decoder=json_decoder[ResultProjectEvaluationsByHourDto],
            error_mapper=results_controller_get_evaluations_per_hour_by_project_error_mapper,
            request_options=request_options,
        )

    def results_controller_get_total_evaluations_per_hour_by_feature(
        self,
        feature: str,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        platform: str | None = None,
        variable: str | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody]:
        """Fetch total variable evaluations per hour for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            platform: Value sent with the request.
            variable: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/results/total-evaluations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[
                param[float | None]("startDate", start_date),
                param[float | None]("endDate", end_date),
                param[str | None]("platform", platform),
                param[str | None]("variable", variable),
                param[str | None]("environment", environment),
                param[PeriodOrStr | None]("period", period),
                param[SdkTypeDevCycleManagementResultsApiOrStr | None]("sdkType", sdk_type),
            ],
            decoder=json_decoder[ResultEvaluationsByHourDto],
            error_mapper=results_controller_get_total_evaluations_per_hour_by_feature_error_mapper,
            request_options=request_options,
        )

    def results_controller_get_total_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody]:
        """Fetch total variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/results/total-evaluations"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("startDate", start_date),
                param[float | None]("endDate", end_date),
                param[str | None]("environment", environment),
                param[PeriodOrStr | None]("period", period),
                param[SdkTypeDevCycleManagementResultsApiOrStr | None]("sdkType", sdk_type),
            ],
            decoder=json_decoder[ResultProjectEvaluationsByHourDto],
            error_mapper=results_controller_get_total_evaluations_per_hour_by_project_error_mapper,
            request_options=request_options,
        )


class AsyncResultsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def results_controller_get_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetEvaluationsPerHourByProjectErrorBody]:
        """Fetch unique user variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/results/evaluations"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("startDate", start_date),
                param[float | None]("endDate", end_date),
                param[str | None]("environment", environment),
                param[PeriodOrStr | None]("period", period),
                param[SdkTypeDevCycleManagementResultsApiOrStr | None]("sdkType", sdk_type),
            ],
            decoder=async_json_decoder[ResultProjectEvaluationsByHourDto],
            error_mapper=results_controller_get_evaluations_per_hour_by_project_error_mapper,
            request_options=request_options,
        )

    async def results_controller_get_total_evaluations_per_hour_by_feature(
        self,
        feature: str,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        platform: str | None = None,
        variable: str | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody]:
        """Fetch total variable evaluations per hour for a feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            platform: Value sent with the request.
            variable: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/results/total-evaluations"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            query_params=[
                param[float | None]("startDate", start_date),
                param[float | None]("endDate", end_date),
                param[str | None]("platform", platform),
                param[str | None]("variable", variable),
                param[str | None]("environment", environment),
                param[PeriodOrStr | None]("period", period),
                param[SdkTypeDevCycleManagementResultsApiOrStr | None]("sdkType", sdk_type),
            ],
            decoder=async_json_decoder[ResultEvaluationsByHourDto],
            error_mapper=results_controller_get_total_evaluations_per_hour_by_feature_error_mapper,
            request_options=request_options,
        )

    async def results_controller_get_total_evaluations_per_hour_by_project(
        self,
        project: str,
        *,
        start_date: float | None = None,
        end_date: float | None = None,
        environment: str | None = None,
        period: PeriodOrStr | None = None,
        sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody]:
        """Fetch total variable evaluations per hour for a project

        Args:
            project: A Project key or ID
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            environment: A Environment key or ID
            period: Value sent with the request.
            sdk_type: SDK type to filter evaluation results by
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/results/total-evaluations"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("startDate", start_date),
                param[float | None]("endDate", end_date),
                param[str | None]("environment", environment),
                param[PeriodOrStr | None]("period", period),
                param[SdkTypeDevCycleManagementResultsApiOrStr | None]("sdkType", sdk_type),
            ],
            decoder=async_json_decoder[ResultProjectEvaluationsByHourDto],
            error_mapper=results_controller_get_total_evaluations_per_hour_by_project_error_mapper,
            request_options=request_options,
        )
