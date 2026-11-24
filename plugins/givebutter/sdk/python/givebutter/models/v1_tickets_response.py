from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta import Meta, MetaDict
from .ticket_resource import TicketResource, TicketResourceDict


class V1TicketsResponse(SdkBaseModel):
    data: list[TicketResource]
    links: Links
    meta: Meta


class V1TicketsResponseDict(TypedDict):
    data: list[TicketResourceDict]
    links: LinksDict
    meta: MetaDict
