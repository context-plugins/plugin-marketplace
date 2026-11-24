from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_config import EncryptionConfig, EncryptionConfigDict
from .enums.auto_ml_override_strategy import AutoMlOverrideStrategyOrStr
from .enums.optimization_metric import OptimizationMetricOrStr
from .evaluation_parameters import EvaluationParameters, EvaluationParametersDict
from .featurization_config import FeaturizationConfig, FeaturizationConfigDict
from .hyper_parameter_tuning_job_config import HyperParameterTuningJobConfig, HyperParameterTuningJobConfigDict
from .input_data_config import InputDataConfig, InputDataConfigDict
from .predictor_execution_details import PredictorExecutionDetails, PredictorExecutionDetailsDict


class DescribePredictorResponse(SdkBaseModel):
    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The ARN of the predictor."""

    predictor_name: Optional[str] = Field(default=UNSET, alias="PredictorName")
    """The name of the predictor."""

    algorithm_arn: Optional[str] = Field(default=UNSET, alias="AlgorithmArn")
    """The Amazon Resource Name (ARN) of the algorithm used for model training."""

    auto_ml_algorithm_arns: Optional[list[str]] = Field(default=UNSET, alias="AutoMLAlgorithmArns")
    """When PerformAutoML is specified, the ARN of the chosen algorithm."""

    forecast_horizon: Optional[int] = Field(default=UNSET, alias="ForecastHorizon")
    """The number of time-steps of the forecast. The forecast horizon is also called the prediction length."""

    forecast_types: Optional[list[str]] = Field(default=UNSET, alias="ForecastTypes")
    """The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"]"""

    perform_auto_ml: Optional[bool] = Field(default=UNSET, alias="PerformAutoML")
    """Whether the predictor is set to perform AutoML."""

    auto_ml_override_strategy: Optional[AutoMlOverrideStrategyOrStr] = Field(
        default=UNSET, alias="AutoMLOverrideStrategy"
    )
    """The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services
    Support or your account manager to learn more about access privileges. The AutoML strategy used to train the
    predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is
    only valid for predictors trained using AutoML."""

    perform_hpo: Optional[bool] = Field(default=UNSET, alias="PerformHPO")
    """Whether the predictor is set to perform hyperparameter optimization (HPO)."""

    training_parameters: Optional[dict[str, str]] = Field(default=UNSET, alias="TrainingParameters")
    """The default training parameters or overrides selected during model training. When running AutoML or choosing HPO
    with CNN-QR or DeepAR+, the optimized values for the chosen hyperparameters are returned. For more information, see
    aws-forecast-choosing-recipes."""

    evaluation_parameters: Optional[EvaluationParameters] = Field(default=UNSET, alias="EvaluationParameters")
    hpo_config: Optional[HyperParameterTuningJobConfig] = Field(default=UNSET, alias="HPOConfig")
    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    featurization_config: Optional[FeaturizationConfig] = Field(default=UNSET, alias="FeaturizationConfig")
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")
    predictor_execution_details: Optional[PredictorExecutionDetails] = Field(
        default=UNSET, alias="PredictorExecutionDetails"
    )
    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The estimated time remaining in minutes for the predictor training job to complete."""

    is_auto_predictor: Optional[bool] = Field(default=UNSET, alias="IsAutoPredictor")
    """Whether the predictor was created with CreateAutoPredictor."""

    dataset_import_job_arns: Optional[list[str]] = Field(default=UNSET, alias="DatasetImportJobArns")
    """An array of the ARNs of the dataset import jobs used to import training data for the predictor."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED The Status of the predictor must
    be ACTIVE before you can use the predictor to create a forecast."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the model training task was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    optimization_metric: Optional[OptimizationMetricOrStr] = Field(default=UNSET, alias="OptimizationMetric")
    """The accuracy metric used to optimize the predictor."""


class DescribePredictorResponseDict(TypedDict):
    predictor_arn: NotRequired[str]
    predictor_name: NotRequired[str]
    algorithm_arn: NotRequired[str]
    auto_ml_algorithm_arns: NotRequired[list[str]]
    forecast_horizon: NotRequired[int]
    forecast_types: NotRequired[list[str]]
    perform_auto_ml: NotRequired[bool]
    auto_ml_override_strategy: NotRequired[AutoMlOverrideStrategyOrStr]
    perform_hpo: NotRequired[bool]
    training_parameters: NotRequired[dict[str, str]]
    evaluation_parameters: NotRequired[EvaluationParametersDict]
    hpo_config: NotRequired[HyperParameterTuningJobConfigDict]
    input_data_config: NotRequired[InputDataConfigDict]
    featurization_config: NotRequired[FeaturizationConfigDict]
    encryption_config: NotRequired[EncryptionConfigDict]
    predictor_execution_details: NotRequired[PredictorExecutionDetailsDict]
    estimated_time_remaining_in_minutes: NotRequired[int]
    is_auto_predictor: NotRequired[bool]
    dataset_import_job_arns: NotRequired[list[str]]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    optimization_metric: NotRequired[OptimizationMetricOrStr]
