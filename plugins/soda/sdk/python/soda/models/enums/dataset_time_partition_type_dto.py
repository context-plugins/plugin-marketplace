from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetTimePartitionTypeDto(str, Enum):
    DISABLED = "disabled"
    PARTITION_COLUMN = "partitionColumn"
    SQL_EXPRESSION = "sqlExpression"

    __str__ = str.__str__


DatasetTimePartitionTypeDtoOrStr: TypeAlias = Annotated[
    DatasetTimePartitionTypeDto | str, open_enum_validator(DatasetTimePartitionTypeDto)
]
