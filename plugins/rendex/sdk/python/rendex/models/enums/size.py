from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Size(str, Enum):
    A4 = "A4"
    LETTER = "Letter"
    LEGAL = "Legal"
    TABLOID = "Tabloid"
    A3 = "A3"

    __str__ = str.__str__


SizeOrStr: TypeAlias = Annotated[Size | str, open_enum_validator(Size)]
