from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """Event type; one of findall.candidate.generated, findall.candidate.matched, findall.candidate.unmatched,
    findall.candidate.discarded, findall.candidate.enriched."""

    FINDALL_CANDIDATE_GENERATED = "findall.candidate.generated"
    FINDALL_CANDIDATE_MATCHED = "findall.candidate.matched"
    FINDALL_CANDIDATE_UNMATCHED = "findall.candidate.unmatched"
    FINDALL_CANDIDATE_DISCARDED = "findall.candidate.discarded"
    FINDALL_CANDIDATE_ENRICHED = "findall.candidate.enriched"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
