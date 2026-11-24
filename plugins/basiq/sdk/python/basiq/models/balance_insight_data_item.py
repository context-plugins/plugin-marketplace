from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .balance import Balance, BalanceDict


class BalanceInsightDataItem(SdkBaseModel):
    account_id: UUID = Field(alias="accountId")
    """The account identifier being verified"""

    balance: Optional[Balance] = UNSET
    """Balance verification result"""


class BalanceInsightDataItemDict(TypedDict):
    account_id: UUID
    balance: NotRequired[BalanceDict]
