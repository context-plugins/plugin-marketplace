from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptimizationGoal1(str, Enum):
    LINK_CLICKS = "LINK_CLICKS"
    IMPRESSIONS = "IMPRESSIONS"
    REACH = "REACH"
    LANDING_PAGE_VIEWS = "LANDING_PAGE_VIEWS"
    OFFSITE_CONVERSIONS = "OFFSITE_CONVERSIONS"
    LEAD_GENERATION = "LEAD_GENERATION"
    APP_INSTALLS = "APP_INSTALLS"
    VALUE = "VALUE"

    __str__ = str.__str__


OptimizationGoal1OrStr: TypeAlias = Annotated[OptimizationGoal1 | str, open_enum_validator(OptimizationGoal1)]
