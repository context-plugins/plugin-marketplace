from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.receivable_funding_account_type_response import ReceivableFundingAccountTypeResponseOrStr


class ReceivablesAccount(SdkBaseModel):
    """Disbursement Account object."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the received payment funding account"""

    type_: Optional[ReceivableFundingAccountTypeResponseOrStr] = Field(default=UNSET, alias="type")


class ReceivablesAccountDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[ReceivableFundingAccountTypeResponseOrStr]
