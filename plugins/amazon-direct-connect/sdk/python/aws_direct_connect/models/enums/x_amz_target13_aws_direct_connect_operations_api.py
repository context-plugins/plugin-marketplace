from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget13AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_ROUTES = "OvertureService.ListVirtualInterfaceRoutes"

    __str__ = str.__str__


XAmzTarget13AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget13AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget13AwsDirectConnectOperationsApi)
]
