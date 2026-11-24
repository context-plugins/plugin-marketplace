from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .check_result_agent_ready_scans_api import CheckResultAgentReadyScansApi, CheckResultAgentReadyScansApiDict


class PageResult(SdkBaseModel):
    """Per-page check results."""

    url: str
    checks: list[CheckResultAgentReadyScansApi]


class PageResultDict(TypedDict):
    url: str
    checks: list[CheckResultAgentReadyScansApiDict]
