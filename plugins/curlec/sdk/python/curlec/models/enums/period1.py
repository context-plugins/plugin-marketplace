from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Period1(str, Enum):
    """Billing frequency unit. For daily, minimum interval is 7."""

    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    YEARLY = "yearly"

    __str__ = str.__str__


Period1OrStr: TypeAlias = Annotated[Period1 | str, open_enum_validator(Period1)]
