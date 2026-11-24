from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_config import DataConfig, DataConfigDict
from .encryption_config import EncryptionConfig, EncryptionConfigDict
from .enums.optimization_metric import OptimizationMetricOrStr
from .monitor_config import MonitorConfig, MonitorConfigDict
from .tag_model import TagModel, TagModelDict
from .time_alignment_boundary import TimeAlignmentBoundary, TimeAlignmentBoundaryDict


class CreateAutoPredictorRequest(SdkBaseModel):
    predictor_name: str = Field(alias="PredictorName")
    """A unique name for the predictor"""

    forecast_horizon: Optional[int] = Field(default=UNSET, alias="ForecastHorizon")
    """The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. The
    maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the TARGET_TIME_SERIES dataset length. If you are
    retraining an existing AutoPredictor, then the maximum forecast horizon is the lesser of 500 time-steps or 1/3 of
    the TARGET_TIME_SERIES dataset length. If you are upgrading to an AutoPredictor or retraining an existing
    AutoPredictor, you cannot update the forecast horizon parameter. You can meet this requirement by providing longer
    time-series in the dataset."""

    forecast_types: Optional[list[str]] = Field(default=UNSET, alias="ForecastTypes")
    """The forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be
    quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with mean."""

    forecast_dimensions: Optional[list[str]] = Field(default=UNSET, alias="ForecastDimensions")
    """An array of dimension (field) names that specify how to group the generated forecast. For example, if you are
    generating forecasts for item sales across all your stores, and your dataset contains a store_id field, you would
    specify store_id as a dimension to group sales forecasts for each store."""

    forecast_frequency: Optional[str] = Field(default=UNSET, alias="ForecastFrequency")
    """The frequency of predictions in a forecast. Valid intervals are an integer followed by Y (Year), M (Month), W
    (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15
    minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you
    cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency
    are the following: Minute - 1-59 Hour - 1-23 Day - 1-6 Week - 1-4 Month - 1-11 Year - 1 Thus, if you want every
    other week forecasts, specify "2"""

    data_config: Optional[DataConfig] = Field(default=UNSET, alias="DataConfig")
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")
    reference_predictor_arn: Optional[str] = Field(default=UNSET, alias="ReferencePredictorArn")
    """The ARN of the predictor to retrain or upgrade. This parameter is only used when retraining or upgrading a
    predictor. When creating a new predictor, do not specify a value for this parameter. When upgrading or retraining a
    predictor, only specify values for the ReferencePredictorArn and PredictorName. The value for PredictorName must be
    a unique predictor name."""

    optimization_metric: Optional[OptimizationMetricOrStr] = Field(default=UNSET, alias="OptimizationMetric")
    """The accuracy metric used to optimize the predictor."""

    explain_predictor: Optional[bool] = Field(default=UNSET, alias="ExplainPredictor")
    """Create an Explainability resource for the predictor."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Optional metadata to help you categorize and organize your predictors. Each tag consists of a key and an optional
    value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags:
    For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per
    resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in
    UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your
    tagging schema is used across o"""

    monitor_config: Optional[MonitorConfig] = Field(default=UNSET, alias="MonitorConfig")
    time_alignment_boundary: Optional[TimeAlignmentBoundary] = Field(default=UNSET, alias="TimeAlignmentBoundary")


class CreateAutoPredictorRequestDict(TypedDict):
    predictor_name: str
    forecast_horizon: NotRequired[int]
    forecast_types: NotRequired[list[str]]
    forecast_dimensions: NotRequired[list[str]]
    forecast_frequency: NotRequired[str]
    data_config: NotRequired[DataConfigDict]
    encryption_config: NotRequired[EncryptionConfigDict]
    reference_predictor_arn: NotRequired[str]
    optimization_metric: NotRequired[OptimizationMetricOrStr]
    explain_predictor: NotRequired[bool]
    tags: NotRequired[list[TagModelDict]]
    monitor_config: NotRequired[MonitorConfigDict]
    time_alignment_boundary: NotRequired[TimeAlignmentBoundaryDict]
