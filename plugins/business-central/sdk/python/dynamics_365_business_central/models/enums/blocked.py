from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Blocked(str, Enum):
    """Whether the customer is blocked"""

    SHIP = "Ship"
    INVOICE = "Invoice"
    ALL = "All"

    __str__ = str.__str__


BlockedOrStr: TypeAlias = Annotated[Blocked | str, open_enum_validator(Blocked)]
