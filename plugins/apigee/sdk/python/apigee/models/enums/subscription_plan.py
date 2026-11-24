from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionPlan(str, Enum):
    """Output only. Subscription plan that the customer has purchased. Output only."""

    SUBSCRIPTION_PLAN_UNSPECIFIED = "SUBSCRIPTION_PLAN_UNSPECIFIED"
    SUBSCRIPTION_2021 = "SUBSCRIPTION_2021"
    SUBSCRIPTION_2024 = "SUBSCRIPTION_2024"

    __str__ = str.__str__


SubscriptionPlanOrStr: TypeAlias = Annotated[SubscriptionPlan | str, open_enum_validator(SubscriptionPlan)]
