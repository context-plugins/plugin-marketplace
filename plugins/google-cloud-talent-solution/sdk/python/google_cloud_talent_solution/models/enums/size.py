from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Size(str, Enum):
    """The employer's company size."""

    COMPANY_SIZE_UNSPECIFIED = "COMPANY_SIZE_UNSPECIFIED"
    MINI = "MINI"
    SMALL = "SMALL"
    SMEDIUM = "SMEDIUM"
    MEDIUM = "MEDIUM"
    BIG = "BIG"
    BIGGER = "BIGGER"
    GIANT = "GIANT"

    __str__ = str.__str__


SizeOrStr: TypeAlias = Annotated[Size | str, open_enum_validator(Size)]
