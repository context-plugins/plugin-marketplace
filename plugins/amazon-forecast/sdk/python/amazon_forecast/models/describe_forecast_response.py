from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .time_series_selector import TimeSeriesSelector, TimeSeriesSelectorDict


class DescribeForecastResponse(SdkBaseModel):
    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The forecast ARN as specified in the request."""

    forecast_name: Optional[str] = Field(default=UNSET, alias="ForecastName")
    """The name of the forecast."""

    forecast_types: Optional[list[str]] = Field(default=UNSET, alias="ForecastTypes")
    """The quantiles at which probabilistic forecasts were generated."""

    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The ARN of the predictor used to generate the forecast."""

    dataset_group_arn: Optional[str] = Field(default=UNSET, alias="DatasetGroupArn")
    """The ARN of the dataset group that provided the data used to train the predictor."""

    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The estimated time remaining in minutes for the forecast job to complete."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the forecast must be
    ACTIVE before you can query or export the forecast."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the forecast creation task was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    time_series_selector: Optional[TimeSeriesSelector] = Field(default=UNSET, alias="TimeSeriesSelector")


class DescribeForecastResponseDict(TypedDict):
    forecast_arn: NotRequired[str]
    forecast_name: NotRequired[str]
    forecast_types: NotRequired[list[str]]
    predictor_arn: NotRequired[str]
    dataset_group_arn: NotRequired[str]
    estimated_time_remaining_in_minutes: NotRequired[int]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    time_series_selector: NotRequired[TimeSeriesSelectorDict]
