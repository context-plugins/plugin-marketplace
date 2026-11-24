from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BankAccount1(SdkBaseModel):
    name: Optional[str] = UNSET
    ifsc: Optional[str] = UNSET
    account_number: Optional[str] = UNSET


class BankAccount1Dict(TypedDict):
    name: NotRequired[str]
    ifsc: NotRequired[str]
    account_number: NotRequired[str]
