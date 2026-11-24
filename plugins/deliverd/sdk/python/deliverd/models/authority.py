from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.mode_deliverd_dev_tasks_api import ModeDeliverdDevTasksApiOrStr


class Authority(SdkBaseModel):
    action: str
    mode: ModeDeliverdDevTasksApiOrStr
    source: str
    reason: str
    agent_id: UUID | None = Field(alias="agentId")


class AuthorityDict(TypedDict):
    action: str
    mode: ModeDeliverdDevTasksApiOrStr
    source: str
    reason: str
    agent_id: UUID | None
