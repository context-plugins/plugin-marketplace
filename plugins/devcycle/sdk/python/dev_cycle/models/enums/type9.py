from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type9(str, Enum):
    RELEASE = "release"
    EXPERIMENT = "experiment"
    PERMISSION = "permission"
    OPS = "ops"

    __str__ = str.__str__


Type9OrStr: TypeAlias = Annotated[Type9 | str, open_enum_validator(Type9)]
