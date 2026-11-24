from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr
from .enums.bank_account_status import BankAccountStatusOrStr
from .enums.bank_account_type import BankAccountTypeOrStr


class CustomerBankAccountResponseDto(SdkBaseModel):
    """CustomerBankAccount response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the customer bank account. The value begins with ``cba``."""

    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    """Customer bank account name"""

    nickname: Optional[str] = UNSET
    """Customer bank account nickname"""

    routing_number: Optional[str] = Field(default=UNSET, alias="routingNumber")
    """Customer bank routing number"""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """Customer bank account number"""

    type_: Optional[BankAccountTypeOrStr] = Field(default=UNSET, alias="type")
    owner_type: Optional[BankAccountOwnerTypeOrStr] = Field(default=UNSET, alias="ownerType")
    status: Optional[BankAccountStatusOrStr] = UNSET
    archived: Optional[bool] = UNSET
    """Set as ``true`` if the customer bank account is archived"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class CustomerBankAccountResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name_on_account: NotRequired[str]
    nickname: NotRequired[str]
    routing_number: NotRequired[str]
    account_number: NotRequired[str]
    type_: NotRequired[BankAccountTypeOrStr]
    owner_type: NotRequired[BankAccountOwnerTypeOrStr]
    status: NotRequired[BankAccountStatusOrStr]
    archived: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
