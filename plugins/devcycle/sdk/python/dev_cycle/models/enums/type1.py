from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Feature type"""

    RELEASE = "release"
    EXPERIMENT = "experiment"
    PERMISSION = "permission"
    OPS = "ops"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
