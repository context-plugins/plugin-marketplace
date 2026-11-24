from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderCreationState(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"

    __str__ = str.__str__


OrderCreationStateOrStr: TypeAlias = Annotated[OrderCreationState | str, open_enum_validator(OrderCreationState)]
