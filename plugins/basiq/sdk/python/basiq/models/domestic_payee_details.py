from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict
from .enums.payee_account_u_type import PayeeAccountUTypeOrStr
from .pay_id import PayId, PayIdDict


class DomesticPayeeDetails(SdkBaseModel):
    """Details specific to domestic payees."""

    payee_account_u_type: Optional[PayeeAccountUTypeOrStr] = Field(default=UNSET, alias="payeeAccountUType")
    """The type of domestic payee account."""

    account: Optional[Account] = UNSET
    """Bank account details for domestic payee."""

    pay_id: Optional[PayId] = Field(default=UNSET, alias="payId")
    """PayID details for domestic payee."""


class DomesticPayeeDetailsDict(TypedDict):
    payee_account_u_type: NotRequired[PayeeAccountUTypeOrStr]
    account: NotRequired[AccountDict]
    pay_id: NotRequired[PayIdDict]
