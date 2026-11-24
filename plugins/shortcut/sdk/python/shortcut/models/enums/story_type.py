from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StoryType(str, Enum):
    """The type of story (feature, bug, chore)."""

    FEATURE = "feature"
    CHORE = "chore"
    BUG = "bug"

    __str__ = str.__str__


StoryTypeOrStr: TypeAlias = Annotated[StoryType | str, open_enum_validator(StoryType)]
