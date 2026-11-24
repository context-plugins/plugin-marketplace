from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialConversationApi(str, Enum):
    OPEN = "OPEN"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


StatusBundleSocialConversationApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialConversationApi | str, open_enum_validator(StatusBundleSocialConversationApi)
]
