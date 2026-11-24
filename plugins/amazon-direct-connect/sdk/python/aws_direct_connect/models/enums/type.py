from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of associated gateway."""

    VIRTUAL_PRIVATE_GATEWAY = "virtualPrivateGateway"
    TRANSIT_GATEWAY = "transitGateway"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
