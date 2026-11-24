from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlanRef(SdkBaseModel):
    id: str
    name: str | None
    external_id: str | None = Field(alias="externalId")


class PlanRefDict(TypedDict):
    id: str
    name: str | None
    external_id: str | None
