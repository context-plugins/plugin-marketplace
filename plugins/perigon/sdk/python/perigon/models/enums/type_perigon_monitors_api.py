from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypePerigonMonitorsApi(str, Enum):
    """Filter by geographic content scope. Accepts all, local, or world."""

    ALL = "ALL"
    LOCAL = "LOCAL"
    WORLD = "WORLD"

    __str__ = str.__str__


TypePerigonMonitorsApiOrStr: TypeAlias = Annotated[
    TypePerigonMonitorsApi | str, open_enum_validator(TypePerigonMonitorsApi)
]
