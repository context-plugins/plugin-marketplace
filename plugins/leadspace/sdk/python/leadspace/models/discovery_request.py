from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .discovery_item import DiscoveryItem, DiscoveryItemDict


class DiscoveryRequest(SdkBaseModel):
    data: list[DiscoveryItem]
    """Up to 500 accounts per bulk request"""

    external_bulk_id: Optional[str] = UNSET
    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """URL Leadspace calls back when bulk processing completes"""


class DiscoveryRequestDict(TypedDict):
    data: list[DiscoveryItemDict]
    external_bulk_id: NotRequired[str]
    callback_url: NotRequired[str]
