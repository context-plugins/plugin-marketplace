from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonDoiTInsightsApi(str, Enum):
    """The reason for dismissal."""

    NOT_RELEVANT = "not relevant"
    NOT_ENOUGH_INFORMATION = "not enough information"
    NOT_WORTH_THE_EFFORT = "not worth the effort"
    INACCURATE_OPTIMIZATION_OPPORTUNITIES = "inaccurate optimization opportunities"

    __str__ = str.__str__


ReasonDoiTInsightsApiOrStr: TypeAlias = Annotated[
    ReasonDoiTInsightsApi | str, open_enum_validator(ReasonDoiTInsightsApi)
]
