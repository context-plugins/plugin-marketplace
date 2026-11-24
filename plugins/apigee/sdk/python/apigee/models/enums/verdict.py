from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict(str, Enum):
    """Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL."""

    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    NONE = "NONE"
    FAIL = "FAIL"
    PASS = "PASS"

    __str__ = str.__str__


VerdictOrStr: TypeAlias = Annotated[Verdict | str, open_enum_validator(Verdict)]
