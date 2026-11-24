from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class AuctionTabText(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["auction_tab_text"] = "auction_tab_text"
    value: OptionalNullable[str] = UNSET


class AuctionTabTextDict(TypedDict):
    name: Literal["auction_tab_text"]
    value: NotRequired[str | None]
