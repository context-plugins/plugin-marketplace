from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict3(str, Enum):
    """High-level rich results inspection result for this URL."""

    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"

    __str__ = str.__str__


Verdict3OrStr: TypeAlias = Annotated[Verdict3 | str, open_enum_validator(Verdict3)]
