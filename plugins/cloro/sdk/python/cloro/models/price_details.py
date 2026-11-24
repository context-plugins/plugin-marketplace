from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class PriceDetails(SdkBaseModel):
    """Detailed price breakdown for an offer"""

    display_price: OptionalNullable[str] = UNSET
    """Formatted display price"""

    base: Optional[str] = UNSET
    """Base product price"""

    shipping: OptionalNullable[str] = UNSET
    """Shipping cost"""

    tax: OptionalNullable[str] = UNSET
    """Tax amount"""

    total: Optional[str] = UNSET
    """Total price"""


class PriceDetailsDict(TypedDict):
    display_price: NotRequired[str | None]
    base: NotRequired[str]
    shipping: NotRequired[str | None]
    tax: NotRequired[str | None]
    total: NotRequired[str]
