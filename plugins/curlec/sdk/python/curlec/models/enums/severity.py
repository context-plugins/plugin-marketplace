from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


SeverityOrStr: TypeAlias = Annotated[Severity | str, open_enum_validator(Severity)]
