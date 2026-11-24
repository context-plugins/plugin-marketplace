from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GeoIdType(str, Enum):
    STATE = "state"
    ZIP = "zip"
    CITY = "city"
    COUNTY_FIPS = "county_fips"
    COUNTRY = "country"

    __str__ = str.__str__


GeoIdTypeOrStr: TypeAlias = Annotated[GeoIdType | str, open_enum_validator(GeoIdType)]
