from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Condition(str, Enum):
    """The condition to apply. To include the objects that match the statement, specify IS. To exclude matching objects,
    specify IS_NOT."""

    IS = "IS"
    IS_NOT = "IS_NOT"

    __str__ = str.__str__


ConditionOrStr: TypeAlias = Annotated[Condition | str, open_enum_validator(Condition)]
