from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PriceDetails2(SdkBaseModel):
    """Detailed price breakdown"""

    base: Optional[str] = UNSET
    """Base product price"""

    total: Optional[str] = UNSET
    """Total price including any additional costs"""


class PriceDetails2Dict(TypedDict):
    base: NotRequired[str]
    total: NotRequired[str]
