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
from ..errors.create_forecast_export_job2_error import (
    CreateForecastExportJob2ErrorBody,
    create_forecast_export_job2_error_mapper,
)
from ..errors.delete_forecast_export_job_error import (
    DeleteForecastExportJobErrorBody,
    delete_forecast_export_job_error_mapper,
)
from ..errors.describe_forecast_export_job_error import (
    DescribeForecastExportJobErrorBody,
    describe_forecast_export_job_error_mapper,
)
from ..errors.list_forecast_export_jobs_error import (
    ListForecastExportJobsErrorBody,
    list_forecast_export_jobs_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_forecast_service_forecast_export_job_api import (
    XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_forecast_export_job_api import (
    XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_forecast_export_job_api import (
    XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_export_jobs_api import (
    XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
)
from ..server.server import Server


class ForecastExportJob:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ForecastExportJobWithRawResponse(client, server, auth)

    def create_forecast_export_job2(
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
        return unwrap(
            self._with_raw_response.create_forecast_export_job2(x_amz_target, request_options=request_options)
        )

    def delete_forecast_export_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a forecast export job created using the CreateForecastExportJob operation. You can delete only export
        jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecastExportJob
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_forecast_export_job(x_amz_target, request_options=request_options))

    def describe_forecast_export_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing
        the properties provided by the user in the CreateForecastExportJob request, this operation lists the following
        properties: CreationTime LastModificationTime Status Message - If an error occurred, information about the
        error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_forecast_export_job(x_amz_target, request_options=request_options)
        )

    def list_forecast_export_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast
        export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To
        retrieve the complete set of properties, use the ARN with the DescribeForecastExportJob operation. You can
        filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_forecast_export_jobs(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ForecastExportJobWithRawResponse:
        return self._with_raw_response


class AsyncForecastExportJob:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncForecastExportJobWithRawResponse(client, server, auth)

    async def create_forecast_export_job2(
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
            await self._with_raw_response.create_forecast_export_job2(x_amz_target, request_options=request_options)
        )

    async def delete_forecast_export_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a forecast export job created using the CreateForecastExportJob operation. You can delete only export
        jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecastExportJob
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_forecast_export_job(x_amz_target, request_options=request_options)
        )

    async def describe_forecast_export_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing
        the properties provided by the user in the CreateForecastExportJob request, this operation lists the following
        properties: CreationTime LastModificationTime Status Message - If an error occurred, information about the
        error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_forecast_export_job(x_amz_target, request_options=request_options)
        )

    async def list_forecast_export_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast
        export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To
        retrieve the complete set of properties, use the ARN with the DescribeForecastExportJob operation. You can
        filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_forecast_export_jobs(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncForecastExportJobWithRawResponse:
        return self._with_raw_response


class ForecastExportJobWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_forecast_export_job2(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateForecastExportJob2ErrorBody]:
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
            error_mapper=create_forecast_export_job2_error_mapper,
            request_options=request_options,
        )

    def delete_forecast_export_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteForecastExportJobErrorBody]:
        """Deletes a forecast export job created using the CreateForecastExportJob operation. You can delete only export
        jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecastExportJob
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteForecastExportJob"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_forecast_export_job_error_mapper,
            request_options=request_options,
        )

    def describe_forecast_export_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeForecastExportJobErrorBody]:
        """Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing
        the properties provided by the user in the CreateForecastExportJob request, this operation lists the following
        properties: CreationTime LastModificationTime Status Message - If an error occurred, information about the
        error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeForecastExportJob"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_forecast_export_job_error_mapper,
            request_options=request_options,
        )

    def list_forecast_export_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListForecastExportJobsErrorBody]:
        """Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast
        export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To
        retrieve the complete set of properties, use the ARN with the DescribeForecastExportJob operation. You can
        filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListForecastExportJobs"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_forecast_export_jobs_error_mapper,
            request_options=request_options,
        )


class AsyncForecastExportJobWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_forecast_export_job2(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateForecastExportJob2ErrorBody]:
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
            error_mapper=create_forecast_export_job2_error_mapper,
            request_options=request_options,
        )

    async def delete_forecast_export_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteForecastExportJobErrorBody]:
        """Deletes a forecast export job created using the CreateForecastExportJob operation. You can delete only export
        jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecastExportJob
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteForecastExportJob"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_forecast_export_job_error_mapper,
            request_options=request_options,
        )

    async def describe_forecast_export_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeForecastExportJobErrorBody]:
        """Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing
        the properties provided by the user in the CreateForecastExportJob request, this operation lists the following
        properties: CreationTime LastModificationTime Status Message - If an error occurred, information about the
        error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeForecastExportJob"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_forecast_export_job_error_mapper,
            request_options=request_options,
        )

    async def list_forecast_export_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListForecastExportJobsErrorBody]:
        """Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast
        export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To
        retrieve the complete set of properties, use the ARN with the DescribeForecastExportJob operation. You can
        filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListForecastExportJobs"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_forecast_export_jobs_error_mapper,
            request_options=request_options,
        )
