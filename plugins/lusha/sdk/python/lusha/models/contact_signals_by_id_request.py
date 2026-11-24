from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.signal import SignalOrStr


class ContactSignalsByIdRequest(SdkBaseModel):
    contact_ids: list[int] = Field(alias="contactIds")
    signals: list[SignalOrStr]
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    max_results_per_signal: Optional[int] = Field(default=UNSET, alias="maxResultsPerSignal")


class ContactSignalsByIdRequestDict(TypedDict):
    contact_ids: list[int]
    signals: list[SignalOrStr]
    start_date: NotRequired[Date]
    max_results_per_signal: NotRequired[int]
