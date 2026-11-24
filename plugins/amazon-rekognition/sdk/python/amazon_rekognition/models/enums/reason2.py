from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason2(str, Enum):
    FACE_NOT_FOUND = "FACE_NOT_FOUND"
    ASSOCIATED_TO_A_DIFFERENT_USER = "ASSOCIATED_TO_A_DIFFERENT_USER"

    __str__ = str.__str__


Reason2OrStr: TypeAlias = Annotated[Reason2 | str, open_enum_validator(Reason2)]
