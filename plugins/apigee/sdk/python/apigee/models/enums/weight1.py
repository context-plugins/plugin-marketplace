from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Weight1(str, Enum):
    """The weight of the assessment which was set in the profile."""

    WEIGHT_UNSPECIFIED = "WEIGHT_UNSPECIFIED"
    MINOR = "MINOR"
    MODERATE = "MODERATE"
    MAJOR = "MAJOR"

    __str__ = str.__str__


Weight1OrStr: TypeAlias = Annotated[Weight1 | str, open_enum_validator(Weight1)]
