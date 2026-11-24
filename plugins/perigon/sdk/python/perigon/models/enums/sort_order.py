from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder(str, Enum):
    """Required direction used to sort results. Accepts asc or desc."""

    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


SortOrderOrStr: TypeAlias = Annotated[SortOrder | str, open_enum_validator(SortOrder)]
