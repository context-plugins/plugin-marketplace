from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportanceLevel(str, Enum):
    """Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's
    final ranking position. An error is thrown if not specified."""

    IMPORTANCE_LEVEL_UNSPECIFIED = "IMPORTANCE_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    LOW = "LOW"
    MILD = "MILD"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    EXTREME = "EXTREME"

    __str__ = str.__str__


ImportanceLevelOrStr: TypeAlias = Annotated[ImportanceLevel | str, open_enum_validator(ImportanceLevel)]
