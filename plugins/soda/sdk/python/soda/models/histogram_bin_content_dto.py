from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HistogramBinContentDto(SdkBaseModel):
    count: int
    lower_bound: float = Field(alias="lowerBound")
    upper_bound: float = Field(alias="upperBound")


class HistogramBinContentDtoDict(TypedDict):
    count: int
    lower_bound: float
    upper_bound: float
