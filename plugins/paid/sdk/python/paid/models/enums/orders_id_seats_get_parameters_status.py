from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrdersIdSeatsGetParametersStatus(str, Enum):
    ASSIGNED = "assigned"
    UNASSIGNED = "unassigned"

    __str__ = str.__str__


OrdersIdSeatsGetParametersStatusOrStr: TypeAlias = Annotated[
    OrdersIdSeatsGetParametersStatus | str, open_enum_validator(OrdersIdSeatsGetParametersStatus)
]
