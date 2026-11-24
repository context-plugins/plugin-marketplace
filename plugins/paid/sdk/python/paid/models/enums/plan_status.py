from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanStatus(str, Enum):
    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


PlanStatusOrStr: TypeAlias = Annotated[PlanStatus | str, open_enum_validator(PlanStatus)]
