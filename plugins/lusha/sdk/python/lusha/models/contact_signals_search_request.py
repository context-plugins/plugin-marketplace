from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .contact_lusha_signals_api import ContactLushaSignalsApi, ContactLushaSignalsApiDict
from .enums.signal import SignalOrStr


class ContactSignalsSearchRequest(SdkBaseModel):
    contacts: list[ContactLushaSignalsApi]
    signals: list[SignalOrStr]
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    max_results_per_signal: Optional[int] = Field(default=UNSET, alias="maxResultsPerSignal")


class ContactSignalsSearchRequestDict(TypedDict):
    contacts: list[ContactLushaSignalsApiDict]
    signals: list[SignalOrStr]
    start_date: NotRequired[Date]
    max_results_per_signal: NotRequired[int]
