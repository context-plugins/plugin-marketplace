from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .default import Default, DefaultDict
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr
from .enums.bank_account_status import BankAccountStatusOrStr
from .enums.bank_account_type import BankAccountTypeOrStr


class OrganizationBankAccountResponseDto(SdkBaseModel):
    """Bank account response."""

    id: str
    """BILL-generated ID of the bank account. The value begins with ``bac``."""

    archived: bool
    """Set as ``true`` if the bank account is archived"""

    status: Optional[BankAccountStatusOrStr] = UNSET
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that created the bank account. The value begins with ``006``."""

    routing_number: Optional[str] = Field(default=UNSET, alias="routingNumber")
    """Bank routing number"""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """Bank account number"""

    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    """Full name on bank account"""

    type_: Optional[BankAccountTypeOrStr] = Field(default=UNSET, alias="type")
    owner_type: Optional[BankAccountOwnerTypeOrStr] = Field(default=UNSET, alias="ownerType")
    bank_name: Optional[str] = Field(default=UNSET, alias="bankName")
    """Bank name"""

    access_to_admins: Optional[bool] = Field(default=UNSET, alias="accessToAdmins")
    """Set as ``true`` to enable access to all users with the ``ADMINISTRATOR`` user role"""

    default: Optional[Default] = UNSET
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""

    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    """BILL-generated ID of the chart of accounts for the bank account. The value begins with ``0ca``."""


class OrganizationBankAccountResponseDtoDict(TypedDict):
    id: str
    archived: bool
    status: NotRequired[BankAccountStatusOrStr]
    created_by: NotRequired[str]
    routing_number: NotRequired[str]
    account_number: NotRequired[str]
    name_on_account: NotRequired[str]
    type_: NotRequired[BankAccountTypeOrStr]
    owner_type: NotRequired[BankAccountOwnerTypeOrStr]
    bank_name: NotRequired[str]
    access_to_admins: NotRequired[bool]
    default: NotRequired[DefaultDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    chart_of_account_id: NotRequired[str]
