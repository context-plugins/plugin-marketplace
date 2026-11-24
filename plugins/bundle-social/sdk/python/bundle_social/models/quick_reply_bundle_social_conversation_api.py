from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuickReplyBundleSocialConversationApi(SdkBaseModel):
    id: Optional[str] = UNSET
    label: str
    payload: str


class QuickReplyBundleSocialConversationApiDict(TypedDict):
    id: NotRequired[str]
    label: str
    payload: str
