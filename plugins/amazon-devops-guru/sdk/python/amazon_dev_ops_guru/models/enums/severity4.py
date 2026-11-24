from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity4(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


Severity4OrStr: TypeAlias = Annotated[Severity4 | str, open_enum_validator(Severity4)]
