from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type5(str, Enum):
    STORY = "STORY"
    SPOTLIGHT = "SPOTLIGHT"
    SAVED_STORY = "SAVED_STORY"

    __str__ = str.__str__


Type5OrStr: TypeAlias = Annotated[Type5 | str, open_enum_validator(Type5)]
