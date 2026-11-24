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
from ..errors.list_reports_error import ListReportsErrorBody, list_reports_error_mapper
from ..models.enums.x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listreports_api import (
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
)
from ..server.server import Server


class AwsCodebuildXAmzTargetCodebuild20161006Listreports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsCodebuildXAmzTargetCodebuild20161006ListreportsWithRawResponse(
            client, server, auth
        )

    def list_reports(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of ARNs for the reports in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_reports(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AwsCodebuildXAmzTargetCodebuild20161006ListreportsWithRawResponse:
        return self._with_raw_response


class AsyncAwsCodebuildXAmzTargetCodebuild20161006Listreports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsCodebuildXAmzTargetCodebuild20161006ListreportsWithRawResponse(
            client, server, auth
        )

    async def list_reports(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of ARNs for the reports in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_reports(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006ListreportsWithRawResponse:
        return self._with_raw_response


class AwsCodebuildXAmzTargetCodebuild20161006ListreportsWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def list_reports(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListReportsErrorBody]:
        """Returns a list of ARNs for the reports in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListReports"),
            headers=[
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_reports_error_mapper,
            request_options=request_options,
        )


class AsyncAwsCodebuildXAmzTargetCodebuild20161006ListreportsWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def list_reports(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListReportsErrorBody]:
        """Returns a list of ARNs for the reports in the current Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListReports"),
            headers=[
                param[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_reports_error_mapper,
            request_options=request_options,
        )
