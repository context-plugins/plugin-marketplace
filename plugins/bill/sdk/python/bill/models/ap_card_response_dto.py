from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.ap_card_status import ApCardStatusOrStr


class ApCardResponseDto(SdkBaseModel):
    """AP Card response DTO."""

    id: str
    """BILL-generated ID of the AP Card. The value begins with ``dva``."""

    status: Optional[ApCardStatusOrStr] = UNSET
    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    """Full name on the AP Card"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""

    balance: Optional[float] = UNSET
    """AP Card available balance"""

    limit: Optional[float] = UNSET
    """AP Card spending limit"""


class ApCardResponseDtoDict(TypedDict):
    id: str
    status: NotRequired[ApCardStatusOrStr]
    name_on_account: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    balance: NotRequired[float]
    limit: NotRequired[float]
