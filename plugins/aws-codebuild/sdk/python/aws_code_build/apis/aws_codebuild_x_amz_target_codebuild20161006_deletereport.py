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
from ..errors.delete_report_error import DeleteReportErrorBody, delete_report_error_mapper
from ..models.enums.x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_deletereport_api import (
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr,
)
from ..server.server import Server


class AwsCodebuildXAmzTargetCodebuild20161006Deletereport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsCodebuildXAmzTargetCodebuild20161006DeletereportWithRawResponse(
            client, server, auth
        )

    def delete_report(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_report(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsCodebuildXAmzTargetCodebuild20161006DeletereportWithRawResponse:
        return self._with_raw_response


class AsyncAwsCodebuildXAmzTargetCodebuild20161006Deletereport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsCodebuildXAmzTargetCodebuild20161006DeletereportWithRawResponse(
            client, server, auth
        )

    async def delete_report(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_report(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006DeletereportWithRawResponse:
        return self._with_raw_response


class AwsCodebuildXAmzTargetCodebuild20161006DeletereportWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def delete_report(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteReportErrorBody]:
        """Deletes a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteReport"),
            headers=[
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_report_error_mapper,
            request_options=request_options,
        )


class AsyncAwsCodebuildXAmzTargetCodebuild20161006DeletereportWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def delete_report(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteReportErrorBody]:
        """Deletes a report.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteReport"),
            headers=[
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_report_error_mapper,
            request_options=request_options,
        )
