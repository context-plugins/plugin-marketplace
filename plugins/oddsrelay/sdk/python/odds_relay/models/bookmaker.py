from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .market import Market, MarketDict
from .unions.last_update import LastUpdate, LastUpdateDict


class Bookmaker(SdkBaseModel):
    key: str
    title: str
    region: str
    last_update: LastUpdate | None
    """The newest ``last_update`` of the venue's markets."""

    link: Optional[str] = UNSET
    """``includeLinks=true`` only."""

    markets: list[Market]


class BookmakerDict(TypedDict):
    key: str
    title: str
    region: str
    last_update: LastUpdateDict | None
    link: NotRequired[str]
    markets: list[MarketDict]
