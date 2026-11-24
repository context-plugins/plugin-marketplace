from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DirectConnectGatewayState(str, Enum):
    """The state of the Direct Connect gateway. The following are the possible values: pending: The initial state after
    calling CreateDirectConnectGateway. available: The Direct Connect gateway is ready for use. deleting: The initial
    state after calling DeleteDirectConnectGateway. deleted: The Direct Connect gateway is deleted and cannot pass
    traffic."""

    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

    __str__ = str.__str__


DirectConnectGatewayStateOrStr: TypeAlias = Annotated[
    DirectConnectGatewayState | str, open_enum_validator(DirectConnectGatewayState)
]
