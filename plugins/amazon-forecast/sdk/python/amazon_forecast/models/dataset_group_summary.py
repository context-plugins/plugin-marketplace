from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DatasetGroupSummary(SdkBaseModel):
    dataset_group_arn: Optional[str] = Field(default=UNSET, alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group."""

    dataset_group_name: Optional[str] = Field(default=UNSET, alias="DatasetGroupName")
    """The name of the dataset group."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the dataset group was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the
    dataset group is being updated, LastModificationTime is the current time of the ListDatasetGroups call."""


class DatasetGroupSummaryDict(TypedDict):
    dataset_group_arn: NotRequired[str]
    dataset_group_name: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
