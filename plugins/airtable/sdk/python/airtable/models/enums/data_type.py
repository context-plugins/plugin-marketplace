from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType(str, Enum):
    TABLE_DATA = "tableData"
    TABLE_FIELDS = "tableFields"
    TABLE_METADATA = "tableMetadata"

    __str__ = str.__str__


DataTypeOrStr: TypeAlias = Annotated[DataType | str, open_enum_validator(DataType)]
