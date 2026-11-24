from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConsumeReservationType(str, Enum):
    """Optional. Type of reservation to consume"""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NO_RESERVATION = "NO_RESERVATION"
    ANY_RESERVATION = "ANY_RESERVATION"
    SPECIFIC_RESERVATION = "SPECIFIC_RESERVATION"

    __str__ = str.__str__


ConsumeReservationTypeOrStr: TypeAlias = Annotated[
    ConsumeReservationType | str, open_enum_validator(ConsumeReservationType)
]
