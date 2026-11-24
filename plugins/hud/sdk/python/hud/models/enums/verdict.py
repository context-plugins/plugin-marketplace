from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict(str, Enum):
    PASSED = "passed"
    FAILED = "failed"
    UNKNOWN = "unknown"

    __str__ = str.__str__


VerdictOrStr: TypeAlias = Annotated[Verdict | str, open_enum_validator(Verdict)]
