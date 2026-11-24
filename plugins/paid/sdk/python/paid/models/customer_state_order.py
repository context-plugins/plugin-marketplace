from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.customer_state_order_state import CustomerStateOrderStateOrStr


class CustomerStateOrder(SdkBaseModel):
    id: str
    external_id: str | None = Field(alias="externalId")
    name: str
    state: CustomerStateOrderStateOrStr
    currency: str
    """ISO 4217 currency code, for example USD, EUR, or GBP."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: RFC3339DateTime | None = Field(alias="endDate")
    effective_until: RFC3339DateTime | None = Field(alias="effectiveUntil")
    """When the order stops applying; null means no scheduled end."""


class CustomerStateOrderDict(TypedDict):
    id: str
    external_id: str | None
    name: str
    state: CustomerStateOrderStateOrStr
    currency: str
    start_date: RFC3339DateTime
    end_date: RFC3339DateTime | None
    effective_until: RFC3339DateTime | None
