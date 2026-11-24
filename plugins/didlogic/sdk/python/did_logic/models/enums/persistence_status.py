from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PersistenceStatus(str, Enum):
    """Identity persistence status"""

    ACTIVE = "active"
    ARCHIVED = "archived"
    ACTIVE_IMMORTAL = "active-immortal"

    __str__ = str.__str__


PersistenceStatusOrStr: TypeAlias = Annotated[PersistenceStatus | str, open_enum_validator(PersistenceStatus)]
