from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset import Dataset, DatasetDict


class ApiV1ReportsDataResponse(SdkBaseModel):
    datasets: list[Dataset]


class ApiV1ReportsDataResponseDict(TypedDict):
    datasets: list[DatasetDict]
