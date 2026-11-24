from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InterconnectState(str, Enum):
    """The state of the interconnect. The following are the possible values: requested: The initial state of an
    interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the
    customer. pending: The interconnect is approved, and is being initialized. available: The network link is up, and
    the interconnect is ready for use. down: The network link is down. deleting: The interconnect is being deleted.
    deleted: The interconnect is deleted. unknown: The state of the interconnect is not available."""

    REQUESTED = "requested"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    DELETING = "deleting"
    DELETED = "deleted"
    UNKNOWN = "unknown"

    __str__ = str.__str__


InterconnectStateOrStr: TypeAlias = Annotated[InterconnectState | str, open_enum_validator(InterconnectState)]
