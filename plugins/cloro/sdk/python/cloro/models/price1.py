from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price1(SdkBaseModel):
    """Current price. For a range, ``value`` is the lowest price. For an installment offer, only ``raw`` is present"""

    value: Optional[float] = UNSET
    """Numeric price. Absent for an installment offer"""

    currency: Optional[str] = UNSET
    """Currency symbol or code as displayed. Absent for an installment offer"""

    raw: Optional[str] = UNSET
    """Price text as Gemini displays it"""


class Price1Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
