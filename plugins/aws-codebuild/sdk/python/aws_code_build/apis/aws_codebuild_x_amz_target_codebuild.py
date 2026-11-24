from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.batch_delete_builds_error import BatchDeleteBuildsErrorBody, batch_delete_builds_error_mapper
from ..errors.batch_get_build_batches_error import BatchGetBuildBatchesErrorBody, batch_get_build_batches_error_mapper
from ..errors.batch_get_builds_error import BatchGetBuildsErrorBody, batch_get_builds_error_mapper
from ..errors.batch_get_projects_error import BatchGetProjectsErrorBody, batch_get_projects_error_mapper
from ..errors.batch_get_report_groups_error import BatchGetReportGroupsErrorBody, batch_get_report_groups_error_mapper
from ..errors.batch_get_reports_error import BatchGetReportsErrorBody, batch_get_reports_error_mapper
from ..errors.create_project_error import CreateProjectErrorBody, create_project_error_mapper
from ..errors.create_report_group_error import CreateReportGroupErrorBody, create_report_group_error_mapper
from ..errors.create_webhook_error import CreateWebhookErrorBody, create_webhook_error_mapper
from ..errors.delete_build_batch_error import DeleteBuildBatchErrorBody, delete_build_batch_error_mapper
from ..errors.delete_project_error import DeleteProjectErrorBody, delete_project_error_mapper
from ..errors.delete_report_group_error import DeleteReportGroupErrorBody, delete_report_group_error_mapper
from ..errors.delete_resource_policy_error import DeleteResourcePolicyErrorBody, delete_resource_policy_error_mapper
from ..errors.delete_source_credentials_error import (
    DeleteSourceCredentialsErrorBody,
    delete_source_credentials_error_mapper,
)
from ..errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from ..errors.describe_code_coverages_error import DescribeCodeCoveragesErrorBody, describe_code_coverages_error_mapper
from ..errors.describe_test_cases_error import DescribeTestCasesErrorBody, describe_test_cases_error_mapper
from ..errors.get_report_group_trend_error import GetReportGroupTrendErrorBody, get_report_group_trend_error_mapper
from ..errors.get_resource_policy_error import GetResourcePolicyErrorBody, get_resource_policy_error_mapper
from ..errors.import_source_credentials_error import (
    ImportSourceCredentialsErrorBody,
    import_source_credentials_error_mapper,
)
from ..errors.invalidate_project_cache_error import (
    InvalidateProjectCacheErrorBody,
    invalidate_project_cache_error_mapper,
)
from ..errors.list_build_batches_error import ListBuildBatchesErrorBody, list_build_batches_error_mapper
from ..errors.list_build_batches_for_project_error import (
    ListBuildBatchesForProjectErrorBody,
    list_build_batches_for_project_error_mapper,
)
from ..errors.list_builds_for_project_error import ListBuildsForProjectErrorBody, list_builds_for_project_error_mapper
from ..errors.list_report_groups_error import ListReportGroupsErrorBody, list_report_groups_error_mapper
from ..errors.list_reports_for_report_group_error import (
    ListReportsForReportGroupErrorBody,
    list_reports_for_report_group_error_mapper,
)
from ..errors.list_shared_projects_error import ListSharedProjectsErrorBody, list_shared_projects_error_mapper
from ..errors.list_shared_report_groups_error import (
    ListSharedReportGroupsErrorBody,
    list_shared_report_groups_error_mapper,
)
from ..errors.list_source_credentials_error import ListSourceCredentialsErrorBody, list_source_credentials_error_mapper
from ..errors.put_resource_policy_error import PutResourcePolicyErrorBody, put_resource_policy_error_mapper
from ..errors.retry_build_batch_error import RetryBuildBatchErrorBody, retry_build_batch_error_mapper
from ..errors.start_build_batch_error import StartBuildBatchErrorBody, start_build_batch_error_mapper
from ..errors.stop_build_batch_error import StopBuildBatchErrorBody, stop_build_batch_error_mapper
from ..errors.update_project_error import UpdateProjectErrorBody, update_project_error_mapper
from ..errors.update_project_visibility_error import (
    UpdateProjectVisibilityErrorBody,
    update_project_visibility_error_mapper,
)
from ..errors.update_report_group_error import UpdateReportGroupErrorBody, update_report_group_error_mapper
from ..errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from ..models.enums.x_amz_target1_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from ..models.enums.x_amz_target2_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target10 import XAmzTarget10OrStr
from ..models.enums.x_amz_target11 import XAmzTarget11OrStr
from ..models.enums.x_amz_target12 import XAmzTarget12OrStr
from ..models.enums.x_amz_target13 import XAmzTarget13OrStr
from ..models.enums.x_amz_target14 import XAmzTarget14OrStr
from ..models.enums.x_amz_target15 import XAmzTarget15OrStr
from ..models.enums.x_amz_target16 import XAmzTarget16OrStr
from ..models.enums.x_amz_target17 import XAmzTarget17OrStr
from ..models.enums.x_amz_target18 import XAmzTarget18OrStr
from ..models.enums.x_amz_target19 import XAmzTarget19OrStr
from ..models.enums.x_amz_target20 import XAmzTarget20OrStr
from ..models.enums.x_amz_target21 import XAmzTarget21OrStr
from ..models.enums.x_amz_target22 import XAmzTarget22OrStr
from ..models.enums.x_amz_target23 import XAmzTarget23OrStr
from ..models.enums.x_amz_target24 import XAmzTarget24OrStr
from ..models.enums.x_amz_target25 import XAmzTarget25OrStr
from ..models.enums.x_amz_target26 import XAmzTarget26OrStr
from ..models.enums.x_amz_target27 import XAmzTarget27OrStr
from ..models.enums.x_amz_target28 import XAmzTarget28OrStr
from ..models.enums.x_amz_target29 import XAmzTarget29OrStr
from ..models.enums.x_amz_target30 import XAmzTarget30OrStr
from ..models.enums.x_amz_target31 import XAmzTarget31OrStr
from ..models.enums.x_amz_target32 import XAmzTarget32OrStr
from ..models.enums.x_amz_target33 import XAmzTarget33OrStr
from ..models.enums.x_amz_target34 import XAmzTarget34OrStr
from ..models.enums.x_amz_target35 import XAmzTarget35OrStr
from ..models.enums.x_amz_target36 import XAmzTarget36OrStr
from ..models.enums.x_amz_target37 import XAmzTarget37OrStr
from ..models.enums.x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from ..server.server import Server


