from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Summary(SdkBaseModel):
    total: int
    successful: int
    failed: int
    total_cost: int = Field(alias="totalCost")


class SummaryDict(TypedDict):
    total: int
    successful: int
    failed: int
    total_cost: int
