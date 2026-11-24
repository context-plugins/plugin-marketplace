from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobPriority(str, Enum):
    """Priority level for the job queue"""

    LOW = "Low"
    NORMAL = "Normal"
    HIGH = "High"

    __str__ = str.__str__


JobPriorityOrStr: TypeAlias = Annotated[JobPriority | str, open_enum_validator(JobPriority)]
