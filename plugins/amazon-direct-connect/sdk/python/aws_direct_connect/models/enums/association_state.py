from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AssociationState(str, Enum):
    """The state of the association. The following are the possible values: associating: The initial state after calling
    CreateDirectConnectGatewayAssociation. associated: The Direct Connect gateway and virtual private gateway or transit
    gateway are successfully associated and ready to pass traffic. disassociating: The initial state after calling
    DeleteDirectConnectGatewayAssociation. disassociated: The virtual private gateway or transit gateway is
    disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private
    gateway or transit gateway is stopped."""

    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"
    UPDATING = "updating"

    __str__ = str.__str__


AssociationStateOrStr: TypeAlias = Annotated[AssociationState | str, open_enum_validator(AssociationState)]
