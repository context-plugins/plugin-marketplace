from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NetworkType(str, Enum):
    """Enum for different types of network."""

    BILL = "BILL"
    RPPS = "RPPS"

    __str__ = str.__str__


NetworkTypeOrStr: TypeAlias = Annotated[NetworkType | str, open_enum_validator(NetworkType)]
