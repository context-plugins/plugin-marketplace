from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AggregateBy1(str, Enum):
    """The aggregation method chosen for a GetContentModeration request."""

    TIMESTAMPS = "TIMESTAMPS"
    SEGMENTS = "SEGMENTS"

    __str__ = str.__str__


AggregateBy1OrStr: TypeAlias = Annotated[AggregateBy1 | str, open_enum_validator(AggregateBy1)]
