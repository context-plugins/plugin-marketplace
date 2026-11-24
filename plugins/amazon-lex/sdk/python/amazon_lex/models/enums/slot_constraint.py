from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SlotConstraint(str, Enum):
    """Specifies whether the slot is required or optional."""

    REQUIRED = "Required"
    OPTIONAL = "Optional"

    __str__ = str.__str__


SlotConstraintOrStr: TypeAlias = Annotated[SlotConstraint | str, open_enum_validator(SlotConstraint)]
