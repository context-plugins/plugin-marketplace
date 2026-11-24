from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Condition(str, Enum):
    """Type of comparison for the alert threshold (used with ``operator`` and ``value``). If omitted on create, defaults
    to ``percentage-change``."""

    VALUE = "value"
    PERCENTAGE_CHANGE = "percentage-change"
    FORECAST = "forecast"

    __str__ = str.__str__


ConditionOrStr: TypeAlias = Annotated[Condition | str, open_enum_validator(Condition)]
