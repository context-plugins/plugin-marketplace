from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomersGetParametersStatus(str, Enum):
    ACTIVE = "active"
    CHURNED = "churned"

    __str__ = str.__str__


CustomersGetParametersStatusOrStr: TypeAlias = Annotated[
    CustomersGetParametersStatus | str, open_enum_validator(CustomersGetParametersStatus)
]
