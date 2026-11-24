from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DistributeDataset(SdkBaseModel):
    arn: str = Field(alias="Arn")
    """The Amazon Resource Name (ARN) of the dataset that you want to use."""


class DistributeDatasetDict(TypedDict):
    arn: str
