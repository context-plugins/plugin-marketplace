from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchType(str, Enum):
    """The match type for this filter."""

    MATCH_TYPE_UNSPECIFIED = "MATCH_TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    BEGINS_WITH = "BEGINS_WITH"
    ENDS_WITH = "ENDS_WITH"
    CONTAINS = "CONTAINS"
    FULL_REGEXP = "FULL_REGEXP"
    PARTIAL_REGEXP = "PARTIAL_REGEXP"

    __str__ = str.__str__


MatchTypeOrStr: TypeAlias = Annotated[MatchType | str, open_enum_validator(MatchType)]
