from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingType1(str, Enum):
    """Billing type."""

    BILLING_TYPE_UNSPECIFIED = "BILLING_TYPE_UNSPECIFIED"
    PREPAID = "PREPAID"
    POSTPAID = "POSTPAID"

    __str__ = str.__str__


BillingType1OrStr: TypeAlias = Annotated[BillingType1 | str, open_enum_validator(BillingType1)]
