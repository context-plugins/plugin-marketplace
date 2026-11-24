from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Seats(SdkBaseModel):
    """Licensing seat counts for a subscription."""

    licensed_number_of_seats: Optional[int] = Field(default=UNSET, alias="licensedNumberOfSeats")
    """The number of seats that are currently in use or assigned to users."""

    maximum_number_of_seats: Optional[int] = Field(default=UNSET, alias="maximumNumberOfSeats")
    """The maximum number of seats that can be used. Applies to flexible (non-commitment) plans."""

    number_of_seats: Optional[int] = Field(default=UNSET, alias="numberOfSeats")
    """The number of committed seats. Applies to annual commitment plans."""


class SeatsDict(TypedDict):
    licensed_number_of_seats: NotRequired[int]
    maximum_number_of_seats: NotRequired[int]
    number_of_seats: NotRequired[int]
