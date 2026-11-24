from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .trigger import Trigger, TriggerDict


class ListTriggersResponse(SdkBaseModel):
    """The response message for the ``ListTriggers`` method."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListTriggers`` to request the next page. If this is empty, then there are no
    more pages."""

    triggers: Optional[list[Trigger]] = UNSET
    """The requested triggers, up to the number specified in ``page_size``."""


class ListTriggersResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    next_page_token: NotRequired[str]
    triggers: NotRequired[list[TriggerDict]]
