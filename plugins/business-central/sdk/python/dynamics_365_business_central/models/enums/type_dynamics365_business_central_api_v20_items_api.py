from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDynamics365BusinessCentralApiV20ItemsApi(str, Enum):
    INVENTORY = "Inventory"
    SERVICE = "Service"
    NON_INVENTORY = "Non-Inventory"

    __str__ = str.__str__


TypeDynamics365BusinessCentralApiV20ItemsApiOrStr: TypeAlias = Annotated[
    TypeDynamics365BusinessCentralApiV20ItemsApi | str,
    open_enum_validator(TypeDynamics365BusinessCentralApiV20ItemsApi),
]
