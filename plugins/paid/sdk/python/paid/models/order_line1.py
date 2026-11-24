from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.order_line_type import OrderLineTypeOrStr


class OrderLine1(SdkBaseModel):
    id: str
    product_id: str = Field(alias="productId")
    name: str
    description: str | None
    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: RFC3339DateTime | None = Field(alias="endDate")
    line_type: OrderLineTypeOrStr = Field(alias="lineType")


class OrderLine1Dict(TypedDict):
    id: str
    product_id: str
    name: str
    description: str | None
    start_date: RFC3339DateTime
    end_date: RFC3339DateTime | None
    line_type: OrderLineTypeOrStr
