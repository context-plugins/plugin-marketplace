from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerStateCheckoutLinkStatus(str, Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    EXPIRED = "expired"
    ARCHIVED = "archived"

    __str__ = str.__str__


CustomerStateCheckoutLinkStatusOrStr: TypeAlias = Annotated[
    CustomerStateCheckoutLinkStatus | str, open_enum_validator(CustomerStateCheckoutLinkStatus)
]
