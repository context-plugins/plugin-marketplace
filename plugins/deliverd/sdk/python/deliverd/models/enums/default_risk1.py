from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DefaultRisk1(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


DefaultRisk1OrStr: TypeAlias = Annotated[DefaultRisk1 | str, open_enum_validator(DefaultRisk1)]
