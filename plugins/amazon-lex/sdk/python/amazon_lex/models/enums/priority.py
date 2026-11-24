from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Priority(str, Enum):
    """The priority level of the recommendation. Valid Values: High | Medium | Low"""

    HIGH = "High"
    MEDIUM = "Medium"
    LOW = "Low"

    __str__ = str.__str__


PriorityOrStr: TypeAlias = Annotated[Priority | str, open_enum_validator(Priority)]
