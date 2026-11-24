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
from ..errors.get_project_workflow_metrics_error import (
    GetProjectWorkflowMetricsErrorBody,
    get_project_workflow_metrics_error_mapper,
)
from ..errors.get_workflow_job_metrics_error import (
    GetWorkflowJobMetricsErrorBody,
    get_workflow_job_metrics_error_mapper,
)
from ..errors.get_workflow_runs_error import GetWorkflowRunsErrorBody, get_workflow_runs_error_mapper
from ..errors.get_workflow_test_metrics_error import (
    GetWorkflowTestMetricsErrorBody,
    get_workflow_test_metrics_error_mapper,
)
from ..models.enums.reporting_window import ReportingWindowOrStr
from ..models.insights_job_metrics import InsightsJobMetrics
from ..models.insights_test_metrics import InsightsTestMetrics
from ..models.insights_workflow_metrics import InsightsWorkflowMetrics
from ..models.insights_workflow_runs import InsightsWorkflowRuns
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server, auth)

    def get_project_workflow_metrics(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightsWorkflowMetrics:
        """Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and
        throughput.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow metrics

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_project_workflow_metrics(
                project_slug,
                branch=branch,
                reporting_window=reporting_window,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def get_workflow_job_metrics(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightsJobMetrics:
        """Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved job metrics

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_workflow_job_metrics(
                project_slug,
                workflow_name,
                branch=branch,
                reporting_window=reporting_window,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def get_workflow_runs(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightsWorkflowRuns:
        """Returns recent runs of a named workflow, containing status, duration, and credits consumed.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow runs

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_workflow_runs(
                project_slug, workflow_name, branch=branch, page_token=page_token, request_options=request_options
            ),
        )

    def get_workflow_test_metrics(
        self, project_slug: str, workflow_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> InsightsTestMetrics:
        """Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved test metrics

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_workflow_test_metrics(
                project_slug, workflow_name, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server, auth)

    async def get_project_workflow_metrics(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightsWorkflowMetrics:
        """Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and
        throughput.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow metrics

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_project_workflow_metrics(
                project_slug,
                branch=branch,
                reporting_window=reporting_window,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def get_workflow_job_metrics(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightsJobMetrics:
        """Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved job metrics

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workflow_job_metrics(
                project_slug,
                workflow_name,
                branch=branch,
                reporting_window=reporting_window,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def get_workflow_runs(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightsWorkflowRuns:
        """Returns recent runs of a named workflow, containing status, duration, and credits consumed.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow runs

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workflow_runs(
                project_slug, workflow_name, branch=branch, page_token=page_token, request_options=request_options
            ),
        )

    async def get_workflow_test_metrics(
        self, project_slug: str, workflow_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InsightsTestMetrics:
        """Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved test metrics

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workflow_test_metrics(
                project_slug, workflow_name, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_project_workflow_metrics(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsWorkflowMetrics, GetProjectWorkflowMetricsErrorBody]:
        """Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and
        throughput.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/insights/{project-slug}/workflows"),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[
                param[str | None]("branch", branch),
                param[ReportingWindowOrStr | None]("reporting-window", reporting_window),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[InsightsWorkflowMetrics],
            error_mapper=get_project_workflow_metrics_error_mapper,
            request_options=request_options,
        )

    def get_workflow_job_metrics(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsJobMetrics, GetWorkflowJobMetricsErrorBody]:
        """Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/insights/{project-slug}/workflows/{workflow-name}/jobs"
            ),
            path_params=[param[str]("project-slug", project_slug), param[str]("workflow-name", workflow_name)],
            query_params=[
                param[str | None]("branch", branch),
                param[ReportingWindowOrStr | None]("reporting-window", reporting_window),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[InsightsJobMetrics],
            error_mapper=get_workflow_job_metrics_error_mapper,
            request_options=request_options,
        )

    def get_workflow_runs(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsWorkflowRuns, GetWorkflowRunsErrorBody]:
        """Returns recent runs of a named workflow, containing status, duration, and credits consumed.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/insights/{project-slug}/workflows/{workflow-name}"
            ),
            path_params=[param[str]("project-slug", project_slug), param[str]("workflow-name", workflow_name)],
            query_params=[param[str | None]("branch", branch), param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[InsightsWorkflowRuns],
            error_mapper=get_workflow_runs_error_mapper,
            request_options=request_options,
        )

    def get_workflow_test_metrics(
        self, project_slug: str, workflow_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InsightsTestMetrics, GetWorkflowTestMetricsErrorBody]:
        """Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/insights/{project-slug}/workflows/{workflow-name}/test-metrics"
            ),
            path_params=[param[str]("project-slug", project_slug), param[str]("workflow-name", workflow_name)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[InsightsTestMetrics],
            error_mapper=get_workflow_test_metrics_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_project_workflow_metrics(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsWorkflowMetrics, GetProjectWorkflowMetricsErrorBody]:
        """Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and
        throughput.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/insights/{project-slug}/workflows"),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[
                param[str | None]("branch", branch),
                param[ReportingWindowOrStr | None]("reporting-window", reporting_window),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[InsightsWorkflowMetrics],
            error_mapper=get_project_workflow_metrics_error_mapper,
            request_options=request_options,
        )

    async def get_workflow_job_metrics(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        reporting_window: ReportingWindowOrStr | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsJobMetrics, GetWorkflowJobMetricsErrorBody]:
        """Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            reporting_window: The time window for metrics
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/insights/{project-slug}/workflows/{workflow-name}/jobs"
            ),
            path_params=[param[str]("project-slug", project_slug), param[str]("workflow-name", workflow_name)],
            query_params=[
                param[str | None]("branch", branch),
                param[ReportingWindowOrStr | None]("reporting-window", reporting_window),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[InsightsJobMetrics],
            error_mapper=get_workflow_job_metrics_error_mapper,
            request_options=request_options,
        )

    async def get_workflow_runs(
        self,
        project_slug: str,
        workflow_name: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsWorkflowRuns, GetWorkflowRunsErrorBody]:
        """Returns recent runs of a named workflow, containing status, duration, and credits consumed.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            branch: Filter by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/insights/{project-slug}/workflows/{workflow-name}"
            ),
            path_params=[param[str]("project-slug", project_slug), param[str]("workflow-name", workflow_name)],
            query_params=[param[str | None]("branch", branch), param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[InsightsWorkflowRuns],
            error_mapper=get_workflow_runs_error_mapper,
            request_options=request_options,
        )

    async def get_workflow_test_metrics(
        self, project_slug: str, workflow_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InsightsTestMetrics, GetWorkflowTestMetricsErrorBody]:
        """Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            workflow_name: The name of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/insights/{project-slug}/workflows/{workflow-name}/test-metrics"
            ),
            path_params=[param[str]("project-slug", project_slug), param[str]("workflow-name", workflow_name)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[InsightsTestMetrics],
            error_mapper=get_workflow_test_metrics_error_mapper,
            request_options=request_options,
        )
