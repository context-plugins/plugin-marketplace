from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OutputDeterministicLevel(str, Enum):
    DETERMINISTIC_LEVEL_UNSPECIFIED = "DETERMINISTIC_LEVEL_UNSPECIFIED"
    DETERMINISTIC_LEVEL_DETERMINATE = "DETERMINISTIC_LEVEL_DETERMINATE"
    DETERMINISTIC_LEVEL_UNORDERED = "DETERMINISTIC_LEVEL_UNORDERED"
    DETERMINISTIC_LEVEL_INDETERMINATE = "DETERMINISTIC_LEVEL_INDETERMINATE"

    __str__ = str.__str__


OutputDeterministicLevelOrStr: TypeAlias = Annotated[
    OutputDeterministicLevel | str, open_enum_validator(OutputDeterministicLevel)
]
