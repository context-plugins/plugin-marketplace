from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    """Sort order for ranking results."""

    A_TO_Z = "a_to_z"
    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
