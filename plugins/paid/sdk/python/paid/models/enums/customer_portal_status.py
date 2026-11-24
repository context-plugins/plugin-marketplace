from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerPortalStatus(str, Enum):
    ACTIVE = "active"
    EXPIRED = "expired"

    __str__ = str.__str__


CustomerPortalStatusOrStr: TypeAlias = Annotated[CustomerPortalStatus | str, open_enum_validator(CustomerPortalStatus)]
