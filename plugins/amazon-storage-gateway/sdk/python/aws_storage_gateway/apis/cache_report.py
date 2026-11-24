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
from ..errors.cancel_cache_report_error import CancelCacheReportErrorBody, cancel_cache_report_error_mapper
from ..errors.delete_cache_report_error import DeleteCacheReportErrorBody, delete_cache_report_error_mapper
from ..errors.describe_cache_report_error import DescribeCacheReportErrorBody, describe_cache_report_error_mapper
from ..errors.list_cache_reports_error import ListCacheReportsErrorBody, list_cache_reports_error_mapper
from ..errors.start_cache_report_error import StartCacheReportErrorBody, start_cache_report_error_mapper
from ..models.enums.x_amz_target1_aws_storage_gateway_cache_report_api import (
    XAmzTarget1AwsStorageGatewayCacheReportApiOrStr,
)
from ..models.enums.x_amz_target2_aws_storage_gateway_cache_report_api import (
    XAmzTarget2AwsStorageGatewayCacheReportApiOrStr,
)
from ..models.enums.x_amz_target3_aws_storage_gateway_cache_report_api import (
    XAmzTarget3AwsStorageGatewayCacheReportApiOrStr,
)
from ..models.enums.x_amz_target4_aws_storage_gateway_cache_report_api import (
    XAmzTarget4AwsStorageGatewayCacheReportApiOrStr,
)
from ..models.enums.x_amz_target_aws_storage_gateway_cache_report_api import (
    XAmzTargetAwsStorageGatewayCacheReportApiOrStr,
)
from ..server.server import Server


