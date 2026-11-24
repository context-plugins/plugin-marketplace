from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateDatasetGroupRequest(SdkBaseModel):
    dataset_group_arn: str = Field(alias="DatasetGroupArn")
    """The ARN of the dataset group."""

    dataset_arns: list[str] = Field(alias="DatasetArns")
    """An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset group."""


class UpdateDatasetGroupRequestDict(TypedDict):
    dataset_group_arn: str
    dataset_arns: list[str]
