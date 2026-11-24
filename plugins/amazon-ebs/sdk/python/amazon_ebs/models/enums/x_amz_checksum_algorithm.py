from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzChecksumAlgorithm(str, Enum):
    SHA256 = "SHA256"

    __str__ = str.__str__


XAmzChecksumAlgorithmOrStr: TypeAlias = Annotated[
    XAmzChecksumAlgorithm | str, open_enum_validator(XAmzChecksumAlgorithm)
]
