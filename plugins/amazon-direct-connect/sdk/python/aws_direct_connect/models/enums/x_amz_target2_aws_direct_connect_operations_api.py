from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE = "OvertureService.AllocatePrivateVirtualInterface"

    __str__ = str.__str__


XAmzTarget2AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget2AwsDirectConnectOperationsApi)
]
