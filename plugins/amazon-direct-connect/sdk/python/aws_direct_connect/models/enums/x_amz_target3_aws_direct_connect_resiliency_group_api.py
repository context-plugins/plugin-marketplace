from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsDirectConnectResiliencyGroupApi(str, Enum):
    OVERTURE_SERVICE_LIST_RESILIENCY_GROUPS = "OvertureService.ListResiliencyGroups"

    __str__ = str.__str__


XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsDirectConnectResiliencyGroupApi | str,
    open_enum_validator(XAmzTarget3AwsDirectConnectResiliencyGroupApi),
]
