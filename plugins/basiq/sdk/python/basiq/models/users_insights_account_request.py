from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsersInsightsAccountRequest(SdkBaseModel):
    account_number: str = Field(alias="accountNumber")
    """The account number to search for insights"""

    account_type: Optional[str] = Field(default=UNSET, alias="accountType")
    """The type of account to search for insights"""


class UsersInsightsAccountRequestDict(TypedDict):
    account_number: str
    account_type: NotRequired[str]
