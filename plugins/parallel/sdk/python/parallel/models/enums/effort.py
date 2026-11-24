from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Effort(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

    __str__ = str.__str__


EffortOrStr: TypeAlias = Annotated[Effort | str, open_enum_validator(Effort)]
