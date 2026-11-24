from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .balance1 import Balance1, Balance1Dict


class AccountBalanceData(SdkBaseModel):
    account_id: UUID = Field(alias="accountId")
    """Unique identifier for the account"""

    balance: Balance1
    """Balance verification result"""


class AccountBalanceDataDict(TypedDict):
    account_id: UUID
    balance: Balance1Dict
