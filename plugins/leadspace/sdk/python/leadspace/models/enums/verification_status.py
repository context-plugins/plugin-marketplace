from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VerificationStatus(str, Enum):
    MOVED = "Moved"
    VERIFIED = "Verified"
    NOT_VERIFIED = "Not Verified"

    __str__ = str.__str__


VerificationStatusOrStr: TypeAlias = Annotated[VerificationStatus | str, open_enum_validator(VerificationStatus)]