class AwsCodebuildXAmzTargetCodebuild:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsCodebuildXAmzTargetCodebuildWithRawResponse(client, server, auth)

    def batch_delete_builds(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_delete_builds(x_amz_target, request_options=request_options))

    def batch_get_build_batches(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves information about one or more batch builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_build_batches(x_amz_target, request_options=request_options))

    def batch_get_builds(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_builds(x_amz_target, request_options=request_options))

    def batch_get_projects(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_projects(x_amz_target, request_options=request_options))

    def batch_get_report_groups(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of report groups.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_report_groups(x_amz_target, request_options=request_options))

    def batch_get_reports(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_reports(x_amz_target, request_options=request_options))

    def create_project(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_project(x_amz_target, request_options=request_options))

    def create_report_group(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a report group. A report group contains a collection of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_report_group(x_amz_target, request_options=request_options))

    def create_webhook(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If
        you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two
        identical builds are created for each commit. One build is triggered through webhooks, and one through
        CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are
        using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
        Webhook box. For more information, see step 5 in Change a Build Project's Settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; OAuthProviderException; ResourceAlreadyExistsException;
                ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_webhook(x_amz_target, request_options=request_options))

    def delete_build_batch(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_build_batch(x_amz_target, request_options=request_options))

    def delete_project(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_project(x_amz_target, request_options=request_options))

    def delete_report_group(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a report group. Before you delete a report group, you must delete its reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_report_group(x_amz_target, request_options=request_options))

    def delete_resource_policy(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_resource_policy(x_amz_target, request_options=request_options))

    def delete_source_credentials(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_source_credentials(x_amz_target, request_options=request_options))

    def delete_webhook(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; OAuthProviderException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(x_amz_target, request_options=request_options))

    def describe_code_coverages(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves one or more code coverage reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_code_coverages(x_amz_target, request_options=request_options))

    def describe_test_cases(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of details about test cases for a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_test_cases(x_amz_target, request_options=request_options))

    def get_report_group_trend(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Analyzes and accumulates test report values for the specified test reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_report_group_trend(x_amz_target, request_options=request_options))

    def get_resource_policy(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_resource_policy(x_amz_target, request_options=request_options))

    def import_source_credentials(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Imports the source repository credentials for an CodeBuild project that has its source code stored in a
        GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.import_source_credentials(x_amz_target, request_options=request_options))

    def invalidate_project_cache(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Resets the cache for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.invalidate_project_cache(x_amz_target, request_options=request_options))

    def list_build_batches(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves the identifiers of your build batches in the current region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_build_batches(x_amz_target, request_options=request_options))

    def list_build_batches_for_project(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves the identifiers of the build batches for a specific project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_build_batches_for_project(x_amz_target, request_options=request_options)
        )

    def list_builds_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of build identifiers for the specified build project, with each build identifier representing a
        single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_builds_for_project(x_amz_target, request_options=request_options))

    def list_curated_environment_images(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets information about Docker images that are managed by CodeBuild.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_curated_environment_images(x_amz_target, request_options=request_options)
        )

    def list_report_groups(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list ARNs for the report groups in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_report_groups(x_amz_target, request_options=request_options))

    def list_reports_for_report_group(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of ARNs for the reports that belong to a ReportGroup.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_reports_for_report_group(x_amz_target, request_options=request_options)
        )

    def list_shared_projects(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of projects that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_shared_projects(x_amz_target, request_options=request_options))

    def list_shared_report_groups(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_shared_report_groups(x_amz_target, request_options=request_options))

    def list_source_credentials(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of SourceCredentialsInfo objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_source_credentials(x_amz_target, request_options=request_options))

    def put_resource_policy(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stores a resource policy for the ARN of a Project or ReportGroup object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.put_resource_policy(x_amz_target, request_options=request_options))

    def retry_build_batch(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Restarts a failed batch build. Only batch builds that have failed can be retried.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.retry_build_batch(x_amz_target, request_options=request_options))

    def start_build_batch(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts a batch build for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_build_batch(x_amz_target, request_options=request_options))

    def stop_build_batch(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops a running batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stop_build_batch(x_amz_target, request_options=request_options))

    def update_project(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_project(x_amz_target, request_options=request_options))

    def update_project_visibility(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Changes the public visibility for a project. The project's build results, logs, and artifacts are available
        to the general public. For more information, see Public build projects in the CodeBuild User Guide. The
        following should be kept in mind when making your projects public: All of a project's build results, logs, and
        artifacts, including builds that were run when the project was private, are available to the general public. All
        build logs and artifacts are available to the public. Environment variables, source code, and other sensitive
        information may have been output to the build logs and artifacts. You must be careful about what information is
        output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We
        recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive
        values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger
        a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as
        possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_project_visibility(x_amz_target, request_options=request_options))

    def update_report_group(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a report group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_report_group(x_amz_target, request_options=request_options))

    def update_webhook(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository,
        rotateSecret is ignored.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; OAuthProviderException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.update_webhook(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsCodebuildXAmzTargetCodebuildWithRawResponse:
        return self._with_raw_response


class AsyncAwsCodebuildXAmzTargetCodebuild:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsCodebuildXAmzTargetCodebuildWithRawResponse(client, server, auth)

    async def batch_delete_builds(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_delete_builds(x_amz_target, request_options=request_options))

    async def batch_get_build_batches(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves information about one or more batch builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_get_build_batches(x_amz_target, request_options=request_options)
        )

    async def batch_get_builds(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_get_builds(x_amz_target, request_options=request_options))

    async def batch_get_projects(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_get_projects(x_amz_target, request_options=request_options))

    async def batch_get_report_groups(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of report groups.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.batch_get_report_groups(x_amz_target, request_options=request_options)
        )

    async def batch_get_reports(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_get_reports(x_amz_target, request_options=request_options))

    async def create_project(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_project(x_amz_target, request_options=request_options))

    async def create_report_group(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a report group. A report group contains a collection of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_report_group(x_amz_target, request_options=request_options))

    async def create_webhook(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If
        you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two
        identical builds are created for each commit. One build is triggered through webhooks, and one through
        CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are
        using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
        Webhook box. For more information, see step 5 in Change a Build Project's Settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; OAuthProviderException; ResourceAlreadyExistsException;
                ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(x_amz_target, request_options=request_options))

    async def delete_build_batch(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_build_batch(x_amz_target, request_options=request_options))

    async def delete_project(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_project(x_amz_target, request_options=request_options))

    async def delete_report_group(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a report group. Before you delete a report group, you must delete its reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_report_group(x_amz_target, request_options=request_options))

    async def delete_resource_policy(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resource_policy(x_amz_target, request_options=request_options)
        )

    async def delete_source_credentials(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_source_credentials(x_amz_target, request_options=request_options)
        )

    async def delete_webhook(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; OAuthProviderException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(x_amz_target, request_options=request_options))

    async def describe_code_coverages(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves one or more code coverage reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_code_coverages(x_amz_target, request_options=request_options)
        )

    async def describe_test_cases(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of details about test cases for a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_test_cases(x_amz_target, request_options=request_options))

    async def get_report_group_trend(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Analyzes and accumulates test report values for the specified test reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_report_group_trend(x_amz_target, request_options=request_options)
        )

    async def get_resource_policy(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_resource_policy(x_amz_target, request_options=request_options))

    async def import_source_credentials(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Imports the source repository credentials for an CodeBuild project that has its source code stored in a
        GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.import_source_credentials(x_amz_target, request_options=request_options)
        )

    async def invalidate_project_cache(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Resets the cache for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.invalidate_project_cache(x_amz_target, request_options=request_options)
        )

    async def list_build_batches(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves the identifiers of your build batches in the current region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_build_batches(x_amz_target, request_options=request_options))

    async def list_build_batches_for_project(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves the identifiers of the build batches for a specific project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_build_batches_for_project(x_amz_target, request_options=request_options)
        )

    async def list_builds_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of build identifiers for the specified build project, with each build identifier representing a
        single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_builds_for_project(x_amz_target, request_options=request_options)
        )

    async def list_curated_environment_images(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets information about Docker images that are managed by CodeBuild.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_curated_environment_images(x_amz_target, request_options=request_options)
        )

    async def list_report_groups(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list ARNs for the report groups in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_report_groups(x_amz_target, request_options=request_options))

    async def list_reports_for_report_group(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of ARNs for the reports that belong to a ReportGroup.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_reports_for_report_group(x_amz_target, request_options=request_options)
        )

    async def list_shared_projects(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of projects that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_shared_projects(x_amz_target, request_options=request_options))

    async def list_shared_report_groups(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_shared_report_groups(x_amz_target, request_options=request_options)
        )

    async def list_source_credentials(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of SourceCredentialsInfo objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_source_credentials(x_amz_target, request_options=request_options)
        )

    async def put_resource_policy(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stores a resource policy for the ARN of a Project or ReportGroup object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.put_resource_policy(x_amz_target, request_options=request_options))

    async def retry_build_batch(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Restarts a failed batch build. Only batch builds that have failed can be retried.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.retry_build_batch(x_amz_target, request_options=request_options))

    async def start_build_batch(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts a batch build for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.start_build_batch(x_amz_target, request_options=request_options))

    async def stop_build_batch(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops a running batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stop_build_batch(x_amz_target, request_options=request_options))

    async def update_project(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_project(x_amz_target, request_options=request_options))

    async def update_project_visibility(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Changes the public visibility for a project. The project's build results, logs, and artifacts are available
        to the general public. For more information, see Public build projects in the CodeBuild User Guide. The
        following should be kept in mind when making your projects public: All of a project's build results, logs, and
        artifacts, including builds that were run when the project was private, are available to the general public. All
        build logs and artifacts are available to the public. Environment variables, source code, and other sensitive
        information may have been output to the build logs and artifacts. You must be careful about what information is
        output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We
        recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive
        values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger
        a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as
        possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_project_visibility(x_amz_target, request_options=request_options)
        )

    async def update_report_group(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates a report group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_report_group(x_amz_target, request_options=request_options))

    async def update_webhook(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository,
        rotateSecret is ignored.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; OAuthProviderException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.update_webhook(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAwsCodebuildXAmzTargetCodebuildWithRawResponse:
        return self._with_raw_response


class AwsCodebuildXAmzTargetCodebuildWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_delete_builds(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchDeleteBuildsErrorBody]:
        """Deletes one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDeleteBuilds"),
            headers=[
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_delete_builds_error_mapper,
            request_options=request_options,
        )

    def batch_get_build_batches(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetBuildBatchesErrorBody]:
        """Retrieves information about one or more batch builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetBuildBatches"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_build_batches_error_mapper,
            request_options=request_options,
        )

    def batch_get_builds(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetBuildsErrorBody]:
        """Gets information about one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetBuilds"),
            headers=[
                param[XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_builds_error_mapper,
            request_options=request_options,
        )

    def batch_get_projects(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetProjectsErrorBody]:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetProjects"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_projects_error_mapper,
            request_options=request_options,
        )

    def batch_get_report_groups(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetReportGroupsErrorBody]:
        """Returns an array of report groups.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetReportGroups"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_report_groups_error_mapper,
            request_options=request_options,
        )

    def batch_get_reports(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetReportsErrorBody]:
        """Returns an array of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetReports"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_reports_error_mapper,
            request_options=request_options,
        )

    def create_project(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateProjectErrorBody]:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateProject"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    def create_report_group(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateReportGroupErrorBody]:
        """Creates a report group. A report group contains a collection of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateReportGroup"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_report_group_error_mapper,
            request_options=request_options,
        )

    def create_webhook(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateWebhookErrorBody]:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If
        you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two
        identical builds are created for each commit. One build is triggered through webhooks, and one through
        CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are
        using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
        Webhook box. For more information, see step 5 in Change a Build Project's Settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateWebhook"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_build_batch(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBuildBatchErrorBody]:
        """Deletes a batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteBuildBatch"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_build_batch_error_mapper,
            request_options=request_options,
        )

    def delete_project(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProject"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    def delete_report_group(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteReportGroupErrorBody]:
        """Deletes a report group. Before you delete a report group, you must delete its reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteReportGroup"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_report_group_error_mapper,
            request_options=request_options,
        )

    def delete_resource_policy(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteResourcePolicyErrorBody]:
        """Deletes a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResourcePolicy"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )

    def delete_source_credentials(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSourceCredentialsErrorBody]:
        """Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteSourceCredentials"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_source_credentials_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteWebhook"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def describe_code_coverages(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCodeCoveragesErrorBody]:
        """Retrieves one or more code coverage reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCodeCoverages"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_code_coverages_error_mapper,
            request_options=request_options,
        )

    def describe_test_cases(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTestCasesErrorBody]:
        """Returns a list of details about test cases for a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTestCases"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_test_cases_error_mapper,
            request_options=request_options,
        )

    def get_report_group_trend(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetReportGroupTrendErrorBody]:
        """Analyzes and accumulates test report values for the specified test reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetReportGroupTrend"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_report_group_trend_error_mapper,
            request_options=request_options,
        )

    def get_resource_policy(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetResourcePolicyErrorBody]:
        """Gets a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetResourcePolicy"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_resource_policy_error_mapper,
            request_options=request_options,
        )

    def import_source_credentials(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ImportSourceCredentialsErrorBody]:
        """Imports the source repository credentials for an CodeBuild project that has its source code stored in a
        GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ImportSourceCredentials"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=import_source_credentials_error_mapper,
            request_options=request_options,
        )

    def invalidate_project_cache(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, InvalidateProjectCacheErrorBody]:
        """Resets the cache for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#InvalidateProjectCache"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=invalidate_project_cache_error_mapper,
            request_options=request_options,
        )

    def list_build_batches(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListBuildBatchesErrorBody]:
        """Retrieves the identifiers of your build batches in the current region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuildBatches"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_build_batches_error_mapper,
            request_options=request_options,
        )

    def list_build_batches_for_project(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListBuildBatchesForProjectErrorBody]:
        """Retrieves the identifiers of the build batches for a specific project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuildBatchesForProject"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_build_batches_for_project_error_mapper,
            request_options=request_options,
        )

    def list_builds_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListBuildsForProjectErrorBody]:
        """Gets a list of build identifiers for the specified build project, with each build identifier representing a
        single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuildsForProject"),
            headers=[
                param[XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_builds_for_project_error_mapper,
            request_options=request_options,
        )

    def list_curated_environment_images(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Gets information about Docker images that are managed by CodeBuild.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCuratedEnvironmentImages"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_report_groups(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListReportGroupsErrorBody]:
        """Gets a list ARNs for the report groups in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListReportGroups"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_report_groups_error_mapper,
            request_options=request_options,
        )

    def list_reports_for_report_group(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListReportsForReportGroupErrorBody]:
        """Returns a list of ARNs for the reports that belong to a ReportGroup.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListReportsForReportGroup"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_reports_for_report_group_error_mapper,
            request_options=request_options,
        )

    def list_shared_projects(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSharedProjectsErrorBody]:
        """Gets a list of projects that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSharedProjects"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_shared_projects_error_mapper,
            request_options=request_options,
        )

    def list_shared_report_groups(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSharedReportGroupsErrorBody]:
        """Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSharedReportGroups"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_shared_report_groups_error_mapper,
            request_options=request_options,
        )

    def list_source_credentials(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSourceCredentialsErrorBody]:
        """Returns a list of SourceCredentialsInfo objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSourceCredentials"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_source_credentials_error_mapper,
            request_options=request_options,
        )

    def put_resource_policy(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutResourcePolicyErrorBody]:
        """Stores a resource policy for the ARN of a Project or ReportGroup object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutResourcePolicy"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=put_resource_policy_error_mapper,
            request_options=request_options,
        )

    def retry_build_batch(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RetryBuildBatchErrorBody]:
        """Restarts a failed batch build. Only batch builds that have failed can be retried.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetryBuildBatch"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=retry_build_batch_error_mapper,
            request_options=request_options,
        )

    def start_build_batch(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartBuildBatchErrorBody]:
        """Starts a batch build for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartBuildBatch"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_build_batch_error_mapper,
            request_options=request_options,
        )

    def stop_build_batch(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopBuildBatchErrorBody]:
        """Stops a running batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopBuildBatch"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_build_batch_error_mapper,
            request_options=request_options,
        )

    def update_project(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateProjectErrorBody]:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateProject"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_project_error_mapper,
            request_options=request_options,
        )

    def update_project_visibility(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateProjectVisibilityErrorBody]:
        """Changes the public visibility for a project. The project's build results, logs, and artifacts are available
        to the general public. For more information, see Public build projects in the CodeBuild User Guide. The
        following should be kept in mind when making your projects public: All of a project's build results, logs, and
        artifacts, including builds that were run when the project was private, are available to the general public. All
        build logs and artifacts are available to the public. Environment variables, source code, and other sensitive
        information may have been output to the build logs and artifacts. You must be careful about what information is
        output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We
        recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive
        values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger
        a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as
        possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateProjectVisibility"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_project_visibility_error_mapper,
            request_options=request_options,
        )

    def update_report_group(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateReportGroupErrorBody]:
        """Updates a report group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateReportGroup"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_report_group_error_mapper,
            request_options=request_options,
        )

    def update_webhook(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateWebhookErrorBody]:
        """Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository,
        rotateSecret is ignored.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateWebhook"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncAwsCodebuildXAmzTargetCodebuildWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_delete_builds(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchDeleteBuildsErrorBody]:
        """Deletes one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchDeleteBuilds"),
            headers=[
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_delete_builds_error_mapper,
            request_options=request_options,
        )

    async def batch_get_build_batches(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetBuildBatchesErrorBody]:
        """Retrieves information about one or more batch builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetBuildBatches"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_build_batches_error_mapper,
            request_options=request_options,
        )

    async def batch_get_builds(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetBuildsErrorBody]:
        """Gets information about one or more builds.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetBuilds"),
            headers=[
                param[XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_builds_error_mapper,
            request_options=request_options,
        )

    async def batch_get_projects(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetProjectsErrorBody]:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetProjects"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_projects_error_mapper,
            request_options=request_options,
        )

    async def batch_get_report_groups(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetReportGroupsErrorBody]:
        """Returns an array of report groups.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetReportGroups"),
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_report_groups_error_mapper,
            request_options=request_options,
        )

    async def batch_get_reports(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetReportsErrorBody]:
        """Returns an array of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetReports"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_reports_error_mapper,
            request_options=request_options,
        )

    async def create_project(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateProjectErrorBody]:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateProject"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    async def create_report_group(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateReportGroupErrorBody]:
        """Creates a report group. A report group contains a collection of reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateReportGroup"),
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_report_group_error_mapper,
            request_options=request_options,
        )

    async def create_webhook(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateWebhookErrorBody]:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If
        you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two
        identical builds are created for each commit. One build is triggered through webhooks, and one through
        CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are
        using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
        Webhook box. For more information, see step 5 in Change a Build Project's Settings.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateWebhook"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_build_batch(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBuildBatchErrorBody]:
        """Deletes a batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteBuildBatch"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_build_batch_error_mapper,
            request_options=request_options,
        )

    async def delete_project(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProject"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    async def delete_report_group(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteReportGroupErrorBody]:
        """Deletes a report group. Before you delete a report group, you must delete its reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteReportGroup"),
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_report_group_error_mapper,
            request_options=request_options,
        )

    async def delete_resource_policy(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteResourcePolicyErrorBody]:
        """Deletes a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResourcePolicy"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def delete_source_credentials(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSourceCredentialsErrorBody]:
        """Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteSourceCredentials"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_source_credentials_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository,
        stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteWebhook"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def describe_code_coverages(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCodeCoveragesErrorBody]:
        """Retrieves one or more code coverage reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCodeCoverages"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_code_coverages_error_mapper,
            request_options=request_options,
        )

    async def describe_test_cases(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTestCasesErrorBody]:
        """Returns a list of details about test cases for a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTestCases"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_test_cases_error_mapper,
            request_options=request_options,
        )

    async def get_report_group_trend(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetReportGroupTrendErrorBody]:
        """Analyzes and accumulates test report values for the specified test reports.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetReportGroupTrend"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_report_group_trend_error_mapper,
            request_options=request_options,
        )

    async def get_resource_policy(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetResourcePolicyErrorBody]:
        """Gets a resource policy that is identified by its resource ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetResourcePolicy"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def import_source_credentials(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ImportSourceCredentialsErrorBody]:
        """Imports the source repository credentials for an CodeBuild project that has its source code stored in a
        GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ImportSourceCredentials"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=import_source_credentials_error_mapper,
            request_options=request_options,
        )

    async def invalidate_project_cache(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, InvalidateProjectCacheErrorBody]:
        """Resets the cache for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#InvalidateProjectCache"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=invalidate_project_cache_error_mapper,
            request_options=request_options,
        )

    async def list_build_batches(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListBuildBatchesErrorBody]:
        """Retrieves the identifiers of your build batches in the current region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuildBatches"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_build_batches_error_mapper,
            request_options=request_options,
        )

    async def list_build_batches_for_project(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListBuildBatchesForProjectErrorBody]:
        """Retrieves the identifiers of the build batches for a specific project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuildBatchesForProject"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_build_batches_for_project_error_mapper,
            request_options=request_options,
        )

    async def list_builds_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListBuildsForProjectErrorBody]:
        """Gets a list of build identifiers for the specified build project, with each build identifier representing a
        single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuildsForProject"),
            headers=[
                param[XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_builds_for_project_error_mapper,
            request_options=request_options,
        )

    async def list_curated_environment_images(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Gets information about Docker images that are managed by CodeBuild.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCuratedEnvironmentImages"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_report_groups(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListReportGroupsErrorBody]:
        """Gets a list ARNs for the report groups in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListReportGroups"),
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_report_groups_error_mapper,
            request_options=request_options,
        )

    async def list_reports_for_report_group(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListReportsForReportGroupErrorBody]:
        """Returns a list of ARNs for the reports that belong to a ReportGroup.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListReportsForReportGroup"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_reports_for_report_group_error_mapper,
            request_options=request_options,
        )

    async def list_shared_projects(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSharedProjectsErrorBody]:
        """Gets a list of projects that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSharedProjects"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_shared_projects_error_mapper,
            request_options=request_options,
        )

    async def list_shared_report_groups(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSharedReportGroupsErrorBody]:
        """Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSharedReportGroups"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_shared_report_groups_error_mapper,
            request_options=request_options,
        )

    async def list_source_credentials(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListSourceCredentialsErrorBody]:
        """Returns a list of SourceCredentialsInfo objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSourceCredentials"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_source_credentials_error_mapper,
            request_options=request_options,
        )

    async def put_resource_policy(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutResourcePolicyErrorBody]:
        """Stores a resource policy for the ARN of a Project or ReportGroup object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutResourcePolicy"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=put_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def retry_build_batch(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RetryBuildBatchErrorBody]:
        """Restarts a failed batch build. Only batch builds that have failed can be retried.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetryBuildBatch"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=retry_build_batch_error_mapper,
            request_options=request_options,
        )

    async def start_build_batch(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartBuildBatchErrorBody]:
        """Starts a batch build for a project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartBuildBatch"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_build_batch_error_mapper,
            request_options=request_options,
        )

    async def stop_build_batch(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopBuildBatchErrorBody]:
        """Stops a running batch build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopBuildBatch"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_build_batch_error_mapper,
            request_options=request_options,
        )

    async def update_project(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateProjectErrorBody]:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateProject"),
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_project_error_mapper,
            request_options=request_options,
        )

    async def update_project_visibility(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateProjectVisibilityErrorBody]:
        """Changes the public visibility for a project. The project's build results, logs, and artifacts are available
        to the general public. For more information, see Public build projects in the CodeBuild User Guide. The
        following should be kept in mind when making your projects public: All of a project's build results, logs, and
        artifacts, including builds that were run when the project was private, are available to the general public. All
        build logs and artifacts are available to the public. Environment variables, source code, and other sensitive
        information may have been output to the build logs and artifacts. You must be careful about what information is
        output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We
        recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive
        values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger
        a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as
        possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateProjectVisibility"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_project_visibility_error_mapper,
            request_options=request_options,
        )

    async def update_report_group(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateReportGroupErrorBody]:
        """Updates a report group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateReportGroup"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_report_group_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateWebhookErrorBody]:
        """Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository,
        rotateSecret is ignored.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateWebhook"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )
