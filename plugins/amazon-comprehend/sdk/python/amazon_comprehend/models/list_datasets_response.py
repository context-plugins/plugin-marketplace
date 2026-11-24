from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_properties import DatasetProperties, DatasetPropertiesDict


class ListDatasetsResponse(SdkBaseModel):
    dataset_properties_list: Optional[list[DatasetProperties]] = Field(default=UNSET, alias="DatasetPropertiesList")
    """The dataset properties list."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListDatasetsResponseDict(TypedDict):
    dataset_properties_list: NotRequired[list[DatasetPropertiesDict]]
    next_token: NotRequired[str]
