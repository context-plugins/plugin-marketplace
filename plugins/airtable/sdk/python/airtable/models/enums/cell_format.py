from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CellFormat(str, Enum):
    JSON = "json"
    STRING = "string"

    __str__ = str.__str__


CellFormatOrStr: TypeAlias = Annotated[CellFormat | str, open_enum_validator(CellFormat)]
