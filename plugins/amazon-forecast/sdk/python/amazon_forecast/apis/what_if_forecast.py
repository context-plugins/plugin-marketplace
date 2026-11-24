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
from ..errors.create_what_if_forecast_error import CreateWhatIfForecastErrorBody, create_what_if_forecast_error_mapper
from ..errors.delete_what_if_forecast_error import DeleteWhatIfForecastErrorBody, delete_what_if_forecast_error_mapper
from ..errors.describe_what_if_forecast_error import (
    DescribeWhatIfForecastErrorBody,
    describe_what_if_forecast_error_mapper,
)
from ..errors.list_what_if_forecasts_error import ListWhatIfForecastsErrorBody, list_what_if_forecasts_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_what_if_forecast_api import (
    XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_what_if_forecast_api import (
    XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_what_if_forecast_api import (
    XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_what_if_forecast_api import (
    XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr,
)
from ..server.server import Server


class WhatIfForecast:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WhatIfForecastWithRawResponse(client, server, auth)

    def create_what_if_forecast(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
        what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_what_if_forecast(x_amz_target, request_options=request_options))

    def delete_what_if_forecast(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if
        forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast
        operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted,
        you can no longer query the what-if analysis.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_what_if_forecast(x_amz_target, request_options=request_options))

    def describe_what_if_forecast(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the
        properties provided in the CreateWhatIfForecast request, this operation lists the following properties:
        CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_what_if_forecast(x_amz_target, request_options=request_options))

    def list_what_if_forecasts(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if
        forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_what_if_forecasts(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> WhatIfForecastWithRawResponse:
        return self._with_raw_response


class AsyncWhatIfForecast:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWhatIfForecastWithRawResponse(client, server, auth)

    async def create_what_if_forecast(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
        what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

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
            await self._with_raw_response.create_what_if_forecast(x_amz_target, request_options=request_options)
        )

    async def delete_what_if_forecast(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if
        forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast
        operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted,
        you can no longer query the what-if analysis.

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
            await self._with_raw_response.delete_what_if_forecast(x_amz_target, request_options=request_options)
        )

    async def describe_what_if_forecast(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the
        properties provided in the CreateWhatIfForecast request, this operation lists the following properties:
        CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_what_if_forecast(x_amz_target, request_options=request_options)
        )

    async def list_what_if_forecasts(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if
        forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_what_if_forecasts(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWhatIfForecastWithRawResponse:
        return self._with_raw_response


class WhatIfForecastWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_what_if_forecast(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateWhatIfForecastErrorBody]:
        """A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
        what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateWhatIfForecast"),
            headers=[
                param[XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_what_if_forecast_error_mapper,
            request_options=request_options,
        )

    def delete_what_if_forecast(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWhatIfForecastErrorBody]:
        """Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if
        forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast
        operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted,
        you can no longer query the what-if analysis.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteWhatIfForecast"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_what_if_forecast_error_mapper,
            request_options=request_options,
        )

    def describe_what_if_forecast(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeWhatIfForecastErrorBody]:
        """Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the
        properties provided in the CreateWhatIfForecast request, this operation lists the following properties:
        CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWhatIfForecast"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_what_if_forecast_error_mapper,
            request_options=request_options,
        )

    def list_what_if_forecasts(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListWhatIfForecastsErrorBody]:
        """Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if
        forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWhatIfForecasts"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_what_if_forecasts_error_mapper,
            request_options=request_options,
        )


class AsyncWhatIfForecastWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_what_if_forecast(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateWhatIfForecastErrorBody]:
        """A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
        what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateWhatIfForecast"),
            headers=[
                param[XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_what_if_forecast_error_mapper,
            request_options=request_options,
        )

    async def delete_what_if_forecast(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWhatIfForecastErrorBody]:
        """Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if
        forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast
        operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted,
        you can no longer query the what-if analysis.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteWhatIfForecast"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_what_if_forecast_error_mapper,
            request_options=request_options,
        )

    async def describe_what_if_forecast(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeWhatIfForecastErrorBody]:
        """Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the
        properties provided in the CreateWhatIfForecast request, this operation lists the following properties:
        CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeWhatIfForecast"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_what_if_forecast_error_mapper,
            request_options=request_options,
        )

    async def list_what_if_forecasts(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListWhatIfForecastsErrorBody]:
        """Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if
        forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWhatIfForecasts"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_what_if_forecasts_error_mapper,
            request_options=request_options,
        )
