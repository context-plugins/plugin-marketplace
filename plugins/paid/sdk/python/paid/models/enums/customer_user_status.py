from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerUserStatus(str, Enum):
    ACTIVE = "active"
    DEACTIVATED = "deactivated"

    __str__ = str.__str__


CustomerUserStatusOrStr: TypeAlias = Annotated[CustomerUserStatus | str, open_enum_validator(CustomerUserStatus)]
