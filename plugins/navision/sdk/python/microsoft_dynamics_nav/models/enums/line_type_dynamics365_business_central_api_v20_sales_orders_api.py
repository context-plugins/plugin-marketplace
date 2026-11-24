from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi(str, Enum):
    COMMENT = "Comment"
    ACCOUNT = "Account"
    ITEM = "Item"
    RESOURCE = "Resource"
    FIXED_ASSET = "Fixed Asset"
    CHARGE = "Charge"

    __str__ = str.__str__


LineTypeDynamics365BusinessCentralApiV20SalesOrdersApiOrStr: TypeAlias = Annotated[
    LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi | str,
    open_enum_validator(LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi),
]
