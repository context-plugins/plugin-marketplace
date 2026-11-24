from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
