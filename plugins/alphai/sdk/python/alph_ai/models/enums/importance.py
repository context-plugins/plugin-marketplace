from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Importance(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


ImportanceOrStr: TypeAlias = Annotated[Importance | str, open_enum_validator(Importance)]
