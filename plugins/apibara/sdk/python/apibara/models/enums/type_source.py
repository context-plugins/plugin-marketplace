from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeSource(str, Enum):
    SELLER_NAME = "seller_name"
    UNAVAILABLE = "unavailable"

    __str__ = str.__str__


TypeSourceOrStr: TypeAlias = Annotated[TypeSource | str, open_enum_validator(TypeSource)]
