from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason1(str, Enum):
    ASSOCIATED_TO_AN_EXISTING_USER = "ASSOCIATED_TO_AN_EXISTING_USER"
    FACE_NOT_FOUND = "FACE_NOT_FOUND"

    __str__ = str.__str__


Reason1OrStr: TypeAlias = Annotated[Reason1 | str, open_enum_validator(Reason1)]
