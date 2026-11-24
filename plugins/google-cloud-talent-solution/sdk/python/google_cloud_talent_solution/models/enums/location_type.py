from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LocationType(str, Enum):
    """The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example,
    "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of
    LocationType.LOCALITY."""

    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    COUNTRY = "COUNTRY"
    ADMINISTRATIVE_AREA = "ADMINISTRATIVE_AREA"
    SUB_ADMINISTRATIVE_AREA = "SUB_ADMINISTRATIVE_AREA"
    LOCALITY = "LOCALITY"
    POSTAL_CODE = "POSTAL_CODE"
    SUB_LOCALITY = "SUB_LOCALITY"
    SUB_LOCALITY_1 = "SUB_LOCALITY_1"
    SUB_LOCALITY_2 = "SUB_LOCALITY_2"
    NEIGHBORHOOD = "NEIGHBORHOOD"
    STREET_ADDRESS = "STREET_ADDRESS"

    __str__ = str.__str__


LocationTypeOrStr: TypeAlias = Annotated[LocationType | str, open_enum_validator(LocationType)]
