from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisplayValues(str, Enum):
    """See `View data as (Comparative report)
    <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as>`__."""

    ACTUALS_ONLY = "actuals_only"
    ABSOLUTE_CHANGE = "absolute_change"
    PERCENTAGE_CHANGE = "percentage_change"
    ABSOLUTE_AND_PERCENTAGE = "absolute_and_percentage"

    __str__ = str.__str__


DisplayValuesOrStr: TypeAlias = Annotated[DisplayValues | str, open_enum_validator(DisplayValues)]
