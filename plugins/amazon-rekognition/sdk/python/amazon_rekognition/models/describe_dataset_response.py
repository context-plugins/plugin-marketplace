from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_description import DatasetDescription, DatasetDescriptionDict


class DescribeDatasetResponse(SdkBaseModel):
    dataset_description: Optional[DatasetDescription] = Field(default=UNSET, alias="DatasetDescription")


class DescribeDatasetResponseDict(TypedDict):
    dataset_description: NotRequired[DatasetDescriptionDict]
