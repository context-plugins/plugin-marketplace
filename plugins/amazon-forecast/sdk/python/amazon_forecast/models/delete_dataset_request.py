from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteDatasetRequest(SdkBaseModel):
    dataset_arn: str = Field(alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset to delete."""


class DeleteDatasetRequestDict(TypedDict):
    dataset_arn: str
