from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verbosity(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

    __str__ = str.__str__


VerbosityOrStr: TypeAlias = Annotated[Verbosity | str, open_enum_validator(Verbosity)]
