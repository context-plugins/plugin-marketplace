from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusOddsRelayDiscoveryApi(str, Enum):
    UPCOMING = "upcoming"
    STARTED = "started"

    __str__ = str.__str__


StatusOddsRelayDiscoveryApiOrStr: TypeAlias = Annotated[
    StatusOddsRelayDiscoveryApi | str, open_enum_validator(StatusOddsRelayDiscoveryApi)
]
