from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CancelRenewalRequest(SdkBaseModel):
    """Request to cancel an order's renewal"""

    order_version: int = Field(alias="orderVersion")
    """The current version of the order (for optimistic locking)"""

    cancel_from_date: RFC3339DateTime = Field(alias="cancelFromDate")
    """The date from which the renewal should be cancelled (ISO 8601 format)"""


class CancelRenewalRequestDict(TypedDict):
    order_version: int
    cancel_from_date: RFC3339DateTime
