from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrdersGetParametersStatus(str, Enum):
    DRAFT = "draft"
    PAUSED = "paused"
    ACTIVE = "active"
    ENDED = "ended"

    __str__ = str.__str__


OrdersGetParametersStatusOrStr: TypeAlias = Annotated[
    OrdersGetParametersStatus | str, open_enum_validator(OrdersGetParametersStatus)
]
