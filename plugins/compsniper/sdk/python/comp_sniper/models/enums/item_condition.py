from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemCondition(str, Enum):
    ANY = "any"
    NEW = "new"
    USED = "used"

    __str__ = str.__str__


ItemConditionOrStr: TypeAlias = Annotated[ItemCondition | str, open_enum_validator(ItemCondition)]
