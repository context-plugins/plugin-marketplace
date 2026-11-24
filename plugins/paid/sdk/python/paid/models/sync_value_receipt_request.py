from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .sync_value_receipt_request_product import SyncValueReceiptRequestProduct, SyncValueReceiptRequestProductDict


class SyncValueReceiptRequest(SdkBaseModel):
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """Mutually exclusive with externalCustomerId. Exactly one is required."""

    external_customer_id: Optional[str] = Field(default=UNSET, alias="externalCustomerId")
    """Mutually exclusive with customerId. Exactly one is required."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: RFC3339DateTime = Field(alias="endDate")
    product: Optional[SyncValueReceiptRequestProduct] = UNSET
    """Mutually exclusive with orderId. Provide at most one."""

    order_id: Optional[str] = Field(default=UNSET, alias="orderId")
    """Mutually exclusive with product. Provide at most one."""


class SyncValueReceiptRequestDict(TypedDict):
    customer_id: NotRequired[str]
    external_customer_id: NotRequired[str]
    start_date: RFC3339DateTime
    end_date: RFC3339DateTime
    product: NotRequired[SyncValueReceiptRequestProductDict]
    order_id: NotRequired[str]
