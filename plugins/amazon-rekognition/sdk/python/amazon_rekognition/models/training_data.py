from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset import Asset, AssetDict


class TrainingData(SdkBaseModel):
    assets: Optional[list[Asset]] = Field(default=UNSET, alias="Assets")
    """A manifest file that contains references to the training images and ground-truth annotations."""


class TrainingDataDict(TypedDict):
    assets: NotRequired[list[AssetDict]]
