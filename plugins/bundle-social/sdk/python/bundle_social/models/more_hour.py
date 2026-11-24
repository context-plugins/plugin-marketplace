from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .period import Period, PeriodDict


class MoreHour(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    hours_type_id: Optional[str] = Field(default=UNSET, alias="hoursTypeId")
    periods: Optional[list[Period]] = UNSET


class MoreHourDict(TypedDict):
    hours_type_id: NotRequired[str]
    periods: NotRequired[list[PeriodDict]]
