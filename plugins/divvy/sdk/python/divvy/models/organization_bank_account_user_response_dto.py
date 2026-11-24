from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.organization_bank_account_user_status import OrganizationBankAccountUserStatusOrStr


class OrganizationBankAccountUserResponseDto(SdkBaseModel):
    """Bank account user response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the bank account user. The value begins with ``bau``."""

    bank_account_id: Optional[str] = Field(default=UNSET, alias="bankAccountId")
    """BILL-generated ID of the bank account. The value begins with ``bac``."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user. The value begins with ``006``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the bank account user is archived"""

    verification_status: Optional[OrganizationBankAccountUserStatusOrStr] = Field(
        default=UNSET, alias="verificationStatus"
    )
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class OrganizationBankAccountUserResponseDtoDict(TypedDict):
    id: NotRequired[str]
    bank_account_id: NotRequired[str]
    user_id: NotRequired[str]
    archived: NotRequired[bool]
    verification_status: NotRequired[OrganizationBankAccountUserStatusOrStr]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
