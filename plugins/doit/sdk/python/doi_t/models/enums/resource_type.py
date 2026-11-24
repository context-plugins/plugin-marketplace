from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResourceType(str, Enum):
    ALERTS = "alerts"
    BUDGETS = "budgets"
    REPORTS = "reports"
    ALLOCATIONS = "allocations"

    __str__ = str.__str__


ResourceTypeOrStr: TypeAlias = Annotated[ResourceType | str, open_enum_validator(ResourceType)]
