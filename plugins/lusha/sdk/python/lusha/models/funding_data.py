from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .funding_data_round import FundingDataRound, FundingDataRoundDict


class FundingData(SdkBaseModel):
    total_rounds: float = Field(alias="totalRounds")
    total_rounds_amount: Optional[float] = Field(default=UNSET, alias="totalRoundsAmount")
    currency: str
    is_ipo: bool = Field(alias="isIpo")
    last_funding_event_date: Optional[str] = Field(default=UNSET, alias="lastFundingEventDate")
    last_funding_event_amount: Optional[float] = Field(default=UNSET, alias="lastFundingEventAmount")
    last_funding_event_name: Optional[str] = Field(default=UNSET, alias="lastFundingEventName")
    rounds: Optional[list[FundingDataRound]] = UNSET


class FundingDataDict(TypedDict):
    total_rounds: float
    total_rounds_amount: NotRequired[float]
    currency: str
    is_ipo: bool
    last_funding_event_date: NotRequired[str]
    last_funding_event_amount: NotRequired[float]
    last_funding_event_name: NotRequired[str]
    rounds: NotRequired[list[FundingDataRoundDict]]
