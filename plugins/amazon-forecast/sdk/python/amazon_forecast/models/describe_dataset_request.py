from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeDatasetRequest(SdkBaseModel):
    dataset_arn: str = Field(alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset."""


class DescribeDatasetRequestDict(TypedDict):
    dataset_arn: str
