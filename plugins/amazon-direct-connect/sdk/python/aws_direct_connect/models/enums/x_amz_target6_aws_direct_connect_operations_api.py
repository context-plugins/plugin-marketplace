from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6AwsDirectConnectOperationsApi(str, Enum):
    OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT = "OvertureService.ConfirmCustomerAgreement"

    __str__ = str.__str__


XAmzTarget6AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget6AwsDirectConnectOperationsApi | str, open_enum_validator(XAmzTarget6AwsDirectConnectOperationsApi)
]
