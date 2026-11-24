from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sorting(str, Enum):
    """OPTIONAL. Specify the type of ordering for document insertion."""

    ALPHABETICAL = "alphabetical"
    CHRONOLOGICAL = "chronological"

    __str__ = str.__str__


SortingOrStr: TypeAlias = Annotated[Sorting | str, open_enum_validator(Sorting)]
