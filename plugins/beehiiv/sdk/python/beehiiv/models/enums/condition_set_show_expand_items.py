from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionSetShowExpandItems(str, Enum):
    STATS = "stats"

    __str__ = str.__str__


ConditionSetShowExpandItemsOrStr: TypeAlias = Annotated[
    ConditionSetShowExpandItems | str, open_enum_validator(ConditionSetShowExpandItems)
]
