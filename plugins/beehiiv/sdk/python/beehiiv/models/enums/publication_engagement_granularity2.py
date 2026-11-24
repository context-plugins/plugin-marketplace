from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationEngagementGranularity2(str, Enum):
    """The granularity at which the engagement metrics are reported."""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


PublicationEngagementGranularity2OrStr: TypeAlias = Annotated[
    PublicationEngagementGranularity2 | str, open_enum_validator(PublicationEngagementGranularity2)
]
