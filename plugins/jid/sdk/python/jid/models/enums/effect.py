from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Effect(str, Enum):
    U002B = "+"
    U002D = "-"
    NEUTRAL = "neutral"
    REVIEW = "review"

    __str__ = str.__str__


EffectOrStr: TypeAlias = Annotated[Effect | str, open_enum_validator(Effect)]
