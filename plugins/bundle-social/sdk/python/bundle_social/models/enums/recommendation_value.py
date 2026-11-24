from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RecommendationValue(str, Enum):
    RECOMMEND = "RECOMMEND"
    NOT_RECOMMEND = "NOT_RECOMMEND"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


RecommendationValueOrStr: TypeAlias = Annotated[RecommendationValue | str, open_enum_validator(RecommendationValue)]
