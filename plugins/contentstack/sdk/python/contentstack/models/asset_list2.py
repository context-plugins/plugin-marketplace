from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset2 import Asset2, Asset2Dict


class AssetList2(SdkBaseModel):
    """A paginated list of assets."""

    assets: Optional[list[Asset2]] = UNSET
    """Array of asset objects."""


class AssetList2Dict(TypedDict):
    assets: NotRequired[list[Asset2Dict]]
