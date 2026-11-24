from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset import Asset, AssetDict


class ODataAssetCollection(SdkBaseModel):
    """OData collection response containing assets"""

    value: Optional[list[Asset]] = UNSET


class ODataAssetCollectionDict(TypedDict):
    value: NotRequired[list[AssetDict]]
