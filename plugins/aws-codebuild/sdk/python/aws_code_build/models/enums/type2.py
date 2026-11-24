from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """The type of the file system. The one supported type is EFS."""

    EFS = "EFS"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
