from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskLevel1(str, Enum):
    """Risk assessment level"""

    LOW = "Low"
    HIGH = "High"

    __str__ = str.__str__


RiskLevel1OrStr: TypeAlias = Annotated[RiskLevel1 | str, open_enum_validator(RiskLevel1)]
