from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GatewayCapacity(str, Enum):
    """Specifies the size of the gateway's metadata cache."""

    SMALL = "Small"
    MEDIUM = "Medium"
    LARGE = "Large"

    __str__ = str.__str__


GatewayCapacityOrStr: TypeAlias = Annotated[GatewayCapacity | str, open_enum_validator(GatewayCapacity)]
