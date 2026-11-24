from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConnectionState(str, Enum):
    """The state of the connection. The following are the possible values: ordering: The initial state of a hosted
    connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted
    connection confirms or declines the connection order. requested: The initial state of a standard connection. The
    connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending:
    The connection has been approved and is being initialized. available: The network link is up and the connection is
    ready for use. down: The network l"""

    ORDERING = "ordering"
    REQUESTED = "requested"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    DELETING = "deleting"
    DELETED = "deleted"
    REJECTED = "rejected"
    UNKNOWN = "unknown"

    __str__ = str.__str__


ConnectionStateOrStr: TypeAlias = Annotated[ConnectionState | str, open_enum_validator(ConnectionState)]
