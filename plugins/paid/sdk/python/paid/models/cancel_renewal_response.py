from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CancelRenewalResponse(SdkBaseModel):
    """Response after successfully cancelling an order's renewal"""

    order_id: UUID = Field(alias="orderId")
    """The ID of the order"""

    amendment_id: UUID = Field(alias="amendmentId")
    """The ID of the amendment record"""

    version: int
    """The new version of the order after the amendment"""

    end_date: RFC3339DateTime = Field(alias="endDate")
    """The new end date of the order"""

    effective_date: RFC3339DateTime = Field(alias="effectiveDate")
    """The effective date of the cancellation"""


class CancelRenewalResponseDict(TypedDict):
    order_id: UUID
    amendment_id: UUID
    version: int
    end_date: RFC3339DateTime
    effective_date: RFC3339DateTime
