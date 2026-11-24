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
from ..errors.create_dataset_group_error import CreateDatasetGroupErrorBody, create_dataset_group_error_mapper
from ..errors.delete_dataset_group_error import DeleteDatasetGroupErrorBody, delete_dataset_group_error_mapper
from ..errors.describe_dataset_group_error import DescribeDatasetGroupErrorBody, describe_dataset_group_error_mapper
from ..errors.list_dataset_groups_error import ListDatasetGroupsErrorBody, list_dataset_groups_error_mapper
from ..errors.update_dataset_group_error import UpdateDatasetGroupErrorBody, update_dataset_group_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..server.server import Server


class DatasetGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatasetGroupsWithRawResponse(client, server, auth)

    def create_dataset_group(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset
        group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a
        dataset group and adding datasets, you use the dataset group when you create a predictor. For more information,
        see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status
        of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status,
        use the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_dataset_group(x_amz_target, request_options=request_options))

    def delete_dataset_group(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups
        that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup
        operation. This operation deletes only the dataset group, not the datasets in the group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_dataset_group(x_amz_target, request_options=request_options))

    def describe_dataset_group(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the
        parameters provided in the CreateDatasetGroup request, this operation includes the following properties:
        DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_dataset_group(x_amz_target, request_options=request_options))

    def list_dataset_groups(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this
        operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
        complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_dataset_groups(x_amz_target, request_options=request_options))

    def update_dataset_group(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be
        ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get
        the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.update_dataset_group(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> DatasetGroupsWithRawResponse:
        return self._with_raw_response


class AsyncDatasetGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatasetGroupsWithRawResponse(client, server, auth)

    async def create_dataset_group(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset
        group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a
        dataset group and adding datasets, you use the dataset group when you create a predictor. For more information,
        see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status
        of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status,
        use the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_dataset_group(x_amz_target, request_options=request_options))

    async def delete_dataset_group(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups
        that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup
        operation. This operation deletes only the dataset group, not the datasets in the group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_dataset_group(x_amz_target, request_options=request_options))

    async def describe_dataset_group(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the
        parameters provided in the CreateDatasetGroup request, this operation includes the following properties:
        DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_dataset_group(x_amz_target, request_options=request_options)
        )

    async def list_dataset_groups(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this
        operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
        complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_dataset_groups(x_amz_target, request_options=request_options))

    async def update_dataset_group(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be
        ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get
        the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.update_dataset_group(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatasetGroupsWithRawResponse:
        return self._with_raw_response


class DatasetGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_dataset_group(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDatasetGroupErrorBody]:
        """Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset
        group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a
        dataset group and adding datasets, you use the dataset group when you create a predictor. For more information,
        see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status
        of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status,
        use the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDatasetGroup"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_dataset_group_error_mapper,
            request_options=request_options,
        )

    def delete_dataset_group(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDatasetGroupErrorBody]:
        """Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups
        that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup
        operation. This operation deletes only the dataset group, not the datasets in the group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDatasetGroup"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_dataset_group_error_mapper,
            request_options=request_options,
        )

    def describe_dataset_group(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDatasetGroupErrorBody]:
        """Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the
        parameters provided in the CreateDatasetGroup request, this operation includes the following properties:
        DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDatasetGroup"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_dataset_group_error_mapper,
            request_options=request_options,
        )

    def list_dataset_groups(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetGroupsErrorBody]:
        """Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this
        operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
        complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetGroups"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_dataset_groups_error_mapper,
            request_options=request_options,
        )

    def update_dataset_group(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDatasetGroupErrorBody]:
        """Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be
        ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get
        the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDatasetGroup"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_dataset_group_error_mapper,
            request_options=request_options,
        )


class AsyncDatasetGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_dataset_group(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDatasetGroupErrorBody]:
        """Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset
        group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a
        dataset group and adding datasets, you use the dataset group when you create a predictor. For more information,
        see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status
        of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status,
        use the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDatasetGroup"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_dataset_group_error_mapper,
            request_options=request_options,
        )

    async def delete_dataset_group(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDatasetGroupErrorBody]:
        """Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups
        that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup
        operation. This operation deletes only the dataset group, not the datasets in the group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDatasetGroup"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_dataset_group_error_mapper,
            request_options=request_options,
        )

    async def describe_dataset_group(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDatasetGroupErrorBody]:
        """Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the
        parameters provided in the CreateDatasetGroup request, this operation includes the following properties:
        DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDatasetGroup"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_dataset_group_error_mapper,
            request_options=request_options,
        )

    async def list_dataset_groups(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListDatasetGroupsErrorBody]:
        """Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this
        operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
        complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDatasetGroups"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_dataset_groups_error_mapper,
            request_options=request_options,
        )

    async def update_dataset_group(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDatasetGroupErrorBody]:
        """Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be
        ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get
        the status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDatasetGroup"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_dataset_group_error_mapper,
            request_options=request_options,
        )
