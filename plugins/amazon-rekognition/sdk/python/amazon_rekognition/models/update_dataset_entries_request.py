from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_changes import DatasetChanges, DatasetChangesDict


class UpdateDatasetEntriesRequest(SdkBaseModel):
    dataset_arn: str = Field(alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset that you want to update."""

    changes: DatasetChanges = Field(alias="Changes")


class UpdateDatasetEntriesRequestDict(TypedDict):
    dataset_arn: str
    changes: DatasetChangesDict
