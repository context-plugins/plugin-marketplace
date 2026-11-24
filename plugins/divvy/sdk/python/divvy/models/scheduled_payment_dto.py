from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScheduledPaymentDto(SdkBaseModel):
    """Scheduled payment DTO."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""


class ScheduledPaymentDtoDict(TypedDict):
    bill_id: NotRequired[str]
