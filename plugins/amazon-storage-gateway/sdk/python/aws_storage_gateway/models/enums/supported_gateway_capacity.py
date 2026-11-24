from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SupportedGatewayCapacity(str, Enum):
    SMALL = "Small"
    MEDIUM = "Medium"
    LARGE = "Large"

    __str__ = str.__str__


SupportedGatewayCapacityOrStr: TypeAlias = Annotated[
    SupportedGatewayCapacity | str, open_enum_validator(SupportedGatewayCapacity)
]
