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
from ..errors.create_forecast_export_job_error import (
    CreateForecastExportJobErrorBody,
    create_forecast_export_job_error_mapper,
)
from ..models.enums.x_amz_target_amazon_forecast_service_export_jobs_api import (
    XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
)
from ..server.server import Server


class ExportJobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExportJobsWithRawResponse(client, server, auth)

    def create_forecast_export_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3)
        bucket. The forecast file name will match the following conventions: __ where the component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must
        be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the
        DescribeForecastExportJob operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_forecast_export_job(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ExportJobsWithRawResponse:
        return self._with_raw_response


class AsyncExportJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExportJobsWithRawResponse(client, server, auth)

    async def create_forecast_export_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3)
        bucket. The forecast file name will match the following conventions: __ where the component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must
        be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the
        DescribeForecastExportJob operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_forecast_export_job(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExportJobsWithRawResponse:
        return self._with_raw_response


class ExportJobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_forecast_export_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateForecastExportJobErrorBody]:
        """Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3)
        bucket. The forecast file name will match the following conventions: __ where the component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must
        be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the
        DescribeForecastExportJob operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateForecastExportJob"),
            headers=[
                param[XAmzTargetAmazonForecastServiceExportJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_forecast_export_job_error_mapper,
            request_options=request_options,
        )


class AsyncExportJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_forecast_export_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateForecastExportJobErrorBody]:
        """Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3)
        bucket. The forecast file name will match the following conventions: __ where the component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must
        be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the
        DescribeForecastExportJob operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateForecastExportJob"),
            headers=[
                param[XAmzTargetAmazonForecastServiceExportJobsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_forecast_export_job_error_mapper,
            request_options=request_options,
        )
