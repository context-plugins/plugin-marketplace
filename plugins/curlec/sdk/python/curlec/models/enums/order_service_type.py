from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderServiceType(str, Enum):
    DINE_IN = "dine_in"
    TAKEAWAY = "takeaway"
    DELIVERY = "delivery"

    __str__ = str.__str__


OrderServiceTypeOrStr: TypeAlias = Annotated[OrderServiceType | str, open_enum_validator(OrderServiceType)]
