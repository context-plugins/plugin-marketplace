from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttachmentState(str, Enum):
    """The state of the attachment. The following are the possible values: attaching: The initial state after a virtual
    interface is created using the Direct Connect gateway. attached: The Direct Connect gateway and virtual interface
    are attached and ready to pass traffic. detaching: The initial state after calling DeleteVirtualInterface. detached:
    The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway
    and virtual interface is stopped."""

    ATTACHING = "attaching"
    ATTACHED = "attached"
    DETACHING = "detaching"
    DETACHED = "detached"

    __str__ = str.__str__


AttachmentStateOrStr: TypeAlias = Annotated[AttachmentState | str, open_enum_validator(AttachmentState)]
