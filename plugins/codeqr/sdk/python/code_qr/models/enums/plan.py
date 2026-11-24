from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Plan(str, Enum):
    """The plan of the project."""

    FREE = "free"
    STARTER = "starter"
    PRO = "pro"
    BUSINESS = "business"
    SCALE = "scale"
    ENTERPRISE = "enterprise"

    __str__ = str.__str__


PlanOrStr: TypeAlias = Annotated[Plan | str, open_enum_validator(Plan)]
