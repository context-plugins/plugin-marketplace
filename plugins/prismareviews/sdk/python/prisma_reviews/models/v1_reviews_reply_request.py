from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ReviewsReplyRequest(SdkBaseModel):
    text: str
    """Reply text, trimmed. 1 to 10,000 characters; the platform's own limit also applies (Google Business Profile 4,096
    bytes, App Store 5,970 characters, Google Play 350, eBay 80)."""


class V1ReviewsReplyRequestDict(TypedDict):
    text: str
