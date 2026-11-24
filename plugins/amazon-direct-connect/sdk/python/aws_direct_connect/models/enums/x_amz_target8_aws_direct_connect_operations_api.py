from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE = "OvertureService.ConfirmPublicVirtualInterface"

    __str__ = str.__str__


XAmzTarget8AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget8AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget8AwsDirectConnectOperationsApi)
]
