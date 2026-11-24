from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asset_item import AssetItem, AssetItemDict


class BillingV1AssetsResponse(SdkBaseModel):
    assets: Optional[list[AssetItem]] = UNSET
    """Array of Assets"""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token. Can be used to request the next page of results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Assets rows count"""


class BillingV1AssetsResponseDict(TypedDict):
    assets: NotRequired[list[AssetItemDict]]
    page_token: NotRequired[str]
    row_count: NotRequired[int]
