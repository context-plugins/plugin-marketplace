from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .price2 import Price2, Price2Dict


class Store1(SdkBaseModel):
    name: str
    """Merchant name"""

    link: Optional[str] = UNSET
    """Merchant product URL, passed through from Google verbatim"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""

    price: Optional[Price2] = UNSET
    """Offer price. Omitted when the displayed text can't be parsed."""

    installments: Optional[str] = UNSET
    """Installment terms as displayed"""

    description: Optional[str] = UNSET
    """Merchant's listing title, naming the exact SKU sold"""

    buying_options: Optional[list[str]] = Field(default=UNSET, alias="buyingOptions")
    """Merchant badges in display order, such as stock status, delivery promise and returns window"""

    logo: Optional[str] = UNSET
    """Merchant logo URL"""

    shipping: Optional[str] = UNSET
    """Shipping cost or promise as displayed"""

    condition: Optional[str] = UNSET
    """Item condition"""

    rating: Optional[float] = UNSET
    """Merchant rating"""

    reviews: Optional[str] = UNSET
    """Merchant review count, abbreviated"""


class Store1Dict(TypedDict):
    name: str
    link: NotRequired[str]
    redirect_link: NotRequired[str]
    price: NotRequired[Price2Dict]
    installments: NotRequired[str]
    description: NotRequired[str]
    buying_options: NotRequired[list[str]]
    logo: NotRequired[str]
    shipping: NotRequired[str]
    condition: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
