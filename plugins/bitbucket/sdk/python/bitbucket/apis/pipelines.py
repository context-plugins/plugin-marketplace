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
    RawError,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_deployment_variable_error import (
    CreateDeploymentVariableErrorBody,
    create_deployment_variable_error_mapper,
)
from ..errors.create_pipeline_for_repository_error import (
    CreatePipelineForRepositoryErrorBody,
    create_pipeline_for_repository_error_mapper,
)
from ..errors.create_pipeline_variable_for_team_error import (
    CreatePipelineVariableForTeamErrorBody,
    create_pipeline_variable_for_team_error_mapper,
)
from ..errors.create_pipeline_variable_for_user_error import (
    CreatePipelineVariableForUserErrorBody,
    create_pipeline_variable_for_user_error_mapper,
)
from ..errors.create_pipeline_variable_for_workspace_error import (
    CreatePipelineVariableForWorkspaceErrorBody,
    create_pipeline_variable_for_workspace_error_mapper,
)
from ..errors.create_repository_pipeline_known_host_error import (
    CreateRepositoryPipelineKnownHostErrorBody,
    create_repository_pipeline_known_host_error_mapper,
)
from ..errors.create_repository_pipeline_schedule_error import (
    CreateRepositoryPipelineScheduleErrorBody,
    create_repository_pipeline_schedule_error_mapper,
)
from ..errors.create_repository_pipeline_variable_error import (
    CreateRepositoryPipelineVariableErrorBody,
    create_repository_pipeline_variable_error_mapper,
)
from ..errors.create_repository_runner_error import (
    CreateRepositoryRunnerErrorBody,
    create_repository_runner_error_mapper,
)
from ..errors.create_workspace_runner_error import CreateWorkspaceRunnerErrorBody, create_workspace_runner_error_mapper
from ..errors.delete_deployment_variable_error import (
    DeleteDeploymentVariableErrorBody,
    delete_deployment_variable_error_mapper,
)
from ..errors.delete_pipeline_variable_for_team_error import (
    DeletePipelineVariableForTeamErrorBody,
    delete_pipeline_variable_for_team_error_mapper,
)
from ..errors.delete_pipeline_variable_for_user_error import (
    DeletePipelineVariableForUserErrorBody,
    delete_pipeline_variable_for_user_error_mapper,
)
from ..errors.delete_pipeline_variable_for_workspace_error import (
    DeletePipelineVariableForWorkspaceErrorBody,
    delete_pipeline_variable_for_workspace_error_mapper,
)
from ..errors.delete_repository_pipeline_cache_error import (
    DeleteRepositoryPipelineCacheErrorBody,
    delete_repository_pipeline_cache_error_mapper,
)
from ..errors.delete_repository_pipeline_caches_error import (
    DeleteRepositoryPipelineCachesErrorBody,
    delete_repository_pipeline_caches_error_mapper,
)
from ..errors.delete_repository_pipeline_key_pair_error import (
    DeleteRepositoryPipelineKeyPairErrorBody,
    delete_repository_pipeline_key_pair_error_mapper,
)
from ..errors.delete_repository_pipeline_known_host_error import (
    DeleteRepositoryPipelineKnownHostErrorBody,
    delete_repository_pipeline_known_host_error_mapper,
)
from ..errors.delete_repository_pipeline_schedule_error import (
    DeleteRepositoryPipelineScheduleErrorBody,
    delete_repository_pipeline_schedule_error_mapper,
)
from ..errors.delete_repository_pipeline_variable_error import (
    DeleteRepositoryPipelineVariableErrorBody,
    delete_repository_pipeline_variable_error_mapper,
)
from ..errors.delete_repository_runner_error import (
    DeleteRepositoryRunnerErrorBody,
    delete_repository_runner_error_mapper,
)
from ..errors.delete_workspace_runner_error import DeleteWorkspaceRunnerErrorBody, delete_workspace_runner_error_mapper
from ..errors.get_oidc_configuration_error import GetOidcConfigurationErrorBody, get_oidc_configuration_error_mapper
from ..errors.get_oidc_keys_error import GetOidcKeysErrorBody, get_oidc_keys_error_mapper
from ..errors.get_pipeline_container_log_error import (
    GetPipelineContainerLogErrorBody,
    get_pipeline_container_log_error_mapper,
)
from ..errors.get_pipeline_for_repository_error import (
    GetPipelineForRepositoryErrorBody,
    get_pipeline_for_repository_error_mapper,
)
from ..errors.get_pipeline_step_for_repository_error import (
    GetPipelineStepForRepositoryErrorBody,
    get_pipeline_step_for_repository_error_mapper,
)
from ..errors.get_pipeline_step_log_for_repository_error import (
    GetPipelineStepLogForRepositoryErrorBody,
    get_pipeline_step_log_for_repository_error_mapper,
)
from ..errors.get_pipeline_test_report_test_case_reasons_error import (
    GetPipelineTestReportTestCaseReasonsErrorBody,
    get_pipeline_test_report_test_case_reasons_error_mapper,
)
from ..errors.get_pipeline_test_report_test_cases_error import (
    GetPipelineTestReportTestCasesErrorBody,
    get_pipeline_test_report_test_cases_error_mapper,
)
from ..errors.get_pipeline_test_reports_error import (
    GetPipelineTestReportsErrorBody,
    get_pipeline_test_reports_error_mapper,
)
from ..errors.get_pipeline_variable_for_team_error import (
    GetPipelineVariableForTeamErrorBody,
    get_pipeline_variable_for_team_error_mapper,
)
from ..errors.get_pipeline_variable_for_user_error import (
    GetPipelineVariableForUserErrorBody,
    get_pipeline_variable_for_user_error_mapper,
)
from ..errors.get_pipeline_variable_for_workspace_error import (
    GetPipelineVariableForWorkspaceErrorBody,
    get_pipeline_variable_for_workspace_error_mapper,
)
from ..errors.get_repository_pipeline_cache_content_uri_error import (
    GetRepositoryPipelineCacheContentUriErrorBody,
    get_repository_pipeline_cache_content_uri_error_mapper,
)
from ..errors.get_repository_pipeline_caches_error import (
    GetRepositoryPipelineCachesErrorBody,
    get_repository_pipeline_caches_error_mapper,
)
from ..errors.get_repository_pipeline_known_host_error import (
    GetRepositoryPipelineKnownHostErrorBody,
    get_repository_pipeline_known_host_error_mapper,
)
from ..errors.get_repository_pipeline_schedule_error import (
    GetRepositoryPipelineScheduleErrorBody,
    get_repository_pipeline_schedule_error_mapper,
)
from ..errors.get_repository_pipeline_schedule_executions_error import (
    GetRepositoryPipelineScheduleExecutionsErrorBody,
    get_repository_pipeline_schedule_executions_error_mapper,
)
from ..errors.get_repository_pipeline_schedules_error import (
    GetRepositoryPipelineSchedulesErrorBody,
    get_repository_pipeline_schedules_error_mapper,
)
from ..errors.get_repository_pipeline_ssh_key_pair_error import (
    GetRepositoryPipelineSshKeyPairErrorBody,
    get_repository_pipeline_ssh_key_pair_error_mapper,
)
from ..errors.get_repository_pipeline_variable_error import (
    GetRepositoryPipelineVariableErrorBody,
    get_repository_pipeline_variable_error_mapper,
)
from ..errors.get_repository_runner_error import GetRepositoryRunnerErrorBody, get_repository_runner_error_mapper
from ..errors.get_workspace_runner_error import GetWorkspaceRunnerErrorBody, get_workspace_runner_error_mapper
from ..errors.stop_pipeline_error import StopPipelineErrorBody, stop_pipeline_error_mapper
from ..errors.update_deployment_variable_error import (
    UpdateDeploymentVariableErrorBody,
    update_deployment_variable_error_mapper,
)
from ..errors.update_pipeline_variable_for_team_error import (
    UpdatePipelineVariableForTeamErrorBody,
    update_pipeline_variable_for_team_error_mapper,
)
from ..errors.update_pipeline_variable_for_user_error import (
    UpdatePipelineVariableForUserErrorBody,
    update_pipeline_variable_for_user_error_mapper,
)
from ..errors.update_pipeline_variable_for_workspace_error import (
    UpdatePipelineVariableForWorkspaceErrorBody,
    update_pipeline_variable_for_workspace_error_mapper,
)
from ..errors.update_repository_build_number_error import (
    UpdateRepositoryBuildNumberErrorBody,
    update_repository_build_number_error_mapper,
)
from ..errors.update_repository_pipeline_key_pair_error import (
    UpdateRepositoryPipelineKeyPairErrorBody,
    update_repository_pipeline_key_pair_error_mapper,
)
from ..errors.update_repository_pipeline_known_host_error import (
    UpdateRepositoryPipelineKnownHostErrorBody,
    update_repository_pipeline_known_host_error_mapper,
)
from ..errors.update_repository_pipeline_schedule_error import (
    UpdateRepositoryPipelineScheduleErrorBody,
    update_repository_pipeline_schedule_error_mapper,
)
from ..errors.update_repository_pipeline_variable_error import (
    UpdateRepositoryPipelineVariableErrorBody,
    update_repository_pipeline_variable_error_mapper,
)
from ..errors.update_repository_runner_error import (
    UpdateRepositoryRunnerErrorBody,
    update_repository_runner_error_mapper,
)
from ..errors.update_workspace_runner_error import UpdateWorkspaceRunnerErrorBody, update_workspace_runner_error_mapper
from ..models.deployment_variable import DeploymentVariable, DeploymentVariableDict
from ..models.enums.sort import SortOrStr
from ..models.enums.status1 import Status1OrStr
from ..models.enums.target_ref_type import TargetRefTypeOrStr
from ..models.enums.target_selector_type import TargetSelectorTypeOrStr
from ..models.enums.trigger_type import TriggerTypeOrStr
from ..models.paginated_deployment_variables import PaginatedDeploymentVariables
from ..models.paginated_pipeline_cache import PaginatedPipelineCache
from ..models.paginated_pipeline_known_hosts import PaginatedPipelineKnownHosts
from ..models.paginated_pipeline_schedule import PaginatedPipelineSchedule
from ..models.paginated_pipeline_schedule_executions import PaginatedPipelineScheduleExecutions
from ..models.paginated_pipeline_steps import PaginatedPipelineSteps
from ..models.paginated_pipeline_variables import PaginatedPipelineVariables
from ..models.paginated_pipelines import PaginatedPipelines
from ..models.paginated_runners import PaginatedRunners
from ..models.pipeline import Pipeline, PipelineDict
from ..models.pipeline_build_number import PipelineBuildNumber, PipelineBuildNumberDict
from ..models.pipeline_cache_content_uri import PipelineCacheContentUri
from ..models.pipeline_known_host import PipelineKnownHost, PipelineKnownHostDict
from ..models.pipeline_runner import PipelineRunner
from ..models.pipeline_schedule import PipelineSchedule
from ..models.pipeline_schedule_post_request_body import (
    PipelineSchedulePostRequestBody,
    PipelineSchedulePostRequestBodyDict,
)
from ..models.pipeline_schedule_put_request_body import (
    PipelineSchedulePutRequestBody,
    PipelineSchedulePutRequestBodyDict,
)
from ..models.pipeline_ssh_key_pair import PipelineSshKeyPair, PipelineSshKeyPairDict
from ..models.pipeline_step import PipelineStep
from ..models.pipeline_variable import PipelineVariable, PipelineVariableDict
from ..models.pipelines_config import PipelinesConfig, PipelinesConfigDict
from ..server.server import Server


