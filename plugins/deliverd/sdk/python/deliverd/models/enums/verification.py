from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verification(str, Enum):
    VERIFIED = "verified"
    HASH_MATCHED = "hash_matched"
    REPORTED = "reported"

    __str__ = str.__str__


VerificationOrStr: TypeAlias = Annotated[Verification | str, open_enum_validator(Verification)]
