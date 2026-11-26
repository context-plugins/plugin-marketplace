from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.receivable_funding_account_type_request_dto import ReceivableFundingAccountTypeRequestDtoOrStr


class FundingAccountRequestDto(SdkBaseModel):
    """Funding Account object."""

    id: str
    """BILL-generated ID of the customer funding account. For a customer bank account, the value begins with ``cba``."""

    type_: ReceivableFundingAccountTypeRequestDtoOrStr = Field(alias="type")


class FundingAccountRequestDtoDict(TypedDict):
    id: str
    type_: ReceivableFundingAccountTypeRequestDtoOrStr
