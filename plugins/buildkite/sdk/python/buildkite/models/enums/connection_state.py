from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConnectionState(str, Enum):
    CONNECTED = "connected"
    DISCONNECTED = "disconnected"
    STOPPED = "stopped"
    STOPPING = "stopping"
    LOST = "lost"
    NEVER_CONNECTED = "never_connected"

    __str__ = str.__str__


ConnectionStateOrStr: TypeAlias = Annotated[ConnectionState | str, open_enum_validator(ConnectionState)]
