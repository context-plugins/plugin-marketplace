from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StoryType6(str, Enum):
    """The type of Stories that you want returned."""

    FEATURE = "feature"
    CHORE = "chore"
    BUG = "bug"

    __str__ = str.__str__


StoryType6OrStr: TypeAlias = Annotated[StoryType6 | str, open_enum_validator(StoryType6)]
