from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDynamics365BusinessCentralApiV20SalesOrdersApi(str, Enum):
    """The order status"""

    DRAFT = "Draft"
    IN_REVIEW = "In Review"
    OPEN = "Open"
    RELEASED = "Released"

    __str__ = str.__str__


StatusDynamics365BusinessCentralApiV20SalesOrdersApiOrStr: TypeAlias = Annotated[
    StatusDynamics365BusinessCentralApiV20SalesOrdersApi | str,
    open_enum_validator(StatusDynamics365BusinessCentralApiV20SalesOrdersApi),
]
