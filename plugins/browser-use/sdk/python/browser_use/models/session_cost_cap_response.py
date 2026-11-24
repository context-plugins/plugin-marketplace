from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SessionCostCapResponse(SdkBaseModel):
    session_id: UUID = Field(alias="sessionId")
    max_cost_usd: str = Field(alias="maxCostUsd")


class SessionCostCapResponseDict(TypedDict):
    session_id: UUID
    max_cost_usd: str
