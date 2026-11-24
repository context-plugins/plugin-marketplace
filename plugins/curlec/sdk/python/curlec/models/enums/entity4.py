from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity4(str, Enum):
    BANK_ACCOUNT = "bank_account"

    __str__ = str.__str__


Entity4OrStr: TypeAlias = Annotated[Entity4 | str, open_enum_validator(Entity4)]
