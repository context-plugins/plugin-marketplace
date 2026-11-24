from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FailedRowsCollectionStrategyTypeDto(str, Enum):
    USE_DEFAULT_MAX_ROW_COUNT = "useDefaultMaxRowCount"
    ABSOLUTE = "absolute"
    PERCENTAGE = "percentage"

    __str__ = str.__str__


FailedRowsCollectionStrategyTypeDtoOrStr: TypeAlias = Annotated[
    FailedRowsCollectionStrategyTypeDto | str, open_enum_validator(FailedRowsCollectionStrategyTypeDto)
]
