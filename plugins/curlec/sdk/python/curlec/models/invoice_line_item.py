from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class InvoiceLineItem(SdkBaseModel):
    id: Optional[str] = UNSET
    """Line item ID. Prefix: li_"""

    item_id: Optional[str] = UNSET
    """Referenced catalog item ID (item_*). Null for ad-hoc line items."""

    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    amount: Optional[int] = UNSET
    """Total line amount in paise (unit_amount × quantity)."""

    unit_amount: Optional[int] = UNSET
    """Per-unit price in paise."""

    quantity: int = 1
    currency: str = "INR"
    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")


class InvoiceLineItemDict(TypedDict):
    id: NotRequired[str]
    item_id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    amount: NotRequired[int]
    unit_amount: NotRequired[int]
    quantity: NotRequired[int]
    currency: NotRequired[str]
    type_: NotRequired[Type1OrStr]
