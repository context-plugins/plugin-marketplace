from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResponseAggregationType(str, Enum):
    """How the results were aggregated."""

    AUTO = "AUTO"
    BY_PROPERTY = "BY_PROPERTY"
    BY_PAGE = "BY_PAGE"
    BY_NEWS_SHOWCASE_PANEL = "BY_NEWS_SHOWCASE_PANEL"

    __str__ = str.__str__


ResponseAggregationTypeOrStr: TypeAlias = Annotated[
    ResponseAggregationType | str, open_enum_validator(ResponseAggregationType)
]
