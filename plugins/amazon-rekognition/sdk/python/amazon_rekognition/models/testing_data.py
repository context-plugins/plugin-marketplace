from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset import Asset, AssetDict


class TestingData(SdkBaseModel):
    assets: Optional[list[Asset]] = Field(default=UNSET, alias="Assets")
    """The assets used for testing."""

    auto_create: Optional[bool] = Field(default=UNSET, alias="AutoCreate")
    """If specified, Rekognition splits training dataset to create a test dataset for the training job."""


class TestingDataDict(TypedDict):
    assets: NotRequired[list[AssetDict]]
    auto_create: NotRequired[bool]
