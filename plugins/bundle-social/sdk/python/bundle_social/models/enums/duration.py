from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Duration(str, Enum):
    FOREVER = "forever"
    ONCE = "once"
    REPEATING = "repeating"

    __str__ = str.__str__


DurationOrStr: TypeAlias = Annotated[Duration | str, open_enum_validator(Duration)]
