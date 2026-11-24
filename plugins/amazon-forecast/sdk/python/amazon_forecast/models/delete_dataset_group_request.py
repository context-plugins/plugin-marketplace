from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteDatasetGroupRequest(SdkBaseModel):
    dataset_group_arn: str = Field(alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group to delete."""


class DeleteDatasetGroupRequestDict(TypedDict):
    dataset_group_arn: str
