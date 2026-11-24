from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code1(str, Enum):
    RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS"

    __str__ = str.__str__


Code1OrStr: TypeAlias = Annotated[Code1 | str, open_enum_validator(Code1)]
