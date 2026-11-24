from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Blocked2(str, Enum):
    """Whether the vendor is blocked"""

    PAYMENT = "Payment"
    ALL = "All"

    __str__ = str.__str__


Blocked2OrStr: TypeAlias = Annotated[Blocked2 | str, open_enum_validator(Blocked2)]
