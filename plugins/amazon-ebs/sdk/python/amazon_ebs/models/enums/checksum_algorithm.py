from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChecksumAlgorithm(str, Enum):
    """The algorithm used to generate the checksum for the block, such as SHA256."""

    SHA256 = "SHA256"

    __str__ = str.__str__


ChecksumAlgorithmOrStr: TypeAlias = Annotated[ChecksumAlgorithm | str, open_enum_validator(ChecksumAlgorithm)]
