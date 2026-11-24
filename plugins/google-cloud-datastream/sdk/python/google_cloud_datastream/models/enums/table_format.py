from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TableFormat(str, Enum):
    """Required. The table format."""

    TABLE_FORMAT_UNSPECIFIED = "TABLE_FORMAT_UNSPECIFIED"
    ICEBERG = "ICEBERG"

    __str__ = str.__str__


TableFormatOrStr: TypeAlias = Annotated[TableFormat | str, open_enum_validator(TableFormat)]
