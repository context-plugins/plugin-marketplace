from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .blmt_config2 import BlmtConfig2, BlmtConfig2Dict
from .single_target_dataset2 import SingleTargetDataset2, SingleTargetDataset2Dict
from .source_hierarchy_datasets1 import SourceHierarchyDatasets1, SourceHierarchyDatasets1Dict


class BigQueryDestinationConfig2(SdkBaseModel):
    """BigQuery destination configuration."""

    single_target_dataset: Optional[SingleTargetDataset2] = Field(default=UNSET, alias="singleTargetDataset")
    """Single destination dataset."""

    data_freshness: Optional[str] = Field(default=UNSET, alias="dataFreshness")
    """The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will
    only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that
    queries will return fresher data, but may result in higher cost."""

    merge: Optional[Any] = UNSET
    """The standard mode"""

    blmt_config: Optional[BlmtConfig2] = Field(default=UNSET, alias="blmtConfig")
    """Optional. Big Lake Managed Tables (BLMT) configuration."""

    append_only: Optional[Any] = Field(default=UNSET, alias="appendOnly")
    """Append only mode"""

    source_hierarchy_datasets: Optional[SourceHierarchyDatasets1] = Field(
        default=UNSET, alias="sourceHierarchyDatasets"
    )
    """Source hierarchy datasets."""


class BigQueryDestinationConfig2Dict(TypedDict):
    single_target_dataset: NotRequired[SingleTargetDataset2Dict]
    data_freshness: NotRequired[str]
    merge: NotRequired[Any]
    blmt_config: NotRequired[BlmtConfig2Dict]
    append_only: NotRequired[Any]
    source_hierarchy_datasets: NotRequired[SourceHierarchyDatasets1Dict]
