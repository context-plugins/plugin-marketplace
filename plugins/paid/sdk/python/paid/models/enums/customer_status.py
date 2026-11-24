from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerStatus(str, Enum):
    """Customer status: churned when the customer is marked as churned, active otherwise."""

    ACTIVE = "active"
    CHURNED = "churned"

    __str__ = str.__str__


CustomerStatusOrStr: TypeAlias = Annotated[CustomerStatus | str, open_enum_validator(CustomerStatus)]
