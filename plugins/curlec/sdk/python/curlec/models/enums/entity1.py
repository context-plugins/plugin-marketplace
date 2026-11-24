from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1(str, Enum):
    CUSTOMER = "customer"

    __str__ = str.__str__


Entity1OrStr: TypeAlias = Annotated[Entity1 | str, open_enum_validator(Entity1)]
