from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_summary import DatasetSummary, DatasetSummaryDict


class DatasetList(SdkBaseModel):
    datasets: list[DatasetSummary]
    total: int


class DatasetListDict(TypedDict):
    datasets: list[DatasetSummaryDict]
    total: int
