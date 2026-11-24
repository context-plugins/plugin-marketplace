from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .conversation_bundle_social_conversation_api import (
    ConversationBundleSocialConversationApi,
    ConversationBundleSocialConversationApiDict,
)
from .message_bundle_social_conversation_api import (
    MessageBundleSocialConversationApi,
    MessageBundleSocialConversationApiDict,
)


class ApiV1ConversationsMessagesReactionResponse(SdkBaseModel):
    conversation: ConversationBundleSocialConversationApi
    message: MessageBundleSocialConversationApi
    conflict: bool = False


class ApiV1ConversationsMessagesReactionResponseDict(TypedDict):
    conversation: ConversationBundleSocialConversationApiDict
    message: MessageBundleSocialConversationApiDict
    conflict: NotRequired[bool]
