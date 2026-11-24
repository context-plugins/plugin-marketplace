from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RouteDirection(str, Enum):
    """The direction of the routes to return. The valid values are accepted (routes received from the customer network)
    and advertised (routes advertised to the customer network)."""

    ACCEPTED = "accepted"
    ADVERTISED = "advertised"

    __str__ = str.__str__


RouteDirectionOrStr: TypeAlias = Annotated[RouteDirection | str, open_enum_validator(RouteDirection)]
