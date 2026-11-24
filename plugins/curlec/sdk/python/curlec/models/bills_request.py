from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer1 import Customer1, Customer1Dict
from .enums.business_type import BusinessTypeOrStr
from .enums.receipt_delivery import ReceiptDeliveryOrStr
from .enums.receipt_type import ReceiptTypeOrStr


class BillsRequest(SdkBaseModel):
    business_type: BusinessTypeOrStr
    business_category: Optional[str] = UNSET
    customer: Customer1
    receipt_timestamp: Optional[int] = UNSET
    receipt_number: Optional[str] = UNSET
    receipt_type: Optional[ReceiptTypeOrStr] = UNSET
    receipt_delivery: Optional[ReceiptDeliveryOrStr] = UNSET
    store_code: Optional[str] = UNSET
    order_number: Optional[str] = UNSET
    line_items: Optional[list[Any]] = UNSET
    receipt_summary: Optional[Any] = UNSET
    taxes: Optional[list[Any]] = UNSET
    payments: Optional[list[Any]] = UNSET


class BillsRequestDict(TypedDict):
    business_type: BusinessTypeOrStr
    business_category: NotRequired[str]
    customer: Customer1Dict
    receipt_timestamp: NotRequired[int]
    receipt_number: NotRequired[str]
    receipt_type: NotRequired[ReceiptTypeOrStr]
    receipt_delivery: NotRequired[ReceiptDeliveryOrStr]
    store_code: NotRequired[str]
    order_number: NotRequired[str]
    line_items: NotRequired[list[Any]]
    receipt_summary: NotRequired[Any]
    taxes: NotRequired[list[Any]]
    payments: NotRequired[list[Any]]
