from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode3(str, Enum):
    EVEN = "even"
    CUSTOM = "custom"
    PROPORTIONAL = "proportional"

    __str__ = str.__str__


Mode3OrStr: TypeAlias = Annotated[Mode3 | str, open_enum_validator(Mode3)]
