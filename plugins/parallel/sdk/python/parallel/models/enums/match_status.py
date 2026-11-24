from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchStatus(str, Enum):
    """Status of the candidate. One of generated, matched, unmatched, discarded."""

    GENERATED = "generated"
    MATCHED = "matched"
    UNMATCHED = "unmatched"
    DISCARDED = "discarded"

    __str__ = str.__str__


MatchStatusOrStr: TypeAlias = Annotated[MatchStatus | str, open_enum_validator(MatchStatus)]
