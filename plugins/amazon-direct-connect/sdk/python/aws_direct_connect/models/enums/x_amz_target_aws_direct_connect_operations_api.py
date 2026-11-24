from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT = "OvertureService.AllocateConnectionOnInterconnect"

    __str__ = str.__str__


XAmzTargetAwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTargetAwsDirectConnectOperationsApi)
]
