from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_label_stats import DatasetLabelStats, DatasetLabelStatsDict


class DatasetLabelDescription(SdkBaseModel):
    label_name: Optional[str] = Field(default=UNSET, alias="LabelName")
    """The name of the label."""

    label_stats: Optional[DatasetLabelStats] = Field(default=UNSET, alias="LabelStats")


class DatasetLabelDescriptionDict(TypedDict):
    label_name: NotRequired[str]
    label_stats: NotRequired[DatasetLabelStatsDict]
