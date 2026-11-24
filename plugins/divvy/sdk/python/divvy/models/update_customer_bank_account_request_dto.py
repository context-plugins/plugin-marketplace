from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr


class UpdateCustomerBankAccountRequestDto(SdkBaseModel):
    """Update a customer bank account"""

    nickname: Optional[str] = UNSET
    """Customer bank account nickname"""

    owner_type: Optional[BankAccountOwnerTypeOrStr] = Field(default=UNSET, alias="ownerType")


class UpdateCustomerBankAccountRequestDtoDict(TypedDict):
    nickname: NotRequired[str]
    owner_type: NotRequired[BankAccountOwnerTypeOrStr]
