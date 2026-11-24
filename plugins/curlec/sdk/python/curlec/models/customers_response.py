from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_razorpay_customers_api import CustomerRazorpayCustomersApi, CustomerRazorpayCustomersApiDict
from .enums.entity import EntityOrStr


class CustomersResponse(SdkBaseModel):
    entity: Optional[EntityOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[CustomerRazorpayCustomersApi]] = UNSET


class CustomersResponseDict(TypedDict):
    entity: NotRequired[EntityOrStr]
    count: NotRequired[int]
    items: NotRequired[list[CustomerRazorpayCustomersApiDict]]
