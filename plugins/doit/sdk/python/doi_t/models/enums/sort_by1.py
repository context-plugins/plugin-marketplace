from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy1(str, Enum):
    DETECTION_TIME = "detection_time"
    RESOLVED_TIME = "resolved_time"
    ACCOUNT_ID = "account_id"
    REGION = "region"
    RESOURCE_CLASS = "resource_class"
    COST_ESTIMATION_POTENTIAL_SAVINGS = "cost_estimation_potential_savings"
    COST_ESTIMATION_POTENTIAL_INCREASED_COSTS = "cost_estimation_potential_increased_costs"
    COST_ESTIMATION_POTENTIAL_FREED_COMMITMENTS = "cost_estimation_potential_freed_commitments"
    COST_ESTIMATION_POTENTIAL_INCREASED_COMMITMENTS_REQUIRED = "cost_estimation_potential_increased_commitments_required"

    __str__ = str.__str__


SortBy1OrStr: TypeAlias = Annotated[SortBy1 | str, open_enum_validator(SortBy1)]
