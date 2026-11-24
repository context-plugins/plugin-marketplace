from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    """Specifies the field to sort results by. If you specify SortBy, you must also specify SortOrder."""

    CREATED_AT = "CREATED_AT"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
