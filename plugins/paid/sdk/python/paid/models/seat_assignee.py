from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SeatAssignee(SdkBaseModel):
    id: str
    external_id: str = Field(alias="externalId")
    email: str | None


class SeatAssigneeDict(TypedDict):
    id: str
    external_id: str
    email: str | None
