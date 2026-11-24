from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LineItem(SdkBaseModel):
    name: Optional[str] = UNSET
    quantity: Optional[float] = UNSET
    unit_amount: Optional[int] = UNSET
    unit: Optional[str] = UNSET
    hsn_code: Optional[str] = UNSET
    product_code: Optional[str] = UNSET
    total_amount: Optional[int] = UNSET
    taxes: Optional[list[Any]] = UNSET
    sub_items: Optional[list[Any]] = UNSET
    tags: Optional[Any] = UNSET


class LineItemDict(TypedDict):
    name: NotRequired[str]
    quantity: NotRequired[float]
    unit_amount: NotRequired[int]
    unit: NotRequired[str]
    hsn_code: NotRequired[str]
    product_code: NotRequired[str]
    total_amount: NotRequired[int]
    taxes: NotRequired[list[Any]]
    sub_items: NotRequired[list[Any]]
    tags: NotRequired[Any]
