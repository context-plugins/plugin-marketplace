from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsDirectConnectResiliencyGroupApi(str, Enum):
    OVERTURE_SERVICE_GET_RESILIENCY_GROUP = "OvertureService.GetResiliencyGroup"

    __str__ = str.__str__


XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsDirectConnectResiliencyGroupApi | str,
    open_enum_validator(XAmzTarget2AwsDirectConnectResiliencyGroupApi),
]
