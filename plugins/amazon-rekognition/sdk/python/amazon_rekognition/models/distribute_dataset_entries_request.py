from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .distribute_dataset import DistributeDataset, DistributeDatasetDict


class DistributeDatasetEntriesRequest(SdkBaseModel):
    datasets: list[DistributeDataset] = Field(alias="Datasets")
    """The ARNS for the training dataset and test dataset that you want to use. The datasets must belong to the same
    project. The test dataset must be empty."""


class DistributeDatasetEntriesRequestDict(TypedDict):
    datasets: list[DistributeDatasetDict]
