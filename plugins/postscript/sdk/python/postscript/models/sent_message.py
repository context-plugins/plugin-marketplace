from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SentMessage(SdkBaseModel):
    body: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    credits_used: int = 0
    id: Optional[str] = UNSET
    media_url: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    shop_id: Optional[str] = UNSET
    subscriber_id: Optional[str] = UNSET


class SentMessageDict(TypedDict):
    body: NotRequired[str]
    created_at: NotRequired[str]
    credits_used: NotRequired[int]
    id: NotRequired[str]
    media_url: NotRequired[str]
    phone: NotRequired[str]
    shop_id: NotRequired[str]
    subscriber_id: NotRequired[str]
