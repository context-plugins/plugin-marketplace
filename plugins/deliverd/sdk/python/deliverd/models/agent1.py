from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Agent1(SdkBaseModel):
    name: str | None
    provider: str | None
    external_id: str | None = Field(alias="externalId")


class Agent1Dict(TypedDict):
    name: str | None
    provider: str | None
    external_id: str | None
