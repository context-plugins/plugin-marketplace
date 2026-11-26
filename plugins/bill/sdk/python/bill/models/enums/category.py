from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    REQUEST = "REQUEST"
    APPLICATION = "APPLICATION"
    SERVER = "SERVER"
    DOWNSTREAM = "DOWNSTREAM"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
