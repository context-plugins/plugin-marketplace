from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type81(str, Enum):
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    AUDIO = "AUDIO"
    FILE = "FILE"
    POST = "POST"
    STORY_MENTION = "STORY_MENTION"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


Type81OrStr: TypeAlias = Annotated[Type81 | str, open_enum_validator(Type81)]
