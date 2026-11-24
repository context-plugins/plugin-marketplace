from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FundingRound(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    amount: Optional[float] = UNSET
    date: Optional[str] = UNSET


class FundingRoundDict(TypedDict):
    type_: NotRequired[str]
    amount: NotRequired[float]
    date: NotRequired[str]
