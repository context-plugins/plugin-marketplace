from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PriceDetails5(SdkBaseModel):
    """Detailed price breakdown"""

    display_price: Optional[str] = UNSET
    """Formatted display price"""


class PriceDetails5Dict(TypedDict):
    display_price: NotRequired[str]
