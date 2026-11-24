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
from ..errors.stop_build_error import StopBuildErrorBody, stop_build_error_mapper
from ..models.enums.x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api_api import (
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr,
)
from ..server.server import Server


class AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsCodebuildXAmzTargetCodebuild20161006StopbuildApiWithRawResponse(
            client, server, auth
        )

    def stop_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr,
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
        return unwrap(self._with_raw_response.stop_build(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsCodebuildXAmzTargetCodebuild20161006StopbuildApiWithRawResponse:
        return self._with_raw_response


class AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiWithRawResponse(
            client, server, auth
        )

    async def stop_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr,
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
        return unwrap(await self._with_raw_response.stop_build(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiWithRawResponse:
        return self._with_raw_response


class AwsCodebuildXAmzTargetCodebuild20161006StopbuildApiWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def stop_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopBuildErrorBody]:
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
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_build_error_mapper,
            request_options=request_options,
        )


class AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def stop_build(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopBuildErrorBody]:
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
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_build_error_mapper,
            request_options=request_options,
        )
