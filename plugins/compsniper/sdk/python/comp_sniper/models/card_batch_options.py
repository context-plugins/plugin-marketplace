from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.ebay_site import EbaySiteOrStr
from .enums.item_condition import ItemConditionOrStr
from .enums.output_mode import OutputMode, OutputModeOrStr


class CardBatchOptions(SdkBaseModel):
    ebay_site: Optional[EbaySiteOrStr] = Field(default=UNSET, alias="ebaySite")
    count: int = 60
    """Maximum sold comps inspected per card. Compact output is capped at 60."""

    item_condition: Optional[ItemConditionOrStr] = Field(default=UNSET, alias="itemCondition")
    sold_after: Optional[Date] = Field(default=UNSET, alias="soldAfter")
    sold_before: Optional[Date] = Field(default=UNSET, alias="soldBefore")
    exact_match: bool = Field(default=False, alias="exactMatch")
    """Remove eBay's explicit Results matching fewer words section for each card search."""

    relevance: bool = True
    output_mode: OutputModeOrStr = Field(default=OutputMode.SUMMARY, alias="outputMode")
    """compact also returns compact sold-listing rows, including bestOfferAccepted, and is limited to 25 cards with
    count <= 60."""


class CardBatchOptionsDict(TypedDict):
    ebay_site: NotRequired[EbaySiteOrStr]
    count: NotRequired[int]
    item_condition: NotRequired[ItemConditionOrStr]
    sold_after: NotRequired[Date]
    sold_before: NotRequired[Date]
    exact_match: NotRequired[bool]
    relevance: NotRequired[bool]
    output_mode: NotRequired[OutputModeOrStr]
