from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Score(SdkBaseModel):
    control: str
    passed: bool
    reason: str
    evidence_id: UUID | None = Field(alias="evidenceId")


class ScoreDict(TypedDict):
    control: str
    passed: bool
    reason: str
    evidence_id: UUID | None
