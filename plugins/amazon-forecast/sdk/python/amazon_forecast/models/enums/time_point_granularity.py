from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimePointGranularity(str, Enum):
    """To create an Explainability for all time points in your forecast horizon, use ALL. To create an Explainability
    for specific time points in your forecast horizon, use SPECIFIC. Specify time points with the StartDateTime and
    EndDateTime parameters within the CreateExplainability operation."""

    ALL = "ALL"
    SPECIFIC = "SPECIFIC"

    __str__ = str.__str__


TimePointGranularityOrStr: TypeAlias = Annotated[TimePointGranularity | str, open_enum_validator(TimePointGranularity)]
