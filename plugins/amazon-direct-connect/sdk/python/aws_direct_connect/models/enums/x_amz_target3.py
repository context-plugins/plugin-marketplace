from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS = "OvertureService.DescribeDirectConnectGatewayAssociationProposals"

    __str__ = str.__str__


XAmzTarget3OrStr: TypeAlias = Annotated[XAmzTarget3 | str, open_enum_validator(XAmzTarget3)]
