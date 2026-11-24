from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """A string value of the KnownGender info about the Celebrity."""

    MALE = "Male"
    FEMALE = "Female"
    NONBINARY = "Nonbinary"
    UNLISTED = "Unlisted"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
