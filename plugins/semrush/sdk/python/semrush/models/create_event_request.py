from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_attachment import EventAttachment, EventAttachmentDict


class CreateEventRequest(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """type of event"""

    id: Optional[UUID] = UNSET
    """UUID, global event identifier, idempotency key; we suggest using V4 UUIDs"""

    user_id: Optional[int] = UNSET
    """Semrush's user ID"""

    data: Optional[str] = UNSET
    attachments: Optional[list[EventAttachment]] = UNSET
    """Additional files"""


class CreateEventRequestDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[UUID]
    user_id: NotRequired[int]
    data: NotRequired[str]
    attachments: NotRequired[list[EventAttachmentDict]]
