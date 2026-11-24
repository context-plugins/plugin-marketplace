from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RelatedOrder1(str, Enum):
    """Sort by created_at."""

    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


RelatedOrder1OrStr: TypeAlias = Annotated[RelatedOrder1 | str, open_enum_validator(RelatedOrder1)]
