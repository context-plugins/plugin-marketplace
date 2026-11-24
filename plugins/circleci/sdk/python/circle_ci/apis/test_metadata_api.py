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
from ..errors.list_build_tests_error import ListBuildTestsErrorBody, list_build_tests_error_mapper
from ..models.enums.vcs_type import VcsTypeOrStr
from ..models.project_project_build_num_tests_response import ProjectProjectBuildNumTestsResponse
from ..server.server import Server


class TestMetadataApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestMetadataApiWithRawResponse(client, server, auth)

    def list_build_tests(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectProjectBuildNumTestsResponse:
        """Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result
        files.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved test metadata

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_build_tests(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TestMetadataApiWithRawResponse:
        return self._with_raw_response


class AsyncTestMetadataApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestMetadataApiWithRawResponse(client, server, auth)

    async def list_build_tests(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectProjectBuildNumTestsResponse:
        """Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result
        files.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            build_num: The build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved test metadata

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_build_tests(
                vcs_type, username, project, build_num, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTestMetadataApiWithRawResponse:
        return self._with_raw_response


class TestMetadataApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_build_tests(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectProjectBuildNumTestsResponse, ListBuildTestsErrorBody]:
        """Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result
        files.

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
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/tests"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ProjectProjectBuildNumTestsResponse],
            error_mapper=list_build_tests_error_mapper,
            request_options=request_options,
        )


class AsyncTestMetadataApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_build_tests(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        build_num: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectProjectBuildNumTestsResponse, ListBuildTestsErrorBody]:
        """Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result
        files.

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
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/{build_num}/tests"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
                param[int]("build_num", build_num),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ProjectProjectBuildNumTestsResponse],
            error_mapper=list_build_tests_error_mapper,
            request_options=request_options,
        )
