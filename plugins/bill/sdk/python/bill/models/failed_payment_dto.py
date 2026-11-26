from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FailedPaymentDto(SdkBaseModel):
    """Failed payment DTO."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Failed payment error code"""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Failed payment error message"""


class FailedPaymentDtoDict(TypedDict):
    bill_id: NotRequired[str]
    error_code: NotRequired[str]
    error_message: NotRequired[str]
