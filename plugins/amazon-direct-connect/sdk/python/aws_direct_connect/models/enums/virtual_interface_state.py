from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VirtualInterfaceState(str, Enum):
    """The state of the virtual interface. The following are the possible values: confirming: The creation of the
    virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is
    different from the owner of the connection on which it is provisioned, then the virtual interface will remain in
    this state until it is confirmed by the virtual interface owner. verifying: This state only applies to public
    virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
    pending: A virtual interface is in this s"""

    CONFIRMING = "confirming"
    VERIFYING = "verifying"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    TESTING = "testing"
    DELETING = "deleting"
    DELETED = "deleted"
    REJECTED = "rejected"
    UNKNOWN = "unknown"

    __str__ = str.__str__


VirtualInterfaceStateOrStr: TypeAlias = Annotated[
    VirtualInterfaceState | str, open_enum_validator(VirtualInterfaceState)
]
