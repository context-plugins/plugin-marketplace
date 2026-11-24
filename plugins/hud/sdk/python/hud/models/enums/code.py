from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    NOT_FOUND = "not_found"
    FORBIDDEN = "forbidden"
    INVALID_TRANSITION = "invalid_transition"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
