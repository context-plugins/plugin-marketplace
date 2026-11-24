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
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.batch_delete_builds2_error import BatchDeleteBuilds2ErrorBody, batch_delete_builds2_error_mapper
from ..errors.batch_get_builds2_error import BatchGetBuilds2ErrorBody, batch_get_builds2_error_mapper
from ..errors.list_builds2_error import ListBuilds2ErrorBody, list_builds2_error_mapper
from ..errors.list_builds_for_project2_error import (
    ListBuildsForProject2ErrorBody,
    list_builds_for_project2_error_mapper,
)
from ..errors.start_build2_error import StartBuild2ErrorBody, start_build2_error_mapper
from ..errors.stop_build2_error import StopBuild2ErrorBody, stop_build2_error_mapper
from ..models.enums.x_amz_target1_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from ..models.enums.x_amz_target2_aws_code_build_builds_api import XAmzTarget2AwsCodeBuildBuildsApiOrStr
from ..models.enums.x_amz_target3_aws_code_build_builds_api import XAmzTarget3AwsCodeBuildBuildsApiOrStr
from ..models.enums.x_amz_target4_aws_code_build_builds_api import XAmzTarget4AwsCodeBuildBuildsApiOrStr
from ..models.enums.x_amz_target5_aws_code_build_builds_api import XAmzTarget5AwsCodeBuildBuildsApiOrStr
from ..models.enums.x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from ..server.server import Server


class Builds:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuildsWithRawResponse(client, server, auth)

    def batch_delete_builds2(
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
        return unwrap(self._with_raw_response.batch_delete_builds2(x_amz_target, request_options=request_options))

    def batch_get_builds2(
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
        return unwrap(self._with_raw_response.batch_get_builds2(x_amz_target, request_options=request_options))

    def list_builds2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of build IDs, with each build ID representing a single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_builds2(x_amz_target, request_options=request_options))

    def list_builds_for_project2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr,
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
        return unwrap(self._with_raw_response.list_builds_for_project2(x_amz_target, request_options=request_options))

    def start_build2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts running a build with the settings defined in the project. These setting include: how to run a build,
        where to get the source code, which build environment to use, which build commands to run, and where to store
        the build output. You can also start a build run by overriding some of the build settings in the project. The
        overrides only apply for that specific start build request. The settings in the project are unaltered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.start_build2(x_amz_target, request_options=request_options))

    def stop_build2(
        self,
        x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Attempts to stop running a build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stop_build2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> BuildsWithRawResponse:
        return self._with_raw_response


class AsyncBuilds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuildsWithRawResponse(client, server, auth)

    async def batch_delete_builds2(
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
        return unwrap(await self._with_raw_response.batch_delete_builds2(x_amz_target, request_options=request_options))

    async def batch_get_builds2(
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
        return unwrap(await self._with_raw_response.batch_get_builds2(x_amz_target, request_options=request_options))

    async def list_builds2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of build IDs, with each build ID representing a single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_builds2(x_amz_target, request_options=request_options))

    async def list_builds_for_project2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr,
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
            await self._with_raw_response.list_builds_for_project2(x_amz_target, request_options=request_options)
        )

    async def start_build2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts running a build with the settings defined in the project. These setting include: how to run a build,
        where to get the source code, which build environment to use, which build commands to run, and where to store
        the build output. You can also start a build run by overriding some of the build settings in the project. The
        overrides only apply for that specific start build request. The settings in the project are unaltered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.start_build2(x_amz_target, request_options=request_options))

    async def stop_build2(
        self,
        x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Attempts to stop running a build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stop_build2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBuildsWithRawResponse:
        return self._with_raw_response


class BuildsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_delete_builds2(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchDeleteBuilds2ErrorBody]:
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
            error_mapper=batch_delete_builds2_error_mapper,
            request_options=request_options,
        )

    def batch_get_builds2(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetBuilds2ErrorBody]:
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
            error_mapper=batch_get_builds2_error_mapper,
            request_options=request_options,
        )

    def list_builds2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListBuilds2ErrorBody]:
        """Gets a list of build IDs, with each build ID representing a single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuilds"),
            headers=[
                param[XAmzTarget2AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_builds2_error_mapper,
            request_options=request_options,
        )

    def list_builds_for_project2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListBuildsForProject2ErrorBody]:
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
                param[XAmzTarget3AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_builds_for_project2_error_mapper,
            request_options=request_options,
        )

    def start_build2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartBuild2ErrorBody]:
        """Starts running a build with the settings defined in the project. These setting include: how to run a build,
        where to get the source code, which build environment to use, which build commands to run, and where to store
        the build output. You can also start a build run by overriding some of the build settings in the project. The
        overrides only apply for that specific start build request. The settings in the project are unaltered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartBuild"),
            headers=[
                param[XAmzTarget4AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_build2_error_mapper,
            request_options=request_options,
        )

    def stop_build2(
        self,
        x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopBuild2ErrorBody]:
        """Attempts to stop running a build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopBuild"),
            headers=[
                param[XAmzTarget5AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_build2_error_mapper,
            request_options=request_options,
        )


class AsyncBuildsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_delete_builds2(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchDeleteBuilds2ErrorBody]:
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
            error_mapper=batch_delete_builds2_error_mapper,
            request_options=request_options,
        )

    async def batch_get_builds2(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetBuilds2ErrorBody]:
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
            error_mapper=batch_get_builds2_error_mapper,
            request_options=request_options,
        )

    async def list_builds2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListBuilds2ErrorBody]:
        """Gets a list of build IDs, with each build ID representing a single build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListBuilds"),
            headers=[
                param[XAmzTarget2AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_builds2_error_mapper,
            request_options=request_options,
        )

    async def list_builds_for_project2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListBuildsForProject2ErrorBody]:
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
                param[XAmzTarget3AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_builds_for_project2_error_mapper,
            request_options=request_options,
        )

    async def start_build2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartBuild2ErrorBody]:
        """Starts running a build with the settings defined in the project. These setting include: how to run a build,
        where to get the source code, which build environment to use, which build commands to run, and where to store
        the build output. You can also start a build run by overriding some of the build settings in the project. The
        overrides only apply for that specific start build request. The settings in the project are unaltered.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartBuild"),
            headers=[
                param[XAmzTarget4AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_build2_error_mapper,
            request_options=request_options,
        )

    async def stop_build2(
        self,
        x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopBuild2ErrorBody]:
        """Attempts to stop running a build.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopBuild"),
            headers=[
                param[XAmzTarget5AwsCodeBuildBuildsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_build2_error_mapper,
            request_options=request_options,
        )
