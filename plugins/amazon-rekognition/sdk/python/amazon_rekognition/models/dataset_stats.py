from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasetStats(SdkBaseModel):
    labeled_entries: Optional[int] = Field(default=UNSET, alias="LabeledEntries")
    """The total number of images in the dataset that have labels."""

    total_entries: Optional[int] = Field(default=UNSET, alias="TotalEntries")
    """The total number of images in the dataset."""

    total_labels: Optional[int] = Field(default=UNSET, alias="TotalLabels")
    """The total number of labels declared in the dataset."""

    error_entries: Optional[int] = Field(default=UNSET, alias="ErrorEntries")
    """The total number of entries that contain at least one error."""


class DatasetStatsDict(TypedDict):
    labeled_entries: NotRequired[int]
    total_entries: NotRequired[int]
    total_labels: NotRequired[int]
    error_entries: NotRequired[int]
