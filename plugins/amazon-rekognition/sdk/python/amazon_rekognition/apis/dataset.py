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
from ..models.enums.x_amz_target1_amazon_rekognition_dataset_api import XAmzTarget1AmazonRekognitionDatasetApiOrStr
from ..models.enums.x_amz_target2_amazon_rekognition_dataset_api import XAmzTarget2AmazonRekognitionDatasetApiOrStr
from ..models.enums.x_amz_target_amazon_rekognition_dataset_api import XAmzTargetAmazonRekognitionDatasetApiOrStr
from ..server.server import Server


class Dataset:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatasetWithRawResponse(client, server, auth)

    def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionDatasetApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom
        Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an
        existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for
        the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType.
        The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a
        while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the
        value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and
        check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs
        (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see
        Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to
        perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also requir

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; InvalidS3ObjectException;
                LimitExceededException; ProvisionedThroughputExceededException; ResourceAlreadyExistsException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_dataset(x_amz_target, request_options=request_options))

    def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition
        Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The
        dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after
        it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating
        (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation
        requires permissions to perform the rekognition:DeleteDataset action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_dataset(x_amz_target, request_options=request_options))

    def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom
        Labels dataset. You can get information such as the current status of a dataset and statistics about the images
        and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_dataset(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> DatasetWithRawResponse:
        return self._with_raw_response


class AsyncDataset:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatasetWithRawResponse(client, server, auth)

    async def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionDatasetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom
        Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an
        existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for
        the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType.
        The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a
        while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the
        value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and
        check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs
        (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see
        Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to
        perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also requir

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; InvalidS3ObjectException;
                LimitExceededException; ProvisionedThroughputExceededException; ResourceAlreadyExistsException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_dataset(x_amz_target, request_options=request_options))

    async def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition
        Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The
        dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after
        it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating
        (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation
        requires permissions to perform the rekognition:DeleteDataset action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_dataset(x_amz_target, request_options=request_options))

    async def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom
        Labels dataset. You can get information such as the current status of a dataset and statistics about the images
        and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_dataset(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatasetWithRawResponse:
        return self._with_raw_response


class DatasetWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionDatasetApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateDatasetErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom
        Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an
        existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for
        the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType.
        The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a
        while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the
        value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and
        check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs
        (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see
        Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to
        perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also requir

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
                param[XAmzTargetAmazonRekognitionDatasetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_dataset_error_mapper,
            request_options=request_options,
        )

    def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDatasetErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition
        Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The
        dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after
        it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating
        (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation
        requires permissions to perform the rekognition:DeleteDataset action.

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
                param[XAmzTarget1AmazonRekognitionDatasetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_dataset_error_mapper,
            request_options=request_options,
        )

    def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeDatasetErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom
        Labels dataset. You can get information such as the current status of a dataset and statistics about the images
        and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

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
                param[XAmzTarget2AmazonRekognitionDatasetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_dataset_error_mapper,
            request_options=request_options,
        )


class AsyncDatasetWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_dataset(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionDatasetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateDatasetErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom
        Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an
        existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for
        the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType.
        The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a
        while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the
        value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and
        check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs
        (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see
        Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to
        perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also requir

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
                param[XAmzTargetAmazonRekognitionDatasetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_dataset_error_mapper,
            request_options=request_options,
        )

    async def delete_dataset(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDatasetErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition
        Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The
        dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after
        it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating
        (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation
        requires permissions to perform the rekognition:DeleteDataset action.

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
                param[XAmzTarget1AmazonRekognitionDatasetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_dataset_error_mapper,
            request_options=request_options,
        )

    async def describe_dataset(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionDatasetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeDatasetErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom
        Labels dataset. You can get information such as the current status of a dataset and statistics about the images
        and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

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
                param[XAmzTarget2AmazonRekognitionDatasetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_dataset_error_mapper,
            request_options=request_options,
        )
