from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .overall_percentage import OverallPercentage, OverallPercentageDict


class Summary1(SdkBaseModel):
    transaction_count: Optional[int] = Field(default=UNSET, alias="transactionCount")
    """Total number of transactions in the subgroup"""

    overall_percentage: Optional[OverallPercentage] = Field(default=UNSET, alias="overallPercentage")


class Summary1Dict(TypedDict):
    transaction_count: NotRequired[int]
    overall_percentage: NotRequired[OverallPercentageDict]
