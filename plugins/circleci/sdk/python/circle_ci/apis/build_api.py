from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_build_error import CancelBuildErrorBody, cancel_build_error_mapper
from ..errors.get_build_error import GetBuildErrorBody, get_build_error_mapper
from ..errors.list_project_builds_error import ListProjectBuildsErrorBody, list_project_builds_error_mapper
from ..errors.list_recent_builds_error import ListRecentBuildsErrorBody, list_recent_builds_error_mapper
from ..errors.retry_build_error import RetryBuildErrorBody, retry_build_error_mapper
from ..errors.trigger_branch_build_error import TriggerBranchBuildErrorBody, trigger_branch_build_error_mapper
from ..errors.trigger_build_error import TriggerBuildErrorBody, trigger_build_error_mapper
from ..models.build import Build
from ..models.build_detail import BuildDetail
from ..models.build_summary import BuildSummary
from ..models.enums.filter_circle_ci_rest_api_v1_build_api import FilterCircleCiRestApiV1BuildApiOrStr
from ..models.enums.vcs_type import VcsTypeOrStr
from ..models.project_project_request import ProjectProjectRequest, ProjectProjectRequestDict
from ..models.project_project_tree_branch_request import (
    ProjectProjectTreeBranchRequest,
    ProjectProjectTreeBranchRequestDict,
)
from ..server.server import Server


class BuildApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuildApiWithRawResponse(client, server, auth)

    def cancel_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Cancels a running build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build cancelled successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.cancel_build(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    def get_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildDetail:
        """Returns detailed information about a specific build, including its status, steps, and timing information.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved build details

        Raises:
            ApiError: Unauthorized Build not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_build(vcs_type, username, project, build_num, request_options=request_options)
        )

    def list_project_builds(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None,
        limit: int | None = 30,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Build]:
        """Returns a list of the most recent builds for the specified project, with optional filtering by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            filter_: Filter builds by status
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved builds

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_project_builds(
                vcs_type,
                username,
                project,
                filter_=filter_,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def list_recent_builds(
        self, *, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[Build]:
        """Returns a list of the most recent builds across all followed projects for the authenticated user.

        Args:
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved recent builds

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_recent_builds(limit=limit, offset=offset, request_options=request_options)
        )

    def retry_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Retries a build using the same configuration and revision as the original build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build retried successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.retry_build(vcs_type, username, project, build_num, request_options=request_options)
        )

    def trigger_branch_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        branch: str,
        *,
        body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Triggers a new build on the specified branch of the project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: The branch to build
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build triggered successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.trigger_branch_build(
                vcs_type, username, project, branch, body=body, request_options=request_options
            ),
        )

    def trigger_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        body: ProjectProjectRequest | ProjectProjectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build triggered successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.trigger_build(
                vcs_type, username, project, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BuildApiWithRawResponse:
        return self._with_raw_response


class AsyncBuildApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuildApiWithRawResponse(client, server, auth)

    async def cancel_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Cancels a running build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build cancelled successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_build(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    async def get_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildDetail:
        """Returns detailed information about a specific build, including its status, steps, and timing information.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved build details

        Raises:
            ApiError: Unauthorized Build not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_build(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    async def list_project_builds(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None,
        limit: int | None = 30,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Build]:
        """Returns a list of the most recent builds for the specified project, with optional filtering by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            filter_: Filter builds by status
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved builds

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_project_builds(
                vcs_type,
                username,
                project,
                filter_=filter_,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def list_recent_builds(
        self,
        *,
        limit: int | None = 30,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Build]:
        """Returns a list of the most recent builds across all followed projects for the authenticated user.

        Args:
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved recent builds

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_recent_builds(
                limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def retry_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Retries a build using the same configuration and revision as the original build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build retried successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retry_build(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    async def trigger_branch_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        branch: str,
        *,
        body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Triggers a new build on the specified branch of the project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: The branch to build
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build triggered successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_branch_build(
                vcs_type, username, project, branch, body=body, request_options=request_options
            ),
        )

    async def trigger_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        body: ProjectProjectRequest | ProjectProjectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildSummary:
        """Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build triggered successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_build(
                vcs_type, username, project, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBuildApiWithRawResponse:
        return self._with_raw_response


class BuildApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, CancelBuildErrorBody]:
        """Cancels a running build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/cancel"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[BuildSummary],
            error_mapper=cancel_build_error_mapper,
            request_options=request_options,
        )

    def get_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildDetail, GetBuildErrorBody]:
        """Returns detailed information about a specific build, including its status, steps, and timing information.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[BuildDetail],
            error_mapper=get_build_error_mapper,
            request_options=request_options,
        )

    def list_project_builds(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None,
        limit: int | None = 30,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Build], ListProjectBuildsErrorBody]:
        """Returns a list of the most recent builds for the specified project, with optional filtering by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            filter_: Filter builds by status
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            query_params=[
                param[FilterCircleCiRestApiV1BuildApiOrStr | None]("filter", filter_),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Build]],
            error_mapper=list_project_builds_error_mapper,
            request_options=request_options,
        )

    def list_recent_builds(
        self, *, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Build], ListRecentBuildsErrorBody]:
        """Returns a list of the most recent builds across all followed projects for the authenticated user.

        Args:
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/recent-builds"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Build]],
            error_mapper=list_recent_builds_error_mapper,
            request_options=request_options,
        )

    def retry_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, RetryBuildErrorBody]:
        """Retries a build using the same configuration and revision as the original build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/retry"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[BuildSummary],
            error_mapper=retry_build_error_mapper,
            request_options=request_options,
        )

    def trigger_branch_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        branch: str,
        *,
        body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, TriggerBranchBuildErrorBody]:
        """Triggers a new build on the specified branch of the project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: The branch to build
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/tree/{branch}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[str]("branch", branch),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[BuildSummary],
            error_mapper=trigger_branch_build_error_mapper,
            request_options=request_options,
        )

    def trigger_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        body: ProjectProjectRequest | ProjectProjectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, TriggerBuildErrorBody]:
        """Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectRequest | ProjectProjectRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[BuildSummary],
            error_mapper=trigger_build_error_mapper,
            request_options=request_options,
        )


class AsyncBuildApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, CancelBuildErrorBody]:
        """Cancels a running build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/cancel"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[BuildSummary],
            error_mapper=cancel_build_error_mapper,
            request_options=request_options,
        )

    async def get_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildDetail, GetBuildErrorBody]:
        """Returns detailed information about a specific build, including its status, steps, and timing information.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[BuildDetail],
            error_mapper=get_build_error_mapper,
            request_options=request_options,
        )

    async def list_project_builds(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None,
        limit: int | None = 30,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Build], ListProjectBuildsErrorBody]:
        """Returns a list of the most recent builds for the specified project, with optional filtering by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            filter_: Filter builds by status
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            query_params=[
                param[FilterCircleCiRestApiV1BuildApiOrStr | None]("filter", filter_),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Build]],
            error_mapper=list_project_builds_error_mapper,
            request_options=request_options,
        )

    async def list_recent_builds(
        self,
        *,
        limit: int | None = 30,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Build], ListRecentBuildsErrorBody]:
        """Returns a list of the most recent builds across all followed projects for the authenticated user.

        Args:
            limit: Number of builds to return (max 100)
            offset: Offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/recent-builds"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Build]],
            error_mapper=list_recent_builds_error_mapper,
            request_options=request_options,
        )

    async def retry_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, RetryBuildErrorBody]:
        """Retries a build using the same configuration and revision as the original build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/retry"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[BuildSummary],
            error_mapper=retry_build_error_mapper,
            request_options=request_options,
        )

    async def trigger_branch_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        branch: str,
        *,
        body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, TriggerBranchBuildErrorBody]:
        """Triggers a new build on the specified branch of the project.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: The branch to build
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/tree/{branch}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[str]("branch", branch),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[BuildSummary],
            error_mapper=trigger_branch_build_error_mapper,
            request_options=request_options,
        )

    async def trigger_build(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        body: ProjectProjectRequest | ProjectProjectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSummary, TriggerBuildErrorBody]:
        """Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectProjectRequest | ProjectProjectRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[BuildSummary],
            error_mapper=trigger_build_error_mapper,
            request_options=request_options,
        )
