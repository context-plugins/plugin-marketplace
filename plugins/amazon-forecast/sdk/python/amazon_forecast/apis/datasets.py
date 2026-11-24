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
from ..errors.create_dataset_error import CreateDatasetErrorBody, create_dataset_error_mapper
from ..errors.delete_dataset_error import DeleteDatasetErrorBody, delete_dataset_error_mapper
from ..errors.describe_dataset_error import DescribeDatasetErrorBody, describe_dataset_error_mapper
from ..errors.list_datasets_error import ListDatasetsErrorBody, list_datasets_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_datasets_api import (
    XAmzTarget1AmazonForecastServiceDatasetsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_datasets_api import (
    XAmzTarget2AmazonForecastServiceDatasetsApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_datasets_api import (
    XAmzTarget3AmazonForecastServiceDatasetsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_datasets_api import (
    XAmzTargetAmazonForecastServiceDatasetsApiOrStr,
)
from ..server.server import Server


class Datasets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatasetsWithRawResponse(client, server, auth)

    def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast
        understand how to consume the data for model training. This includes the following: DataFrequency - How
        frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an
        associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains
        and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast
        requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the
        dataset, including the field name and data type. After creating a dataset, you import your training data into it
        and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information,
        see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast
        datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you
        can import training data. Use the DescribeDataset operation to get the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_dataset(x_amz_target, request_options=request_options))

    def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete
        datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation.
        Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update
        the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_dataset(x_amz_target, request_options=request_options))

    def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the
        parameters specified in the CreateDataset request, this operation includes the following dataset properties:
        CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_dataset(x_amz_target, request_options=request_options))

    def list_datasets(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its
        properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties,
        use the ARN with the DescribeDataset operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_datasets(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> DatasetsWithRawResponse:
        return self._with_raw_response


class AsyncDatasets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatasetsWithRawResponse(client, server, auth)

    async def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast
        understand how to consume the data for model training. This includes the following: DataFrequency - How
        frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an
        associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains
        and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast
        requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the
        dataset, including the field name and data type. After creating a dataset, you import your training data into it
        and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information,
        see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast
        datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you
        can import training data. Use the DescribeDataset operation to get the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_dataset(x_amz_target, request_options=request_options))

    async def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete
        datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation.
        Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update
        the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_dataset(x_amz_target, request_options=request_options))

    async def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the
        parameters specified in the CreateDataset request, this operation includes the following dataset properties:
        CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_dataset(x_amz_target, request_options=request_options))

    async def list_datasets(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its
        properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties,
        use the ARN with the DescribeDataset operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_datasets(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatasetsWithRawResponse:
        return self._with_raw_response


class DatasetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateDatasetErrorBody]:
        """Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast
        understand how to consume the data for model training. This includes the following: DataFrequency - How
        frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an
        associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains
        and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast
        requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the
        dataset, including the field name and data type. After creating a dataset, you import your training data into it
        and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information,
        see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast
        datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you
        can import training data. Use the DescribeDataset operation to get the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDataset"),
            headers=[
                param[XAmzTargetAmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_dataset_error_mapper,
            request_options=request_options,
        )

    def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDatasetErrorBody]:
        """Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete
        datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation.
        Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update
        the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDataset"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_dataset_error_mapper,
            request_options=request_options,
        )

    def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeDatasetErrorBody]:
        """Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the
        parameters specified in the CreateDataset request, this operation includes the following dataset properties:
        CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDataset"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_dataset_error_mapper,
            request_options=request_options,
        )

    def list_datasets(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListDatasetsErrorBody]:
        """Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its
        properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties,
        use the ARN with the DescribeDataset operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasets"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_datasets_error_mapper,
            request_options=request_options,
        )


class AsyncDatasetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateDatasetErrorBody]:
        """Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast
        understand how to consume the data for model training. This includes the following: DataFrequency - How
        frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an
        associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains
        and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast
        requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the
        dataset, including the field name and data type. After creating a dataset, you import your training data into it
        and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information,
        see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast
        datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you
        can import training data. Use the DescribeDataset operation to get the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDataset"),
            headers=[
                param[XAmzTargetAmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_dataset_error_mapper,
            request_options=request_options,
        )

    async def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDatasetErrorBody]:
        """Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete
        datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation.
        Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update
        the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDataset"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_dataset_error_mapper,
            request_options=request_options,
        )

    async def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeDatasetErrorBody]:
        """Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the
        parameters specified in the CreateDataset request, this operation includes the following dataset properties:
        CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDataset"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_dataset_error_mapper,
            request_options=request_options,
        )

    async def list_datasets(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceDatasetsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListDatasetsErrorBody]:
        """Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its
        properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties,
        use the ARN with the DescribeDataset operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasets"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceDatasetsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_datasets_error_mapper,
            request_options=request_options,
        )
