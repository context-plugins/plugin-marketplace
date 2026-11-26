from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.receivable_funding_account_type_request_dto import ReceivableFundingAccountTypeRequestDtoOrStr


class FundingAccount2(SdkBaseModel):
    id: str
    """BILL-generated ID of the customer funding account. For a customer bank account, the value begins with ``cba``."""

    type_: ReceivableFundingAccountTypeRequestDtoOrStr = Field(alias="type")


class FundingAccount2Dict(TypedDict):
    id: str
    type_: ReceivableFundingAccountTypeRequestDtoOrStr
