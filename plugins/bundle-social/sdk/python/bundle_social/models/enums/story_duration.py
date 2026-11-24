from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StoryDuration(str, Enum):
    ONE_DAY = "ONE_DAY"
    TWO_DAYS = "TWO_DAYS"
    THREE_DAYS = "THREE_DAYS"
    ONE_WEEK = "ONE_WEEK"

    __str__ = str.__str__


StoryDurationOrStr: TypeAlias = Annotated[StoryDuration | str, open_enum_validator(StoryDuration)]
