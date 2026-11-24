from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchSeatAssignmentsRequestAssignmentsItems(SdkBaseModel):
    seat_id: str = Field(alias="seatId")
    user_external_id: str | None = Field(alias="userExternalId")


class BatchSeatAssignmentsRequestAssignmentsItemsDict(TypedDict):
    seat_id: str
    user_external_id: str | None
