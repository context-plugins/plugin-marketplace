from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Plan(str, Enum):
    FREE = "free"
    STARTER = "starter"
    PRO = "pro"
    ENTERPRISE = "enterprise"

    __str__ = str.__str__


PlanOrStr: TypeAlias = Annotated[Plan | str, open_enum_validator(Plan)]
