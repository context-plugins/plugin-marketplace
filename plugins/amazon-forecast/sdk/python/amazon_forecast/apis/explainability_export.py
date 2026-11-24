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
from ..errors.create_explainability_export_error import (
    CreateExplainabilityExportErrorBody,
    create_explainability_export_error_mapper,
)
from ..errors.delete_explainability_export_error import (
    DeleteExplainabilityExportErrorBody,
    delete_explainability_export_error_mapper,
)
from ..errors.describe_explainability_export_error import (
    DescribeExplainabilityExportErrorBody,
    describe_explainability_export_error_mapper,
)
from ..errors.list_explainability_exports_error import (
    ListExplainabilityExportsErrorBody,
    list_explainability_exports_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_forecast_service_explainability_export_api import (
    XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_explainability_export_api import (
    XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_explainability_export_api import (
    XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_explainability_export_api import (
    XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr,
)
from ..server.server import Server


class ExplainabilityExport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExplainabilityExportWithRawResponse(client, server, auth)

    def create_explainability_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported
        to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes
        an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access
        the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be
        ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the
        DescribeExplainabilityExport operation.

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
            self._with_raw_response.create_explainability_export(x_amz_target, request_options=request_options)
        )

    def delete_explainability_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an Explainability export.

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
            self._with_raw_response.delete_explainability_export(x_amz_target, request_options=request_options)
        )

    def describe_explainability_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes an Explainability export created using the CreateExplainabilityExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_explainability_export(x_amz_target, request_options=request_options)
        )

    def list_explainability_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This
        operation returns a summary for each Explainability export. You can filter the list using an array of Filter
        objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_explainability_exports(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ExplainabilityExportWithRawResponse:
        return self._with_raw_response


class AsyncExplainabilityExport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExplainabilityExportWithRawResponse(client, server, auth)

    async def create_explainability_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported
        to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes
        an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access
        the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be
        ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the
        DescribeExplainabilityExport operation.

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
            await self._with_raw_response.create_explainability_export(x_amz_target, request_options=request_options)
        )

    async def delete_explainability_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an Explainability export.

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
            await self._with_raw_response.delete_explainability_export(x_amz_target, request_options=request_options)
        )

    async def describe_explainability_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes an Explainability export created using the CreateExplainabilityExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_explainability_export(x_amz_target, request_options=request_options)
        )

    async def list_explainability_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This
        operation returns a summary for each Explainability export. You can filter the list using an array of Filter
        objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_explainability_exports(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExplainabilityExportWithRawResponse:
        return self._with_raw_response


class ExplainabilityExportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_explainability_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateExplainabilityExportErrorBody]:
        """Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported
        to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes
        an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access
        the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be
        ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the
        DescribeExplainabilityExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateExplainabilityExport"),
            headers=[
                param[XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_explainability_export_error_mapper,
            request_options=request_options,
        )

    def delete_explainability_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteExplainabilityExportErrorBody]:
        """Deletes an Explainability export.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteExplainabilityExport"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_explainability_export_error_mapper,
            request_options=request_options,
        )

    def describe_explainability_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeExplainabilityExportErrorBody]:
        """Describes an Explainability export created using the CreateExplainabilityExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeExplainabilityExport"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_explainability_export_error_mapper,
            request_options=request_options,
        )

    def list_explainability_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListExplainabilityExportsErrorBody]:
        """Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This
        operation returns a summary for each Explainability export. You can filter the list using an array of Filter
        objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListExplainabilityExports"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_explainability_exports_error_mapper,
            request_options=request_options,
        )


class AsyncExplainabilityExportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_explainability_export(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateExplainabilityExportErrorBody]:
        """Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported
        to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes
        an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access
        the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be
        ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the
        DescribeExplainabilityExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateExplainabilityExport"),
            headers=[
                param[XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_explainability_export_error_mapper,
            request_options=request_options,
        )

    async def delete_explainability_export(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteExplainabilityExportErrorBody]:
        """Deletes an Explainability export.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteExplainabilityExport"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_explainability_export_error_mapper,
            request_options=request_options,
        )

    async def describe_explainability_export(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeExplainabilityExportErrorBody]:
        """Describes an Explainability export created using the CreateExplainabilityExport operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeExplainabilityExport"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_explainability_export_error_mapper,
            request_options=request_options,
        )

    async def list_explainability_exports(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListExplainabilityExportsErrorBody]:
        """Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This
        operation returns a summary for each Explainability export. You can filter the list using an array of Filter
        objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListExplainabilityExports"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_explainability_exports_error_mapper,
            request_options=request_options,
        )
