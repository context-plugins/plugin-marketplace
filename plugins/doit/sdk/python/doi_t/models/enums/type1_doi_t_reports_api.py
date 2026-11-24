from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1DoiTReportsApi(str, Enum):
    """Report type."""

    CUSTOM = "custom"
    PRESET = "preset"
    MANAGED = "managed"

    __str__ = str.__str__


Type1DoiTReportsApiOrStr: TypeAlias = Annotated[Type1DoiTReportsApi | str, open_enum_validator(Type1DoiTReportsApi)]
