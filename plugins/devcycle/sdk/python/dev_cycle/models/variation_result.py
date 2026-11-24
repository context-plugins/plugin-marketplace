from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VariationResult(SdkBaseModel):
    key: str
    name: str
    numerator: float
    denominator: float
    rate: float
    avg_value: Optional[float] = Field(default=UNSET, alias="avgValue")
    total_value: Optional[float] = Field(default=UNSET, alias="totalValue")
    stdev: Optional[float] = UNSET
    percent_difference: float | None = Field(alias="percentDifference")
    chance_to_beat_control: float | None = Field(alias="chanceToBeatControl")


class VariationResultDict(TypedDict):
    key: str
    name: str
    numerator: float
    denominator: float
    rate: float
    avg_value: NotRequired[float]
    total_value: NotRequired[float]
    stdev: NotRequired[float]
    percent_difference: float | None
    chance_to_beat_control: float | None
