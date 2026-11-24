from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code3(str, Enum):
    MISSING_API_KEY = "MISSING_API_KEY"
    INVALID_API_KEY_FORMAT = "INVALID_API_KEY_FORMAT"
    INVALID_OR_EXPIRED_API_KEY = "INVALID_OR_EXPIRED_API_KEY"

    __str__ = str.__str__


Code3OrStr: TypeAlias = Annotated[Code3 | str, open_enum_validator(Code3)]
