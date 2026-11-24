from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action4 import Action4OrStr
from .enums.reaction2 import Reaction2OrStr


class ApiV1ConversationsMessagesReactionRequest(SdkBaseModel):
    action: Action4OrStr
    reaction: Optional[Reaction2OrStr] = UNSET


class ApiV1ConversationsMessagesReactionRequestDict(TypedDict):
    action: Action4OrStr
    reaction: NotRequired[Reaction2OrStr]
