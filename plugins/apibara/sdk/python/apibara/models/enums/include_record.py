from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludeRecord(str, Enum):
    CREATED = "created"
    ALL = "all"

    __str__ = str.__str__


IncludeRecordOrStr: TypeAlias = Annotated[IncludeRecord | str, open_enum_validator(IncludeRecord)]
