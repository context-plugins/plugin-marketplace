from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StarRating(str, Enum):
    ONE = "ONE"
    TWO = "TWO"
    THREE = "THREE"
    FOUR = "FOUR"
    FIVE = "FIVE"

    __str__ = str.__str__


StarRatingOrStr: TypeAlias = Annotated[StarRating | str, open_enum_validator(StarRating)]
