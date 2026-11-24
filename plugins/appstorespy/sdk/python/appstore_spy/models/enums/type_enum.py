from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeEnum(str, Enum):
    """An enumeration."""

    APP = "APP"
    GAME = "GAME"

    __str__ = str.__str__


TypeEnumOrStr: TypeAlias = Annotated[TypeEnum | str, open_enum_validator(TypeEnum)]
