from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChecksumAlgorithm1(str, Enum):
    """The algorithm used by Amazon EBS to generate the checksum."""

    SHA256 = "SHA256"

    __str__ = str.__str__


ChecksumAlgorithm1OrStr: TypeAlias = Annotated[ChecksumAlgorithm1 | str, open_enum_validator(ChecksumAlgorithm1)]
