from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dataset_metadata import DatasetMetadata, DatasetMetadataDict
from .enums.auto_update1 import AutoUpdate1OrStr
from .enums.feature2 import Feature2OrStr
from .enums.status2 import Status2OrStr


class ProjectDescription(SdkBaseModel):
    project_arn: Optional[str] = Field(default=UNSET, alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the project."""

    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """The Unix timestamp for the date and time that the project was created."""

    status: Optional[Status2OrStr] = Field(default=UNSET, alias="Status")
    """The current status of the project."""

    datasets: Optional[list[DatasetMetadata]] = Field(default=UNSET, alias="Datasets")
    """Information about the training and test datasets in the project."""

    feature: Optional[Feature2OrStr] = Field(default=UNSET, alias="Feature")
    """Specifies the project that is being customized."""

    auto_update: Optional[AutoUpdate1OrStr] = Field(default=UNSET, alias="AutoUpdate")
    """Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to
    adapters."""


class ProjectDescriptionDict(TypedDict):
    project_arn: NotRequired[str]
    creation_timestamp: NotRequired[RFC3339DateTime]
    status: NotRequired[Status2OrStr]
    datasets: NotRequired[list[DatasetMetadataDict]]
    feature: NotRequired[Feature2OrStr]
    auto_update: NotRequired[AutoUpdate1OrStr]
