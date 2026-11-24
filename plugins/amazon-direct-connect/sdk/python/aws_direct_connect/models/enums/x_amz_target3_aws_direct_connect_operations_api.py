from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE = "OvertureService.AllocatePublicVirtualInterface"

    __str__ = str.__str__


XAmzTarget3AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget3AwsDirectConnectOperationsApi)
]
