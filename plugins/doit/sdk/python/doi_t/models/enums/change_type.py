from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChangeType(str, Enum):
    PERCENTAGE = "percentage"
    ABSOLUTE = "absolute"

    __str__ = str.__str__


ChangeTypeOrStr: TypeAlias = Annotated[ChangeType | str, open_enum_validator(ChangeType)]
