from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order(str, Enum):
    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


OrderOrStr: TypeAlias = Annotated[Order | str, open_enum_validator(Order)]
