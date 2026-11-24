from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Weight(str, Enum):
    """The weight of the assessment."""

    WEIGHT_UNSPECIFIED = "WEIGHT_UNSPECIFIED"
    MINOR = "MINOR"
    MODERATE = "MODERATE"
    MAJOR = "MAJOR"

    __str__ = str.__str__


WeightOrStr: TypeAlias = Annotated[Weight | str, open_enum_validator(Weight)]
