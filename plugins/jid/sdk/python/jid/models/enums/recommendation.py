from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Recommendation(str, Enum):
    FAST_TRACK = "fast_track"
    STANDARD = "standard"
    VERIFY_FIRST = "verify_first"
    LOW_PRIORITY = "low_priority"

    __str__ = str.__str__


RecommendationOrStr: TypeAlias = Annotated[Recommendation | str, open_enum_validator(Recommendation)]
