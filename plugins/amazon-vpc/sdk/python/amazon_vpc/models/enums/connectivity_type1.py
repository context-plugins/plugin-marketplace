from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConnectivityType1(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"

    __str__ = str.__str__


ConnectivityType1OrStr: TypeAlias = Annotated[ConnectivityType1 | str, open_enum_validator(ConnectivityType1)]
