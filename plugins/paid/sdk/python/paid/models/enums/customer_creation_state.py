from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerCreationState(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"

    __str__ = str.__str__


CustomerCreationStateOrStr: TypeAlias = Annotated[
    CustomerCreationState | str, open_enum_validator(CustomerCreationState)
]
