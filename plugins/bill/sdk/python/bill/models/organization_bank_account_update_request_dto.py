from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .default import Default, DefaultDict
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr


class OrganizationBankAccountUpdateRequestDto(SdkBaseModel):
    """Update a bank account"""

    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    """Full name on bank account"""

    owner_type: Optional[BankAccountOwnerTypeOrStr] = Field(default=UNSET, alias="ownerType")
    bank_name: Optional[str] = Field(default=UNSET, alias="bankName")
    """Bank name. Set this field as a nickname for your bank account."""

    access_to_admins: Optional[bool] = Field(default=UNSET, alias="accessToAdmins")
    """Set as ``true`` to enable access to all users with the ``ADMINISTRATOR`` user role"""

    default: Optional[Default] = UNSET
    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    """BILL-generated ID of the chart of accounts for the organization bank account. The value begins with ``0ca``."""


class OrganizationBankAccountUpdateRequestDtoDict(TypedDict):
    name_on_account: NotRequired[str]
    owner_type: NotRequired[BankAccountOwnerTypeOrStr]
    bank_name: NotRequired[str]
    access_to_admins: NotRequired[bool]
    default: NotRequired[DefaultDict]
    chart_of_account_id: NotRequired[str]
