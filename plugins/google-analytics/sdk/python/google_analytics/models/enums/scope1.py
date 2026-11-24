from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope1(str, Enum):
    """Required. Immutable. The scope of this dimension."""

    DIMENSION_SCOPE_UNSPECIFIED = "DIMENSION_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"
    USER = "USER"
    ITEM = "ITEM"

    __str__ = str.__str__


Scope1OrStr: TypeAlias = Annotated[Scope1 | str, open_enum_validator(Scope1)]
