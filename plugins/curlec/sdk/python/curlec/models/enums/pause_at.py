from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PauseAt(str, Enum):
    """When to pause. 'now' = immediately; 'cycle_end' = after current cycle."""

    NOW = "now"
    CYCLE_END = "cycle_end"

    __str__ = str.__str__


PauseAtOrStr: TypeAlias = Annotated[PauseAt | str, open_enum_validator(PauseAt)]
