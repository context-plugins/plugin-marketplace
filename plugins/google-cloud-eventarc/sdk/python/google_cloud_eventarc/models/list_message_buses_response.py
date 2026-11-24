from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_bus import MessageBus, MessageBusDict


class ListMessageBusesResponse(SdkBaseModel):
    """The response message for the ``ListMessageBuses`` method."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListMessageBuses`` to request the next page. If this is empty, then there are
    no more pages."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""

    message_buses: Optional[list[MessageBus]] = Field(default=UNSET, alias="messageBuses")
    """The requested message buses, up to the number specified in ``page_size``."""


class ListMessageBusesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
    message_buses: NotRequired[list[MessageBusDict]]
