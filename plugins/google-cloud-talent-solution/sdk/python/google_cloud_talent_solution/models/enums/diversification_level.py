from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiversificationLevel(str, Enum):
    """Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified
    as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that
    only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other
    jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified."""

    DIVERSIFICATION_LEVEL_UNSPECIFIED = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
    DISABLED = "DISABLED"
    SIMPLE = "SIMPLE"
    ONE_PER_COMPANY = "ONE_PER_COMPANY"
    TWO_PER_COMPANY = "TWO_PER_COMPANY"
    MAX_THREE_PER_COMPANY = "MAX_THREE_PER_COMPANY"
    DIVERSIFY_BY_LOOSER_SIMILARITY = "DIVERSIFY_BY_LOOSER_SIMILARITY"

    __str__ = str.__str__


DiversificationLevelOrStr: TypeAlias = Annotated[DiversificationLevel | str, open_enum_validator(DiversificationLevel)]
