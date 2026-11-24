from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Dimension(str, Enum):
    YEARS = "years"
    MAKES = "makes"
    MODELS = "models"
    TRIMS = "trims"
    VARIANTS = "variants"

    __str__ = str.__str__


DimensionOrStr: TypeAlias = Annotated[Dimension | str, open_enum_validator(Dimension)]
