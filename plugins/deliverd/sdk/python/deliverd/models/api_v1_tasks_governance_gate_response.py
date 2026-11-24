from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .authority import Authority, AuthorityDict
from .blocker import Blocker, BlockerDict
from .score import Score, ScoreDict


class ApiV1TasksGovernanceGateResponse(SdkBaseModel):
    allowed: bool
    reason: str
    missing_controls: list[str] = Field(alias="missingControls")
    blockers: list[Blocker]
    scores: list[Score]
    task_id: UUID = Field(alias="taskId")
    authority: Authority | None


class ApiV1TasksGovernanceGateResponseDict(TypedDict):
    allowed: bool
    reason: str
    missing_controls: list[str]
    blockers: list[BlockerDict]
    scores: list[ScoreDict]
    task_id: UUID
    authority: AuthorityDict | None
