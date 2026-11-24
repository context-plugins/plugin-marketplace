from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict1(str, Enum):
    """High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection)."""

    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"

    __str__ = str.__str__


Verdict1OrStr: TypeAlias = Annotated[Verdict1 | str, open_enum_validator(Verdict1)]
