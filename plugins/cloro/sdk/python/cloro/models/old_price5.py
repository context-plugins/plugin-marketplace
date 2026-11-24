from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OldPrice5(SdkBaseModel):
    """Original price before discount. Same shape as ``price``."""

    value: Optional[float] = UNSET
    """Numeric price"""

    currency: Optional[str] = UNSET
    """Currency symbol as displayed, or an ISO code when Google supplies structured price data"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class OldPrice5Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
