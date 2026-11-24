from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsDirectConnectResiliencyGroupApi(str, Enum):
    OVERTURE_SERVICE_CREATE_RESILIENCY_GROUP = "OvertureService.CreateResiliencyGroup"

    __str__ = str.__str__


XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsDirectConnectResiliencyGroupApi | str,
    open_enum_validator(XAmzTargetAwsDirectConnectResiliencyGroupApi),
]
