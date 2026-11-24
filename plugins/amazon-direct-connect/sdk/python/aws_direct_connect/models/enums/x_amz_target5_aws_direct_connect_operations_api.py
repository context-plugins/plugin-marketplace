from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_CONFIRM_CONNECTION = "OvertureService.ConfirmConnection"

    __str__ = str.__str__


XAmzTarget5AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget5AwsDirectConnectOperationsApi)
]
