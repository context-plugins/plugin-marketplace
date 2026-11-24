from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StoryType1(str, Enum):
    """The type of Story; either feature, bug, or chore."""

    FEATURE = "feature"
    CHORE = "chore"
    BUG = "bug"

    __str__ = str.__str__


StoryType1OrStr: TypeAlias = Annotated[StoryType1 | str, open_enum_validator(StoryType1)]
