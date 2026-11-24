from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.role_type import RoleTypeOrStr


class UserResponseDto(SdkBaseModel):
    """Users response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the user"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the user"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """User first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """User last name"""

    email: Optional[str] = UNSET
    """User email address"""

    receipt_email: Optional[str] = Field(default=UNSET, alias="receiptEmail")
    """Receipt categorization email address"""

    retired: Optional[bool] = UNSET
    """Set as ``true`` if the user is deleted"""

    use_company_mailing_address: Optional[bool] = Field(default=UNSET, alias="useCompanyMailingAddress")
    """Set as ``true`` if the company email address is set for the user"""

    sms_opt_in: Optional[bool] = Field(default=UNSET, alias="smsOptIn")
    """Set as ``true`` if SMS notifications are enabled for the user"""

    has_date_of_birth: Optional[bool] = Field(default=UNSET, alias="hasDateOfBirth")
    """Set as ``true`` if the user date of birth is set"""

    role: Optional[RoleTypeOrStr] = UNSET
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """User phone number"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """User created date and time"""


class UserResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    receipt_email: NotRequired[str]
    retired: NotRequired[bool]
    use_company_mailing_address: NotRequired[bool]
    sms_opt_in: NotRequired[bool]
    has_date_of_birth: NotRequired[bool]
    role: NotRequired[RoleTypeOrStr]
    phone_number: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
