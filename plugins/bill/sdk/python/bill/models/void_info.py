from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.void_status import VoidStatusOrStr
from .enums.void_type import VoidTypeOrStr


class VoidInfo(SdkBaseModel):
    """Void information for the Payments DTO."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the void payment request. The value begins with ``vrq``."""

    requested_by: Optional[str] = Field(default=UNSET, alias="requestedBy")
    """BILL-generated ID of the user that requested a void payment. The value begins with ``006``."""

    type_: Optional[VoidTypeOrStr] = Field(default=UNSET, alias="type")
    status: Optional[VoidStatusOrStr] = UNSET
    reason: Optional[str] = UNSET
    """Void payment request reason"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Void payment request created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Void payment request updated date and time"""


class VoidInfoDict(TypedDict):
    id: NotRequired[str]
    requested_by: NotRequired[str]
    type_: NotRequired[VoidTypeOrStr]
    status: NotRequired[VoidStatusOrStr]
    reason: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
