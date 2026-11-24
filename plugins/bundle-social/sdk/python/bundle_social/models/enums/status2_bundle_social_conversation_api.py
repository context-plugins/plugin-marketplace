from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2BundleSocialConversationApi(str, Enum):
    SYNCED = "SYNCED"
    SYNC_FAILED = "SYNC_FAILED"
    UNSUPPORTED = "UNSUPPORTED"

    __str__ = str.__str__


Status2BundleSocialConversationApiOrStr: TypeAlias = Annotated[
    Status2BundleSocialConversationApi | str, open_enum_validator(Status2BundleSocialConversationApi)
]
