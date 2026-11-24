from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_funding_round import CompanyFundingRound, CompanyFundingRoundDict


class CompanyFunding1(SdkBaseModel):
    """Details regarding the company's funding activities."""

    rounds: Optional[list[CompanyFundingRound]] = UNSET
    total_rounds: float = Field(alias="totalRounds")
    total_rounds_amount: Optional[float] = Field(default=UNSET, alias="totalRoundsAmount")
    currency: str
    is_ipo: bool = Field(alias="isIpo")
    last_round_type: Optional[str] = Field(default=UNSET, alias="lastRoundType")
    last_round_amount: Optional[float] = Field(default=UNSET, alias="lastRoundAmount")
    last_round_date: Optional[str] = Field(default=UNSET, alias="lastRoundDate")


class CompanyFunding1Dict(TypedDict):
    rounds: NotRequired[list[CompanyFundingRoundDict]]
    total_rounds: float
    total_rounds_amount: NotRequired[float]
    currency: str
    is_ipo: bool
    last_round_type: NotRequired[str]
    last_round_amount: NotRequired[float]
    last_round_date: NotRequired[str]
