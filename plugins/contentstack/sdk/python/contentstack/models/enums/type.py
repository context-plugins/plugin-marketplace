from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Type of experience — SEGMENTED for rule-based or AB_TEST for split testing."""

    SEGMENTED = "SEGMENTED"
    AB_TEST = "AB_TEST"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
