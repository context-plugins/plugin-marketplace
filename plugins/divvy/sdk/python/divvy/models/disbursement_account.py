from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisbursementAccount(SdkBaseModel):
    """Disbursement account details."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")


class DisbursementAccountDict(TypedDict):
    type_: NotRequired[str]
    account_number: NotRequired[str]
