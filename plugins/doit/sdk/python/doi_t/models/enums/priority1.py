from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Priority1(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

    __str__ = str.__str__


Priority1OrStr: TypeAlias = Annotated[Priority1 | str, open_enum_validator(Priority1)]
