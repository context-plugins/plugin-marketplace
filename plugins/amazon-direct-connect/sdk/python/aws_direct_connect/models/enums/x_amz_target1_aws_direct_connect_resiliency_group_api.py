from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsDirectConnectResiliencyGroupApi(str, Enum):
    OVERTURE_SERVICE_DELETE_RESILIENCY_GROUP = "OvertureService.DeleteResiliencyGroup"

    __str__ = str.__str__


XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsDirectConnectResiliencyGroupApi | str,
    open_enum_validator(XAmzTarget1AwsDirectConnectResiliencyGroupApi),
]
