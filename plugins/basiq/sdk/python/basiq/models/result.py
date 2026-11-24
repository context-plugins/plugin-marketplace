from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.range import RangeOrStr


class Result(SdkBaseModel):
    """Result containing the expense ratio range"""

    range_: RangeOrStr = Field(alias="range")
    """Expense-to-income ratio range. Calculated as: expense / ME040 (Average Monthly Credit). 'Income Exceeded'
    indicates ratio greater than 100%."""


class ResultDict(TypedDict):
    range_: RangeOrStr
