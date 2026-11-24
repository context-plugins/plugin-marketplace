from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DevCycleManagementProjectChangeRequestsApi(str, Enum):
    DRAFT = "draft"
    PENDING = "pending"
    APPROVED = "approved"
    APPLIED = "applied"
    REJECTED = "rejected"
    CANCELLED = "cancelled"

    __str__ = str.__str__


Status1DevCycleManagementProjectChangeRequestsApiOrStr: TypeAlias = Annotated[
    Status1DevCycleManagementProjectChangeRequestsApi | str,
    open_enum_validator(Status1DevCycleManagementProjectChangeRequestsApi),
]
