from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionAmazonForecastServiceWhatIfForecastApi(str, Enum):
    """The condition to apply. Valid values are EQUALS, NOT_EQUALS, LESS_THAN and GREATER_THAN."""

    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"

    __str__ = str.__str__


ConditionAmazonForecastServiceWhatIfForecastApiOrStr: TypeAlias = Annotated[
    ConditionAmazonForecastServiceWhatIfForecastApi | str,
    open_enum_validator(ConditionAmazonForecastServiceWhatIfForecastApi),
]
