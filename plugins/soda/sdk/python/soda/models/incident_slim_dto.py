from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.incident_status_dto import IncidentStatusDtoOrStr


class IncidentSlimDto(SdkBaseModel):
    cloud_url: str = Field(alias="cloudUrl")
    id: str
    name: str
    number: int
    status: IncidentStatusDtoOrStr


class IncidentSlimDtoDict(TypedDict):
    cloud_url: str
    id: str
    name: str
    number: int
    status: IncidentStatusDtoOrStr
