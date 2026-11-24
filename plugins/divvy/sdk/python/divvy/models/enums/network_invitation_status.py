from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NetworkInvitationStatus(str, Enum):
    """Status of the invitation from customer/vendor to an organization."""

    NOT_CONNECTED = "NOT_CONNECTED"
    PENDING = "PENDING"
    CONNECTED = "CONNECTED"
    CONNECTED_RPPS = "CONNECTED_RPPS"

    __str__ = str.__str__


NetworkInvitationStatusOrStr: TypeAlias = Annotated[
    NetworkInvitationStatus | str, open_enum_validator(NetworkInvitationStatus)
]
