from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2(str, Enum):
    OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"

    __str__ = str.__str__


XAmzTarget2OrStr: TypeAlias = Annotated[XAmzTarget2 | str, open_enum_validator(XAmzTarget2)]
