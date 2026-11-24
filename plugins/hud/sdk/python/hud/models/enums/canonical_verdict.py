from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CanonicalVerdict(str, Enum):
    PASSED = "passed"
    FAILED = "failed"
    UNKNOWN = "unknown"

    __str__ = str.__str__


CanonicalVerdictOrStr: TypeAlias = Annotated[CanonicalVerdict | str, open_enum_validator(CanonicalVerdict)]
