from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type11(str, Enum):
    """The type of report group."""

    TEST = "TEST"
    CODE_COVERAGE = "CODE_COVERAGE"

    __str__ = str.__str__


Type11OrStr: TypeAlias = Annotated[Type11 | str, open_enum_validator(Type11)]
