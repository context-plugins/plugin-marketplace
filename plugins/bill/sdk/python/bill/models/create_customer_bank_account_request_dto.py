from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr
from .enums.bank_account_type import BankAccountTypeOrStr


class CreateCustomerBankAccountRequestDto(SdkBaseModel):
    """Create a customer bank account"""

    name_on_account: str = Field(alias="nameOnAccount")
    """Customer bank account name"""

    nickname: Optional[str] = UNSET
    """Customer bank account nickname"""

    routing_number: str = Field(alias="routingNumber")
    """Customer bank routing number"""

    account_number: str = Field(alias="accountNumber")
    """Customer bank account number"""

    type_: BankAccountTypeOrStr = Field(alias="type")
    owner_type: BankAccountOwnerTypeOrStr = Field(alias="ownerType")


class CreateCustomerBankAccountRequestDtoDict(TypedDict):
    name_on_account: str
    nickname: NotRequired[str]
    routing_number: str
    account_number: str
    type_: BankAccountTypeOrStr
    owner_type: BankAccountOwnerTypeOrStr
