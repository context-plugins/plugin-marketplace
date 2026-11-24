from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConnectionState(str, Enum):
    """Output only. State of the endpoint attachment connection to the service attachment."""

    CONNECTION_STATE_UNSPECIFIED = "CONNECTION_STATE_UNSPECIFIED"
    UNAVAILABLE = "UNAVAILABLE"
    PENDING = "PENDING"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    CLOSED = "CLOSED"
    FROZEN = "FROZEN"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
    ACCEPTED_LIMITED_CAPACITY = "ACCEPTED_LIMITED_CAPACITY"

    __str__ = str.__str__


ConnectionStateOrStr: TypeAlias = Annotated[ConnectionState | str, open_enum_validator(ConnectionState)]
