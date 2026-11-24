from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Risk(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


RiskOrStr: TypeAlias = Annotated[Risk | str, open_enum_validator(Risk)]
