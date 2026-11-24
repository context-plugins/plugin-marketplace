from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExperimentalViewsDisplayIdDataGetParametersPeriodUnit(str, Enum):
    DAY = "day"
    MONTH = "month"
    YEAR = "year"

    __str__ = str.__str__


ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr: TypeAlias = Annotated[
    ExperimentalViewsDisplayIdDataGetParametersPeriodUnit | str,
    open_enum_validator(ExperimentalViewsDisplayIdDataGetParametersPeriodUnit),
]
