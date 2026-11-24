from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price8(SdkBaseModel):
    """Price as displayed. Fields that can't be parsed are omitted, never sent as ``null``. When Google supplies
    structured price data, ``currency`` is an ISO code (``USD``) and ``raw`` appears only if the page also showed the
    price text."""

    value: Optional[float] = UNSET
    """Numeric price"""

    currency: Optional[str] = UNSET
    """Currency symbol as displayed, or an ISO code when Google supplies structured price data"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class Price8Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
