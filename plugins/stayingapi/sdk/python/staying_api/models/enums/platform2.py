from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform2(str, Enum):
    """DIRECT MODE ONLY. The platform this leg was priced on."""

    AIRBNB = "airbnb"
    BOOKING = "booking"
    VRBO = "vrbo"
    EXPEDIA = "expedia"
    HOTELS = "hotels"
    GOOGLE = "google"
    TRIPADVISOR = "tripadvisor"

    __str__ = str.__str__


Platform2OrStr: TypeAlias = Annotated[Platform2 | str, open_enum_validator(Platform2)]
