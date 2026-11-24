from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attributes(str, Enum):
    LINK = "link"
    EXECUTABLE = "executable"
    SUBREPOSITORY = "subrepository"
    BINARY = "binary"
    LFS = "lfs"

    __str__ = str.__str__


AttributesOrStr: TypeAlias = Annotated[Attributes | str, open_enum_validator(Attributes)]
