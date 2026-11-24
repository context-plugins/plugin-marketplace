from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LagState(str, Enum):
    """The state of the LAG. The following are the possible values: requested: The initial state of a LAG. The LAG stays
    in the requested state until the Letter of Authorization (LOA) is available. pending: The LAG has been approved and
    is being initialized. available: The network link is established and the LAG is ready for use. down: The network
    link is down. deleting: The LAG is being deleted. deleted: The LAG is deleted. unknown: The state of the LAG is not
    available."""

    REQUESTED = "requested"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    DELETING = "deleting"
    DELETED = "deleted"
    UNKNOWN = "unknown"

    __str__ = str.__str__


LagStateOrStr: TypeAlias = Annotated[LagState | str, open_enum_validator(LagState)]
