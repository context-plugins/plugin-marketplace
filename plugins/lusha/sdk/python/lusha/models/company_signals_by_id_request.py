from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.signal1 import Signal1OrStr
from .filters1_lusha_signals_api import Filters1LushaSignalsApi, Filters1LushaSignalsApiDict


class CompanySignalsByIdRequest(SdkBaseModel):
    company_ids: list[int] = Field(alias="companyIds")
    signals: list[Signal1OrStr]
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    max_results_per_signal: Optional[int] = Field(default=UNSET, alias="maxResultsPerSignal")
    filters: Optional[Filters1LushaSignalsApi] = UNSET


class CompanySignalsByIdRequestDict(TypedDict):
    company_ids: list[int]
    signals: list[Signal1OrStr]
    start_date: NotRequired[Date]
    max_results_per_signal: NotRequired[int]
    filters: NotRequired[Filters1LushaSignalsApiDict]
