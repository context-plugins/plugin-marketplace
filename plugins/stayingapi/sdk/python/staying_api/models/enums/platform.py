from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform(str, Enum):
    AIRBNB = "airbnb"
    BOOKING = "booking"
    VRBO = "vrbo"
    EXPEDIA = "expedia"
    HOTELS = "hotels"
    GOOGLE = "google"
    TRIPADVISOR = "tripadvisor"

    __str__ = str.__str__


PlatformOrStr: TypeAlias = Annotated[Platform | str, open_enum_validator(Platform)]
