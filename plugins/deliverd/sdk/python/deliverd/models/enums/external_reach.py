from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExternalReach(str, Enum):
    """Who its output reaches, furthest first"""

    INTERNAL = "internal"
    CUSTOMER = "customer"
    PUBLIC = "public"
    REGULATOR = "regulator"

    __str__ = str.__str__


ExternalReachOrStr: TypeAlias = Annotated[ExternalReach | str, open_enum_validator(ExternalReach)]
