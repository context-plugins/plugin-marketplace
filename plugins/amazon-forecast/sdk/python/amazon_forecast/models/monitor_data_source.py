from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MonitorDataSource(SdkBaseModel):
    dataset_import_job_arn: Optional[str] = Field(default=UNSET, alias="DatasetImportJobArn")
    """The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated the monitor
    evaluation."""

    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation."""

    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The Amazon Resource Name (ARN) of the predictor resource you are monitoring."""


class MonitorDataSourceDict(TypedDict):
    dataset_import_job_arn: NotRequired[str]
    forecast_arn: NotRequired[str]
    predictor_arn: NotRequired[str]
