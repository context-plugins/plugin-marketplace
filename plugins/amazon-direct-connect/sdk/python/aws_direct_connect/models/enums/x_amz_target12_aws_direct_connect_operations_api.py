from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget12AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_LIST_RESILIENCY_GROUP_ASSOCIATIONS = "OvertureService.ListResiliencyGroupAssociations"

    __str__ = str.__str__


XAmzTarget12AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget12AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget12AwsDirectConnectOperationsApi)
]
