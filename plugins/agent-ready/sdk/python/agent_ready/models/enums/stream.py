from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Stream(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


StreamOrStr: TypeAlias = Annotated[Stream | str, open_enum_validator(Stream)]
