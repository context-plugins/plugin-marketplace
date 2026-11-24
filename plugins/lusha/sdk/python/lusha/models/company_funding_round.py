from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyFundingRound(SdkBaseModel):
    currency: str
    round_amount: float = Field(alias="roundAmount")
    round_type: str = Field(alias="roundType")
    round_date: str = Field(alias="roundDate")


class CompanyFundingRoundDict(TypedDict):
    currency: str
    round_amount: float
    round_type: str
    round_date: str
