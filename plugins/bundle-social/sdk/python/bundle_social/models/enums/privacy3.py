from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Privacy3(str, Enum):
    PUBLIC = "PUBLIC"
    UNLISTED = "UNLISTED"
    PRIVATE = "PRIVATE"
    DIRECT = "DIRECT"

    __str__ = str.__str__


Privacy3OrStr: TypeAlias = Annotated[Privacy3 | str, open_enum_validator(Privacy3)]
