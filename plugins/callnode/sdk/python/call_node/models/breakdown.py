from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Breakdown(SdkBaseModel):
    setup_fee: Optional[float] = Field(default=UNSET, alias="setupFee")
    monthly_fee: Optional[float] = Field(default=UNSET, alias="monthlyFee")
    total: Optional[float] = UNSET


class BreakdownDict(TypedDict):
    setup_fee: NotRequired[float]
    monthly_fee: NotRequired[float]
    total: NotRequired[float]
