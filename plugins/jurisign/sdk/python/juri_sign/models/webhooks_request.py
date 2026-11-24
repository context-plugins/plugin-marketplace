from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.event import EventOrStr


class WebhooksRequest(SdkBaseModel):
    url: str
    """The HTTPS URL to receive webhook payloads"""

    events: list[EventOrStr]
    """Events to subscribe to"""


class WebhooksRequestDict(TypedDict):
    url: str
    events: list[EventOrStr]
