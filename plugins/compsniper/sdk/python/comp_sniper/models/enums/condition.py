from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Condition(str, Enum):
    """Condition filter"""

    ANY = "any"
    NEW = "new"
    GENTLY_USED = "gently_used"
    USED = "used"
    WORN = "worn"

    __str__ = str.__str__


ConditionOrStr: TypeAlias = Annotated[Condition | str, open_enum_validator(Condition)]
