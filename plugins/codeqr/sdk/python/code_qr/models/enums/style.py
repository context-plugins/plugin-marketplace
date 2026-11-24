from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Style(str, Enum):
    NORMAL = "normal"
    ITALIC = "italic"

    __str__ = str.__str__


StyleOrStr: TypeAlias = Annotated[Style | str, open_enum_validator(Style)]
