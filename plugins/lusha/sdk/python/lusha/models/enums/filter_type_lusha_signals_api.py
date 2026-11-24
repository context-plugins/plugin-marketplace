from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FilterTypeLushaSignalsApi(str, Enum):
    NEWS_EVENT_TYPES = "newsEventTypes"
    HIRING_BY_DEPARTMENTS = "hiringByDepartments"
    HIRING_BY_LOCATIONS = "hiringByLocations"
    INTENT_CATEGORIES = "intentCategories"

    __str__ = str.__str__


FilterTypeLushaSignalsApiOrStr: TypeAlias = Annotated[
    FilterTypeLushaSignalsApi | str, open_enum_validator(FilterTypeLushaSignalsApi)
]
