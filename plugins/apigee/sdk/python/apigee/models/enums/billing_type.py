from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingType(str, Enum):
    """Optional. Billing type of the Apigee organization. See `Apigee pricing
    <https://cloud.google.com/apigee/pricing>`__."""

    BILLING_TYPE_UNSPECIFIED = "BILLING_TYPE_UNSPECIFIED"
    SUBSCRIPTION = "SUBSCRIPTION"
    EVALUATION = "EVALUATION"
    PAYG = "PAYG"

    __str__ = str.__str__


BillingTypeOrStr: TypeAlias = Annotated[BillingType | str, open_enum_validator(BillingType)]
