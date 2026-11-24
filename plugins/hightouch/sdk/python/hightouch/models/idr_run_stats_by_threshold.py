from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkTypedExtrasModel
from .idr_run_stats import IdrRunStats, IdrRunStatsDict


class IdrRunStatsByThreshold(SdkTypedExtrasModel):
    probabilistic_loose: Optional[IdrRunStats] = Field(default=UNSET, alias="probabilistic-loose")
    probabilistic_strict: Optional[IdrRunStats] = Field(default=UNSET, alias="probabilistic-strict")
    deterministic: Optional[IdrRunStats] = UNSET
    __pydantic_extra__: dict[str, IdrRunStats] = Field(init=False)


class IdrRunStatsByThresholdDict(TypedDict, extra_items=IdrRunStatsDict):  # type: ignore[call-arg, unused-ignore]
    probabilistic_loose: NotRequired[IdrRunStatsDict]
    probabilistic_strict: NotRequired[IdrRunStatsDict]
    deterministic: NotRequired[IdrRunStatsDict]
