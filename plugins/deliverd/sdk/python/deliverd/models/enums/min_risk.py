from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MinRisk(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


MinRiskOrStr: TypeAlias = Annotated[MinRisk | str, open_enum_validator(MinRisk)]
