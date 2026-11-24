from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .event_domain import EventDomain, EventDomainDict


class EventsDomainsResponse(SdkBaseModel):
    data: list[EventDomain]


class EventsDomainsResponseDict(TypedDict):
    data: list[EventDomainDict]
