from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StoryType4(str, Enum):
    """If the referenced entity is a Story, either "bug", "chore", or "feature"."""

    FEATURE = "feature"
    CHORE = "chore"
    BUG = "bug"

    __str__ = str.__str__


StoryType4OrStr: TypeAlias = Annotated[StoryType4 | str, open_enum_validator(StoryType4)]
