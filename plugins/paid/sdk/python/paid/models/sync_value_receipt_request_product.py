from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SyncValueReceiptRequestProduct(SdkBaseModel):
    """Mutually exclusive with orderId. Provide at most one."""

    product_id: str = Field(alias="productId")
    currency: Optional[str] = UNSET


class SyncValueReceiptRequestProductDict(TypedDict):
    product_id: str
    currency: NotRequired[str]
