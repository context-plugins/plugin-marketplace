from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Blocked1(str, Enum):
    SHIP = "Ship"
    INVOICE = "Invoice"
    ALL = "All"

    __str__ = str.__str__


Blocked1OrStr: TypeAlias = Annotated[Blocked1 | str, open_enum_validator(Blocked1)]
