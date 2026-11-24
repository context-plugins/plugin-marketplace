from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanId(str, Enum):
    FREE = "free"
    MONTHLY = "monthly"
    ANNUAL = "annual"
    ENTERPRISE = "enterprise"

    __str__ = str.__str__


PlanIdOrStr: TypeAlias = Annotated[PlanId | str, open_enum_validator(PlanId)]
