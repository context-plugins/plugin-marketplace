from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Priority(str, Enum):
    """Priority level for queue processing"""

    LOW = "Low"
    NORMAL = "Normal"
    HIGH = "High"

    __str__ = str.__str__


PriorityOrStr: TypeAlias = Annotated[Priority | str, open_enum_validator(Priority)]
