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
from ..errors.list_build_artifacts_error import ListBuildArtifactsErrorBody, list_build_artifacts_error_mapper
from ..errors.list_latest_artifacts_error import ListLatestArtifactsErrorBody, list_latest_artifacts_error_mapper
from ..models.artifact import Artifact
from ..models.enums.filter import FilterOrStr
from ..models.enums.vcs_type import VcsTypeOrStr
from ..server.server import Server


class ArtifactApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ArtifactApiWithRawResponse(client, server, auth)

    def list_build_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Artifact]:
        """Returns a list of artifacts produced by the specified build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved artifacts

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_build_artifacts(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    def list_latest_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        branch: str | None = None,
        filter_: FilterOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Artifact]:
        """Returns artifacts from the latest build of the project, optionally filtered by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: Filter artifacts by branch name
            filter_: Filter artifacts by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved latest artifacts

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_latest_artifacts(
                vcs_type, username, project, branch=branch, filter_=filter_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ArtifactApiWithRawResponse:
        return self._with_raw_response


class AsyncArtifactApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncArtifactApiWithRawResponse(client, server, auth)

    async def list_build_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Artifact]:
        """Returns a list of artifacts produced by the specified build.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved artifacts

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_build_artifacts(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    async def list_latest_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        branch: str | None = None,
        filter_: FilterOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Artifact]:
        """Returns artifacts from the latest build of the project, optionally filtered by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: Filter artifacts by branch name
            filter_: Filter artifacts by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved latest artifacts

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_latest_artifacts(
                vcs_type, username, project, branch=branch, filter_=filter_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncArtifactApiWithRawResponse:
        return self._with_raw_response


class ArtifactApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_build_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Artifact], ListBuildArtifactsErrorBody]:
        """Returns a list of artifacts produced by the specified build.

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
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/artifacts"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Artifact]],
            error_mapper=list_build_artifacts_error_mapper,
            request_options=request_options,
        )

    def list_latest_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        branch: str | None = None,
        filter_: FilterOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Artifact], ListLatestArtifactsErrorBody]:
        """Returns artifacts from the latest build of the project, optionally filtered by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: Filter artifacts by branch name
            filter_: Filter artifacts by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/latest/artifacts"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            query_params=[param[str | None]("branch", branch), param[FilterOrStr | None]("filter", filter_)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Artifact]],
            error_mapper=list_latest_artifacts_error_mapper,
            request_options=request_options,
        )


class AsyncArtifactApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_build_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Artifact], ListBuildArtifactsErrorBody]:
        """Returns a list of artifacts produced by the specified build.

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
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/artifacts"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Artifact]],
            error_mapper=list_build_artifacts_error_mapper,
            request_options=request_options,
        )

    async def list_latest_artifacts(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        branch: str | None = None,
        filter_: FilterOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Artifact], ListLatestArtifactsErrorBody]:
        """Returns artifacts from the latest build of the project, optionally filtered by branch.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            branch: Filter artifacts by branch name
            filter_: Filter artifacts by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/latest/artifacts"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            query_params=[param[str | None]("branch", branch), param[FilterOrStr | None]("filter", filter_)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Artifact]],
            error_mapper=list_latest_artifacts_error_mapper,
            request_options=request_options,
        )
