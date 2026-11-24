from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HandshakeState(str, Enum):
    """AWS Organizations Handshake ``State`` value, lowercased."""

    REQUESTED = "requested"
    OPEN = "open"
    CANCELED = "canceled"
    ACCEPTED = "accepted"
    DECLINED = "declined"
    EXPIRED = "expired"

    __str__ = str.__str__


HandshakeStateOrStr: TypeAlias = Annotated[HandshakeState | str, open_enum_validator(HandshakeState)]
