from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomerStateSeatStatus(str, Enum):
    ASSIGNED = "assigned"
    UNASSIGNED = "unassigned"

    __str__ = str.__str__


CustomerStateSeatStatusOrStr: TypeAlias = Annotated[
    CustomerStateSeatStatus | str, open_enum_validator(CustomerStateSeatStatus)
]
