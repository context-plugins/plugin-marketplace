from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResultType(str, Enum):
    """The discriminator property that determines which fields are populated in the 'result' object."""

    SECURITY_RISK = "security_risk"
    POTENTIAL_DAILY_SAVINGS = "potential_daily_savings"
    POTENTIAL_DAILY_SAVINGS_WITH_RECOMMENDATION = "potential_daily_savings_with_recommendation"
    POTENTIAL_DAILY_SAVINGS_WITH_CLUSTER_AGENT = "potential_daily_savings_with_cluster_agent"

    __str__ = str.__str__


ResultTypeOrStr: TypeAlias = Annotated[ResultType | str, open_enum_validator(ResultType)]
