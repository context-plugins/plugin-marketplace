from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.funding_account_type_response import FundingAccountTypeResponseOrStr


class FundingAccount1(SdkBaseModel):
    type_: FundingAccountTypeResponseOrStr = Field(alias="type")
    id: Optional[str] = UNSET
    """BILL-generated ID of the selected payment funding type. For the ``WALLET`` type, the ``id`` is not required."""


class FundingAccount1Dict(TypedDict):
    type_: FundingAccountTypeResponseOrStr
    id: NotRequired[str]
