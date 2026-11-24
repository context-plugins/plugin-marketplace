from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OriginalEmailVerificationStatus(str, Enum):
    VALID = "VALID"
    INVALID = "INVALID"
    UNKNOWN = "UNKNOWN"
    CATCH_ALL = "CATCH-ALL"

    __str__ = str.__str__


OriginalEmailVerificationStatusOrStr: TypeAlias = Annotated[
    OriginalEmailVerificationStatus | str, open_enum_validator(OriginalEmailVerificationStatus)
]
