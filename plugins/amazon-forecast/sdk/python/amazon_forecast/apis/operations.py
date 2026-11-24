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
from ..errors.create_auto_predictor_error import CreateAutoPredictorErrorBody, create_auto_predictor_error_mapper
from ..errors.delete_resource_tree_error import DeleteResourceTreeErrorBody, delete_resource_tree_error_mapper
from ..errors.describe_auto_predictor_error import DescribeAutoPredictorErrorBody, describe_auto_predictor_error_mapper
from ..errors.get_accuracy_metrics_error import GetAccuracyMetricsErrorBody, get_accuracy_metrics_error_mapper
from ..errors.list_monitor_evaluations_error import (
    ListMonitorEvaluationsErrorBody,
    list_monitor_evaluations_error_mapper,
)
from ..errors.list_what_if_analyses_error import ListWhatIfAnalysesErrorBody, list_what_if_analyses_error_mapper
from ..errors.resume_resource_error import ResumeResourceErrorBody, resume_resource_error_mapper
from ..models.enums.x_amz_target1_amazon_forecast_service_operations_api import (
    XAmzTarget1AmazonForecastServiceOperationsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_forecast_service_operations_api import (
    XAmzTarget2AmazonForecastServiceOperationsApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_forecast_service_operations_api import (
    XAmzTarget3AmazonForecastServiceOperationsApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_forecast_service_operations_api import (
    XAmzTarget4AmazonForecastServiceOperationsApiOrStr,
)
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target_amazon_forecast_service_operations_api import (
    XAmzTargetAmazonForecastServiceOperationsApiOrStr,
)
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def create_auto_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves
        applying the optimal combination of algorithms to each time series in your datasets. You can use
        CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The
        following parameters are required when creating a new predictor: PredictorName - A unique name for the
        predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The
        granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the
        model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not
        specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are
        required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor.
        ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a
        predictor, only specify values for the ReferencePredictorArn and PredictorName.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException
                ResourceAlreadyExistsException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_auto_predictor(x_amz_target, request_options=request_options))

    def delete_resource_tree(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an entire resource tree. This operation will delete the parent resource and its child resources.
        Child resources are resources that were created from another resource. For example, when a forecast is generated
        from a predictor, the forecast is the child resource and the predictor is the parent resource. Amazon Forecast
        resources possess the following parent-child resource hierarchies: Dataset: dataset import jobs Dataset Group:
        predictors, predictor backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export
        jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will only delete Amazon
        Forecast resources, and will not delete datasets or exported files stored in Amazon S3.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_resource_tree(x_amz_target, request_options=request_options))

    def describe_auto_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a predictor created using the CreateAutoPredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_auto_predictor(x_amz_target, request_options=request_options))

    def get_accuracy_metrics(
        self,
        x_amz_target: XAmzTarget4AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use
        metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast.
        For more information, see Predictor Metrics. This operation generates metrics for each backtest window that was
        evaluated. The number of backtest windows (NumberOfBacktestWindows) is specified using the EvaluationParameters
        object, which is optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified,
        the number defaults to one. The parameters of the filling method determine which items contribute to the
        metrics. If you want all items to contribute, specify zero. If you want only those items that have complete data
        in the range being evaluated to contribute, specify nan. For more information, see FeaturizationMethod. Before
        you can get accuracy metrics, the Status of the predictor must be ACTIVE, signifying that training has
        completed. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_accuracy_metrics(x_amz_target, request_options=request_options))

    def list_monitor_evaluations(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource
        during different windows of time. For information about monitoring see predictor-monitoring. For more
        information about retrieving monitoring results see Viewing Monitoring Results.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.list_monitor_evaluations(x_amz_target, request_options=request_options))

    def list_what_if_analyses(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if
        analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_what_if_analyses(x_amz_target, request_options=request_options))

    def resume_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Resumes a stopped monitor resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException ResourceNotFoundException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.resume_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def create_auto_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves
        applying the optimal combination of algorithms to each time series in your datasets. You can use
        CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The
        following parameters are required when creating a new predictor: PredictorName - A unique name for the
        predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The
        granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the
        model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not
        specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are
        required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor.
        ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a
        predictor, only specify values for the ReferencePredictorArn and PredictorName.

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
            await self._with_raw_response.create_auto_predictor(x_amz_target, request_options=request_options)
        )

    async def delete_resource_tree(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an entire resource tree. This operation will delete the parent resource and its child resources.
        Child resources are resources that were created from another resource. For example, when a forecast is generated
        from a predictor, the forecast is the child resource and the predictor is the parent resource. Amazon Forecast
        resources possess the following parent-child resource hierarchies: Dataset: dataset import jobs Dataset Group:
        predictors, predictor backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export
        jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will only delete Amazon
        Forecast resources, and will not delete datasets or exported files stored in Amazon S3.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_resource_tree(x_amz_target, request_options=request_options))

    async def describe_auto_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes a predictor created using the CreateAutoPredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_auto_predictor(x_amz_target, request_options=request_options)
        )

    async def get_accuracy_metrics(
        self,
        x_amz_target: XAmzTarget4AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use
        metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast.
        For more information, see Predictor Metrics. This operation generates metrics for each backtest window that was
        evaluated. The number of backtest windows (NumberOfBacktestWindows) is specified using the EvaluationParameters
        object, which is optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified,
        the number defaults to one. The parameters of the filling method determine which items contribute to the
        metrics. If you want all items to contribute, specify zero. If you want only those items that have complete data
        in the range being evaluated to contribute, specify nan. For more information, see FeaturizationMethod. Before
        you can get accuracy metrics, the Status of the predictor must be ACTIVE, signifying that training has
        completed. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ResourceInUseException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.get_accuracy_metrics(x_amz_target, request_options=request_options))

    async def list_monitor_evaluations(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource
        during different windows of time. For information about monitoring see predictor-monitoring. For more
        information about retrieving monitoring results see Viewing Monitoring Results.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; InvalidNextTokenException ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_monitor_evaluations(x_amz_target, request_options=request_options)
        )

    async def list_what_if_analyses(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if
        analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis
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
            await self._with_raw_response.list_what_if_analyses(x_amz_target, request_options=request_options)
        )

    async def resume_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Resumes a stopped monitor resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException LimitExceededException; ResourceInUseException ResourceNotFoundException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.resume_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_auto_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAutoPredictorErrorBody]:
        """Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves
        applying the optimal combination of algorithms to each time series in your datasets. You can use
        CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The
        following parameters are required when creating a new predictor: PredictorName - A unique name for the
        predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The
        granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the
        model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not
        specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are
        required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor.
        ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a
        predictor, only specify values for the ReferencePredictorArn and PredictorName.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAutoPredictor"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_auto_predictor_error_mapper,
            request_options=request_options,
        )

    def delete_resource_tree(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteResourceTreeErrorBody]:
        """Deletes an entire resource tree. This operation will delete the parent resource and its child resources.
        Child resources are resources that were created from another resource. For example, when a forecast is generated
        from a predictor, the forecast is the child resource and the predictor is the parent resource. Amazon Forecast
        resources possess the following parent-child resource hierarchies: Dataset: dataset import jobs Dataset Group:
        predictors, predictor backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export
        jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will only delete Amazon
        Forecast resources, and will not delete datasets or exported files stored in Amazon S3.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResourceTree"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_resource_tree_error_mapper,
            request_options=request_options,
        )

    def describe_auto_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAutoPredictorErrorBody]:
        """Describes a predictor created using the CreateAutoPredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAutoPredictor"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_auto_predictor_error_mapper,
            request_options=request_options,
        )

    def get_accuracy_metrics(
        self,
        x_amz_target: XAmzTarget4AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetAccuracyMetricsErrorBody]:
        """Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use
        metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast.
        For more information, see Predictor Metrics. This operation generates metrics for each backtest window that was
        evaluated. The number of backtest windows (NumberOfBacktestWindows) is specified using the EvaluationParameters
        object, which is optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified,
        the number defaults to one. The parameters of the filling method determine which items contribute to the
        metrics. If you want all items to contribute, specify zero. If you want only those items that have complete data
        in the range being evaluated to contribute, specify nan. For more information, see FeaturizationMethod. Before
        you can get accuracy metrics, the Status of the predictor must be ACTIVE, signifying that training has
        completed. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetAccuracyMetrics"),
            headers=[
                param[XAmzTarget4AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_accuracy_metrics_error_mapper,
            request_options=request_options,
        )

    def list_monitor_evaluations(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListMonitorEvaluationsErrorBody]:
        """Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource
        during different windows of time. For information about monitoring see predictor-monitoring. For more
        information about retrieving monitoring results see Viewing Monitoring Results.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMonitorEvaluations"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_monitor_evaluations_error_mapper,
            request_options=request_options,
        )

    def list_what_if_analyses(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListWhatIfAnalysesErrorBody]:
        """Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if
        analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWhatIfAnalyses"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_what_if_analyses_error_mapper,
            request_options=request_options,
        )

    def resume_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ResumeResourceErrorBody]:
        """Resumes a stopped monitor resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ResumeResource"),
            headers=[
                param[XAmzTargetAmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=resume_resource_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_auto_predictor(
        self,
        x_amz_target: XAmzTarget1AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateAutoPredictorErrorBody]:
        """Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves
        applying the optimal combination of algorithms to each time series in your datasets. You can use
        CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The
        following parameters are required when creating a new predictor: PredictorName - A unique name for the
        predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The
        granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the
        model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not
        specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are
        required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor.
        ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a
        predictor, only specify values for the ReferencePredictorArn and PredictorName.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateAutoPredictor"),
            headers=[
                param[XAmzTarget1AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_auto_predictor_error_mapper,
            request_options=request_options,
        )

    async def delete_resource_tree(
        self,
        x_amz_target: XAmzTarget3AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteResourceTreeErrorBody]:
        """Deletes an entire resource tree. This operation will delete the parent resource and its child resources.
        Child resources are resources that were created from another resource. For example, when a forecast is generated
        from a predictor, the forecast is the child resource and the predictor is the parent resource. Amazon Forecast
        resources possess the following parent-child resource hierarchies: Dataset: dataset import jobs Dataset Group:
        predictors, predictor backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export
        jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will only delete Amazon
        Forecast resources, and will not delete datasets or exported files stored in Amazon S3.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteResourceTree"),
            headers=[
                param[XAmzTarget3AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_resource_tree_error_mapper,
            request_options=request_options,
        )

    async def describe_auto_predictor(
        self,
        x_amz_target: XAmzTarget2AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeAutoPredictorErrorBody]:
        """Describes a predictor created using the CreateAutoPredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeAutoPredictor"),
            headers=[
                param[XAmzTarget2AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_auto_predictor_error_mapper,
            request_options=request_options,
        )

    async def get_accuracy_metrics(
        self,
        x_amz_target: XAmzTarget4AmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetAccuracyMetricsErrorBody]:
        """Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use
        metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast.
        For more information, see Predictor Metrics. This operation generates metrics for each backtest window that was
        evaluated. The number of backtest windows (NumberOfBacktestWindows) is specified using the EvaluationParameters
        object, which is optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified,
        the number defaults to one. The parameters of the filling method determine which items contribute to the
        metrics. If you want all items to contribute, specify zero. If you want only those items that have complete data
        in the range being evaluated to contribute, specify nan. For more information, see FeaturizationMethod. Before
        you can get accuracy metrics, the Status of the predictor must be ACTIVE, signifying that training has
        completed. To get the status, use the DescribePredictor operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetAccuracyMetrics"),
            headers=[
                param[XAmzTarget4AmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_accuracy_metrics_error_mapper,
            request_options=request_options,
        )

    async def list_monitor_evaluations(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListMonitorEvaluationsErrorBody]:
        """Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource
        during different windows of time. For information about monitoring see predictor-monitoring. For more
        information about retrieving monitoring results see Viewing Monitoring Results.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListMonitorEvaluations"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_monitor_evaluations_error_mapper,
            request_options=request_options,
        )

    async def list_what_if_analyses(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListWhatIfAnalysesErrorBody]:
        """Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if
        analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can
        retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis
        operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListWhatIfAnalyses"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_what_if_analyses_error_mapper,
            request_options=request_options,
        )

    async def resume_resource(
        self,
        x_amz_target: XAmzTargetAmazonForecastServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ResumeResourceErrorBody]:
        """Resumes a stopped monitor resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ResumeResource"),
            headers=[
                param[XAmzTargetAmazonForecastServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=resume_resource_error_mapper,
            request_options=request_options,
        )
