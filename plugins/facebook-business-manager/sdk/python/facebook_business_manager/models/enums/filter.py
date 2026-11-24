from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Filter(str, Enum):
    STREAM = "stream"
    TOPLEVEL = "toplevel"

    __str__ = str.__str__


FilterOrStr: TypeAlias = Annotated[Filter | str, open_enum_validator(Filter)]
