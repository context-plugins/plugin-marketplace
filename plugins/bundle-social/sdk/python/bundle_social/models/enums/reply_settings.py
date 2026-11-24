from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReplySettings(str, Enum):
    EVERYONE = "EVERYONE"
    FOLLOWING = "FOLLOWING"
    MENTIONED_USERS = "MENTIONED_USERS"
    SUBSCRIBERS = "SUBSCRIBERS"
    VERIFIED = "VERIFIED"

    __str__ = str.__str__


ReplySettingsOrStr: TypeAlias = Annotated[ReplySettings | str, open_enum_validator(ReplySettings)]
