from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.signal_type import SignalTypeOrStr


class V3ContactSignalsRequest(SdkBaseModel):
    ids: list[str]
    signal_types: list[SignalTypeOrStr] = Field(alias="signalTypes")
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    max_results_per_signal: Optional[int] = Field(default=UNSET, alias="maxResultsPerSignal")
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, these contacts are also added to this table (if not already present) and the Signals
    column is populated. See the Tables API."""


class V3ContactSignalsRequestDict(TypedDict):
    ids: list[str]
    signal_types: list[SignalTypeOrStr]
    start_date: NotRequired[Date]
    max_results_per_signal: NotRequired[int]
    table_id: NotRequired[str]
