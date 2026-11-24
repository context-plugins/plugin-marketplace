from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset import Dataset, DatasetDict


class DatahubV1DatasetsResponse(SdkBaseModel):
    datasets: Optional[list[Dataset]] = UNSET


class DatahubV1DatasetsResponseDict(TypedDict):
    datasets: NotRequired[list[DatasetDict]]
