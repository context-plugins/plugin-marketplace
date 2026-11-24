from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemLocation(str, Enum):
    DEFAULT = "default"
    DOMESTIC = "domestic"
    WORLDWIDE = "worldwide"

    __str__ = str.__str__


ItemLocationOrStr: TypeAlias = Annotated[ItemLocation | str, open_enum_validator(ItemLocation)]
