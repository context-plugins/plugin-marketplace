from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE = "OvertureService.AllocateTransitVirtualInterface"

    __str__ = str.__str__


XAmzTarget4AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget4AwsDirectConnectOperationsApi)
]
