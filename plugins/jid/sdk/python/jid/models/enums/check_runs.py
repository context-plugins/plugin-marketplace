from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckRuns(str, Enum):
    DONE = "done"
    CACHED = "cached"
    SKIPPED = "skipped"
    NOT_APPLICABLE = "not_applicable"
    FAILED = "failed"

    __str__ = str.__str__


CheckRunsOrStr: TypeAlias = Annotated[CheckRuns | str, open_enum_validator(CheckRuns)]
