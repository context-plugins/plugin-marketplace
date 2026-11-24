from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingPeriod(str, Enum):
    """Frequency at which the customer will be billed."""

    BILLING_PERIOD_UNSPECIFIED = "BILLING_PERIOD_UNSPECIFIED"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"

    __str__ = str.__str__


BillingPeriodOrStr: TypeAlias = Annotated[BillingPeriod | str, open_enum_validator(BillingPeriod)]
