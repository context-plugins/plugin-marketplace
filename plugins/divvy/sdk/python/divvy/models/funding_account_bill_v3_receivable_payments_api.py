from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.receivable_funding_account_type_response import ReceivableFundingAccountTypeResponseOrStr


class FundingAccountBillV3ReceivablePaymentsApi(SdkBaseModel):
    """Funding Account object."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the customer funding account"""

    type_: Optional[ReceivableFundingAccountTypeResponseOrStr] = Field(default=UNSET, alias="type")


class FundingAccountBillV3ReceivablePaymentsApiDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[ReceivableFundingAccountTypeResponseOrStr]
