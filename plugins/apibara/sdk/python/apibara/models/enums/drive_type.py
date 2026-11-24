from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DriveType(str, Enum):
    AWD = "AWD"
    FWD = "FWD"
    RWD = "RWD"

    __str__ = str.__str__


DriveTypeOrStr: TypeAlias = Annotated[DriveType | str, open_enum_validator(DriveType)]