class CacheReport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CacheReportWithRawResponse(client, server, auth)

    def cancel_cache_report(
        self,
        x_amz_target: XAmzTargetAwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS
        report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel
        in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel
        operation returns an error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cancel_cache_report(x_amz_target, request_options=request_options))

    def delete_cache_report(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only
        delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete
        operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport
        does not delete the report object from your Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_cache_report(x_amz_target, request_options=request_options))

    def describe_cache_report(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns information about the specified cache report, including completion status and generation progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_cache_report(x_amz_target, request_options=request_options))

    def list_cache_reports(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of existing cache reports for all file shares associated with your Amazon Web Services
        account. This list includes all information provided by the DescribeCacheReport action, such as report name,
        status, completion progress, start time, end time, filters, and tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_cache_reports(x_amz_target, request_options=request_options))

    def start_cache_report(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file
        share. You can use this report to identify and resolve issues if you have files failing upload from your gateway
        to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you
        specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this
        report captures the files after the reset, but before they become flagged again, they will not be reported as
        Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must
        have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the
        cache report. No other cache reports can currently be in-progress for the specified file share. There must be
        fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to
        Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must
        specify at least one value for InclusionFilters or ExclusionFilters in the request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_cache_report(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> CacheReportWithRawResponse:
        return self._with_raw_response


class AsyncCacheReport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCacheReportWithRawResponse(client, server, auth)

    async def cancel_cache_report(
        self,
        x_amz_target: XAmzTargetAwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS
        report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel
        in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel
        operation returns an error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cancel_cache_report(x_amz_target, request_options=request_options))

    async def delete_cache_report(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only
        delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete
        operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport
        does not delete the report object from your Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_cache_report(x_amz_target, request_options=request_options))

    async def describe_cache_report(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns information about the specified cache report, including completion status and generation progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_cache_report(x_amz_target, request_options=request_options)
        )

    async def list_cache_reports(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of existing cache reports for all file shares associated with your Amazon Web Services
        account. This list includes all information provided by the DescribeCacheReport action, such as report name,
        status, completion progress, start time, end time, filters, and tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_cache_reports(x_amz_target, request_options=request_options))

    async def start_cache_report(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file
        share. You can use this report to identify and resolve issues if you have files failing upload from your gateway
        to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you
        specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this
        report captures the files after the reset, but before they become flagged again, they will not be reported as
        Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must
        have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the
        cache report. No other cache reports can currently be in-progress for the specified file share. There must be
        fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to
        Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must
        specify at least one value for InclusionFilters or ExclusionFilters in the request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.start_cache_report(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCacheReportWithRawResponse:
        return self._with_raw_response


class CacheReportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_cache_report(
        self,
        x_amz_target: XAmzTargetAwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CancelCacheReportErrorBody]:
        """Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS
        report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel
        in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel
        operation returns an error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelCacheReport"),
            headers=[
                param[XAmzTargetAwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=cancel_cache_report_error_mapper,
            request_options=request_options,
        )

    def delete_cache_report(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCacheReportErrorBody]:
        """Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only
        delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete
        operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport
        does not delete the report object from your Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCacheReport"),
            headers=[
                param[XAmzTarget1AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_cache_report_error_mapper,
            request_options=request_options,
        )

    def describe_cache_report(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeCacheReportErrorBody]:
        """Returns information about the specified cache report, including completion status and generation progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCacheReport"),
            headers=[
                param[XAmzTarget2AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_cache_report_error_mapper,
            request_options=request_options,
        )

    def list_cache_reports(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCacheReportsErrorBody]:
        """Returns a list of existing cache reports for all file shares associated with your Amazon Web Services
        account. This list includes all information provided by the DescribeCacheReport action, such as report name,
        status, completion progress, start time, end time, filters, and tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCacheReports"),
            headers=[
                param[XAmzTarget3AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_cache_reports_error_mapper,
            request_options=request_options,
        )

    def start_cache_report(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartCacheReportErrorBody]:
        """Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file
        share. You can use this report to identify and resolve issues if you have files failing upload from your gateway
        to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you
        specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this
        report captures the files after the reset, but before they become flagged again, they will not be reported as
        Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must
        have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the
        cache report. No other cache reports can currently be in-progress for the specified file share. There must be
        fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to
        Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must
        specify at least one value for InclusionFilters or ExclusionFilters in the request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCacheReport"),
            headers=[
                param[XAmzTarget4AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_cache_report_error_mapper,
            request_options=request_options,
        )


class AsyncCacheReportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_cache_report(
        self,
        x_amz_target: XAmzTargetAwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CancelCacheReportErrorBody]:
        """Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS
        report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel
        in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel
        operation returns an error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CancelCacheReport"),
            headers=[
                param[XAmzTargetAwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=cancel_cache_report_error_mapper,
            request_options=request_options,
        )

    async def delete_cache_report(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCacheReportErrorBody]:
        """Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only
        delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete
        operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport
        does not delete the report object from your Amazon S3 bucket.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCacheReport"),
            headers=[
                param[XAmzTarget1AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_cache_report_error_mapper,
            request_options=request_options,
        )

    async def describe_cache_report(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeCacheReportErrorBody]:
        """Returns information about the specified cache report, including completion status and generation progress.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCacheReport"),
            headers=[
                param[XAmzTarget2AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_cache_report_error_mapper,
            request_options=request_options,
        )

    async def list_cache_reports(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListCacheReportsErrorBody]:
        """Returns a list of existing cache reports for all file shares associated with your Amazon Web Services
        account. This list includes all information provided by the DescribeCacheReport action, such as report name,
        status, completion progress, start time, end time, filters, and tags.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCacheReports"),
            headers=[
                param[XAmzTarget3AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_cache_reports_error_mapper,
            request_options=request_options,
        )

    async def start_cache_report(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayCacheReportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartCacheReportErrorBody]:
        """Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file
        share. You can use this report to identify and resolve issues if you have files failing upload from your gateway
        to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you
        specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this
        report captures the files after the reset, but before they become flagged again, they will not be reported as
        Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must
        have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the
        cache report. No other cache reports can currently be in-progress for the specified file share. There must be
        fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to
        Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must
        specify at least one value for InclusionFilters or ExclusionFilters in the request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCacheReport"),
            headers=[
                param[XAmzTarget4AwsStorageGatewayCacheReportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_cache_report_error_mapper,
            request_options=request_options,
        )
