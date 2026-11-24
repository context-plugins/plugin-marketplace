from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget10AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_ASSOCIATE_CONNECTIONS_TO_RESILIENCY_GROUP = "OvertureService.AssociateConnectionsToResiliencyGroup"

    __str__ = str.__str__


XAmzTarget10AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget10AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget10AwsDirectConnectOperationsApi)
]
