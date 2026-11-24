from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .attachment import Attachment, AttachmentDict
from .context import Context, ContextDict
from .enums.status13 import Status13OrStr
from .message import Message, MessageDict


class ThreadDeliverdDevReportsApi(SdkBaseModel):
    thread_id: UUID = Field(alias="threadId")
    status: Status13OrStr
    anchor_status: str = Field(alias="anchorStatus")
    created_on_version: float | None = Field(alias="createdOnVersion")
    current_version: float | None = Field(alias="currentVersion")
    quote: str | None
    context: Context
    messages: list[Message]
    attachments: list[Attachment]


class ThreadDeliverdDevReportsApiDict(TypedDict):
    thread_id: UUID
    status: Status13OrStr
    anchor_status: str
    created_on_version: float | None
    current_version: float | None
    quote: str | None
    context: ContextDict
    messages: list[MessageDict]
    attachments: list[AttachmentDict]
