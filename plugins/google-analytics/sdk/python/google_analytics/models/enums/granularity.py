from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Granularity(str, Enum):
    """Required. The granularity used to interpret the ``startOffset`` and ``endOffset`` for the extended reporting date
    range for a cohort report."""

    GRANULARITY_UNSPECIFIED = "GRANULARITY_UNSPECIFIED"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"

    __str__ = str.__str__


GranularityOrStr: TypeAlias = Annotated[Granularity | str, open_enum_validator(Granularity)]
