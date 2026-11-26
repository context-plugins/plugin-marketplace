from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PaymentTermResponseDto(SdkBaseModel):
    """PaymentTerm response DTO."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the payment term. The value begins with ``00p``."""

    name: Optional[str] = UNSET
    """Payment term name"""

    days_due: Optional[int] = Field(default=UNSET, alias="daysDue")
    """Number of days until payment is due"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class PaymentTermResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    days_due: NotRequired[int]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
