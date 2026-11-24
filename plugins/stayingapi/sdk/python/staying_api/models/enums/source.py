from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    """How the comparison was produced. Absent = google-aggregator (one Google Hotels leg). 'direct_fanout' = one real
    price call per listing id you supplied."""

    GOOGLE_AGGREGATOR = "google_aggregator"
    DIRECT_FANOUT = "direct_fanout"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]
