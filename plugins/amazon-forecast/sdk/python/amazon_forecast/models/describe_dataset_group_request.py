from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeDatasetGroupRequest(SdkBaseModel):
    dataset_group_arn: str = Field(alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group."""


class DescribeDatasetGroupRequestDict(TypedDict):
    dataset_group_arn: str
