from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity3(str, Enum):
    BANK_TRANSFER = "bank_transfer"

    __str__ = str.__str__


Entity3OrStr: TypeAlias = Annotated[Entity3 | str, open_enum_validator(Entity3)]
