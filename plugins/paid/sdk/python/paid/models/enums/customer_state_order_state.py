from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerStateOrderState(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    PAUSED = "paused"
    ENDED = "ended"

    __str__ = str.__str__


CustomerStateOrderStateOrStr: TypeAlias = Annotated[
    CustomerStateOrderState | str, open_enum_validator(CustomerStateOrderState)
]
