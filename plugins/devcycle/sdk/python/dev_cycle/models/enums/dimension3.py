from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Dimension3(str, Enum):
    COUNT_PER_UNIQUE_USER = "COUNT_PER_UNIQUE_USER"
    COUNT_PER_VARIABLE_EVALUATION = "COUNT_PER_VARIABLE_EVALUATION"
    SUM_PER_UNIQUE_USER = "SUM_PER_UNIQUE_USER"
    AVERAGE_PER_UNIQUE_USER = "AVERAGE_PER_UNIQUE_USER"
    TOTAL_AVERAGE = "TOTAL_AVERAGE"
    TOTAL_SUM = "TOTAL_SUM"

    __str__ = str.__str__


Dimension3OrStr: TypeAlias = Annotated[Dimension3 | str, open_enum_validator(Dimension3)]
