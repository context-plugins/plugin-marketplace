from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_config import EncryptionConfig, EncryptionConfigDict
from .enums.auto_ml_override_strategy_amazon_forecast_service_predictors_api import (
    AutoMlOverrideStrategyAmazonForecastServicePredictorsApiOrStr,
)
from .enums.optimization_metric import OptimizationMetricOrStr
from .evaluation_parameters import EvaluationParameters, EvaluationParametersDict
from .featurization_config import FeaturizationConfig, FeaturizationConfigDict
from .hyper_parameter_tuning_job_config import HyperParameterTuningJobConfig, HyperParameterTuningJobConfigDict
from .input_data_config import InputDataConfig, InputDataConfigDict
from .tag_model import TagModel, TagModelDict


class CreatePredictorRequest(SdkBaseModel):
    predictor_name: str = Field(alias="PredictorName")
    """A name for the predictor."""

    algorithm_arn: Optional[str] = Field(default=UNSET, alias="AlgorithmArn")
    """The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if PerformAutoML is not set
    to true. Supported algorithms: arn:aws:forecast:::algorithm/ARIMA arn:aws:forecast:::algorithm/CNN-QR
    arn:aws:forecast:::algorithm/Deep_AR_Plus arn:aws:forecast:::algorithm/ETS arn:aws:forecast:::algorithm/NPTS
    arn:aws:forecast:::algorithm/Prophet"""

    forecast_horizon: int = Field(alias="ForecastHorizon")
    """Specifies the number of time-steps that the model is trained to predict. The forecast horizon is also called the
    prediction length. For example, if you configure a dataset for daily data collection (using the DataFrequency
    parameter of the CreateDataset operation) and set the forecast horizon to 10, the model returns predictions for 10
    days. The maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset
    length."""

    forecast_types: Optional[list[str]] = Field(default=UNSET, alias="ForecastTypes")
    """Specifies the forecast types used to train a predictor. You can specify up to five forecast types. Forecast types
    can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with
    mean. The default value is ["0.10", "0.50", "0.9"]."""

    perform_auto_ml: Optional[bool] = Field(default=UNSET, alias="PerformAutoML")
    """Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it provides and
    chooses the best algorithm and configuration for your training dataset. The default value is false. In this case,
    you are required to specify an algorithm. Set PerformAutoML to true to have Amazon Forecast perform AutoML. This is
    a good option if you aren't sure which algorithm is suitable for your training data. In this case, PerformHPO must
    be false."""

    auto_ml_override_strategy: Optional[AutoMlOverrideStrategyAmazonForecastServicePredictorsApiOrStr] = Field(
        default=UNSET, alias="AutoMLOverrideStrategy"
    )
    """The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services
    Support or your account manager to learn more about access privileges. Used to overide the default AutoML strategy,
    which is to optimize predictor accuracy. To apply an AutoML strategy that minimizes training time, use
    LatencyOptimized. This parameter is only valid for predictors trained using AutoML."""

    perform_hpo: Optional[bool] = Field(default=UNSET, alias="PerformHPO")
    """Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter values for your training
    data. The process of performing HPO is known as running a hyperparameter tuning job. The default value is false. In
    this case, Amazon Forecast uses default hyperparameter values from the chosen algorithm. To override the default
    values, set PerformHPO to true and, optionally, supply the HyperParameterTuningJobConfig object. The tuning job
    specifies a metric to optimize, which hyperparameters participate in tuning, and the valid range for each tunable
    hyperparameter. In this case, you"""

    training_parameters: Optional[dict[str, str]] = Field(default=UNSET, alias="TrainingParameters")
    """The hyperparameters to override for model training. The hyperparameters that you can override are listed in the
    individual algorithms. For the list of supported algorithms, see aws-forecast-choosing-recipes."""

    evaluation_parameters: Optional[EvaluationParameters] = Field(default=UNSET, alias="EvaluationParameters")
    hpo_config: Optional[HyperParameterTuningJobConfig] = Field(default=UNSET, alias="HPOConfig")
    input_data_config: InputDataConfig = Field(alias="InputDataConfig")
    featurization_config: FeaturizationConfig = Field(alias="FeaturizationConfig")
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The optional metadata that you apply to the predictor to help you categorize and organize them. Each tag consists
    of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum
    number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one
    value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8.
    If your tagging schema is used across multiple services and resources, remember that other services may have
    restrictions on allowed chara"""

    optimization_metric: Optional[OptimizationMetricOrStr] = Field(default=UNSET, alias="OptimizationMetric")
    """The accuracy metric used to optimize the predictor."""


class CreatePredictorRequestDict(TypedDict):
    predictor_name: str
    algorithm_arn: NotRequired[str]
    forecast_horizon: int
    forecast_types: NotRequired[list[str]]
    perform_auto_ml: NotRequired[bool]
    auto_ml_override_strategy: NotRequired[AutoMlOverrideStrategyAmazonForecastServicePredictorsApiOrStr]
    perform_hpo: NotRequired[bool]
    training_parameters: NotRequired[dict[str, str]]
    evaluation_parameters: NotRequired[EvaluationParametersDict]
    hpo_config: NotRequired[HyperParameterTuningJobConfigDict]
    input_data_config: InputDataConfigDict
    featurization_config: FeaturizationConfigDict
    encryption_config: NotRequired[EncryptionConfigDict]
    tags: NotRequired[list[TagModelDict]]
    optimization_metric: NotRequired[OptimizationMetricOrStr]
