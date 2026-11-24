from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2Dynamics365BusinessCentralApiV20ItemsApi(str, Enum):
    """The item type"""

    INVENTORY = "Inventory"
    SERVICE = "Service"
    NON_INVENTORY = "Non-Inventory"

    __str__ = str.__str__


Type2Dynamics365BusinessCentralApiV20ItemsApiOrStr: TypeAlias = Annotated[
    Type2Dynamics365BusinessCentralApiV20ItemsApi | str,
    open_enum_validator(Type2Dynamics365BusinessCentralApiV20ItemsApi),
]
