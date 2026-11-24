from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category1(str, Enum):
    FIN_OPS = "FinOps"
    OPERATIONAL_EXCELLENCE = "OperationalExcellence"
    PERFORMANCE_EFFICIENCY = "PerformanceEfficiency"
    RELIABILITY = "Reliability"
    SECURITY = "Security"
    SUSTAINABILITY = "Sustainability"

    __str__ = str.__str__


Category1OrStr: TypeAlias = Annotated[Category1 | str, open_enum_validator(Category1)]
