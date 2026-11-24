from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AggregateBy(str, Enum):
    """Defines how to aggregate results of the StartContentModeration request. Default aggregation option is TIMESTAMPS.
    SEGMENTS mode aggregates moderation labels over time."""

    TIMESTAMPS = "TIMESTAMPS"
    SEGMENTS = "SEGMENTS"

    __str__ = str.__str__


AggregateByOrStr: TypeAlias = Annotated[AggregateBy | str, open_enum_validator(AggregateBy)]
