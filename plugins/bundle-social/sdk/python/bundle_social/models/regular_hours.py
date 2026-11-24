from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .period import Period, PeriodDict


class RegularHours(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    periods: Optional[list[Period]] = UNSET


class RegularHoursDict(TypedDict):
    periods: NotRequired[list[PeriodDict]]
