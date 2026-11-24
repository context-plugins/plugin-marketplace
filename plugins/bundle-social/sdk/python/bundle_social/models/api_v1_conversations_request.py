from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_bundle_social_conversation_api import StatusBundleSocialConversationApiOrStr


class ApiV1ConversationsRequest(SdkBaseModel):
    status: StatusBundleSocialConversationApiOrStr


class ApiV1ConversationsRequestDict(TypedDict):
    status: StatusBundleSocialConversationApiOrStr
