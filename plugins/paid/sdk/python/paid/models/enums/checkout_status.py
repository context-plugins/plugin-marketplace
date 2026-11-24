from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckoutStatus(str, Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    EXPIRED = "expired"
    ARCHIVED = "archived"

    __str__ = str.__str__


CheckoutStatusOrStr: TypeAlias = Annotated[CheckoutStatus | str, open_enum_validator(CheckoutStatus)]
