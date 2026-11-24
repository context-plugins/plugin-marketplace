from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION = "OvertureService.AllocateHostedConnection"

    __str__ = str.__str__


XAmzTarget1AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget1AwsDirectConnectOperationsApi)
]
