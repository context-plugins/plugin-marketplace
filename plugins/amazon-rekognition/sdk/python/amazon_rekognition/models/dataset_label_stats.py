from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasetLabelStats(SdkBaseModel):
    entry_count: Optional[int] = Field(default=UNSET, alias="EntryCount")
    """The total number of images that use the label."""

    bounding_box_count: Optional[int] = Field(default=UNSET, alias="BoundingBoxCount")
    """The total number of images that have the label assigned to a bounding box."""


class DatasetLabelStatsDict(TypedDict):
    entry_count: NotRequired[int]
    bounding_box_count: NotRequired[int]
