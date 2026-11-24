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
from ..errors.start_build_error import StartBuildErrorBody, start_build_error_mapper
from ..models.enums.x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_startbuild_api import (
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr,
)
from ..server.server import Server


class AwsCodebuildXAmzTargetCodebuild20161006Startbuild:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsCodebuildXAmzTargetCodebuild20161006StartbuildWithRawResponse(client, server, auth)

    def start_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr,
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
        return unwrap(self._with_raw_response.start_build(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsCodebuildXAmzTargetCodebuild20161006StartbuildWithRawResponse:
        return self._with_raw_response


class AsyncAwsCodebuildXAmzTargetCodebuild20161006Startbuild:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsCodebuildXAmzTargetCodebuild20161006StartbuildWithRawResponse(
            client, server, auth
        )

    async def start_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr,
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
        return unwrap(await self._with_raw_response.start_build(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006StartbuildWithRawResponse:
        return self._with_raw_response


class AwsCodebuildXAmzTargetCodebuild20161006StartbuildWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def start_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartBuildErrorBody]:
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
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_build_error_mapper,
            request_options=request_options,
        )


class AsyncAwsCodebuildXAmzTargetCodebuild20161006StartbuildWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def start_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartBuildErrorBody]:
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
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_build_error_mapper,
            request_options=request_options,
        )
