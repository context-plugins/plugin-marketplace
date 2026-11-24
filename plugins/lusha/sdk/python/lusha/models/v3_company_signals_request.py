from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.signal_type1 import SignalType1OrStr
from .filters_lusha_signals_api import FiltersLushaSignalsApi, FiltersLushaSignalsApiDict


class V3CompanySignalsRequest(SdkBaseModel):
    ids: list[str]
    signal_types: list[SignalType1OrStr] = Field(alias="signalTypes")
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """For linkedinActivityIntent, results are limited to a trailing 90-day window regardless of the value passed (legal
    requirement). Other signal types are unaffected."""

    max_results_per_signal: Optional[int] = Field(default=UNSET, alias="maxResultsPerSignal")
    """For linkedinActivityIntent, results are capped at 50 per company regardless of the value passed. Other signal
    types use the requested value as-is (1-100)."""

    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, these companies are also added to this table (if not already present) and the Signals
    column is populated. See the Tables API."""

    filters: Optional[FiltersLushaSignalsApi] = UNSET


class V3CompanySignalsRequestDict(TypedDict):
    ids: list[str]
    signal_types: list[SignalType1OrStr]
    start_date: NotRequired[Date]
    max_results_per_signal: NotRequired[int]
    table_id: NotRequired[str]
    filters: NotRequired[FiltersLushaSignalsApiDict]
