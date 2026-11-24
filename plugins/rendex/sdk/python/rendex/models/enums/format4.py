from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format4(str, Enum):
    PDF = "pdf"
    PNG = "png"

    __str__ = str.__str__


Format4OrStr: TypeAlias = Annotated[Format4 | str, open_enum_validator(Format4)]
