from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationEngagementGranularity(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


PublicationEngagementGranularityOrStr: TypeAlias = Annotated[
    PublicationEngagementGranularity | str, open_enum_validator(PublicationEngagementGranularity)
]
