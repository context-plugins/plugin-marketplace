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
from ..errors.create_explainability_error import CreateExplainabilityErrorBody, create_explainability_error_mapper
from ..errors.delete_explainability_error import DeleteExplainabilityErrorBody, delete_explainability_error_mapper
from ..errors.describe_explainability_error import DescribeExplainabilityErrorBody, describe_explainability_error_mapper
from ..errors.list_explainabilities_error import ListExplainabilitiesErrorBody, list_explainabilities_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_explainability_api import (
    XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_explainability_api import (
    XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_explainability_api import (
    XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_explainability_api import (
    XAmzTargetAmazonForecastServiceExplainabilityApiOrStr,
)
from ..server.server import Server


class Explainability:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExplainabilityWithRawResponse(client, server, auth)

    def create_explainability(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Explainability is only available for Forecasts and Predictors generated from an AutoPredictor
        (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how
        the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify
        the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable
        Forecast Explainability, your predictor must include at least one of the following: related time series, item
        metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a
        Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your
        datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a
        Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per
        predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an
        Explainability resource. The following parameters are required when providing a Predictor ARN:
        ExplainabilityName - A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_explainability(x_amz_target, request_options=request_options))

    def delete_explainability(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or
        CREATE_FAILED. To get the status, use the DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_explainability(x_amz_target, request_options=request_options))

    def describe_explainability(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes an Explainability resource created using the CreateExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_explainability(x_amz_target, request_options=request_options))

    def list_explainabilities(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of Explainability resources created using the CreateExplainability operation. This operation
        returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve
        the complete set of properties for a particular Explainability resource, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_explainabilities(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ExplainabilityWithRawResponse:
        return self._with_raw_response


class AsyncExplainability:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExplainabilityWithRawResponse(client, server, auth)

    async def create_explainability(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Explainability is only available for Forecasts and Predictors generated from an AutoPredictor
        (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how
        the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify
        the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable
        Forecast Explainability, your predictor must include at least one of the following: related time series, item
        metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a
        Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your
        datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a
        Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per
        predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an
        Explainability resource. The following parameters are required when providing a Predictor ARN:
        ExplainabilityName - A

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
            await self._with_raw_response.create_explainability(x_amz_target, request_options=request_options)
        )

    async def delete_explainability(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or
        CREATE_FAILED. To get the status, use the DescribeExplainability operation.

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
            await self._with_raw_response.delete_explainability(x_amz_target, request_options=request_options)
        )

    async def describe_explainability(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes an Explainability resource created using the CreateExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_explainability(x_amz_target, request_options=request_options)
        )

    async def list_explainabilities(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of Explainability resources created using the CreateExplainability operation. This operation
        returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve
        the complete set of properties for a particular Explainability resource, use the ARN with the
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
            await self._with_raw_response.list_explainabilities(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExplainabilityWithRawResponse:
        return self._with_raw_response


class ExplainabilityWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_explainability(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateExplainabilityErrorBody]:
        """Explainability is only available for Forecasts and Predictors generated from an AutoPredictor
        (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how
        the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify
        the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable
        Forecast Explainability, your predictor must include at least one of the following: related time series, item
        metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a
        Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your
        datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a
        Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per
        predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an
        Explainability resource. The following parameters are required when providing a Predictor ARN:
        ExplainabilityName - A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateExplainability"),
            headers=[
                param[XAmzTargetAmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_explainability_error_mapper,
            request_options=request_options,
        )

    def delete_explainability(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteExplainabilityErrorBody]:
        """Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or
        CREATE_FAILED. To get the status, use the DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteExplainability"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_explainability_error_mapper,
            request_options=request_options,
        )

    def describe_explainability(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeExplainabilityErrorBody]:
        """Describes an Explainability resource created using the CreateExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeExplainability"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_explainability_error_mapper,
            request_options=request_options,
        )

    def list_explainabilities(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListExplainabilitiesErrorBody]:
        """Returns a list of Explainability resources created using the CreateExplainability operation. This operation
        returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve
        the complete set of properties for a particular Explainability resource, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListExplainabilities"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_explainabilities_error_mapper,
            request_options=request_options,
        )


class AsyncExplainabilityWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_explainability(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateExplainabilityErrorBody]:
        """Explainability is only available for Forecasts and Predictors generated from an AutoPredictor
        (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how
        the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify
        the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable
        Forecast Explainability, your predictor must include at least one of the following: related time series, item
        metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a
        Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your
        datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a
        Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per
        predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an
        Explainability resource. The following parameters are required when providing a Predictor ARN:
        ExplainabilityName - A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateExplainability"),
            headers=[
                param[XAmzTargetAmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_explainability_error_mapper,
            request_options=request_options,
        )

    async def delete_explainability(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteExplainabilityErrorBody]:
        """Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or
        CREATE_FAILED. To get the status, use the DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteExplainability"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_explainability_error_mapper,
            request_options=request_options,
        )

    async def describe_explainability(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeExplainabilityErrorBody]:
        """Describes an Explainability resource created using the CreateExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeExplainability"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_explainability_error_mapper,
            request_options=request_options,
        )

    async def list_explainabilities(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListExplainabilitiesErrorBody]:
        """Returns a list of Explainability resources created using the CreateExplainability operation. This operation
        returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve
        the complete set of properties for a particular Explainability resource, use the ARN with the
        DescribeExplainability operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListExplainabilities"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_explainabilities_error_mapper,
            request_options=request_options,
        )
