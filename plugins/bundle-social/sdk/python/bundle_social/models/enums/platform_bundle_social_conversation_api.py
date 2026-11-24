from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlatformBundleSocialConversationApi(str, Enum):
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"

    __str__ = str.__str__


PlatformBundleSocialConversationApiOrStr: TypeAlias = Annotated[
    PlatformBundleSocialConversationApi | str, open_enum_validator(PlatformBundleSocialConversationApi)
]
