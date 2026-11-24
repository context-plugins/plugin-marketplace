from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CustomerContactResponseDto(SdkBaseModel):
    """CustomerContact response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the customer contact. The value begins with ``cpu``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the customer contact is archived."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """Customer first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Customer last name"""

    email: Optional[str] = UNSET
    """Customer email address"""

    phone: Optional[str] = UNSET
    """Customer phone number"""

    alt_phone: Optional[str] = Field(default=UNSET, alias="altPhone")
    """Customer alternate phone number"""

    alternate_email: Optional[str] = Field(default=UNSET, alias="alternateEmail")
    """Customer alternate email address"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class CustomerContactResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    customer_id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    phone: NotRequired[str]
    alt_phone: NotRequired[str]
    alternate_email: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
