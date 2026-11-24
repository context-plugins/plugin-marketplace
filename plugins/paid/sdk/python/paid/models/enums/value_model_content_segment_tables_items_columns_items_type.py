from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentSegmentTablesItemsColumnsItemsType(str, Enum):
    NUMBER = "number"

    __str__ = str.__str__


ValueModelContentSegmentTablesItemsColumnsItemsTypeOrStr: TypeAlias = Annotated[
    ValueModelContentSegmentTablesItemsColumnsItemsType | str,
    open_enum_validator(ValueModelContentSegmentTablesItemsColumnsItemsType),
]
