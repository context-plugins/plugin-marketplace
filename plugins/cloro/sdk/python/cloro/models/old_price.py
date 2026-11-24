from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OldPrice(SdkBaseModel):
    """Price before a discount, same shape as ``price``. Absent when there is no discount"""

    value: Optional[float] = UNSET
    """Numeric price"""

    currency: Optional[str] = UNSET
    """Currency symbol or code as displayed"""

    raw: Optional[str] = UNSET
    """Price text as Gemini displays it"""


class OldPriceDict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
