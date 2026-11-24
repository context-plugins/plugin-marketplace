from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2DoiTReportsApi(str, Enum):
    """Type of metric to use."""

    BASIC = "basic"
    CUSTOM = "custom"
    EXTENDED = "extended"

    __str__ = str.__str__


Type2DoiTReportsApiOrStr: TypeAlias = Annotated[Type2DoiTReportsApi | str, open_enum_validator(Type2DoiTReportsApi)]
