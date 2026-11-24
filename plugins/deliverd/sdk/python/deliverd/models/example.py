from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.direction import DirectionOrStr
from .enums.from_model import FromModelOrStr
from .enums.to import ToOrStr


class Example(SdkBaseModel):
    id: UUID
    created_at: str = Field(alias="createdAt")
    action_id: str = Field(alias="actionId")
    agent_id: str | None = Field(alias="agentId")
    environment: str | None
    from_: FromModelOrStr = Field(alias="from")
    to: ToOrStr
    from_rule: str | None = Field(alias="fromRule")
    to_rule: str | None = Field(alias="toRule")
    outcome: str | None
    direction: DirectionOrStr


class ExampleDict(TypedDict):
    id: UUID
    created_at: str
    action_id: str
    agent_id: str | None
    environment: str | None
    from_: FromModelOrStr
    to: ToOrStr
    from_rule: str | None
    to_rule: str | None
    outcome: str | None
    direction: DirectionOrStr
