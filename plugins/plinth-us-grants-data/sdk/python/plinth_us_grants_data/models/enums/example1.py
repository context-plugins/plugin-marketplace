from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Example1(str, Enum):
    _1 = "1"
    LIST = "list"

    __str__ = str.__str__


Example1OrStr: TypeAlias = Annotated[Example1 | str, open_enum_validator(Example1)]
