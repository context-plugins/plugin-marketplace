from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sold(str, Enum):
    """true = sold listings (default), false = active listings"""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


SoldOrStr: TypeAlias = Annotated[Sold | str, open_enum_validator(Sold)]
