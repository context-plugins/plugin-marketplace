from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sent_message import SentMessage, SentMessageDict


class ApiV2MessageRequestsResponse(SdkBaseModel):
    body: Optional[str] = UNSET
    category: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    id: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    scheduled_at: Optional[str] = UNSET
    sent_message: Optional[SentMessage] = UNSET
    status: Optional[str] = UNSET
    status_code: int = 0
    subscriber_id: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET


class ApiV2MessageRequestsResponseDict(TypedDict):
    body: NotRequired[str]
    category: NotRequired[str]
    created_at: NotRequired[str]
    id: NotRequired[str]
    phone: NotRequired[str]
    scheduled_at: NotRequired[str]
    sent_message: NotRequired[SentMessageDict]
    status: NotRequired[str]
    status_code: NotRequired[int]
    subscriber_id: NotRequired[str]
    updated_at: NotRequired[str]
