from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE = "OvertureService.ConfirmPrivateVirtualInterface"

    __str__ = str.__str__


XAmzTarget7AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget7AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget7AwsDirectConnectOperationsApi)
]
