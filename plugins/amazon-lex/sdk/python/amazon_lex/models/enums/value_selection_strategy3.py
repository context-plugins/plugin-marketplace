from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueSelectionStrategy3(str, Enum):
    """The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see
    PutSlotType."""

    ORIGINAL_VALUE = "ORIGINAL_VALUE"
    TOP_RESOLUTION = "TOP_RESOLUTION"

    __str__ = str.__str__


ValueSelectionStrategy3OrStr: TypeAlias = Annotated[
    ValueSelectionStrategy3 | str, open_enum_validator(ValueSelectionStrategy3)
]
