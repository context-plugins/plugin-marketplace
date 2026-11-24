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
from ..errors.create_predictor_error import CreatePredictorErrorBody, create_predictor_error_mapper
from ..errors.delete_predictor_error import DeletePredictorErrorBody, delete_predictor_error_mapper
from ..errors.describe_predictor_error import DescribePredictorErrorBody, describe_predictor_error_mapper
from ..errors.list_predictors_error import ListPredictorsErrorBody, list_predictors_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_predictors_api import (
    XAmzTarget1AmazonForecastServicePredictorsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_predictors_api import (
    XAmzTarget2AmazonForecastServicePredictorsApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_predictors_api import (
    XAmzTarget3AmazonForecastServicePredictorsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_forecast_service_predictors_api import (
    XAmzTargetAmazonForecastServicePredictorsApiOrStr,
)
from ..server.server import Server


class Predictors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PredictorsWithRawResponse(client, server, auth)

    def create_predictor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation creates a legacy predictor that does not include all the predictor functionalities provided by
        Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor.
        Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or
        let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override
        algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest
        version of the datasets in the specified dataset group. You can then generate a forecast using the
        CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a
        featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve
        model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor
        verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency.
        TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_predictor(x_amz_target, request_options=request_options))

    def delete_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only
        predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_predictor(x_amz_target, request_options=request_options))

    def describe_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a
        legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation.
        In addition to listing the properties provided in the CreatePredictor request, this operation lists the
        following properties: DatasetImportJobArns - The dataset import jobs used to import training data.
        AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime
        LastModificationTime Status Message - If an error occurred, information about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_predictor(x_amz_target, request_options=request_options))

    def list_predictors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each
        predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor
        operations. You can filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_predictors(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> PredictorsWithRawResponse:
        return self._with_raw_response


class AsyncPredictors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPredictorsWithRawResponse(client, server, auth)

    async def create_predictor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation creates a legacy predictor that does not include all the predictor functionalities provided by
        Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor.
        Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or
        let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override
        algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest
        version of the datasets in the specified dataset group. You can then generate a forecast using the
        CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a
        featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve
        model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor
        verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency.
        TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_predictor(x_amz_target, request_options=request_options))

    async def delete_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only
        predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_predictor(x_amz_target, request_options=request_options))

    async def describe_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a
        legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation.
        In addition to listing the properties provided in the CreatePredictor request, this operation lists the
        following properties: DatasetImportJobArns - The dataset import jobs used to import training data.
        AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime
        LastModificationTime Status Message - If an error occurred, information about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_predictor(x_amz_target, request_options=request_options))

    async def list_predictors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each
        predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor
        operations. You can filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_predictors(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPredictorsWithRawResponse:
        return self._with_raw_response


class PredictorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_predictor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreatePredictorErrorBody]:
        """This operation creates a legacy predictor that does not include all the predictor functionalities provided by
        Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor.
        Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or
        let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override
        algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest
        version of the datasets in the specified dataset group. You can then generate a forecast using the
        CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a
        featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve
        model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor
        verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency.
        TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreatePredictor"),
            headers=[
                param[XAmzTargetAmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_predictor_error_mapper,
            request_options=request_options,
        )

    def delete_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeletePredictorErrorBody]:
        """Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only
        predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeletePredictor"),
            headers=[
                param[XAmzTarget1AmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_predictor_error_mapper,
            request_options=request_options,
        )

    def describe_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribePredictorErrorBody]:
        """This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a
        legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation.
        In addition to listing the properties provided in the CreatePredictor request, this operation lists the
        following properties: DatasetImportJobArns - The dataset import jobs used to import training data.
        AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime
        LastModificationTime Status Message - If an error occurred, information about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribePredictor"),
            headers=[
                param[XAmzTarget2AmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_predictor_error_mapper,
            request_options=request_options,
        )

    def list_predictors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListPredictorsErrorBody]:
        """Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each
        predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor
        operations. You can filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListPredictors"),
            headers=[
                param[XAmzTarget3AmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_predictors_error_mapper,
            request_options=request_options,
        )


class AsyncPredictorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_predictor(
        self,
        x_amz_target: XAmzTargetAmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreatePredictorErrorBody]:
        """This operation creates a legacy predictor that does not include all the predictor functionalities provided by
        Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor.
        Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or
        let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override
        algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest
        version of the datasets in the specified dataset group. You can then generate a forecast using the
        CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a
        featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve
        model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor
        verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency.
        TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreatePredictor"),
            headers=[
                param[XAmzTargetAmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_predictor_error_mapper,
            request_options=request_options,
        )

    async def delete_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeletePredictorErrorBody]:
        """Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only
        predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeletePredictor"),
            headers=[
                param[XAmzTarget1AmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_predictor_error_mapper,
            request_options=request_options,
        )

    async def describe_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribePredictorErrorBody]:
        """This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a
        legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation.
        In addition to listing the properties provided in the CreatePredictor request, this operation lists the
        following properties: DatasetImportJobArns - The dataset import jobs used to import training data.
        AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime
        LastModificationTime Status Message - If an error occurred, information about the error.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribePredictor"),
            headers=[
                param[XAmzTarget2AmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_predictor_error_mapper,
            request_options=request_options,
        )

    async def list_predictors(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServicePredictorsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListPredictorsErrorBody]:
        """Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each
        predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor
        operations. You can filter the list using an array of Filter objects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListPredictors"),
            headers=[
                param[XAmzTarget3AmazonForecastServicePredictorsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_predictors_error_mapper,
            request_options=request_options,
        )
