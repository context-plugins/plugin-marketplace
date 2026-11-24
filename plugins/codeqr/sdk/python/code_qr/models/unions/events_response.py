from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..click_event import ClickEvent, ClickEventDict
from ..lead_event import LeadEvent, LeadEventDict
from ..sale_event import SaleEvent, SaleEventDict

EventsResponse: TypeAlias = Annotated[
    Annotated[ClickEvent, Tag("click")] | Annotated[LeadEvent, Tag("lead")] | Annotated[SaleEvent, Tag("sale")],
    WireDiscriminator("event"),
]

EventsResponseDict: TypeAlias = ClickEventDict | LeadEventDict | SaleEventDict
