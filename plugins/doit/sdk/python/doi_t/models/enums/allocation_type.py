from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AllocationType(str, Enum):
    """Composition type of allocation (single or group)."""

    SINGLE = "single"
    GROUP = "group"

    __str__ = str.__str__


AllocationTypeOrStr: TypeAlias = Annotated[AllocationType | str, open_enum_validator(AllocationType)]
