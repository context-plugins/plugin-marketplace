from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideAuctionComponents(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_auction_components"] = "hide_auction_components"
    value: OptionalNullable[bool] = UNSET


class HideAuctionComponentsDict(TypedDict):
    name: Literal["hide_auction_components"]
    value: NotRequired[bool | None]
