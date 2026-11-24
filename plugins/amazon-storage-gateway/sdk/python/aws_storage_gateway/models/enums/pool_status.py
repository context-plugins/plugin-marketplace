from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PoolStatus(str, Enum):
    """Status of the custom tape pool. Pool can be ACTIVE or DELETED."""

    ACTIVE = "ACTIVE"
    DELETED = "DELETED"

    __str__ = str.__str__


PoolStatusOrStr: TypeAlias = Annotated[PoolStatus | str, open_enum_validator(PoolStatus)]
