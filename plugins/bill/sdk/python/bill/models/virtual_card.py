from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class VirtualCard(SdkBaseModel):
    """Vendor virtual card enrollment information."""

    status: Optional[str] = UNSET
    remit_email: Optional[str] = Field(default=UNSET, alias="remitEmail")
    enroll_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="enrollDate")
    decline_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="declineDate")
    alternate_pay_by_type: Optional[str] = Field(default=UNSET, alias="alternatePayByType")


class VirtualCardDict(TypedDict):
    status: NotRequired[str]
    remit_email: NotRequired[str]
    enroll_date: NotRequired[RFC3339DateTime]
    decline_date: NotRequired[RFC3339DateTime]
    alternate_pay_by_type: NotRequired[str]
