from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RouteDirection1(str, Enum):
    """The direction of the route. The valid values are accepted (received from the customer network) and advertised
    (advertised to the customer network)."""

    ACCEPTED = "accepted"
    ADVERTISED = "advertised"

    __str__ = str.__str__


RouteDirection1OrStr: TypeAlias = Annotated[RouteDirection1 | str, open_enum_validator(RouteDirection1)]
