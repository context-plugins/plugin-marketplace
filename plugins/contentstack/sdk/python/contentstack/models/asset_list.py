from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset import Asset, AssetDict


class AssetList(SdkBaseModel):
    """A paginated list of assets in the stack."""

    assets: Optional[list[Asset]] = UNSET
    """Array of asset objects."""

    count: Optional[int] = UNSET
    """Total count of assets when include_count is true."""


class AssetListDict(TypedDict):
    assets: NotRequired[list[AssetDict]]
    count: NotRequired[int]
