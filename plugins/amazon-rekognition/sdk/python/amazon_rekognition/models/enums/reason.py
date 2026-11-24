from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    FACE_NOT_FOUND = "FACE_NOT_FOUND"
    ASSOCIATED_TO_A_DIFFERENT_USER = "ASSOCIATED_TO_A_DIFFERENT_USER"
    LOW_MATCH_CONFIDENCE = "LOW_MATCH_CONFIDENCE"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
