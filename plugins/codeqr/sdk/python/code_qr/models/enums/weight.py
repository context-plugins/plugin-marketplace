from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Weight(str, Enum):
    NORMAL = "normal"
    BOLD = "bold"

    __str__ = str.__str__


WeightOrStr: TypeAlias = Annotated[Weight | str, open_enum_validator(Weight)]
