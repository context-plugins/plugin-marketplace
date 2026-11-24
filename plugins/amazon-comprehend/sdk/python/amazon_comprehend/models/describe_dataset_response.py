from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_properties import DatasetProperties, DatasetPropertiesDict


class DescribeDatasetResponse(SdkBaseModel):
    dataset_properties: Optional[DatasetProperties] = Field(default=UNSET, alias="DatasetProperties")


class DescribeDatasetResponseDict(TypedDict):
    dataset_properties: NotRequired[DatasetPropertiesDict]
