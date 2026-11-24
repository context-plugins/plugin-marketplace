from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConnectivityType(str, Enum):
    """Indicates whether the NAT gateway supports public or private connectivity"""

    PUBLIC = "public"
    PRIVATE = "private"

    __str__ = str.__str__


ConnectivityTypeOrStr: TypeAlias = Annotated[ConnectivityType | str, open_enum_validator(ConnectivityType)]
