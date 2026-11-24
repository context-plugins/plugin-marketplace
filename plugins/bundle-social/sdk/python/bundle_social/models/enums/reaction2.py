from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reaction2(str, Enum):
    LOVE = "love"
    LIKE = "like"
    DISLIKE = "dislike"
    HAHA = "haha"
    WOW = "wow"
    SAD = "sad"
    ANGRY = "angry"

    __str__ = str.__str__


Reaction2OrStr: TypeAlias = Annotated[Reaction2 | str, open_enum_validator(Reaction2)]
