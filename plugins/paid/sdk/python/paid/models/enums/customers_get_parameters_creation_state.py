from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomersGetParametersCreationState(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"

    __str__ = str.__str__


CustomersGetParametersCreationStateOrStr: TypeAlias = Annotated[
    CustomersGetParametersCreationState | str, open_enum_validator(CustomersGetParametersCreationState)
]
