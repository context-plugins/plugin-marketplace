from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTReportsApi(str, Enum):
    CUSTOM = "custom"
    PRESET = "preset"

    __str__ = str.__str__


TypeDoiTReportsApiOrStr: TypeAlias = Annotated[TypeDoiTReportsApi | str, open_enum_validator(TypeDoiTReportsApi)]
