from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .exchange1 import Exchange1, Exchange1Dict


class StockListing(SdkBaseModel):
    ticker: Optional[str] = UNSET
    """Full ticker including exchange suffix"""

    primary: Optional[bool] = UNSET
    """Whether this is the primary listing"""

    exchange: OptionalNullable[Exchange1] = UNSET


class StockListingDict(TypedDict):
    ticker: NotRequired[str]
    primary: NotRequired[bool]
    exchange: NotRequired[Exchange1Dict | None]
