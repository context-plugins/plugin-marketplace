from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SlotConstraint1(str, Enum):
    """Whether the slot is required or optional. An intent is complete when all required slots are filled."""

    REQUIRED = "Required"
    OPTIONAL = "Optional"

    __str__ = str.__str__


SlotConstraint1OrStr: TypeAlias = Annotated[SlotConstraint1 | str, open_enum_validator(SlotConstraint1)]
