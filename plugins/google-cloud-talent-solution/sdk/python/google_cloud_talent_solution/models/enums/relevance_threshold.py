from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RelevanceThreshold(str, Enum):
    """Optional. The relevance threshold of the search results. Default to Google defined threshold, leveraging a
    balance of precision and recall to deliver both highly accurate results and comprehensive coverage of relevant
    information."""

    RELEVANCE_THRESHOLD_UNSPECIFIED = "RELEVANCE_THRESHOLD_UNSPECIFIED"
    LOWEST = "LOWEST"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


RelevanceThresholdOrStr: TypeAlias = Annotated[RelevanceThreshold | str, open_enum_validator(RelevanceThreshold)]
