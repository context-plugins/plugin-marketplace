from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScanStatus(str, Enum):
    PENDING = "pending"
    PASSED = "passed"
    PASSED_WITH_WARNINGS = "passed_with_warnings"
    BLOCKED = "blocked"

    __str__ = str.__str__


ScanStatusOrStr: TypeAlias = Annotated[ScanStatus | str, open_enum_validator(ScanStatus)]
