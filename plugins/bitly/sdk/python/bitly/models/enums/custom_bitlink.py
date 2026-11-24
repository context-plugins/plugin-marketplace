from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomBitlink(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


CustomBitlinkOrStr: TypeAlias = Annotated[CustomBitlink | str, open_enum_validator(CustomBitlink)]
