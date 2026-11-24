from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .reference_predictor_summary import ReferencePredictorSummary, ReferencePredictorSummaryDict


class PredictorSummary(SdkBaseModel):
    predictor_arn: Optional[str] = Field(default=UNSET, alias="PredictorArn")
    """The ARN of the predictor."""

    predictor_name: Optional[str] = Field(default=UNSET, alias="PredictorName")
    """The name of the predictor."""

    dataset_group_arn: Optional[str] = Field(default=UNSET, alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the predictor."""

    is_auto_predictor: Optional[bool] = Field(default=UNSET, alias="IsAutoPredictor")
    """Whether AutoPredictor was used to create the predictor."""

    reference_predictor_summary: Optional[ReferencePredictorSummary] = Field(
        default=UNSET, alias="ReferencePredictorSummary"
    )
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


class PredictorSummaryDict(TypedDict):
    predictor_arn: NotRequired[str]
    predictor_name: NotRequired[str]
    dataset_group_arn: NotRequired[str]
    is_auto_predictor: NotRequired[bool]
    reference_predictor_summary: NotRequired[ReferencePredictorSummaryDict]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
