from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .event_contract import EventContract, EventContractDict


class EventsContractsResponse(SdkBaseModel):
    data: list[EventContract]


class EventsContractsResponseDict(TypedDict):
    data: list[EventContractDict]
