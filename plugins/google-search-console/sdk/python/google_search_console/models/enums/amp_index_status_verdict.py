from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AmpIndexStatusVerdict(str, Enum):
    """Index status of the AMP URL."""

    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"

    __str__ = str.__str__


AmpIndexStatusVerdictOrStr: TypeAlias = Annotated[
    AmpIndexStatusVerdict | str, open_enum_validator(AmpIndexStatusVerdict)
]
