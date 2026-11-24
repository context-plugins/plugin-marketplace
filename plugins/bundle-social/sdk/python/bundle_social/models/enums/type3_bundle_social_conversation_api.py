from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3BundleSocialConversationApi(str, Enum):
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    AUDIO = "AUDIO"
    FILE = "FILE"
    POST = "POST"
    STORY_MENTION = "STORY_MENTION"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


Type3BundleSocialConversationApiOrStr: TypeAlias = Annotated[
    Type3BundleSocialConversationApi | str, open_enum_validator(Type3BundleSocialConversationApi)
]
