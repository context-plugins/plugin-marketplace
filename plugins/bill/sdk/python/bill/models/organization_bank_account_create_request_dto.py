from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr
from .enums.bank_account_type import BankAccountTypeOrStr


class OrganizationBankAccountCreateRequestDto(SdkBaseModel):
    """Create a bank account"""

    name_on_account: str = Field(alias="nameOnAccount")
    """Full name on bank account"""

    routing_number: Optional[str] = Field(default=UNSET, alias="routingNumber")
    """Bank routing number. This field is required."""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """Bank account number. This field is required."""

    type_: BankAccountTypeOrStr = Field(alias="type")
    owner_type: BankAccountOwnerTypeOrStr = Field(alias="ownerType")
    bank_name: str = Field(alias="bankName")
    """Bank name. Set this field as a nickname for your bank account."""

    access_to_admins: Optional[bool] = Field(default=UNSET, alias="accessToAdmins")
    """Set as ``true`` to enable access to all users with the ``ADMINISTRATOR`` user role"""

    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    """BILL-generated ID of the chart of accounts for the bank account. The value begins with ``0ca``."""


class OrganizationBankAccountCreateRequestDtoDict(TypedDict):
    name_on_account: str
    routing_number: NotRequired[str]
    account_number: NotRequired[str]
    type_: BankAccountTypeOrStr
    owner_type: BankAccountOwnerTypeOrStr
    bank_name: str
    access_to_admins: NotRequired[bool]
    chart_of_account_id: NotRequired[str]
