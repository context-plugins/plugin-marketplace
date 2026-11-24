from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Privacy2(str, Enum):
    PRIVATE = "PRIVATE"
    PUBLIC = "PUBLIC"
    UNLISTED = "UNLISTED"

    __str__ = str.__str__


Privacy2OrStr: TypeAlias = Annotated[Privacy2 | str, open_enum_validator(Privacy2)]
