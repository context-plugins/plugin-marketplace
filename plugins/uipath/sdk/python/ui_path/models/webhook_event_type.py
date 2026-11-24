from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhookEventType(SdkBaseModel):
    """An available event type that can be subscribed to via webhooks"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Human-readable display name of the event type"""

    event_type: Optional[str] = Field(default=UNSET, alias="EventType")
    """Machine-readable event type identifier (e.g., job.faulted, queueItem.transactionCompleted)"""


class WebhookEventTypeDict(TypedDict):
    name: NotRequired[str]
    event_type: NotRequired[str]
