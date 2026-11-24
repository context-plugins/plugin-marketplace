from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionType(str, Enum):
    """Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee
    organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full
    subscription has been purchased). See `Apigee pricing <https://cloud.google.com/apigee/pricing/>`__."""

    SUBSCRIPTION_TYPE_UNSPECIFIED = "SUBSCRIPTION_TYPE_UNSPECIFIED"
    PAID = "PAID"
    TRIAL = "TRIAL"

    __str__ = str.__str__


SubscriptionTypeOrStr: TypeAlias = Annotated[SubscriptionType | str, open_enum_validator(SubscriptionType)]