class Pipelines:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PipelinesWithRawResponse(client, server, auth)

    def create_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeploymentVariable:
        """Create a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            body: The variable to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was created.

        Raises:
            ApiError: The account, repository, environment or variable with the given UUID was not found. A variable
                with the provided key already exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_deployment_variable(
                workspace, repo_slug, environment_uuid, body, request_options=request_options
            ),
        )

    def create_pipeline_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        body: Pipeline | PipelineDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Endpoint to create and initiate a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The pipeline to initiate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The initiated pipeline.

        Raises:
            ApiError: The account or repository is not enabled, the yml file does not exist in the repository for the
                given revision, or the request body contained invalid properties. The account or repository was not
                found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_pipeline_for_repository(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def create_pipeline_variable_for_team(
        self,
        username: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created variable.

        Raises:
            ApiError: The account does not exist. A variable with the provided key already exists. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.create_pipeline_variable_for_team(
                username, body=body, request_options=request_options
            ),
        )

    def create_pipeline_variable_for_user(
        self,
        selected_user: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created variable.

        Raises:
            ApiError: The account does not exist. A variable with the provided key already exists. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.create_pipeline_variable_for_user(
                selected_user, body=body, request_options=request_options
            ),
        )

    def create_pipeline_variable_for_workspace(
        self,
        workspace: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created variable.

        Raises:
            ApiError: The workspace does not exist. A variable with the provided key already exists. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_pipeline_variable_for_workspace(
                workspace, body=body, request_options=request_options
            ),
        )

    def create_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineKnownHost:
        """Create a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The known host to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host was created.

        Raises:
            ApiError: The account or repository does not exist. A known host with the provided hostname already exists.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_repository_pipeline_known_host(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def create_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineSchedule:
        """Create a schedule for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The schedule to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created schedule.

        Raises:
            ApiError: There were errors validating the request. The maximum limit of schedules for this repository was
                reached. The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_repository_pipeline_schedule(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def create_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was created.

        Raises:
            ApiError: The account or repository does not exist. A variable with the provided key already exists.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_repository_pipeline_variable(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def create_repository_runner(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Create repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner.

        Raises:
            ApiError: The request body contained invalid properties or runner limit exceeded. The repository runner with
                the provided UUID already exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_repository_runner(workspace, repo_slug, request_options=request_options)
        )

    def create_workspace_runner(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Create workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner.

        Raises:
            ApiError: The request body contained invalid properties or runner limit exceeded. The workspace runner with
                the provided UUID already exists. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_workspace_runner(workspace, request_options=request_options))

    def delete_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted.

        Raises:
            ApiError: The account, repository, environment or variable with given UUID was not found. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_deployment_variable(
                workspace, repo_slug, environment_uuid, variable_uuid, request_options=request_options
            ),
        )

    def delete_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted

        Raises:
            ApiError: The account or the variable with the provided UUID does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_pipeline_variable_for_team(
                username, variable_uuid, request_options=request_options
            ),
        )

    def delete_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted

        Raises:
            ApiError: The account or the variable with the provided UUID does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_pipeline_variable_for_user(
                selected_user, variable_uuid, request_options=request_options
            ),
        )

    def delete_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted

        Raises:
            ApiError: The workspace or the variable with the provided UUID does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_pipeline_variable_for_workspace(
                workspace, variable_uuid, request_options=request_options
            ),
        )

    def delete_repository_pipeline_cache(
        self, workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a repository cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The cache was deleted.

        Raises:
            ApiError: The workspace, repository or cache_uuid with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_pipeline_cache(
                workspace, repo_slug, cache_uuid, request_options=request_options
            ),
        )

    def delete_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete repository cache versions by name.

        Args:
            workspace: The account.
            repo_slug: The repository.
            name: The cache name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The caches were deleted.

        Raises:
            ApiError: The workspace, repository or cache name was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_pipeline_caches(
                workspace, repo_slug, name, request_options=request_options
            ),
        )

    def delete_repository_pipeline_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete the repository SSH key pair.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SSH key pair was deleted.

        Raises:
            ApiError: The account, repository or SSH key pair was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_pipeline_key_pair(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def delete_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host was deleted.

        Raises:
            ApiError: The account, repository or known host with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_pipeline_known_host(
                workspace, repo_slug, known_host_uuid, request_options=request_options
            ),
        )

    def delete_repository_pipeline_schedule(
        self, workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The schedule was deleted.

        Raises:
            ApiError: The account, repository or schedule was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_pipeline_schedule(
                workspace, repo_slug, schedule_uuid, request_options=request_options
            ),
        )

    def delete_repository_pipeline_variable(
        self, workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted.

        Raises:
            ApiError: The account, repository or variable with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_pipeline_variable(
                workspace, repo_slug, variable_uuid, request_options=request_options
            ),
        )

    def delete_repository_runner(
        self, workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner was deleted.

        Raises:
            ApiError: The repository runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repository_runner(
                workspace, repo_slug, runner_uuid, request_options=request_options
            ),
        )

    def delete_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner was deleted.

        Raises:
            ApiError: The workspace runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspace_runner(workspace, runner_uuid, request_options=request_options)
        )

    def get_deployment_variables(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedDeploymentVariables:
        """Find deployment environment level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved deployment variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_deployment_variables(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    def get_oidc_configuration(self, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The OpenID configuration

        Raises:
            ApiError: The workspace was not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_oidc_configuration(workspace, request_options=request_options))

    def get_oidc_keys(self, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The keys in JSON web key format

        Raises:
            ApiError: The workspace was not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_oidc_keys(workspace, request_options=request_options))

    def get_pipeline_container_log(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        log_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieve the log file for a build container or service container.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            log_uuid: For the main build container specify the step UUID; for a service container specify the service
                container UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw log file for the build container or service container.

        Raises:
            ApiError: No account, repository, pipeline, step or log exist for the provided path. ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_container_log(
                workspace, repo_slug, pipeline_uuid, step_uuid, log_uuid, request_options=request_options
            ),
        )

    def get_pipeline_for_repository(
        self, workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Pipeline:
        """Retrieve a specified pipeline

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The pipeline UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pipeline.

        Raises:
            ApiError: No account, repository or pipeline with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_for_repository(
                workspace, repo_slug, pipeline_uuid, request_options=request_options
            ),
        )

    def get_pipeline_step_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineStep:
        """Retrieve a given step of a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The step.

        Raises:
            ApiError: No account, repository, pipeline or step with the UUID provided exists for the pipeline with the
                UUID provided. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_step_for_repository(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    def get_pipeline_step_log_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieve the log file for a given step of a pipeline.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw log file for this pipeline step.

        Raises:
            ApiError: A pipeline with the given UUID does not exist, a step with the given UUID does not exist in the
                pipeline or a log file does not exist for the given step. The requested range does not exist for
                requests that specified the `HTTP Range header <https://tools.ietf.org/html/rfc7233#section-3.1>`__.
                ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_step_log_for_repository(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    def get_pipeline_steps_for_repository(
        self, workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineSteps:
        """Find steps for the given pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The steps.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_steps_for_repository(
                workspace, repo_slug, pipeline_uuid, request_options=request_options
            ),
        )

    def get_pipeline_test_report_test_case_reasons(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        test_case_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            test_case_uuid: The UUID of the test case.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test case reasons (output).

        Raises:
            ApiError: No account, repository, pipeline, step or test case with the UUID provided exists for the pipeline
                with the UUID provided. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_test_report_test_case_reasons(
                workspace, repo_slug, pipeline_uuid, step_uuid, test_case_uuid, request_options=request_options
            ),
        )

    def get_pipeline_test_report_test_cases(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test cases for this pipeline step.

        Raises:
            ApiError: No account, repository, pipeline, step or test reports exist for the provided path. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_test_report_test_cases(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    def get_pipeline_test_reports(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A summary of test reports for this pipeline step.

        Raises:
            ApiError: No account, repository, pipeline, step or test reports exist for the provided path. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_test_reports(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    def get_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The account or variable with the given UUID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_variable_for_team(
                username, variable_uuid, request_options=request_options
            ),
        )

    def get_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The account or variable with the given UUID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_variable_for_user(
                selected_user, variable_uuid, request_options=request_options
            ),
        )

    def get_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The workspace or variable with the given UUID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_variable_for_workspace(
                workspace, variable_uuid, request_options=request_options
            ),
        )

    def get_pipeline_variables_for_team(
        self, username: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find account level variables. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The found account level variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_variables_for_team(username, request_options=request_options)
        )

    def get_pipeline_variables_for_user(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find user level variables. This endpoint has been deprecated, and you should use the new workspaces endpoint.
        For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The found user level variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_variables_for_user(selected_user, request_options=request_options)
        )

    def get_pipeline_variables_for_workspace(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find workspace level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The found workspace level variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipeline_variables_for_workspace(workspace, request_options=request_options)
        )

    def get_pipelines_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        *,
        creator_uuid: UUID | None = None,
        target_ref_type: TargetRefTypeOrStr | None = None,
        target_ref_name: str | None = None,
        target_branch: str | None = None,
        target_commit_hash: str | None = None,
        target_selector_pattern: str | None = None,
        target_selector_type: TargetSelectorTypeOrStr | None = None,
        created_on: RFC3339DateTime | None = None,
        trigger_type: TriggerTypeOrStr | None = None,
        status: Status1OrStr | None = None,
        sort: SortOrStr | None = None,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedPipelines:
        """Find pipelines in a repository.

        Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow
        filtering and sorting of returned results. See query parameters for specific details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            creator_uuid: The UUID of the creator of the pipeline to filter by.
            target_ref_type: The type of the reference to filter by.
            target_ref_name: The reference name to filter by.
            target_branch: The name of the branch to filter by.
            target_commit_hash: The revision to filter by.
            target_selector_pattern: The pipeline pattern to filter by.
            target_selector_type: The type of pipeline to filter by.
            created_on: The creation date to filter by.
            trigger_type: The trigger type to filter by.
            status: The pipeline status to filter by.
            sort: The attribute name to sort on.
            page: The page number of elements to retrieve.
            pagelen: The maximum number of results to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching pipelines.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_pipelines_for_repository(
                workspace,
                repo_slug,
                creator_uuid=creator_uuid,
                target_ref_type=target_ref_type,
                target_ref_name=target_ref_name,
                target_branch=target_branch,
                target_commit_hash=target_commit_hash,
                target_selector_pattern=target_selector_pattern,
                target_selector_type=target_selector_type,
                created_on=created_on,
                trigger_type=trigger_type,
                status=status,
                sort=sort,
                page=page,
                pagelen=pagelen,
                request_options=request_options,
            ),
        )

    def get_repository_pipeline_cache_content_uri(
        self, workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineCacheContentUri:
        """Retrieve the URI of the content of the specified cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The cache content uri.

        Raises:
            ApiError: The workspace, repository or cache_uuid with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_cache_content_uri(
                workspace, repo_slug, cache_uuid, request_options=request_options
            ),
        )

    def get_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineCache:
        """Retrieve the repository pipelines caches.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of caches for the given repository.

        Raises:
            ApiError: The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_caches(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repository_pipeline_config(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelinesConfig:
        """Retrieve the repository pipelines configuration.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository pipelines configuration.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_config(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineKnownHost:
        """Retrieve a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host.

        Raises:
            ApiError: The account, repository or known host with the specified UUID was not found. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_known_host(
                workspace, repo_slug, known_host_uuid, request_options=request_options
            ),
        )

    def get_repository_pipeline_known_hosts(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineKnownHosts:
        """Find repository level known hosts.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved known hosts.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_known_hosts(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repository_pipeline_schedule(
        self, workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineSchedule:
        """Retrieve a schedule by its UUID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested schedule.

        Raises:
            ApiError: The account, repository or schedule was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_schedule(
                workspace, repo_slug, schedule_uuid, request_options=request_options
            ),
        )

    def get_repository_pipeline_schedule_executions(
        self, workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineScheduleExecutions:
        """Retrieve the executions of a given schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of executions of a schedule.

        Raises:
            ApiError: The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_schedule_executions(
                workspace, repo_slug, schedule_uuid, request_options=request_options
            ),
        )

    def get_repository_pipeline_schedules(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineSchedule:
        """Retrieve the configured schedules for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of schedules.

        Raises:
            ApiError: The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_schedules(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repository_pipeline_ssh_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineSshKeyPair:
        """Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and
        will never be exposed in the logs or the REST API.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SSH key pair.

        Raises:
            ApiError: The account, repository or SSH key pair was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_ssh_key_pair(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repository_pipeline_variable(
        self, workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The account, repository or variable with the specified UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_variable(
                workspace, repo_slug, variable_uuid, request_options=request_options
            ),
        )

    def get_repository_pipeline_variables(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find repository level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_pipeline_variables(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repository_runner(
        self, workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Retrieve repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner.

        Raises:
            ApiError: The repository runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_runner(
                workspace, repo_slug, runner_uuid, request_options=request_options
            ),
        )

    def get_repository_runners(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedRunners:
        """Retrieve repository runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runners.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repository_runners(workspace, repo_slug, request_options=request_options)
        )

    def get_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Get workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner.

        Raises:
            ApiError: The workspace runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspace_runner(workspace, runner_uuid, request_options=request_options)
        )

    def get_workspace_runners(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedRunners:
        """Retrieve workspace runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runners.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_workspace_runners(workspace, request_options=request_options))

    def stop_pipeline(
        self, workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Signal the stop of a pipeline and all of its steps that not have completed yet.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pipeline has been signaled to stop.

        Raises:
            ApiError: Either the account, repository or pipeline with the given UUID does not exist. The specified
                pipeline has already completed. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.stop_pipeline(workspace, repo_slug, pipeline_uuid, request_options=request_options)
        )

    def update_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeploymentVariable:
        """Update a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to update.
            body: The updated deployment variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployment variable was updated.

        Raises:
            ApiError: The account, repository, environment or variable with the given UUID was not found. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_deployment_variable(
                workspace, repo_slug, environment_uuid, variable_uuid, body, request_options=request_options
            ),
        )

    def update_pipeline_variable_for_team(
        self,
        username: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The account or the variable was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_pipeline_variable_for_team(
                username, variable_uuid, body, request_options=request_options
            ),
        )

    def update_pipeline_variable_for_user(
        self,
        selected_user: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The account or the variable was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_pipeline_variable_for_user(
                selected_user, variable_uuid, body, request_options=request_options
            ),
        )

    def update_pipeline_variable_for_workspace(
        self,
        workspace: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The workspace or the variable was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_pipeline_variable_for_workspace(
                workspace, variable_uuid, body, request_options=request_options
            ),
        )

    def update_repository_build_number(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineBuildNumber | PipelineBuildNumberDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineBuildNumber:
        """Update the next build number that should be assigned to a pipeline. The next build number that will be
        configured has to be strictly higher than the current latest build number for this repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The build number to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The build number has been configured.

        Raises:
            ApiError: The account or repository was not found. The update failed because the next number was invalid (it
                should be higher than the current number). ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_build_number(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def update_repository_pipeline_config(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelinesConfig | PipelinesConfigDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelinesConfig:
        """Update the pipelines configuration for a repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The updated repository pipelines configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository pipelines configuration was updated.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_pipeline_config(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def update_repository_pipeline_key_pair(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSshKeyPair | PipelineSshKeyPairDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineSshKeyPair:
        """Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your
        build container.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The created or updated SSH key pair.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SSH key pair was created or updated.

        Raises:
            ApiError: The account, repository or SSH key pair was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_pipeline_key_pair(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    def update_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineKnownHost:
        """Update a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to update.
            body: The updated known host.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host was updated.

        Raises:
            ApiError: The account, repository or known host with the given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_pipeline_known_host(
                workspace, repo_slug, known_host_uuid, body, request_options=request_options
            ),
        )

    def update_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        body: PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineSchedule:
        """Update a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            body: The schedule to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The schedule is updated.

        Raises:
            ApiError: The account, repository or schedule was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_pipeline_schedule(
                workspace, repo_slug, schedule_uuid, body, request_options=request_options
            ),
        )

    def update_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to update.
            body: The updated variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The account, repository or variable with the given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_pipeline_variable(
                workspace, repo_slug, variable_uuid, body, request_options=request_options
            ),
        )

    def update_repository_runner(
        self, workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Update repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner.

        Raises:
            ApiError: The repository runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_repository_runner(
                workspace, repo_slug, runner_uuid, request_options=request_options
            ),
        )

    def update_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Update workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner.

        Raises:
            ApiError: The workspace runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_workspace_runner(workspace, runner_uuid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PipelinesWithRawResponse:
        return self._with_raw_response


class AsyncPipelines:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPipelinesWithRawResponse(client, server, auth)

    async def create_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeploymentVariable:
        """Create a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            body: The variable to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was created.

        Raises:
            ApiError: The account, repository, environment or variable with the given UUID was not found. A variable
                with the provided key already exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_deployment_variable(
                workspace, repo_slug, environment_uuid, body, request_options=request_options
            ),
        )

    async def create_pipeline_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        body: Pipeline | PipelineDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Endpoint to create and initiate a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The pipeline to initiate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The initiated pipeline.

        Raises:
            ApiError: The account or repository is not enabled, the yml file does not exist in the repository for the
                given revision, or the request body contained invalid properties. The account or repository was not
                found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_pipeline_for_repository(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def create_pipeline_variable_for_team(
        self,
        username: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created variable.

        Raises:
            ApiError: The account does not exist. A variable with the provided key already exists. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.create_pipeline_variable_for_team(
                username, body=body, request_options=request_options
            ),
        )

    async def create_pipeline_variable_for_user(
        self,
        selected_user: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created variable.

        Raises:
            ApiError: The account does not exist. A variable with the provided key already exists. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.create_pipeline_variable_for_user(
                selected_user, body=body, request_options=request_options
            ),
        )

    async def create_pipeline_variable_for_workspace(
        self,
        workspace: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created variable.

        Raises:
            ApiError: The workspace does not exist. A variable with the provided key already exists. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_pipeline_variable_for_workspace(
                workspace, body=body, request_options=request_options
            ),
        )

    async def create_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineKnownHost:
        """Create a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The known host to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host was created.

        Raises:
            ApiError: The account or repository does not exist. A known host with the provided hostname already exists.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_repository_pipeline_known_host(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def create_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineSchedule:
        """Create a schedule for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The schedule to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created schedule.

        Raises:
            ApiError: There were errors validating the request. The maximum limit of schedules for this repository was
                reached. The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_repository_pipeline_schedule(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def create_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Create a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was created.

        Raises:
            ApiError: The account or repository does not exist. A variable with the provided key already exists.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_repository_pipeline_variable(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def create_repository_runner(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Create repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner.

        Raises:
            ApiError: The request body contained invalid properties or runner limit exceeded. The repository runner with
                the provided UUID already exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_repository_runner(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def create_workspace_runner(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Create workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner.

        Raises:
            ApiError: The request body contained invalid properties or runner limit exceeded. The workspace runner with
                the provided UUID already exists. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_workspace_runner(workspace, request_options=request_options))

    async def delete_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted.

        Raises:
            ApiError: The account, repository, environment or variable with given UUID was not found. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_deployment_variable(
                workspace, repo_slug, environment_uuid, variable_uuid, request_options=request_options
            ),
        )

    async def delete_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted

        Raises:
            ApiError: The account or the variable with the provided UUID does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_pipeline_variable_for_team(
                username, variable_uuid, request_options=request_options
            ),
        )

    async def delete_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted

        Raises:
            ApiError: The account or the variable with the provided UUID does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_pipeline_variable_for_user(
                selected_user, variable_uuid, request_options=request_options
            ),
        )

    async def delete_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted

        Raises:
            ApiError: The workspace or the variable with the provided UUID does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_pipeline_variable_for_workspace(
                workspace, variable_uuid, request_options=request_options
            ),
        )

    async def delete_repository_pipeline_cache(
        self,
        workspace: str,
        repo_slug: str,
        cache_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a repository cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The cache was deleted.

        Raises:
            ApiError: The workspace, repository or cache_uuid with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_pipeline_cache(
                workspace, repo_slug, cache_uuid, request_options=request_options
            ),
        )

    async def delete_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete repository cache versions by name.

        Args:
            workspace: The account.
            repo_slug: The repository.
            name: The cache name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The caches were deleted.

        Raises:
            ApiError: The workspace, repository or cache name was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_pipeline_caches(
                workspace, repo_slug, name, request_options=request_options
            ),
        )

    async def delete_repository_pipeline_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete the repository SSH key pair.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SSH key pair was deleted.

        Raises:
            ApiError: The account, repository or SSH key pair was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_pipeline_key_pair(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def delete_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host was deleted.

        Raises:
            ApiError: The account, repository or known host with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_pipeline_known_host(
                workspace, repo_slug, known_host_uuid, request_options=request_options
            ),
        )

    async def delete_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The schedule was deleted.

        Raises:
            ApiError: The account, repository or schedule was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_pipeline_schedule(
                workspace, repo_slug, schedule_uuid, request_options=request_options
            ),
        )

    async def delete_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was deleted.

        Raises:
            ApiError: The account, repository or variable with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_pipeline_variable(
                workspace, repo_slug, variable_uuid, request_options=request_options
            ),
        )

    async def delete_repository_runner(
        self,
        workspace: str,
        repo_slug: str,
        runner_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner was deleted.

        Raises:
            ApiError: The repository runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repository_runner(
                workspace, repo_slug, runner_uuid, request_options=request_options
            ),
        )

    async def delete_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner was deleted.

        Raises:
            ApiError: The workspace runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspace_runner(
                workspace, runner_uuid, request_options=request_options
            ),
        )

    async def get_deployment_variables(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedDeploymentVariables:
        """Find deployment environment level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved deployment variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_deployment_variables(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    async def get_oidc_configuration(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The OpenID configuration

        Raises:
            ApiError: The workspace was not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_oidc_configuration(workspace, request_options=request_options))

    async def get_oidc_keys(self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The keys in JSON web key format

        Raises:
            ApiError: The workspace was not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_oidc_keys(workspace, request_options=request_options))

    async def get_pipeline_container_log(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        log_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieve the log file for a build container or service container.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            log_uuid: For the main build container specify the step UUID; for a service container specify the service
                container UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw log file for the build container or service container.

        Raises:
            ApiError: No account, repository, pipeline, step or log exist for the provided path. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_container_log(
                workspace, repo_slug, pipeline_uuid, step_uuid, log_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Retrieve a specified pipeline

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The pipeline UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pipeline.

        Raises:
            ApiError: No account, repository or pipeline with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_for_repository(
                workspace, repo_slug, pipeline_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_step_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineStep:
        """Retrieve a given step of a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The step.

        Raises:
            ApiError: No account, repository, pipeline or step with the UUID provided exists for the pipeline with the
                UUID provided. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_step_for_repository(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_step_log_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieve the log file for a given step of a pipeline.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw log file for this pipeline step.

        Raises:
            ApiError: A pipeline with the given UUID does not exist, a step with the given UUID does not exist in the
                pipeline or a log file does not exist for the given step. The requested range does not exist for
                requests that specified the `HTTP Range header <https://tools.ietf.org/html/rfc7233#section-3.1>`__.
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_step_log_for_repository(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_steps_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPipelineSteps:
        """Find steps for the given pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The steps.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_steps_for_repository(
                workspace, repo_slug, pipeline_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_test_report_test_case_reasons(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        test_case_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            test_case_uuid: The UUID of the test case.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test case reasons (output).

        Raises:
            ApiError: No account, repository, pipeline, step or test case with the UUID provided exists for the pipeline
                with the UUID provided. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_test_report_test_case_reasons(
                workspace, repo_slug, pipeline_uuid, step_uuid, test_case_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_test_report_test_cases(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test cases for this pipeline step.

        Raises:
            ApiError: No account, repository, pipeline, step or test reports exist for the provided path. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_test_report_test_cases(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_test_reports(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A summary of test reports for this pipeline step.

        Raises:
            ApiError: No account, repository, pipeline, step or test reports exist for the provided path. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_test_reports(
                workspace, repo_slug, pipeline_uuid, step_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The account or variable with the given UUID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_variable_for_team(
                username, variable_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The account or variable with the given UUID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_variable_for_user(
                selected_user, variable_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineVariable:
        """Retrieve a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The workspace or variable with the given UUID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_variable_for_workspace(
                workspace, variable_uuid, request_options=request_options
            ),
        )

    async def get_pipeline_variables_for_team(
        self, username: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find account level variables. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The found account level variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_variables_for_team(username, request_options=request_options)
        )

    async def get_pipeline_variables_for_user(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find user level variables. This endpoint has been deprecated, and you should use the new workspaces endpoint.
        For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The found user level variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_variables_for_user(
                selected_user, request_options=request_options
            ),
        )

    async def get_pipeline_variables_for_workspace(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find workspace level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The found workspace level variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipeline_variables_for_workspace(
                workspace, request_options=request_options
            ),
        )

    async def get_pipelines_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        *,
        creator_uuid: UUID | None = None,
        target_ref_type: TargetRefTypeOrStr | None = None,
        target_ref_name: str | None = None,
        target_branch: str | None = None,
        target_commit_hash: str | None = None,
        target_selector_pattern: str | None = None,
        target_selector_type: TargetSelectorTypeOrStr | None = None,
        created_on: RFC3339DateTime | None = None,
        trigger_type: TriggerTypeOrStr | None = None,
        status: Status1OrStr | None = None,
        sort: SortOrStr | None = None,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPipelines:
        """Find pipelines in a repository.

        Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow
        filtering and sorting of returned results. See query parameters for specific details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            creator_uuid: The UUID of the creator of the pipeline to filter by.
            target_ref_type: The type of the reference to filter by.
            target_ref_name: The reference name to filter by.
            target_branch: The name of the branch to filter by.
            target_commit_hash: The revision to filter by.
            target_selector_pattern: The pipeline pattern to filter by.
            target_selector_type: The type of pipeline to filter by.
            created_on: The creation date to filter by.
            trigger_type: The trigger type to filter by.
            status: The pipeline status to filter by.
            sort: The attribute name to sort on.
            page: The page number of elements to retrieve.
            pagelen: The maximum number of results to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching pipelines.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pipelines_for_repository(
                workspace,
                repo_slug,
                creator_uuid=creator_uuid,
                target_ref_type=target_ref_type,
                target_ref_name=target_ref_name,
                target_branch=target_branch,
                target_commit_hash=target_commit_hash,
                target_selector_pattern=target_selector_pattern,
                target_selector_type=target_selector_type,
                created_on=created_on,
                trigger_type=trigger_type,
                status=status,
                sort=sort,
                page=page,
                pagelen=pagelen,
                request_options=request_options,
            ),
        )

    async def get_repository_pipeline_cache_content_uri(
        self,
        workspace: str,
        repo_slug: str,
        cache_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineCacheContentUri:
        """Retrieve the URI of the content of the specified cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The cache content uri.

        Raises:
            ApiError: The workspace, repository or cache_uuid with given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_cache_content_uri(
                workspace, repo_slug, cache_uuid, request_options=request_options
            ),
        )

    async def get_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineCache:
        """Retrieve the repository pipelines caches.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of caches for the given repository.

        Raises:
            ApiError: The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_caches(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repository_pipeline_config(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelinesConfig:
        """Retrieve the repository pipelines configuration.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository pipelines configuration.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_config(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineKnownHost:
        """Retrieve a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host.

        Raises:
            ApiError: The account, repository or known host with the specified UUID was not found. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_known_host(
                workspace, repo_slug, known_host_uuid, request_options=request_options
            ),
        )

    async def get_repository_pipeline_known_hosts(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineKnownHosts:
        """Find repository level known hosts.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved known hosts.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_known_hosts(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineSchedule:
        """Retrieve a schedule by its UUID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested schedule.

        Raises:
            ApiError: The account, repository or schedule was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_schedule(
                workspace, repo_slug, schedule_uuid, request_options=request_options
            ),
        )

    async def get_repository_pipeline_schedule_executions(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPipelineScheduleExecutions:
        """Retrieve the executions of a given schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of executions of a schedule.

        Raises:
            ApiError: The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_schedule_executions(
                workspace, repo_slug, schedule_uuid, request_options=request_options
            ),
        )

    async def get_repository_pipeline_schedules(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineSchedule:
        """Retrieve the configured schedules for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of schedules.

        Raises:
            ApiError: The account or repository was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_schedules(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repository_pipeline_ssh_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineSshKeyPair:
        """Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and
        will never be exposed in the logs or the REST API.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SSH key pair.

        Raises:
            ApiError: The account, repository or SSH key pair was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_ssh_key_pair(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Retrieve a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable.

        Raises:
            ApiError: The account, repository or variable with the specified UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_variable(
                workspace, repo_slug, variable_uuid, request_options=request_options
            ),
        )

    async def get_repository_pipeline_variables(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedPipelineVariables:
        """Find repository level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved variables.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_pipeline_variables(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repository_runner(
        self,
        workspace: str,
        repo_slug: str,
        runner_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineRunner:
        """Retrieve repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner.

        Raises:
            ApiError: The repository runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_runner(
                workspace, repo_slug, runner_uuid, request_options=request_options
            ),
        )

    async def get_repository_runners(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedRunners:
        """Retrieve repository runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runners.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repository_runners(workspace, repo_slug, request_options=request_options)
        )

    async def get_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Get workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner.

        Raises:
            ApiError: The workspace runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspace_runner(workspace, runner_uuid, request_options=request_options)
        )

    async def get_workspace_runners(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedRunners:
        """Retrieve workspace runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runners.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_workspace_runners(workspace, request_options=request_options))

    async def stop_pipeline(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Signal the stop of a pipeline and all of its steps that not have completed yet.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pipeline has been signaled to stop.

        Raises:
            ApiError: Either the account, repository or pipeline with the given UUID does not exist. The specified
                pipeline has already completed. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.stop_pipeline(
                workspace, repo_slug, pipeline_uuid, request_options=request_options
            ),
        )

    async def update_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeploymentVariable:
        """Update a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to update.
            body: The updated deployment variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployment variable was updated.

        Raises:
            ApiError: The account, repository, environment or variable with the given UUID was not found. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_deployment_variable(
                workspace, repo_slug, environment_uuid, variable_uuid, body, request_options=request_options
            ),
        )

    async def update_pipeline_variable_for_team(
        self,
        username: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The account or the variable was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_pipeline_variable_for_team(
                username, variable_uuid, body, request_options=request_options
            ),
        )

    async def update_pipeline_variable_for_user(
        self,
        selected_user: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The account or the variable was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_pipeline_variable_for_user(
                selected_user, variable_uuid, body, request_options=request_options
            ),
        )

    async def update_pipeline_variable_for_workspace(
        self,
        workspace: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The workspace or the variable was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_pipeline_variable_for_workspace(
                workspace, variable_uuid, body, request_options=request_options
            ),
        )

    async def update_repository_build_number(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineBuildNumber | PipelineBuildNumberDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineBuildNumber:
        """Update the next build number that should be assigned to a pipeline. The next build number that will be
        configured has to be strictly higher than the current latest build number for this repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The build number to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The build number has been configured.

        Raises:
            ApiError: The account or repository was not found. The update failed because the next number was invalid (it
                should be higher than the current number). ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_build_number(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def update_repository_pipeline_config(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelinesConfig | PipelinesConfigDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelinesConfig:
        """Update the pipelines configuration for a repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The updated repository pipelines configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository pipelines configuration was updated.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_pipeline_config(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def update_repository_pipeline_key_pair(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSshKeyPair | PipelineSshKeyPairDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineSshKeyPair:
        """Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your
        build container.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The created or updated SSH key pair.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The SSH key pair was created or updated.

        Raises:
            ApiError: The account, repository or SSH key pair was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_pipeline_key_pair(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def update_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineKnownHost:
        """Update a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to update.
            body: The updated known host.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The known host was updated.

        Raises:
            ApiError: The account, repository or known host with the given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_pipeline_known_host(
                workspace, repo_slug, known_host_uuid, body, request_options=request_options
            ),
        )

    async def update_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        body: PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineSchedule:
        """Update a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            body: The schedule to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The schedule is updated.

        Raises:
            ApiError: The account, repository or schedule was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_pipeline_schedule(
                workspace, repo_slug, schedule_uuid, body, request_options=request_options
            ),
        )

    async def update_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineVariable:
        """Update a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to update.
            body: The updated variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The variable was updated.

        Raises:
            ApiError: The account, repository or variable with the given UUID was not found. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_pipeline_variable(
                workspace, repo_slug, variable_uuid, body, request_options=request_options
            ),
        )

    async def update_repository_runner(
        self,
        workspace: str,
        repo_slug: str,
        runner_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineRunner:
        """Update repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository runner.

        Raises:
            ApiError: The repository runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_repository_runner(
                workspace, repo_slug, runner_uuid, request_options=request_options
            ),
        )

    async def update_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineRunner:
        """Update workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace runner.

        Raises:
            ApiError: The workspace runner was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_workspace_runner(
                workspace, runner_uuid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPipelinesWithRawResponse:
        return self._with_raw_response


class PipelinesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentVariable, CreateDeploymentVariableErrorBody]:
        """Create a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            body: The variable to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeploymentVariable | DeploymentVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeploymentVariable],
            error_mapper=create_deployment_variable_error_mapper,
            request_options=request_options,
        )

    def create_pipeline_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        body: Pipeline | PipelineDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, CreatePipelineForRepositoryErrorBody]:
        """Endpoint to create and initiate a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The pipeline to initiate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pipeline | PipelineDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pipeline],
            error_mapper=create_pipeline_for_repository_error_mapper,
            request_options=request_options,
        )

    def create_pipeline_variable_for_team(
        self,
        username: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreatePipelineVariableForTeamErrorBody]:
        """Create an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables"),
            path_params=[param[str]("username", username)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=create_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    def create_pipeline_variable_for_user(
        self,
        selected_user: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreatePipelineVariableForUserErrorBody]:
        """Create a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables"),
            path_params=[param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=create_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    def create_pipeline_variable_for_workspace(
        self,
        workspace: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreatePipelineVariableForWorkspaceErrorBody]:
        """Create a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=create_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    def create_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineKnownHost, CreateRepositoryPipelineKnownHostErrorBody]:
        """Create a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The known host to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineKnownHost | PipelineKnownHostDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineKnownHost],
            error_mapper=create_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    def create_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSchedule, CreateRepositoryPipelineScheduleErrorBody]:
        """Create a schedule for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The schedule to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineSchedule],
            error_mapper=create_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    def create_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreateRepositoryPipelineVariableErrorBody]:
        """Create a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=create_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    def create_repository_runner(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, CreateRepositoryRunnerErrorBody]:
        """Create repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineRunner],
            error_mapper=create_repository_runner_error_mapper,
            request_options=request_options,
        )

    def create_workspace_runner(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, CreateWorkspaceRunnerErrorBody]:
        """Create workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineRunner],
            error_mapper=create_workspace_runner_error_mapper,
            request_options=request_options,
        )

    def delete_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDeploymentVariableErrorBody]:
        """Delete a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_deployment_variable_error_mapper,
            request_options=request_options,
        )

    def delete_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePipelineVariableForTeamErrorBody]:
        """Delete a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("username", username), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    def delete_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePipelineVariableForUserErrorBody]:
        """Delete an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    def delete_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePipelineVariableForWorkspaceErrorBody]:
        """Delete a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    def delete_repository_pipeline_cache(
        self, workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineCacheErrorBody]:
        """Delete a repository cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("cache_uuid", cache_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_pipeline_cache_error_mapper,
            request_options=request_options,
        )

    def delete_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineCachesErrorBody]:
        """Delete repository cache versions by name.

        Args:
            workspace: The account.
            repo_slug: The repository.
            name: The cache name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            query_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_pipeline_caches_error_mapper,
            request_options=request_options,
        )

    def delete_repository_pipeline_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineKeyPairErrorBody]:
        """Delete the repository SSH key pair.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_pipeline_key_pair_error_mapper,
            request_options=request_options,
        )

    def delete_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoryPipelineKnownHostErrorBody]:
        """Delete a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("known_host_uuid", known_host_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    def delete_repository_pipeline_schedule(
        self, workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineScheduleErrorBody]:
        """Delete a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    def delete_repository_pipeline_variable(
        self, workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineVariableErrorBody]:
        """Delete a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    def delete_repository_runner(
        self, workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryRunnerErrorBody]:
        """Delete repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("runner_uuid", runner_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repository_runner_error_mapper,
            request_options=request_options,
        )

    def delete_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspaceRunnerErrorBody]:
        """Delete workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("runner_uuid", runner_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspace_runner_error_mapper,
            request_options=request_options,
        )

    def get_deployment_variables(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedDeploymentVariables, RawError]:
        """Find deployment environment level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDeploymentVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_oidc_configuration(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetOidcConfigurationErrorBody]:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration"
            ),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_oidc_configuration_error_mapper,
            request_options=request_options,
        )

    def get_oidc_keys(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetOidcKeysErrorBody]:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_oidc_keys_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_container_log(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        log_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineContainerLogErrorBody]:
        """Retrieve the log file for a build container or service container.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            log_uuid: For the main build container specify the step UUID; for a service container specify the service
                container UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
                param[str]("log_uuid", log_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_pipeline_container_log_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_for_repository(
        self, workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, GetPipelineForRepositoryErrorBody]:
        """Retrieve a specified pipeline

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The pipeline UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pipeline],
            error_mapper=get_pipeline_for_repository_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_step_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineStep, GetPipelineStepForRepositoryErrorBody]:
        """Retrieve a given step of a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineStep],
            error_mapper=get_pipeline_step_for_repository_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_step_log_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineStepLogForRepositoryErrorBody]:
        """Retrieve the log file for a given step of a pipeline.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_pipeline_step_log_for_repository_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_steps_for_repository(
        self, workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineSteps, RawError]:
        """Find steps for the given pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineSteps],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pipeline_test_report_test_case_reasons(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        test_case_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineTestReportTestCaseReasonsErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            test_case_uuid: The UUID of the test case.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
                param[str]("test_case_uuid", test_case_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_pipeline_test_report_test_case_reasons_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_test_report_test_cases(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineTestReportTestCasesErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_pipeline_test_report_test_cases_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_test_reports(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineTestReportsErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_pipeline_test_reports_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetPipelineVariableForTeamErrorBody]:
        """Retrieve a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("username", username), param[str]("variable_uuid", variable_uuid)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=get_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetPipelineVariableForUserErrorBody]:
        """Retrieve a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("variable_uuid", variable_uuid)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=get_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetPipelineVariableForWorkspaceErrorBody]:
        """Retrieve a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("variable_uuid", variable_uuid)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=get_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_variables_for_team(
        self, username: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find account level variables. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables"),
            path_params=[param[str]("username", username)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pipeline_variables_for_user(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find user level variables. This endpoint has been deprecated, and you should use the new workspaces endpoint.
        For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pipeline_variables_for_workspace(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find workspace level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pipelines_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        *,
        creator_uuid: UUID | None = None,
        target_ref_type: TargetRefTypeOrStr | None = None,
        target_ref_name: str | None = None,
        target_branch: str | None = None,
        target_commit_hash: str | None = None,
        target_selector_pattern: str | None = None,
        target_selector_type: TargetSelectorTypeOrStr | None = None,
        created_on: RFC3339DateTime | None = None,
        trigger_type: TriggerTypeOrStr | None = None,
        status: Status1OrStr | None = None,
        sort: SortOrStr | None = None,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPipelines, RawError]:
        """Find pipelines in a repository.

        Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow
        filtering and sorting of returned results. See query parameters for specific details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            creator_uuid: The UUID of the creator of the pipeline to filter by.
            target_ref_type: The type of the reference to filter by.
            target_ref_name: The reference name to filter by.
            target_branch: The name of the branch to filter by.
            target_commit_hash: The revision to filter by.
            target_selector_pattern: The pipeline pattern to filter by.
            target_selector_type: The type of pipeline to filter by.
            created_on: The creation date to filter by.
            trigger_type: The trigger type to filter by.
            status: The pipeline status to filter by.
            sort: The attribute name to sort on.
            page: The page number of elements to retrieve.
            pagelen: The maximum number of results to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            query_params=[
                param[UUID | None]("creator.uuid", creator_uuid),
                param[TargetRefTypeOrStr | None]("target.ref_type", target_ref_type),
                param[str | None]("target.ref_name", target_ref_name),
                param[str | None]("target.branch", target_branch),
                param[str | None]("target.commit.hash", target_commit_hash),
                param[str | None]("target.selector.pattern", target_selector_pattern),
                param[TargetSelectorTypeOrStr | None]("target.selector.type", target_selector_type),
                param[RFC3339DateTime | None]("created_on", created_on),
                param[TriggerTypeOrStr | None]("trigger_type", trigger_type),
                param[Status1OrStr | None]("status", status),
                param[SortOrStr | None]("sort", sort),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelines],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repository_pipeline_cache_content_uri(
        self, workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineCacheContentUri, GetRepositoryPipelineCacheContentUriErrorBody]:
        """Retrieve the URI of the content of the specified cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("cache_uuid", cache_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineCacheContentUri],
            error_mapper=get_repository_pipeline_cache_content_uri_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineCache, GetRepositoryPipelineCachesErrorBody]:
        """Retrieve the repository pipelines caches.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineCache],
            error_mapper=get_repository_pipeline_caches_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_config(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelinesConfig, RawError]:
        """Retrieve the repository pipelines configuration.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelinesConfig],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineKnownHost, GetRepositoryPipelineKnownHostErrorBody]:
        """Retrieve a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("known_host_uuid", known_host_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineKnownHost],
            error_mapper=get_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_known_hosts(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineKnownHosts, RawError]:
        """Find repository level known hosts.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineKnownHosts],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repository_pipeline_schedule(
        self, workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineSchedule, GetRepositoryPipelineScheduleErrorBody]:
        """Retrieve a schedule by its UUID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineSchedule],
            error_mapper=get_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_schedule_executions(
        self, workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineScheduleExecutions, GetRepositoryPipelineScheduleExecutionsErrorBody]:
        """Retrieve the executions of a given schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineScheduleExecutions],
            error_mapper=get_repository_pipeline_schedule_executions_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_schedules(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineSchedule, GetRepositoryPipelineSchedulesErrorBody]:
        """Retrieve the configured schedules for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineSchedule],
            error_mapper=get_repository_pipeline_schedules_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_ssh_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineSshKeyPair, GetRepositoryPipelineSshKeyPairErrorBody]:
        """Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and
        will never be exposed in the logs or the REST API.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineSshKeyPair],
            error_mapper=get_repository_pipeline_ssh_key_pair_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_variable(
        self, workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetRepositoryPipelineVariableErrorBody]:
        """Retrieve a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("variable_uuid", variable_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=get_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    def get_repository_pipeline_variables(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find repository level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repository_runner(
        self, workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, GetRepositoryRunnerErrorBody]:
        """Retrieve repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("runner_uuid", runner_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineRunner],
            error_mapper=get_repository_runner_error_mapper,
            request_options=request_options,
        )

    def get_repository_runners(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedRunners, RawError]:
        """Retrieve repository runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRunners],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, GetWorkspaceRunnerErrorBody]:
        """Get workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("runner_uuid", runner_uuid)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineRunner],
            error_mapper=get_workspace_runner_error_mapper,
            request_options=request_options,
        )

    def get_workspace_runners(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedRunners, RawError]:
        """Retrieve workspace runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRunners],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def stop_pipeline(
        self, workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopPipelineErrorBody]:
        """Signal the stop of a pipeline and all of its steps that not have completed yet.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=stop_pipeline_error_mapper,
            request_options=request_options,
        )

    def update_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentVariable, UpdateDeploymentVariableErrorBody]:
        """Update a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to update.
            body: The updated deployment variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeploymentVariable | DeploymentVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeploymentVariable],
            error_mapper=update_deployment_variable_error_mapper,
            request_options=request_options,
        )

    def update_pipeline_variable_for_team(
        self,
        username: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdatePipelineVariableForTeamErrorBody]:
        """Update a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("username", username), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=update_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    def update_pipeline_variable_for_user(
        self,
        selected_user: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdatePipelineVariableForUserErrorBody]:
        """Update a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=update_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    def update_pipeline_variable_for_workspace(
        self,
        workspace: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdatePipelineVariableForWorkspaceErrorBody]:
        """Update a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=update_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    def update_repository_build_number(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineBuildNumber | PipelineBuildNumberDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineBuildNumber, UpdateRepositoryBuildNumberErrorBody]:
        """Update the next build number that should be assigned to a pipeline. The next build number that will be
        configured has to be strictly higher than the current latest build number for this repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The build number to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/build_number"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineBuildNumber | PipelineBuildNumberDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineBuildNumber],
            error_mapper=update_repository_build_number_error_mapper,
            request_options=request_options,
        )

    def update_repository_pipeline_config(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelinesConfig | PipelinesConfigDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelinesConfig, RawError]:
        """Update the pipelines configuration for a repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The updated repository pipelines configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesConfig | PipelinesConfigDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelinesConfig],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_repository_pipeline_key_pair(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSshKeyPair | PipelineSshKeyPairDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSshKeyPair, UpdateRepositoryPipelineKeyPairErrorBody]:
        """Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your
        build container.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The created or updated SSH key pair.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineSshKeyPair | PipelineSshKeyPairDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineSshKeyPair],
            error_mapper=update_repository_pipeline_key_pair_error_mapper,
            request_options=request_options,
        )

    def update_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineKnownHost, UpdateRepositoryPipelineKnownHostErrorBody]:
        """Update a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to update.
            body: The updated known host.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("known_host_uuid", known_host_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineKnownHost | PipelineKnownHostDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineKnownHost],
            error_mapper=update_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    def update_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        body: PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSchedule, UpdateRepositoryPipelineScheduleErrorBody]:
        """Update a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            body: The schedule to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineSchedule],
            error_mapper=update_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    def update_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdateRepositoryPipelineVariableErrorBody]:
        """Update a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to update.
            body: The updated variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineVariable],
            error_mapper=update_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    def update_repository_runner(
        self, workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, UpdateRepositoryRunnerErrorBody]:
        """Update repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("runner_uuid", runner_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineRunner],
            error_mapper=update_repository_runner_error_mapper,
            request_options=request_options,
        )

    def update_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, UpdateWorkspaceRunnerErrorBody]:
        """Update workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("runner_uuid", runner_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PipelineRunner],
            error_mapper=update_workspace_runner_error_mapper,
            request_options=request_options,
        )


class AsyncPipelinesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentVariable, CreateDeploymentVariableErrorBody]:
        """Create a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            body: The variable to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeploymentVariable | DeploymentVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeploymentVariable],
            error_mapper=create_deployment_variable_error_mapper,
            request_options=request_options,
        )

    async def create_pipeline_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        body: Pipeline | PipelineDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, CreatePipelineForRepositoryErrorBody]:
        """Endpoint to create and initiate a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The pipeline to initiate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pipeline | PipelineDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pipeline],
            error_mapper=create_pipeline_for_repository_error_mapper,
            request_options=request_options,
        )

    async def create_pipeline_variable_for_team(
        self,
        username: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreatePipelineVariableForTeamErrorBody]:
        """Create an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables"),
            path_params=[param[str]("username", username)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=create_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    async def create_pipeline_variable_for_user(
        self,
        selected_user: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreatePipelineVariableForUserErrorBody]:
        """Create a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables"),
            path_params=[param[str]("selected_user", selected_user)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=create_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    async def create_pipeline_variable_for_workspace(
        self,
        workspace: str,
        *,
        body: PipelineVariable | PipelineVariableDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreatePipelineVariableForWorkspaceErrorBody]:
        """Create a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=create_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    async def create_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineKnownHost, CreateRepositoryPipelineKnownHostErrorBody]:
        """Create a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The known host to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineKnownHost | PipelineKnownHostDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineKnownHost],
            error_mapper=create_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    async def create_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSchedule, CreateRepositoryPipelineScheduleErrorBody]:
        """Create a schedule for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The schedule to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineSchedule],
            error_mapper=create_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    async def create_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, CreateRepositoryPipelineVariableErrorBody]:
        """Create a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The variable to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=create_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    async def create_repository_runner(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, CreateRepositoryRunnerErrorBody]:
        """Create repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineRunner],
            error_mapper=create_repository_runner_error_mapper,
            request_options=request_options,
        )

    async def create_workspace_runner(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, CreateWorkspaceRunnerErrorBody]:
        """Create workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineRunner],
            error_mapper=create_workspace_runner_error_mapper,
            request_options=request_options,
        )

    async def delete_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDeploymentVariableErrorBody]:
        """Delete a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_deployment_variable_error_mapper,
            request_options=request_options,
        )

    async def delete_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePipelineVariableForTeamErrorBody]:
        """Delete a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("username", username), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    async def delete_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePipelineVariableForUserErrorBody]:
        """Delete an account level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    async def delete_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePipelineVariableForWorkspaceErrorBody]:
        """Delete a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_pipeline_cache(
        self,
        workspace: str,
        repo_slug: str,
        cache_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoryPipelineCacheErrorBody]:
        """Delete a repository cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("cache_uuid", cache_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_pipeline_cache_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineCachesErrorBody]:
        """Delete repository cache versions by name.

        Args:
            workspace: The account.
            repo_slug: The repository.
            name: The cache name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            query_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_pipeline_caches_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_pipeline_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryPipelineKeyPairErrorBody]:
        """Delete the repository SSH key pair.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_pipeline_key_pair_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoryPipelineKnownHostErrorBody]:
        """Delete a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("known_host_uuid", known_host_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoryPipelineScheduleErrorBody]:
        """Delete a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoryPipelineVariableErrorBody]:
        """Delete a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    async def delete_repository_runner(
        self,
        workspace: str,
        repo_slug: str,
        runner_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoryRunnerErrorBody]:
        """Delete repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("runner_uuid", runner_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repository_runner_error_mapper,
            request_options=request_options,
        )

    async def delete_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspaceRunnerErrorBody]:
        """Delete workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("runner_uuid", runner_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspace_runner_error_mapper,
            request_options=request_options,
        )

    async def get_deployment_variables(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedDeploymentVariables, RawError]:
        """Find deployment environment level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDeploymentVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_oidc_configuration(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetOidcConfigurationErrorBody]:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration"
            ),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_oidc_configuration_error_mapper,
            request_options=request_options,
        )

    async def get_oidc_keys(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetOidcKeysErrorBody]:
        """This is part of OpenID Connect for Pipelines, see
        https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_oidc_keys_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_container_log(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        log_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineContainerLogErrorBody]:
        """Retrieve the log file for a build container or service container.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            log_uuid: For the main build container specify the step UUID; for a service container specify the service
                container UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
                param[str]("log_uuid", log_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_pipeline_container_log_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, GetPipelineForRepositoryErrorBody]:
        """Retrieve a specified pipeline

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The pipeline UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pipeline],
            error_mapper=get_pipeline_for_repository_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_step_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineStep, GetPipelineStepForRepositoryErrorBody]:
        """Retrieve a given step of a pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineStep],
            error_mapper=get_pipeline_step_for_repository_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_step_log_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineStepLogForRepositoryErrorBody]:
        """Retrieve the log file for a given step of a pipeline.

        This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log
        files.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_pipeline_step_log_for_repository_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_steps_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPipelineSteps, RawError]:
        """Find steps for the given pipeline.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineSteps],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pipeline_test_report_test_case_reasons(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        test_case_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineTestReportTestCaseReasonsErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            test_case_uuid: The UUID of the test case.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
                param[str]("test_case_uuid", test_case_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_pipeline_test_report_test_case_reasons_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_test_report_test_cases(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineTestReportTestCasesErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_pipeline_test_report_test_cases_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_test_reports(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        step_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetPipelineTestReportsErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            step_uuid: The UUID of the step.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
                param[str]("step_uuid", step_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_pipeline_test_reports_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_variable_for_team(
        self, username: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetPipelineVariableForTeamErrorBody]:
        """Retrieve a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("username", username), param[str]("variable_uuid", variable_uuid)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=get_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_variable_for_user(
        self, selected_user: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetPipelineVariableForUserErrorBody]:
        """Retrieve a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("variable_uuid", variable_uuid)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=get_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_variable_for_workspace(
        self, workspace: str, variable_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineVariable, GetPipelineVariableForWorkspaceErrorBody]:
        """Retrieve a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("variable_uuid", variable_uuid)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=get_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_variables_for_team(
        self, username: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find account level variables. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables"),
            path_params=[param[str]("username", username)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pipeline_variables_for_user(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find user level variables. This endpoint has been deprecated, and you should use the new workspaces endpoint.
        For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pipeline_variables_for_workspace(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find workspace level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pipelines_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        *,
        creator_uuid: UUID | None = None,
        target_ref_type: TargetRefTypeOrStr | None = None,
        target_ref_name: str | None = None,
        target_branch: str | None = None,
        target_commit_hash: str | None = None,
        target_selector_pattern: str | None = None,
        target_selector_type: TargetSelectorTypeOrStr | None = None,
        created_on: RFC3339DateTime | None = None,
        trigger_type: TriggerTypeOrStr | None = None,
        status: Status1OrStr | None = None,
        sort: SortOrStr | None = None,
        page: int | None = 1,
        pagelen: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPipelines, RawError]:
        """Find pipelines in a repository.

        Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow
        filtering and sorting of returned results. See query parameters for specific details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            creator_uuid: The UUID of the creator of the pipeline to filter by.
            target_ref_type: The type of the reference to filter by.
            target_ref_name: The reference name to filter by.
            target_branch: The name of the branch to filter by.
            target_commit_hash: The revision to filter by.
            target_selector_pattern: The pipeline pattern to filter by.
            target_selector_type: The type of pipeline to filter by.
            created_on: The creation date to filter by.
            trigger_type: The trigger type to filter by.
            status: The pipeline status to filter by.
            sort: The attribute name to sort on.
            page: The page number of elements to retrieve.
            pagelen: The maximum number of results to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            query_params=[
                param[UUID | None]("creator.uuid", creator_uuid),
                param[TargetRefTypeOrStr | None]("target.ref_type", target_ref_type),
                param[str | None]("target.ref_name", target_ref_name),
                param[str | None]("target.branch", target_branch),
                param[str | None]("target.commit.hash", target_commit_hash),
                param[str | None]("target.selector.pattern", target_selector_pattern),
                param[TargetSelectorTypeOrStr | None]("target.selector.type", target_selector_type),
                param[RFC3339DateTime | None]("created_on", created_on),
                param[TriggerTypeOrStr | None]("trigger_type", trigger_type),
                param[Status1OrStr | None]("status", status),
                param[SortOrStr | None]("sort", sort),
                param[int | None]("page", page),
                param[int | None]("pagelen", pagelen),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelines],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repository_pipeline_cache_content_uri(
        self,
        workspace: str,
        repo_slug: str,
        cache_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineCacheContentUri, GetRepositoryPipelineCacheContentUriErrorBody]:
        """Retrieve the URI of the content of the specified cache.

        Args:
            workspace: The account.
            repo_slug: The repository.
            cache_uuid: The UUID of the cache.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("cache_uuid", cache_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineCacheContentUri],
            error_mapper=get_repository_pipeline_cache_content_uri_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_caches(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineCache, GetRepositoryPipelineCachesErrorBody]:
        """Retrieve the repository pipelines caches.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineCache],
            error_mapper=get_repository_pipeline_caches_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_config(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelinesConfig, RawError]:
        """Retrieve the repository pipelines configuration.

        Args:
            workspace: The account.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelinesConfig],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineKnownHost, GetRepositoryPipelineKnownHostErrorBody]:
        """Retrieve a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("known_host_uuid", known_host_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineKnownHost],
            error_mapper=get_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_known_hosts(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineKnownHosts, RawError]:
        """Find repository level known hosts.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineKnownHosts],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSchedule, GetRepositoryPipelineScheduleErrorBody]:
        """Retrieve a schedule by its UUID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineSchedule],
            error_mapper=get_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_schedule_executions(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPipelineScheduleExecutions, GetRepositoryPipelineScheduleExecutionsErrorBody]:
        """Retrieve the executions of a given schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineScheduleExecutions],
            error_mapper=get_repository_pipeline_schedule_executions_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_schedules(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineSchedule, GetRepositoryPipelineSchedulesErrorBody]:
        """Retrieve the configured schedules for the given repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineSchedule],
            error_mapper=get_repository_pipeline_schedules_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_ssh_key_pair(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineSshKeyPair, GetRepositoryPipelineSshKeyPairErrorBody]:
        """Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and
        will never be exposed in the logs or the REST API.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineSshKeyPair],
            error_mapper=get_repository_pipeline_ssh_key_pair_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, GetRepositoryPipelineVariableErrorBody]:
        """Retrieve a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("variable_uuid", variable_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=get_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    async def get_repository_pipeline_variables(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedPipelineVariables, RawError]:
        """Find repository level variables.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPipelineVariables],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repository_runner(
        self,
        workspace: str,
        repo_slug: str,
        runner_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineRunner, GetRepositoryRunnerErrorBody]:
        """Retrieve repository runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("runner_uuid", runner_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineRunner],
            error_mapper=get_repository_runner_error_mapper,
            request_options=request_options,
        )

    async def get_repository_runners(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedRunners, RawError]:
        """Retrieve repository runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRunners],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, GetWorkspaceRunnerErrorBody]:
        """Get workspace runner by uuid.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("runner_uuid", runner_uuid)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineRunner],
            error_mapper=get_workspace_runner_error_mapper,
            request_options=request_options,
        )

    async def get_workspace_runners(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedRunners, RawError]:
        """Retrieve workspace runners.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRunners],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def stop_pipeline(
        self,
        workspace: str,
        repo_slug: str,
        pipeline_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopPipelineErrorBody]:
        """Signal the stop of a pipeline and all of its steps that not have completed yet.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            pipeline_uuid: The UUID of the pipeline.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("pipeline_uuid", pipeline_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=stop_pipeline_error_mapper,
            request_options=request_options,
        )

    async def update_deployment_variable(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        variable_uuid: str,
        body: DeploymentVariable | DeploymentVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentVariable, UpdateDeploymentVariableErrorBody]:
        """Update a deployment environment level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment.
            variable_uuid: The UUID of the variable to update.
            body: The updated deployment variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeploymentVariable | DeploymentVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeploymentVariable],
            error_mapper=update_deployment_variable_error_mapper,
            request_options=request_options,
        )

    async def update_pipeline_variable_for_team(
        self,
        username: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdatePipelineVariableForTeamErrorBody]:
        """Update a team level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            username: The account.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("username", username), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=update_pipeline_variable_for_team_error_mapper,
            request_options=request_options,
        )

    async def update_pipeline_variable_for_user(
        self,
        selected_user: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdatePipelineVariableForUserErrorBody]:
        """Update a user level variable. This endpoint has been deprecated, and you should use the new workspaces
        endpoint. For more information, see the announcement.

        Args:
            selected_user: Either the UUID of the account surrounded by curly-braces, for example ``{account UUID}``, OR
                an Atlassian Account ID.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=update_pipeline_variable_for_user_error_mapper,
            request_options=request_options,
        )

    async def update_pipeline_variable_for_workspace(
        self,
        workspace: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdatePipelineVariableForWorkspaceErrorBody]:
        """Update a workspace level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            variable_uuid: The UUID of the variable.
            body: The updated variable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("variable_uuid", variable_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=update_pipeline_variable_for_workspace_error_mapper,
            request_options=request_options,
        )

    async def update_repository_build_number(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineBuildNumber | PipelineBuildNumberDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineBuildNumber, UpdateRepositoryBuildNumberErrorBody]:
        """Update the next build number that should be assigned to a pipeline. The next build number that will be
        configured has to be strictly higher than the current latest build number for this repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The build number to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/build_number"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineBuildNumber | PipelineBuildNumberDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineBuildNumber],
            error_mapper=update_repository_build_number_error_mapper,
            request_options=request_options,
        )

    async def update_repository_pipeline_config(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelinesConfig | PipelinesConfigDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelinesConfig, RawError]:
        """Update the pipelines configuration for a repository.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The updated repository pipelines configuration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesConfig | PipelinesConfigDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelinesConfig],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_repository_pipeline_key_pair(
        self,
        workspace: str,
        repo_slug: str,
        body: PipelineSshKeyPair | PipelineSshKeyPairDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSshKeyPair, UpdateRepositoryPipelineKeyPairErrorBody]:
        """Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your
        build container.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The created or updated SSH key pair.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineSshKeyPair | PipelineSshKeyPairDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineSshKeyPair],
            error_mapper=update_repository_pipeline_key_pair_error_mapper,
            request_options=request_options,
        )

    async def update_repository_pipeline_known_host(
        self,
        workspace: str,
        repo_slug: str,
        known_host_uuid: str,
        body: PipelineKnownHost | PipelineKnownHostDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineKnownHost, UpdateRepositoryPipelineKnownHostErrorBody]:
        """Update a repository level known host.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            known_host_uuid: The UUID of the known host to update.
            body: The updated known host.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("known_host_uuid", known_host_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineKnownHost | PipelineKnownHostDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineKnownHost],
            error_mapper=update_repository_pipeline_known_host_error_mapper,
            request_options=request_options,
        )

    async def update_repository_pipeline_schedule(
        self,
        workspace: str,
        repo_slug: str,
        schedule_uuid: str,
        body: PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineSchedule, UpdateRepositoryPipelineScheduleErrorBody]:
        """Update a schedule.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            schedule_uuid: The uuid of the schedule.
            body: The schedule to update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("schedule_uuid", schedule_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineSchedule],
            error_mapper=update_repository_pipeline_schedule_error_mapper,
            request_options=request_options,
        )

    async def update_repository_pipeline_variable(
        self,
        workspace: str,
        repo_slug: str,
        variable_uuid: str,
        body: PipelineVariable | PipelineVariableDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineVariable, UpdateRepositoryPipelineVariableErrorBody]:
        """Update a repository level variable.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            variable_uuid: The UUID of the variable to update.
            body: The updated variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("variable_uuid", variable_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineVariable | PipelineVariableDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineVariable],
            error_mapper=update_repository_pipeline_variable_error_mapper,
            request_options=request_options,
        )

    async def update_repository_runner(
        self,
        workspace: str,
        repo_slug: str,
        runner_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineRunner, UpdateRepositoryRunnerErrorBody]:
        """Update repository runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("runner_uuid", runner_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineRunner],
            error_mapper=update_repository_runner_error_mapper,
            request_options=request_options,
        )

    async def update_workspace_runner(
        self, workspace: str, runner_uuid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineRunner, UpdateWorkspaceRunnerErrorBody]:
        """Update workspace runner.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            runner_uuid: The runner uuid.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            path_params=[param[str]("workspace", workspace), param[str]("runner_uuid", runner_uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PipelineRunner],
            error_mapper=update_workspace_runner_error_mapper,
            request_options=request_options,
        )
