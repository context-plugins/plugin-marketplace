from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.model_type1 import ModelType1OrStr
from .enums.status6 import Status6OrStr


class FlywheelSummary(SdkBaseModel):
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel"""

    active_model_arn: Optional[str] = Field(default=UNSET, alias="ActiveModelArn")
    """ARN of the active model version for the flywheel."""

    data_lake_s3_uri: Optional[str] = Field(default=UNSET, alias="DataLakeS3Uri")
    """Amazon S3 URI of the data lake location."""

    status: Optional[Status6OrStr] = Field(default=UNSET, alias="Status")
    """The status of the flywheel."""

    model_type: Optional[ModelType1OrStr] = Field(default=UNSET, alias="ModelType")
    """Model type of the flywheel's model."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the flywheel."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """Creation time of the flywheel."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """Last modified time for the flywheel."""

    latest_flywheel_iteration: Optional[str] = Field(default=UNSET, alias="LatestFlywheelIteration")
    """The most recent flywheel iteration."""


class FlywheelSummaryDict(TypedDict):
    flywheel_arn: NotRequired[str]
    active_model_arn: NotRequired[str]
    data_lake_s3_uri: NotRequired[str]
    status: NotRequired[Status6OrStr]
    model_type: NotRequired[ModelType1OrStr]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modified_time: NotRequired[RFC3339DateTime]
    latest_flywheel_iteration: NotRequired[str]
