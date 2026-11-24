from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChangeScheduledAt(str, Enum):
    """When scheduled changes take effect."""

    NOW = "now"
    CYCLE_END = "cycle_end"

    __str__ = str.__str__


ChangeScheduledAtOrStr: TypeAlias = Annotated[ChangeScheduledAt | str, open_enum_validator(ChangeScheduledAt)]
