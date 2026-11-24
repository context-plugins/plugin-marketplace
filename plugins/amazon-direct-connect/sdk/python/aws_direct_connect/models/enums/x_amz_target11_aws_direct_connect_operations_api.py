from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_DISASSOCIATE_CONNECTIONS_FROM_RESILIENCY_GROUP = "OvertureService.DisassociateConnectionsFromResiliencyGroup"

    __str__ = str.__str__


XAmzTarget11AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget11AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget11AwsDirectConnectOperationsApi)
]
