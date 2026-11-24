from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FilterType1(str, Enum):
    NAMES = "names"
    SIZES = "sizes"
    REVENUES = "revenues"
    LOCATIONS = "locations"
    SICS = "sics"
    NAICS = "naics"
    INDUSTRIES_LABELS = "industriesLabels"
    INTENT_TOPICS = "intentTopics"
    TECHNOLOGIES = "technologies"

    __str__ = str.__str__


FilterType1OrStr: TypeAlias = Annotated[FilterType1 | str, open_enum_validator(FilterType1)]
