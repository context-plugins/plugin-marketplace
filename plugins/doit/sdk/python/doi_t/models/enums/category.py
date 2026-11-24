from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    """The insight category."""

    FIN_OPS = "FinOps"
    OPERATIONAL_EXCELLENCE = "Operational excellence"
    PERFORMANCE_EFFICIENCY = "Performance efficiency"
    RELIABILITY = "Reliability"
    SECURITY = "Security"
    SUSTAINABILITY = "Sustainability"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
