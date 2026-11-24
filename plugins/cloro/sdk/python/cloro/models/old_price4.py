from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OldPrice4(SdkBaseModel):
    """Original price before discount. Same shape as ``price``."""

    value: Optional[float] = UNSET
    """Numeric price"""

    currency: Optional[str] = UNSET
    """Currency symbol or word as displayed (e.g. ``$``, ``R$``)"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class OldPrice4Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
