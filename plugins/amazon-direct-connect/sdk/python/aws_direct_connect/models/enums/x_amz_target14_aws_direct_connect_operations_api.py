from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget14AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_UPDATE_CONNECTIONS_BILLING_MODE = "OvertureService.UpdateConnectionsBillingMode"

    __str__ = str.__str__


XAmzTarget14AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget14AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget14AwsDirectConnectOperationsApi)
]
