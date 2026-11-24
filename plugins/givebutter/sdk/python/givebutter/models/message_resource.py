from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MessageResource(SdkBaseModel):
    id: str
    status: str
    channel: str
    internal_name: str
    subject: Optional[str] = UNSET
    preheader: Optional[str] = UNSET
    body: str
    recipient_filters: str
    recipient_count: str
    sent_at: str
    sending_at: str
    created_at: str
    updated_at: str


class MessageResourceDict(TypedDict):
    id: str
    status: str
    channel: str
    internal_name: str
    subject: NotRequired[str]
    preheader: NotRequired[str]
    body: str
    recipient_filters: str
    recipient_count: str
    sent_at: str
    sending_at: str
    created_at: str
    updated_at: str
