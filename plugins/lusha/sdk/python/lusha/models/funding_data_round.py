from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FundingDataRound(SdkBaseModel):
    announced_on: Optional[str] = Field(default=UNSET, alias="announcedOn")
    lead_investors: Optional[list[str]] = Field(default=UNSET, alias="leadInvestors")
    currency: str
    title: str
    money_raised: Optional[float] = Field(default=UNSET, alias="moneyRaised")


class FundingDataRoundDict(TypedDict):
    announced_on: NotRequired[str]
    lead_investors: NotRequired[list[str]]
    currency: str
    title: str
    money_raised: NotRequired[float]
