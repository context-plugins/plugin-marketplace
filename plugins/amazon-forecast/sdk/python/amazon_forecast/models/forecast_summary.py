from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ForecastSummary(SdkBaseModel):
    forecast_arn: Optional[str] = Field(default=UNSET, alias="ForecastArn")
    """The ARN of the forecast."""

    forecast_name: Optional[str] = Field(default=UNSET, alias="ForecastName")
    """The name of the forecast."""

    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The ARN of the predictor used to generate the forecast."""

    created_using_auto_predictor: Optional[bool] = Field(default=UNSET, alias="CreatedUsingAutoPredictor")
    """Whether the Forecast was created from an AutoPredictor."""

    dataset_group_arn: Optional[str] = Field(default=UNSET, alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group that provided the data used to train the predictor."""

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


class ForecastSummaryDict(TypedDict):
    forecast_arn: NotRequired[str]
    forecast_name: NotRequired[str]
    predictor_arn: NotRequired[str]
    created_using_auto_predictor: NotRequired[bool]
    dataset_group_arn: NotRequired[str]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
