from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE = "OvertureService.ConfirmTransitVirtualInterface"

    __str__ = str.__str__


XAmzTarget9AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget9AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget9AwsDirectConnectOperationsApi)
]
