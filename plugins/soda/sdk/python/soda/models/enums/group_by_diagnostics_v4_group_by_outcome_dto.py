from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupByDiagnosticsV4GroupByOutcomeDto(str, Enum):
    PASS = "pass"
    WARN = "warn"
    FAIL = "fail"

    __str__ = str.__str__


GroupByDiagnosticsV4GroupByOutcomeDtoOrStr: TypeAlias = Annotated[
    GroupByDiagnosticsV4GroupByOutcomeDto | str, open_enum_validator(GroupByDiagnosticsV4GroupByOutcomeDto)
]
