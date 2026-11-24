from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset import Asset, AssetDict


class ValidationData(SdkBaseModel):
    assets: Optional[list[Asset]] = Field(default=UNSET, alias="Assets")
    """The assets that comprise the validation data."""


class ValidationDataDict(TypedDict):
    assets: NotRequired[list[AssetDict]]
