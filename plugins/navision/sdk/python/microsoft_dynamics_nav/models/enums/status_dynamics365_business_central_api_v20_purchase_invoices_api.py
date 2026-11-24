from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi(str, Enum):
    DRAFT = "Draft"
    IN_REVIEW = "In Review"
    OPEN = "Open"
    PAID = "Paid"
    CANCELED = "Canceled"
    CORRECTIVE = "Corrective"

    __str__ = str.__str__


StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApiOrStr: TypeAlias = Annotated[
    StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi | str,
    open_enum_validator(StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi),
]
