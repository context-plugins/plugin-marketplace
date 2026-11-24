from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OldPrice1(SdkBaseModel):
    """Original price before discount on ``type: SHOPPING_CARD`` ads that surface MSRP / sale messaging. Same shape as
    ``price``."""

    value: Optional[float] = UNSET
    """Numeric price value"""

    currency: Optional[str] = UNSET
    """Currency symbol"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class OldPrice1Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
