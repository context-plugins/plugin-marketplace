from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.funding_account_type_request import FundingAccountTypeRequestOrStr


class FundingAccountRequest(SdkBaseModel):
    """Funding account details in Payments API."""

    type_: FundingAccountTypeRequestOrStr = Field(alias="type")
    id: Optional[str] = UNSET
    """BILL-generated ID of the selected payment funding type. For the ``WALLET`` type, the ``id`` is not required."""


class FundingAccountRequestDict(TypedDict):
    type_: FundingAccountTypeRequestOrStr
    id: NotRequired[str]
