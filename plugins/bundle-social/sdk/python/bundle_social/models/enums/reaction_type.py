from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReactionType(str, Enum):
    LIKE = "LIKE"
    LOVE = "LOVE"
    WOW = "WOW"
    HAHA = "HAHA"
    SAD = "SAD"
    ANGRY = "ANGRY"

    __str__ = str.__str__


ReactionTypeOrStr: TypeAlias = Annotated[ReactionType | str, open_enum_validator(ReactionType)]
