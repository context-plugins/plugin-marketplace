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
from ..errors.create_what_if_forecast_export_error import (
    CreateWhatIfForecastExportErrorBody,
    create_what_if_forecast_export_error_mapper,
)
from ..errors.delete_what_if_forecast_export_error import (
    DeleteWhatIfForecastExportErrorBody,
    delete_what_if_forecast_export_error_mapper,
)
from ..errors.describe_what_if_forecast_export_error import (
    DescribeWhatIfForecastExportErrorBody,
    describe_what_if_forecast_export_error_mapper,
)
from ..errors.list_what_if_forecast_exports_error import (
    ListWhatIfForecastExportsErrorBody,
    list_what_if_forecast_exports_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_forecast_service_what_if_forecast_export_api import (
    XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_what_if_forecast_export_api import (
    XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_what_if_forecast_export_api import (
    XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_what_if_forecast_export_api import (
    XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr,
)
from ..server.server import Server


class WhatIfForecastExport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WhatIfForecastExportWithRawResponse(client, server, auth)

    def create_what_if_forecast_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service
        (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__ The component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast
        export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use
        the DescribeWhatIfForecastExport operation.

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
            self._with_raw_response.create_what_if_forecast_export(x_amz_target, request_options=request_options)
        )

    def delete_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only
        what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the
        DescribeWhatIfForecastExport operation.

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
            self._with_raw_response.delete_what_if_forecast_export(x_amz_target, request_options=request_options)
        )

    def describe_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to
        listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following
        properties: CreationTime LastModificationTime Message - If an error occurred, information about the error.
        Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_what_if_forecast_export(x_amz_target, request_options=request_options)
        )

    def list_what_if_forecast_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each
        what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the
        DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_what_if_forecast_exports(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> WhatIfForecastExportWithRawResponse:
        return self._with_raw_response


class AsyncWhatIfForecastExport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWhatIfForecastExportWithRawResponse(client, server, auth)

    async def create_what_if_forecast_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service
        (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__ The component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast
        export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use
        the DescribeWhatIfForecastExport operation.

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
            await self._with_raw_response.create_what_if_forecast_export(x_amz_target, request_options=request_options)
        )

    async def delete_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only
        what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the
        DescribeWhatIfForecastExport operation.

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
            await self._with_raw_response.delete_what_if_forecast_export(x_amz_target, request_options=request_options)
        )

    async def describe_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to
        listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following
        properties: CreationTime LastModificationTime Message - If an error occurred, information about the error.
        Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_what_if_forecast_export(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_what_if_forecast_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each
        what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the
        DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_what_if_forecast_exports(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWhatIfForecastExportWithRawResponse:
        return self._with_raw_response


class WhatIfForecastExportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_what_if_forecast_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateWhatIfForecastExportErrorBody]:
        """Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service
        (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__ The component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast
        export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use
        the DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateWhatIfForecastExport"),
            headers=[
                param[XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_what_if_forecast_export_error_mapper,
            request_options=request_options,
        )

    def delete_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWhatIfForecastExportErrorBody]:
        """Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only
        what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the
        DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteWhatIfForecastExport"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_what_if_forecast_export_error_mapper,
            request_options=request_options,
        )

    def describe_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeWhatIfForecastExportErrorBody]:
        """Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to
        listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following
        properties: CreationTime LastModificationTime Message - If an error occurred, information about the error.
        Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWhatIfForecastExport"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_what_if_forecast_export_error_mapper,
            request_options=request_options,
        )

    def list_what_if_forecast_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListWhatIfForecastExportsErrorBody]:
        """Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each
        what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the
        DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWhatIfForecastExports"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_what_if_forecast_exports_error_mapper,
            request_options=request_options,
        )


class AsyncWhatIfForecastExportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_what_if_forecast_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateWhatIfForecastExportErrorBody]:
        """Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service
        (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__ The component is in Java
        SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and
        Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
        information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
        your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast
        export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use
        the DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateWhatIfForecastExport"),
            headers=[
                param[XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_what_if_forecast_export_error_mapper,
            request_options=request_options,
        )

    async def delete_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWhatIfForecastExportErrorBody]:
        """Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only
        what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the
        DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteWhatIfForecastExport"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_what_if_forecast_export_error_mapper,
            request_options=request_options,
        )

    async def describe_what_if_forecast_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeWhatIfForecastExportErrorBody]:
        """Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to
        listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following
        properties: CreationTime LastModificationTime Message - If an error occurred, information about the error.
        Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWhatIfForecastExport"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_what_if_forecast_export_error_mapper,
            request_options=request_options,
        )

    async def list_what_if_forecast_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListWhatIfForecastExportsErrorBody]:
        """Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each
        what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name
        (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the
        DescribeWhatIfForecastExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWhatIfForecastExports"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_what_if_forecast_exports_error_mapper,
            request_options=request_options,
        )
