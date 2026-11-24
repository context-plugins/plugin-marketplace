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
from ..errors.create_dataset_import_job_error import (
    CreateDatasetImportJobErrorBody,
    create_dataset_import_job_error_mapper,
)
from ..errors.delete_dataset_import_job_error import (
    DeleteDatasetImportJobErrorBody,
    delete_dataset_import_job_error_mapper,
)
from ..errors.describe_dataset_import_job_error import (
    DescribeDatasetImportJobErrorBody,
    describe_dataset_import_job_error_mapper,
)
from ..errors.list_dataset_import_jobs_error import (
    ListDatasetImportJobsErrorBody,
    list_dataset_import_jobs_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_forecast_service_dataset_import_job_api import (
    XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_dataset_import_job_api import (
    XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_dataset_import_job_api import (
    XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_dataset_import_job_api import (
    XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr,
)
from ..server.server import Server


class DatasetImportJob:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatasetImportJobWithRawResponse(client, server, auth)

    def create_dataset_import_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in
        an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you
        want to import the data to. You must specify a DataSource object that includes an Identity and Access Management
        (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
        processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The
        training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a
        specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports
        all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset
        import is the one that is used when training a predictor or generating a forecast. Make sure that your most
        recent dataset import contains all of the data you want to model off of, and not just the new data collected
        since the previous import. To get a list of all your dataset import jobs, filtered by specified

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_dataset_import_job(x_amz_target, request_options=request_options))

    def delete_dataset_import_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset
        import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob
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
        return unwrap(self._with_raw_response.delete_dataset_import_job(x_amz_target, request_options=request_options))

    def describe_dataset_import_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the
        parameters provided in the CreateDatasetImportJob request, this operation includes the following properties:
        CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information
        about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_dataset_import_job(x_amz_target, request_options=request_options)
        )

    def list_dataset_import_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import
        job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can
        filter the list by providing an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_dataset_import_jobs(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> DatasetImportJobWithRawResponse:
        return self._with_raw_response


class AsyncDatasetImportJob:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatasetImportJobWithRawResponse(client, server, auth)

    async def create_dataset_import_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in
        an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you
        want to import the data to. You must specify a DataSource object that includes an Identity and Access Management
        (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
        processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The
        training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a
        specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports
        all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset
        import is the one that is used when training a predictor or generating a forecast. Make sure that your most
        recent dataset import contains all of the data you want to model off of, and not just the new data collected
        since the previous import. To get a list of all your dataset import jobs, filtered by specified

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
            await self._with_raw_response.create_dataset_import_job(x_amz_target, request_options=request_options)
        )

    async def delete_dataset_import_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset
        import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob
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
            await self._with_raw_response.delete_dataset_import_job(x_amz_target, request_options=request_options)
        )

    async def describe_dataset_import_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the
        parameters provided in the CreateDatasetImportJob request, this operation includes the following properties:
        CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information
        about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_dataset_import_job(x_amz_target, request_options=request_options)
        )

    async def list_dataset_import_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import
        job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can
        filter the list by providing an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_dataset_import_jobs(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDatasetImportJobWithRawResponse:
        return self._with_raw_response


class DatasetImportJobWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_dataset_import_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateDatasetImportJobErrorBody]:
        """Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in
        an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you
        want to import the data to. You must specify a DataSource object that includes an Identity and Access Management
        (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
        processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The
        training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a
        specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports
        all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset
        import is the one that is used when training a predictor or generating a forecast. Make sure that your most
        recent dataset import contains all of the data you want to model off of, and not just the new data collected
        since the previous import. To get a list of all your dataset import jobs, filtered by specified

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDatasetImportJob"),
            headers=[
                param[XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_dataset_import_job_error_mapper,
            request_options=request_options,
        )

    def delete_dataset_import_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDatasetImportJobErrorBody]:
        """Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset
        import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDatasetImportJob"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_dataset_import_job_error_mapper,
            request_options=request_options,
        )

    def describe_dataset_import_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeDatasetImportJobErrorBody]:
        """Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the
        parameters provided in the CreateDatasetImportJob request, this operation includes the following properties:
        CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information
        about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDatasetImportJob"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_dataset_import_job_error_mapper,
            request_options=request_options,
        )

    def list_dataset_import_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListDatasetImportJobsErrorBody]:
        """Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import
        job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can
        filter the list by providing an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetImportJobs"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_dataset_import_jobs_error_mapper,
            request_options=request_options,
        )


class AsyncDatasetImportJobWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_dataset_import_job(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateDatasetImportJobErrorBody]:
        """Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in
        an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you
        want to import the data to. You must specify a DataSource object that includes an Identity and Access Management
        (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
        processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The
        training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a
        specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports
        all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset
        import is the one that is used when training a predictor or generating a forecast. Make sure that your most
        recent dataset import contains all of the data you want to model off of, and not just the new data collected
        since the previous import. To get a list of all your dataset import jobs, filtered by specified

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDatasetImportJob"),
            headers=[
                param[XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_dataset_import_job_error_mapper,
            request_options=request_options,
        )

    async def delete_dataset_import_job(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDatasetImportJobErrorBody]:
        """Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset
        import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDatasetImportJob"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_dataset_import_job_error_mapper,
            request_options=request_options,
        )

    async def describe_dataset_import_job(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeDatasetImportJobErrorBody]:
        """Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the
        parameters provided in the CreateDatasetImportJob request, this operation includes the following properties:
        CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information
        about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDatasetImportJob"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_dataset_import_job_error_mapper,
            request_options=request_options,
        )

    async def list_dataset_import_jobs(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListDatasetImportJobsErrorBody]:
        """Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import
        job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can
        filter the list by providing an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetImportJobs"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_dataset_import_jobs_error_mapper,
            request_options=request_options,
        )
