from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.consume_reservation_type import ConsumeReservationTypeOrStr


class ReservationAffinity2(SdkBaseModel):
    """Optional. Reservation Affinity for consuming Zonal reservation."""

    values: Optional[list[str]] = UNSET
    """Optional. Corresponds to the label values of reservation resource."""

    key: Optional[str] = UNSET
    """Optional. Corresponds to the label key of reservation resource."""

    consume_reservation_type: Optional[ConsumeReservationTypeOrStr] = Field(
        default=UNSET, alias="consumeReservationType"
    )
    """Optional. Type of reservation to consume"""


class ReservationAffinity2Dict(TypedDict):
    values: NotRequired[list[str]]
    key: NotRequired[str]
    consume_reservation_type: NotRequired[ConsumeReservationTypeOrStr]
