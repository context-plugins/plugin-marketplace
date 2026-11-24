from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Audience(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"

    __str__ = str.__str__


AudienceOrStr: TypeAlias = Annotated[Audience | str, open_enum_validator(Audience)]
