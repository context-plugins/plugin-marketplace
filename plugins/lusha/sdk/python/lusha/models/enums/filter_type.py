from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FilterType(str, Enum):
    DEPARTMENTS = "departments"
    SENIORITY = "seniority"
    EXISTING_DATA_POINTS = "existingDataPoints"
    COUNTRIES = "countries"
    LOCATIONS = "locations"

    __str__ = str.__str__


FilterTypeOrStr: TypeAlias = Annotated[FilterType | str, open_enum_validator(FilterType)]
