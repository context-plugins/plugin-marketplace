from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ticket_list_item import TicketListItem, TicketListItemDict


class TicketsList(SdkBaseModel):
    """List of support tickets."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Tickets rows count"""

    tickets: Optional[list[TicketListItem]] = UNSET


class TicketsListDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    tickets: NotRequired[list[TicketListItemDict]]
