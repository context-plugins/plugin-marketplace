from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity2_razorpay_orders_api import Entity2RazorpayOrdersApiOrStr
from .x_transaction import XTransaction, XTransactionDict


class TransactionsResponse(SdkBaseModel):
    entity: Optional[Entity2RazorpayOrdersApiOrStr] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[XTransaction]] = UNSET


class TransactionsResponseDict(TypedDict):
    entity: NotRequired[Entity2RazorpayOrdersApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[XTransactionDict]]
