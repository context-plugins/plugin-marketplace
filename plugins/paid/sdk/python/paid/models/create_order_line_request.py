from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .create_order_line_attribute_request import CreateOrderLineAttributeRequest, CreateOrderLineAttributeRequestDict
from .enums.writable_order_line_type import WritableOrderLineTypeOrStr


class CreateOrderLineRequest(SdkBaseModel):
    """When override ``attributes`` are omitted, the order will match the base product (or default plan if plans are
    configured)."""

    product_id: str = Field(alias="productId")
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    attributes: Optional[list[CreateOrderLineAttributeRequest]] = UNSET
    line_type: Optional[WritableOrderLineTypeOrStr] = Field(default=UNSET, alias="lineType")
    """Defaults to STANDARD. Set to CREDIT for customer-authored, term-bound discount lines whose amounts contribute
    negatively to invoice aggregates."""


class CreateOrderLineRequestDict(TypedDict):
    product_id: str
    name: NotRequired[str]
    description: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
    attributes: NotRequired[list[CreateOrderLineAttributeRequestDict]]
    line_type: NotRequired[WritableOrderLineTypeOrStr]
