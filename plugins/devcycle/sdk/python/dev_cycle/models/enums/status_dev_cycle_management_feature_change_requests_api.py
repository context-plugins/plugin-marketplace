from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDevCycleManagementFeatureChangeRequestsApi(str, Enum):
    """Status of the Feature"""

    DRAFT = "draft"
    PENDING = "pending"
    APPROVED = "approved"
    APPLIED = "applied"
    REJECTED = "rejected"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusDevCycleManagementFeatureChangeRequestsApiOrStr: TypeAlias = Annotated[
    StatusDevCycleManagementFeatureChangeRequestsApi | str,
    open_enum_validator(StatusDevCycleManagementFeatureChangeRequestsApi),
]
