from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Timeline(SdkBaseModel):
    event: str
    actor: str
    actor_type: str = Field(alias="actorType")
    resource_type: str | None = Field(alias="resourceType")
    resource_id: str | None = Field(alias="resourceId")
    at: str


class TimelineDict(TypedDict):
    event: str
    actor: str
    actor_type: str
    resource_type: str | None
    resource_id: str | None
    at: str
