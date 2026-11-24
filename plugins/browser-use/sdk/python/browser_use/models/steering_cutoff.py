from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class SteeringCutoff(SdkBaseModel):
    """Earliest accepted steer for one interrupted source run.

    The queue endpoint returns these compact boundaries separately from message rows so a remount can keep every
    interrupted transcript frozen without re-sending the full historical steering-message payload."""

    source_run_id: UUID = Field(alias="sourceRunId")
    created_at: RFC3339DateTime = Field(alias="createdAt")


class SteeringCutoffDict(TypedDict):
    source_run_id: UUID
    created_at: RFC3339DateTime
