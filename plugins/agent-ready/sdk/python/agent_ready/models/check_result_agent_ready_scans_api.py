from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1_agent_ready_scans_api import Status1AgentReadyScansApiOrStr


class CheckResultAgentReadyScansApi(SdkBaseModel):
    """Result of a single check."""

    check_id: str = Field(alias="checkId")
    name: str
    status: Status1AgentReadyScansApiOrStr
    """Outcome of a single check."""

    message: str
    how_to_fix: str | None = Field(alias="howToFix")
    details: dict[str, Any]


class CheckResultAgentReadyScansApiDict(TypedDict):
    check_id: str
    name: str
    status: Status1AgentReadyScansApiOrStr
    message: str
    how_to_fix: str | None
    details: dict[str, Any]
