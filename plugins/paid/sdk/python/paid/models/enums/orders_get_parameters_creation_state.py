from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrdersGetParametersCreationState(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"

    __str__ = str.__str__


OrdersGetParametersCreationStateOrStr: TypeAlias = Annotated[
    OrdersGetParametersCreationState | str, open_enum_validator(OrdersGetParametersCreationState)
]
