from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    VIDEO = "VIDEO"
    IMAGE = "IMAGE"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
