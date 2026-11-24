from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerStateSeatAssignee(SdkBaseModel):
    id: str
    external_id: str = Field(alias="externalId")
    name: str | None
    email: str | None


class CustomerStateSeatAssigneeDict(TypedDict):
    id: str
    external_id: str
    name: str | None
    email: str | None
