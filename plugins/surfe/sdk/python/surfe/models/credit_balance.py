from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditBalance(SdkBaseModel):
    email_credits: Optional[int] = Field(default=UNSET, alias="emailCredits")
    mobile_credits: Optional[int] = Field(default=UNSET, alias="mobileCredits")
    search_credits: Optional[int] = Field(default=UNSET, alias="searchCredits")


class CreditBalanceDict(TypedDict):
    email_credits: NotRequired[int]
    mobile_credits: NotRequired[int]
    search_credits: NotRequired[int]
