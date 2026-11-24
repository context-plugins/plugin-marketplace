from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Combinator(str, Enum):
    """Logical operator to combine multiple rules"""

    AND = "AND"
    OR = "OR"

    __str__ = str.__str__


CombinatorOrStr: TypeAlias = Annotated[Combinator | str, open_enum_validator(Combinator)]
