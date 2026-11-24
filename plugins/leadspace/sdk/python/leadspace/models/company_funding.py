from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyFunding(SdkBaseModel):
    last_round_investor_count: Optional[float] = UNSET
    total_rounds_count: Optional[float] = UNSET
    last_round_date: Optional[str] = UNSET
    last_round_money_raised: Optional[str] = UNSET
    last_round_type: Optional[str] = UNSET
    cb_url: Optional[str] = UNSET


class CompanyFundingDict(TypedDict):
    last_round_investor_count: NotRequired[float]
    total_rounds_count: NotRequired[float]
    last_round_date: NotRequired[str]
    last_round_money_raised: NotRequired[str]
    last_round_type: NotRequired[str]
    cb_url: NotRequired[str]
