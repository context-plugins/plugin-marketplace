from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsDirectConnectResiliencyGroupApi(str, Enum):
    OVERTURE_SERVICE_UPDATE_RESILIENCY_GROUP = "OvertureService.UpdateResiliencyGroup"

    __str__ = str.__str__


XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsDirectConnectResiliencyGroupApi | str,
    open_enum_validator(XAmzTarget4AwsDirectConnectResiliencyGroupApi),
]
