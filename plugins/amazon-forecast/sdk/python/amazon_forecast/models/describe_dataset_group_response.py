from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.domain1 import Domain1OrStr


class DescribeDatasetGroupResponse(SdkBaseModel):
    dataset_group_name: Optional[str] = Field(default=UNSET, alias="DatasetGroupName")
    """The name of the dataset group."""

    dataset_group_arn: Optional[str] = Field(default=UNSET, alias="DatasetGroupArn")
    """The ARN of the dataset group."""

    dataset_arns: Optional[list[str]] = Field(default=UNSET, alias="DatasetArns")
    """An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group."""

    domain: Optional[Domain1OrStr] = Field(default=UNSET, alias="Domain")
    """The domain associated with the dataset group."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the dataset group. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE
    states apply when you call the UpdateDatasetGroup operation. The Status of the dataset group must be ACTIVE before
    you can use the dataset group to create a predictor."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the dataset group was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the
    dataset group is being updated, LastModificationTime is the current time of the DescribeDatasetGroup call."""


class DescribeDatasetGroupResponseDict(TypedDict):
    dataset_group_name: NotRequired[str]
    dataset_group_arn: NotRequired[str]
    dataset_arns: NotRequired[list[str]]
    domain: NotRequired[Domain1OrStr]
    status: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
