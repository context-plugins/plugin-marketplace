from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FulfillmentType(str, Enum):
    """Enum representing the fulfillment type for reimbursements in the Spend API."""

    ACH = "ACH"
    PAYROLL = "PAYROLL"

    __str__ = str.__str__


FulfillmentTypeOrStr: TypeAlias = Annotated[FulfillmentType | str, open_enum_validator(FulfillmentType)]
