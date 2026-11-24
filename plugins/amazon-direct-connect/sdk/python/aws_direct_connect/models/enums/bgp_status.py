from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BgpStatus(str, Enum):
    """The status of the BGP peer. The following are the possible values: up: The BGP peer is established. This state
    does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.
    down: The BGP peer is down. unknown: The BGP peer status is not available."""

    UP = "up"
    DOWN = "down"
    UNKNOWN = "unknown"

    __str__ = str.__str__


BgpStatusOrStr: TypeAlias = Annotated[BgpStatus | str, open_enum_validator(BgpStatus)]
