from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BlockedDynamics365BusinessCentralApiV20VendorsApi(str, Enum):
    PAYMENT = "Payment"
    ALL = "All"

    __str__ = str.__str__


BlockedDynamics365BusinessCentralApiV20VendorsApiOrStr: TypeAlias = Annotated[
    BlockedDynamics365BusinessCentralApiV20VendorsApi | str,
    open_enum_validator(BlockedDynamics365BusinessCentralApiV20VendorsApi),
]
