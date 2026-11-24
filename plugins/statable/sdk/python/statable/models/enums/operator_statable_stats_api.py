from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OperatorStatableStatsApi(str, Enum):
    IS = "is"
    IS_NOT = "is_not"
    CONTAINS = "contains"
    DOES_NOT_CONTAIN = "does_not_contain"

    __str__ = str.__str__


OperatorStatableStatsApiOrStr: TypeAlias = Annotated[
    OperatorStatableStatsApi | str, open_enum_validator(OperatorStatableStatsApi)
]
