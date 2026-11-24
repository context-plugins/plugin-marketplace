from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.receivable_funding_account_type_response import ReceivableFundingAccountTypeResponseOrStr


class FundingAccount3(SdkBaseModel):
    id: Optional[str] = UNSET
    """BILL-generated ID of the customer funding account"""

    type_: Optional[ReceivableFundingAccountTypeResponseOrStr] = Field(default=UNSET, alias="type")


class FundingAccount3Dict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[ReceivableFundingAccountTypeResponseOrStr]
