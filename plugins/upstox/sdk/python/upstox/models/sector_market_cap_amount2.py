from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SectorMarketCapAmount2(SdkBaseModel):
    """Sector market capitalisation in INR"""

    value: Optional[float] = UNSET
    """Numeric value of the market capitalisation"""

    unit: Optional[str] = UNSET
    """Unit of the market capitalisation value"""

    formatted: Optional[str] = UNSET
    """Human-readable formatted market capitalisation"""


class SectorMarketCapAmount2Dict(TypedDict):
    value: NotRequired[float]
    unit: NotRequired[str]
    formatted: NotRequired[str]
