from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class Item(SdkBaseModel):
    product_code: str
    """The retailer's unique product identifier linking this item to its parent product."""

    store_code: str
    """The retailer's unique store identifier where this item is sold."""

    price: Optional[float] = UNSET
    """The current selling price of the item at this store."""

    sale_price: Optional[float] = UNSET
    """The promotional or sale price, if applicable."""

    sale_start_date: Optional[Date] = UNSET
    """The start date of the sale period."""

    sale_end_date: Optional[Date] = UNSET
    """The end date of the sale period."""

    available: Optional[bool] = UNSET
    """Whether the item is currently available for purchase at this store."""

    inventory_count: Optional[int] = UNSET
    """The current inventory count at this store."""

    aisle: Optional[str] = UNSET
    """The store aisle where the item is located."""

    shelf: Optional[str] = UNSET
    """The shelf location within the aisle."""


class ItemDict(TypedDict):
    product_code: str
    store_code: str
    price: NotRequired[float]
    sale_price: NotRequired[float]
    sale_start_date: NotRequired[Date]
    sale_end_date: NotRequired[Date]
    available: NotRequired[bool]
    inventory_count: NotRequired[int]
    aisle: NotRequired[str]
    shelf: NotRequired[str]
